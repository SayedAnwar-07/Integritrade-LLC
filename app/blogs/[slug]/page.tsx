import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_METADATA } from "./blogMetadata";

import Decommission from "@/components/blogs/decommission/page";
import EWasteDisposal from "@/components/blogs/eWaste-disposal/page";
import NvmeDrives from "@/components/blogs/nvme-drives/page";
import R2Certified from "@/components/blogs/r2-certified/page";
import RohsCompliance from "@/components/blogs/rohs-compliance/page";
import VideoTape from "@/components/blogs/video-tape/page";
import RemoveDEPProtection from "@/components/blogs/depProtection/page";
import ITADBlogs from "@/components/blogs/ITAD/page";
import MaximizeAssetRecovery from "@/components/blogs/maximizeAssetRecovery/page";
import ITADCutlines from "@/components/blogs/ITADCutlines/page";
import ITADPolicyImportance from "@/components/blogs/ITADPolicyImportance/page";
import ServersManage from "@/components/blogs/serversManage/page";
import UnderstandingITasset from "@/components/blogs/understandingITasset/page";
import FairFlexibleCutlines from "@/components/blogs/FairFlexible/page";
import HIPAACompliance from "@/components/blogs/HIPAA/page";
import ITADVSElectronicRecycling from "@/components/blogs/ITAD-VS-electronic-recycling/page";
import ChainCustody from "@/components/blogs/chain-custody/page";
import AITrends from "@/components/blogs/AITrends/page";
import OfficeDevicesRisk from "@/components/blogs/OfficeDevicesRisk/page";
import ITADFresno from "@/components/blogs/ITADFresno/page";
import ITADSacramento from "@/components/blogs/ITADSacramento/page";
import HowITADWorks from "@/components/blogs/HowITADWorks/page";
import CODvsCOE from "@/components/blogs/CODvsCOE/page";
import DataDestructionMethods from "@/components/blogs/DataDestructionMethods/page";
import ZeroTrustITAD from "@/components/blogs/ZeroTrustITAD/page";
import HardDriveStorageRisk from "@/components/blogs/HardDriveStorageRisk/page";
import LandfillVsCertifiedRecycling from "@/components/blogs/LandfillVsCertifiedRecycling/page";
import DeletedDataRecovery from "@/components/blogs/DeletedDataRecovery/page";
import ServerDataCenterDisposal from "@/components/blogs/ServerDataCenterDisposal/page";
import CutlinesInITAD from "@/components/blogs/cutlines-in-itad/page";
import BlogBreadcrumb from "@/components/shared/BlogBreadcrumb";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const BLOG_SLUGS = [
  "decommission-old-computers-it-equipment",
  "video-tape-data-destruction-services",
  "rohs-compliance-electronics-recycling-services",
  "certified-e-waste-disposal-services-data-destruction",
  "r2-certified-e-waste-recycling-services",
  "nvme-data-destruction-methods",
  "remove-apple-dep-mdm-lock-devices",
  "why-it-asset-disposition-is-important",
  "it-asset-recovery-services-maximize-value",
  "itad-cutlines-revenue-sharing-devices",
  "itad-compliance-and-data-destruction-policies",
  "sell-used-servers-it-recycling-services",
  "it-asset-disposition-explained",
  "itad-cutlines-asset-recovery-value-services",
  "it-asset-recovery-process-and-best-practices",
  "fair-flexible-itad-cutlines",
  "hipaa-compliant-itad-data-destruction-services",
  "itad-vs-e-waste-recycling",
  "chain-of-custody-in-itad",
  "ai-trends-in-it-refresh-hardware-recovery",
  "it-equipment-depreciation-and-risks",
  "it-asset-disposition-fresno-ca",
  "it-asset-disposition-sacramento-ca",
  "itad-vs-free-e-waste-recycling-risks",
  "cod-vs-coe-data-destruction-certification-services",
  "data-erasure-vs-degaussing-vs-physical-destruction",
  "zero-trust-security-in-it-asset-disposition",
  "risk-of-storing-old-hard-drives-vs-recycling",
  "landfill-vs-certified-recycling-environment",
  "is-it-possible-to-recover-deleted-data",
  "server-data-center-equipment-disposal-guide",
] as const;

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

const BLOG_COMPONENTS: Record<string, React.ReactElement> = {
  "decommission-old-computers-it-equipment": <Decommission />,
  "video-tape-data-destruction-services": <VideoTape />,
  "rohs-compliance-electronics-recycling-services": <RohsCompliance />,
  "certified-e-waste-disposal-services-data-destruction":
    <EWasteDisposal />,
  "r2-certified-e-waste-recycling-services": <R2Certified />,
  "nvme-data-destruction-methods":
    <NvmeDrives />,
  "remove-apple-dep-mdm-lock-devices": <RemoveDEPProtection />,
  "why-it-asset-disposition-is-important": <ITADBlogs />,
  "it-asset-recovery-services-maximize-value": <MaximizeAssetRecovery />,
  "itad-cutlines-revenue-sharing-devices": <ITADCutlines />,
  "itad-compliance-and-data-destruction-policies": <ITADPolicyImportance />,
  "sell-used-servers-it-recycling-services": <ServersManage />,
  "it-asset-disposition-explained": <UnderstandingITasset />,
  "itad-cutlines-asset-recovery-value-services": <CutlinesInITAD />,
  "it-asset-recovery-process-and-best-practices": <MaximizeAssetRecovery />,
  "fair-flexible-itad-cutlines": <FairFlexibleCutlines />,
  "hipaa-compliant-itad-data-destruction-services": <HIPAACompliance />,
  "itad-vs-e-waste-recycling": <ITADVSElectronicRecycling />,
  "chain-of-custody-in-itad": <ChainCustody />,
  "ai-trends-in-it-refresh-hardware-recovery": <AITrends />,
  "it-equipment-depreciation-and-risks": <OfficeDevicesRisk />,
  "it-asset-disposition-fresno-ca": <ITADFresno />,
  "it-asset-disposition-sacramento-ca": <ITADSacramento />,
  "itad-vs-free-e-waste-recycling-risks": <HowITADWorks />,
  "cod-vs-coe-data-destruction-certification-services": <CODvsCOE />,
  "data-erasure-vs-degaussing-vs-physical-destruction": <DataDestructionMethods />,
  "zero-trust-security-in-it-asset-disposition": <ZeroTrustITAD />,
  "risk-of-storing-old-hard-drives-vs-recycling": <HardDriveStorageRisk />,
  "landfill-vs-certified-recycling-environment": <LandfillVsCertifiedRecycling />,
  "is-it-possible-to-recover-deleted-data": <DeletedDataRecovery />,
  "server-data-center-equipment-disposal-guide": <ServerDataCenterDisposal />,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!BLOG_SLUGS.includes(slug as (typeof BLOG_SLUGS)[number])) {
    return {
      title: "Blog Not Found | Integritrade LLC",
      description: "The requested blog post does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metadata = BLOG_METADATA[slug];

  return {
    ...(metadata || {}),
    alternates: {
      canonical: `https://integritradellc.com/blogs/${slug}/`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const Component = BLOG_COMPONENTS[slug];

  if (!Component) {
    notFound();
  }

  return (
    <article>
      <BlogBreadcrumb slug={slug} />
      {Component}
    </article>
  );
}