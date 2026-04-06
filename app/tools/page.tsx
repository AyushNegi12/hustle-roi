import { Metadata } from "next";
import Link from "next/link";
import { HUSTLES } from "@/lib/hustleData";

export const metadata: Metadata = {
  title: "Tool Recommendations — HustleROI",
  description: "Browse 40+ reviewed software tools for starting your 2026 side hustle. Vetted by practitioners, ranked by ROI.",
};

const FEATURED_REVIEWS = [
  { name: "Midjourney", rating: 5.0, category: "AI Writing", badge: "Editor's Choice", verdict: "Unbeatable AI generation for marketing assets. The definitive tool for high-end visual storytelling.", icon: "auto_awesome", hustle: "AI-Art Agency" },
  { name: "ElevenLabs", rating: 4.9, category: "AI Voice", badge: "Top Pick", verdict: "No other tool comes close for professional voiceover quality. Changed the agency game in 2026.", icon: "record_voice_over", hustle: "AI Voiceover Agency" },
  { name: "Beehiiv", rating: 4.7, category: "Newsletter", badge: "", verdict: "The ultimate newsletter growth platform for monetization. Built for revenue from day one.", icon: "mail", hustle: "Newsletter Business" },
  { name: "PriceLabs", rating: 4.6, category: "Pricing AI", badge: "", verdict: "Airbnb hosts using PriceLabs earn 20–40% more than manual pricers. Non-negotiable.", icon: "price_change", hustle: "Rental Arbitrage" },
];

