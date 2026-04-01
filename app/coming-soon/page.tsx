import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Coming Soon — Loopro",
  description: "Loopro app availability update.",
};

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center px-6 pt-[calc(5.5rem+env(safe-area-inset-top))] text-center sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
        <p className="max-w-xl text-balance text-lg leading-relaxed sm:text-xl">
          The app is not available yet. Planned release: May 2026.
        </p>
      </div>
    </main>
  );
}
