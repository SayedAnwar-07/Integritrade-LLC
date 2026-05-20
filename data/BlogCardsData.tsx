import decommissionBanner from "@/public/blogs/decommission-computers.jpg";
import videoTape from "@/public/blogs/video-tape.jpg";
import rohsImage from "@/public/blogs/rohs-compliance.jpg";
import ewasteImage from "@/public/blogs/E-Waste-Disposal.jpg";
import r2_certified from "@/public/blogs/R2-Certified1.jpg";
import nvmBanner from "@/public/blogs/NVMe_drives.jpg";
import depProtection from "@/public/blogs/DEP-Protection.jpg";
import itad from "@/public/blogs/itad.jpg";
import assetRecoveryBanner from "@/public/blogs/asset-recovery.jpg";
import ITADCutlines from "@/public/blogs/itadCutlines.jpg";
import itadPolicyImportance from "@/public/blogs/itad-policy.jpg";
import serverManagement from "@/public/blogs/Servers-Manage-Server.jpg";
import understandingITasset from "@/public/blogs/Understanding-Importance.png";
import cutlinesBanner from "@/public/blogs/maximize-sset-recovery.png";
import ValueDataSecurity from "@/public/blogs/value-data-security.png";
import FairFlexible from "@/public/blogs/Fair-flexible.jpg";
import HIPAA from "@/public/blogs/HIPAA.jpg";
import ITADVSElectronicRecyclingImage from "@/public/blogs/ITAD-VS-electronic-recycling.png"
import ChainCustodyImage from "@/public/blogs/chain-custody.png";
import AITrendsImage from "@/public/blogs/AITrendsImage.png";
import OfficeDevicesRiskImage from "@/public/blogs/OfficeDevicesRiskImage.png";
import ITADFresnoImage from "@/public/blogs/ITADFresnoImage.png";
import ITADSacramentoImage from "@/public/blogs/ITADSacramentoImage.png";
import HowITADWorksImage from "@/public/blogs/HowITADWorksImage.png";
import CODvsCOEImage from '@/public/blogs/CODvsCOEImage.jpg';
import DataDestructionImage from '@/public/blogs/DataDestructionImage.png';
import ZeroTrustITADImage from '@/public/blogs/ZeroTrustITADImage.png';
import HardDriveRiskImage from "@/public/blogs/HardDriveRiskImage.png";
import LandfillRecyclingImage from "@/public/blogs/LandfillRecyclingImage.jpg";
import DataRecoveredImage from "@/public/blogs/DataRecovered.jpg";
import ServerDisposalImage from "@/public/blogs/ServerDisposalImage.png";

export interface BlogCard {
  image: any;
  title: string;
  description: string;
  date: string;
  slug: string;
}

