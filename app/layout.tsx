import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loopro — Subscription tracking",
  description:
    "Track, manage and understand your subscription spending in one place.",
  openGraph: {
    title: "Loopro",
    description: "Take control of your subscriptions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${robotoFlex.variable} h-full`}
    >
      <body className="min-h-[100svh] min-h-dvh overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
