import { Header } from "./Header";

export function SiteHeader() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 bg-black">
      <div className="pointer-events-auto mx-auto w-full max-w-3xl px-4 sm:px-6">
        <Header />
      </div>
    </div>
  );
}

