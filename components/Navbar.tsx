"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/calculator", label: "Calculators" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full top-0 sticky z-50 font-headline tracking-tight"
      style={{ background: "#0b1326", borderBottom: "1px solid rgba(60,73,78,0.3)" }}>
      <div className="flex justify-between items-center px-8 py-4 max-w-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter" style={{ color: "#00D1FF", fontFamily: "Lexend, sans-serif" }}>
          HustleROI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link key={l.href} href={l.href}
                className="font-medium text-sm transition-colors duration-200"
                style={{
                  color: isActive ? "#00D1FF" : "#94a3b8",
                  borderBottom: isActive ? "2px solid #00D1FF" : "none",
                  paddingBottom: isActive ? "2px" : "0",
                }}>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link href="/calculator"
          className="signature-gradient font-bold px-6 py-2 rounded-lg text-sm transition-transform hover:scale-105 active:scale-95"
          style={{ color: "#003543" }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
