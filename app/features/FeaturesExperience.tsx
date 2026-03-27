"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { featureSections, type FeatureSectionModel } from "./featuresData";

gsap.registerPlugin(useGSAP, ScrollTrigger, GSAPSplitText);

function AnimatedSplitText({
  text,
  className,
  duration = 0.55,
  stagger = 0.025,
  from = { opacity: 0, y: 14 },
}: {
  text: string;
  className: string;
  duration?: number;
  stagger?: number;
  from?: { opacity?: number; y?: number };
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prev = (el as unknown as { _split?: GSAPSplitText })._split;
    try {
      prev?.revert?.();
    } catch {
      // ignore
    }
    (el as unknown as { _split?: GSAPSplitText })._split = undefined;

    // Ensure the element content matches the latest React prop.
    // `revert()` may restore the previous text, so we set it explicitly.
    el.textContent = text;

    const split = new GSAPSplitText(el, {
      type: "chars",
      charsClass: "split-char",
      reduceWhiteSpace: false,
      smartTweak: true,
    });
    (el as unknown as { _split?: GSAPSplitText })._split = split;

    const chars = split.chars ?? [];
    gsap.set(chars, { opacity: from.opacity ?? 0, y: from.y ?? 14 });
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
    });
  }, [text, duration, stagger, from.opacity, from.y]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

type FeatureSectionProps = {
  feature: FeatureSectionModel;
};

