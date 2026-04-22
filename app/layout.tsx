import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolioData } from "@/lib/portfolio-data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolioData.person.name} | Flutter Developer`,
  description:
    "Premium developer portfolio showcasing Flutter engineering, Supabase and Firebase backend integration, clean architecture, and featured projects Alizo and NaDodi.",
  applicationName: portfolioData.person.name,
  keywords: [
    "Flutter developer",
    "Next.js portfolio",
    "Supabase",
    "Firebase",
    "Provider",
    "Bloc",
    "Riverpod",
    "Alizo",
    "NaDodi",
  ],
  authors: [{ name: portfolioData.person.name }],
  creator: portfolioData.person.name,
  openGraph: {
    title: `${portfolioData.person.name} | Flutter Developer`,
    description:
      "Flutter developer portfolio featuring cross-platform products, clean architecture, and full-stack mobile delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.person.name} | Flutter Developer`,
    description:
      "Flutter developer portfolio featuring Alizo, NaDodi, and production-ready mobile engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <div className="page-chrome" />
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
