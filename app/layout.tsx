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
    icon: "/logo/integritrade-favicon.svg",
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

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={10}
            toastOptions={{
              duration: 4000,

              style: {
                background: "#239f44",
                color: "#fff",
                border: "1px solid #2db955",
                borderRadius: "10px",
                padding: "14px 16px",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              },

              success: {
                iconTheme: {
                  primary: "#fff",
                  secondary: "#239f44",
                },
              },

              error: {
                style: {
                  background: "#dc2626",
                  border: "1px solid #ef4444",
                },

                iconTheme: {
                  primary: "#fff",
                  secondary: "#dc2626",
                },
              },
            }}
          />
          <SchemaMarkup />
        </Providers>
      </body>
    </html>
  )
}