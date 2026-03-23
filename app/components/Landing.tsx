import { Footer } from "./Footer";
import Grainient from "./Grainient";
import { Header } from "./Header";
import { Hero } from "./Hero";

/** Jedna kolumna treści — ta sama szerokość i padding dla nav, hero, gridu i stopki */
const pageShell = "mx-auto w-full max-w-3xl px-4 sm:px-6";

export function Landing() {
  return (
    <div className="relative isolate flex min-h-[100svh] min-h-dvh flex-col overflow-x-clip overflow-y-visible bg-black">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-[-2px] -z-10 bg-[radial-gradient(75%_55%_at_90%_0%,rgba(0,190,255,0.45)_0%,rgba(0,190,255,0)_58%),radial-gradient(90%_70%_at_50%_45%,rgba(150,150,150,0.26)_0%,rgba(150,150,150,0)_62%),radial-gradient(80%_65%_at_0%_100%,rgba(0,170,255,0.22)_0%,rgba(0,170,255,0)_58%),radial-gradient(ellipse_85%_65%_at_50%_0%,rgba(59,130,246,0.34)_0%,rgba(0,0,0,0)_58%),#000]"
      />
      <div className="pointer-events-none fixed inset-[-2px] -z-10">
        <Grainient
          color1="#000000"
          color2="#444444"
          color3="#008cb4"
          timeSpeed={0.25}
          colorBalance={0.28}
          warpStrength={0.55}
          warpFrequency={5}
          warpSpeed={5.1}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={1300}
          noiseScale={1.45}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
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
        className="pointer-events-none fixed inset-0 z-0 sm:hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.82)_8%,rgba(0,0,0,0.35)_20%,rgba(0,0,0,0.08)_36%,rgba(0,0,0,0.08)_64%,rgba(0,0,0,0.34)_80%,rgba(0,0,0,0.82)_92%,rgba(0,0,0,0.98)_100%)]"
      />
      <div
        className={`${pageShell} relative z-10 flex flex-1 flex-col pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]`}
      >
        <Header />
        <main className="flex flex-1 flex-col">
          <Hero />
          <section id="features" className="sr-only" aria-hidden>
            Features
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
