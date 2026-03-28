export function Footer() {
  const linkClass =
    "scroll-mt-24 transition-colors hover:text-[var(--lp-fg)]";

  return (
    <footer className="lp-animate-in lp-delay-5 mt-auto w-full shrink-0 border-t border-[var(--lp-border)] bg-black py-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 text-[11px] text-[var(--lp-fg-muted)] sm:px-6 sm:text-[12px]">
        <span className="text-[var(--lp-fg-muted)]/80">
          © {new Date().getFullYear()} Loopro
        </span>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6">
          <a id="terms" href="/terms" className={linkClass}>
            Terms of Service
          </a>
          <a id="privacy" href="/privacy" className={linkClass}>
            Privacy Policy
          </a>
          <a id="download" href="/download" className={linkClass}>
            Download
          </a>
        </div>
      </div>
    </footer>
  );
}
