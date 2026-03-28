import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Page not found — Loopro",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
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
          <span className="text-white/90">Page not found</span>
        </nav>

        <p className="text-sm font-medium tracking-wide text-white/55">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/75">
          The address may be mistyped, or the page may have been moved or
          removed. Check the URL or return to the homepage.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-accent)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
