"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = form.subject
      ? `[HustleROI] ${form.subject} — from ${form.name}`
      : `[HustleROI] Message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:ayushn612@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputStyle = {
    background: "#060e20",
    border: "1px solid rgba(60,73,78,0.4)",
    color: "#dae2fd",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div style={{ background: "#0b1326" }} className="px-6 md:px-12 py-10 max-w-2xl mx-auto">
      <header className="mb-12 text-center">
        <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "#131b2e" }}>
          <span className="material-symbols-outlined text-3xl" style={{ color: "#a4e6ff" }}>mail</span>
        </div>
        <h1 className="font-headline text-4xl font-black tracking-tighter mb-4"
          style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
          Contact
        </h1>
        <p style={{ color: "#bbc9cf" }}>Every message gets a reply. Usually within 24–48 hours.</p>
      </header>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5" style={{ background: "#131b2e" }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#bbc9cf" }}>
                Your Name
              </label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#bbc9cf" }}>
                Your Email
              </label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle} placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#bbc9cf" }}>
              Subject
            </label>
            <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
              style={{ ...inputStyle, background: "#060e20" }}>
              <option value="">Select a topic...</option>
              <option value="Calculator question">Question about calculator results</option>
              <option value="Tool feedback">Tool recommendation / feedback</option>
              <option value="Advertising">Advertising / partnership</option>
              <option value="Bug report">Bug report</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#bbc9cf" }}>
              Message
            </label>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "none" }} placeholder="What's on your mind?" />
          </div>
          <button type="submit"
            className="w-full py-4 rounded-xl font-headline font-extrabold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #a4e6ff, #00d1ff)", color: "#003543", fontFamily: "Lexend, sans-serif" }}>
            Send Message
          </button>
          <p className="text-xs text-center" style={{ color: "#334155" }}>
            This will open your email client pre-filled and ready to send.
          </p>
        </form>
      ) : (
        <div className="rounded-3xl p-12 text-center" style={{ background: "#131b2e" }}>
          <span className="material-symbols-outlined block mb-4"
            style={{ color: "#00e293", fontSize: "64px", fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <h2 className="font-headline text-2xl font-black mb-3" style={{ fontFamily: "Lexend, sans-serif" }}>
            Email Client Opened
          </h2>
          <p style={{ color: "#bbc9cf" }}>
            Your email client should have opened with the message pre-filled. Just hit send.
            If it didn&apos;t open, email directly:{" "}
            <a href="mailto:ayushn612@gmail.com" style={{ color: "#a4e6ff" }}>
              ayushn612@gmail.com
            </a>
          </p>
        </div>
      )}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl p-5" style={{ background: "#131b2e" }}>
          <span className="material-symbols-outlined mb-3 block" style={{ color: "#a4e6ff" }}>mail</span>
          <h3 className="font-headline font-semibold text-sm mb-1" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
            Email
          </h3>
          <a href="mailto:ayushn612@gmail.com" className="text-xs hover:text-white transition-colors"
            style={{ color: "#475569" }}>
            ayushn612@gmail.com
          </a>
        </div>
        <div className="rounded-2xl p-5" style={{ background: "#131b2e" }}>
          <span className="material-symbols-outlined mb-3 block" style={{ color: "#a4e6ff" }}>schedule</span>
          <h3 className="font-headline font-semibold text-sm mb-1" style={{ fontFamily: "Lexend, sans-serif", color: "#dae2fd" }}>
            Response Time
          </h3>
          <p className="text-xs" style={{ color: "#475569" }}>Within 24–48 hours</p>
        </div>
      </div>
    </div>
  );
}
