import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
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
      <head>
        <meta name="description" content="Mohammed Dilshad P — Flutter Developer from Kerala. Specialist in cross-platform mobile apps, Supabase backends, and production-ready UI. Open to work." />
        <meta property="og:title" content="Mohammed Dilshad P | Flutter Developer" />
        <meta property="og:description" content="4 apps shipped. Flutter + Supabase specialist. Immediate joiner based in Kerala, India." />
        <meta property="og:image" content="/assets/logo_cv.png" />
        <meta property="og:url" content="https://mohammeddilshad-p.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammed Dilshad P | Flutter Developer" />
        <meta name="twitter:description" content="Flutter Developer — Kerala. Open to work. 4 production apps." />
        <meta name="twitter:image" content="/assets/logo_cv.png" />
      </head>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <div className="page-chrome" />
          <SiteHeader />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
