"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", icon: "dashboard", label: "ROI Dashboard" },
  { href: "/calculator", icon: "calculate", label: "Calculator" },
  { href: "/tools", icon: "inventory_2", label: "Tool Database" },
  { href: "/about", icon: "info", label: "About" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 z-40 pt-20"
      style={{ background: "#131b2e", boxShadow: "2px 0 20px rgba(0,0,0,0.3)" }}>

      {/* Brand */}
      <div className="px-6 py-8">
        <div className="font-headline font-black text-xl" style={{ color: "#a4e6ff", fontFamily: "Lexend, sans-serif" }}>
          Wealth Portal
        </div>
        <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "#475569" }}>
          The Financial Architect
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 py-3 px-6 text-sm transition-all duration-300 ${isActive ? "sidebar-active" : ""}`}
              style={{ color: isActive ? "#00D1FF" : "#64748b", fontFamily: "Lexend, sans-serif", fontWeight: isActive ? "700" : "400" }}>
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom links */}
      <div className="p-6 space-y-3">
        <div className="rounded-xl p-4 mb-2"
          style={{ background: "rgba(0,226,147,0.06)", border: "1px solid rgba(0,226,147,0.15)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#00e293" }}>
            Always Free
          </p>
          <p className="text-xs" style={{ color: "#475569" }}>
            Supported by ads & affiliate links — no paywalls, ever.
          </p>
        </div>
        <Link href="/contact" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: "#475569" }}>
          <span className="material-symbols-outlined text-[18px]">help</span>
          Support
        </Link>
        <Link href="/privacy" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: "#475569" }}>
          <span className="material-symbols-outlined text-[18px]">shield</span>
          Privacy
        </Link>
      </div>
    </aside>
  );
}
