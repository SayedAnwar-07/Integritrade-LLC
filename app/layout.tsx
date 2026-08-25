import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/shared/Footer"
import { Providers } from "./providers"
import { siteConfig } from "@/lib/seoConfig"
import { ThemeProvider } from "@/components/theme-provider"
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

  icons: {
    icon: [
      {
        url: "/logo/integritrade-favicon.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: "/logo/integritrade-favicon.png",
    apple: "/logo/integritrade-favicon.png",
  },

  // Both Search Console owners are verified here, in the root layout, so the
  // tags render on every page INCLUDING the homepage — the URL Google actually
  // fetches to confirm a URL-prefix property.
  //
  // Do not move a `verification` block into a page's metadata: page metadata
  // REPLACES the layout's rather than merging with it, which silently strips
  // every other owner's tag from that page. That is what de-verified the
  // client's account in August 2026.
  //
  // First entry is the site owner (Ian). Second is the contract developer.
  verification: {
    google: [
      "qsfyTTMiUnf1Eai5hEW017rJ__8a7dxZxGRmJWKsvzU",
      "R6ZdGtecG2HcceKKPmLryGBdZ58WG-blqrMGwe8T9UI",
    ],
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
};

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
            enableSystem={false}
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
        </Providers>
      </body>
    </html>
  )
}