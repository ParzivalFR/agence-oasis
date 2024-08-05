import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gael Richard - Développeur Freelance",
  manifest: "/manifest.json",

  description:
    "Propulsez votre présence sur le web. Des solutions sur mesure pour vos projets web, développées avec passion et expertise avec une attention particulière pour l'expérience utilisateur.",
  openGraph: {
    url: "https://freelance.gael-dev.fr",
    type: "website",
    title: "Gael Richard - Développeur Freelance",
    description:
      "Propulsez votre présence sur le web. Des solutions sur mesure pour vos projets web, développées avec passion et expertise avec une attention particulière pour l'expérience utilisateur.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/9e74f21c-cc19-4dd0-8fbd-ffbadd043fa0.png?token=qTXNMnubktox7svqm_mGBY5mnWAqCgDg4RCEIxCOi94&height=630&width=1200&expires=33258703199",
        width: 1200,
        height: 630,
        alt: "Gael Richard - Développeur Freelance",
      },
    ],
  },
  twitter: {
    creator: "@gaelprodev",
    site: "@gaelprodev",
    card: "summary_large_image",
    title: "Gael Richard - Développeur Freelance",
    description:
      "Propulsez votre présence sur le web. Des solutions sur mesure pour vos projets web, développées avec passion et expertise avec une attention particulière pour l'expérience utilisateur.",
    images: [
      "https://opengraph.b-cdn.net/production/images/9e74f21c-cc19-4dd0-8fbd-ffbadd043fa0.png?token=qTXNMnubktox7svqm_mGBY5mnWAqCgDg4RCEIxCOi94&height=630&width=1200&expires=33258703199",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
