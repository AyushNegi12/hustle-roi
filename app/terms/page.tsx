import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — HustleROI",
  description: "HustleROI terms of service and usage agreement.",
};

const SECTIONS = [
  { title: "1. Acceptance of Terms", content: "By accessing and using HustleROI, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website." },
  { title: "2. Description of Service", content: "HustleROI provides a free online ROI calculator and educational content about side hustles. All results are projections based on industry averages and your inputs. They are not guarantees of financial performance." },
  { title: "3. Disclaimer of Financial Advice", content: "IMPORTANT: Nothing on HustleROI constitutes financial, investment, tax, or legal advice. Our calculator provides estimates for educational purposes only. Actual results will vary based on your skills, market conditions, effort, and other factors. Always consult qualified professionals before making financial decisions. Starting a business involves risk, including the risk of financial loss." },
  { title: "4. Accuracy of Information", content: "We strive to keep data accurate and up to date. However, we make no warranties about the accuracy, completeness, or reliability of any information on this site. Revenue estimates are based on publicly available data and may not reflect your individual results." },
  { title: "5. Affiliate Links", content: "Some links on this website are affiliate links. We may earn a commission if you purchase through these links at no extra cost to you. We only recommend products we believe are genuinely useful." },
  { title: "6. Intellectual Property", content: "All content on HustleROI, including text, graphics, logos, and calculator code, is the property of HustleROI and protected by copyright law. You may not reproduce or create derivative works without written permission. You may share links to our content freely." },
  { title: "7. User Conduct", content: "You agree not to: (a) use the site for any unlawful purpose; (b) attempt to reverse-engineer our calculator logic for commercial resale; (c) submit false information through our contact form; (d) use the site in any way that could damage or impair it." },
  { title: "8. Limitation of Liability", content: "To the maximum extent permitted by law, HustleROI and its owners shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our total liability for any claim shall not exceed $100." },
  { title: "9. Governing Law", content: "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of HustleROI shall be subject to the exclusive jurisdiction of courts in India." },
  { title: "10. Contact", content: "For questions about these terms: ayushn612@gmail.com" },
];

export default function TermsPage() {
  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-3xl mx-auto">
      <h1 className="font-headline text-4xl font-black tracking-tighter mb-2"
        style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
        Terms of Service
      </h1>
      <p className="text-sm mb-10" style={{ color: "#475569" }}>Last updated: April 2026</p>
      <div className="space-y-6">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl p-6" style={{ background: "#131b2e" }}>
            <h2 className="font-headline text-lg font-bold mb-3" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>{s.title}</h2>
            <p className="text-sm leading-7" style={{ color: "#bbc9cf" }}>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
