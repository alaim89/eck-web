# SEO Inventory & Audit Report

Date: 2026-04-25  
Scope: Next.js App Router codebase audit only (no code changes)

## 1) Executive summary

**Current SEO maturity level:** **Intermediate (technical foundation present, execution consistency gaps).**

**Strongest areas**
- Centralized metadata helper (`getMetadata`) with canonical, Open Graph, Twitter and robots defaults.
- App Router native `robots.ts` and `sitemap.ts` exist and are wired.
- Dynamic SEO coverage exists for `/solutions/[slug]` and `/blog/[slug]` via `generateMetadata`.
- Internal linking is generally strong from header, footer, solutions index and case-study index pages.

**Weakest areas**
- `/blog/[slug]` handles missing slugs with a rendered message instead of `notFound()`, which likely returns HTTP 200 for invalid blog URLs (indexation risk).
- Sitemap includes legal pages explicitly marked `noindex` (conflicting indexation signals).
- JSON-LD coverage is partial and one article schema URL field is not canonical to the actual slug URL.
- Large parts of key pages are client components, increasing hydration/JS overhead for SEO-relevant content.
- No dedicated SEO test suite (metadata/canonical/robots/sitemap/JSON-LD assertions are missing).

**Overall rating:** **6.4 / 10**

---

## 2) Public route inventory

> Note: "Indexable?" reflects current implementation intent + obvious technical behavior, not business desirability.

| Route | Purpose | Indexable? | Current SEO status | Notes |
|---|---|---:|---|---|
| `/` | Main commercial landing page | Yes | Good | Custom metadata + canonical present. |
| `/solutions` | Solution hub/index | Yes | Good | Strong internal linking to detail pages. |
| `/solutions/[slug]` | Individual service pages | Yes | Good | `generateStaticParams`, metadata, canonical, FAQ JSON-LD present. |
| `/case-studies` | Case study index | Yes | Good | Links all listed studies. |
| `/case-studies/*` (12 routes) | Individual case studies | Yes | Fair | Metadata/canonical present; no case-study schema. |
| `/blog` | Blog index | Yes | Fair | Metadata present; page is client component. |
| `/blog/[slug]` | Blog article pages | Yes (intended) | Weak | Missing-slug handling likely 200 instead of 404; article JSON-LD URL is non-canonical (`/blog`). |
| `/kontakt` | Lead/contact page | Yes | Fair | Metadata present, but page is client-heavy. |
| `/support` | Existing customer/support portal entry | Yes (currently) | Fair | Potential intent mismatch for organic acquisition page. |
| `/recruiter` | Recruiter/project intake page | Yes | Fair | Metadata present; niche intent page in main crawl set. |
| `/impressum` | Legal imprint | **No** | Fair | `robots: noindex,follow`, but appears in sitemap (signal conflict). |
| `/datenschutz` | Privacy policy | **No** | Fair | `robots: noindex,follow`, but appears in sitemap (signal conflict). |
| `/404` (`not-found`) | Not found UI | No | Good | Explicit `noindex`. |
| `/admin/*` | Admin/private app | No | Mixed | Blocked in robots + middleware protected, but no page-level noindex metadata. |
| `/api/*` | API endpoints | No | Good | Disallowed in robots; not part of content index. |

---

## 3) Technical SEO findings

| Issue | Impact | Evidence | Priority | Recommendation |
|---|---|---|---|---|
| Invalid blog slugs likely return 200 content page instead of 404 | Crawl waste, soft-404 indexation risk, duplicate thin URLs | `/blog/[slug]/page.tsx` returns a rendered fallback block and does not call `notFound()` when `post` is missing | **High** | Use `notFound()` for unknown blog slugs; ensure HTTP 404 + noindex semantics for missing posts. |
| Sitemap includes legal pages set to noindex | Conflicting signals (discoverable via sitemap but instructed not to index) | `/sitemap.ts` contains `/impressum` + `/datenschutz`; those pages set `robots: { index: false }` | **High** | Keep legal pages crawlable via links if needed, but exclude noindex pages from sitemap. |
| Article JSON-LD URL field is inaccurate | Structured data quality degradation; weaker entity/page association | `BlogPostContent` passes `url: '/blog'` to article schema for all posts | **High** | Pass full canonical post URL (`/blog/<slug>` absolute URL) into Article schema. |
| Blog data duplication source of truth mismatch | Metadata/content drift risk between route-level and shared data file | `app/blog/[slug]/page.tsx` defines local `BLOG_POSTS` object while `/blog` uses `lib/blog-data.ts` | **Medium** | Consolidate to one content source for post title/date/slug/description + metadata generation. |
| Canonical root title includes brand twice on homepage | Title formatting consistency issue; reduced snippet quality | `/app/page.tsx` passes a title already containing brand, while helper appends template | **Medium** | Pass topic title only to helper or bypass template intentionally for homepage with explicit rationale. |
| `lastModified` values in sitemap mostly generated with `new Date()` | Can reduce trust in freshness signal | `sitemap.ts` sets many entries to current build/runtime date rather than content update date | **Medium** | Use real content timestamps where available (especially case studies/solutions). |
| Admin routes rely on middleware + robots only | Potential accidental indexation if robots ignored and links exposed | `/admin/*` has no page metadata noindex; protection is middleware redirect + robots disallow | **Medium** | Add explicit `noindex,nofollow` metadata for admin layout/pages as defense-in-depth. |
| Organization/Service JSON-LD helpers unused | Missed rich-result opportunities | `lib/jsonld.ts` has unused org/service helpers | **Low** | Add organization schema on homepage/layout and service schema on key commercial pages. |

