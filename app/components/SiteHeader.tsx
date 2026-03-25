import { Header } from "./Header";

export function SiteHeader() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 px-4 sm:px-6">
      <div className="pointer-events-auto mx-auto w-full max-w-3xl">
        <Header />
      </div>
    </div>
  );
}

