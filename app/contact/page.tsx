import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const EMAIL = "mateusz.michel7@gmail.com";

const faqItems = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    question: "Sunt in culpa qui officia deserunt mollit anim id est laborum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
] as const;

export const metadata: Metadata = {
  title: "Contact — Loopro",
  description: "Get in touch with Loopro.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[100svh] bg-black px-4 pb-10 pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--lp-fg)] sm:px-6 sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
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
