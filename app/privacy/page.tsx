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

export default function PrivacyPage() {
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
          <span className="text-white/90">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/70">Effective date: 12 March 2026</p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/80">
          This Privacy Policy describes how Loopro (&quot;the App&quot;) handles
          information when you use it.
        </p>

        <div className="mt-8 space-y-7 text-[15px] leading-relaxed text-white/82">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Overview</h2>
            <p className="mt-2">
              Loopro is designed with privacy in mind. The App does not collect
              or store personal data on servers operated by the Developer.
            </p>
            <p className="mt-2">
              All data created within the App is stored locally on your device
              or, if enabled, in your personal iCloud account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              2. Developer Information
            </h2>
            <p className="mt-2">Loopro is developed and operated by:</p>
            <p className="mt-2 whitespace-pre-line text-white/90">
              Mateusz Michel{"\n"}Email: mateusz.michel7@gmail.com
            </p>
            <p className="mt-2">
              The Developer acts as the data controller only to the extent
              described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              3. No Account Required
            </h2>
            <p className="mt-2">
              You can use the App without creating an account or providing
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Data Collection</h2>
            <p className="mt-2">
              The App does not collect, transmit, or store personal data on
              external servers.
            </p>
            <p className="mt-2">The App does not use:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>analytics tools</li>
              <li>tracking technologies</li>
              <li>advertising identifiers</li>
              <li>third-party advertising</li>
              <li>external crash reporting services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              5. Local Data Storage
            </h2>
            <p className="mt-2">
              All data you enter into the App, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>subscription names</li>
              <li>amounts</li>
              <li>billing dates</li>
              <li>categories</li>
              <li>settings and preferences</li>
            </ul>
            <p className="mt-2">is stored locally on your device.</p>
            <p className="mt-2">The Developer does not have access to this data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              6. iCloud Sync (Optional)
            </h2>
            <p className="mt-2">
              If you enable iCloud Sync, your data is stored in your personal
              iCloud account using Apple&apos;s CloudKit.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Data is stored in your private iCloud database</li>
              <li>Apple acts as the service provider for this storage</li>
              <li>
                The Developer does not independently access or store your iCloud
                data outside of the App&apos;s functionality
              </li>
            </ul>
            <p className="mt-2">
              Data stored in iCloud is subject to Apple&apos;s Privacy Policy and
              Terms.
            </p>
            <p className="mt-2">You can disable iCloud Sync at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              7. In-App Purchases
            </h2>
            <p className="mt-2">
              The App offers optional premium subscriptions processed by Apple
              via StoreKit.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Payments are handled entirely by Apple</li>
              <li>
                The Developer does not receive payment details such as credit
                card information
              </li>
              <li>
                The App may receive information about your subscription status
                to enable premium features
              </li>
            </ul>
            <p className="mt-2">
              Purchases are subject to Apple&apos;s terms and privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">8. Widgets</h2>
            <p className="mt-2">
              The App may share limited data (such as upcoming payments and
              selected preferences) with its widget using Apple&apos;s App Groups.
            </p>
            <p className="mt-2">
              This data remains on your device and is not transmitted externally.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              9. Third-Party Services
            </h2>
            <p className="mt-2">
              The App uses the Frankfurter API (
              <a
                href="https://www.frankfurter.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-offset-4 hover:underline"
              >
                https://www.frankfurter.app
              </a>
              ) to fetch currency exchange rates.
            </p>
            <p className="mt-2">
              Only non-personal data (e.g., currency codes) may be sent. No
              personal data or identifiers are transmitted.
            </p>
            <p className="mt-2">
              Frankfurter&apos;s own terms and privacy policy apply.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">10. Notifications</h2>
            <p className="mt-2">
              The App uses only local notifications (e.g., payment reminders).
            </p>
            <p className="mt-2">
              No remote servers are used to schedule or deliver notifications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              11. Data Retention and Deletion
            </h2>
            <p className="mt-2">You can delete your data at any time within the App.</p>
            <p className="mt-2">
              Deleted data may remain locally for up to 30 days before being
              permanently removed.
            </p>
            <p className="mt-2">
              Deleting the App removes all locally stored data.
            </p>
            <p className="mt-2">
              If iCloud Sync is enabled, data stored in iCloud is subject to
              Apple&apos;s retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">12. Security</h2>
            <p className="mt-2">
              Your data is protected by your device&apos;s operating system
              (iOS/iPadOS).
            </p>
            <p className="mt-2">
              If iCloud Sync is enabled, Apple&apos;s security measures apply to
              your data stored in iCloud.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              13. Legal Basis (EU/EEA/UK)
            </h2>
            <p className="mt-2">
              Where applicable under GDPR, processing is based on:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Article 6(1)(b): performance of a contract (providing app
                functionality)
              </li>
              <li>
                Article 6(1)(f): legitimate interest (improving and maintaining
                the App)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              14. International Users
            </h2>
            <p className="mt-2">The App is available worldwide.</p>
            <p className="mt-2">
              Depending on your location, your data may be subject to local laws
              and Apple&apos;s infrastructure when using iCloud services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">15. Your Rights</h2>
            <p className="mt-2">
              Depending on your jurisdiction, you may have rights such as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>access to your data</li>
              <li>correction</li>
              <li>deletion</li>
              <li>restriction of processing</li>
              <li>data portability</li>
            </ul>
            <p className="mt-2">
              Because the Developer does not store data externally, these rights
              are exercised primarily through your device or iCloud account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              16. Children&apos;s Privacy
            </h2>
            <p className="mt-2">
              The App is not intended for children under the age of 13.
            </p>
            <p className="mt-2">
              The Developer does not knowingly collect personal data from
              children.
            </p>
            <p className="mt-2">
              If you believe a child has provided personal data, please contact
              the Developer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              17. Changes to This Policy
            </h2>
            <p className="mt-2">
              This Privacy Policy may be updated from time to time.
            </p>
            <p className="mt-2">
              Updates will be reflected in the App and/or on the official
              website. Continued use of the App after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">18. Contact</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy:
            </p>
            <p className="mt-2 text-white">mateusz.michel7@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
