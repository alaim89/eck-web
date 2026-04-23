
'use client';

import { useState, useEffect } from "react";
import { Cpu, ShieldAlert, Settings } from "lucide-react";
import Link from "next/link";

export function HomeStack() {
  const [activeStackTags, setActiveStackTags] = useState<{
    cloud: number[];
    security: number[];
    infra: number[];
  }>({
    cloud: [1, 2],
    security: [0, 3],
    infra: [0, 1],
  });

  const activeTagClass =
    "inline-flex items-center rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-colors duration-1000";

  const inactiveTagClass =
    "inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-1000";

  function getRandomIndices(length: number, count: number, previous: number[] = []) {
    if (count >= length) {
      return Array.from({ length }, (_, i) => i);
    }

    let result: number[] = [];

    do {
      const pool = Array.from({ length }, (_, i) => i);
      result = [];

      while (result.length < count && pool.length > 0) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        result.push(pool[randomIndex]);
        pool.splice(randomIndex, 1);
      }

      result.sort((a, b) => a - b);
    } while (
      previous.length === result.length &&
      previous.every((value, index) => value === result[index]) &&
      length > count
    );

    return result;
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setActiveStackTags((prev) => ({
        cloud: getRandomIndices(4, 2, prev.cloud),
        security: getRandomIndices(6, 2, prev.security),
        infra: getRandomIndices(4, 2, prev.infra),
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* Card 1 */}
      <div className="rounded-3xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Cpu className="w-5 h-5 text-primary" />
          </div>
          <Link
            href="/solutions/managed-infrastructure"
            className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold hover:text-primary transition-colors"
          >
            Cloud & Collaboration
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Microsoft", "Azure", "M365", "AvePoint"].map((item, index) => {
            const isActive = activeStackTags.cloud.includes(index);

            return (
              <span
                key={item}
                className={isActive ? activeTagClass : inactiveTagClass}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded-3xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-primary" />
          </div>
          <Link
            href="/solutions/it-sicherheit"
            className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold hover:text-primary transition-colors"
          >
            Security & Backup
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Veeam", "Bacula", "Borg", "Sophos", "OPNsense", "Acronis"].map((item, index) => {
            const isActive = activeStackTags.security.includes(index);

            return (
              <span
                key={item}
                className={isActive ? activeTagClass : inactiveTagClass}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded-3xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Settings className="w-5 h-5 text-primary" />
          </div>
          <Link
            href="/solutions/it-infrastruktur-modernisierung"
            className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold hover:text-primary transition-colors"
          >
            Infrastruktur & Netzwerk
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Red Hat", "Ubuntu", "MikroTik", "HPE Aruba"].map((item, index) => {
            const isActive = activeStackTags.infra.includes(index);

            return (
              <span
                key={item}
                className={isActive ? activeTagClass : inactiveTagClass}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
