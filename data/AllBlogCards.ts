import videoTape from "@/public/blogs/video-tape.jpg";
import r2_certified from "@/public/blogs/R2-Certified1.jpg";
import nvmBanner from "@/public/blogs/NVMe_drives.jpg";
import serverManagement from "@/public/blogs/Servers-Manage-Server.jpg";
import FairFlexible from "@/public/blogs/Fair-flexible.jpg";
import ChainCustodyImage from "@/public/blogs/chain-custody.png";
import AITrendsImage from "@/public/blogs/AITrendsImage.png";
import ITADFresnoImage from "@/public/blogs/ITADFresnoImage.png";

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
    image: serverManagement,
    title: "How to Sell Used Servers & Manage Server Recycling: The ITAMG Process for Maximum Value & Security",
    description: "As organizations modernize infrastructure and refresh data centers, a critical question often arises: What is the best way to sell used servers while maintaining data security and compliance?",
    date: "January 01, 2026",
    slug: "sell-used-servers-it-recycling-services",
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
];