import ITAD_Vendor from "@/public/blogs/ITAD_Vendor.jpg";
import BfsiCover from "@/public/blogs/bloge-cover.jpg";
import LawFirmCover from "@/public/blogs/value-data-security.webp";
import FerpaCover from "@/public/blogs/blogs-cover.jpg";
import Nist80088Cover from "@/public/about/software-sanitization.jpg";
import BayAreaCover from "@/public/industries/business-corporate.webp";
import DataSanitizationCover from "@/public/blogs/data-sanitization-best-practices.jpg";
import videoTape from "@/public/blogs/video-tape.jpg";
import r2_certified from "@/public/blogs/R2-Certified1.jpg";
import nvmBanner from "@/public/blogs/NVMe_drives.jpg";
import FairFlexible from "@/public/blogs/Fair-flexible.jpg";
import ChainCustodyImage from "@/public/blogs/chain-custody.webp";
import AITrendsImage from "@/public/blogs/AITrendsImage.webp";
import ITADFresnoImage from "@/public/blogs/ITADFresnoImage.webp";

export interface BlogCard {
  image: any;
  title: string;
  description: string;
  date: string;
  slug: string;
}

export const AllBlogCards: BlogCard[] = [
  {
    image: videoTape,
    title: "Introduction to Video Tape Data Destruction",
    description: "Ensuring complete data eradication from magnetic media through compliant destruction methods.",
    date: "December 21, 2025",
    slug: "video-tape-data-destruction-services",
  },
  {
    image: r2_certified,
    title: "Why R2-Certified Recyclers Matter for Safe E-Waste Export",
    description: "Protect your business and the environment: Learn why choosing R2-certified recyclers is essential, especially for exports outside Basel Agreement countries.",
    date: "December 22, 2025",
    slug: "r2-certified-e-waste-recycling-services",
  },
  {
    image: nvmBanner,
    title: "Why NVMe Drives Are Hard to Erase And Why You Need Certified Data Destruction",
    description: "Learn why NVMe drives are difficult to sanitize and how certified physical destruction ensures security, compliance, and data irrecoverability.",
    date: "December 21, 2025",
    slug: "nvme-data-destruction-methods",
  },
  {
    image: FairFlexible,
    title: "Fair and Flexible ITAD Cutlines Based on Device Condition, Scope, and Reuse Potential",
    description: "Get more than just scrap value. IntegriTrade's flexible ITAD cutlines and scope-of-job assessments maximize ROI on your retired IT assets.",
    date: "February 11, 2026",
    slug: "fair-flexible-itad-cutlines",
  },
   {
    image: ITADFresnoImage,
    title: "IT Asset Disposition in Fresno, CA: Secure and Compliant ITAD for Local Businesses",
    description: "Learn how IT Asset Disposition (ITAD) works for businesses in Fresno, CA, and why secure data destruction, asset recovery, and compliance matter when retiring IT equipment.",
    date: "February 22, 2026",
    slug: "it-asset-disposition-fresno-ca",
  },
  {
    image: AITrendsImage,
    title: "AI Trends in IT Refresh & Hardware Recovery",
    description: "As AI transforms technology, a hardware refresh is more important than ever...",
    date: "February 22, 2026",
    slug: "ai-trends-in-it-refresh-hardware-recovery",
  },
  {
    image: ChainCustodyImage,
    title: "Chain of Custody in ITAD: Why Tracking and Documentation Matter",
    description: "Learn what chain of custody means in IT Asset Disposition (ITAD), why it is critical for data security and compliance, and what organizations should expect from a qualified ITAD provider.",
    date: "February 11, 2026",
    slug: "chain-of-custody-in-itad",
  },
  {
    image: ITAD_Vendor,
    title: "How to Assess an Electronics Recycling or IT Asset Disposal Provider Before You Sign",
    description: "Learn how to evaluate an electronics recycler or IT asset disposal provider. Verify R2 or e-Stewards certification, accredited ISO certificates, data-destruction equipment, reporting, and downstream accountability.",
    date: "September 20, 2026",
    slug: "how-to-assess-electronics-recycling-it-asset-disposal-provider",
  },
  {
    image: BfsiCover,
    title: "BFSI IT Asset Disposition: Financial Services Data Destruction, ITAD, and Electronics Recycling",
    description: "A practical guide to financial services ITAD, bank data destruction, insurance computer disposal, vendor due diligence, tracking, value recovery, and qualified electronics recycling.",
    date: "September 20, 2026",
    slug: "bfsi-it-asset-disposition-financial-services-data-destruction",
  },
  {
    image: LawFirmCover,
    title: "Law Firm IT Asset Disposition: A Practical Guide to Legal Data Destruction and Secure Technology Recycling",
    description: "Learn how law firms can plan computer disposal, legal data destruction, value recovery, and secure technology recycling with documented ITAD workflows.",
    date: "September 20, 2026",
    slug: "law-firm-it-asset-disposition-legal-data-destruction",
  },
  {
    image: FerpaCover,
    title: "FERPA-Focused School IT Asset Disposition: Chromebook Recycling and Student Data Destruction",
    description: "Learn how K-12 districts, colleges, and universities can plan FERPA-aware IT asset disposition, student-device disposal, Chromebook recycling, data sanitization, physical destruction, documentation, and value recovery.",
    date: "September 20, 2026",
    slug: "ferpa-school-it-asset-disposition-chromebook-recycling-student-data-destruction",
  },
  {
    image: Nist80088Cover,
    title: "NIST SP 800-88 Rev. 2: When to Use Clear, Purge, or Destroy for Data Sanitization",
    description: "How to choose Clear, Purge, or Destroy under NIST SP 800-88 Rev. 2, based on data risk, the storage media, and what happens to the device next.",
    date: "September 28, 2026",
    slug: "nist-800-88-rev-2-clear-purge-destroy",
  },
  {
    image: BayAreaCover,
    title: "Bay Area ITAD and Electronics Recycling for Corporate Technology Retirement",
    description: "Corporate ITAD across the Bay Area: pickups coordinated from Pinole, data destruction and recycling at our Fresno facility, and TraceTech tracking.",
    date: "October 2, 2026",
    slug: "bay-area-itad-electronics-recycling",
  },
  {
    image: DataSanitizationCover,
    title: "Best Data Sanitization Practices for Businesses Before and After ITAD",
    description: "Data sanitization best practices for businesses: before pickup, during custody transfer, while the ITAD provider processes assets, and after closeout.",
    date: "October 5, 2026",
    slug: "data-sanitization-best-practices-itad",
  },
];