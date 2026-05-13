import { BlogCards } from "@/components/BlogCards";
import ServicesCTA from "@/components/services/Servicescta";
import PageHeader from "@/components/shared/PageHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritrade LLC Blog – ITAD & E-Waste Recycling Insights",
  description:
    "Expert guides on IT asset disposition, secure data destruction, electronics recycling, and environmentally responsible IT practices from Integritrade LLC.",
  keywords: [
    "ITAD Blog",
    "IT Asset Disposition",
    "Data Destruction",
    "Electronics Recycling",
    "E-Waste Management",
    "R2 Certified Recycling",
    "NIST 800-88 Data Wiping",
    "Sustainable IT",
    "Compliance & Chain of Custody",
    "Asset Recovery",
  ],
  alternates: {
    canonical: "/blogs/",
  },
  openGraph: {
    title: "Integritrade LLC Blog – ITAD & E-Waste Recycling Insights",
    description:
      "Expert guides on IT asset disposition, secure data destruction, electronics recycling, and environmentally responsible IT practices from Integritrade LLC.",
    url: "https://integritradellc.com/blogs/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Blog – ITAD & Recycling Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integritrade LLC Blog – ITAD & E-Waste Recycling Insights",
    description:
      "Expert insights on IT asset disposition, secure data destruction, and electronics recycling.",
    images: ["https://integritradellc.com/main-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-24">
        {/* Header — matches site editorial style */}
        <ScrollLoader>
          <PageHeader
                eyebrow="Insights & Resources"
                title="Field notes from the disposition floor."
                description="Practical guides and expert analysis on IT asset disposition, secure data destruction, electronics recycling, and environmentally responsible IT practices written for the compliance officers,IT directors, and sustainability leads who actually sign the audit."
            />
          </ScrollLoader>

        {/* All blogs */}
        <div className="mt-20">
          <BlogCards />
        </div>
        
        {/* CTA */}
        <section className="mt-20">
           <ServicesCTA />
        </section>


      </div>
    </section>
  );
}