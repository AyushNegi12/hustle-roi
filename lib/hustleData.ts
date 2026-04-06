export interface ToolItem {
  name: string;
  cost: number;
  url: string;
  description: string;
  affiliate?: boolean;
}

export interface HustleData {
  id: string;
  name: string;
  emoji: string;
  category: string;
  description: string;
  avgMonthlyRevenue: number;
  avgStartupCost: number;
  avgMonthlyExpenses: number;
  hoursToBreakEven: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  incomeType: "Active" | "Passive" | "Semi-Passive";
  tools: ToolItem[];
  revenueMultiplier: number; // per hour of work
  scalabilityScore: number; // 1-10
  marketDemand2026: "🔥 Explosive" | "📈 Growing" | "⚡ Stable";
}

export const HUSTLES: HustleData[] = [
  {
    id: "ai-art-agency",
    name: "AI-Art Agency",
    emoji: "🎨",
    category: "Creative AI",
    description: "Create and sell AI-generated artwork, illustrations, and branding assets to businesses and creators.",
    avgMonthlyRevenue: 4200,
    avgStartupCost: 150,
    avgMonthlyExpenses: 120,
    hoursToBreakEven: 8,
    difficulty: "Beginner",
    incomeType: "Active",
    revenueMultiplier: 45,
    scalabilityScore: 8,
    marketDemand2026: "🔥 Explosive",
    tools: [
      { name: "Midjourney", cost: 30, url: "https://midjourney.com", description: "Best AI image generator for commercial work", affiliate: true },
      { name: "Adobe Firefly", cost: 55, url: "https://adobe.com/firefly", description: "Commercial-safe AI art with full licensing", affiliate: true },
      { name: "Canva Pro", cost: 15, url: "https://canva.com", description: "Design templates and client presentations", affiliate: true },
      { name: "Notion (Client CRM)", cost: 10, url: "https://notion.so", description: "Manage clients, briefs, and deliverables", affiliate: true },
      { name: "Stripe", cost: 0, url: "https://stripe.com", description: "Accept payments from clients globally", affiliate: false },
      { name: "Fiverr Pro", cost: 0, url: "https://fiverr.com", description: "Marketplace to find first clients fast", affiliate: false },
    ],
  },
  {
    id: "faceless-youtube",
    name: "Faceless YouTube Automation",
    emoji: "📹",
    category: "Content Creation",
    description: "Run YouTube channels without showing your face using AI voiceovers, stock footage, and automated editing.",
    avgMonthlyRevenue: 3800,
    avgStartupCost: 200,
    avgMonthlyExpenses: 180,
    hoursToBreakEven: 12,
    difficulty: "Intermediate",
    incomeType: "Semi-Passive",
    revenueMultiplier: 35,
    scalabilityScore: 9,
    marketDemand2026: "🔥 Explosive",
    tools: [
      { name: "ElevenLabs", cost: 22, url: "https://elevenlabs.io", description: "Hyper-realistic AI voiceovers", affiliate: true },
      { name: "Pictory AI", cost: 47, url: "https://pictory.ai", description: "Auto-creates videos from scripts", affiliate: true },
      { name: "InVideo AI", cost: 30, url: "https://invideo.io", description: "AI video editing and creation", affiliate: true },
      { name: "Jasper AI", cost: 49, url: "https://jasper.ai", description: "AI script writing for YouTube", affiliate: true },
      { name: "TubeBuddy", cost: 9, url: "https://tubebuddy.com", description: "YouTube SEO and analytics", affiliate: true },
      { name: "Storyblocks", cost: 15, url: "https://storyblocks.com", description: "Unlimited royalty-free stock footage", affiliate: true },
    ],
  },
  {
    id: "saas-micro-buy",
    name: "SaaS Micro-Acquisition",
    emoji: "💼",
    category: "Digital Assets",
    description: "Buy small profitable SaaS products for $5K–$50K, improve them, and grow recurring revenue.",
    avgMonthlyRevenue: 8500,
    avgStartupCost: 15000,
    avgMonthlyExpenses: 400,
    hoursToBreakEven: 6,
    difficulty: "Advanced",
    incomeType: "Passive",
    revenueMultiplier: 120,
    scalabilityScore: 10,
    marketDemand2026: "📈 Growing",
    tools: [
      { name: "MicroAcquire", cost: 0, url: "https://acquire.com", description: "Marketplace for buying micro-SaaS", affiliate: false },
      { name: "Acquire.com Premium", cost: 99, url: "https://acquire.com", description: "Premium deal flow access", affiliate: true },
      { name: "Stripe Atlas", cost: 500, url: "https://stripe.com/atlas", description: "US company formation for non-US founders", affiliate: true },
      { name: "Baremetrics", cost: 129, url: "https://baremetrics.com", description: "SaaS revenue analytics dashboard", affiliate: true },
      { name: "Intercom", cost: 74, url: "https://intercom.com", description: "Customer support and retention", affiliate: true },
      { name: "Cloudflare Workers", cost: 5, url: "https://workers.cloudflare.com", description: "Cheap global hosting at scale", affiliate: false },
    ],
  },
  {
    id: "rental-arbitrage",
    name: "Rental Arbitrage (Airbnb)",
    emoji: "🏠",
    category: "Real Estate",
    description: "Rent long-term, sublet short-term on Airbnb. No property ownership required. Scale to multiple units.",
    avgMonthlyRevenue: 5200,
    avgStartupCost: 3500,
    avgMonthlyExpenses: 2800,
    hoursToBreakEven: 4,
    difficulty: "Intermediate",
    incomeType: "Semi-Passive",
    revenueMultiplier: 80,
    scalabilityScore: 7,
    marketDemand2026: "📈 Growing",
    tools: [
      { name: "Hospitable (formerly Smartbnb)", cost: 40, url: "https://hospitable.com", description: "Automate Airbnb messaging & reviews", affiliate: true },
      { name: "PriceLabs", cost: 30, url: "https://pricelabs.co", description: "Dynamic pricing to maximize revenue", affiliate: true },
      { name: "Turno (Cleaning app)", cost: 15, url: "https://turno.com", description: "Manage cleaners between guest stays", affiliate: true },
      { name: "Lodgify", cost: 17, url: "https://lodgify.com", description: "Direct booking website builder", affiliate: true },
      { name: "AirDNA", cost: 39, url: "https://airdna.co", description: "Airbnb market data and analytics", affiliate: true },
      { name: "Google Workspace", cost: 6, url: "https://workspace.google.com", description: "Professional email and business tools", affiliate: true },
    ],
  },
  {
    id: "ai-voice-agency",
    name: "AI Voiceover Agency",
    emoji: "🎙️",
    category: "Creative AI",
    description: "Provide AI-powered voiceover services to advertisers, YouTubers, and e-learning companies.",
    avgMonthlyRevenue: 3200,
    avgStartupCost: 100,
    avgMonthlyExpenses: 80,
    hoursToBreakEven: 6,
    difficulty: "Beginner",
    incomeType: "Active",
    revenueMultiplier: 40,
    scalabilityScore: 7,
    marketDemand2026: "🔥 Explosive",
    tools: [
      { name: "ElevenLabs Creator", cost: 22, url: "https://elevenlabs.io", description: "Clone voices and generate studio audio", affiliate: true },
      { name: "Murf AI", cost: 26, url: "https://murf.ai", description: "Professional AI voices for business", affiliate: true },
      { name: "Descript", cost: 24, url: "https://descript.com", description: "Edit audio/video like a doc", affiliate: true },
      { name: "Fiverr Business", cost: 0, url: "https://fiverr.com", description: "Get first 10 clients from Fiverr", affiliate: false },
      { name: "Adobe Audition", cost: 22, url: "https://adobe.com", description: "Professional audio cleanup", affiliate: true },
      { name: "Loom", cost: 12, url: "https://loom.com", description: "Send sample work to potential clients", affiliate: true },
    ],
  },
  {
    id: "crypto-node-hosting",
    name: "Crypto Node Hosting",
    emoji: "⛓️",
    category: "Web3 / Crypto",
    description: "Run validator or masternode infrastructure for Proof-of-Stake blockchains. Earn staking rewards.",
    avgMonthlyRevenue: 2800,
    avgStartupCost: 5000,
    avgMonthlyExpenses: 60,
    hoursToBreakEven: 3,
    difficulty: "Advanced",
    incomeType: "Passive",
    revenueMultiplier: 90,
    scalabilityScore: 8,
    marketDemand2026: "📈 Growing",
    tools: [
      { name: "Hetzner Cloud", cost: 20, url: "https://hetzner.com", description: "Cheap dedicated VPS for node hosting", affiliate: true },
      { name: "Allnodes", cost: 10, url: "https://allnodes.com", description: "Managed node hosting platform", affiliate: true },
      { name: "DappNode", cost: 0, url: "https://dappnode.io", description: "Home node management software", affiliate: false },
      { name: "Coinbase Custody", cost: 0, url: "https://coinbase.com", description: "Secure crypto custody solution", affiliate: false },
      { name: "Grafana", cost: 0, url: "https://grafana.com", description: "Node uptime monitoring dashboard", affiliate: false },
      { name: "1Password", cost: 3, url: "https://1password.com", description: "Secure seed phrase management", affiliate: true },
    ],
  },
  {
    id: "solar-cleaning",
    name: "Solar Panel Cleaning",
    emoji: "☀️",
    category: "Local Services",
    description: "Clean solar panels for homeowners and businesses. Dirty panels lose 20–30% efficiency — owners pay well.",
    avgMonthlyRevenue: 4800,
    avgStartupCost: 1200,
    avgMonthlyExpenses: 250,
    hoursToBreakEven: 5,
    difficulty: "Beginner",
    incomeType: "Active",
    revenueMultiplier: 60,
    scalabilityScore: 6,
    marketDemand2026: "🔥 Explosive",
    tools: [
      { name: "Jobber", cost: 49, url: "https://getjobber.com", description: "Field service management & invoicing", affiliate: true },
      { name: "Google Business Profile", cost: 0, url: "https://business.google.com", description: "Get found on local search", affiliate: false },
      { name: "Housecall Pro", cost: 65, url: "https://housecallpro.com", description: "Schedule jobs and take payments", affiliate: true },
      { name: "Thumbtack", cost: 0, url: "https://thumbtack.com", description: "Get leads from local homeowners", affiliate: false },
      { name: "QuickBooks Simple Start", cost: 17, url: "https://quickbooks.intuit.com", description: "Track expenses and taxes", affiliate: true },
      { name: "Canva (Flyers)", cost: 15, url: "https://canva.com", description: "Design door-hanger and social ads", affiliate: true },
    ],
  },
  {
    id: "newsletter-monetization",
    name: "Niche Newsletter Business",
    emoji: "📧",
    category: "Media",
    description: "Build a highly targeted email newsletter in a niche (finance, AI, real estate) and monetize via sponsors.",
    avgMonthlyRevenue: 3600,
    avgStartupCost: 50,
    avgMonthlyExpenses: 90,
    hoursToBreakEven: 10,
    difficulty: "Intermediate",
    incomeType: "Semi-Passive",
    revenueMultiplier: 30,
    scalabilityScore: 9,
    marketDemand2026: "📈 Growing",
    tools: [
      { name: "Beehiiv", cost: 42, url: "https://beehiiv.com", description: "Best newsletter platform for monetization", affiliate: true },
      { name: "Kit (ConvertKit)", cost: 25, url: "https://kit.com", description: "Email automation for creators", affiliate: true },
      { name: "Perplexity Pro", cost: 20, url: "https://perplexity.ai", description: "AI-powered research for newsletter content", affiliate: true },
      { name: "Canva Pro", cost: 15, url: "https://canva.com", description: "Newsletter header and visual design", affiliate: true },
      { name: "Sparkloop", cost: 0, url: "https://sparkloop.app", description: "Paid referral growth system", affiliate: false },
      { name: "Rella (Analytics)", cost: 9, url: "https://rella.io", description: "Newsletter performance tracking", affiliate: true },
    ],
  },
];

