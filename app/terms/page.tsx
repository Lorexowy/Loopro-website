import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const navLeft = [
  { href: "/#download", label: "Download" },
  { href: "/features", label: "Features" },
] as const;

const navRight = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/#contact", label: "Contact" },
] as const;

const linkClass =
  "text-[13px] font-medium tracking-tight text-white/90 transition-colors hover:text-white sm:text-[15px] lg:text-base";

export default function TermsPage() {
  return (
    <main className="min-h-[100svh] bg-black px-4 pb-10 pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--lp-fg)] sm:px-6 sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
      <SiteHeader />
      <div className="mx-auto w-full max-w-3xl">
        <header className="hidden">
          <div className="relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-[1px] backdrop-saturate-125 sm:px-4 sm:py-3">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0)_64%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[1px] rounded-[11px] border border-white/[0.045]"
            />
            <div className="relative z-10 grid w-full min-w-0 grid-cols-1 items-center gap-y-3 sm:grid-cols-3 sm:gap-y-0">
              <nav
                className="order-2 flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:order-1 sm:justify-end sm:gap-x-5"
                aria-label="Primary"
              >
                {navLeft.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
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
                {navRight.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/65"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white/90">Terms of Service</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-white/70">Effective date: 12 March 2026</p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/80">
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          Loopro mobile application (&quot;the App&quot;).
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-white/80">
          By downloading, accessing, or using the App, you agree to be bound by
          these Terms. If you do not agree, do not use the App.
        </p>

        <div className="mt-8 space-y-7 text-[15px] leading-relaxed text-white/82">
          <section>
            <h2 className="text-lg font-semibold text-white">
              1. Developer Information
            </h2>
            <p className="mt-2">The App is developed and operated by:</p>
            <p className="mt-2 whitespace-pre-line text-white/90">
              Mateusz Michel{"\n"}Email: mateusz.michel7@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              2. Description of the App
            </h2>
            <p className="mt-2">
              Loopro is a subscription tracking application that allows users to
              manually input and manage information about recurring payments,
              subscriptions, and financial commitments.
            </p>
            <p className="mt-2">
              The App is provided for informational and organizational purposes
              only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Eligibility</h2>
            <p className="mt-2">You must be at least 13 years old to use the App.</p>
            <p className="mt-2">
              If you are under the age of majority in your country, you may use
              the App only with the consent of a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              4. No Account Requirement
            </h2>
            <p className="mt-2">The App does not require account registration.</p>
            <p className="mt-2">
              All data is stored locally on your device or, if enabled, within
              your personal iCloud account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Acceptable Use</h2>
            <p className="mt-2">You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>use the App for any unlawful purpose</li>
              <li>attempt to reverse engineer, decompile, or modify the App</li>
              <li>interfere with the App&apos;s functionality or security</li>
              <li>
                use the App in any way that could damage, disable, or impair its
                operation
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              6. Subscriptions and Payments
            </h2>
            <p className="mt-2">
              The App may offer optional premium features through in-app
              purchases.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>All payments are processed by Apple via StoreKit</li>
              <li>
                The Developer does not process payments or store payment
                information
              </li>
              <li>
                Subscription management (including cancellations and refunds) is
                handled by Apple
              </li>
            </ul>
            <p className="mt-2">
              Apple&apos;s terms and conditions apply to all purchases.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              7. No Financial Advice
            </h2>
            <p className="mt-2">
              The App does not provide financial, investment, legal, or
              accounting advice.
            </p>
            <p className="mt-2">
              All information provided by the App is for informational purposes
              only.
            </p>
            <p className="mt-2">
              You are solely responsible for your financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              8. Accuracy of Information
            </h2>
            <p className="mt-2">The App relies on data entered by the user.</p>
            <p className="mt-2">The Developer does not guarantee:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>accuracy of calculations</li>
              <li>completeness of data</li>
              <li>timeliness of reminders or notifications</li>
            </ul>
            <p className="mt-2">
              You acknowledge that the App may contain errors or inaccuracies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">9. Notifications</h2>
            <p className="mt-2">
              The App may provide local notifications (e.g., payment reminders).
            </p>
            <p className="mt-2">
              The Developer does not guarantee that notifications will always be
              delivered, timely, or accurate.
            </p>
            <p className="mt-2">
              You are responsible for verifying all payment obligations
              independently.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              10. Third-Party Services
            </h2>
            <p className="mt-2">
              The App may use third-party services (e.g., currency exchange
              APIs).
            </p>
            <p className="mt-2">
              The Developer is not responsible for the availability, accuracy,
              or reliability of such services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              11. Intellectual Property
            </h2>
            <p className="mt-2">
              All rights, title, and interest in the App, including its design,
              features, and code, are owned by the Developer.
            </p>
            <p className="mt-2">
              You are granted a limited, non-exclusive, non-transferable license
              to use the App for personal use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              12. Limitation of Liability
            </h2>
            <p className="mt-2">To the maximum extent permitted by law:</p>
            <p className="mt-2">
              The App is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind.
            </p>
            <p className="mt-2">The Developer shall not be liable for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>any financial loss</li>
              <li>missed payments</li>
              <li>incorrect calculations</li>
              <li>data loss</li>
              <li>indirect, incidental, or consequential damages</li>
            </ul>
            <p className="mt-2">Your use of the App is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              13. Indemnification
            </h2>
            <p className="mt-2">
              You agree to indemnify and hold harmless the Developer from any
              claims, damages, or expenses arising from your use of the App or
              violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">14. Termination</h2>
            <p className="mt-2">
              The Developer reserves the right to modify or discontinue the App
              at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              15. Changes to Terms
            </h2>
            <p className="mt-2">These Terms may be updated from time to time.</p>
            <p className="mt-2">
              Updated versions will be made available within the App or on the
              website.
            </p>
            <p className="mt-2">
              Continued use of the App constitutes acceptance of the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">16. Governing Law</h2>
            <p className="mt-2">
              These Terms shall be governed by and interpreted in accordance with
              the laws of Poland and applicable European Union regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              17. Consumer Rights
            </h2>
            <p className="mt-2">
              Nothing in these Terms limits any rights you may have under
              applicable consumer protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              18. Apple Disclaimer
            </h2>
            <p className="mt-2">
              Apple Inc. is not a party to these Terms and is not responsible
              for the App or its content.
            </p>
            <p className="mt-2">
              Apple has no obligation to provide maintenance or support for the
              App.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">19. Contact</h2>
            <p className="mt-2">If you have any questions about these Terms:</p>
            <p className="mt-2 text-white">mateusz.michel7@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
