import type { Metadata } from "next";
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
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
