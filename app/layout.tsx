import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/shared/Footer"
import { Providers } from "./providers"
import { siteConfig } from "@/lib/seoConfig"
import { ThemeProvider } from "@/components/theme-provider"
import SchemaMarkup from "@/components/home/SchemaMarkup"
import { Suspense } from "react"
import RouteLoader from "@/components/shared/RouteLoader"
import Navbar from "@/components/shared/Navbar"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/logoC.png",
  },
  verification: {
    google: "qsfyTTMiUnf1Eai5hEW017rJ__8a7dxZxGRmJWKsvzU",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.business.image,
        width: 1200,
        height: 630,
        alt: "Integritrade LLC — ITAD & Recycling Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={null}>
              <RouteLoader />
            </Suspense>

            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>

          <Toaster position="top-right" reverseOrder={false} />
          <SchemaMarkup />
        </Providers>
      </body>
    </html>
  )
}