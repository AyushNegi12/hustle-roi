import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-24" style={{ background: "#060e20" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8"
          style={{ borderBottom: "1px solid rgba(60,73,78,0.3)" }}>
          {/* Brand */}
          <div>
            <div className="font-headline text-xl font-bold mb-1"
              style={{ fontFamily: "Lexend, sans-serif", color: "#00D1FF" }}>
              HustleROI
            </div>
            <p className="text-xs" style={{ color: "#334155" }}>
              Free side hustle ROI calculator. No paywalls, ever.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}>
            {[
              { href: "/", label: "Calculator" },
              { href: "/tools", label: "Tools" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="transition-colors hover:text-white"
                style={{ color: "#475569" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "#334155", fontFamily: "Inter, sans-serif" }}>
          <p>© 2026 HustleROI. Made in India 🇮🇳</p>
          <p>
            All projections are estimates only — not financial advice.{" "}
            <a href="mailto:ayushn612@gmail.com" className="hover:text-white transition-colors"
              style={{ color: "#475569" }}>
              ayushn612@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
