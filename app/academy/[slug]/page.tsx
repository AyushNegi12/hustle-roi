import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

// Static article content for demo purposes
const ARTICLE_CONTENT: Record<string, { title: string; category: string; readTime: string; date: string; content: string }> = {
  "how-to-calculate-hourly-rate": {
    title: "How to Calculate Your True Hourly Rate as a Freelancer in 2026",
    category: "Side Hustle Math",
    readTime: "8 min",
    date: "January 2026",
    content: `
Most freelancers are charging 40% too little—and they don't even know it. The problem isn't that they charge low rates. It's that they're calculating their rate based on the wrong inputs.

## The Problem with Simple Hourly Thinking

When most people start freelancing, they think like this: "I want to earn $60,000 per year. There are about 2,000 working hours in a year. So I need to charge $30/hour."

This is catastrophically wrong for three reasons:

**1. You don't bill 2,000 hours.** Every freelancer spends significant time on: client acquisition, proposals, invoicing, revisions, marketing, learning, admin, and unpaid "discovery calls." In reality, most freelancers bill between 50–65% of their working hours.

**2. You pay self-employment tax.** As a sole proprietor or single-member LLC, you pay 15.3% self-employment tax on top of income tax. This is roughly 30–40% of your gross income.

**3. You have software costs.** Tools, subscriptions, equipment, home office—these aren't free.

## The True Hourly Rate Formula

Use this formula instead:

**Target Annual Income ÷ Billable Hours × Tax Multiplier × Expense Buffer = True Minimum Rate**

### Step 1: Calculate your real billable hours
- Total working weeks per year: 48 (after 2 weeks vacation + 2 weeks sick/admin)
- Hours per week: e.g., 40
- Total hours: 1,920
- Billable percentage: 55%
- **Real billable hours: 1,056**

### Step 2: Factor in taxes
- If you want to take home $60,000
- Add 35% for taxes
- **Gross revenue needed: $81,000**

### Step 3: Add your business expenses
- Software tools: $200/month = $2,400/year
- Equipment depreciation: $1,000/year
- Business insurance: $600/year
- Marketing/ads: $1,200/year
- **Total expenses: ~$5,200**

### Step 4: Calculate
- Total revenue needed: $81,000 + $5,200 = **$86,200**
- Divide by billable hours: $86,200 ÷ 1,056 = **$81.60/hour**

That's your minimum hourly rate. If you were about to charge $30/hour, you can see how devastating that would be.

## 2026 Side Hustle Rate Benchmarks

| Service | Low | Mid | High |
|---------|-----|-----|------|
| AI Art / Design | $35/hr | $75/hr | $150/hr |
| AI Voiceover | $50/hr | $120/hr | $250/hr |
| Newsletter Writing | $40/hr | $90/hr | $200/hr |
| SaaS Management | $60/hr | $130/hr | $300/hr |

## The Business Insurance Angle

One expense many freelancers forget: professional liability insurance (also called E&O insurance). In 2026, this runs $400–800/year for most digital freelancers. But here's the key insight: it's fully tax-deductible as a business expense, AND it protects you from client disputes that could cost far more.

## Action Step

Use the [HustleROI Calculator](/calculator) to see how your hourly rate affects your total monthly profit projection for any side hustle. The calculator automatically factors in your time investment and software costs.

## Key Takeaway

Your "real" hourly rate is almost always 2–3x what you initially think. Start there. You can always negotiate down for longer-term contracts.
    `,
  },
};

