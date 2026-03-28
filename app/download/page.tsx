import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Download — Loopro",
  description: "Download Loopro from the Apple App Store.",
};

export default function DownloadPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden bg-black text-[var(--lp-fg)]">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
          <div className="relative hidden min-h-0 items-center justify-center px-6 py-4 md:flex">
            <Image
              src="/iphone_main_phone_view.png"
              alt="Loopro app preview on iPhone"
              width={682}
              height={1200}
              priority
              className="h-auto max-h-[min(78dvh,720px)] w-auto max-w-[min(42vw,320px)] object-contain"
            />
          </div>

          <div className="flex min-h-0 flex-col items-center justify-center gap-6 px-5 py-8 text-center sm:gap-7 sm:px-8">
            <Image
              src="/apple-app-store-svgrepo-com.svg"
              alt=""
              width={256}
              height={256}
              priority
              unoptimized
              className="h-[88px] w-[88px] shrink-0 sm:h-[104px] sm:w-[104px]"
            />
            <p className="max-w-md text-pretty text-[15px] leading-relaxed text-white/78 sm:text-[17px]">
              You can download my app only from the official{" "}
              <span className="text-white/92">Apple App Store</span>.
            </p>
            <span
              className="inline-flex opacity-95"
              aria-label="App Store badge — link will be available after release"
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
            </span>
            <p className="max-w-md text-[13px] leading-relaxed text-white/55 sm:text-sm">
              Planned release{" "}
              <span className="font-medium text-white/75">May 2026</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
