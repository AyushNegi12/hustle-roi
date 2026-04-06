import { Metadata } from "next";
import { Suspense } from "react";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "ROI Calculator — HustleROI",
  description: "Calculate your exact return on investment for any 2026 side hustle. Input your budget and hours, get a 12-month profit projection.",
};

export default function CalculatorPage() {
  return (
    <Suspense fallback={
      <div style={{ background: "#0a0a0f", minHeight: "100vh" }} className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📊</div>
          <p style={{ color: "#555" }}>Loading calculator...</p>
        </div>
      </div>
    }>
      <CalculatorClient />
    </Suspense>
  );
}