---

## 4) Structural SEO findings

| Issue | Impact | Evidence | Priority | Recommendation |
|---|---|---|---|---|
| Blog content model split between index and detail route | Internal consistency/maintainability risk; potential orphan/metadata mismatch over time | Blog index imports `lib/blog-data.ts`; blog detail uses separate in-file object | **High** | Single canonical content model with shared fields used by both listing and detail routes. |
| Potential thin-intent pages in main indexable set (`/support`, `/recruiter`) | Dilutes topical focus if not mapped to search intent strategy | Both are indexable and listed in sitemap | **Medium** | Decide whether they are organic landing pages; if not, consider noindex or stronger content depth and intent targeting. |
| Case studies are individually optimized but lack structured taxonomy pages | Limits thematic clustering and long-tail capture | Case studies exist as flat list + detail pages only | **Medium** | Add category/tag architecture (e.g., Security, M365, Azure) and internal hub pages. |
| Heading hierarchy appears mostly valid, but many UI-heavy sections use repeated generic headings | Potential semantic dilution | Multiple pages repeat broad CTA headings rather than intent-specific variants | **Low** | Make section headings more query-intent explicit and unique on key landing pages. |
| Orphan risk currently low for listed routes, but depends on hardcoded nav arrays | Growth risk when new slugs are added but not surfaced | Header/solutions list rely on arrays and translation objects | **Low** | Add link graph checks in CI to detect published-but-unlinked pages. |

---

## 5) Performance SEO risks

| Issue | Impact | Evidence | Priority | Recommendation |
|---|---|---|---|---|
| High client-component usage on key SEO pages | Higher JS/hydration cost; potential LCP/INP regression | Landing, blog index, blog post, kontakt use `'use client'` large trees | **High** | Move static/render-only sections to server components; isolate interactivity into small client islands. |
| External blog images via Next/Image with no allowed remote patterns | Image load/runtime errors and broken media risk | `BlogContent` and `BlogPostContent` use `picsum.photos`; `next.config.ts` has `images.remotePatterns: []` | **High** | Allow explicit remote domains or host images locally/CDN under same domain. |
| Heavy visual effects/animations on core content | Potential LCP/CLS/INP pressure on slower devices | Extensive `motion` animation usage and large visual blocks on primary templates | **Medium** | Reduce animation scope above the fold; respect reduced-motion and defer non-critical effects. |
| Third-party scripts and trackers in global layout | Possible render/main-thread overhead | GA script + web-vitals + visitor tracker initialized globally | **Medium** | Keep consent-gated loading; audit script timings and long tasks in Lighthouse/Web Vitals pipeline. |
| Fill images rely on container sizing correctness | CLS risk if container dimensions shift across breakpoints | Multiple `<Image fill>` usages in blog cards/hero | **Low** | Keep stable aspect-ratio wrappers (already partly done) and verify on mobile breakpoints. |

---

## 6) Accessibility SEO risks

| Issue | Impact | Evidence | Priority | Recommendation |
|---|---|---|---|---|
| Icon-only share buttons without accessible names | Accessibility issue + reduced clarity for assistive tech | Blog post share buttons contain only icons, no `aria-label`/text | **High** | Add explicit accessible labels (`aria-label="Auf LinkedIn teilen"`, etc.). |
| Navigation semantics could be improved in header | Landmark clarity can improve screen-reader crawl/navigation | Top header uses `<nav>` root but lacks explicit `aria-label` for main navigation | **Medium** | Add `aria-label` and ensure clear landmark naming consistency. |
| Contrast may be risky in some light gray text on white backgrounds | Readability/UX risk impacting engagement signals | Frequent use of gray-400/500 on white for UI labels | **Medium** | Run automated contrast checks and tune token palette for WCAG AA. |
| Focus states inconsistent across controls | Keyboard discoverability and UX risk | Some links/buttons have focus-visible ring; others rely on hover only | **Medium** | Standardize focus-visible treatment on all actionable elements. |
| Alt text quality mostly acceptable but could be more descriptive on generic imagery | Missed contextual relevance opportunity | Blog images use title as alt (acceptable but sometimes generic) | **Low** | Use intent-specific descriptive alt text where image conveys unique context. |

---

## 7) Organizational SEO gaps