export default function ToolsPage() {
  const allTools = new Map<string, { tool: typeof HUSTLES[0]["tools"][0]; hustle: string }>();
  HUSTLES.forEach((h) => {
    h.tools.forEach((t) => {
      if (!allTools.has(t.name)) allTools.set(t.name, { tool: t, hustle: h.name });
    });
  });
  const toolsList = Array.from(allTools.values());
  const paidTools = toolsList.filter((t) => t.tool.cost > 0).sort((a, b) => a.tool.cost - b.tool.cost);
  const freeTools = toolsList.filter((t) => t.tool.cost === 0);

  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-7xl mx-auto">

      {/* Header */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="font-headline text-5xl lg:text-7xl font-black tracking-tighter mb-4"
              style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
              Tool Recommendations
            </h1>
            <p className="text-xl font-light" style={{ color: "#bbc9cf" }}>
              Architecting your tech stack with precision. Our vetted list of software to scale your side-hustle from zero to six figures.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="rounded-2xl px-6 py-4 flex flex-col items-center" style={{ background: "#131b2e" }}>
              <span className="font-headline text-2xl font-bold" style={{ fontFamily: "Lexend, sans-serif", color: "#a4e6ff" }}>4.9/5</span>
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#475569" }}>Avg. ROI</span>
            </div>
            <div className="rounded-2xl px-6 py-4 flex flex-col items-center"
              style={{ background: "#131b2e", border: "1px solid rgba(164,230,255,0.2)" }}>
              <span className="font-headline text-2xl font-bold" style={{ fontFamily: "Lexend, sans-serif", color: "#00e293" }}>{toolsList.length}+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#475569" }}>Vetted Tools</span>
            </div>
          </div>
        </div>
      </header>

      {/* Browse by hustle */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-bold mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>Browse by Architecture</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {HUSTLES.map((h) => (
            <Link key={h.id} href={`/calculator?hustle=${h.id}`}
              className="rounded-2xl p-4 flex items-center gap-3 transition-all hover:translate-y-[-2px]"
              style={{ background: "#131b2e" }}>
              <span className="text-2xl">{h.emoji}</span>
              <div>
                <div className="text-xs font-semibold leading-tight" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>{h.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{h.tools.length} tools</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured reviews — Asymmetric Bento */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>Featured Deep-Dive Reviews</h2>
        <p className="text-sm mb-8" style={{ color: "#475569" }}>Our top picks with detailed analysis</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card (spans 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row transition-all hover:translate-y-[-4px]"
            style={{ background: "#131b2e" }}>
            <div className="lg:w-2/5 relative min-h-64 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #131b2e, #222a3d)" }}>
              <span className="material-symbols-outlined opacity-20" style={{ fontSize: "128px", color: "#a4e6ff" }}>
                auto_awesome
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent" />
              <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
                <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md"
                  style={{ background: "rgba(164,230,255,0.15)", color: "#a4e6ff" }}>AI Art</span>
                <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md"
                  style={{ background: "rgba(0,226,147,0.15)", color: "#00e293" }}>Editor&apos;s Choice</span>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-3xl font-bold tracking-tight" style={{ fontFamily: "Lexend, sans-serif" }}>
                  Midjourney Review
                </h3>
                <div className="flex items-center gap-1" style={{ color: "#00e293" }}>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-headline font-bold" style={{ fontFamily: "Lexend, sans-serif" }}>5.0</span>
                </div>
              </div>
              <p className="mb-6 flex-1" style={{ color: "#bbc9cf" }}>
                Unbeatable AI generation for marketing assets. The definitive tool for high-end visual storytelling and commercial brand work.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  {["Best image quality", "Commercial license", "Active community"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm" style={{ color: "#00e293" }}>
                      <span className="material-symbols-outlined text-xs">check_circle</span> {p}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {["No free tier", "Discord-only interface"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm opacity-60" style={{ color: "#ffb4ab" }}>
                      <span className="material-symbols-outlined text-xs">cancel</span> {c}
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer"
                className="text-center px-8 py-4 rounded-xl font-black tracking-tight transition-all hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                style={{ background: "linear-gradient(135deg, #a4e6ff 0%, #00d1ff 100%)", color: "#003543", fontFamily: "Lexend, sans-serif" }}>
                TRY IT NOW
              </a>
            </div>
          </div>

          {/* Standard cards */}
          {FEATURED_REVIEWS.slice(1).map((r) => (
            <div key={r.name} className="rounded-[2rem] p-8 flex flex-col transition-all hover:translate-y-[-4px]"
              style={{ background: "#131b2e" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "#222a3d" }}>
                <span className="material-symbols-outlined text-3xl" style={{ color: "#a4e6ff" }}>{r.icon}</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline text-2xl font-bold tracking-tight" style={{ fontFamily: "Lexend, sans-serif" }}>
                  {r.name}
                </h3>
                <div className="flex items-center gap-1" style={{ color: "#00e293" }}>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-headline font-bold" style={{ fontFamily: "Lexend, sans-serif" }}>{r.rating}</span>
                </div>
              </div>
              <p className="text-sm mb-6 flex-1" style={{ color: "#bbc9cf" }}>{r.verdict}</p>
              <div className="rounded-2xl p-4 mb-6" style={{ background: "#060e20" }}>
                <div className="text-[10px] uppercase font-bold tracking-widest mb-2" style={{ color: "#475569" }}>
                  Used for: {r.hustle}
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: "#2d3449" }}>
                  <div className="h-full rounded-full" style={{ width: `${r.rating * 20}%`, background: "#00e293" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Paid Tools Table */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>All Paid Tools</h2>
        <p className="text-sm mb-8" style={{ color: "#475569" }}>Sorted by monthly cost (lowest first)</p>
        <div className="space-y-3">
          {paidTools.map(({ tool, hustle }) => (
            <div key={tool.name} className="rounded-xl flex items-center justify-between p-4 transition-all hover:translate-y-[-1px]"
              style={{ background: "#131b2e" }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#222a3d" }}>
                  <span className="material-symbols-outlined text-[18px]" style={{ color: "#a4e6ff" }}>bolt</span>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>{tool.name}</div>
                  <div className="text-xs" style={{ color: "#475569" }}>{tool.description} · {hustle}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold" style={{ color: "#a4e6ff" }}>${tool.cost}/mo</span>
                <a href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                  style={{ background: "#222a3d", color: "#a4e6ff" }}>
                  View <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Tools Grid */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>Free Tools</h2>
        <p className="text-sm mb-8" style={{ color: "#475569" }}>Start without spending a cent</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {freeTools.map(({ tool, hustle }) => (
            <div key={tool.name} className="rounded-2xl p-6 flex flex-col transition-all hover:translate-y-[-2px]"
              style={{ background: "#131b2e", border: "1px solid rgba(60,73,78,0.2)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-headline text-sm font-bold" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
                  {tool.name}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ background: "rgba(0,226,147,0.12)", color: "#00e293" }}>FREE</span>
              </div>
              <p className="text-xs mb-4 flex-1" style={{ color: "#475569" }}>{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "#334155" }}>For: {hustle}</span>
                <a href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1 font-bold transition-colors hover:text-white"
                  style={{ color: "#00e293" }}>
                  Get it free <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Tracker / Bottom CTA */}
      <section className="rounded-[2.5rem] p-12 relative overflow-hidden" style={{ background: "#222a3d" }}>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,209,255,0.08), transparent)", filter: "blur(60px)" }} />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl font-black mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
              Stack Optimization Analysis
            </h2>
            <p className="text-lg mb-8" style={{ color: "#bbc9cf" }}>
              On average, HustleROI users save $1,200/month by eliminating redundant software using our vetting methodology.
            </p>
            <Link href="/calculator"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black tracking-tighter transition-all hover:scale-105"
              style={{ background: "#dae2fd", color: "#0b1326", fontFamily: "Lexend, sans-serif" }}>
              VIEW THE FULL STACK GUIDE
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="text-[10px] uppercase font-bold mb-2" style={{ color: "#a4e6ff" }}>Cost Reduction</div>
              <div className="font-headline text-3xl font-black" style={{ fontFamily: "Lexend, sans-serif" }}>+24%</div>
            </div>
            <div className="glass-panel p-6 rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="text-[10px] uppercase font-bold mb-2" style={{ color: "#00e293" }}>Efficiency Gain</div>
              <div className="font-headline text-3xl font-black" style={{ fontFamily: "Lexend, sans-serif" }}>+68%</div>
            </div>
            <div className="glass-panel p-6 rounded-3xl col-span-2" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="text-[10px] uppercase font-bold mb-4" style={{ color: "#475569" }}>Monthly Potential Growth</div>
              <div className="h-12 w-full flex items-end gap-2">
                {[40, 60, 50, 90, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-lg"
                    style={{
                      height: `${h}%`,
                      background: i >= 3 ? (i === 4 ? "#00e293" : "#a4e6ff") : "#2d3449",
                      boxShadow: i >= 3 ? `0 0 15px ${i === 4 ? "rgba(0,226,147,0.3)" : "rgba(0,209,255,0.3)"}` : "none",
                    }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
