import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Token Waste Detector — Find expensive prompt inefficiencies",
  description: "Analyzes AI prompt usage patterns to identify token waste and suggest optimizations. Save money on GPT and Claude API costs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f9e380de-f52c-4ada-8fe1-b6335482ce24"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
