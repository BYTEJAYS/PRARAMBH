import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRARAMBH GROUP — Real Estate as Craft",
  description: "PRARAMBH GROUP creates considered residential and mixed-use spaces in Vadodara, shaped by experience and built for generations.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
