import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { isLanguage, LANGUAGES, type Languages } from "@/lang";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Arrastia",
  description:
    "This is Nicolas' web portfolio, you may find here my projects, skills and how I am in personality",
};

/**
 * `/en` and `/es` are prerendered at build time. `middleware.ts` redirects every
 * other path to the default language, and unknown languages hit `notFound`.
 */
export function generateStaticParams() {
  return LANGUAGES.map((language) => ({ lang: language }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLanguage(params.lang)) notFound();

  const language = params.lang as Languages;

  return (
    <html lang={language}>
      <body className={inter.className}>
        <LanguageProvider language={language}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
