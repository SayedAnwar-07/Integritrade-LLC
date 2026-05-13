import { StaticImageData } from "next/image"

import assetDisposition from "@/public/services/assetDisposition.jpeg"
import assetRecovery from "@/public/services/assetRecovery.jpeg"
import eRecycling from "@/public/services/E-Recycling.jpeg"
import certifiedDataDestruction from "@/public/services/certifiedDataDestruction.jpeg"

export interface GalleryItem {
  image: StaticImageData
  alt: string
  label: string
  caption: string
}

export interface ServiceLevel {
  tier: string
  label: string
  bestFor: string
  includes: string
  documentation: string
  valueRecovery: string
  whenToChoose: string
  linkText: string
}

export interface Service {
  slug: string
  image: StaticImageData
  metaTitle: string
  metaDescription: string
  pageTitle: string
  pageSubtitle: string
  heroTitle: string
  heroDescription: string
  sections: ServiceSection[]
  whyChoose: WhyChooseItem[]
  industries: string[]
  gallery?: {
    mainCaption: string
    items: GalleryItem[]
  }
  cta: {
    title: string
    description: string
    contact: string
    buttonText: string
  }
  /** Optional comparison-page metadata. Services without this field
   *  are excluded from the Service Level Comparison showcase. */
  serviceLevel?: ServiceLevel
}

export interface ServiceSection {
  title: string
  content: string[]
}

export interface WhyChooseItem {
  title: string
  description: string
}

export interface DecisionGuideEntry {
  scenario: string
  recommendation: string
}

// =============================================================================
//  PAGE-LEVEL COPY (Service Level Comparison)
// =============================================================================

export const serviceComparisonHero = {
  eyebrow: "Service Level Comparison",
  title: "Choose the Right Service Level for Your Retired IT Assets",
  description:
    "Not every electronics recycling project needs the same level of handling. Some clients have already completed data destruction and simply need responsible e-waste recycling. Others need documented destruction for compliance. Many need a complete ITAD program that includes data sanitization, reporting, recycling, refurbishment, remarketing, and value recovery. Integritrade makes it easy to choose the right service level based on your risk, equipment age, documentation needs, and recovery goals.",
}

export const decisionGuide: DecisionGuideEntry[] = [
  {
    scenario:
      "We already destroyed or removed the drives and just need the electronics recycled.",
    recommendation: "Basic Recycling",
  },
  {
    scenario:
      "We need a recycling confirmation or weight ticket, but not serialized destruction records.",
    recommendation: "Basic Recycling",
  },
  {
    scenario:
      "We need 2mm physical destruction, video proof, or serialized certificates.",
    recommendation: "Data Destruction Services",
  },
  {
    scenario:
      "The equipment is older than the current recovery cutline, but the data still needs to be destroyed properly.",
    recommendation: "Data Destruction Services",
  },
  {
    scenario:
      "We have newer laptops, desktops, servers, or networking equipment that may still have resale value.",
    recommendation: "Full ITAD Package",
  },
  {
    scenario:
      "We want data destruction, recycling for EOL items, remarketing for eligible assets, and a recovery report.",
    recommendation: "Full ITAD Package",
  },
  {
    scenario: "We want cash value quickly instead of waiting for each item to sell.",
    recommendation: "Full ITAD Package with Accelerated Revenue Split / Buyback",
  },
]

export const valueRecoveryDisclaimer = [
  `Value recovery eligibility is determined at Integritrade's discretion and is subject to review of the asset type, age, specifications, condition, completeness, data status, cosmetic grade, functionality, market demand, resale restrictions, and final acceptance. As a general guideline, value recovery is typically considered for devices such as cell phones, tablets, laptops, desktops, servers, and similar technology that are approximately four years old or newer; however, age alone does not guarantee eligibility. Devices must be free of activation locks, iCloud locks, MDM restrictions, corporate management locks, BIOS or firmware locks, carrier restrictions, unpaid-finance flags, or any other access, ownership, or resale limitation that would prevent testing, sanitization, refurbishment, or remarketing.`,
  
  `Additional project factors may affect service pricing, eligibility, and final recovery value, including pickup requirements, minimum quantities, packaging or palletization, labor needs, loading dock access, stairs, elevators, distance, after-hours service, special handling, serialized reporting, data destruction method, certificate requirements, videotaped destruction, and other compliance or logistics requirements. Any quoted recovery value, buyback amount, revenue split, or service recommendation is subject to inspection, testing, sanitization results, asset verification, market conditions, and Integritrade's final approval. Full service details, eligibility determinations, documentation options, and pricing will be provided upon contact and project review.`,
]