export const AllBlogCards: BlogCard[] = [
  // ─── 1. HIGH-TRAFFIC AWARENESS (broad, evergreen, top-of-funnel) ───────────
  {
    image: AITrendsImage,
    title: "AI Trends in IT Refresh & Hardware Recovery",
    description: "As AI transforms technology, a hardware refresh is more important than ever...",
    date: "February 22, 2026",
    slug: "ai-trends-in-it-refresh-hardware-recovery",
  },
  {
    image: understandingITasset,
    title: "Understanding the Importance of IT Asset Disposition",
    description: "As organizations continue to digitize operations, upgrade infrastructure, and adopt cloud technologies, one critical area often receives less attention than it deserves: what happens to IT assets at the end of their lifecycle.",
    date: "January 01, 2026",
    slug: "it-asset-disposition-explained",
  },
  {
    image: HowITADWorksImage,
    title: "How ITAD Works & Why \"Free Recycling\" Is Dangerous for Your Business",
    description: "Would you give your unlocked phone to someone? But why give your important computers to just anyone? Learn how ITAD reduces your costs & ensures security.",
    date: "February 22, 2026",
    slug: "itad-vs-free-e-waste-recycling-risks",
  },
  {
    image: ITADVSElectronicRecyclingImage,
    title: "ITAD vs Electronic Recycling: Understanding the Difference and Why It Matters",
    description: "Learn the key differences between IT Asset Disposition (ITAD) and electronic recycling, and why choosing the right approach is critical for data security, compliance, asset recovery, and sustainability.",
    date: "February 11, 2026",
    slug: "itad-vs-e-waste-recycling",
  },
  {
    image: ewasteImage,
    title: "Why Choosing a Certified E-Waste Disposal Vendor Is Critical for Compliance, Data Security, and Environmental Safety",
    description: "In today's fast-paced digital world, electronics are a cornerstone of business operations. From laptops and desktops to servers, mobile devices, and industrial equipment, organizations constantly upgrade technology to stay competitive. However, these devices eventually become electronic waste (e-waste), which, if not disposed of properly, can result in environmental harm, data security breaches, and legal consequences.",
    date: "December 22, 2025",
    slug: "certified-e-waste-disposal-services-data-destruction",
  },
  {
    image: decommissionBanner,
    title: "How to Properly Decommission Old Computers and Office Equipment (Step-by-Step Guide)",
    description: "Businesses replace their computers, servers, and office electronics every few years. But what many companies don't realize is that removing old equipment isn't as simple as unplugging it and throwing it away. Modern devices store sensitive data, contain hazardous materials, and are regulated by strict state and federal laws. Failing to dispose of equipment correctly can result in data breaches, legal violations, environmental damage, and heavy fines",
    date: "December 21, 2025",
    slug: "decommission-old-computers-it-equipment",
  },
  {
    image: OfficeDevicesRiskImage,
    title: "The Risk & Depreciation of Old Office Devices",
    description: "Your old laptop & server in your office supply closet are increasing Business Data Risk & Financial Loss...",
    date: "February 22, 2026",
    slug: "it-equipment-depreciation-and-risks",
  },

  // ─── 2. COMPLIANCE & SECURITY (mid-funnel, high intent) ───────────────────
  {
    image: HIPAA,
    title: "HIPAA Compliance in ITAD: Why Your Choice of Vendor is a Legal Necessity",
    description: "Ensure HIPAA compliance with IntegriTrade. We provide R2v3 Appendix B certified logical and physical data destruction. Zero data breaches, total peace of mind.",
    date: "February 11, 2026",
    slug: "hipaa-compliant-itad-data-destruction-services",
  },
  {
    image: ChainCustodyImage,
    title: "Chain of Custody in ITAD: Why Tracking and Documentation Matter",
    description: "Learn what chain of custody means in IT Asset Disposition (ITAD), why it is critical for data security and compliance, and what organizations should expect from a qualified ITAD provider.",
    date: "February 11, 2026",
    slug: "chain-of-custody-in-itad",
  },
  {
    image: itadPolicyImportance,
    title: "What Is an ITAD Policy and Why Is It Important?",
    description: "As organizations refresh hardware, migrate to the cloud, and scale digital operations, one critical area is often overlooked: what happens to IT assets at the end of their lifecycle. This is where an ITAD policy becomes essential.",
    date: "December 31, 2025",
    slug: "itad-compliance-and-data-destruction-policies",
  },
  {
    image: rohsImage,
    title: "What Is RoHS Compliance? Understanding Toxic Metals in Electronics Manufacturing",
    description: "Modern electronics power nearly every aspect of our daily lives from smartphones and laptops to medical devices and industrial machinery. However, behind this rapid technological growth lies a serious concern: the use of toxic metals and hazardous substances in electronics manufacturing. To address these risks, global regulators introduced RoHS compliance, a critical standard aimed at protecting human health and the environment.",
    date: "December 22, 2025",
    slug: "rohs-compliance-electronics-recycling-services",
  },
  {
    image: r2_certified,
    title: "Why Choosing an R2-Certified Recycler Matters?",
    description: "In today's world, managing electronic waste (e-waste) responsibly is more critical than ever. Improper disposal can lead to severe environmental damage, data breaches, and legal liabilities. For businesses that generate e-waste, choosing an R2-certified recycler ensures that their electronic equipment is handled safely, ethically, and in compliance with international regulations.",
    date: "December 22, 2025",
    slug: "r2-certified-e-waste-recycling-services",
  },
  {
    image: nvmBanner,
    title: "Why NVMe Drives Are Hard to Erase And Why You Need a Certified Data Destruction Company",
    description: "Modern NVMe SSDs deliver unmatched speed and reliability, but they also introduce a serious challenge: they are extremely difficult to erase securely. Traditional wiping methods that worked on HDDs don't guarantee complete data removal on NVMe drives. For organizations handling sensitive data healthcare, finance, government, and enterprise, this poses significant compliance and security risks.",
    date: "December 21, 2025",
    slug: "nvme-data-destruction-methods",
  },
  {
    image: videoTape,
    title: "Introduction to Video Tape Data Destruction",
    description: "In today's data-driven world, organizations rely heavily on video recording systems for security, surveillance, and operational documentation. However, these video tapes often contain sensitive information that, if improperly disposed of, could lead to data breaches, regulatory fines, or reputational damage. Video tape data destruction is the process of securely destroying magnetic tapes to ensure the data they hold cannot be recovered.",
    date: "December 21, 2025",
    slug: "video-tape-data-destruction-services",
  },

  // ─── 3. ASSET RECOVERY & VALUE (bottom-of-funnel, conversion intent) ──────
  {
    image: ValueDataSecurity,
    title: "IT Asset Recovery Explained: Best Practices for Maximizing Value and Data Security",
    description: "Learn how IT asset recovery allows organizations to recover value from retired equipment while maintaining strict data security and compliance standards.",
    date: "February 09, 2026",
    slug: "it-asset-recovery-process-and-best-practices",
  },
  {
    image: assetRecoveryBanner,
    title: "How to Maximize Your IT Asset Recovery Value",
    description: "Learn how to maximize IT asset recovery value with smart ITAD strategies, secure data wiping, refurbishment, and certified recovery partners.",
    date: "December 28, 2025",
    slug: "it-asset-recovery-services-maximize-value",
  },
  {
    image: cutlinesBanner,
    title: "Cutlines in ITAD and Why Fair Cutlines Matter for Maximum Asset Recovery",
    description: "Understanding how cutlines work in ITAD can mean the difference between recovering value from retired IT assets or unnecessarily paying recycling fees.",
    date: "February 09, 2026",
    slug: "itad-cutlines-asset-recovery-value-services",
  },
  {
    image: ITADCutlines,
    title: "ITAD Cutlines Explained: Which Devices Qualify for Revenue Sharing?",
    description: "Learn which devices qualify for ITAD revenue sharing, including MacBooks, Intel laptops, tablets, and phones. Get tips for accelerated buy-back options.",
    date: "December 30, 2025",
    slug: "itad-cutlines-revenue-sharing-devices",
  },
  {
    image: FairFlexible,
    title: "Fair and Flexible ITAD Cutlines Based on Device Condition, Scope, and Reuse Potential",
    description: "Get more than just scrap value. IntegriTrade's flexible ITAD cutlines and scope-of-job assessments maximize ROI on your retired IT assets.",
    date: "February 11, 2026",
    slug: "fair-flexible-itad-cutlines",
  },
  {
    image: serverManagement,
    title: "How to Sell Used Servers & Manage Server Recycling: The ITAMG Process for Maximum Value & Security",
    description: "As organizations modernize infrastructure and refresh data centers, a critical question often arises: What is the best way to sell used servers while maintaining data security and compliance?",
    date: "January 01, 2026",
    slug: "sell-used-servers-it-recycling-services",
  },

  // ─── 4. SUSTAINABILITY & SPECIALIZED (supporting SEO pillars) ─────────────
  {
    image: itad,
    title: "The Importance of IT Asset Disposition (ITAD) Sustainability",
    description: "As organizations accelerate digital transformation, the volume of retired IT equipment continues to grow. How businesses manage end-of-life technology now plays a crucial role in environmental responsibility, data security, and regulatory compliance. This is where IT Asset Disposition (ITAD) sustainability becomes essential",
    date: "December 27, 2025",
    slug: "why-it-asset-disposition-is-important",
  },
  {
    image: depProtection,
    title: "How to Remove DEP Protection Before Reusing, Selling, or Recycling Apple Devices",
    description: "Remove Apple DEP before reselling or recycling devices to avoid MDM lock and ensure new users can activate them.",
    date: "December 27, 2025",
    slug: "remove-apple-dep-mdm-lock-devices",
  },

  // ─── 5. LOCAL SEO (geo-targeted, placed last to not dilute authority pages) ─
  {
    image: ITADFresnoImage,
    title: "IT Asset Disposition in Fresno, CA: Secure and Compliant ITAD for Local Businesses",
    description: "Learn how IT Asset Disposition (ITAD) works for businesses in Fresno, CA, and why secure data destruction, asset recovery, and compliance matter when retiring IT equipment.",
    date: "February 22, 2026",
    slug: "it-asset-disposition-fresno-ca",
  },
  {
    image: ITADSacramentoImage,
    title: "IT Asset Disposition in Sacramento, CA: Secure and Compliant ITAD for Local Businesses",
    description: "Discover how IT Asset Disposition (ITAD) works for businesses in Sacramento, CA, including secure data destruction, asset recovery, and compliance best practices for retiring IT equipment.",
    date: "February 22, 2026",
    slug: "it-asset-disposition-sacramento-ca",
  },
  {
    image: CODvsCOEImage,
    title: 'COD vs COE: Which is better for your Data Security?',
    description: "Just COD is not enough. Software Generated COE & Digital Audit Trails are essential to your organization's downstream security — know it in detail.",
    date: "February 26, 2026",
    slug: "cod-vs-coe-data-destruction-certification-services",
  },

  {
    image: DataDestructionImage,
    title: "Data Erasure, Degaussing & Physical Destruction: Which one is right for You?",
    description:
      "Learn the difference between these three methods of data destruction on your IT Assets. Choose a proper & safe sanitization method for your SSD & Hard drive.",
    date: "March 4, 2026",
    slug: "data-erasure-vs-degaussing-vs-physical-destruction",
  },
  {
    image: ZeroTrustITADImage,
    title: "The Relationship Between Zero-Trust Security and ITAD",
    description:
      "Zero-Trust security isn't just for the network; it's for the hardware, too. Learn how ITAD can strengthen your organization's zero-trust model.",
    date: "March 4, 2026",
    slug: "zero-trust-security-in-it-asset-disposition",
  },
  {
    image: HardDriveRiskImage,
    title: "The Risk of Storing Old Hard Drives vs Recycling Them",
    description:
      "Are the hard drives in your office supply closet safe? Learn why storing drives is a bigger risk than recycling them & how it hurts your business.",
    date: "March 4, 2026",
    slug: "risk-of-storing-old-hard-drives-vs-recycling",
  },
  {
    image: LandfillRecyclingImage,
    title: "Landfill vs Certified Recycling: Which one is better for the Environment?",
    description:
      "Why is Landfilling E-waste dangerous? Learn how certified recycling protects the environment & reduces your organization's carbon footprint.",
    date: "March 4, 2026",
    slug: "landfill-vs-certified-recycling-environment",
  },
  {
    image: DataRecoveredImage,
    title: "Is it possible to recover Deleted Data? What businesses need to know.",
    description:
      "Is formatting your old office laptop enough? Learn why deleted data can be easily recovered and how to keep your business information safe.",
    date: "March 11, 2026",
    slug: "is-it-possible-to-recover-deleted-data",
  },
  {
    image: ServerDisposalImage,
    title: "Server and Data Center Equipment Disposal Guide",
    description:
      "Are your office's old servers and data center equipment becoming a burden? Learn how to securely destroy data and get the right return on investment (ROI).",
    date: "March 15, 2026",
    slug: "server-data-center-equipment-disposal-guide",
  },
];