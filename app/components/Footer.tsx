export function Footer() {
  return (
    <footer className="lp-animate-in lp-delay-5 mt-auto w-full shrink-0 border-t border-[var(--lp-border)] py-5 sm:py-6">
      <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[11px] text-[var(--lp-fg-muted)] sm:gap-x-6 sm:text-[12px]">
        <a
          id="privacy"
          href="/privacy"
          className="scroll-mt-24 transition-colors hover:text-[var(--lp-fg)]"
        >
          Privacy Policy
        </a>
        <a
          id="terms"
          href="/terms"
          className="scroll-mt-24 transition-colors hover:text-[var(--lp-fg)]"
        >
          Terms of Service
        </a>
        <a
          id="contact"
          href="mailto:hello@loopro.app"
          className="transition-colors hover:text-[var(--lp-fg)]"
        >
          hello@loopro.app
        </a>
        <span className="text-[var(--lp-fg-muted)]/80">
          © {new Date().getFullYear()} Loopro
        </span>
      </div>
    </footer>
  );
}
