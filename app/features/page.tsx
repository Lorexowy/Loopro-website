import type { Metadata } from "next";
import { BackgroundVignette } from "../components/BackgroundVignette";
import Grainient from "../components/Grainient";
import { FeaturesExperience } from "./FeaturesExperience";

export const metadata: Metadata = {
  title:
    "Loopro Features - Subscription Tracker, Spending Insights, Payment Calendar",
  description:
    "Explore Loopro features: subscription overview, spending insights, and calendar view for recurring payments.",
  openGraph: {
    title:
      "Loopro Features - Subscription Tracker, Spending Insights, Payment Calendar",
    description:
      "Track subscriptions, understand recurring spend, and see payment dates in one calendar view.",
  },
};

export default function FeaturesPage() {
  return (
    <main className="relative isolate min-h-[100svh] min-h-dvh overflow-x-clip bg-black px-4 py-4 text-[var(--lp-fg)] sm:px-6 sm:py-6">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-[-2px] -z-10 bg-[radial-gradient(75%_55%_at_90%_0%,rgba(0,190,255,0.45)_0%,rgba(0,190,255,0)_58%),radial-gradient(90%_70%_at_50%_45%,rgba(150,150,150,0.26)_0%,rgba(150,150,150,0)_62%),radial-gradient(80%_65%_at_0%_100%,rgba(0,170,255,0.22)_0%,rgba(0,170,255,0)_58%),radial-gradient(ellipse_85%_65%_at_50%_0%,rgba(59,130,246,0.34)_0%,rgba(0,0,0,0)_58%),#000]"
      />
      <div className="pointer-events-none fixed inset-[-2px] z-0 sm:-z-10">
        <Grainient
          color1="#000000"
          color2="#444444"
          color3="#008cb4"
          colorBalance={0.28}
          blendAngle={0}
          blendSoftness={0.05}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-1 sm:hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.82)_8%,rgba(0,0,0,0.35)_20%,rgba(0,0,0,0.08)_36%,rgba(0,0,0,0.08)_64%,rgba(0,0,0,0.34)_80%,rgba(0,0,0,0.82)_92%,rgba(0,0,0,0.98)_100%)]"
      />
      <BackgroundVignette />
      <FeaturesExperience />
    </main>
  );
}