// =============================================================================
//  SERVICES DATA
// =============================================================================

export const servicesData: Service[] = [
  // ==========================================================================
  // 1. BASIC RECYCLING  (slug: e-waste-recycling)
  // ==========================================================================
  {
    slug: "e-waste-recycling",
    image: eRecycling,
    metaTitle: "Basic Electronics Recycling Services Nationwide | Integritrade",
    metaDescription:
      "Responsible e-waste recycling for organizations that have already handled data destruction internally. Weight tickets and recycling confirmation included. R2v3-aligned domestic processing.",
    pageTitle: "Basic Recycling",
    pageSubtitle:
      "For organizations that have already handled data destruction internally and simply need a responsible vendor to remove and process retired electronics.",
    heroTitle:
      "Responsible E-Waste Recycling When Data Destruction Is Already Handled",
    heroDescription:
      "Basic Recycling is the right fit when your organization has already handled data destruction internally and simply needs a responsible vendor to remove and process retired electronics. This service is designed for low-complexity projects where the primary goal is to keep e-waste out of improper disposal channels and receive confirmation that the material was recycled. With Basic Recycling, Integritrade collects or receives the equipment, processes the material through responsible recycling channels, and provides a weight ticket or recycling confirmation for your records.",
    sections: [
      {
        title: "When Basic Recycling Is the Right Fit",
        content: [
          "Basic Recycling is designed for low-complexity projects where the primary goal is to keep e-waste out of improper disposal channels and receive confirmation that the material was recycled.",
          "This option is ideal for companies that have already wiped, destroyed, or removed data-bearing media before release and do not require serialized asset reporting, certificates of destruction, remarketing, or resale recovery.",
          "Choose Basic Recycling if your data destruction is already complete, your equipment has no resale objective, and your main requirement is responsible e-waste handling with basic recycling documentation.",
        ],
      },
      {
        title: "What's Included",
        content: [
          "Pickup or drop-off coordination at your facility or our processing site.",
          "Downstream recycling through audited, responsible processing channels.",
          "Responsible processing of end-of-life electronics in line with environmental standards.",
          "Weight ticket or recycling confirmation provided for your records.",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Responsible Domestic Processing",
        description:
          "Material is routed through audited downstream partners that meet environmental standards. No shortcuts, no exports to improper destinations.",
      },
      {
        title: "Right-Sized Documentation",
        description:
          "Weight ticket or recycling confirmation appropriate for organizations that have already handled their own data destruction and don't need serialized reporting.",
      },
      {
        title: "Low-Complexity Coordination",
        description:
          "Pickup or drop-off scheduling built around your operational calendar without the overhead of a full ITAD program.",
      },
      {
        title: "Environmental Standards Aligned",
        description:
          "Material is kept out of improper disposal channels and processed through workflows that align with R2v3 and ISO 14001 expectations.",
      },
    ],
    industries: [
      "Corporate Offices",
      "Educational Institutions",
      "Healthcare Facilities",
      "Government Agencies",
      "Manufacturing & Warehousing",
      "Small to Mid-Size Businesses",
    ],
    serviceLevel: {
      tier: "01",
      label: "Basic Recycling",
      bestFor:
        "Organizations that have already handled data destruction and only need responsible e-waste processing.",
      includes:
        "Pickup or drop-off coordination, downstream recycling, and responsible processing of end-of-life electronics.",
      documentation: "Weight ticket or recycling confirmation.",
      valueRecovery: "Not included.",
      whenToChoose:
        "Your data destruction is already complete, your equipment has no resale objective, and your main requirement is responsible e-waste handling with basic recycling documentation.",
      linkText: "Explore Recycling Services",
    },
    cta: {
      title: "Need Responsible E-Waste Recycling?",
      description:
        "If your data destruction is already handled and you need a responsible vendor to process retired electronics, we can help.",
      contact: "559-325-4813  |  info@integritradellc.com",
      buttonText: "Request a Recycling Quote",
    },
  },

  // ==========================================================================
  // 2. DATA DESTRUCTION SERVICES  (slug: data-destruction-services)
  // ==========================================================================
  {
    slug: "data-destruction-services",
    image: certifiedDataDestruction,
    metaTitle:
      "Certified Data Destruction Services Nationwide | Integritrade",
    metaDescription:
      "Compliance-grade data destruction with serialized certificates, 2mm mandated destruction, videotaped destruction, and media-specific handling. For data-bearing assets that are not eligible for value recovery.",
    pageTitle: "Data Destruction Services",
    pageSubtitle:
      "For organizations that need specific destruction methods, documented proof, and a clear record of how data-bearing assets were handled including assets that fall below the value-recovery cutline.",
    heroTitle:
      "Documented Destruction for Data-Bearing Assets That Need More Than a Recycling Receipt",
    heroDescription:
      "Data Destruction Services are built for organizations that need more than a recycling receipt. This service level is best for companies, schools, healthcare providers, financial institutions, public agencies, and other regulated or policy-driven organizations that require specific destruction methods, documented proof, and a clear record of how data-bearing assets were handled. This package includes Basic Recycling and adds the data destruction services required for your project from serialized certificates to 2mm mandated physical destruction.",
    sections: [
      {
        title: "Built for Compliance, Policy & Audit Requirements",
        content: [
          "This service level is best for companies, schools, healthcare providers, financial institutions, public agencies, and other regulated or policy-driven organizations that require specific destruction methods, documented proof, and a clear record of how data-bearing assets were handled.",
          "Depending on your compliance needs, internal policy, or customer requirements, this may include 2mm mandated physical destruction, standard physical destruction, videotaped destruction, serialized certificates of destruction, drive-level reporting, media-specific handling, and other documented destruction options.",
          "It is especially appropriate when equipment is older than the current value-recovery technology cutline, meaning the assets are not strong candidates for resale or remarketing but still require secure data disposition.",
        ],
      },
      {
        title: "When Destruction Matters More Than Recovery",
        content: [
          "Data Destruction Services are often the best choice when the value of the equipment is secondary to the risk of the information it may contain.",
          "If the devices are too old, damaged, incomplete, locked, failed, or otherwise below recovery standards, Integritrade can focus on secure destruction and responsible recycling instead of resale.",
          "Choose Data Destruction Services if you need compliance-grade destruction, serialized proof, videotaped destruction, special destruction sizing such as 2mm, or documented handling for data-bearing media that is not eligible for value recovery.",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Method Matched to the Media",
        description:
          "Physical destruction, 2mm mandated destruction, degaussing, or shredding selected based on the media type and your compliance requirements, not a one-size-fits-all approach.",
      },
      {
        title: "Serialized Certificates of Destruction",
        description:
          "Drive-level reporting tied to serial numbers so your audit response, regulator inquiry, or internal review has documentation that holds up to scrutiny.",
      },
      {
        title: "Videotaped Destruction Available",
        description:
          "When policy or customer contract requires it, destruction is filmed and the footage is delivered alongside the serialized certificate package.",
      },
      {
        title: "Right Fit for Below-Cutline Assets",
        description:
          "Equipment that is too old, damaged, or locked to recover is routed to secure destruction and responsible recycling without paying for value-recovery services it can't use.",
      },
    ],
    industries: [
      "Healthcare Organizations",
      "Financial & Banking Institutions",
      "Government & Public Sector",
      "Educational Institutions",
      "Data Centers & Cloud Providers",
      "Corporate Enterprises",
    ],
    serviceLevel: {
      tier: "02",
      label: "Data Destruction Services",
      bestFor:
        "Organizations that need specific destruction requirements for compliance, policy, or audit reasons especially when assets are older or below the recovery cutline.",
      includes:
        "Everything in Basic Recycling, plus selected data destruction services such as physical destruction, 2mm mandated destruction, videotaped destruction, serialized certificates, and media-specific handling.",
      documentation:
        "Serialized certificates of destruction or other required destruction records, depending on the selected service.",
      valueRecovery: "Not included for assets below the technology cutline.",
      whenToChoose:
        "You need compliance-grade destruction, serialized proof, videotaped destruction, special destruction sizing such as 2mm, or documented handling for data-bearing media that is not eligible for value recovery.",
      linkText: "Explore Data Destruction",
    },
    cta: {
      title: "Need Documented Destruction You Can Defend in an Audit?",
      description:
        "If you have data-bearing assets that fall below the recovery cutline but still require compliance-grade destruction, we can match the method to your requirements.",
      contact: "559-325-4813  |  info@integritradellc.com",
      buttonText: "Request a Destruction Quote",
    },
  },

  // ==========================================================================
  // 3. FULL ITAD PACKAGE  (slug: it-asset-disposition)
  // ==========================================================================
  {
    slug: "it-asset-disposition",
    image: assetDisposition,
    metaTitle:
      "Full ITAD Package with Value Recovery | Integritrade",
    metaDescription:
      "Complete ITAD program: data sanitization, asset registration, refurbishment, remarketing, EOL recycling, and value recovery reporting. Percentage-based recovery or accelerated revenue split / buyback.",
    pageTitle: "Full ITAD Package",
    pageSubtitle:
      "For organizations with newer or higher-value assets that need secure data handling, reporting, resale, refurbishment, recycling, and financial recovery all under one chain of custody.",
    heroTitle:
      "The Complete Disposition Program for Assets That Still Have Value Left in Them",
    heroDescription:
      "The Full ITAD Package is the most complete option for organizations that want secure disposition and financial recovery from eligible assets. This service level includes everything in the Data Destruction Services package, plus asset registration, data sanitization, testing, refurbishment, remarketing, resale support, recycling of end-of-life assets, and value recovery reporting. Instead of treating every device as scrap, Integritrade evaluates eligible assets for recovery potential and routes everything else into responsible destruction or recycling.",
    sections: [
      {
        title: "Built for Newer Assets That Still Meet the Recovery Cutline",
        content: [
          "This package is ideal for newer or higher-demand equipment that meets the current technology cutline for resale. Instead of treating every device as scrap, Integritrade evaluates eligible assets for recovery potential.",
          "Devices that can be reused may be sanitized, refurbished, and remarketed, while assets that are too old, damaged, or non-recoverable are routed into responsible recycling or destruction workflows.",
          "Choose the Full ITAD Package if your assets are newer, your organization wants secure data handling and full reporting, and you want to recover value through remarketing or an upfront buyback instead of treating eligible equipment as scrap.",
        ],
      },
      {
        title: "How Value Recovery Is Calculated",
        content: [
          "The value recovery model is simple. The estimated market value of the device is reduced by the services required to safely process and resell it.",
          "These services may include data sanitization fees, asset registration and reporting fees, refurbishment costs, testing, handling, marketplace costs, and remarketing fees. The remaining amount becomes the net recoverable value.",
          "Device value − data sanitization fees − asset registration / reporting fees − refurbishment / handling fees − remarketing fees = net recovery value.",
        ],
      },
      {
        title: "Percentage Recovery or Upfront Buyback",
        content: [
          "For clients who prefer to wait for resale, Integritrade can provide a percentage-based recovery model where returns are calculated after eligible assets are sold.",
          "For clients who prefer speed and certainty, an accelerated revenue split or buyback may be available. In that model, Integritrade provides an upfront buyout quote, and the fees are already baked into the offer.",
          "That means the buyout price is inclusive of the services required to process, sanitize, report, prepare, and resell the assets, without requiring the client to wait for each item to sell.",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Eligible Assets Evaluated for Recovery",
        description:
          "Newer or higher-demand equipment is tested, graded, and routed to refurbishment and remarketing instead of being treated as scrap.",
      },
      {
        title: "Transparent Value Recovery Math",
        description:
          "Device value minus the services required to safely process and resell it equals your net recovery. No hidden line items, no surprise deductions.",
      },
      {
        title: "Two Recovery Models to Choose From",
        description:
          "Percentage-based recovery for clients who can wait for resale, or an accelerated revenue split / buyback for clients who want speed and certainty up front.",
      },
      {
        title: "End-of-Life Items Handled Under the Same Engagement",
        description:
          "Assets that are too old, damaged, or non-recoverable are routed into responsible destruction or recycling no second vendor, no second invoice.",
      },
      {
        title: "Full Reporting Package",
        description:
          "Chain-of-custody records, data sanitization or destruction documentation, asset reporting, and recovery summaries delivered as a single reconciled deliverable.",
      },
    ],
    industries: [
      "Data Centers & Cloud Providers",
      "Financial Services & Banking",
      "Healthcare & Life Sciences",
      "Government & Public Sector",
      "Higher Education",
      "Corporate Enterprises",
    ],
    serviceLevel: {
      tier: "03",
      label: "Full ITAD Package",
      bestFor:
        "Organizations with newer or higher-value assets that need secure data handling, reporting, resale, refurbishment, recycling, and financial recovery.",
      includes:
        "Everything in Data Destruction Services, plus asset registration, data sanitization, refurbishment, resale evaluation, remarketing, EOL recycling, and recovery reporting.",
      documentation:
        "Chain-of-custody records, data sanitization or destruction documentation, asset reporting, and recovery summaries.",
      valueRecovery:
        "Included through percentage-based recovery or accelerated revenue split / buyback.",
      whenToChoose:
        "Your assets are newer, your organization wants secure data handling and full reporting, and you want to recover value through remarketing or an upfront buyback instead of treating eligible equipment as scrap.",
      linkText: "Explore Full ITAD",
    },
    cta: {
      title: "Want to Recover Value Instead of Treating Assets as Scrap?",
      description:
        "If your retired equipment is newer and meets the recovery cutline, the Full ITAD Package gives you secure data handling, full reporting, and either percentage-based recovery or an upfront buyback.",
      contact: "559-325-4813  |  info@integritradellc.com",
      buttonText: "Request a Recovery Quote",
    },
  },

  // ==========================================================================
  // 4. ASSET RECOVERY  (slug: asset-recovery-services)  UNCHANGED
  // ==========================================================================
  {
    slug: "asset-recovery-services",
    image: assetRecovery,
    metaTitle: "Enterprise IT Asset Recovery & Remarketing Services | Integritrade",
    metaDescription:
      "Recover value from retired enterprise IT through certified remarketing not consumer marketplaces. Net recovery credited against your invoice. R2v3 certified, nationwide pickup from Fresno, CA.",
    pageTitle: "Asset Recovery",
    pageSubtitle:
      "For finance and IT teams who know retired hardware still has value and for compliance teams who need to make sure that value isn't recovered through channels that put your asset tags on consumer marketplaces. We remarket through enterprise refurbisher networks and credit recovery directly against your invoice.",
    heroTitle:
      "Turn Retired IT Hardware Into Recovered Capital Without Putting Your Asset Tags on eBay",
    heroDescription:
      "Every retired laptop, server, and switch with remaining useful life represents recoverable capital but only if it's remarketed through channels that protect your data, your brand, and your asset disposition controls. Integritrade's IT asset recovery program tests, grades, and remarkets enterprise hardware through vetted refurbisher networks. Net recovery is credited directly against your ITAD invoice as a transparent line item not paid out separately on a 90-day cycle. And no, your asset tags don't end up on consumer marketplaces.",
    sections: [
      {
        title: "Why Asset Recovery Goes Wrong at Most ITAD Vendors",
        content: [
          "Asset recovery sounds simple: take retired hardware, sell it, give the customer a check. The reality is messier and the way most ITAD vendors handle it creates risks that finance and compliance teams rarely see until something goes wrong.",
          "Hardware ends up on consumer marketplaces with company asset tags still attached, leaking organizational intelligence. 'Refurbishment' partners turn out to be brokers who export devices to non-OECD markets. Recovery payouts arrive 90+ days after the engagement, with line items that don't reconcile to the original asset list.",
          "Integritrade's asset recovery program was built specifically to close these gaps. Hardware is graded and remarketed through enterprise-grade refurbisher channels not consumer marketplaces, not export brokers. Net recovery appears as a transparent credit on your ITAD invoice, reconciled to the original asset inventory by serial number.",
        ],
      },
      {
        title: "How the Recovery Process Actually Works",
        content: [
          "IT Asset Valuation & Buyback Every asset is tested, graded (cosmetic + functional), and assigned a fair-market remarketing value before any destruction or recycling commitment is made. You see the full economics before authorizing disposition.",
          "Pre-Remarketing Data Sanitization Every device bound for resale is sanitized using ADISA-verified, NIST 800-88 compliant software erasure with serialized Certificates of Erasure. Asset tags are physically removed before any remarketing.",
          "Refurbishment & Enterprise Remarketing Devices with remaining useful life are remarketed through enterprise refurbisher partners and B2B secondary market wholesalers. No consumer marketplaces. No offshore export.",
          "Responsible Recycling for Non-Recoverable Assets Hardware without remarketing potential is recycled through our R2v3 certified processing chain. Material recovery is documented for ESG reporting alongside resale revenue.",
          "Logistics & Chain-of-Custody Reporting Pickup, processing, sanitization, remarketing, recycling every step tracked by serial number and reconciled into a single audit-ready report.",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Net Recovery Credited Directly to Your Invoice",
        description:
          "Remarketing proceeds appear as a transparent line item against your ITAD engagement not a separate 90-day payout. You see exactly what each asset returned.",
      },
      {
        title: "Enterprise-Grade Remarketing Channels Only",
        description:
          "Hardware is remarketed through vetted B2B refurbisher networks. No consumer marketplaces. No offshore export. Asset tags are physically removed before resale.",
      },
      {
        title: "ADISA-Verified Pre-Resale Sanitization",
        description:
          "Every device bound for remarketing is sanitized using ADISA-verified software with serialized Certificates of Erasure not a generic 'wiped' claim.",
      },
      {
        title: "Full Asset-Level Economics",
        description:
          "Every asset's fair-market value is documented before disposition. You see the full economics of your IT lifecycle, not just a lump-sum check at the end.",
      },
      {
        title: "ESG-Aligned Lifecycle Reporting",
        description:
          "Resale and recycling outcomes are reported together extending product lifecycles, documenting circular-economy contribution, and supporting your sustainability metrics.",
      },
      {
        title: "Audit-Ready Single Report",
        description:
          "Pickup, sanitization, remarketing, recycling all reconciled in one document tied to the original asset inventory. Auditor-ready, accounting-clean, ESG-defensible.",
      },
    ],
    industries: [
      "Data Centers & Cloud Providers",
      "Financial Institutions",
      "Healthcare Organizations",
      "Government Agencies",
      "Educational Institutions",
      "Large Enterprises",
    ],
    serviceLevel: {
      tier: "04",
      label: "Asset Recovery",
      bestFor:
        "Finance and IT teams who know their retired hardware still has value, and compliance teams who need to make sure that value isn't recovered through channels that put their asset tags on consumer marketplaces.",
      includes:
        "IT asset valuation and buyback, pre-remarketing data sanitization, refurbishment, enterprise-grade remarketing, responsible recycling for non-recoverable assets, and full chain-of-custody logistics.",
      documentation:
        "Asset-level valuation reports, serialized Certificates of Erasure, reconciled chain-of-custody records, and a single audit-ready remarketing and recycling summary.",
      valueRecovery:
        "Included net recovery credited directly to your invoice as a transparent line item, not a separate 90-day payout.",
      whenToChoose:
        "Your retired IT still has remaining useful life, you want recovery routed through enterprise refurbisher networks instead of consumer marketplaces, and you need the resale proceeds reconciled against your ITAD invoice on the same engagement.",
      linkText: "Explore Asset Recovery",
    },
    cta: {
      title: "See What Your Retired IT Is Actually Worth",
      description:
        "Send us your asset list laptops, servers, networking, storage. We'll come back with a fair-market valuation and a recovery plan within 48 hours.",
      contact: "559-325-4813  |  info@integritradellc.com",
      buttonText: "Request a Valuation",
    },
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}