function renderAnimatedWordChars(word: string, className: string) {
  return word.split("").map((char, index) => (
    <span key={`${className}-${index}`} className={`${className} inline-block`}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

const freeTier = {
  name: "Free",
  features: [
    "Up to 5 subscriptions",
    "1 credit",
    "Calendar access",
    "Notifications",
  ],
} as const;

const paidFeatures = [
  "Unlimited subscriptions",
  "Unlimited credits",
  "Insights for subscriptions and credits",
  "Widgets",
  "Premium app background",
  "iCloud sync",
] as const;

function FeatureSection({ feature }: FeatureSectionProps) {
  return (
    <section
      className={`feature-row ${
        feature.id === "feature-1"
          ? "feature-row--first relative"
          : feature.id === "feature-2"
            ? "feature-row--second relative"
            : feature.id === "feature-3"
              ? "feature-row--third relative"
              : ""
      } min-h-[100svh] min-h-dvh grid items-start gap-10 pt-[5rem] pb-9 sm:items-center sm:pt-9 sm:pb-9 md:grid-cols-2 md:gap-16 md:py-14 ${
        feature.reverse
          ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
          : ""
      }`}
    >
      {feature.id === "feature-1" ? (
        <div
          aria-hidden
          className="feature1-overlay pointer-events-none absolute inset-0 z-20 grid place-items-center"
        >
          <p className="text-center text-[clamp(3.2rem,16vw,9rem)] font-black uppercase leading-[0.85] tracking-tight text-[var(--lp-fg)]">
            {renderAnimatedWordChars("OVERVIEW", "feature1-pretitle-char")}
          </p>
        </div>
      ) : null}
      {feature.id === "feature-2" ? (
        <div
          aria-hidden
          className="feature2-overlay pointer-events-none absolute inset-0 z-20 grid place-items-center"
        >
          <p className="text-center text-[clamp(3.2rem,16vw,9rem)] font-black uppercase leading-[0.85] tracking-tight text-[var(--lp-fg)]">
            {renderAnimatedWordChars("INSIGHTS", "feature2-pretitle-char")}
          </p>
        </div>
      ) : null}
      {feature.id === "feature-3" ? (
        <div
          aria-hidden
          className="feature3-overlay pointer-events-none absolute inset-0 z-20 grid place-items-center"
        >
          <p className="text-center text-[clamp(3.2rem,16vw,9rem)] font-black uppercase leading-[0.85] tracking-tight text-[var(--lp-fg)]">
            {renderAnimatedWordChars("CALENDAR", "feature3-pretitle-char")}
          </p>
        </div>
      ) : null}
      <div
        className={`feature-copy ${
          feature.reverse
            ? "md:mr-auto md:max-w-xl"
            : "md:ml-auto md:max-w-xl"
        } mx-auto ${
          feature.id === "feature-1"
            ? "feature1-base-copy text-left"
            : feature.id === "feature-2"
              ? "feature2-base-copy text-left"
              : feature.id === "feature-3"
                ? "feature3-base-copy text-left"
                : "text-center"
        } md:text-left`}
      >
        {feature.id === "feature-1" ? (
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--lp-fg)] sm:text-4xl">
            Overview of your{" "}
            <span className="relative inline-grid align-baseline">
              <span className="sr-only">subscriptions</span>
              <span aria-hidden className="invisible [grid-area:1/1]">
                subscriptions
              </span>
              <span
                aria-hidden
                className="feature1-word-subscriptions absolute inset-0 whitespace-nowrap"
              >
                {renderAnimatedWordChars("subscriptions", "feature1-char-sub")}
              </span>
              <span
                aria-hidden
                className="feature1-word-loans absolute inset-0 whitespace-nowrap"
              >
                {renderAnimatedWordChars("loans", "feature1-char-loan")}
              </span>
            </span>
          </h2>
        ) : feature.id === "feature-2" || feature.id === "feature-3" ? (
          <>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--lp-fg)] sm:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--lp-fg-muted)] sm:text-base">
              {feature.description}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--lp-fg)] sm:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--lp-fg-muted)] sm:text-base">
              {feature.description}
            </p>
          </>
        )}
        {feature.id === "feature-1" ? (
          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--lp-fg-muted)] sm:text-base">
            {feature.description}
          </p>
        ) : null}
      </div>
      <div
        className={`feature-media flex w-full justify-center ${
          feature.id === "feature-1"
            ? "feature1-base-media"
            : feature.id === "feature-2"
              ? "feature2-base-media"
              : feature.id === "feature-3"
                ? "feature3-base-media"
                : ""
        }`}
      >
        {feature.id === "feature-1" ? (
          <div className="feature1-phone-stage relative w-[min(62vw,240px)] sm:w-[360px] aspect-[682/1200]">
            <Image
              src={feature.imageSrc}
              alt={`${feature.title} in Loopro app`}
              fill
              sizes="(min-width: 640px) 360px, min(62vw,240px)"
              className="feature1-phone-current object-contain"
            />
            <Image
              src="/iphone_main_phone_view.png"
              alt="Loopro app loans preview"
              fill
              sizes="(min-width: 640px) 360px, min(62vw,240px)"
              className="feature1-phone-next object-contain"
            />
          </div>
        ) : feature.id === "feature-2" ? (
          <div className="feature2-phone-stage relative w-[min(62vw,240px)] sm:w-[360px] aspect-[682/1200]">
            <Image
              src={feature.imageSrc}
              alt={`${feature.title} in Loopro app`}
              fill
              sizes="(min-width: 640px) 360px, min(62vw,240px)"
              className="object-contain"
            />
          </div>
        ) : feature.id === "feature-3" ? (
          <div className="feature3-phone-stage relative w-[min(62vw,240px)] sm:w-[360px] aspect-[682/1200]">
            <Image
              src={feature.imageSrc}
              alt={`${feature.title} in Loopro app`}
              fill
              sizes="(min-width: 640px) 360px, min(62vw,240px)"
              className="object-contain"
            />
          </div>
        ) : (
          <Image
            src={feature.imageSrc}
            alt={`${feature.title} in Loopro app`}
            width={682}
            height={1200}
            className="feature-phone h-auto w-[min(62vw,240px)] sm:w-[320px]"
          />
        )}
      </div>
    </section>
  );
}

function PricingCardShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`pricing-card relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-5 backdrop-blur-2xl backdrop-saturate-150 sm:rounded-3xl sm:px-10 sm:py-8 ${className || ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0)_64%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[1px] rounded-[15px] border border-white/[0.04]"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </article>
  );
}

function PricingFeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-1 flex-col gap-2 text-[13px] leading-snug text-[var(--lp-fg-muted)] sm:text-[14px]">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <svg
            className="mt-0.5 h-[16px] w-[16px] shrink-0 text-[#34c759] sm:h-[18px] sm:w-[18px]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="pricing-section mx-auto w-full max-w-6xl px-1 pb-16 pt-6 sm:px-0 sm:pb-20 sm:pt-10"
      aria-labelledby="pricing-heading"
    >
      <h2
        id="pricing-heading"
        className="pricing-heading text-center text-base font-semibold tracking-tight text-[var(--lp-accent)] sm:text-[15px]"
      >
        Pricing
      </h2>
      <p className="pricing-sub mx-auto mt-2 max-w-2xl text-pretty text-center text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--lp-fg)] leading-[1.05] sm:text-[48px]">
        Choose the right plan
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-[15px] leading-relaxed text-[var(--lp-fg-muted)] sm:text-[16px]">
        Start free and upgrade when you want full subscription tracking, spending insights, and the premium app experience.
      </p>

      <div
        className="pricing-billing mx-auto mt-8 flex w-full max-w-md flex-col items-center gap-2"
        role="group"
        aria-label="Billing period"
      >
        <div className="inline-flex rounded-full border border-white/12 bg-white/[0.06] p-1 backdrop-blur-md">
          <button
            type="button"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              !annual
                ? "bg-white/15 text-[var(--lp-fg)]"
                : "text-[var(--lp-fg-muted)]"
            }`}
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              annual
                ? "bg-white/15 text-[var(--lp-fg)]"
                : "text-[var(--lp-fg-muted)]"
            }`}
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:gap-x-8">
        <PricingCardShell>
          <h3 className="text-base font-semibold tracking-tight text-[var(--lp-fg)] sm:text-lg">
            {freeTier.name}
          </h3>

          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-4xl font-semibold tracking-tight text-[var(--lp-fg)] sm:text-5xl">
              $0
            </span>
          </p>

          <p className="mt-4 text-base leading-relaxed text-[var(--lp-fg-muted)]">
            A simple start to manage your subscriptions.
          </p>

          <PricingFeatureList items={freeTier.features} />
        </PricingCardShell>

        <PricingCardShell
          className="border-[var(--lp-accent)]/25 bg-white/[0.035]"
        >
          <div className="relative z-10 flex h-full min-h-0 flex-col">
            <h3 className="text-base font-semibold tracking-tight text-[var(--lp-fg)] sm:text-lg">
              <AnimatedSplitText
                text={annual ? "Yearly" : "Monthly"}
                className="inline-block"
              />
            </h3>

            <div className="mt-4 flex items-baseline gap-x-2">
              <AnimatedSplitText
                text={annual ? "$29.99" : "$2.99"}
                className="inline-block text-4xl font-semibold tracking-tight tabular-nums text-[var(--lp-fg)] sm:text-5xl"
                duration={0.7}
                stagger={0.03}
              />
              <AnimatedSplitText
                text={annual ? "/ year" : "/ month"}
                className="inline-block text-xs text-[var(--lp-fg-muted)] sm:text-sm"
                duration={0.55}
                stagger={0.04}
                from={{ opacity: 0, y: 10 }}
              />
            </div>

            <p
              className="mt-4 text-base leading-relaxed text-[var(--lp-fg-muted)] sm:mt-6"
            >
              Unlimited subscriptions, credits, and premium spending insights.
            </p>

            <PricingFeatureList items={paidFeatures} />
          </div>
        </PricingCardShell>
      </div>
    </section>
  );
}

export function FeaturesExperience() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".intro-icon", {
          transformOrigin: "center top",
          scale: 1,
          y: 0,
          autoAlpha: 1,
        });
        gsap.set(".intro-copy, .hero-breadcrumbs, .scroll-hint", {
          autoAlpha: 1,
          y: 0,
        });
        gsap.set(".feature-row", { autoAlpha: 1, y: 0 });
        gsap.set(".feature1-overlay", { autoAlpha: 0 });
        gsap.set(".feature1-base-copy, .feature1-base-media", {
          autoAlpha: 1,
          y: 0,
        });
        gsap.set(".feature1-char-sub", { autoAlpha: 1, y: 0 });
        gsap.set(".feature1-char-loan", { autoAlpha: 0, y: 16 });
        gsap.set(".feature1-phone-current", { autoAlpha: 1, xPercent: 0 });
        gsap.set(".feature1-phone-next", { autoAlpha: 0, xPercent: 130 });
        gsap.set(".feature2-overlay", { autoAlpha: 0 });
        gsap.set(".feature2-base-copy, .feature2-base-media", {
          autoAlpha: 1,
          y: 0,
        });
        gsap.set(".feature3-overlay", { autoAlpha: 0 });
        gsap.set(".feature3-base-copy, .feature3-base-media", {
          autoAlpha: 1,
          y: 0,
        });
        gsap.set(".pricing-heading, .pricing-sub, .pricing-billing, .pricing-card", {
          autoAlpha: 1,
          y: 0,
        });
        return;
      }

      gsap.set(".intro-icon", {
        transformOrigin: "center top",
        scale: 2.85,
        y: 24,
        autoAlpha: 1,
      });
      gsap.set(".intro-copy", { autoAlpha: 0, y: 28 });
      gsap.set(".hero-breadcrumbs", { autoAlpha: 1, y: 0 });
      gsap.set(".scroll-hint", { autoAlpha: 1, y: 0 });

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-stage",
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      heroTl
        .to(".hero-breadcrumbs", { autoAlpha: 0, y: -8, ease: "none" }, 0)
        .to(".scroll-hint", { autoAlpha: 0, y: 10, ease: "none" }, 0.18)
        .to(".intro-icon", { scale: 1, y: 0, ease: "none" }, 0)
        .to(".intro-copy", { autoAlpha: 1, y: 0, ease: "none" }, 0.42);

      gsap.to(".scroll-hint-label", {
        y: 2,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".scroll-hint-dot", {
        y: 8,
        autoAlpha: 0.45,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.set(".feature-row--first, .feature-row--second, .feature-row--third", {
        autoAlpha: 1,
        y: 0,
      });
      gsap.set(".feature1-pretitle-char", { autoAlpha: 0, y: 26 });
      gsap.set(".feature1-base-copy, .feature1-base-media", { autoAlpha: 0, y: 18 });
      gsap.set(".feature1-char-sub", { autoAlpha: 1, y: 0 });
      gsap.set(".feature1-char-loan", { autoAlpha: 0, y: 16 });
      gsap.set(".feature1-phone-next", { autoAlpha: 0, xPercent: 130 });
      gsap.set(".feature2-pretitle-char", { autoAlpha: 0, y: 26 });
      gsap.set(".feature2-base-copy, .feature2-base-media", { autoAlpha: 0, y: 18 });
      gsap.set(".feature3-pretitle-char", { autoAlpha: 0, y: 26 });
      gsap.set(".feature3-base-copy, .feature3-base-media", { autoAlpha: 0, y: 18 });

      const feature1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".feature-row--first",
          start: "center center",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      feature1Tl
        .to(
          ".feature1-pretitle-char",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.28,
            stagger: 0.045,
            ease: "none",
          },
          0.02,
        )
        .to({}, { duration: 0.55 }, 0.62)
        .to(
          ".feature1-pretitle-char",
          {
            y: -20,
            autoAlpha: 0,
            duration: 0.24,
            stagger: 0.028,
            ease: "none",
          },
          1.12,
        )
        .to(
          ".feature1-overlay",
          { autoAlpha: 0, duration: 0.12, ease: "none" },
          1.52,
        )
        .to(
          ".feature1-base-copy, .feature1-base-media",
          { y: 0, autoAlpha: 1, duration: 0.34, ease: "none" },
          1.58,
        )
        .to(
          ".feature1-char-sub",
          {
            y: -16,
            autoAlpha: 0,
            duration: 0.22,
            stagger: 0.018,
            ease: "none",
          },
          1.98,
        )
        .to(
          ".feature1-char-loan",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.24,
            stagger: 0.024,
            ease: "none",
          },
          2.1,
        )
        .to(
          ".feature1-phone-current",
          { xPercent: 165, autoAlpha: 0, duration: 0.52, ease: "none" },
          2.08,
        )
        .to(
          ".feature1-phone-next",
          { xPercent: 0, autoAlpha: 1, duration: 0.5, ease: "none" },
          2.5,
        )
        .to({}, { duration: 0.42 });

      const feature2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".feature-row--second",
          start: "center center",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      feature2Tl
        .to(
          ".feature2-pretitle-char",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.28,
            stagger: 0.045,
            ease: "none",
          },
          0.02,
        )
        .to({}, { duration: 0.55 }, 0.62)
        .to(
          ".feature2-pretitle-char",
          {
            y: -20,
            autoAlpha: 0,
            duration: 0.24,
            stagger: 0.028,
            ease: "none",
          },
          1.12,
        )
        .to(
          ".feature2-overlay",
          { autoAlpha: 0, duration: 0.12, ease: "none" },
          1.52,
        )
        .to(
          ".feature2-base-copy, .feature2-base-media",
          { y: 0, autoAlpha: 1, duration: 0.34, ease: "none" },
          1.58,
        )
        .to({}, { duration: 0.42 });

      const feature3Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".feature-row--third",
          start: "center center",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      feature3Tl
        .to(
          ".feature3-pretitle-char",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.28,
            stagger: 0.045,
            ease: "none",
          },
          0.02,
        )
        .to({}, { duration: 0.55 }, 0.62)
        .to(
          ".feature3-pretitle-char",
          {
            y: -20,
            autoAlpha: 0,
            duration: 0.24,
            stagger: 0.028,
            ease: "none",
          },
          1.12,
        )
        .to(
          ".feature3-overlay",
          { autoAlpha: 0, duration: 0.12, ease: "none" },
          1.52,
        )
        .to(
          ".feature3-base-copy, .feature3-base-media",
          { y: 0, autoAlpha: 1, duration: 0.34, ease: "none" },
          1.58,
        )
        .to({}, { duration: 0.42 });

      gsap.set(".pricing-heading, .pricing-sub", { autoAlpha: 0, y: 28 });
      gsap.set(".pricing-billing", { autoAlpha: 0, y: 20 });
      gsap.set(".pricing-card", { autoAlpha: 0, y: 56 });

      const pricingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 78%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      pricingTl
        .to(".pricing-heading", { autoAlpha: 1, y: 0, duration: 0.75 }, 0)
        .to(".pricing-sub", { autoAlpha: 1, y: 0, duration: 0.65 }, 0.08)
        .to(".pricing-billing", { autoAlpha: 1, y: 0, duration: 0.55 }, 0.1)
        .to(
          ".pricing-card",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.16,
        );

    },
    { scope },
  );

  return (
    <div ref={scope} className="relative z-10 mx-auto w-full max-w-6xl">
      <SiteHeader />

      <div className="pointer-events-none fixed inset-x-0 top-[5.5rem] z-20 px-4 sm:top-[6.5rem] sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="hero-breadcrumbs pointer-events-auto mx-auto flex w-fit items-center justify-center gap-2 text-[12px] tracking-tight text-white/75"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white/95">Features</span>
        </nav>
      </div>

      <section className="hero-stage mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col pt-[5.5rem] sm:pt-[6.5rem]">
        <div className="flex flex-1 items-start justify-center pt-10 sm:pt-12">
          <header className="mx-auto max-w-3xl px-1 text-center">
            <div className="intro-icon mx-auto mb-6 flex w-full justify-center">
              <div className="overflow-hidden rounded-[22%]">
              <Image
                src="/loopro_icon_svg.svg"
                alt="Loopro app icon"
                width={112}
                height={112}
                priority
                className="h-24 w-24 sm:h-28 sm:w-28"
              />
              </div>
            </div>
            <div className="intro-copy">
              <h1 className="text-balance text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-[var(--lp-fg)]">
                Loopro Subcription Tracker Features
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--lp-fg-muted)] sm:text-[17px]">
                Manage recurring payments with a clear subscription overview,
                smart spending insights, and a payment calendar built for
                everyday control.
              </p>
            </div>
          </header>
        </div>
        <div className="scroll-hint pointer-events-none mx-auto mb-10 flex flex-col items-center gap-2 text-white/70 sm:mb-12">
          <span className="scroll-hint-label text-[11px] uppercase tracking-[0.16em]">
            Scroll down
          </span>
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <span className="scroll-hint-dot h-1.5 w-1.5 rounded-full bg-white/80" />
          </span>
        </div>
      </section>

      <section className="mx-auto mt-1 w-full max-w-6xl pb-8 sm:pb-12">
        {featureSections.map((feature) => (
          <FeatureSection key={feature.id} feature={feature} />
        ))}
        <PricingSection />
      </section>
    </div>
  );
}
