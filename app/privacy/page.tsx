import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — HustleROI",
  description: "HustleROI privacy policy. Learn how we handle your data.",
};

const SECTIONS = [
  { title: "1. Information We Collect", content: "We collect minimal data. **Contact form submissions** (name, email, message) are stored to allow us to respond. **Analytics data** (pages visited, browser type, time on site) is collected in aggregate, anonymized form. **Calculator inputs** are processed entirely in your browser and are never sent to our servers." },
  { title: "2. How We Use Your Information", content: "We use collected information to respond to inquiries, improve our calculator accuracy, and understand aggregate site usage. We do NOT sell your personal information. We do NOT use your data for behavioral advertising." },
  { title: "3. Affiliate Links Disclosure", content: "HustleROI participates in affiliate marketing programs. Some links — particularly to software tools — are affiliate links. If you click and purchase, we may earn a commission at no cost to you. We only recommend tools we believe are genuinely useful. Our editorial recommendations are not influenced by affiliate relationships." },
  { title: "4. Cookies", content: "We use essential cookies for site functionality and anonymized analytics cookies to understand aggregate usage. We do not use advertising or tracking cookies. You can disable cookies in your browser settings." },
  { title: "5. Third-Party Services", content: "We may use Vercel (hosting), Plausible Analytics (privacy-respecting analytics), and email service providers for contact form processing. These providers are chosen for their strong privacy practices." },
  { title: "6. Data Retention", content: "Contact form submissions are retained for up to 12 months, then deleted. Analytics data is retained in aggregate form with no personally identifiable information after 90 days." },
  { title: "7. Your Rights", content: "Depending on your location, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at hello@hustleroi.com." },
  { title: "8. Children's Privacy", content: "HustleROI is not directed at children under 13. We do not knowingly collect personal information from children under 13." },
  { title: "9. Governing Law", content: "This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India." },
  { title: "10. Changes to This Policy", content: "We may update this policy periodically. Significant changes will be noted on our website. Continued use after changes constitutes acceptance." },
  { title: "11. Contact", content: "Privacy inquiries: ayushn612@gmail.com" },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-3xl mx-auto">
      <h1 className="font-headline text-4xl font-black tracking-tighter mb-2"
        style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
        Privacy Policy
      </h1>
      <p className="text-sm mb-10" style={{ color: "#475569" }}>Last updated: April 2026</p>
      <div className="space-y-6">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl p-6" style={{ background: "#131b2e" }}>
            <h2 className="font-headline text-lg font-bold mb-4" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>{s.title}</h2>
            <p className="text-sm leading-7" style={{ color: "#bbc9cf" }}
              dangerouslySetInnerHTML={{ __html: s.content.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#dae2fd">$1</strong>') }} />
          </div>
        ))}
      </div>
    </div>
  );
}
