import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="download"
      className="flex w-full flex-1 flex-col items-center justify-center px-1 pb-10 pt-6 text-center sm:px-0 sm:pb-16 sm:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="relative max-w-2xl">
        <h1
          id="hero-heading"
          className="lp-animate-in lp-delay-2 text-balance text-[clamp(1.9rem,7vw,3rem)] font-semibold leading-[1.08] tracking-tight text-[var(--lp-fg)]"
        >
          Track and manage all your subscriptions in one place
        </h1>
      </div>
      <p className="lp-animate-in lp-delay-3 mt-4 max-w-md text-pretty text-base leading-relaxed text-[var(--lp-fg-muted)] sm:text-[17px]">
        Manage recurring payments, track subscriptions, and get insights into
        your monthly spending.
      </p>
      <div className="lp-animate-in lp-delay-3 mt-8 flex w-full flex-col items-center justify-center">
        <Link
          href="/coming-soon"
          aria-label="Download on the App Store"
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
            alt="Download on the App Store"
            width={220}
            height={66}
            priority
            unoptimized
            className="h-[40px] w-auto sm:h-[44px] md:h-[46px]"
          />
        </Link>
      </div>
      <div className="lp-animate-in lp-delay-3 mt-8 flex w-full justify-center">
        <Image
          src="/iphone_main_phone_view.png"
          alt="Loopro app preview on iPhone"
          width={682}
          height={1200}
          priority
          className="h-auto w-[min(62vw,210px)] sm:hidden"
        />
        <Image
          src="/iphone_main.png"
          alt="Loopro app preview on iPhone"
          width={682}
          height={1200}
          priority
          className="hidden h-auto sm:block sm:w-[320px] md:w-[360px]"
        />
      </div>
      <div className="lp-animate-in lp-delay-3 mt-3 flex w-full justify-center">
        <Link
          href="/features"
          className="text-[13px] font-normal text-[var(--lp-fg-muted)] transition-colors hover:text-[var(--lp-fg)]"
        >
          learn more
        </Link>
      </div>
    </section>
  );
}
