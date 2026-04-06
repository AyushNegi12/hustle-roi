"use client";

import { useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";
import { HUSTLES, calculateROI } from "@/lib/hustleData";

const HUSTLE_ICONS: Record<string, string> = {
  "ai-art-agency": "palette",
  "faceless-youtube": "videocam",
  "saas-micro-buy": "business_center",
  "rental-arbitrage": "apartment",
  "ai-voice-agency": "keyboard_voice",
  "crypto-node-hosting": "hub",
  "solar-cleaning": "wb_sunny",
  "newsletter-monetization": "mail",
};

export default function CalculatorClient() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("hustle") || HUSTLES[0].id;

  const [selectedId, setSelectedId] = useState(initialId);
  const [budget, setBudget] = useState(500);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [adSpend, setAdSpend] = useState(50);
  const [laborRate, setLaborRate] = useState(15);
  const [calculated, setCalculated] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const hustle = HUSTLES.find((h) => h.id === selectedId) || HUSTLES[0];
  const results = calculateROI(hustle, budget, hoursPerWeek, adSpend, laborRate);

  const handleCalculate = useCallback(() => {
    setCalculated(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, []);

  const handleShare = async () => {
    const text = `I just architected my ROI for ${hustle.name}!\n\n💰 Monthly Profit: $${results.monthlyProfit.toLocaleString()}\n📈 Annual Profit: $${results.annualProfit.toLocaleString()}\n⏱️ Break-Even: Month ${results.breakEvenMonths}\n\nCalculate yours → HustleROI.com`;
    if (navigator.share) {
      await navigator.share({ title: "My Side Hustle ROI", text });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Results copied to clipboard!");
    }
  };

  const chartData = results.monthlyProjection.map((m) => ({
    name: `M${m.month}`,
    Revenue: m.revenue,
    Expenses: m.expenses,
    Profit: m.profit,
  }));

  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-7xl mx-auto">

      {/* Page header */}
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4"
          style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
          Side Hustle{" "}
          <span style={{ color: "#a4e6ff" }}>ROI Calculator.</span>
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl font-light leading-relaxed" style={{ color: "#bbc9cf" }}>
          Precision modeling for modern ventures. Architect your financial future with high-fidelity projections.
        </p>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT: Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-8">

          {/* Business model selection */}
          <section className="rounded-3xl p-8 transition-all" style={{ background: "#131b2e" }}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-xl font-semibold" style={{ fontFamily: "Lexend, sans-serif" }}>
                Select Your Architecture
              </h3>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#a4e6ff" }}>
                Model Selection
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {HUSTLES.map((h) => {
                const isSelected = h.id === selectedId;
                return (
                  <button key={h.id}
                    onClick={() => setSelectedId(h.id)}
                    className="rounded-2xl p-4 flex flex-col items-center text-center gap-3 transition-all hover:scale-[1.02]"
                    style={{
                      background: isSelected ? "#222a3d" : "#060e20",
                      border: isSelected ? "2px solid rgba(164,230,255,0.4)" : "1px solid rgba(60,73,78,0.2)",
                      opacity: isSelected ? 1 : 0.7,
                    }}>
                    <span className="material-symbols-outlined" style={{ color: isSelected ? "#a4e6ff" : "#bbc9cf" }}>
                      {HUSTLE_ICONS[h.id] || "work"}
                    </span>
                    <span className="text-xs font-medium" style={{ color: isSelected ? "#dae2fd" : "#bbc9cf", fontFamily: "Lexend, sans-serif" }}>
                      {h.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Sliders */}
          <section className="rounded-3xl p-8" style={{ background: "#131b2e" }}>
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-headline text-xl font-semibold" style={{ fontFamily: "Lexend, sans-serif" }}>
                Financial Parameters
              </h3>
              <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                style={{ background: "#222a3d", color: "#859399" }}>
                USD
              </span>
            </div>

            <div className="space-y-12">
              {/* Budget */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-widest block mb-1" style={{ color: "#bbc9cf" }}>
                      Initial Investment
                    </label>
                    <div className="font-headline text-2xl font-bold" style={{ fontFamily: "Lexend, sans-serif" }}>
                      ${budget.toLocaleString()}
                    </div>
                  </div>
                  <div className="rounded-xl px-4 py-2 font-mono text-lg font-bold tracking-tight"
                    style={{ background: "#2d3449", color: "#a4e6ff" }}>
                    $ {budget.toLocaleString()}
                  </div>
                </div>
                <input type="range" min={0} max={20000} step={100} value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  style={{ accentColor: "#00e293" }} />
              </div>

              {/* Hours */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-widest block mb-1" style={{ color: "#bbc9cf" }}>
                      Time Commitment
                    </label>
                    <div className="font-headline text-2xl font-bold" style={{ fontFamily: "Lexend, sans-serif" }}>
                      {hoursPerWeek} hrs / week
                    </div>
                  </div>
                  <div className="rounded-xl px-4 py-2 font-mono text-lg font-bold tracking-tight"
                    style={{ background: "#2d3449", color: "#a4e6ff" }}>
                    {hoursPerWeek} HRS
                  </div>
                </div>
                <input type="range" min={1} max={60} step={1} value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  style={{ accentColor: "#00e293" }} />
              </div>

              {/* Ad spend + labor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {[
                  { label: "Monthly Ad Spend", value: adSpend, setter: setAdSpend, min: 0, max: 2000, step: 25, icon: "campaign", suffix: "/mo" },
                  { label: "Outsourced Labor Rate", value: laborRate, setter: setLaborRate, min: 0, max: 100, step: 5, icon: "payments", suffix: "/hr" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl p-6"
                    style={{ background: "#060e20", border: "1px solid rgba(60,73,78,0.2)" }}>
                    <label className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#bbc9cf" }}>
                      {s.label}
                    </label>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined" style={{ color: "#00e293" }}>{s.icon}</span>
                      <span className="font-headline text-xl font-bold" style={{ fontFamily: "Lexend, sans-serif" }}>
                        ${s.value}{s.suffix}
                      </span>
                    </div>
                    <input type="range" min={s.min} max={s.max} step={s.step} value={s.value}
                      onChange={(e) => s.setter(Number(e.target.value))}
                      style={{ accentColor: "#00e293" }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Calculate CTA */}
          <button onClick={handleCalculate}
            className="w-full py-5 rounded-2xl font-headline font-extrabold text-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: "Lexend, sans-serif",
              background: "linear-gradient(135deg, #a4e6ff 0%, #00d1ff 100%)",
              color: "#003543",
              boxShadow: "0 0 30px rgba(0,209,255,0.25)",
            }}>
            Architect My Strategy →
          </button>
        </div>

        {/* RIGHT: Results (5 cols) */}
        <div className="lg:col-span-5 sticky top-28 space-y-6" ref={resultRef}>
          {!calculated ? (
            <div className="glass-panel rounded-[2.5rem] p-12 text-center"
              style={{ border: "1px solid rgba(164,230,255,0.15)" }}>
              <span className="material-symbols-outlined text-6xl block mb-4" style={{ color: "#2d3449", fontSize: "64px" }}>
                query_stats
              </span>
              <h3 className="font-headline text-xl font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
                Awaiting Architecture
              </h3>
              <p className="text-sm" style={{ color: "#475569" }}>
                Select a hustle, set your inputs, and click Calculate to see your full profit projection.
              </p>
            </div>
          ) : (
            <>
              {/* Main ROI Scorecard */}
              <div className="glass-panel rounded-[2.5rem] p-10 relative overflow-hidden"
                style={{ border: "1px solid rgba(164,230,255,0.2)", boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(164,230,255,0.1), transparent)", filter: "blur(30px)" }} />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,226,147,0.05), transparent)", filter: "blur(30px)" }} />

                <div className="relative z-10">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#a4e6ff" }}>
                    Architectural Projection
                  </p>
                  <div className="font-headline font-black tracking-tighter mb-1"
                    style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: 1, fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
                    {results.roi}<span style={{ color: "#00e293" }}>%</span>
                  </div>
                  <p className="font-medium mt-2 mb-10" style={{ color: "#bbc9cf" }}>Annualized Return on Investment</p>

                  <div className="space-y-6 mb-10">
                    {/* Break-even bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-semibold" style={{ color: "#dae2fd" }}>Break-Even Velocity</span>
                        <span className="font-bold" style={{ color: "#a4e6ff" }}>
                          {results.breakEvenMonths < 100 ? `Month ${results.breakEvenMonths}` : "Year 2+"}
                        </span>
                      </div>
                      <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: "#2d3449" }}>
                        <div className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${Math.min(100, Math.max(5, (12 / Math.max(results.breakEvenMonths, 1)) * 100))}%`,
                            background: "#00e293",
                          }} />
                      </div>
                    </div>
                  </div>

                  {/* Key stats */}
                  <div className="grid grid-cols-2 gap-6 py-8"
                    style={{ borderTop: "1px solid rgba(60,73,78,0.4)", borderBottom: "1px solid rgba(60,73,78,0.4)" }}>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: "#bbc9cf" }}>
                        Monthly Net
                      </label>
                      <div className="font-headline text-3xl font-bold" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
                        ${Math.max(0, results.monthlyProfit).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: "#bbc9cf" }}>
                        Annual Profit
                      </label>
                      <div className="font-headline text-3xl font-bold" style={{ fontFamily: "Lexend, sans-serif", color: "#00e293" }}>
                        ${Math.max(0, results.annualProfit).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 space-y-3">
                    <button onClick={handleCalculate}
                      className="w-full py-4 rounded-2xl font-headline font-extrabold text-xl transition-all active:scale-[0.98] hover:shadow-2xl"
                      style={{
                        fontFamily: "Lexend, sans-serif",
                        background: "linear-gradient(135deg, #a4e6ff 0%, #00d1ff 100%)",
                        color: "#003543",
                        boxShadow: "0 0 20px rgba(0,209,255,0.2)",
                      }}>
                      Lock Strategy
                    </button>
                    <p className="text-center text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: "#475569" }}>
                      Based on current market data and sector standard margins.
                    </p>
                  </div>
                </div>
              </div>

              {/* Viral Share Card */}
              <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row" style={{ background: "#131b2e", boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}>
                <div className="md:w-1/2 p-8 signature-gradient flex flex-col justify-between min-h-52"
                  style={{ color: "#003543" }}>
                  <div>
                    <div className="font-bold tracking-widest text-xs uppercase mb-1 opacity-70">Architect Projection</div>
                    <h2 className="font-headline text-3xl font-black leading-none mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
                      PROFIT:<br />${Math.max(0, results.monthlyProfit).toLocaleString()}/mo
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Market Fit Verified
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        ROI: {Math.max(0, results.roi)}% annual
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-bold opacity-60 mt-4">HustleROI.com</div>
                </div>

                <div className="md:w-1/2 p-8 flex flex-col justify-center" style={{ background: "#2d3449" }}>
                  <h4 className="font-headline text-xl font-bold mb-3" style={{ fontFamily: "Lexend, sans-serif" }}>
                    Share Your Potential
                  </h4>
                  <p className="text-sm mb-6" style={{ color: "#bbc9cf" }}>
                    High-performing projections get 3x more visibility. Share your result.
                  </p>
                  <div className="flex gap-3">
                    <button onClick={handleShare}
                      className="flex-1 rounded-xl p-3 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                      style={{ background: "rgba(255,255,255,0.07)" }}>
                      <span className="material-symbols-outlined text-[18px]">share</span>
                      Socials
                    </button>
                    <button onClick={handleShare}
                      className="flex-1 rounded-xl p-3 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                      style={{ background: "rgba(255,255,255,0.07)" }}>
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Save Card
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chart + Tool Stack — shown after calculating */}
      {calculated && (
        <div className="mt-12 space-y-8">
          {/* 12-month chart */}
          <div className="rounded-3xl p-8" style={{ background: "#131b2e" }}>
            <h3 className="font-headline text-2xl font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
              12-Month Revenue Architecture
            </h3>
            <p className="text-sm mb-6" style={{ color: "#475569" }}>
              Based on {hoursPerWeek}hrs/week · ${adSpend}/mo ad spend · ${budget.toLocaleString()} initial capital
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a4e6ff" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#a4e6ff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00e293" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00e293" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" tick={{ fill: "#3c494e", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#3c494e", fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <CartesianGrid vertical={false} stroke="rgba(60,73,78,0.2)" />
                <Tooltip
                  contentStyle={{ background: "#131b2e", border: "1px solid #3c494e", borderRadius: 12, color: "#dae2fd" }}
                  formatter={(val, name) => [`$${Number(val).toLocaleString()}`, String(name)]}
                />
                <ReferenceLine y={0} stroke="rgba(60,73,78,0.5)" strokeDasharray="4 4" />
                <Area type="monotone" dataKey="Revenue" stroke="#a4e6ff" fill="url(#revGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="Profit" stroke="#00e293" fill="url(#profitGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex gap-6 mt-4">
              {[{ color: "#a4e6ff", label: "Monthly Revenue" }, { color: "#00e293", label: "Monthly Profit" }].map((l) => (
                <div key={l.label} className="flex items-center gap-2 text-xs" style={{ color: "#475569" }}>
                  <div className="w-4 h-1.5 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>

          {/* Tool Stack */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-3xl font-bold" style={{ fontFamily: "Lexend, sans-serif" }}>
                Architect Tool Stack
              </h2>
              <div className="text-xs rounded-full px-3 py-1 font-bold uppercase tracking-wider"
                style={{ background: "#222a3d", color: "#bbc9cf" }}>
                ${results.toolsCost}/mo total
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {hustle.tools.map((tool, i) => (
                <div key={tool.name}
                  className="rounded-2xl p-6 flex flex-col group transition-all hover:translate-y-[-4px]"
                  style={{ background: "#131b2e" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "#222a3d" }}>
                      <span className="material-symbols-outlined" style={{ color: "#a4e6ff" }}>
                        {["auto_awesome", "palette", "dns", "record_voice_over", "analytics", "hub"][i % 6]}
                      </span>
                    </div>
                    {i === 0 && (
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase"
                        style={{ background: "rgba(0,226,147,0.15)", color: "#00e293" }}>
                        Must Have
                      </span>
                    )}
                  </div>
                  <h4 className="font-headline text-lg font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
                    {tool.name}
                  </h4>
                  <p className="text-sm mb-5 flex-1" style={{ color: "#bbc9cf", lineHeight: 1.6 }}>
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-sm" style={{ color: tool.cost === 0 ? "#00e293" : "#a4e6ff" }}>
                      {tool.cost === 0 ? "Free" : `$${tool.cost}/mo`}
                    </span>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 transition-all group-hover:shadow-lg"
                    style={{
                      background: "#222a3d",
                      color: "#a4e6ff",
                    }}>
                    Get Access
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ border: "1px solid rgba(60,73,78,0.3)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(164,230,255,0.03), rgba(0,209,255,0.05))" }} />
            <h3 className="font-headline text-4xl font-black tracking-tighter mb-4" style={{ fontFamily: "Lexend, sans-serif" }}>
              Ready to Execute the Plan?
            </h3>
            <p className="max-w-xl mx-auto mb-8 text-lg" style={{ color: "#bbc9cf" }}>
              Download the full technical documentation including the tax model and 12-month marketing calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-10 py-4 rounded-full font-headline font-black transition-all hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, #a4e6ff 0%, #00d1ff 100%)", color: "#003543", fontFamily: "Lexend, sans-serif" }}>
                Download PDF Report
              </button>
              <a href="/contact"
                className="px-10 py-4 rounded-full font-headline font-black border transition-colors hover:bg-white/5"
                style={{ color: "#dae2fd", borderColor: "rgba(60,73,78,0.5)", fontFamily: "Lexend, sans-serif" }}>
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
