import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — HustleROI",
  description: "The story behind HustleROI — a free side hustle ROI calculator built to cut through the guru noise and give you real numbers.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #a4e6ff, #00d1ff)" }}>
          <span className="material-symbols-outlined text-4xl" style={{ color: "#003543" }}>trending_up</span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-4"
          style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
          About <span style={{ color: "#a4e6ff" }}>HustleROI</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#bbc9cf" }}>
          A free tool built to cut through the guru noise and give you real numbers.
        </p>
      </header>

      <div className="space-y-8">

        {/* Story */}
        <div className="rounded-3xl p-8" style={{ background: "#131b2e" }}>
          <h2 className="font-headline text-2xl font-black mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
            Why This Exists
          </h2>
          <div className="space-y-4 text-sm leading-7" style={{ color: "#bbc9cf" }}>
            <p>
              Built by a developer from India who got tired of the same problem: every side hustle &quot;guru&quot; promises $10,000/month but no one shows the actual math. No break-even timeline, no honest tool costs, no conservative projections — just screenshots designed to sell a course.
            </p>
            <p>
              HustleROI is the opposite of that. Input your budget and hours, pick a hustle, get hard numbers — when you break even, what your year looks like, and the exact tools you need with real costs attached.
            </p>
            <p>
              It&apos;s completely free. It always will be. Revenue comes from ads and affiliate links, never from charging you.
            </p>
            <p className="font-bold" style={{ color: "#dae2fd" }}>
              Something wrong? Have feedback? Every email gets a reply:{" "}
              <a href="mailto:ayushn612@gmail.com" style={{ color: "#a4e6ff" }}>
                ayushn612@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Commitments */}
        <div className="rounded-3xl p-8" style={{ background: "#131b2e" }}>
          <h2 className="font-headline text-2xl font-black mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
            How the Numbers Work
          </h2>
          <div className="space-y-4">
            {[
              { icon: "verified", title: "Real industry data", desc: "Revenue estimates come from verified income reports and public data — not YouTube thumbnail claims." },
              { icon: "visibility", title: "Full cost transparency", desc: "Every tool cost, startup expense, and ongoing overhead is shown. Not just the good parts." },
              { icon: "trending_down", title: "Conservative projections", desc: "The calculator models realistic outcomes. Your actual results may be higher." },
              { icon: "handshake", title: "Honest about affiliates", desc: "Some tool links are affiliate links — disclosed clearly. Only tools worth using are recommended." },
              { icon: "update", title: "Kept up to date", desc: "Side hustle economics shift fast. Data is reviewed and updated regularly." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="material-symbols-outlined flex-shrink-0 mt-0.5" style={{ color: "#00e293" }}>
                  {item.icon}
                </span>
                <div>
                  <span className="font-semibold text-sm" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
                    {item.title}:{" "}
                  </span>
                  <span className="text-sm" style={{ color: "#bbc9cf" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <div className="rounded-3xl p-8" style={{ background: "#131b2e" }}>
          <h2 className="font-headline text-2xl font-black mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
            Get in Touch
          </h2>
          <div className="rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start"
            style={{ background: "#222a3d" }}>
            <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl"
              style={{ background: "linear-gradient(135deg, #a4e6ff, #00d1ff)" }}>
              👨‍💻
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#a4e6ff" }}>
                Founder
              </div>
              <p className="text-sm leading-7 mb-4" style={{ color: "#bbc9cf" }}>
                Built and maintained by one person. If a number looks wrong, a tool link is broken, or you just want to say something — the inbox is open.
              </p>
              <a href="mailto:ayushn612@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-white"
                style={{ color: "#a4e6ff" }}>
                <span className="material-symbols-outlined text-sm">mail</span>
                ayushn612@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center flex gap-4 justify-center">
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:bg-white/5"
            style={{ color: "#dae2fd", border: "1.5px solid rgba(60,73,78,0.5)", fontFamily: "Lexend, sans-serif" }}>
            Contact
          </Link>
          <Link href="/calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #a4e6ff, #00d1ff)", color: "#003543", fontFamily: "Lexend, sans-serif" }}>
            Try Calculator <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