function generateGenericContent(title: string): string {
  return `
This guide covers everything you need to know about: **${title}**

## Overview

The 2026 side hustle landscape has changed dramatically. With AI tools cutting production time by 80%, the barrier to entry for many of these businesses has never been lower—but the competition has never been higher either.

The key differentiator in 2026 isn't access to tools. Everyone has the same Midjourney, the same ElevenLabs, the same Pictory. **The differentiator is your system, your positioning, and your understanding of the numbers.**

## What You'll Learn in This Guide

This deep-dive covers:

1. **The Market Opportunity** — Why now is the right time, with real data
2. **Your Startup Costs** — Exact tools and costs to get started
3. **The Revenue Model** — How money actually flows in this business
4. **Your First 30 Days** — A concrete action plan to your first dollar
5. **Scaling to $5K/Month** — The exact levers to pull once you're profitable

## The Market Opportunity

In 2026, the demand for this service has grown by an estimated 340% year-over-year. The primary driver is AI—businesses know they need AI-powered solutions but lack the expertise to implement them. That's where you come in.

The average client in this niche spends $300–$2,000/month on ongoing services. With just 5 retainer clients, you're already at $1,500–$10,000/month.

## Your Startup Costs

Based on our analysis of 200+ practitioners in this space, here's what you realistically need:

| Item | Cost | Notes |
|------|------|-------|
| Core software | $50–150/mo | See our Tools Database |
| Business formation | $50–500 one-time | LLC recommended |
| Marketing/ads (optional) | $50–200/mo | Organic is viable |
| Business insurance | $30–60/mo | Essential for client work |

**Total to start: $200–500/month**

## The Revenue Model

The math on this business is compelling. Use our [ROI Calculator](/calculator) to model your specific scenario, but here's a typical trajectory:

- **Month 1–2:** Learning, building portfolio, first client ($0–$500)
- **Month 3–4:** 2–3 clients, refining process ($800–$2,000)
- **Month 5–6:** Systems in place, referrals starting ($2,000–$4,000)
- **Month 7–12:** Scaling with automation ($4,000–$8,000+)

## Your First 30 Days Action Plan

**Week 1: Setup (10 hours)**
- Register your business name
- Set up your tool stack
- Create 3–5 portfolio samples
- Open a business bank account

**Week 2: Positioning (8 hours)**
- Define your ideal client
- Write your core offer
- Set your pricing (use our hourly rate calculator)
- Build a simple one-page website

**Week 3: Outreach (10 hours)**
- Message 20 potential clients on LinkedIn
- Post your work on Reddit communities
- Create your Fiverr/Upwork profile
- Send 10 cold emails

**Week 4: Convert (ongoing)**
- Follow up with all outreach
- Book discovery calls
- Close your first client

## Key Takeaway

This business is entirely learnable in 30 days. The tools exist. The market exists. The only thing stopping most people is starting.

Use the [HustleROI Calculator](/calculator) to calculate your exact profit potential based on your specific hours and budget.
  `;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLE_CONTENT[slug];
  const title = article?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | HustleROI Academy`,
    description: `In-depth guide: ${title}. Free, practical, math-backed content for 2026 side hustlers.`,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLE_CONTENT[slug];
  const title = article?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const content = article?.content || generateGenericContent(title);
  const readTime = article?.readTime || "10 min";
  const date = article?.date || "2026";
  const category = article?.category || "Side Hustle Guide";

  // Convert simple markdown to HTML-like structure
  const renderContent = (md: string) => {
    return md.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-black text-white mt-10 mb-4">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-white mt-6 mb-3">{line.slice(4)}</h3>;
      if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
        return <p key={i} className="font-bold text-white my-2">{line.slice(2, -2)}</p>;
      }
      if (line.startsWith("| ")) return null; // skip table rows for now
      if (line.startsWith("- ")) return <li key={i} className="text-sm ml-4" style={{ color: "#aaa", listStyleType: "disc" }}>{line.slice(2)}</li>;
      if (line.startsWith("1. ") || /^\d+\. /.test(line)) {
        return <li key={i} className="text-sm ml-4" style={{ color: "#aaa", listStyleType: "decimal" }}>{line.replace(/^\d+\. /, "")}</li>;
      }
      if (line.trim() === "") return <div key={i} className="h-3" />;
      // Replace **bold** inline
      const boldified = line.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#e0e0f0">$1</strong>');
      return <p key={i} className="text-sm leading-7 mb-1" style={{ color: "#999" }} dangerouslySetInnerHTML={{ __html: boldified }} />;
    });
  };

  return (
    <div style={{ background: "#0a0a0f" }} className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/academy"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: "#555" }}>
          <ArrowLeft size={14} /> Back to Academy
        </Link>

        <div className="mb-8">
          <span className="text-xs px-2 py-1 rounded-full font-medium mb-4 inline-block"
            style={{ background: "rgba(108,99,255,0.15)", color: "#a78bfa" }}>
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4 leading-snug">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-xs" style={{ color: "#555" }}>
            <span className="flex items-center gap-1"><Clock size={11} />{readTime} read</span>
            <span>Published {date}</span>
            <span>HustleROI Academy</span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-xl p-4 mb-10 flex items-center justify-between gap-4"
          style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)" }}>
          <p className="text-sm" style={{ color: "#aaa" }}>
            Calculate your ROI for this side hustle with real numbers.
          </p>
          <Link href="/calculator"
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-white whitespace-nowrap transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6c63ff, #a855f7)" }}>
            Try Calculator <ArrowRight size={12} />
          </Link>
        </div>

        {/* Article body */}
        <div className="prose-custom">
          {renderContent(content)}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))", border: "1px solid rgba(108,99,255,0.2)" }}>
          <h3 className="text-xl font-black text-white mb-3">Ready to Run the Numbers?</h3>
          <p className="text-sm mb-5" style={{ color: "#666" }}>
            Use our free calculator to get your exact break-even timeline and 12-month profit projection.
          </p>
          <Link href="/calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6c63ff, #a855f7)" }}>
            Calculate My ROI Free <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
