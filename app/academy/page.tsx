import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Side Hustle Academy — Free Guides 2026 | HustleROI",
  description: "Free, in-depth guides on starting every major 2026 side hustle. Learn the math, the tools, and the strategy from real practitioners.",
};

const ARTICLES = [
  { slug: "how-to-calculate-hourly-rate", title: "How to Calculate Your True Hourly Rate as a Freelancer in 2026", category: "Side Hustle Math", readTime: "8 min", date: "Jan 2026", cpc: "high", excerpt: "Most freelancers charge 40% too little. Here is the exact formula to fix that — including the tax multiplier most gurus skip." },
  { slug: "side-hustle-break-even-analysis", title: "The Break-Even Formula Every Side Hustler Must Know", category: "Side Hustle Math", readTime: "7 min", date: "Jan 2026", cpc: "high", excerpt: "Understanding your break-even point is the difference between a strategic investment and burning money on a dead-end idea." },
  { slug: "compounding-income-side-hustles", title: "How Passive Income Compounds: The Math Your Guru Won't Show You", category: "Side Hustle Math", readTime: "9 min", date: "Jan 2026", cpc: "high", excerpt: "A $500/month passive income stream today can become $8,000/month in 24 months. The compound growth framework." },
  { slug: "tax-strategy-side-hustles-2026", title: "Side Hustle Tax Strategy: Keep More of Every Dollar You Earn", category: "Side Hustle Math", readTime: "11 min", date: "Feb 2026", cpc: "very-high", excerpt: "Self-employment taxes eat 30% of income. These 7 legal deductions — including business insurance — will dramatically reduce your bill." },
  { slug: "small-business-loans-side-hustles", title: "Small Business Loans and Funding Options for Side Hustles in 2026", category: "Side Hustle Math", readTime: "10 min", date: "Feb 2026", cpc: "very-high", excerpt: "From SBA microloans to revenue-based financing, here are 8 funding paths for bootstrapped side hustlers." },
  { slug: "ai-art-agency-guide-2026", title: "Step-by-Step Guide: Starting an AI Art Agency in 2026", category: "Deep Dive", readTime: "14 min", date: "Jan 2026", cpc: "medium", excerpt: "From zero clients to $4,000/month in 90 days. The exact process: niching down, pricing, and landing your first client." },
  { slug: "faceless-youtube-automation-guide", title: "Faceless YouTube Automation: The Complete 2026 Blueprint", category: "Deep Dive", readTime: "16 min", date: "Jan 2026", cpc: "medium", excerpt: "Build a YouTube channel generating $3,000+/month without showing your face. AI scripting, voiceover, editing, monetization." },
  { slug: "rental-arbitrage-airbnb-guide", title: "Rental Arbitrage 2026: Start an Airbnb Without Owning Property", category: "Deep Dive", readTime: "13 min", date: "Feb 2026", cpc: "medium", excerpt: "The legal way to rent an apartment and re-list it on Airbnb for profit. Script for asking landlords included." },
  { slug: "ai-voiceover-agency-guide", title: "AI Voiceover Agency: Charge $150/Hour for AI-Generated Audio", category: "Deep Dive", readTime: "11 min", date: "Feb 2026", cpc: "medium", excerpt: "ElevenLabs changed everything. Package AI voiceover as a premium service and find clients in week one." },
  { slug: "saas-micro-acquisition-guide", title: "SaaS Micro-Acquisition: Buy a $20K Business, Grow It to $8K MRR", category: "Deep Dive", readTime: "18 min", date: "Feb 2026", cpc: "high", excerpt: "How to identify undervalued SaaS products, perform due diligence, and grow the business without writing code." },
  { slug: "crypto-node-hosting-guide", title: "Crypto Node Hosting: Earn Passive Staking Rewards in 2026", category: "Deep Dive", readTime: "12 min", date: "Mar 2026", cpc: "high", excerpt: "Which blockchains are worth hosting, how to set up a validator node, and how to earn 8–15% APY while you sleep." },
  { slug: "solar-panel-cleaning-business", title: "Solar Panel Cleaning Business: $4,800/Month with a Pressure Washer", category: "Deep Dive", readTime: "10 min", date: "Mar 2026", cpc: "medium", excerpt: "A $1,200 equipment investment. A neighborhood with solar panels. Zero competition and massive 2026 demand." },
  { slug: "niche-newsletter-business-guide", title: "Niche Newsletter Business: From 0 to $3,600/Month with Email", category: "Deep Dive", readTime: "13 min", date: "Mar 2026", cpc: "high", excerpt: "The exact content strategy, growth hacks, and sponsor pitch deck that takes a newsletter to 5,000 subscribers in 90 days." },
  { slug: "business-insurance-side-hustles", title: "Business Insurance for Side Hustles: What You Actually Need in 2026", category: "Deep Dive", readTime: "9 min", date: "Mar 2026", cpc: "very-high", excerpt: "General liability, professional indemnity, cyber insurance — which policies protect you and which are unnecessary." },
  { slug: "midjourney-vs-dalle3", title: "Midjourney vs. DALL-E 3 for Professional Agency Work (2026 Comparison)", category: "Tool Review", readTime: "8 min", date: "Jan 2026", cpc: "medium", excerpt: "Head-to-head test: image quality, commercial licensing, API access, and pricing. Which one should your AI art agency use?" },
  { slug: "elevenlabs-vs-murf-ai", title: "ElevenLabs vs. Murf AI: Which Voiceover Tool is Worth Your Money?", category: "Tool Review", readTime: "7 min", date: "Feb 2026", cpc: "medium", excerpt: "We generated 200 audio samples on both platforms. Real differences in voice quality, API reliability, and cost of ownership." },
  { slug: "beehiiv-vs-convertkit-2026", title: "Beehiiv vs. ConvertKit (Kit) for Newsletter Monetization in 2026", category: "Tool Review", readTime: "9 min", date: "Feb 2026", cpc: "medium", excerpt: "Which platform makes you more money? Ad network revenue, referral programs, and email deliverability side by side." },
  { slug: "jobber-vs-housecall-pro", title: "Jobber vs. Housecall Pro: Best Field Service Software for 2026", category: "Tool Review", readTime: "8 min", date: "Mar 2026", cpc: "medium", excerpt: "For local service businesses (solar cleaning, landscaping), which software saves more time and keeps clients happiest?" },
  { slug: "pricelabs-vs-wheelhouse", title: "PriceLabs vs. Wheelhouse: Best Airbnb Dynamic Pricing Tool", category: "Tool Review", readTime: "7 min", date: "Mar 2026", cpc: "medium", excerpt: "We compared both tools across 6 months of real Airbnb data. Dynamic pricing hosts earn 30% more — here's who wins." },
  { slug: "llc-vs-sole-proprietor-side-hustle", title: "LLC vs. Sole Proprietorship for Your Side Hustle: 2026 Tax Guide", category: "Side Hustle Math", readTime: "10 min", date: "Apr 2026", cpc: "very-high", excerpt: "Should you form an LLC? We break down liability protection, tax advantages, and the exact states where it makes financial sense." },
];

