"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/calculator", icon: "bar_chart", label: "Calculator" },
  { href: "/tools", icon: "inventory_2", label: "Tools" },
  { href: "/about", icon: "info", label: "About" },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass-panel rounded-2xl flex items-center justify-around px-4 z-50"
      style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
      {ITEMS.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-[22px]"
              style={{ color: isActive ? "#00d1ff" : "#475569" }}>
              {item.icon}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider"
              style={{ color: isActive ? "#00d1ff" : "#475569" }}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
