"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const linkLeft = [
  { href: "#download", label: "Download" },
  { href: "#features", label: "Features" },
] as const;

const linkRight = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
] as const;

const linkClass =
  "text-[13px] font-medium tracking-tight text-white/90 transition-colors hover:text-white sm:text-[15px] lg:text-base";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileLinks = [...linkLeft, ...linkRight];

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header className="lp-animate-in lp-delay-1 shrink-0 pt-4 pb-2 sm:pt-8 sm:pb-4">
      <div className="relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-[1px] backdrop-saturate-125 sm:px-4 sm:py-3">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0)_64%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[1px] rounded-[11px] border border-white/[0.045]"
        />
        <div className="relative z-10">
        <div className="flex items-center justify-between sm:hidden">
          <div className="h-10 w-10" />
          <Link
            href="/"
            className="flex shrink-0 rounded-xl px-0.5 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-accent)]"
            aria-label="Loopro home"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={44}
              height={44}
              priority
              className="h-10 w-10"
              unoptimized
            />
          </Link>
          <button
            type="button"
            className="relative z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] transition-colors hover:bg-white/[0.06]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              className={`absolute h-[1.5px] w-4 bg-[var(--lp-fg)] transition-all duration-300 ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]"}`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-[var(--lp-fg)] transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-[var(--lp-fg)] transition-all duration-300 ${menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]"}`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out sm:hidden ${menuOpen ? "mt-3 max-h-80 opacity-100" : "mt-0 max-h-0 opacity-0 pointer-events-none"}`}
        >
          <nav aria-label="Mobile">
            <div className="flex flex-col gap-1 pb-1">
              {mobileLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/[0.04] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="hidden w-full min-w-0 grid-cols-1 items-center gap-y-3 sm:grid sm:grid-cols-3 sm:gap-y-0">
          <nav
            className="order-2 flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:order-1 sm:justify-end sm:gap-x-5"
            aria-label="Product"
          >
            {linkLeft.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="order-1 flex min-w-0 justify-center sm:order-2">
            <Link
              href="/"
              className="flex shrink-0 rounded-xl px-0.5 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lp-accent)]"
              aria-label="Loopro home"
            >
              <Image
                src="/logo.svg"
                alt=""
                width={52}
                height={52}
                priority
                className="h-11 w-11 sm:h-[52px] sm:w-[52px]"
                unoptimized
              />
            </Link>
          </div>

          <nav
            className="order-3 flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:justify-start sm:gap-x-5"
            aria-label="Legal"
          >
            {linkRight.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        </div>
      </div>
    </header>
  );
}