const CATEGORY_CONFIG: Record<string, { color: string; bg: string; icon: string }> = {
  "Side Hustle Math": { color: "#a4e6ff", bg: "rgba(164,230,255,0.1)", icon: "calculate" },
  "Deep Dive": { color: "#00e293", bg: "rgba(0,226,147,0.1)", icon: "explore" },
  "Tool Review": { color: "#ceffdf", bg: "rgba(206,255,223,0.1)", icon: "rate_review" },
};

const CPC_CONFIG: Record<string, { label: string; color: string }> = {
  "very-high": { label: "High-CPC", color: "#f59e0b" },
  "high": { label: "Premium", color: "#a4e6ff" },
  "medium": { label: "Popular", color: "#00e293" },
};

export default function AcademyPage() {
  const math = ARTICLES.filter((a) => a.category === "Side Hustle Math");
  const deep = ARTICLES.filter((a) => a.category === "Deep Dive");
  const reviews = ARTICLES.filter((a) => a.category === "Tool Review");

  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-7xl mx-auto">

      {/* Header */}
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          style={{ background: "rgba(0,226,147,0.12)", color: "#00e293" }}>
          <span className="material-symbols-outlined text-xs">school</span>
          {ARTICLES.length} Free Articles
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-4"
          style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
          Side Hustle Academy
        </h1>
        <p className="text-xl max-w-2xl font-light" style={{ color: "#bbc9cf" }}>
          No fluff. No gurus. Just practical, math-backed guides on the most profitable 2026 side hustles.
        </p>
      </header>

      <ArticleSection title="The Math of Side Hustles" subtitle="Understand the numbers before you invest a single dollar." articles={math} />
      <ArticleSection title="Deep-Dive Hustle Guides" subtitle="Complete step-by-step playbooks for each 2026 side hustle." articles={deep} />
      <ArticleSection title="Tool Reviews" subtitle="Independent reviews of every tool in our calculator." articles={reviews} />

      {/* Newsletter CTA */}
      <div className="mt-20 rounded-3xl p-10 text-center glass-panel relative overflow-hidden"
        style={{ border: "1px solid rgba(60,73,78,0.3)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(164,230,255,0.03), rgba(0,209,255,0.05))" }} />
        <h2 className="font-headline text-2xl font-black mb-3" style={{ fontFamily: "Lexend, sans-serif" }}>
          Get New Guides in Your Inbox
        </h2>
        <p className="mb-6 text-sm" style={{ color: "#bbc9cf" }}>
          We publish 2 new side hustle deep-dives every week. No spam — just actionable content.
        </p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #a4e6ff, #00d1ff)", color: "#003543", fontFamily: "Lexend, sans-serif" }}>
          Subscribe Free
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

function ArticleSection({ title, subtitle, articles }: {
  title: string;
  subtitle: string;
  articles: typeof ARTICLES;
}) {
  const CATEGORY_CONFIG: Record<string, { color: string; bg: string }> = {
    "Side Hustle Math": { color: "#a4e6ff", bg: "rgba(164,230,255,0.1)" },
    "Deep Dive": { color: "#00e293", bg: "rgba(0,226,147,0.1)" },
    "Tool Review": { color: "#ceffdf", bg: "rgba(206,255,223,0.1)" },
  };
  const CPC_CONFIG: Record<string, { label: string; color: string }> = {
    "very-high": { label: "High-CPC", color: "#f59e0b" },
    "high": { label: "Premium", color: "#a4e6ff" },
    "medium": { label: "Popular", color: "#00e293" },
  };

  return (
    <div className="mb-16">
      <h2 className="font-headline text-3xl font-bold mb-1" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
        {title}
      </h2>
      <p className="text-sm mb-8" style={{ color: "#475569" }}>{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((a) => {
          const cat = CATEGORY_CONFIG[a.category] || CATEGORY_CONFIG["Deep Dive"];
          const cpc = CPC_CONFIG[a.cpc];
          return (
            <Link key={a.slug} href={`/academy/${a.slug}`}
              className="rounded-2xl p-6 flex flex-col group transition-all hover:translate-y-[-4px]"
              style={{ background: "#131b2e" }}>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-0.5 rounded font-bold"
                  style={{ background: cat.bg, color: cat.color }}>
                  {a.category}
                </span>
                {cpc && (
                  <span className="text-xs px-2 py-0.5 rounded font-bold"
                    style={{ background: `${cpc.color}15`, color: cpc.color, border: `1px solid ${cpc.color}30` }}>
                    {cpc.label}
                  </span>
                )}
              </div>
              <h3 className="font-headline text-sm font-bold mb-2 leading-snug group-hover:text-primary transition-colors"
                style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
                {a.title}
              </h3>
              <p className="text-xs flex-1 mb-4 leading-relaxed" style={{ color: "#475569" }}>
                {a.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid rgba(60,73,78,0.3)" }}>
                <div className="flex items-center gap-3 text-xs" style={{ color: "#334155" }}>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    {a.readTime}
                  </span>
                  <span>{a.date}</span>
                </div>
                <span className="text-xs flex items-center gap-0.5 group-hover:gap-1.5 transition-all" style={{ color: "#a4e6ff" }}>
                  Read
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
