import Link from "next/link";
import { HUSTLES } from "@/lib/hustleData";

export default function HomePage() {
  const stats = [
    { icon: "trending_up", value: "$8.5K", label: "Avg. Monthly Potential" },
    { icon: "schedule", value: "2 min", label: "Time to Results" },
    { icon: "workspace_premium", value: "8", label: "Hustles Analyzed" },
    { icon: "lock_open", value: "Free", label: "Always Free" },
  ];

  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-7xl mx-auto">

      {/* Hero Header */}
      <header className="mb-16 relative">
        {/* Decorative glow */}
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #00d1ff, transparent)", filter: "blur(80px)" }} />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          style={{ background: "rgba(0,226,147,0.12)", color: "#00e293" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block"></span>
          Updated for 2026 — New AI Hustles Added
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6"
          style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
          Side Hustle{" "}
          <span style={{ color: "#a4e6ff" }}>ROI Calculator.</span>
        </h1>
        <p className="text-xl max-w-2xl font-light leading-relaxed mb-10" style={{ color: "#bbc9cf" }}>
          Precision modeling for modern ventures. Architect your financial future with high-fidelity projections for 2026&apos;s next-gen revenue streams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/calculator"
            className="signature-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
            style={{ color: "#003543", fontFamily: "Lexend, sans-serif", boxShadow: "0 0 24px rgba(0,209,255,0.25)" }}>
            <span className="material-symbols-outlined">calculate</span>
            Calculate My ROI
          </Link>
          <Link href="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/5"
            style={{ color: "#a4e6ff", border: "1.5px solid rgba(60,73,78,0.5)", fontFamily: "Lexend, sans-serif" }}>
            <span className="material-symbols-outlined">inventory_2</span>
            Browse Tools
          </Link>
        </div>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl p-6 flex flex-col gap-3"
            style={{ background: "#131b2e" }}>
            <span className="material-symbols-outlined" style={{ color: "#a4e6ff" }}>{s.icon}</span>
            <div className="font-headline text-3xl font-black" style={{ color: "#dae2fd", fontFamily: "Lexend, sans-serif" }}>{s.value}</div>
            <div className="text-xs uppercase tracking-wider" style={{ color: "#475569" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Hustle Cards — Bento Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline text-3xl font-bold" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
            Select Your Architecture
          </h2>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#a4e6ff" }}>2026 Models</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HUSTLES.map((h, idx) => (
            <Link key={h.id} href={`/calculator?hustle=${h.id}`}
              className="rounded-2xl p-5 flex flex-col gap-3 group transition-all hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: idx === 0 ? "#222a3d" : "#131b2e",
                border: idx === 0 ? "2px solid rgba(164,230,255,0.3)" : "1px solid rgba(60,73,78,0.2)",
              }}>
              <span className="text-3xl">{h.emoji}</span>
              <span className="font-headline text-sm font-semibold group-hover:text-primary transition-colors"
                style={{ fontFamily: "Lexend, sans-serif", color: idx === 0 ? "#a4e6ff" : "#dae2fd" }}>
                {h.name}
              </span>
              <div className="text-xs" style={{ color: "#475569" }}>{h.marketDemand2026}</div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs px-2 py-0.5 rounded"
                  style={{ background: "rgba(0,226,147,0.12)", color: "#00e293" }}>
                  {h.difficulty}
                </span>
                <span className="text-xs font-bold" style={{ color: "#a4e6ff" }}>
                  Up to ${h.avgMonthlyRevenue.toLocaleString()}/mo
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature section — "Architectural Precision" */}
      <section className="mb-16 rounded-3xl p-10 md:p-14 relative overflow-hidden"
        style={{ background: "#222a3d" }}>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,209,255,0.1), transparent)", filter: "blur(60px)" }} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl font-black tracking-tighter mb-6"
              style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
              More Than Just a Number
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#bbc9cf" }}>
              Most calculators give you one optimistic figure. HustleROI gives you a complete financial architecture — break-even month, compounding projections, and the exact tool stack you need.
            </p>
            <Link href="/calculator"
              className="signature-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-black transition-all hover:scale-105"
              style={{ color: "#003543", fontFamily: "Lexend, sans-serif" }}>
              Build Your Blueprint
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "timeline", title: "12-Month Graph", desc: "See your income compound in real time" },
              { icon: "bolt", title: "Break-Even Date", desc: "Know exactly when you stop losing money" },
              { icon: "inventory_2", title: "Tool Stack", desc: "5–7 curated tools with direct links" },
              { icon: "share", title: "Shareable Card", desc: "Download & post your result" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)" }}>
                <span className="material-symbols-outlined mb-3 block" style={{ color: "#a4e6ff" }}>{f.icon}</span>
                <div className="font-headline text-sm font-bold mb-1" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>{f.title}</div>
                <div className="text-xs" style={{ color: "#475569" }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden"
        style={{ border: "1px solid rgba(60,73,78,0.3)" }}>
        <div className="absolute inset-0 signature-gradient opacity-5 pointer-events-none" />
        <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-4"
          style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
          Your $10K Month Starts<br />With One Calculation.
        </h2>
        <p className="text-lg mb-8" style={{ color: "#bbc9cf" }}>
          Free. No signup. Results in 60 seconds.
        </p>
        <Link href="/calculator"
          className="signature-gradient inline-flex items-center gap-2 px-10 py-5 rounded-full font-black text-xl transition-all hover:scale-105"
          style={{ color: "#003543", fontFamily: "Lexend, sans-serif", boxShadow: "0 0 32px rgba(0,209,255,0.3)" }}>
          Launch Calculator
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>
    </div>
  );
}
