import type { Metadata } from "next";
import { Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Nidhi Gondalekar — Senior Software Engineer",
  description: "Portfolio of Nidhi Gondalekar, Senior Software Engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${dmMono.variable} font-[family-name:var(--font-dm-mono)]`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}