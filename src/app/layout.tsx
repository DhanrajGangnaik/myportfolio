import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = DATA.url;
const siteName = DATA.name;
const siteTitle = `${DATA.name} | Cloud & DevOps Engineer`;
const siteDescription =
  "Dhanraj Gangnaik is a Cloud, DevOps, and Platform Engineer building self-hosted infrastructure, Kubernetes platforms, CI/CD systems, observability stacks, and hybrid cloud environments.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,
  applicationName: siteName,

  keywords: [
    "Dhanraj Gangnaik",
    "Dhanraj",
    "Dhanraj Gangnaik portfolio",
    "Cloud Engineer",
    "DevOps Engineer",
    "Platform Engineer",
    "Site Reliability Engineer",
    "SRE",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "GitOps",
    "Prometheus",
    "Grafana",
    "Proxmox",
    "Talos Linux",
    "Homelab",
    "Self-hosted infrastructure",
    "Hybrid cloud",
    "Distributed systems",
    "Observability",
    "Infrastructure automation",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "DhanrajGangnaik",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhanraj Gangnaik",
    url: siteUrl,
    image: `${siteUrl}/avatar.png`,
    jobTitle: "Cloud & DevOps Engineer",
    description: siteDescription,
    sameAs: [
      "https://github.com/DhanrajGangnaik",
      ...(DATA.contact?.social
        ? Object.values(DATA.contact.social)
            .map((social) => social?.url)
            .filter(Boolean)
        : []),
    ],
    knowsAbout: [
      "Cloud Computing",
      "DevOps",
      "Kubernetes",
      "CI/CD",
      "GitOps",
      "Observability",
      "Distributed Systems",
      "Self-Hosted Infrastructure",
      "Platform Engineering",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          geist.variable,
          geistMono.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-x-0 top-0 z-0 h-[100px] overflow-hidden">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
              {children}
            </div>

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}