export function calculateROI(
  hustle: HustleData,
  userBudget: number,
  hoursPerWeek: number,
  adSpend: number,
  laborRate: number
) {
  const monthlyHours = hoursPerWeek * 4.33;
  const toolsCost = hustle.tools.reduce((sum, t) => sum + t.cost, 0);

  // Adjust revenue based on hours worked
  const hourlyRate = hustle.revenueMultiplier;
  const baseRevenue = Math.min(monthlyHours * hourlyRate, hustle.avgMonthlyRevenue * 1.5);
  const adBoost = adSpend * 2.5; // ad spend multiplier
  const laborCost = laborRate * (monthlyHours * 0.3); // 30% of time outsourced
  const totalRevenue = baseRevenue + adBoost;

  const totalMonthlyExpenses = toolsCost + hustle.avgMonthlyExpenses + adSpend + laborCost;
  const monthlyProfit = totalRevenue - totalMonthlyExpenses;
  const startupCost = hustle.avgStartupCost + userBudget * 0.1;

  // Break-even calculation
  const breakEvenMonths = monthlyProfit > 0 ? Math.ceil(startupCost / monthlyProfit) : 999;

  // 12-month projection
  const monthlyProjection = Array.from({ length: 12 }, (_, i) => {
    const growthFactor = 1 + (hustle.scalabilityScore / 100) * i;
    const revenue = totalRevenue * growthFactor;
    const expenses = totalMonthlyExpenses * (1 + i * 0.02);
    const cumulative = (revenue - expenses) * (i + 1) - startupCost;
    return {
      month: i + 1,
      revenue: Math.round(revenue),
      expenses: Math.round(expenses),
      profit: Math.round(revenue - expenses),
      cumulative: Math.round(cumulative),
    };
  });

  const annualRevenue = monthlyProjection.reduce((s, m) => s + m.revenue, 0);
  const annualProfit = monthlyProjection.reduce((s, m) => s + m.profit, 0) - startupCost;
  const roi = startupCost > 0 ? Math.round((annualProfit / startupCost) * 100) : 0;

  return {
    monthlyRevenue: Math.round(totalRevenue),
    monthlyExpenses: Math.round(totalMonthlyExpenses),
    monthlyProfit: Math.round(monthlyProfit),
    annualRevenue: Math.round(annualRevenue),
    annualProfit: Math.round(annualProfit),
    roi,
    breakEvenMonths,
    toolsCost: Math.round(toolsCost),
    monthlyProjection,
    startupCost: Math.round(startupCost),
  };
}
