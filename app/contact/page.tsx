import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const EMAIL = "mateusz.michel7@gmail.com";

const faqItems = [
  {
    question: "Is Loopro available only on Apple devices, or also on Android and desktop?",
    answer:
      "At the moment, Loopro is available only on iPhones running iOS 26. I currently do not plan to release an Android version or desktop apps for either Windows or macOS.",
  },
  {
    question: "Is the app free, and can I use it without paying?",
    answer:
      <>
        Yes, you can use the app for free. Full details about what is included
        in the free version and what is unlocked in the paid version are
        available in{" "}
        <Link
          href="/features"
          className="underline underline-offset-4 transition-colors hover:text-[var(--lp-accent-hover)]"
        >
          Features
        </Link>
        .
      </>,
  },
  {
    question:
      "Does the app collect sensitive data, and how does it handle user information?",
    answer:
      <>
        No. You can use the app without creating an account or logging in, and
        it does not collect personal or sensitive data. For full details, please
        review our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 transition-colors hover:text-[var(--lp-accent-hover)]"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 transition-colors hover:text-[var(--lp-accent-hover)]"
        >
          Terms
        </Link>
        .
      </>,
  },
] as const;

export const metadata: Metadata = {
  title: "Contact — Loopro",
  description: "Get in touch with Loopro.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-black px-4 pb-10 pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--lp-fg)] sm:px-6 sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
      <SiteHeader />
      <div className="mx-auto w-full max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/65"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white/90">Contact</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-white/80">
          Questions or feedback? Reach us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-white underline-offset-4 transition-colors hover:text-[var(--lp-accent-hover)] hover:underline"
          >
            {EMAIL}
          </a>
          .
        </p>

        <section
          aria-labelledby="faq-heading"
          className="mt-12 border-t border-white/12 pt-10"
        >
          <h2
            id="faq-heading"
            className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            FAQ
          </h2>
          <ul className="mt-6 space-y-8">
            {faqItems.map((item) => (
              <li key={item.question}>
                <h3 className="text-[15px] font-semibold leading-snug text-white/95">
                  {item.question}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/72">
                  {item.answer}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