| Gap | Why it matters | Recommendation | Priority |
|---|---|---|---|
| No visible keyword map per route in repository | Content can drift from target queries and cannibalize | Convert the provided keyword set into a maintained keyword-to-URL map (primary + secondary intent + SERP type) in docs. | **High** |
| No documented indexing policy by route class | Inconsistent index/noindex decisions (e.g., legal/support/recruiter) | Define indexing policy matrix for marketing, legal, utility, admin routes. | **High** |
| No SEO test strategy in CI | Regressions in metadata/canonicals/sitemap can ship silently | Add lightweight SEO regression tests and schema validation checks. | **High** |
| No ownership model for SEO fields | Metadata quality degrades without clear accountability | Assign content + technical SEO owners per template type. | **Medium** |
| No monitoring runbook noted (GSC, CWV, crawl errors) | Slow detection of ranking/indexing issues | Define monthly SEO ops cadence: GSC coverage, CWV, top pages, crawl anomalies. | **Medium** |

---

### 7.1) Provided keyword set (from stakeholder) and initial clustering

> Source note: The following keywords were provided externally and are not yet represented as a formal keyword map artifact in the repository.

#### A) Hybrid / Infrastruktur
- hybrid it infrastruktur linux und microsoft
- hybride it infrastruktur betreuung
- beratung hybride it infrastruktur
- hybrid cloud transformation & migration
- hybrid cloud managed service
- azure hybrid betreuung

#### B) Microsoft 365 / Compliance / Security
- microsoft 365 managed service unternehmen
- managed microsoft 365 compliance & security
- microsoft 365 kontinuierliche betreuung
- microsoft 365 compliance betreuung

#### C) Security / Backup / Recovery / Governance
- endpoint & firewall
- backup und disaster recovery betreuung
- it sicherheitsbetreuung unternehmen
- it-sicherheit für kritis umgebungen *(vermutlich: „kritische umgebungen“)*
- it-governance und risikomanagement für geschäftsführer

#### D) Managed Services / Betrieb / Führung
- it-support für kleine und mittlere unternehmen
- managed it-dienstleistungen für kmu
- it professional services mit festen slas
- strategische it betreuung unternehmen
- externer it verantwortlicher

#### Gap status against current information architecture
- The keyword set aligns strongly with existing `/solutions/[slug]` service pages.
- The repository currently lacks an explicit documented mapping from each keyword cluster to exactly one primary landing URL, secondary supporting URLs, and internal-link anchors.
- Immediate next step: create a canonical keyword-to-route matrix (primary keyword, supporting variants, target URL, intent type, KPI).

---

## 8) Recommended roadmap

### Quick wins (1–2 weeks)
1. Fix blog unknown-slug handling to true 404 behavior (`notFound()`).
2. Remove noindex legal pages from sitemap.
3. Correct article JSON-LD URL per post canonical.
4. Add `aria-label` on icon-only share/action buttons.
5. Add explicit noindex metadata for admin surface as defense-in-depth.
6. Convert provided keywords into a maintained keyword map with one primary keyword per indexable page.

### Medium effort (2–6 weeks)
1. Consolidate blog content source into one model used by listing, detail, metadata, and sitemap.
2. Improve title hygiene policy (brand template application consistency).
3. Reduce client rendering footprint for SEO-critical templates.
4. Add missing organization/service structured data on relevant templates.
5. Formalize indexability policy for utility pages (`support`, `recruiter`, legal).

### Strategic work (6+ weeks)
1. Build a keyword-intent map and content cluster architecture (solutions + case-study taxonomy + blog hubs).
2. Introduce SEO QA pipeline (metadata snapshots, crawl checks, schema tests, Lighthouse budgets).
3. Establish SEO observability stack (GSC + analytics + CWV alerting + periodic log/crawl analysis).

---

## 9) Suggested future tests (recommendations only)

- **Metadata smoke tests**
  - Every indexable route returns non-empty title/description and correct canonical host.
- **Sitemap tests**
  - Sitemap contains all indexable pages and excludes noindex/admin/api/private pages.
- **Robots tests**
  - Validate disallow rules and sitemap declaration; ensure private/admin/api rules remain intact.
- **JSON-LD validation tests**
  - Validate schema presence and required fields for article/faq/organization/service templates.
- **Status code tests**
  - Unknown dynamic slugs return 404 (not soft-404 content).
- **Internal link integrity checks**
  - No broken internal links; all published slugs reachable from at least one crawl path.
- **Accessibility smoke tests**
  - Landmark presence, icon-button labels, focus visibility, and contrast checks.
- **Performance budget tests**
  - LCP/INP/CLS thresholds for `/`, `/solutions`, `/blog`, key detail pages.

---

## 10) Final rating

- **Technical SEO rating:** **6.5 / 10**
- **Content/intent rating:** **6.0 / 10**
- **Performance SEO rating:** **5.8 / 10**
- **Accessibility SEO rating:** **6.2 / 10**
- **Organizational SEO rating:** **4.8 / 10**
- **Confidence level:** **Medium-High (code-level evidence strong; runtime validation limited where local dev server did not stay available during this audit).**
