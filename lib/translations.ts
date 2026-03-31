export type Language = 'en' | 'de' | 'es';

export const translations = {
  en: {
    nav: {
      risk: "The Risk",
      solutions: "Solutions",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      getAudit: "Get an Audit",
      megaMenu: {
        core: "Core Offering",
        managedOps: "Managed IT Operations",
        managedOpsDesc: "We operate your IT reliably so your business runs without interruption.",
        coManaged: "Co-Managed IT",
        coManagedDesc: "Empower your internal team with expert support and enterprise tools.",
        pricingLink: "View predictable pricing",
        securityBackup: "Security & Backup",
        cybersecurity: "Cybersecurity Protection",
        cybersecurityDesc: "Protect your business from threats before they cause damage.",
        backup: "Managed Backup",
        backupDesc: "Automatic backups that ensure no data is ever lost.",
        infrastructure: "Infrastructure",
        network: "Network Management",
        networkDesc: "Ensure fast, reliable internet so your team never stops working.",
        hardware: "Hardware Lifecycle",
        hardwareDesc: "Keep your team productive with up-to-date, reliable equipment.",
        migration: "Migration & Projects",
        m365Migration: "Microsoft 365 Migration",
        m365MigrationDesc: "Move to Microsoft 365 without downtime or data loss.",
        azureMigration: "Azure Migration",
        azureMigrationDesc: "Securely move your infrastructure to Azure with full control.",
        entryPoints: "Entry Points",
        riskAudit: "IT Risk Audit",
        riskAuditDesc: "Identify and fix hidden vulnerabilities before they become costly.",
        roadmap: "Strategic IT Roadmap",
        roadmapDesc: "Align your technology investments with your business growth goals.",
      }
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      rights: "Ecksolution-IT Managed Services. All rights reserved.",
    },
    solutions: {
      "it-support-for-businesses": {
        title: "IT Support for Businesses",
        hero: "Reliable IT Support That Scales With Your Business.",
        description: "Stop worrying about technical glitches. Our proactive IT support ensures your systems are always up, secure, and performing at their best.",
        problem: {
          title: "The Cost of Unreliable IT",
          points: [
            "Frequent downtime disrupting employee productivity",
            "Slow response times from current IT providers",
            "Hidden security vulnerabilities putting data at risk",
            "Unpredictable IT costs making budgeting impossible"
          ]
        },
        solution: {
          title: "Proactive Business IT Support",
          points: [
            "24/7 proactive monitoring to catch issues early",
            "Fast, professional helpdesk support for your team",
            "Regular security audits and patch management",
            "Strategic IT consulting to align tech with growth"
          ]
        },
        results: [
          { metric: "99.9%", label: "System Uptime" },
          { metric: "15min", label: "Avg. Response Time" },
          { metric: "30%", label: "Cost Reduction" }
        ],
        process: {
          analysis: "We audit your current infrastructure and identify pain points.",
          implementation: "We deploy our monitoring tools and stabilize your environment.",
          operations: "We provide ongoing support and continuous optimization."
        },
        caseStudy: {
          companyType: "Professional Services",
          title: "Stabilizing IT for a Growing Law Firm",
          situation: "A law firm with 50+ staff was struggling with frequent server crashes and slow remote access.",
          problem: "Their previous IT provider was reactive, only fixing things after they broke, leading to billable hour losses.",
          decisionPoint: "They needed a partner who would take full responsibility for their uptime.",
          solution: "We implemented a managed IT support plan with 24/7 monitoring and upgraded their remote access infrastructure.",
          result: "Zero unscheduled downtime in the first 12 months and a 40% increase in remote work efficiency.",
          slug: "managed-it-operations"
        }
      },
      "microsoft-365-services": {
        title: "Microsoft 365 Services",
        hero: "Maximize Your Productivity with Managed Microsoft 365.",
        description: "Get more out of your Microsoft 365 investment. We handle the migration, security, and management so your team can collaborate without limits.",
        problem: {
          title: "Microsoft 365 Challenges",
          points: [
            "Complex migrations leading to data loss or downtime",
            "Misconfigured security settings leaving data exposed",
            "Underutilized features resulting in wasted license costs",
            "Lack of expert support for advanced M365 features"
          ]
        },
        solution: {
          title: "Expert M365 Management",
          points: [
            "Seamless, zero-downtime migration to Microsoft 365",
            "Advanced security configuration (MFA, Conditional Access)",
            "Ongoing license optimization and user management",
            "Expert support for Teams, SharePoint, and OneDrive"
          ]
        },
        results: [
          { metric: "100%", label: "Data Integrity" },
          { metric: "25%", label: "License Savings" },
          { metric: "24/7", label: "Expert Support" }
        ],
        process: {
          analysis: "We assess your current mail and file systems for migration readiness.",
          implementation: "We execute a phased migration with zero impact on users.",
          operations: "We manage and secure your environment for long-term success."
        },
        caseStudy: {
          companyType: "Manufacturing",
          title: "Modernizing Collaboration for a Global Manufacturer",
          situation: "A manufacturer was using outdated on-premise email and fragmented file shares.",
          problem: "Collaboration between global sites was difficult, and security was inconsistent.",
          decisionPoint: "They needed a unified, secure cloud platform for all employees.",
          solution: "We migrated 500+ users to Microsoft 365 and implemented SharePoint for global document management.",
          result: "Improved collaboration efficiency and centralized security control across all locations.",
          slug: "microsoft-365-migration"
        }
      },
      "azure-hybrid-infrastructure": {
        title: "Azure & Hybrid Infrastructure",
        hero: "Build a Resilient, Scalable Infrastructure with Azure.",
        description: "Modernize your data center with Azure. We design and manage hybrid cloud environments that provide the flexibility and security your business demands.",
        problem: {
          title: "Infrastructure Limitations",
          points: [
            "Aging on-premise hardware that is expensive to maintain",
            "Lack of scalability for growing business workloads",
            "Complex management of hybrid cloud environments",
            "Inadequate disaster recovery for critical systems"
          ]
        },
        solution: {
          title: "Managed Azure Solutions",
          points: [
            "Strategic Azure design and cloud migration",
            "Seamless integration between on-premise and cloud",
            "Continuous cost optimization and performance tuning",
            "Enterprise-grade disaster recovery in the cloud"
          ]
        },
        results: [
          { metric: "40%", label: "Infrastructure Savings" },
          { metric: "99.99%", label: "Cloud Availability" },
          { metric: "Instant", label: "Scalability" }
        ],
        process: {
          analysis: "We evaluate your current workloads for cloud suitability.",
          implementation: "We build and migrate your infrastructure to a secure Azure environment.",
          operations: "We provide 24/7 management and optimization of your cloud resources."
        },
        caseStudy: {
          companyType: "E-commerce",
          title: "Scaling for Growth with Azure Hybrid Cloud",
          situation: "An e-commerce company was outgrowing its local data center capacity.",
          problem: "Seasonal traffic spikes were causing site slowdowns and lost sales.",
          decisionPoint: "They needed an infrastructure that could scale instantly with demand.",
          solution: "We implemented a hybrid Azure environment that automatically scales during peak periods.",
          result: "100% uptime during peak sales events and a 30% reduction in annual hosting costs.",
          slug: "azure-cloud-infrastructure"
        }
      },
      "backup-and-security": {
        title: "Backup & Security",
        hero: "Protect Your Business Data with Multi-Layered Security.",
        description: "Don't let a cyberattack or data loss stop your business. Our managed backup and security services provide total peace of mind.",
        problem: {
          title: "The Threat Landscape",
          points: [
            "Rising ransomware attacks targeting small businesses",
            "Unreliable backups that fail when you need them most",
            "Human error leading to accidental data deletion",
            "Lack of visibility into security threats and risks"
          ]
        },
        solution: {
          title: "Total Data Protection",
          points: [
            "Immutable, off-site backups that can't be deleted",
            "Advanced endpoint protection and threat detection",
            "Regular backup testing and recovery drills",
            "24/7 security monitoring and incident response"
          ]
        },
        results: [
          { metric: "0", label: "Data Loss Incidents" },
          { metric: "100%", label: "Recovery Success" },
          { metric: "24/7", label: "Threat Monitoring" }
        ],
        process: {
          analysis: "We identify your critical data and assess your current security posture.",
          implementation: "We deploy our multi-layered security and backup stack.",
          operations: "We continuously monitor and test your protection for total reliability."
        },
        caseStudy: {
          companyType: "Financial Services",
          title: "Recovering from Ransomware with Managed Backup",
          situation: "A financial services firm was hit by a sophisticated ransomware attack.",
          problem: "Their internal backups were encrypted by the attackers, leaving them with no data.",
          decisionPoint: "They needed a backup solution that was truly isolated and immutable.",
          solution: "We had previously implemented our managed backup service with off-site immutability.",
          result: "We restored all critical systems within 4 hours with zero data loss and no ransom paid.",
          slug: "managed-backup"
        }
      }
    },
    hero: {
      badge: "Managed IT Operations",
      headline: "Stop managing IT chaos. We are your entire IT department.",
      subheadline: "Total IT accountability. We operate your infrastructure reliably so your business runs without interruption. No finger-pointing, just results.",
      cta: "Discuss Your Needs",
      secondaryCta: "View Case Studies",
    },
    problem: {
      badge: "The Problem",
      headline: "Bad IT bleeds margins.",
      subheadline: "When technology fails, business stops. Most IT providers focus on tickets; we focus on preventing them.",
      cards: [
        {
          title: "Unpredictable Downtime",
          description: "Every minute of system failure is lost revenue and frustrated employees.",
        },
        {
          title: "Security Vulnerabilities",
          description: "Outdated systems are an open door for ransomware and data breaches.",
        },
        {
          title: "Hidden IT Costs",
          description: "Variable invoices and surprise hardware failures destroy budget planning.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      headline: "Architecting Reliability.",
      subheadline: "We don't just 'fix' things. We build and operate a stable foundation for your growth.",
      points: [
        {
          title: "Uncompromising Accountability",
          description: "We take full responsibility for your entire technology stack. No excuses.",
        },
        {
          title: "Predictive Infrastructure",
          description: "We monitor and maintain systems proactively to stop issues before they happen.",
        },
        {
          title: "Fortified Security Posture",
          description: "Enterprise-grade protection scaled for your business needs.",
        },
      ],
    },
    results: {
      headline: "Clear Business Outcomes",
      subheadline: "What you can expect when you partner with us.",
      cards: [
        { metric: "15min", label: "Response Time" },
        { metric: "100%", label: "Accountability" },
        { metric: "8+", label: "Years Experience" },
        { metric: "24/7", label: "Monitoring" },
      ],
    },
    services: {
      badge: "Our Services",
      headline: "Comprehensive IT Responsibility.",
      subheadline: "We provide the full stack of IT services required for modern business operations.",
      items: [
        {
          title: "Managed IT Services",
          description: "Full-scale IT management, from helpdesk to strategic planning.",
          link: "/solutions/managed-it-services"
        },
        {
          title: "IT Support for Businesses",
          description: "Fast, reliable support for your team's daily technology needs.",
          link: "/solutions/it-support-for-businesses"
        },
        {
          title: "Microsoft 365 Services",
          description: "Expert management and security for your modern workplace.",
          link: "/solutions/microsoft-365-services"
        },
        {
          title: "Azure & Hybrid Infrastructure",
          description: "Scalable cloud and hybrid solutions for growing companies.",
          link: "/solutions/azure-hybrid-infrastructure"
        },
        {
          title: "Backup & Security",
          description: "Bulletproof data protection and enterprise-grade security.",
          link: "/solutions/backup-security"
        }
      ]
    },
    process: {
      badge: "Our Process",
      headline: "A Proven Path to Stability.",
      steps: [
        {
          number: "01",
          title: "Analysis",
          description: "We audit your current infrastructure, identify single points of failure, and document every system.",
        },
        {
          number: "02",
          title: "Implementation",
          description: "We deploy our management agents, standardize your security, and take over vendor relationships.",
        },
        {
          number: "03",
          title: "Operations",
          description: "We provide 24/7 monitoring, unlimited helpdesk support, and proactive maintenance.",
        },
      ],
    },
    faq: {
      headline: "Frequently Asked Questions",
      items: [
        {
          question: "How fast do you respond to critical issues?",
          answer: "Our average response time for critical issues is under 15 minutes. We prioritize business-halting problems to ensure minimal disruption.",
        },
        {
          question: "Do you replace my internal IT team?",
          answer: "We can either act as your complete IT department or work alongside your existing team (Co-Managed IT) to provide extra capacity and specialized tools.",
        },
        {
          question: "Is there a long-term contract?",
          answer: "We believe in earning your business every month. While we offer annual agreements for better rates, we also have flexible monthly options.",
        },
        {
          question: "What industries do you specialize in?",
          answer: "We work with professional services, manufacturing, logistics, and tech companies that require high-reliability IT infrastructure.",
        },
      ],
    },
    trust: {
      headline: "The Authority in Managed IT.",
      subheadline: "We don't just manage systems—we engineer resilience. We take full ownership of your technology so you can focus on scaling your vision.",
      points: [
        { title: "Uncompromising Accountability", description: "We eliminate vendor finger-pointing by owning the entire technology stack." },
        { title: "Predictive Infrastructure", description: "Our systems identify and resolve bottlenecks before they impact your operations." },
        { title: "Fortified Security Posture", description: "Deploy bank-grade security protocols tailored for the mid-market." }
      ]
    },
    cta: {
      headline: "Ready to eliminate IT risk?",
      subheadline: "Get a comprehensive audit of your current setup. No commitment, just clarity.",
      button: "Request Your IT Audit",
    },
    caseStudies: {
      badge: "Case Studies",
      headline: "Real Results.",
      subheadline: "How we've helped companies eliminate IT chaos and scale securely.",
      pageTitle: "Client Success Stories",
      pageSubheadline: "See how Ecksolution-IT has helped businesses across industries eliminate IT chaos, secure their data, and scale with confidence.",
      viewAll: "View all stories",
      readMore: "Read full case study",
      backToStudies: "Back to Case Studies",
      situation: { title: "The Situation", description: "" },
      problem: { title: "The Problem", points: [] },
      decisionPoint: { title: "The Decision Point", description: "" },
      solution: { title: "The Solution", introduction: "", points: [] },
      result: { title: "The Result", metrics: [], outcomes: [] },
      longTermStability: { title: "Long-Term Stability", description: "" },
      items: [
        {
          title: "Migration to Microsoft 365 without downtime",
          company: "Mid-sized company (40–80 employees)",
          summary: "How a mid-sized company transitioned from Google Workspace to a structured, secure Microsoft 365 environment with zero downtime.",
          href: "/case-studies/microsoft-365-migration",
          details: {
            situation: "The company was using Google Workspace for its daily operations. However, as the team grew to over 60 employees, the lack of structure in user management, access control, and overall security became a major concern for the leadership team.",
            problem: [
              "No central management for devices and users.",
              "Significant security risks due to unmanaged access.",
              "Inefficient processes for onboarding and offboarding employees."
            ],
            decisionPoint: "The leadership recognized that the existing system no longer met the company's security and scalability requirements. A more robust, enterprise-grade solution was needed to support their continued growth.",
            solution: {
              introduction: "Ecksolution-IT implemented a comprehensive migration and security overhaul:",
              points: [
                { title: "Full Migration", description: "Complete transition of all data and emails to Microsoft 365." },
                { title: "Entra ID", description: "Implementation of Entra ID with MFA and conditional access policies." },
                { title: "Structured Permissions", description: "A new, hierarchical user and permission system." },
                { title: "Backup Strategy", description: "Implementation of a robust backup strategy for all M365 data." }
              ]
            },
            result: {
              metrics: [
                { value: "Zero", label: "Downtime" },
                { value: "100%", label: "Data Integrity" },
                { value: "Full", label: "Control" }
              ],
              outcomes: [
                "No downtime during the entire migration process.",
                "Zero data loss across all user accounts and shared drives.",
                "Full control over users and systems through a centralized dashboard."
              ]
            },
            longTermStability: "The company now operates on a secure, scalable platform that supports their hybrid work model while ensuring all data is protected and compliant with industry standards."
          }
        },
        {
          title: "Stable and scalable IT with Microsoft Azure",
          company: "Tech company (100–150 employees)",
          summary: "Solving IT complexity and scalability issues by migrating to a structured Microsoft Azure cloud architecture.",
          href: "/case-studies/azure-cloud-infrastructure",
          details: {
            situation: "The company operated its own servers in a data center, which were reaching their limits.",
            problem: [
              "High maintenance costs for physical hardware.",
              "Lack of scalability for rapid growth.",
              "No disaster recovery plan for business continuity."
            ],
            decisionPoint: "The hardware was outdated and a major expansion was planned, requiring a more flexible infrastructure.",
            solution: {
              introduction: "Ecksolution-IT architected a complete cloud transition:",
              points: [
                { title: "Azure Migration", description: "Migration of all workloads to Microsoft Azure." },
                { title: "Auto-scaling", description: "Implementation of auto-scaling to match demand." },
                { title: "Geo-redundancy", description: "A geo-redundant backup system for maximum safety." }
              ]
            },
            result: {
              metrics: [
                { value: "99.99%", label: "Uptime" },
                { value: "30%", label: "Cost Reduction" },
                { value: "Infinite", label: "Scalability" }
              ],
              outcomes: [
                "Maximum scalability for future growth.",
                "30% reduction in operating costs compared to on-premise.",
                "Highly available infrastructure with automated disaster recovery."
              ]
            },
            longTermStability: "The move to Azure has eliminated hardware dependency and provided a foundation for global expansion."
          }
        },
        {
          title: "Reliable IT operations with full responsibility",
          company: "SME (30–60 employees)",
          summary: "How an SME without an internal IT department achieved stable and predictable IT operations through a managed service model.",
          href: "/case-studies/managed-it-operations",
          details: {
            situation: "The company had no internal IT and relied on a single external technician who was often unavailable.",
            problem: [
              "Long response times for critical issues.",
              "No documentation of systems or passwords.",
              "Frequent failures of critical business applications."
            ],
            decisionPoint: "A server failure during a busy period could not be resolved for 48 hours, causing significant revenue loss.",
            solution: {
              introduction: "We took over full responsibility for the IT environment:",
              points: [
                { title: "Managed IT", description: "Implementation of full Managed IT Operations." },
                { title: "Documentation", description: "Full documentation of all systems and processes." },
                { title: "24/7 Monitoring", description: "Proactive monitoring to prevent failures." }
              ]
            },
            result: {
              metrics: [
                { value: "< 15min", label: "Response" },
                { value: "100%", label: "Documented" },
                { value: "Fixed", label: "Cost" }
              ],
              outcomes: [
                "Fast response times for all employee requests.",
                "Stable systems with proactive maintenance.",
                "A clear point of contact and predictable monthly costs."
              ]
            },
            longTermStability: "The company now treats IT as a utility that \"just works,\" allowing leadership to focus on core business growth."
          }
        },
        {
          title: "Audit-ready IT through structured security",
          company: "Regulated Company (50–100 employees)",
          summary: "Achieving audit-ready IT through a structured security and governance framework for regulatory compliance.",
          href: "/case-studies/security-compliance",
          details: {
            situation: "The company faced an upcoming regulatory audit and realized their current IT security measures were undocumented and inconsistent.",
            problem: [
              "No formal security policies or procedures.",
              "Uncontrolled access to sensitive financial data.",
              "Lack of audit logs for system activities."
            ],
            decisionPoint: "The threat of losing their operating license due to non-compliance forced an immediate security overhaul.",
            solution: {
              introduction: "We implemented a rigorous security and compliance framework:",
              points: [
                { title: "Security Framework", description: "Implementation of a security framework based on ISO 27001." },
                { title: "Access Control", description: "Strict Role-Based Access Control (RBAC) and MFA." },
                { title: "SIEM", description: "Implementation of centralized logging and monitoring." }
              ]
            },
            result: {
              metrics: [
                { value: "100%", label: "Compliant" },
                { value: "Zero", label: "Findings" },
                { value: "Audit", label: "Ready" }
              ],
              outcomes: [
                "Successfully passed the regulatory audit with zero major findings.",
                "Full visibility into data access and system changes.",
                "Automated compliance reporting for ongoing oversight."
              ]
            },
            longTermStability: "Security is now embedded in the company's culture, ensuring they remain compliant as regulations evolve."
          }
        },
        {
          title: "Co-Managed IT for a Software Agency",
          company: "Software Agency (20–40 employees)",
          summary: "Empowering an internal team with expert support and enterprise tools to handle rapid growth and security.",
          href: "/case-studies/co-managed-it",
          details: {
            situation: "A small internal IT team was overwhelmed by the demands of a growing workforce and complex infrastructure.",
            problem: [
              "IT staff burnout and high turnover.",
              "No time for strategic projects due to constant \"firefighting.\"",
              "Lack of specialized knowledge in cloud and security."
            ],
            decisionPoint: "The internal IT manager realized they couldn't keep up with the digital transformation goals without external help.",
            solution: {
              introduction: "We established a co-managed partnership to augment their team:",
              points: [
                { title: "Co-Managed IT", description: "A collaborative model where we handle infrastructure while they handle user support." },
                { title: "Project Support", description: "Specialized help for cloud migration and security audits." },
                { title: "Knowledge Transfer", description: "Regular training for the internal team." }
              ]
            },
            result: {
              metrics: [
                { value: "40%", label: "More Efficient" },
                { value: "Zero", label: "Burnout" },
                { value: "Strategic", label: "Focus" }
              ],
              outcomes: [
                "Internal team can now focus on business-critical applications.",
                "Infrastructure stability increased significantly.",
                "Reduced stress and improved morale for the internal IT staff."
              ]
            },
            longTermStability: "The co-managed model provides the perfect balance of internal knowledge and external expertise, allowing for sustainable growth."
          }
        },
        {
          title: "Hardware Lifecycle Management",
          company: "Retail Chain (15 Locations)",
          summary: "Standardizing hardware replacement to reduce downtime and maintenance costs.",
          href: "/case-studies/hardware-lifecycle",
          details: {
            situation: "A medium-sized retail chain with 15 locations was operating with aging hardware, some of which was over 7 years old. This led to frequent failures and inconsistent performance across branches.",
            problem: [
              "High frequency of hardware failures impacting customer service.",
              "Slow performance leading to employee frustration.",
              "Unpredictable and high maintenance costs.",
              "Lack of standardization across locations."
            ],
            decisionPoint: "A critical server at the main warehouse failed, halting all deliveries for 24 hours and causing significant revenue loss.",
            solution: {
              introduction: "Ecksolution-IT implemented a comprehensive hardware lifecycle management program to standardize and modernize their infrastructure:",
              points: [
                { title: "Standardization", description: "Implemented a unified hardware standard across all 15 locations." },
                { title: "Lifecycle Policy", description: "Established a 4-year replacement cycle for all critical hardware." },
                { title: "Centralized Management", description: "Deployed tools for remote monitoring and automated updates." },
                { title: "Inventory Tracking", description: "Created a detailed asset register for all hardware components." }
              ]
            },
            result: {
              metrics: [
                { value: "40%", label: "Less Tickets" },
                { value: "25%", label: "More Productive" },
                { value: "Fixed", label: "Budget" }
              ],
              outcomes: [
                "Significant reduction in hardware-related downtime.",
                "Improved employee morale due to better tools.",
                "Clear visibility into future IT capital expenditure.",
                "Consistent customer experience across all retail branches."
              ]
            },
            longTermStability: "The retail chain now operates on a modern, standardized foundation with a clear roadmap for future hardware investments, ensuring long-term operational stability."
          }
        },
        {
          title: "Comprehensive IT Risk Audit",
          company: "Financial Services Firm",
          summary: "Identifying and mitigating security vulnerabilities to ensure regulatory compliance.",
          href: "/case-studies/it-risk-audit",
          details: {
            situation: "A financial services firm needed to ensure full compliance with new, stricter industry regulations regarding data protection and risk management.",
            problem: [
              "Lack of visibility into potential security vulnerabilities.",
              "Non-compliant data handling processes.",
              "Inadequate access controls for sensitive information.",
              "Risk of significant regulatory fines."
            ],
            decisionPoint: "An internal review revealed significant gaps in their security posture that could lead to a failed external audit.",
            solution: {
              introduction: "Ecksolution-IT conducted a deep-dive IT risk audit and implemented a comprehensive remediation plan:",
              points: [
                { title: "Vulnerability Assessment", description: "Identified and prioritized security weaknesses across the network." },
                { title: "Compliance Mapping", description: "Mapped existing processes against regulatory requirements." },
                { title: "Policy Development", description: "Created and implemented robust data protection and access policies." },
                { title: "Security Training", description: "Conducted staff training on security best practices and compliance." }
              ]
            },
            result: {
              metrics: [
                { value: "100%", label: "Compliant" },
                { value: "Reduced", label: "Risk" },
                { value: "High", label: "Confidence" }
              ],
              outcomes: [
                "Successfully passed all subsequent external regulatory audits.",
                "Significantly strengthened security posture and data protection.",
                "Clear documentation of all IT processes and controls.",
                "Enhanced reputation for security and reliability in the market."
              ]
            },
            longTermStability: "The firm now has a robust framework for ongoing risk management and compliance, ensuring they stay ahead of evolving regulatory requirements."
          }
        },
        {
          title: "Bulletproof Backup for a Law Firm",
          company: "Law Firm (15–30 employees)",
          summary: "Ensuring business continuity with immutable backups and rapid recovery after a ransomware attack.",
          href: "/case-studies/managed-backup",
          details: {
            situation: "A boutique law firm with 25 employees relied on a legacy tape-based backup system. They were concerned about the time it would take to recover critical case files in the event of a cyberattack or hardware failure.",
            problem: [
              "Slow and unreliable tape backups.",
              "No off-site redundancy for disaster recovery.",
              "High risk of data loss from ransomware.",
              "Recovery times measured in days, not hours."
            ],
            decisionPoint: "A nearby firm was hit by ransomware and lost three weeks of work, prompting our client to seek a modern, bulletproof solution.",
            solution: {
              introduction: "Ecksolution-IT implemented a multi-layered, immutable backup strategy to ensure total data protection:",
              points: [
                { title: "Immutable Backups", description: "Storage that cannot be modified or deleted, even by ransomware." },
                { title: "Cloud Redundancy", description: "Automated off-site replication to a secure cloud environment." },
                { title: "Instant Recovery", description: "Ability to boot virtual machines directly from the backup storage." },
                { title: "Regular Testing", description: "Automated monthly recovery drills to verify data integrity." }
              ]
            },
            result: {
              metrics: [
                { value: "< 1hr", label: "Recovery Time" },
                { value: "100%", label: "Data Safety" },
                { value: "Zero", label: "Tape Handling" }
              ],
              outcomes: [
                "Recovery time objective (RTO) reduced from 48 hours to under 60 minutes.",
                "Total protection against ransomware through immutable storage.",
                "Peace of mind for the partners knowing their data is secure and recoverable.",
                "Automated processes eliminated the need for manual tape management."
              ]
            },
            longTermStability: "The firm now has a resilient data protection strategy that scales with their growing volume of digital evidence and case files, ensuring they are always prepared for the unexpected."
          }
        },
        {
          title: "Network Optimization for a Logistics Hub",
          company: "Logistics Hub (50–100 employees)",
          summary: "Eliminating Wi-Fi dead zones and connection dropouts to improve warehouse efficiency and shipping accuracy.",
          href: "/case-studies/network-management",
          details: {
            situation: "A large logistics hub was experiencing frequent Wi-Fi dropouts in their 50,000 sq. ft. warehouse, causing handheld scanners to disconnect and delaying shipments.",
            problem: [
              "Inconsistent Wi-Fi coverage across the warehouse floor.",
              "Frequent scanner disconnections leading to data entry errors.",
              "Network congestion during peak operating hours.",
              "Outdated network hardware unable to handle the device density."
            ],
            decisionPoint: "A major shipping delay caused by a network outage during a peak holiday period led to significant customer complaints and lost revenue.",
            solution: {
              introduction: "Ecksolution-IT performed a comprehensive site survey and deployed a high-performance mesh network:",
              points: [
                { title: "Site Survey", description: "Heat mapping to identify dead zones and interference sources." },
                { title: "Mesh Network", description: "Deployment of enterprise-grade access points with seamless roaming." },
                { title: "VLAN Segmentation", description: "Separating scanner traffic from guest and administrative traffic." },
                { title: "Proactive Monitoring", description: "Real-time alerts for network health and performance metrics." }
              ]
            },
            result: {
              metrics: [
                { value: "99.9%", label: "Wi-Fi Uptime" },
                { value: "15%", label: "Efficiency Gain" },
                { value: "Zero", label: "Dead Zones" }
              ],
              outcomes: [
                "Eliminated all Wi-Fi dead zones and connection dropouts.",
                "Increased warehouse picking efficiency by 15%.",
                "Reduced data entry errors caused by scanner disconnections.",
                "Stable network performance even during peak operating volumes."
              ]
            },
            longTermStability: "The logistics hub now has a robust, scalable network infrastructure that can support future automation and an increasing number of connected devices."
          }
        },
        {
          title: "Strategic IT Roadmap for a Non-profit",
          company: "Non-profit (40–60 employees)",
          summary: "Aligning technology with long-term goals to reduce reactive spending and launch new digital services.",
          href: "/case-studies/strategic-it-roadmap",
          details: {
            situation: "A growing non-profit was struggling with a 'patchwork' IT environment. They were spending most of their budget on emergency repairs rather than strategic improvements.",
            problem: [
              "High reactive IT spending with no long-term plan.",
              "Incompatible systems hindering collaboration between departments.",
              "Security vulnerabilities due to unpatched legacy software.",
              "Lack of technical vision to support new digital initiatives."
            ],
            decisionPoint: "The board realized that their outdated technology was preventing them from launching a critical new donor engagement platform.",
            solution: {
              introduction: "Ecksolution-IT developed a 3-year strategic IT roadmap to align their technology with their mission:",
              points: [
                { title: "Infrastructure Audit", description: "Comprehensive review of all existing systems and software." },
                { title: "Goal Alignment", description: "Workshops with leadership to align IT investments with organizational goals." },
                { title: "Phased Upgrades", description: "A prioritized schedule of hardware and software improvements." },
                { title: "Budget Planning", description: "Predictable 3-year budget for IT capital and operating expenses." }
              ]
            },
            result: {
              metrics: [
                { value: "30%", label: "Cost Savings" },
                { value: "3 Year", label: "Clear Plan" },
                { value: "High", label: "Impact" }
              ],
              outcomes: [
                "Reduced emergency IT spending by 30% through proactive planning.",
                "Successfully launched the new donor engagement platform on time.",
                "Improved collaboration across departments with unified systems.",
                "Clear visibility for the board on the value of IT investments."
              ]
            },
            longTermStability: "The non-profit now views IT as a strategic asset that enables their mission, with a clear plan for ongoing innovation and growth."
          }
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Managed IT Services",
        headline: "We don't just fix computers. We take full responsibility for your business continuity.",
        subheadline: "Stop worrying about downtime and security breaches. We operate your entire IT infrastructure with 100% accountability and fixed monthly costs.",
        cta: "Book a Strategy Call",
      },
      problem: {
        headline: "IT is either an engine or a handbrake.",
        subheadline: "Most companies suffer from reactive IT that only responds when something breaks. This leads to three critical failures:",
        points: [
          { title: "Revenue-Killing Downtime", description: "When your systems are down, your team is idle but your payroll keeps running." },
          { title: "Security Anxiety", description: "Wondering if your backups actually work or if a single click could bankrupt the company." },
          { title: "Budget Chaos", description: "Unpredictable IT bills that fluctuate based on how many things broke this month." }
        ]
      },
      solution: {
        headline: "Total IT Accountability.",
        subheadline: "We move you from 'Break-Fix' to 'Managed Operations'. We own the outcome, not just the tickets.",
        points: [
          { title: "Zero-Downtime Focus", description: "Proactive maintenance that identifies and resolves issues before they impact your team." },
          { title: "Fixed-Cost Guarantee", description: "One predictable monthly fee that covers everything. No surprise invoices, ever." },
          { title: "Strategic Partnership", description: "We act as your CTO, ensuring your technology roadmap aligns with your business goals." }
        ]
      },
      results: {
        headline: "The Numbers That Matter.",
        subheadline: "Our performance is measured by your uptime and productivity.",
        cards: [
          { metric: "99.9%", label: "System Uptime" },
          { metric: "< 15m", label: "Response Time" },
          { metric: "30%", label: "Efficiency Gain" },
          { metric: "0", label: "Security Breaches" }
        ]
      },
      services: {
        headline: "What 'Full Responsibility' Looks Like.",
        subheadline: "Our managed service is a complete IT department in a box.",
        items: [
          { title: "24/7 Monitoring & Management", description: "Continuous oversight of servers, networks, and endpoints." },
          { title: "Unlimited Helpdesk Support", description: "Fast, professional support for your entire team whenever they need it." },
          { title: "Cybersecurity & Compliance", description: "Advanced threat protection, encryption, and regulatory compliance management." },
          { title: "Backup & Disaster Recovery", description: "Automated off-site backups with guaranteed recovery times." },
          { title: "Cloud & Infrastructure", description: "Full management of Microsoft 365, Azure, and on-premise systems." },
          { title: "IT Strategy & Consulting", description: "Regular business reviews and long-term technology planning." }
        ]
      },
      process: {
        headline: "How We Take Over.",
        subheadline: "A seamless transition to professional IT operations.",
        steps: [
          { title: "Deep Audit", description: "We document every asset, license, and vulnerability in your current setup." },
          { title: "Stabilization", description: "We fix immediate risks and standardize your systems to our high-reliability baseline." },
          { title: "Continuous Operation", description: "We take full control, providing 24/7 management and strategic guidance." }
        ]
      },
      caseStudy: {
        headline: "Real Results for Real Businesses.",
        company: "Logistics Leader GmbH",
        challenge: "Frequent server crashes were delaying shipments and costing €5k per hour in lost productivity.",
        solution: "Implemented a fully managed hybrid-cloud infrastructure with redundant failover.",
        result: "Zero critical downtime in 24 months and a 40% reduction in IT-related support tickets."
      },
      philosophy: {
        quote: "We don't sell hours. We sell uptime.",
        author: "Ecksolution-IT Philosophy"
      },
      faq: {
        headline: "Common Questions About Managed IT.",
        items: [
          { question: "What exactly is included in the fixed monthly fee?", answer: "Everything. All monitoring, maintenance, security updates, and unlimited helpdesk support are included. No hidden fees for 'out of scope' work." },
          { question: "How do you ensure our data is secure?", answer: "We use enterprise-grade encryption, multi-factor authentication, and 24/7 threat monitoring. We also perform regular backup tests to ensure recovery is always possible." },
          { question: "Can you work with our existing internal IT person?", answer: "Yes. We offer 'Co-Managed IT' where we handle the heavy lifting (servers, security, backups) while your internal person focuses on user-facing projects." }
        ]
      },
    },
    common: {
      discussNeeds: "Discuss Your Needs",
      outcomesTitle: "Clear Business Outcomes",
      outcomesSub: "What you can expect when you partner with us.",
      processTitle: "Our Proven Process",
      processSub: "How we deliver consistent results.",
      analysis: "Analysis",
      implementation: "Implementation",
      operations: "Operations",
      relatedSolutionsTitle: "Explore Related Solutions",
      relatedSolutionsSub: "Other ways we help businesses eliminate IT risk.",
      viewAllSolutions: "View All Solutions",
      learnMore: "Learn More",
      ctaTitle: "Ready to eliminate IT risk?",
      ctaSub: "Get a comprehensive audit of your current setup. No commitment, just clarity.",
      ctaButton: "Request Your IT Audit",
    },
  },
  de: {
    nav: {
      risk: "Das Risiko",
      solutions: "Lösungen",
      caseStudies: "Fallstudien",
      pricing: "Preise",
      getAudit: "Audit anfordern",
      megaMenu: {
        core: "Kernangebot",
        managedOps: "Managed IT-Betrieb",
        managedOpsDesc: "Wir betreiben Ihre IT zuverlässig, damit Ihr Geschäft ohne Unterbrechung läuft.",
        coManaged: "Co-Managed IT",
        coManagedDesc: "Stärken Sie Ihr internes Team mit Experten-Support und Enterprise-Tools.",
        pricingLink: "Planbare Preise ansehen",
        securityBackup: "Sicherheit & Backup",
        cybersecurity: "Cybersecurity-Schutz",
        cybersecurityDesc: "Schützen Sie Ihr Unternehmen vor Bedrohungen, bevor sie Schaden anrichten.",
        backup: "Managed Backup",
        backupDesc: "Automatische Backups, die sicherstellen, dass keine Daten verloren gehen.",
        infrastructure: "Infrastruktur",
        network: "Netzwerk-Management",
        networkDesc: "Sorgen Sie für schnelles, zuverlässiges Internet, damit Ihr Team nie aufhört zu arbeiten.",
        hardware: "Hardware-Lifecycle",
        hardwareDesc: "Halten Sie Ihr Team mit aktueller, zuverlässiger Ausrüstung produktiv.",
        migration: "Migration & Projekte",
        m365Migration: "Microsoft 365 Migration",
        m365MigrationDesc: "Wechseln Sie zu Microsoft 365 ohne Ausfallzeiten oder Datenverlust.",
        azureMigration: "Azure Migration",
        azureMigrationDesc: "Verschieben Sie Ihre Infrastruktur sicher und mit voller Kontrolle zu Azure.",
        entryPoints: "Einstiegspunkte",
        riskAudit: "IT-Risiko-Audit",
        riskAuditDesc: "Identifizieren und beheben Sie versteckte Schwachstellen, bevor sie kostspielig werden.",
        roadmap: "Strategische IT-Roadmap",
        roadmapDesc: "Richten Sie Ihre Technologie-Investitionen an Ihren geschäftlichen Wachswachstumszielen aus.",
      }
    },
    footer: {
      privacy: "Datenschutz",
      terms: "AGB",
      rights: "Ecksolution-IT Managed Services. Alle Rechte vorbehalten.",
    },
    solutions: {
      "it-support-for-businesses": {
        title: "IT-Support für Unternehmen",
        hero: "Zuverlässiger IT-Support, der mit Ihrem Unternehmen wächst.",
        description: "Hören Sie auf, sich über technische Pannen Sorgen zu machen. Unser proaktiver IT-Support stellt sicher, dass Ihre Systeme immer einsatzbereit, sicher und leistungsstark sind.",
        problem: {
          title: "Die Kosten unzuverlässiger IT",
          points: [
            "Häufige Ausfallzeiten, die die Mitarbeiterproduktivität stören",
            "Langsame Reaktionszeiten aktueller IT-Anbieter",
            "Versteckte Sicherheitslücken, die Daten gefährden",
            "Unvorhersehbare IT-Kosten, die die Budgetierung unmöglich machen"
          ]
        },
        solution: {
          title: "Proaktiver Business IT-Support",
          points: [
            "Rund um die Uhr proaktive Überwachung, um Probleme frühzeitig zu erkennen",
            "Schneller, professioneller Helpdesk-Support für Ihr Team",
            "Regelmäßige Sicherheitsaudits und Patch-Management",
            "Strategische IT-Beratung zur Abstimmung der Technik auf das Wachstum"
          ]
        },
        results: [
          { metric: "99,9%", label: "System-Uptime" },
          { metric: "15 Min.", label: "Durchschn. Reaktionszeit" },
          { metric: "30%", label: "Kostensenkung" }
        ],
        process: {
          analysis: "Wir prüfen Ihre aktuelle Infrastruktur und identifizieren Schwachstellen.",
          implementation: "Wir setzen unsere Überwachungstools ein und stabilisieren Ihre Umgebung.",
          operations: "Wir bieten laufenden Support und kontinuierliche Optimierung."
        },
        caseStudy: {
          companyType: "Professionelle Dienstleistungen",
          title: "IT-Stabilisierung für eine wachsende Anwaltskanzlei",
          situation: "Eine Anwaltskanzlei mit über 50 Mitarbeitern kämpfte mit häufigen Serverabstürzen und langsamem Fernzugriff.",
          problem: "Ihr bisheriger IT-Anbieter agierte reaktiv und reparierte Dinge erst, wenn sie kaputt waren, was zu Verlusten bei den abrechenbaren Stunden führte.",
          decisionPoint: "Sie brauchten einen Partner, der die volle Verantwortung für ihre Betriebszeit übernimmt.",
          solution: "Wir implementierten einen Managed IT-Supportplan mit 24/7-Überwachung und aktualisierten ihre Fernzugriffsinfrastruktur.",
          result: "Null ungeplante Ausfallzeiten in den ersten 12 Monaten und eine Steigerung der Effizienz im Homeoffice um 40 %.",
          slug: "managed-it-operations"
        }
      },
      "microsoft-365-services": {
        title: "Microsoft 365 Services",
        hero: "Maximieren Sie Ihre Produktivität mit Managed Microsoft 365.",
        description: "Holen Sie mehr aus Ihrer Microsoft 365-Investition heraus. Wir kümmern uns um Migration, Sicherheit und Verwaltung, damit Ihr Team grenzenlos zusammenarbeiten kann.",
        problem: {
          title: "Microsoft 365 Herausforderungen",
          points: [
            "Komplexe Migrationen, die zu Datenverlust oder Ausfallzeiten führen",
            "Falsch konfigurierte Sicherheitseinstellungen, die Daten offenlegen",
            "Nicht genutzte Funktionen, die zu unnötigen Lizenzkosten führen",
            "Mangel an Experten-Support für fortgeschrittene M365-Funktionen"
          ]
        },
        solution: {
          title: "Experten-M365-Management",
          points: [
            "Nahtlose Migration zu Microsoft 365 ohne Ausfallzeiten",
            "Erweiterte Sicherheitskonfiguration (MFA, Conditional Access)",
            "Laufende Lizenzoptimierung und Benutzerverwaltung",
            "Experten-Support für Teams, SharePoint und OneDrive"
          ]
        },
        results: [
          { metric: "100%", label: "Datenintegrität" },
          { metric: "25%", label: "Lizenzersparnis" },
          { metric: "24/7", label: "Experten-Support" }
        ],
        process: {
          analysis: "Wir bewerten Ihre aktuellen E-Mail- und Dateisysteme auf Migrationsbereitschaft.",
          implementation: "Wir führen eine schrittweise Migration ohne Auswirkungen auf die Benutzer durch.",
          operations: "Wir verwalten und sichern Ihre Umgebung für langfristigen Erfolg."
        },
        caseStudy: {
          companyType: "Fertigung",
          title: "Modernisierung der Zusammenarbeit für einen globalen Hersteller",
          situation: "Ein Hersteller nutzte veraltete On-Premise-E-Mails und fragmentierte Dateifreigaben.",
          problem: "Die Zusammenarbeit zwischen globalen Standorten war schwierig und die Sicherheit inkonsistent.",
          decisionPoint: "Sie benötigten eine einheitliche, sichere Cloud-Plattform für alle Mitarbeiter.",
          solution: "Wir migrierten über 500 Benutzer zu Microsoft 365 und implementierten SharePoint für das globale Dokumentenmanagement.",
          result: "Verbesserte Effizienz der Zusammenarbeit und zentralisierte Sicherheitskontrolle über alle Standorte hinweg.",
          slug: "microsoft-365-migration"
        }
      },
      "azure-hybrid-infrastructure": {
        title: "Azure & Hybrid-Infrastruktur",
        hero: "Bauen Sie eine belastbare, skalierbare Infrastruktur mit Azure auf.",
        description: "Modernisieren Sie Ihr Rechenzentrum mit Azure. Wir entwerfen und verwalten Hybrid-Cloud-Umgebungen, die die Flexibilität und Sicherheit bieten, die Ihr Unternehmen verlangt.",
        problem: {
          title: "Infrastrukturbeschränkungen",
          points: [
            "Veraltete On-Premise-Hardware, deren Wartung teuer ist",
            "Mangelnde Skalierbarkeit für wachsende geschäftliche Arbeitslasten",
            "Komplexes Management von Hybrid-Cloud-Umgebungen",
            "Unzureichende Disaster Recovery für kritische Systeme"
          ]
        },
        solution: {
          title: "Managed Azure-Lösungen",
          points: [
            "Strategisches Azure-Design und Cloud-Migration",
            "Nahtlose Integration zwischen On-Premise und Cloud",
            "Kontinuierliche Kostenoptimierung und Leistungsabstimmung",
            "Unternehmensgerechte Disaster Recovery in der Cloud"
          ]
        },
        results: [
          { metric: "40%", label: "Infrastruktur-Ersparnis" },
          { metric: "99,99%", label: "Cloud-Verfügbarkeit" },
          { metric: "Sofort", label: "Skalierbarkeit" }
        ],
        process: {
          analysis: "Wir bewerten Ihre aktuellen Arbeitslasten auf Cloud-Eignung.",
          implementation: "Wir bauen Ihre Infrastruktur auf und migrieren sie in eine gesicherte Azure-Umgebung.",
          operations: "Wir bieten 24/7-Management und Optimierung Ihrer Cloud-Ressourcen."
        },
        caseStudy: {
          companyType: "E-Commerce",
          title: "Skalierung für Wachstum mit Azure Hybrid Cloud",
          situation: "Ein E-Commerce-Unternehmen wuchs über die Kapazitäten seines lokalen Rechenzentrums hinaus.",
          problem: "Saisonale Verkehrsspitzen verursachten Website-Verlangsamungen und Umsatzeinbußen.",
          decisionPoint: "Sie brauchten eine Infrastruktur, die sofort mit der Nachfrage skalieren konnte.",
          solution: "Wir implementierten eine hybride Azure-Umgebung, die in Spitzenzeiten automatisch skaliert.",
          result: "100 % Betriebszeit während Spitzenverkaufsereignissen und eine Reduzierung der jährlichen Hosting-Kosten um 30 %.",
          slug: "azure-cloud-infrastructure"
        }
      },
      "backup-and-security": {
        title: "Backup & Sicherheit",
        hero: "Schützen Sie Ihre Unternehmensdaten mit mehrschichtiger Sicherheit.",
        description: "Lassen Sie nicht zu, dass ein Cyberangriff oder Datenverlust Ihr Unternehmen stoppt. Unsere Managed Backup- und Sicherheitsdienste bieten absolute Sicherheit.",
        problem: {
          title: "Die Bedrohungslandschaft",
          points: [
            "Zunehmende Ransomware-Angriffe auf kleine Unternehmen",
            "Unzuverlässige Backups, die versagen, wenn Sie sie am dringendsten brauchen",
            "Menschliches Versagen, das zu versehentlichem Löschen von Daten führt",
            "Mangelnde Sichtbarkeit von Sicherheitsbedrohungen und -risiken"
          ]
        },
        solution: {
          title: "Vollständiger Datenschutz",
          points: [
            "Unveränderliche Off-Site-Backups, die nicht gelöscht werden können",
            "Erweiterter Endpunktschutz und Bedrohungserkennung",
            "Regelmäßige Backup-Tests und Wiederherstellungsübungen",
            "24/7-Sicherheitsüberwachung und Reaktion auf Vorfälle"
          ]
        },
        results: [
          { metric: "0", label: "Datenverlust-Vorfälle" },
          { metric: "100%", label: "Wiederherstellungserfolg" },
          { metric: "24/7", label: "Bedrohungsüberwachung" }
        ],
        process: {
          analysis: "Wir identifizieren Ihre kritischen Daten und bewerten Ihre aktuelle Sicherheitslage.",
          implementation: "Wir setzen unseren mehrschichtigen Sicherheits- und Backup-Stack ein.",
          operations: "Wir überwachen und testen Ihren Schutz kontinuierlich für absolute Zuverlässigkeit."
        },
        caseStudy: {
          companyType: "Finanzdienstleistungen",
          title: "Wiederherstellung nach Ransomware mit Managed Backup",
          situation: "Ein Finanzdienstleistungsunternehmen wurde von einem raffinierten Ransomware-Angriff getroffen.",
          problem: "Ihre internen Backups wurden von den Angreifern verschlüsselt, sodass sie keine Daten mehr hatten.",
          decisionPoint: "Sie benötigten eine Backup-Lösung, die wirklich isoliert und unveränderlich war.",
          solution: "Wir hatten zuvor unseren Managed Backup-Service mit Off-Site-Unveränderlichkeit implementiert.",
          result: "Wir haben alle kritischen Systeme innerhalb von 4 Stunden ohne Datenverlust und ohne gezahltes Lösegeld wiederhergestellt.",
          slug: "managed-backup"
        }
      }
    },
    hero: {
      badge: "Managed IT Operations",
      headline: "Schluss mit dem IT-Chaos. Wir sind Ihre komplette IT-Abteilung.",
      subheadline: "Vollständige IT-Verantwortung. Wir betreiben Ihre Infrastruktur zuverlässig, damit Ihr Geschäft ohne Unterbrechung läuft. Keine Ausreden, nur Ergebnisse.",
      cta: "Bedarf besprechen",
      secondaryCta: "Fallstudien ansehen",
    },
    problem: {
      badge: "Das Problem",
      headline: "Schlechte IT frisst Margen.",
      subheadline: "Wenn die Technik versagt, steht das Geschäft still. Die meisten IT-Anbieter konzentrieren sich auf Tickets; wir konzentrieren uns darauf, sie zu verhindern.",
      cards: [
        {
          title: "Unvorhersehbare Ausfallzeiten",
          description: "Jede Minute Systemausfall bedeutet Umsatzverlust und frustrierte Mitarbeiter.",
        },
        {
          title: "Sicherheitslücken",
          description: "Veraltete Systeme sind ein offenes Tor für Ransomware und Datenpannen.",
        },
        {
          title: "Versteckte IT-Kosten",
          description: "Variable Rechnungen und überraschende Hardwareausfälle zerstören die Budgetplanung.",
        },
      ],
    },
    solution: {
      badge: "Die Lösung",
      headline: "Wir bauen Zuverlässigkeit.",
      subheadline: "Wir 'reparieren' nicht nur Dinge. Wir bauen und betreiben ein stabiles Fundament für Ihr Wachstum.",
      points: [
        {
          title: "Kompromisslose Verantwortlichkeit",
          description: "Wir übernehmen die volle Verantwortung für Ihren gesamten Technologie-Stack. Ohne Wenn und Aber.",
        },
        {
          title: "Prädiktive Infrastruktur",
          description: "Wir überwachen und warten Systeme proaktiv, um Probleme zu stoppen, bevor sie entstehen.",
        },
        {
          title: "Gestärkte Sicherheit",
          description: "Sicherheit auf Enterprise-Niveau, skaliert für Ihre geschäftlichen Anforderungen.",
        },
      ],
    },
    results: {
      headline: "Klare Geschäftsergebnisse",
      subheadline: "Was Sie von einer Partnerschaft mit uns erwarten können.",
      cards: [
        { metric: "15 Min.", label: "Reaktionszeit" },
        { metric: "100%", label: "Verantwortung" },
        { metric: "8+", label: "Jahre Erfahrung" },
        { metric: "24/7", label: "Überwachung" },
      ],
    },
    services: {
      badge: "Unsere Leistungen",
      headline: "Umfassende IT-Verantwortung.",
      subheadline: "Wir bieten das gesamte Spektrum an IT-Services, die für moderne Geschäftsabläufe erforderlich sind.",
      items: [
        {
          title: "Managed IT Services",
          description: "Umfassendes IT-Management, vom Helpdesk bis zur strategischen Planung.",
          link: "/solutions/managed-it-services"
        },
        {
          title: "IT-Support für Unternehmen",
          description: "Schneller, zuverlässiger Support für die täglichen Technologieanforderungen Ihres Teams.",
          link: "/solutions/it-support-for-businesses"
        },
        {
          title: "Microsoft 365 Services",
          description: "Expertenmanagement und Sicherheit für Ihren modernen Arbeitsplatz.",
          link: "/solutions/microsoft-365-services"
        },
        {
          title: "Azure & Hybrid-Infrastruktur",
          description: "Skalierbare Cloud- und Hybridlösungen für wachsende Unternehmen.",
          link: "/solutions/azure-hybrid-infrastructure"
        },
        {
          title: "Backup & Sicherheit",
          description: "Absolut sicherer Datenschutz und Sicherheit auf Enterprise-Niveau.",
          link: "/solutions/backup-security"
        }
      ]
    },
    process: {
      badge: "Unser Prozess",
      headline: "Ein bewährter Weg zur Stabilität.",
      steps: [
        {
          number: "01",
          title: "Analyse",
          description: "Wir auditieren Ihre aktuelle Infrastruktur, identifizieren Schwachstellen und dokumentieren jedes System.",
        },
        {
          number: "02",
          title: "Implementierung",
          description: "Wir implementieren unsere Management-Tools, standardisieren Ihre Sicherheit und übernehmen die Lieferantenbeziehungen.",
        },
        {
          number: "03",
          title: "Betrieb",
          description: "Wir bieten 24/7-Überwachung, unbegrenzten Helpdesk-Support und proaktive Wartung.",
        },
      ],
    },
    faq: {
      headline: "Häufig gestellte Fragen",
      items: [
        {
          question: "Wie schnell reagieren Sie bei kritischen Problemen?",
          answer: "Unsere durchschnittliche Reaktionszeit bei kritischen Problemen liegt unter 15 Minuten. Wir priorisieren geschäftskritische Probleme.",
        },
        {
          question: "Ersetzen Sie mein internes IT-Team?",
          answer: "Wir können entweder als Ihre komplette IT-Abteilung fungieren oder mit Ihrem bestehenden Team zusammenarbeiten (Co-Managed IT).",
        },
        {
          question: "Gibt es langfristige Verträge?",
          answer: "Wir möchten Sie jeden Monat neu überzeugen. Wir bieten Jahresverträge für bessere Konditionen, aber auch flexible monatliche Optionen.",
        },
        {
          question: "Auf welche Branchen sind Sie spezialisiert?",
          answer: "Wir arbeiten mit Dienstleistern, Fertigungs-, Logistik- und Technologieunternehmen zusammen, die eine hochzuverlässige IT benötigen.",
        },
      ],
    },
    trust: {
      headline: "Die Autorität in Managed IT.",
      subheadline: "Wir verwalten nicht nur Systeme – wir entwickeln Resilienz. Wir übernehmen die volle Verantwortung für Ihre Technologie, damit Sie sich auf Ihre Vision konzentrieren können.",
      points: [
        { title: "Kompromisslose Verantwortlichkeit", description: "Wir eliminieren gegenseitige Schuldzuweisungen, indem wir den gesamten Technologie-Stack übernehmen." },
        { title: "Prädiktive Infrastruktur", description: "Unsere Systeme identifizieren und beheben Engpässe, bevor sie Ihren Betrieb beeinträchtigen." },
        { title: "Gestärkte Sicherheit", description: "Implementieren Sie Sicherheitsprotokolle auf Bankenniveau, die auf den Mittelstand zugeschnitten sind." }
      ]
    },
    cta: {
      headline: "Bereit, IT-Risiken zu eliminieren?",
      subheadline: "Erhalten Sie ein umfassendes Audit Ihres aktuellen Setups. Unverbindlich und klar.",
      button: "IT-Audit anfordern",
    },
    caseStudies: {
      badge: "Fallstudien",
      headline: "Echte Ergebnisse.",
      subheadline: "Wie wir Unternehmen geholfen haben, IT-Chaos zu beseitigen und sicher zu skalieren.",
      pageTitle: "Erfolgsgeschichten unserer Kunden",
      pageSubheadline: "Erfahren Sie, wie Ecksolution-IT Unternehmen aus verschiedenen Branchen geholfen hat, das IT-Chaos zu beseitigen, ihre Daten zu sichern und mit Zuversicht zu skalieren.",
      viewAll: "Alle Geschichten ansehen",
      readMore: "Vollständige Fallstudie lesen",
      backToStudies: "Zurück zu den Fallstudien",
      situation: { title: "Die Situation", description: "" },
      problem: { title: "Das Problem", points: [] },
      decisionPoint: { title: "Der Entscheidungspunkt", description: "" },
      solution: { title: "Die Lösung", introduction: "", points: [] },
      result: { title: "Das Ergebnis", metrics: [], outcomes: [] },
      longTermStability: { title: "Langfristige Stabilität", description: "" },
      items: [
        {
          title: "Migration zu Microsoft 365 ohne Ausfallzeiten",
          company: "Mittelständisches Unternehmen (40–80 Mitarbeiter)",
          summary: "Wie ein mittelständisches Unternehmen von Google Workspace zu einer strukturierten, sicheren Microsoft 365-Umgebung ohne Ausfallzeiten wechselte.",
          href: "/case-studies/microsoft-365-migration",
          details: {
            situation: "Das Unternehmen nutzte Google Workspace für den täglichen Betrieb. Als das Team jedoch auf über 60 Mitarbeiter anwuchs, wurde der Mangel an Struktur in der Benutzerverwaltung, der Zugriffskontrolle und der allgemeinen Sicherheit zu einem großen Anliegen für das Führungsteam.",
            problem: [
              "Keine zentrale Verwaltung für Geräte und Benutzer.",
              "Erhebliche Sicherheitsrisiken durch unkontrollierten Zugriff.",
              "Ineffiziente Prozesse für das Onboarding und Offboarding von Mitarbeitern."
            ],
            decisionPoint: "Die Geschäftsführung erkannte, dass das bestehende System die Sicherheits- und Skalierbarkeitsanforderungen des Unternehmens nicht mehr erfüllte. Eine robustere Lösung auf Enterprise-Niveau war erforderlich, um das weitere Wachstum zu unterstützen.",
            solution: {
              introduction: "Ecksolution-IT implementierte eine umfassende Migration und Sicherheitsüberholung:",
              points: [
                { title: "Vollständige Migration", description: "Komplette Übertragung aller Daten und E-Mails zu Microsoft 365." },
                { title: "Entra ID", description: "Implementierung von Entra ID mit MFA und Richtlinien für bedingten Zugriff." },
                { title: "Strukturierte Berechtigungen", description: "Ein neues, hierarchisches Benutzer- und Berechtigungssystem." },
                { title: "Backup-Strategie", description: "Implementierung einer robusten Backup-Strategie für alle M365-Daten." }
              ]
            },
            result: {
              metrics: [
                { value: "Null", label: "Ausfallzeit" },
                { value: "100%", label: "Datenintegrität" },
                { value: "Volle", label: "Kontrolle" }
              ],
              outcomes: [
                "Keine Ausfallzeiten während des gesamten Migrationsprozesses.",
                "Null Datenverlust über alle Benutzerkonten und freigegebenen Laufwerke hinweg.",
                "Volle Kontrolle über Benutzer und Systeme durch ein zentralisiertes Dashboard."
              ]
            },
            longTermStability: "Das Unternehmen arbeitet nun auf einer sicheren, skalierbaren Plattform, die sein hybrides Arbeitsmodell unterstützt und gleichzeitig sicherstellt, dass alle Daten geschützt sind und den Branchenstandards entsprechen."
          }
        },
        {
          title: "Stabile und skalierbare IT mit Microsoft Azure",
          company: "Tech-Unternehmen (100–150 Mitarbeiter)",
          summary: "Lösung von IT-Komplexität und Skalierbarkeitsproblemen durch Migration zu einer strukturierten Microsoft Azure Cloud-Architektur.",
          href: "/case-studies/azure-cloud-infrastructure",
          details: {
            situation: "Das Unternehmen betrieb eigene Server in einem Rechenzentrum, die an ihre Grenzen stießen.",
            problem: [
              "Hohe Wartungskosten für physische Hardware.",
              "Mangelnde Skalierbarkeit für schnelles Wachstum.",
              "Kein Disaster-Recovery-Plan für die Geschäftskontinuität."
            ],
            decisionPoint: "Die Hardware war veraltet und eine größere Expansion war geplant, was eine flexiblere Infrastruktur erforderte.",
            solution: {
              introduction: "Ecksolution-IT entwarf eine vollständige Cloud-Transition:",
              points: [
                { title: "Azure Migration", description: "Migration aller Workloads zu Microsoft Azure." },
                { title: "Auto-Skalierung", description: "Implementierung von Auto-Skalierung zur Anpassung an den Bedarf." },
                { title: "Geo-Redundanz", description: "Ein geo-redundantes Backup-System für maximale Sicherheit." }
              ]
            },
            result: {
              metrics: [
                { value: "99,99%", label: "Uptime" },
                { value: "30%", label: "Kostenreduktion" },
                { value: "Unendlich", label: "Skalierbarkeit" }
              ],
              outcomes: [
                "Maximale Skalierbarkeit für zukünftiges Wachstum.",
                "30% Reduzierung der Betriebskosten im Vergleich zu On-Premise.",
                "Hochverfügbare Infrastruktur mit automatisierter Disaster Recovery."
              ]
            },
            longTermStability: "Der Wechsel zu Azure hat die Hardware-Abhängigkeit beseitigt und eine Grundlage für die globale Expansion geschaffen."
          }
        },
        {
          title: "Zuverlässiger IT-Betrieb mit voller Verantwortung",
          company: "KMU (30–60 Mitarbeiter)",
          summary: "Wie ein KMU ohne interne IT-Abteilung durch ein Managed Service Modell einen stabilen und vorhersehbaren IT-Betrieb erreichte.",
          href: "/case-studies/managed-it-operations",
          details: {
            situation: "Das Unternehmen hatte keine interne IT und verließ sich auf einen einzelnen externen Techniker, der oft nicht erreichbar war.",
            problem: [
              "Lange Reaktionszeiten bei kritischen Problemen.",
              "Keine Dokumentation von Systemen oder Passwörtern.",
              "Häufige Ausfälle kritischer Geschäftsanwendungen."
            ],
            decisionPoint: "Ein Serverausfall während einer Stoßzeit konnte 48 Stunden lang nicht behoben werden, was zu erheblichen Umsatzverlusten führte.",
            solution: {
              introduction: "Wir übernahmen die volle Verantwortung für die IT-Umgebung:",
              points: [
                { title: "Managed IT", description: "Implementierung von vollständigen Managed IT Operations." },
                { title: "Dokumentation", description: "Vollständige Dokumentation aller Systeme und Prozesse." },
                { title: "24/7 Überwachung", description: "Proaktive Überwachung zur Vermeidung von Ausfällen." }
              ]
            },
            result: {
              metrics: [
                { value: "< 15 Min.", label: "Reaktion" },
                { value: "100%", label: "Dokumentiert" },
                { value: "Fixe", label: "Kosten" }
              ],
              outcomes: [
                "Schnelle Reaktionszeiten für alle Mitarbeiteranfragen.",
                "Stabile Systeme durch proaktive Wartung.",
                "Ein klarer Ansprechpartner und planbare monatliche Kosten."
              ]
            },
            longTermStability: "Das Unternehmen betrachtet die IT nun als Versorgungsleistung, die \"einfach funktioniert\", sodass sich die Geschäftsführung auf das Kerngeschäft konzentrieren kann."
          }
        },
        {
          title: "Audit-fähige IT durch strukturierte Sicherheit",
          company: "Reguliertes Unternehmen (50–100 Mitarbeiter)",
          summary: "Erreichung einer audit-fähigen IT durch ein strukturiertes Sicherheits- und Governance-Framework für regulatorische Compliance.",
          href: "/case-studies/security-compliance",
          details: {
            situation: "Das Unternehmen stand vor einem anstehenden regulatorischen Audit und stellte fest, dass seine aktuellen IT-Sicherheitsmaßnahmen undokumentiert und inkonsistent waren.",
            problem: [
              "Keine formalen Sicherheitsrichtlinien oder -verfahren.",
              "Unkontrollierter Zugriff auf sensible Finanzdaten.",
              "Fehlen von Audit-Logs für Systemaktivitäten."
            ],
            decisionPoint: "Die Gefahr, die Betriebserlaubnis wegen Nichteinhaltung zu verlieren, zwang zu einer sofortigen Überarbeitung der Sicherheit.",
            solution: {
              introduction: "Wir haben ein strenges Sicherheits- und Compliance-Framework implementiert:",
              points: [
                { title: "Security Framework", description: "Implementierung eines Sicherheits-Frameworks basierend auf ISO 27001." },
                { title: "Zugriffskontrolle", description: "Strikte rollenbasierte Zugriffskontrolle (RBAC) und MFA." },
                { title: "SIEM", description: "Implementierung von zentralisiertem Logging und Monitoring." }
              ]
            },
            result: {
              metrics: [
                { value: "100%", label: "Compliant" },
                { value: "Null", label: "Feststellungen" },
                { value: "Audit", label: "Bereit" }
              ],
              outcomes: [
                "Das regulatorische Audit wurde ohne wesentliche Feststellungen erfolgreich bestanden.",
                "Volle Sichtbarkeit von Datenzugriffen und Systemänderungen.",
                "Automatisierte Compliance-Berichterstattung für die laufende Überwachung."
              ]
            },
            longTermStability: "Sicherheit ist nun in der Unternehmenskultur verankert, was sicherstellt, dass sie auch bei sich ändernden Vorschriften konform bleiben."
          }
        },
        {
          title: "Co-Managed IT für eine Software-Agentur",
          company: "Software-Agentur (20–40 Mitarbeiter)",
          summary: "Unterstützung eines internen Teams mit Experten-Support und Enterprise-Tools, um schnelles Wachstum und Sicherheit zu bewältigen.",
          href: "/case-studies/co-managed-it",
          details: {
            situation: "Ein kleines internes IT-Team war mit den Anforderungen einer wachsenden Bebelegschaft und einer komplexen Infrastruktur überfordert.",
            problem: [
              "Burnout des IT-Personals und hohe Fluktuation.",
              "Keine Zeit für strategische Projekte aufgrund ständiger \"Feuerwehr-Einsätze\".",
              "Mangel an spezialisiertem Wissen in den Bereichen Cloud und Sicherheit."
            ],
            decisionPoint: "Der interne IT-Leiter erkannte, dass sie ohne externe Hilfe nicht mit den Zielen der digitalen Transformation Schritt halten konnten.",
            solution: {
              introduction: "Wir haben eine Co-Managed-Partnerschaft aufgebaut, um ihr Team zu verstärken:",
              points: [
                { title: "Co-Managed IT", description: "Ein kollaboratives Modell, bei dem wir die Infrastruktur verwalten, während sie den Benutzer-Support übernehmen." },
                { title: "Projektunterstützung", description: "Spezialisierte Hilfe für Cloud-Migrationen und Sicherheits-Audits." },
                { title: "Wissenstransfer", description: "Regelmäßige Schulungen für das interne Team." }
              ]
            },
            result: {
              metrics: [
                { value: "40%", label: "Effizienter" },
                { value: "Null", label: "Burnout" },
                { value: "Strategischer", label: "Fokus" }
              ],
              outcomes: [
                "Das interne Team kann sich nun auf geschäftskritische Anwendungen konzentrieren.",
                "Die Stabilität der Infrastruktur wurde deutlich erhöht.",
                "Reduzierter Stress und verbesserte Arbeitsmoral beim internen IT-Personal."
              ]
            },
            longTermStability: "Das Co-Managed-Modell bietet die perfekte Balance zwischen internem Wissen und externer Expertise und ermöglicht so ein nachhaltiges Wachstum."
          }
        },
        {
          title: "Hardware-Lifecycle-Management",
          company: "Einzelhandelskette (15 Standorte)",
          summary: "Standardisierung des Hardware-Austauschs zur Reduzierung von Ausfallzeiten und Wartungskosten.",
          href: "/case-studies/hardware-lifecycle",
          details: {
            situation: "Eine mittelständische Einzelhandelskette mit 15 Standorten arbeitete mit veralteter Hardware, die teilweise über 7 Jahre alt war. Dies führte zu häufigen Ausfällen und inkonsistenter Leistung in den Filialen.",
            problem: [
              "Häufige Hardware-Ausfälle beeinträchtigten den Kundenservice.",
              "Langsame Leistung führte zu Frustration bei den Mitarbeitern.",
              "Unvorhersehbare und hohe Wartungskosten.",
              "Mangelnde Standardisierung an den Standorten."
            ],
            decisionPoint: "Ein kritischer Server im Hauptlager fiel aus, was alle Lieferungen für 24 Stunden stoppte und zu erheblichen Umsatzeinbußen führte.",
            solution: {
              introduction: "Ecksolution-IT implementierte ein umfassendes Hardware-Lifecycle-Management-Programm zur Standardisierung und Modernisierung der Infrastruktur:",
              points: [
                { title: "Standardisierung", description: "Einführung eines einheitlichen Hardware-Standards an allen 15 Standorten." },
                { title: "Lifecycle-Richtlinie", description: "Festlegung eines 4-jährigen Austauschzyklus für alle kritische Hardware." },
                { title: "Zentralisiertes Management", description: "Einsatz von Tools zur Fernüberwachung und für automatisierte Updates." },
                { title: "Inventarverfolgung", description: "Erstellung eines detaillierten Anlagenregisters für alle Hardwarekomponenten." }
              ]
            },
            result: {
              metrics: [
                { value: "40%", label: "Weniger Tickets" },
                { value: "25%", label: "Produktiver" },
                { value: "Planbar", label: "Budget" }
              ],
              outcomes: [
                "Erhebliche Reduzierung hardwarebedingter Ausfallzeiten.",
                "Verbesserte Mitarbeitermoral durch bessere Arbeitsmittel.",
                "Klare Sicht auf zukünftige IT-Investitionen.",
                "Konsistentes Kundenerlebnis in allen Einzelhandelsfilialen."
              ]
            },
            longTermStability: "Die Einzelhandelskette arbeitet nun auf einer modernen, standardisierten Basis mit einem klaren Fahrplan für zukünftige Hardware-Investitionen, was die langfristige operative Stabilität sichert."
          }
        },
        {
          title: "Umfassendes IT-Risiko-Audit",
          company: "Finanzdienstleistungsunternehmen",
          summary: "Identifizierung und Entschärfung von Sicherheitslücken zur Gewährleistung der Einhaltung gesetzlicher Vorschriften.",
          href: "/case-studies/it-risk-audit",
          details: {
            situation: "Ein Finanzdienstleistungsunternehmen musste die vollständige Einhaltung neuer, strengerer Branchenvorschriften in Bezug auf Datenschutz und Risikomanagement sicherstellen.",
            problem: [
              "Mangelnde Transparenz bei potenziellen Sicherheitslücken.",
              "Nicht konforme Datenverarbeitungsprozesse.",
              "Unzureichende Zugriffskontrollen für sensible Informationen.",
              "Risiko erheblicher regulatorischer Bußgelder."
            ],
            decisionPoint: "Eine interne Überprüfung ergab erhebliche Lücken im Sicherheitsstatus, die zu einem Scheitern eines externen Audits führen könnten.",
            solution: {
              introduction: "Ecksolution-IT führte ein tiefgreifendes IT-Risiko-Audit durch und implementierte einen umfassenden Sanierungsplan:",
              points: [
                { title: "Schwachstellenanalyse", description: "Identifizierung und Priorisierung von Sicherheitsschwachstellen im gesamten Netzwerk." },
                { title: "Compliance-Mapping", description: "Abgleich bestehender Prozesse mit regulatorischen Anforderungen." },
                { title: "Richtlinienentwicklung", description: "Erstellung und Implementierung robuster Datenschutz- und Zugriffsrichtlinien." },
                { title: "Sicherheitsschulung", description: "Durchführung von Mitarbeiterschulungen zu Best Practices im Bereich Sicherheit und Compliance." }
              ]
            },
            result: {
              metrics: [
                { value: "100%", label: "Konform" },
                { value: "Reduziert", label: "Risiko" },
                { value: "Hoch", label: "Vertrauen" }
              ],
              outcomes: [
                "Alle nachfolgenden externen regulatorischen Audits erfolgreich bestanden.",
                "Deutlich gestärktes Sicherheitsniveau und verbesserter Datenschutz.",
                "Klare Dokumentation aller IT-Prozesse und -Kontrollen.",
                "Verbesserter Ruf für Sicherheit und Zuverlässigkeit am Markt."
              ]
            },
            longTermStability: "Das Unternehmen verfügt nun über einen robusten Rahmen für das laufende Risikomanagement und die Compliance, um den sich entwickelnden regulatorischen Anforderungen immer einen Schritt voraus zu sein."
          }
        },
        {
          title: "Sicheres Backup für eine Anwaltskanzlei",
          company: "Anwaltskanzlei (15–30 Mitarbeiter)",
          summary: "Sicherstellung der Geschäftskontinuität mit unveränderlichen Backups und schneller Wiederherstellung nach einem Ransomware-Angriff.",
          href: "/case-studies/managed-backup",
          details: {
            situation: "Eine spezialisierte Anwaltskanzlei mit 25 Mitarbeitern verließ sich auf ein veraltetes, bandbasiertes Backup-System. Sie waren besorgt über die Zeit, die im Falle eines Cyberangriffs oder Hardware-Ausfalls für die Wiederherstellung kritischer Fallakten benötigt würde.",
            problem: [
              "Langsame und unzuverlässige Band-Backups.",
              "Keine externe Redundanz für die Notfallwiederherstellung.",
              "Hohes Risiko von Datenverlust durch Ransomware.",
              "Wiederherstellungszeiten, die in Tagen statt Stunden gemessen wurden."
            ],
            decisionPoint: "Eine nahegelegene Kanzlei wurde von Ransomware getroffen und verlor die Arbeit von drei Wochen, was unseren Kunden dazu veranlasste, nach einer modernen, sicheren Lösung zu suchen.",
            solution: {
              introduction: "Ecksolution-IT implementierte eine mehrschichtige, unveränderliche Backup-Strategie, um den totalen Datenschutz zu gewährleisten:",
              points: [
                { title: "Unveränderliche Backups", description: "Speicher, der selbst durch Ransomware nicht geändert oder gelöscht werden kann." },
                { title: "Cloud-Redundanz", description: "Automatisierte externe Replikation in eine sichere Cloud-Umgebung." },
                { title: "Sofortige Wiederherstellung", description: "Möglichkeit, virtuelle Maschinen direkt aus dem Backup-Speicher zu starten." },
                { title: "Regelmäßige Tests", description: "Automatisierte monatliche Wiederherstellungsübungen zur Überprüfung der Datenintegrität." }
              ]
            },
            result: {
              metrics: [
                { value: "< 1 Std.", label: "Wiederherstellung" },
                { value: "100%", label: "Datensicherheit" },
                { value: "Null", label: "Band-Handling" }
              ],
              outcomes: [
                "Wiederherstellungszeit (RTO) von 48 Stunden auf unter 60 Minuten reduziert.",
                "Vollständiger Schutz gegen Ransomware durch unveränderlichen Speicher.",
                "Sicherheit für die Partner, dass ihre Daten sicher und wiederherstellbar sind.",
                "Automatisierte Prozesse machten das manuelle Bandmanagement überflüssig."
              ]
            },
            longTermStability: "Die Kanzlei verfügt nun über eine belastbare Datenschutzstrategie, die mit ihrem wachsenden Volumen an digitalen Beweisen und Fallakten skaliert und sicherstellt, dass sie immer auf das Unerwartete vorbereitet sind."
          }
        },
        {
          title: "Netzwerkoptimierung für einen Logistik-Hub",
          company: "Logistik-Hub (50–100 Mitarbeiter)",
          summary: "Beseitigung von WLAN-Funklöchern und Verbindungsabbrüchen zur Verbesserung der Lagereffizienz und Versandgenauigkeit.",
          href: "/case-studies/network-management",
          details: {
            situation: "Ein großer Logistik-Hub hatte häufige WLAN-Ausfälle in seinem 4.500 m² großen Lager, was dazu führte, dass Handscanner die Verbindung verloren und Sendungen verzögert wurden.",
            problem: [
              "Inconsistent WLAN-Abdeckung in der gesamten Lagerhalle.",
              "Häufige Scanner-Verbindungsabbrüche, die zu Dateneingabefehlern führten.",
              "Netzwerküberlastung während der Hauptbetriebszeiten.",
              "Veraltete Netzwerkhardware, die der Gerätedichte nicht gewachsen war."
            ],
            decisionPoint: "Eine größere Versandverzögerung durch einen Netzwerkausfall während einer Hauptferienzeit führte zu erheblichen Kundenbeschwerden und Umsatzverlusten.",
            solution: {
              introduction: "Ecksolution-IT führte eine umfassende Standortanalyse durch und implementierte ein Hochleistungs-Mesh-Netzwerk:",
              points: [
                { title: "Standortanalyse", description: "Heat-Mapping zur Identifizierung von Funklöchern und Störquellen." },
                { title: "Mesh-Netzwerk", description: "Einsatz von Enterprise-Access-Points mit nahtlosem Roaming." },
                { title: "VLAN-Segmentierung", description: "Trennung des Scanner-Verkehrs vom Gast- und Verwaltungsnetzwerk." },
                { title: "Proaktives Monitoring", description: "Echtzeit-Warnungen für Netzwerkzustand und Leistungsmetriken." }
              ]
            },
            result: {
              metrics: [
                { value: "99,9%", label: "WLAN-Uptime" },
                { value: "15%", label: "Effizienzgewinn" },
                { value: "Null", label: "Funklöcher" }
              ],
              outcomes: [
                "Beseitigung aller WLAN-Funklöcher und Verbindungsabbrüche.",
                "Steigerung der Kommissioniereffizienz im Lager um 15%.",
                "Reduzierung von Dateneingabefehlern durch Scanner-Verbindungsabbrüche.",
                "Stabile Netzwerkleistung auch bei Spitzenbetriebsvolumen."
              ]
            },
            longTermStability: "Der Logistik-Hub verfügt nun über eine robuste, skalierbare Netzwerkinfrastruktur, die zukünftige Automatisierungen und eine steigende Anzahl verbundener Geräte unterstützen kann."
          }
        },
        {
          title: "Strategische IT-Roadmap für eine NGO",
          company: "Non-Profit (40–60 Mitarbeiter)",
          summary: "Ausrichtung der Technologie an langfristigen Zielen zur Reduzierung reaktiver Ausgaben und Einführung neuer digitaler Dienste.",
          href: "/case-studies/strategic-it-roadmap",
          details: {
            situation: "Eine wachsende NGO kämpfte mit einer 'Flickenteppich'-IT-Umgebung. Sie gaben den Großteil ihres Budgets für Notfallreparaturen statt für strategische Verbesserungen aus.",
            problem: [
              "Hohe reaktive IT-Ausgaben ohne langfristigen Plan.",
              "Inkompatible Systeme, die die Zusammenarbeit zwischen den Abteilungen behinderten.",
              "Sicherheitslücken durch nicht gepatchte Legacy-Software.",
              "Mangel an technischer Vision zur Unterstützung neuer digitaler Initiativen."
            ],
            decisionPoint: "Der Vorstand erkannte, dass ihre veraltete Technologie sie daran hinderte, eine kritische neue Plattform zur Spenderbindung einzuführen.",
            solution: {
              introduction: "Ecksolution-IT entwickelte eine 3-jährige strategische IT-Roadmap, um ihre Technologie auf ihre Mission auszurichten:",
              points: [
                { title: "Infrastruktur-Audit", description: "Umfassende Überprüfung aller bestehenden Systeme und Software." },
                { title: "Zielausrichtung", description: "Workshops mit der Führungsebene zur Abstimmung von IT-Investitionen auf organisatorische Ziele." },
                { title: "Phasenweise Upgrades", description: "Ein priorisierter Zeitplan für Hardware- und Softwareverbesserungen." },
                { title: "Budgetplanung", description: "Planbares 3-Jahres-Budget für IT-Investitionen und Betriebskosten." }
              ]
            },
            result: {
              metrics: [
                { value: "30%", label: "Kosteneinsparung" },
                { value: "3 Jahre", label: "Klarer Plan" },
                { value: "Hoch", label: "Impact" }
              ],
              outcomes: [
                "Reduzierung der Notfall-IT-Ausgaben um 30% durch proaktive Planung.",
                "Erfolgreiche und pünktliche Einführung der neuen Spenderbindungsplattform.",
                "Verbesserte Zusammenarbeit zwischen den Abteilungen durch vereinheitlichte Systeme.",
                "Klare Sichtbarkeit für den Vorstand über den Wert der IT-Investitionen."
              ]
            },
            longTermStability: "Die NGO betrachtet die IT nun als strategisches Gut, das ihre Mission unterstützt, mit einem klaren Plan für laufende Innovation und Wachstum."
          }
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Managed IT Services",
        headline: "Wir reparieren nicht nur Computer. Wir übernehmen die volle Verantwortung für Ihren Geschäftsbetrieb.",
        subheadline: "Hören Sie auf, sich Sorgen um Ausfallzeiten und Sicherheitslücken zu machen. Wir betreiben Ihre gesamte IT-Infrastruktur mit 100% Verantwortlichkeit und festen monatlichen Kosten.",
        cta: "Strategiegespräch buchen",
      },
      problem: {
        headline: "IT ist entweder ein Motor oder eine Handbremse.",
        subheadline: "Die meisten Unternehmen leiden unter reaktiver IT, die nur reagiert, wenn etwas kaputt geht. Dies führt zu drei kritischen Fehlern:",
        points: [
          { title: "Umsatzschädigende Ausfallzeiten", description: "Wenn Ihre Systeme stehen, ist Ihr Team untätig, aber Ihre Lohnkosten laufen weiter." },
          { title: "Sicherheitsangst", description: "Die Frage, ob Ihre Backups wirklich funktionieren oder ob ein einziger Klick das Unternehmen ruinieren könnte." },
          { title: "Budget-Chaos", description: "Unvorhersehbare IT-Rechnungen, die schwanken, je nachdem, wie viele Dinge diesen Monat kaputt gegangen sind." }
        ]
      },
      solution: {
        headline: "Vollständige IT-Verantwortung.",
        subheadline: "Wir führen Sie weg von 'Break-Fix' hin zu 'Managed Operations'. Wir verantworten das Ergebnis, nicht nur die Tickets.",
        points: [
          { title: "Fokus auf Null Ausfallzeit", description: "Proaktive Wartung, die Probleme identifiziert und löst, bevor sie Ihr Team beeinträchtigen." },
          { title: "Festpreis-Garantie", description: "Eine planbare monatliche Gebühr, die alles abdeckt. Keine Überraschungsrechnungen, niemals." },
          { title: "Strategische Partnerschaft", description: "Wir agieren als Ihr CTO und stellen sicher, dass Ihre Technologie-Roadmap mit Ihren Geschäftszielen übereinstimmt." }
        ]
      },
      results: {
        headline: "Die Zahlen, auf die es ankommt.",
        subheadline: "Unsere Leistung wird an Ihrer Verfügbarkeit und Produktivität gemessen.",
        cards: [
          { metric: "99,9%", label: "Systemverfügbarkeit" },
          { metric: "< 15 Min.", label: "Reaktionszeit" },
          { metric: "30%", label: "Effizienzsteigerung" },
          { metric: "0", label: "Sicherheitsvorfälle" }
        ]
      },
      services: {
        headline: "Was 'volle Verantwortung' bedeutet.",
        subheadline: "Unser Managed Service ist eine komplette IT-Abteilung aus einer Hand.",
        items: [
          { title: "24/7 Überwachung & Management", description: "Kontinuierliche Überwachung von Servern, Netzwerken und Endgeräten." },
          { title: "Unbegrenzter Helpdesk-Support", description: "Schneller, professioneller Support für Ihr gesamtes Team, wann immer er benötigt wird." },
          { title: "Cybersecurity & Compliance", description: "Fortschrittlicher Bedrohungsschutz, Verschlüsselung und Management gesetzlicher Anforderungen." },
          { title: "Backup & Disaster Recovery", description: "Automatisierte Off-Site-Backups mit garantierten Wiederherstellungszeiten." },
          { title: "Cloud & Infrastruktur", description: "Vollständiges Management von Microsoft 365, Azure und On-Premise-Systemen." },
          { title: "IT-Strategie & Beratung", description: "Regelmäßige Business-Reviews und langfristige Technologieplanung." }
        ]
      },
      process: {
        headline: "Wie wir übernehmen.",
        subheadline: "Ein nahtloser Übergang zu professionellen IT-Operationen.",
        steps: [
          { title: "Tiefen-Audit", description: "Wir dokumentieren jedes Asset, jede Lizenz und jede Schwachstelle in Ihrem aktuellen Setup." },
          { title: "Stabilisierung", description: "Wir beheben sofortige Risiken und standardisieren Ihre Systeme auf unser Hochverfügbarkeits-Niveau." },
          { title: "Kontinuierlicher Betrieb", description: "Wir übernehmen die volle Kontrolle und bieten 24/7-Management sowie strategische Beratung." }
        ]
      },
      caseStudy: {
        headline: "Echte Ergebnisse für echte Unternehmen.",
        company: "Logistik Leader GmbH",
        challenge: "Häufige Serverabstürze verzögerten Lieferungen und kosteten 5.000 € pro Stunde an verlorener Produktivität.",
        solution: "Implementierung einer vollständig verwalteten Hybrid-Cloud-Infrastruktur mit redundanter Ausfallsicherung.",
        result: "Keine kritischen Ausfallzeiten in 24 Monaten und eine Reduzierung der IT-Support-Tickets um 40%."
      },
      philosophy: {
        quote: "Wir verkaufen keine Stunden. Wir verkaufen Verfügbarkeit.",
        author: "Ecksolution-IT Philosophie"
      },
      faq: {
        headline: "Häufige Fragen zu Managed IT.",
        items: [
          { question: "Was genau ist in der festen monatlichen Gebühr enthalten?", answer: "Alles. Sämtliche Überwachung, Wartung, Sicherheitsupdates und unbegrenzter Helpdesk-Support sind enthalten. Keine versteckten Kosten." },
          { question: "Wie stellen Sie sicher, dass unsere Daten sicher sind?", answer: "Wir verwenden Verschlüsselung auf Enterprise-Niveau, Multi-Faktor-Authentifizierung und 24/7-Bedrohungsüberwachung. Wir testen Backups regelmäßig." },
          { question: "Können Sie mit unserem bestehenden internen IT-Mitarbeiter zusammenarbeiten?", answer: "Ja. Wir bieten 'Co-Managed IT' an, bei dem wir die schwere Arbeit (Server, Sicherheit, Backups) übernehmen, während sich Ihr interner Mitarbeiter auf Anwenderprojekte konzentriert." }
        ]
      },
    },
    common: {
      discussNeeds: "Besprechen Sie Ihren Bedarf",
      outcomesTitle: "Klare Geschäftsergebnisse",
      outcomesSub: "Was Sie von einer Partnerschaft mit uns erwarten können.",
      processTitle: "Unser bewährter Prozess",
      processSub: "Wie wir konsistente Ergebnisse liefern.",
      analysis: "Analyse",
      implementation: "Implementierung",
      operations: "Betrieb",
      relatedSolutionsTitle: "Verwandte Lösungen erkunden",
      relatedSolutionsSub: "Weitere Möglichkeiten, wie wir Unternehmen helfen, IT-Risiken zu eliminieren.",
      viewAllSolutions: "Alle Lösungen anzeigen",
      learnMore: "Mehr erfahren",
      ctaTitle: "Bereit, IT-Risiken zu eliminieren?",
      ctaSub: "Erhalten Sie ein umfassendes Audit Ihres aktuellen Setups. Unverbindlich und klar.",
      ctaButton: "Ihr IT-Audit anfordern",
    },
  },
  es: {
    nav: {
      risk: "El Riesgo",
      solutions: "Soluciones",
      caseStudies: "Casos de Éxito",
      pricing: "Precios",
      getAudit: "Obtener Auditoría",
      megaMenu: {
        core: "Oferta Principal",
        managedOps: "Operaciones de IT Gestionadas",
        managedOpsDesc: "Operamos su IT de manera confiable para que su negocio funcione sin interrupciones.",
        coManaged: "IT Co-Gestionada",
        coManagedDesc: "Potencie a su equipo interno con soporte experto y herramientas empresariales.",
        pricingLink: "Ver precios predecibles",
        securityBackup: "Seguridad y Respaldo",
        cybersecurity: "Protección de Ciberseguridad",
        cybersecurityDesc: "Proteja su negocio de las amenazas antes de que causen daños.",
        backup: "Respaldo Gestionado",
        backupDesc: "Copias de seguridad automáticas que garantizan que nunca se pierdan datos.",
        infrastructure: "Infraestructura",
        network: "Gestión de Redes",
        networkDesc: "Garantice un internet rápido y confiable para que su equipo nunca deje de trabajar.",
        hardware: "Ciclo de Vida del Hardware",
        hardwareDesc: "Mantenga a su equipo productivo con equipos actualizados y confiables.",
        migration: "Migración y Proyectos",
        m365Migration: "Migración a Microsoft 365",
        m365MigrationDesc: "Cambie a Microsoft 365 sin tiempo de inactividad ni pérdida de datos.",
        azureMigration: "Migración a Azure",
        azureMigrationDesc: "Mueva su infraestructura a Azure de forma segura y con control total.",
        entryPoints: "Puntos de Entrada",
        riskAudit: "Auditoría de Riesgos de IT",
        riskAuditDesc: "Identifique y solucione vulnerabilidades ocultas antes de que resulten costosas.",
        roadmap: "Hoja de Ruta Estratégica de IT",
        roadmapDesc: "Alinee sus inversiones tecnológicas con sus objetivos de crecimiento empresarial.",
      }
    },
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      rights: "Ecksolution-IT Managed Services. Todos los derechos reservados.",
    },
    solutions: {
      "it-support-for-businesses": {
        title: "Soporte de TI para Empresas",
        hero: "Soporte de TI confiable que escala con su negocio.",
        description: "Deje de preocuparse por los fallos técnicos. Nuestro soporte de TI proactivo garantiza que sus sistemas estén siempre activos, seguros y funcionando al máximo.",
        problem: {
          title: "El costo de una TI poco confiable",
          points: [
            "Tiempos de inactividad frecuentes que interrumpen la productividad de los empleados",
            "Tiempos de respuesta lentos de los proveedores de TI actuales",
            "Vulnerabilidades de seguridad ocultas que ponen en riesgo los datos",
            "Costos de TI impredecibles que imposibilitan la planificación presupuestaria"
          ]
        },
        solution: {
          title: "Soporte de TI empresarial proactivo",
          points: [
            "Monitoreo proactivo las 24 horas para detectar problemas a tiempo",
            "Soporte de helpdesk rápido y profesional para su equipo",
            "Auditorías de seguridad periódicas y gestión de parches",
            "Consultoría estratégica de TI para alinear la tecnología con el crecimiento"
          ]
        },
        results: [
          { metric: "99.9%", label: "Tiempo de actividad del sistema" },
          { metric: "15 min", label: "Tiempo de respuesta promedio" },
          { metric: "30%", label: "Reducción de costos" }
        ],
        process: {
          analysis: "Auditamos su infraestructura actual e identificamos los puntos críticos.",
          implementation: "Desplegamos nuestras herramientas de monitoreo y estabilizamos su entorno.",
          operations: "Brindamos soporte continuo y optimización constante."
        },
        caseStudy: {
          companyType: "Servicios Profesionales",
          title: "Estabilización de TI para un bufete de abogados en crecimiento",
          situation: "Un bufete de abogados con más de 50 empleados luchaba con caídas frecuentes del servidor y acceso remoto lento.",
          problem: "Su proveedor de TI anterior era reactivo, solo arreglaba las cosas después de que se rompían, lo que provocaba pérdidas de horas facturables.",
          decisionPoint: "Necesitaban un socio que asumiera la responsabilidad total de su tiempo de actividad.",
          solution: "Implementamos un plan de soporte de TI gestionado con monitoreo 24/7 y actualizamos su infraestructura de acceso remoto.",
          result: "Cero tiempos de inactividad no programados en los primeros 12 meses y un aumento del 40% en la eficiencia del trabajo remoto.",
          slug: "managed-it-operations"
        }
      },
      "microsoft-365-services": {
        title: "Servicios de Microsoft 365",
        hero: "Maximice su productividad con Microsoft 365 gestionado.",
        description: "Saque más provecho de su inversión en Microsoft 365. Nos encargamos de la migración, la seguridad y la gestión para que su equipo pueda colaborar sin límites.",
        problem: {
          title: "Desafíos de Microsoft 365",
          points: [
            "Migraciones complejas que provocan pérdida de datos o tiempo de inactividad",
            "Configuraciones de seguridad mal ajustadas que dejan los datos expuestos",
            "Funciones infrautilizadas que resultan en costos de licencia desperdiciados",
            "Falta de soporte experto para funciones avanzadas de M365"
          ]
        },
        solution: {
          title: "Gestión experta de M365",
          points: [
            "Migración fluida y sin tiempo de inactividad a Microsoft 365",
            "Configuración de seguridad avanzada (MFA, Acceso Condicional)",
            "Optimización continua de licencias y gestión de usuarios",
            "Soporte experto para Teams, SharePoint y OneDrive"
          ]
        },
        results: [
          { metric: "100%", label: "Integridad de datos" },
          { metric: "25%", label: "Ahorro en licencias" },
          { metric: "24/7", label: "Soporte experto" }
        ],
        process: {
          analysis: "Evaluamos sus sistemas actuales de correo y archivos para la preparación de la migración.",
          implementation: "Ejecutamos una migración por fases sin impacto en los usuarios.",
          operations: "Gestionamos y aseguramos su entorno para el éxito a largo plazo."
        },
        caseStudy: {
          companyType: "Fabricación",
          title: "Modernización de la colaboración para un fabricante global",
          situation: "Un fabricante utilizaba correo electrónico local obsoleto y recursos compartidos de archivos fragmentados.",
          problem: "La colaboración entre sitios globales era difícil y la seguridad era inconsistente.",
          decisionPoint: "Necesitaban una plataforma en la nube unificada y segura para todos los empleados.",
          solution: "Migramos a más de 500 usuarios a Microsoft 365 e implementamos SharePoint para la gestión global de documentos.",
          result: "Mejora de la eficiencia de la colaboración y control de seguridad centralizado en todas las ubicaciones.",
          slug: "microsoft-365-migration"
        }
      },
      "azure-hybrid-infrastructure": {
        title: "Infraestructura de Azure e Híbrida",
        hero: "Construya una infraestructura resiliente y escalable con Azure.",
        description: "Modernice su centro de datos con Azure. Diseñamos y gestionamos entornos de nube híbrida que brindan la flexibilidad y seguridad que su negocio exige.",
        problem: {
          title: "Limitaciones de la infraestructura",
          points: [
            "Hardware local antiguo que es costoso de mantener",
            "Falta de escalabilidad para las crecientes cargas de trabajo empresariales",
            "Gestión compleja de entornos de nube híbrida",
            "Recuperación ante desastres inadecuada para sistemas críticos"
          ]
        },
        solution: {
          title: "Soluciones de Azure gestionadas",
          points: [
            "Diseño estratégico de Azure y migración a la nube",
            "Integración fluida entre el entorno local y la nube",
            "Optimización continua de costos y ajuste de rendimiento",
            "Recuperación ante desastres de nivel empresarial en la nube"
          ]
        },
        results: [
          { metric: "40%", label: "Ahorro en infraestructura" },
          { metric: "99.99%", label: "Disponibilidad en la nube" },
          { metric: "Instantánea", label: "Escalabilidad" }
        ],
        process: {
          analysis: "Evaluamos sus cargas de trabajo actuales para determinar su idoneidad para la nube.",
          implementation: "Construimos y migramos su infraestructura a un entorno seguro de Azure.",
          operations: "Brindamos gestión y optimización las 24 horas de sus recursos en la nube."
        },
        caseStudy: {
          companyType: "Comercio electrónico",
          title: "Escalando para el crecimiento con la nube híbrida de Azure",
          situation: "Una empresa de comercio electrónico estaba superando la capacidad de su centro de datos local.",
          problem: "Los picos de tráfico estacionales causaban ralentizaciones en el sitio y pérdida de ventas.",
          decisionPoint: "Necesitaban una infraestructura que pudiera escalar instantáneamente con la demanda.",
          solution: "Implementamos un entorno híbrido de Azure que escala automáticamente durante los períodos pico.",
          result: "100% de tiempo de actividad durante los eventos de ventas pico y una reducción del 30% en los costos anuales de alojamiento.",
          slug: "azure-cloud-infrastructure"
        }
      },
      "backup-and-security": {
        title: "Respaldo y Seguridad",
        hero: "Proteja los datos de su negocio con seguridad de múltiples capas.",
        description: "No permita que un ciberataque o la pérdida de datos detengan su negocio. Nuestros servicios gestionados de respaldo y seguridad brindan total tranquilidad.",
        problem: {
          title: "El panorama de las amenazas",
          points: [
            "Aumento de los ataques de ransomware dirigidos a pequeñas empresas",
            "Copias de seguridad poco confiables que fallan cuando más las necesita",
            "Error humano que conduce a la eliminación accidental de datos",
            "Falta de visibilidad sobre las amenazas y los riesgos de seguridad"
          ]
        },
        solution: {
          title: "Protección total de datos",
          points: [
            "Copias de seguridad inmutables y fuera del sitio que no se pueden eliminar",
            "Protección avanzada de endpoints y detección de amenazas",
            "Pruebas periódicas de respaldo y simulacros de recuperación",
            "Monitoreo de seguridad las 24 horas y respuesta a incidentes"
          ]
        },
        results: [
          { metric: "0", label: "Incidentes de pérdida de datos" },
          { metric: "100%", label: "Éxito en la recuperación" },
          { metric: "24/7", label: "Monitoreo de amenazas" }
        ],
        process: {
          analysis: "Identificamos sus datos críticos y evaluamos su postura de seguridad actual.",
          implementation: "Desplegamos nuestro stack de seguridad y respaldo de múltiples capas.",
          operations: "Monitoreamos y probamos continuamente su protección para una confiabilidad total."
        },
        caseStudy: {
          companyType: "Servicios Financieros",
          title: "Recuperación de ransomware con respaldo gestionado",
          situation: "Una firma de servicios financieros fue golpeada por un sofisticado ataque de ransomware.",
          problem: "Sus copias de seguridad internas fueron cifradas por los atacantes, dejándolos sin datos.",
          decisionPoint: "Necesitaban una solución de respaldo que fuera verdaderamente aislada e inmutable.",
          solution: "Previamente habíamos implementado nuestro servicio de respaldo gestionado con inmutabilidad fuera del sitio.",
          result: "Restauramos todos los sistemas críticos en 4 horas con cero pérdida de datos y sin pagar rescate.",
          slug: "managed-backup"
        }
      }
    },
    hero: {
      badge: "Operaciones de TI Gestionadas",
      headline: "Deje de gestionar el caos de TI. Somos su departamento de TI completo.",
      subheadline: "Responsabilidad total de TI. Operamos su infraestructura de manera confiable para que su negocio funcione sin interrupciones. Sin excusas, solo resultados.",
      cta: "Hablemos de sus necesidades",
      secondaryCta: "Ver Casos de Éxito",
    },
    problem: {
      badge: "El Problema",
      headline: "La mala TI agota los márgenes.",
      subheadline: "Cuando la tecnología falla, el negocio se detiene. La mayoría de los proveedores de TI se centran en los tickets; nosotros nos centramos en prevenirlos.",
      cards: [
        {
          title: "Tiempo de Inactividad Impredecible",
          description: "Cada minuto de fallo del sistema es pérdida de ingresos y empleados frustrados.",
        },
        {
          title: "Vulnerabilidades de Seguridad",
          description: "Los sistemas obsoletos son una puerta abierta para el ransomware y las brechas de datos.",
        },
        {
          title: "Costos de TI Ocultos",
          description: "Facturas variables y fallos sorpresa de hardware destruyen la planificación presupuestaria.",
        },
      ],
    },
    solution: {
      badge: "La Solución",
      headline: "Arquitectando Fiabilidad.",
      subheadline: "No solo 'arreglamos' cosas. Construimos y operamos una base estable para su crecimiento.",
      points: [
        {
          title: "Responsabilidad Sin Concesiones",
          description: "Asumimos la responsabilidad total de toda su infraestructura tecnológica. Sin excusas.",
        },
        {
          title: "Infraestructura Predictiva",
          description: "Monitoreamos y mantenemos los sistemas de manera proactiva para detener los problemas antes de que ocurran.",
        },
        {
          title: "Postura de Seguridad Fortalecida",
          description: "Protección de nivel empresarial escalada para las necesidades de su negocio.",
        },
      ],
    },
    results: {
      headline: "Resultados Comerciales Claros",
      subheadline: "Lo que puede esperar al asociarse con nosotros.",
      cards: [
        { metric: "15 min", label: "Tiempo de Respuesta" },
        { metric: "100%", label: "Responsabilidad" },
        { metric: "8+", label: "Años de Experiencia" },
        { metric: "24/7", label: "Monitoreo" },
      ],
    },
    services: {
      badge: "Nuestros Servicios",
      headline: "Responsabilidad Integral de TI.",
      subheadline: "Brindamos el stack completo de servicios de TI necesarios para las operaciones comerciales modernas.",
      items: [
        {
          title: "Servicios de TI Gestionados",
          description: "Gestión de TI a gran escala, desde el helpdesk hasta la planificación estratégica.",
          link: "/solutions/managed-it-services"
        },
        {
          title: "Soporte de TI para Empresas",
          description: "Soporte rápido y confiable para las necesidades tecnológicas diarias de su equipo.",
          link: "/solutions/it-support-for-businesses"
        },
        {
          title: "Servicios de Microsoft 365",
          description: "Gestión experta y seguridad para su lugar de trabajo moderno.",
          link: "/solutions/microsoft-365-services"
        },
        {
          title: "Infraestructura de Azure e Híbrida",
          description: "Soluciones escalables en la nube e híbridas para empresas en crecimiento.",
          link: "/solutions/azure-hybrid-infrastructure"
        },
        {
          title: "Respaldo y Seguridad",
          description: "Protección de datos a prueba de balas y seguridad de nivel empresarial.",
          link: "/solutions/backup-security"
        }
      ]
    },
    process: {
      badge: "Nuestro Proceso",
      headline: "Un Camino Probado hacia la Estabilidad.",
      steps: [
        {
          number: "01",
          title: "Análisis",
          description: "Auditamos su infraestructura actual, identificamos puntos únicos de fallo y documentamos cada sistema.",
        },
        {
          number: "02",
          title: "Implementación",
          description: "Desplegamos nuestros agentes de gestión, estandarizamos su seguridad y nos hacemos cargo de las relaciones con los proveedores.",
        },
        {
          number: "03",
          title: "Operaciones",
          description: "Brindamos monitoreo 24/7, soporte ilimitado de helpdesk y mantenimiento proactivo.",
        },
      ],
    },
    faq: {
      headline: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Qué tan rápido responden a problemas críticos?",
          answer: "Nuestro tiempo promedio de respuesta para problemas críticos es de menos de 15 minutos. Priorizamos los problemas que detienen el negocio.",
        },
        {
          question: "¿Reemplazan a mi equipo de TI interno?",
          answer: "Podemos actuar como su departamento de TI completo o trabajar junto a su equipo existente (TI Co-Gestionada) para brindar capacidad adicional.",
        },
        {
          question: "¿Existe un contrato a largo plazo?",
          answer: "Creemos en ganarnos su negocio cada mes. Aunque ofrecemos acuerdos anuales para mejores tarifas, también tenemos opciones mensuales flexibles.",
        },
        {
          question: "¿En qué industrias se especializan?",
          answer: "Trabajamos con servicios profesionales, manufactura, logística y empresas tecnológicas que requieren una infraestructura de TI de alta fiabilidad.",
        },
      ],
    },
    trust: {
      headline: "La Autoridad en TI Gestionada.",
      subheadline: "No solo gestionamos sistemas: diseñamos resiliencia. Asumimos la responsabilidad total de su tecnología para que pueda concentrarse en escalar su visión.",
      points: [
        { title: "Responsabilidad Sin Concesiones", description: "Eliminamos el cruce de culpas entre proveedores al ser dueños de todo el stack tecnológico." },
        { title: "Infraestructura Predictiva", description: "Nuestros sistemas identifican y resuelven cuellos de botella antes de que afecten sus operaciones." },
        { title: "Postura de Seguridad Fortalecida", description: "Implemente protocolos de seguridad de nivel bancario adaptados al mercado medio." }
      ]
    },
    cta: {
      headline: "¿Listo para eliminar el riesgo de TI?",
      subheadline: "Obtenga una auditoría completa de su configuración actual. Sin compromiso, solo claridad.",
      button: "Solicite su Auditoría de TI",
    },
    caseStudies: {
      badge: "Casos de Éxito",
      headline: "Resultados Reales.",
      subheadline: "Cómo hemos ayudado a las empresas a eliminar el caos de TI y escalar de forma segura.",
      pageTitle: "Historias de Éxito de Nuestros Clientes",
      pageSubheadline: "Vea cómo Ecksolution-IT ha ayudado a empresas de diversos sectores a eliminar el caos de TI, asegurar sus datos y escalar con confianza.",
      viewAll: "Ver todas las historias",
      readMore: "Leer caso de éxito completo",
      backToStudies: "Volver a los Casos de Éxito",
      situation: { title: "La Situación", description: "" },
      problem: { title: "El Problema", points: [] },
      decisionPoint: { title: "El Punto de Decisión", description: "" },
      solution: { title: "La Solución", introduction: "", points: [] },
      result: { title: "El Resultado", metrics: [], outcomes: [] },
      longTermStability: { title: "Estabilidad a Largo Plazo", description: "" },
      items: [
        {
          title: "Migración a Microsoft 365 sin tiempo de inactividad",
          company: "Empresa mediana (40–80 empleados)",
          summary: "Cómo una empresa mediana pasó de Google Workspace a un entorno de Microsoft 365 estructurado y seguro con cero tiempo de inactividad.",
          href: "/case-studies/microsoft-365-migration",
          details: {
            situation: "La empresa utilizaba Google Workspace para sus operaciones diarias. Sin embargo, a medida que el equipo creció a más de 60 empleados, la falta de estructura en la gestión de usuarios, el control de acceso y la seguridad general se convirtió en una preocupación importante para el equipo de liderazgo.",
            problem: [
              "Sin gestión centralizada para dispositivos y usuarios.",
              "Riesgos de seguridad significativos debido al acceso no gestionado.",
              "Procesos ineficientes para la incorporación y desincorporación de empleados."
            ],
            decisionPoint: "El liderazgo reconoció que el sistema existente ya no cumplía con los requisitos de seguridad y escalabilidad de la empresa. Se necesitaba una solución más robusta de nivel empresarial para respaldar su crecimiento continuo.",
            solution: {
              introduction: "Ecksolution-IT implementó una migración integral y una revisión de seguridad:",
              points: [
                { title: "Migración Completa", description: "Transición completa de todos los datos y correos electrónicos a Microsoft 365." },
                { title: "Entra ID", description: "Implementación de Entra ID con MFA y políticas de acceso condicional." },
                { title: "Permisos Estructurados", description: "Un nuevo sistema jerárquico de usuarios y permisos." },
                { title: "Estrategia de Respaldo", description: "Implementación de una estrategia de respaldo robusta para todos los datos de M365." }
              ]
            },
            result: {
              metrics: [
                { value: "Cero", label: "Inactividad" },
                { value: "100%", label: "Integridad de Datos" },
                { value: "Total", label: "Control" }
              ],
              outcomes: [
                "Sin tiempo de inactividad durante todo el proceso de migración.",
                "Cero pérdida de datos en todas las cuentas de usuario y unidades compartidas.",
                "Control total sobre usuarios y sistemas a través de un panel centralizado."
              ]
            },
            longTermStability: "La empresa ahora opera en una plataforma segura y escalable que respalda su modelo de trabajo híbrido, al tiempo que garantiza que todos los datos estén protegidos y cumplan con los estándares de la industria."
          }
        },
        {
          title: "TI estable y escalable con Microsoft Azure",
          company: "Empresa tecnológica (100–150 empleados)",
          summary: "Resolviendo la complejidad de TI y los problemas de escalabilidad mediante la migración a una arquitectura de nube estructurada de Microsoft Azure.",
          href: "/case-studies/azure-cloud-infrastructure",
          details: {
            situation: "La empresa operaba sus propios servidores en un centro de datos, los cuales estaban llegando a su límite.",
            problem: [
              "Altos costos de mantenimiento para el hardware físico.",
              "Falta de escalabilidad para un crecimiento rápido.",
              "Sin plan de recuperación ante desastres para la continuidad del negocio."
            ],
            decisionPoint: "El hardware estaba obsoleto y se planeaba una expansión importante, lo que requería una infraestructura más flexible.",
            solution: {
              introduction: "Ecksolution-IT diseñó una transición completa a la nube:",
              points: [
                { title: "Migración a Azure", description: "Migración de todas las cargas de trabajo a Microsoft Azure." },
                { title: "Auto-escalado", description: "Implementación de auto-escalado para coincidir con la demanda." },
                { title: "Geo-redundancia", description: "Un sistema de respaldo geo-redundante para máxima seguridad." }
              ]
            },
            result: {
              metrics: [
                { value: "99.99%", label: "Uptime" },
                { value: "30%", label: "Reducción de Costos" },
                { value: "Infinita", label: "Escalabilidad" }
              ],
              outcomes: [
                "Máxima escalabilidad para el crecimiento futuro.",
                "Reducción del 30% en los costos operativos en comparación con las instalaciones locales.",
                "Infraestructura de alta disponibilidad con recuperación ante desastres automatizada."
              ]
            },
            longTermStability: "El paso a Azure ha eliminado la dependencia del hardware y ha proporcionado una base para la expansión global."
          }
        },
        {
          title: "Operaciones de TI confiables con responsabilidad total",
          company: "PYME (30–60 empleados)",
          summary: "Cómo una PYME sin departamento de TI interno logró operaciones de TI estables y predecibles a través de un modelo de servicio gestionado.",
          href: "/case-studies/managed-it-operations",
          details: {
            situation: "La empresa no tenía TI interna y dependía de un único técnico externo que a menudo no estaba disponible.",
            problem: [
              "Largos tiempos de respuesta para problemas críticos.",
              "Sin documentación de sistemas o contraseñas.",
              "Fallos frecuentes de aplicaciones empresariales críticas."
            ],
            decisionPoint: "Un fallo del servidor durante un período de mucha actividad no pudo resolverse durante 48 horas, lo que causó una pérdida significativa de ingresos.",
            solution: {
              introduction: "Asumimos la responsabilidad total del entorno de TI:",
              points: [
                { title: "TI Gestionada", description: "Implementación de operaciones de TI gestionadas completas." },
                { title: "Documentación", description: "Documentación completa de todos los sistemas y procesos." },
                { title: "Monitoreo 24/7", description: "Monitoreo proactivo para prevenir fallos." }
              ]
            },
            result: {
              metrics: [
                { value: "< 15min", label: "Respuesta" },
                { value: "100%", label: "Documentado" },
                { value: "Fijo", label: "Costo" }
              ],
              outcomes: [
                "Tiempos de respuesta rápidos para todas las solicitudes de los empleados.",
                "Sistemas estables con mantenimiento proactivo.",
                "Un punto de contacto claro y costos mensuales predecibles."
              ]
            },
            longTermStability: "La empresa ahora trata la TI como un servicio que \"simplemente funciona\", lo que permite al liderazgo centrarse en el crecimiento del negocio principal."
          }
        },
        {
          title: "TI lista para auditorías mediante seguridad estructurada",
          company: "Empresa regulada (50–100 empleados)",
          summary: "Lograr una TI lista para auditorías a través de un marco estructurado de seguridad y gobernanza para el cumplimiento normativo.",
          href: "/case-studies/security-compliance",
          details: {
            situation: "La empresa se enfrentaba a una próxima auditoría regulatoria y se dio cuenta de que sus medidas actuales de seguridad de TI no estaban documentadas y eran inconsistentes.",
            problem: [
              "Sin políticas o procedimientos de seguridad formales.",
              "Acceso no controlado a datos financieros sensibles.",
              "Falta de registros de auditoría para las actividades del sistema."
            ],
            decisionPoint: "La amenaza de perder su licencia de operación debido al incumplimiento forzó una revisión inmediata de la seguridad.",
            solution: {
              introduction: "Implementamos un riguroso marco de seguridad y cumplimiento:",
              points: [
                { title: "Marco de Seguridad", description: "Implementación de un marco de seguridad basado en ISO 27001." },
                { title: "Control de Acceso", description: "Control de acceso estricto basado en roles (RBAC) y MFA." },
                { title: "SIEM", description: "Implementación de monitoreo y registro centralizado." }
              ]
            },
            result: {
              metrics: [
                { value: "100%", label: "Cumplimiento" },
                { value: "Cero", label: "Hallazgos" },
                { value: "Auditoría", label: "Lista" }
              ],
              outcomes: [
                "Superó con éxito la auditoría regulatoria con cero hallazgos importantes.",
                "Visibilidad total del acceso a los datos y los cambios en el sistema.",
                "Informes de cumplimiento automatizados para una supervisión continua."
              ]
            },
            longTermStability: "La seguridad ahora está integrada en la cultura de la empresa, lo que garantiza que sigan cumpliendo a medida que evolucionan las regulaciones."
          }
        },
        {
          title: "TI Co-Gestionada para una Agencia de Software",
          company: "Agencia de Software (20–40 empleados)",
          summary: "Empoderando a un equipo interno con soporte experto y herramientas empresariales para manejar el rápido crecimiento y la seguridad.",
          href: "/case-studies/co-managed-it",
          details: {
            situation: "Un pequeño equipo de TI interno estaba abrumado por las demandas de una fuerza laboral creciente y una infraestructura compleja.",
            problem: [
              "Agotamiento del personal de TI y alta rotación.",
              "Sin tiempo para proyectos estratégicos debido a la constante \"lucha contra incendios\".",
              "Falta de conocimientos especializados en la nube y seguridad."
            ],
            decisionPoint: "El gerente de TI interno se dio cuenta de que no podían seguir el ritmo de los objetivos de transformación digital sin ayuda externa.",
            solution: {
              introduction: "Establecimos una asociación co-gestionada para aumentar su equipo:",
              points: [
                { title: "TI Co-Gestionada", description: "Un modelo colaborativo donde nosotros manejamos la infraestructura mientras ellos manejan el soporte al usuario." },
                { title: "Soporte de Proyectos", description: "Ayuda especializada para migración a la nube y auditorías de seguridad." },
                { title: "Transferencia de Conocimiento", description: "Capacitación regular para el equipo interno." }
              ]
            },
            result: {
              metrics: [
                { value: "40%", label: "Más Eficiente" },
                { value: "Cero", label: "Agotamiento" },
                { value: "Enfoque", label: "Estratégico" }
              ],
              outcomes: [
                "El equipo interno ahora puede centrarse en aplicaciones críticas para el negocio.",
                "La estabilidad de la infraestructura aumentó significativamente.",
                "Reducción del estrés y mejora de la moral del personal de TI interno."
              ]
            },
            longTermStability: "El modelo co-gestionado proporciona el equilibrio perfecto entre el conocimiento interno y la experiencia externa, lo que permite un crecimiento sostenible."
          }
        },
        {
          title: "Respaldo a Prueba de Balas para un Bufete de Abogados",
          company: "Bufete de Abogados (15–30 empleados)",
          summary: "Garantizando la continuidad del negocio con copias de seguridad inmutables y recuperación rápida después de un ataque de ransomware.",
          href: "/case-studies/managed-backup",
          details: {
            situation: "Un bufete de abogados boutique con 25 empleados dependía de un sistema de respaldo basado en cintas heredado. Les preocupaba el tiempo que tomaría recuperar archivos de casos críticos en caso de un ciberataque o fallo de hardware.",
            problem: [
              "Respaldos en cinta lentos y poco confiables.",
              "Sin redundancia fuera del sitio para la recuperación ante desastres.",
              "Alto riesgo de pérdida de datos por ransomware.",
              "Tiempos de recuperación medidos en días, no en horas."
            ],
            decisionPoint: "Un bufete cercano fue afectado por ransomware y perdió tres semanas de trabajo, lo que llevó a nuestro cliente a buscar una solución moderna y a prueba de balas.",
            solution: {
              introduction: "Ecksolution-IT implementó una estrategia de respaldo inmutable de múltiples capas para garantizar la protección total de los datos:",
              points: [
                { title: "Respaldos Inmutables", description: "Almacenamiento que no puede ser modificado ni eliminado, incluso por ransomware." },
                { title: "Redundancia en la Nube", description: "Replicación automática fuera del sitio a un entorno de nube seguro." },
                { title: "Recuperación Instantánea", description: "Capacidad para arrancar máquinas virtuales directamente desde el almacenamiento de respaldo." },
                { title: "Pruebas Regulares", description: "Simulacros de recuperación mensuales automatizados para verificar la integridad de los datos." }
              ]
            },
            result: {
              metrics: [
                { value: "< 1hr", label: "Recuperación" },
                { value: "100%", label: "Seguridad" },
                { value: "Cero", label: "Cintas" }
              ],
              outcomes: [
                "Objetivo de tiempo de recuperación (RTO) reducido de 48 horas a menos de 60 minutos.",
                "Protección total contra ransomware a través de almacenamiento inmutable.",
                "Tranquilidad para los socios sabiendo que sus datos están seguros y son recuperables.",
                "Los procesos automatizados eliminaron la necesidad de la gestión manual de cintas."
              ]
            },
            longTermStability: "El bufete ahora cuenta con una estrategia de protección de datos resiliente que escala con su creciente volumen de evidencia digital y archivos de casos, asegurando que siempre estén preparados para lo inesperado."
          }
        },
        {
          title: "Optimización de Red para un Centro Logístico",
          company: "Centro Logístico (50–100 empleados)",
          summary: "Eliminando zonas muertas de Wi-Fi y caídas de conexión para mejorar la eficiencia del almacén y la precisión del envío.",
          href: "/case-studies/network-management",
          details: {
            situation: "Un gran centro logístico experimentaba frecuentes caídas de Wi-Fi en su almacén de 50,000 pies cuadrados, lo que causaba que los escáneres portátiles se desconectaran y retrasaran los envíos.",
            problem: [
              "Cobertura Wi-Fi inconsistente en todo el almacén.",
              "Frecuentes desconexiones de escáneres que provocaban errores en la entrada de datos.",
              "Congestión de la red durante las horas pico de operación.",
              "Hardware de red obsoleto incapaz de manejar la densidad de dispositivos."
            ],
            decisionPoint: "Un retraso importante en el envío causado por un corte de red durante un período festivo pico provocó quejas significativas de los clientes y pérdida de ingresos.",
            solution: {
              introduction: "Ecksolution-IT realizó un estudio exhaustivo del sitio y desplegó una red de malla de alto rendimiento:",
              points: [
                { title: "Estudio del Sitio", description: "Mapeo de calor para identificar zonas muertas y fuentes de interferencia." },
                { title: "Red de Malla", description: "Despliegue de puntos de acceso de grado empresarial con itinerancia fluida." },
                { title: "Segmentación de VLAN", description: "Separación del tráfico de escáneres del tráfico de invitados y administrativo." },
                { title: "Monitoreo Proactivo", description: "Alertas en tiempo real para la salud de la red y métricas de rendimiento." }
              ]
            },
            result: {
              metrics: [
                { value: "99.9%", label: "Uptime Wi-Fi" },
                { value: "15%", label: "Ganancia Eficiencia" },
                { value: "Cero", label: "Zonas Muertas" }
              ],
              outcomes: [
                "Se eliminaron todas las zonas muertas de Wi-Fi y las caídas de conexión.",
                "Aumento de la eficiencia de picking en el almacén en un 15%.",
                "Reducción de los errores de entrada de datos causados por desconexiones de escáneres.",
                "Rendimiento de red estable incluso durante los volúmenes de operación pico."
              ]
            },
            longTermStability: "El centro logístico ahora cuenta con una infraestructura de red robusta y escalable que puede soportar la automatización futura y un número creciente de dispositivos conectados."
          }
        },
        {
          title: "Gestión del Ciclo de Vida del Hardware",
          company: "Cadena Minorista (15 Ubicaciones)",
          summary: "Estandarización del reemplazo de hardware para reducir el tiempo de inactividad y los costos de mantenimiento.",
          href: "/case-studies/hardware-lifecycle",
          details: {
            situation: "Una cadena minorista de tamaño mediano con 15 ubicaciones operaba con hardware antiguo, algunos de los cuales tenían más de 7 años. Esto provocaba fallos frecuentes y un rendimiento inconsistente en las sucursales.",
            problem: [
              "Alta frecuencia de fallos de hardware que afectaban el servicio al cliente.",
              "Rendimiento lento que generaba frustración en los empleados.",
              "Costos de mantenimiento impredecibles y elevados.",
              "Falta de estandarización en todas las ubicaciones."
            ],
            decisionPoint: "Un servidor crítico en el almacén principal falló, deteniendo todas las entregas durante 24 horas y causando una pérdida significativa de ingresos.",
            solution: {
              introduction: "Ecksolution-IT implementó un programa integral de gestión del ciclo de vida del hardware para estandarizar y modernizar su infraestructura:",
              points: [
                { title: "Estandarización", description: "Implementación de un estándar de hardware unificado en las 15 ubicaciones." },
                { title: "Política de Ciclo de Vida", description: "Establecimiento de un ciclo de reemplazo de 4 años para todo el hardware crítico." },
                { title: "Gestión Centralizada", description: "Despliegue de herramientas para monitoreo remoto y actualizaciones automatizadas." },
                { title: "Seguimiento de Inventario", description: "Creación de un registro detallado de activos para todos los componentes de hardware." }
              ]
            },
            result: {
              metrics: [
                { value: "40%", label: "Menos Tickets" },
                { value: "25%", label: "Más Productivo" },
                { value: "Fijo", label: "Presupuesto" }
              ],
              outcomes: [
                "Reducción significativa del tiempo de inactividad relacionado con el hardware.",
                "Mejora de la moral de los empleados gracias a mejores herramientas.",
                "Visibilidad clara de los futuros gastos de capital en TI.",
                "Experiencia del cliente consistente en todas las sucursales minoristas."
              ]
            },
            longTermStability: "La cadena minorista ahora opera sobre una base moderna y estandarizada con una hoja de ruta clara para futuras inversiones en hardware, asegurando la estabilidad operativa a largo plazo."
          }
        },
        {
          title: "Auditoría Integral de Riesgos de TI",
          company: "Empresa de Servicios Financieros",
          summary: "Identificación y mitigación de vulnerabilidades de seguridad para asegurar el cumplimiento normativo.",
          href: "/case-studies/it-risk-audit",
          details: {
            situation: "Una empresa de servicios financieros necesitaba asegurar el cumplimiento total de las nuevas y más estrictas regulaciones de la industria en materia de protección de datos y gestión de riesgos.",
            problem: [
              "Falta de visibilidad sobre posibles vulnerabilidades de seguridad.",
              "Procesos de manejo de datos no conformes.",
              "Controles de acceso inadecuados para información sensible.",
              "Riesgo de multas regulatorias significativas."
            ],
            decisionPoint: "Una revisión interna reveló brechas significativas en su postura de seguridad que podrían llevar a una auditoría externa fallida.",
            solution: {
              introduction: "Ecksolution-IT realizó una auditoría profunda de riesgos de TI e implementó un plan de remediación integral:",
              points: [
                { title: "Evaluación de Vulnerabilidades", description: "Identificación y priorización de debilidades de seguridad en toda la red." },
                { title: "Mapeo de Cumplimiento", description: "Mapeo de los procesos existentes frente a los requisitos regulatorios." },
                { title: "Desarrollo de Políticas", description: "Creación e implementación de políticas robustas de protección de datos y acceso." },
                { title: "Capacitación en Seguridad", description: "Capacitación del personal sobre las mejores prácticas de seguridad y cumplimiento." }
              ]
            },
            result: {
              metrics: [
                { value: "100%", label: "Cumple" },
                { value: "Reducido", label: "Riesgo" },
                { value: "Alta", label: "Confianza" }
              ],
              outcomes: [
                "Superó con éxito todas las auditorías regulatorias externas posteriores.",
                "Fortalecimiento significativo de la postura de seguridad y protección de datos.",
                "Documentación clara de todos los procesos y controles de TI.",
                "Mejora de la reputación de seguridad y fiabilidad en el mercado."
              ]
            },
            longTermStability: "La empresa cuenta ahora con un marco sólido para la gestión continua de riesgos y el cumplimiento, lo que garantiza que se mantengan a la vanguardia de los requisitos regulatorios en evolución."
          }
        },
        {
          title: "Hoja de Ruta de TI Estratégica para una ONG",
          company: "Organización sin fines de lucro (40–60 empleados)",
          summary: "Alineando la tecnología con los objetivos a largo plazo para reducir el gasto reactivo y lanzar nuevos servicios digitales.",
          href: "/case-studies/strategic-it-roadmap",
          details: {
            situation: "Una ONG en crecimiento luchaba con un entorno de TI 'fragmentado'. Gastaban la mayor parte de su presupuesto en reparaciones de emergencia en lugar de mejoras estratégicas.",
            problem: [
              "Alto gasto reactivo en TI sin un plan a largo plazo.",
              "Sistemas incompatibles que dificultaban la colaboración entre departamentos.",
              "Vulnerabilidades de seguridad debido a software heredado sin parches.",
              "Falta de visión técnica para apoyar nuevas iniciativas digitales."
            ],
            decisionPoint: "La junta directiva se dio cuenta de que su tecnología obsoleta les impedía lanzar una nueva plataforma crítica de participación de donantes.",
            solution: {
              introduction: "Ecksolution-IT desarrolló una hoja de ruta de TI estratégica de 3 años para alinear su tecnología con su misión:",
              points: [
                { title: "Auditoría de Infraestructura", description: "Revisión exhaustiva de todos los sistemas y software existentes." },
                { title: "Alineación de Objetivos", description: "Talleres con el liderazgo para alinear las inversiones en TI con los objetivos organizacionales." },
                { title: "Actualizaciones Graduales", description: "Un cronograma priorizado de mejoras de hardware y software." },
                { title: "Planificación Presupuestaria", description: "Presupuesto predecible de 3 años para gastos de capital y operativos de TI." }
              ]
            },
            result: {
              metrics: [
                { value: "30%", label: "Ahorro Costos" },
                { value: "3 Años", label: "Plan Claro" },
                { value: "Alto", label: "Impacto" }
              ],
              outcomes: [
                "Reducción del gasto de emergencia en TI en un 30% a través de la planificación proactiva.",
                "Lanzamiento exitoso de la nueva plataforma de participación de donantes a tiempo.",
                "Mejora de la colaboración entre departamentos con sistemas unificados.",
                "Visibilidad clara para la junta sobre el valor de las inversiones en TI."
              ]
            },
            longTermStability: "La ONG ahora ve la TI como un activo estratégico que habilita su misión, con un plan claro para la innovación y el crecimiento continuos."
          }
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Servicios de TI Gestionados",
        headline: "No solo reparamos computadoras. Asumimos la responsabilidad total de su continuidad de negocio.",
        subheadline: "Deje de preocuparse por el tiempo de inactividad y las brechas de seguridad. Operamos toda su infraestructura de TI con un 100% de responsabilidad y costos mensuales fijos.",
        cta: "Reserve una Llamada Estratégica",
      },
      problem: {
        headline: "La TI es un motor o un freno de mano.",
        subheadline: "La mayoría de las empresas sufren de una TI reactiva que solo responde cuando algo se rompe. Esto conduce a tres fallos críticos:",
        points: [
          { title: "Tiempo de Inactividad que Mata los Ingresos", description: "Cuando sus sistemas están caídos, su equipo está inactivo pero su nómina sigue corriendo." },
          { title: "Ansiedad por la Seguridad", description: "Preguntarse si sus copias de seguridad realmente funcionan o si un solo clic podría quebrar la empresa." },
          { title: "Caos Presupuestario", description: "Facturas de TI impredecibles que fluctúan según cuántas cosas se rompieron este mes." }
        ]
      },
      solution: {
        headline: "Responsabilidad Total de TI.",
        subheadline: "Lo movemos del 'Break-Fix' a las 'Operaciones Gestionadas'. Somos dueños del resultado, no solo de los tickets.",
        points: [
          { title: "Enfoque en Cero Tiempo de Inactividad", description: "Mantenimiento proactivo que identifica y resuelve problemas antes de que afecten a su equipo." },
          { title: "Garantía de Costo Fijo", description: "Una tarifa mensual predecible que lo cubre todo. Sin facturas sorpresa, nunca." },
          { title: "Asociación Estratégica", description: "Actuamos como su CTO, asegurando que su hoja de ruta tecnológica se alinee con sus objetivos comerciales." }
        ]
      },
      results: {
        headline: "Los Números que Importan.",
        subheadline: "Nuestro desempeño se mide por su tiempo de actividad y productividad.",
        cards: [
          { metric: "99.9%", label: "Tiempo de Actividad" },
          { metric: "< 15m", label: "Tiempo de Respuesta" },
          { metric: "30%", label: "Ganancia de Eficiencia" },
          { metric: "0", label: "Brechas de Seguridad" }
        ]
      },
      services: {
        headline: "Cómo se ve la 'Responsabilidad Total'.",
        subheadline: "Nuestro servicio gestionado es un departamento de TI completo en una caja.",
        items: [
          { title: "Monitoreo y Gestión 24/7", description: "Supervisión continua de servidores, redes y terminales." },
          { title: "Soporte de Helpdesk Ilimitado", description: "Soporte rápido y profesional para todo su equipo cuando lo necesiten." },
          { title: "Ciberseguridad y Cumplimiento", description: "Protección avanzada contra amenazas, cifrado y gestión de cumplimiento normativo." },
          { title: "Respaldo y Recuperación ante Desastres", description: "Copias de seguridad automatizadas fuera del sitio con tiempos de recuperación garantizados." },
          { title: "Nube e Infraestructura", description: "Gestión completa de Microsoft 365, Azure y sistemas locales." },
          { title: "Estrategia y Consultoría de TI", description: "Revisiones comerciales regulares y planificación tecnológica a largo plazo." }
        ]
      },
      process: {
        headline: "Cómo tomamos el control.",
        subheadline: "Una transición fluida a operaciones de TI profesionales.",
        steps: [
          { title: "Auditoría Profunda", description: "Documentamos cada activo, licencia y vulnerabilidad en su configuración actual." },
          { title: "Estabilización", description: "Corregimos los riesgos inmediatos y estandarizamos sus sistemas a nuestra base de alta fiabilidad." },
          { title: "Operación Continua", description: "Tomamos el control total, brindando gestión 24/7 y orientación estratégica." }
        ]
      },
      caseStudy: {
        headline: "Resultados Reales para Empresas Reales.",
        company: "Logistics Leader GmbH",
        challenge: "Las caídas frecuentes del servidor retrasaban los envíos y costaban 5.000 € por hora en pérdida de productividad.",
        solution: "Se implementó una infraestructura de nube híbrida totalmente gestionada con conmutación por error redundante.",
        result: "Cero tiempo de inactividad crítico en 24 meses y una reducción del 40% en los tickets de soporte de TI."
      },
      philosophy: {
        quote: "No vendemos horas. Vendemos tiempo de actividad.",
        author: "Filosofía de Ecksolution-IT"
      },
      faq: {
        headline: "Preguntas Comunes sobre TI Gestionada.",
        items: [
          { question: "¿Qué se incluye exactamente en la tarifa mensual fija?", answer: "Todo. Se incluye todo el monitoreo, mantenimiento, actualizaciones de seguridad y soporte de helpdesk ilimitado. Sin cargos ocultos." },
          { question: "¿Cómo aseguran que nuestros datos estén seguros?", answer: "Utilizamos cifrado de nivel empresarial, autenticación multifactor y monitoreo de amenazas 24/7. Realizamos pruebas de respaldo regulares." },
          { question: "¿Pueden trabajar con nuestra persona de TI interna existente?", answer: "Sí. Ofrecemos 'TI Co-Gestionada' donde manejamos el trabajo pesado (servidores, seguridad, respaldos) mientras su persona interna se enfoca en proyectos de usuario." }
        ]
      },
    },
    common: {
      discussNeeds: "Hablemos de sus necesidades",
      outcomesTitle: "Resultados comerciales claros",
      outcomesSub: "Lo que puede esperar al asociarse con nosotros.",
      processTitle: "Nuestro proceso probado",
      processSub: "Cómo entregamos resultados consistentes.",
      analysis: "Análisis",
      implementation: "Implementación",
      operations: "Operaciones",
      relatedSolutionsTitle: "Explorar soluciones relacionadas",
      relatedSolutionsSub: "Otras formas en que ayudamos a las empresas a eliminar el riesgo de TI.",
      viewAllSolutions: "Ver todas las soluciones",
      learnMore: "Saber más",
      ctaTitle: "¿Listo para eliminar el riesgo de TI?",
      ctaSub: "Obtenga una auditoría completa de su configuración actual. Sin compromiso, solo claridad.",
      ctaButton: "Solicite su auditoría de TI",
    },
  },
};
