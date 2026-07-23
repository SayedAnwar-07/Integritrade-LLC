import { StaticImageData } from "next/image"

import assetDisposition from "@/public/services/assetDispositionWarehouse.jpeg"
import assetRecovery from "@/public/services/assetRecovery.png"
import eRecycling from "@/public/services/E-Recycling.jpeg"
import certifiedDataDestruction from "@/public/services/dataDestruction.png"
import demanufacturing from "@/public/services/demanufacturing.jpeg"

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
  industries: {
    label: string
    href: string
  }[]
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
  serviceLevel?: ServiceLevel
}

export interface ServiceSection {
  title: string
  content?: string[]
  intro?: string
  items?: { label: string; description: string }[]
  compare?: {
    leftLabel: string
    rightLabel: string
    rows: { left: string; right: string }[]
  }
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
    slug: "basic-electronics-recycling",
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
      {
        label: "Corporate & Enterprise",
        href: "/industries/business-corporate",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Government & Public Sector",
        href: "/industries/government-public-sector",
      },
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
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Banking & Finance",
        href: "/industries/finance",
      },
      {
        label: "Government & Public Sector",
        href: "/industries/government-public-sector",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Corporate & Enterprise",
        href: "/industries/business-corporate",
      },
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
      {
        label: "Banking & Finance",
        href: "/industries/finance",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Government & Public Sector",
        href: "/industries/government-public-sector",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Corporate & Enterprise",
        href: "/industries/business-corporate",
      },
      {
        label: "Defense Contractors",
        href: "/industries/defense-contractors",
      },
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
  // 4. ASSET RECOVERY  (slug: asset-recovery-services)  
  // ==========================================================================
  // {
  //   slug: "asset-recovery-services",
  //   image: assetRecovery,
  //   metaTitle: "Enterprise IT Asset Recovery & Remarketing Services | Integritrade",
  //   metaDescription:
  //     "Recover value from retired enterprise IT through certified remarketing not consumer marketplaces. Net recovery credited against your invoice. R2v3 certified, nationwide pickup from Fresno, CA.",
  //   pageTitle: "Asset Recovery",
  //   pageSubtitle:
  //     "For finance and IT teams who know retired hardware still has value and for compliance teams who need to make sure that value isn't recovered through channels that put your asset tags on consumer marketplaces. We remarket through enterprise refurbisher networks and credit recovery directly against your invoice.",
  //   heroTitle:
  //     "Turn Retired IT Hardware Into Recovered Capital Without Putting Your Asset Tags on eBay",
  //   heroDescription:
  //     "Every retired laptop, server, and switch with remaining useful life represents recoverable capital but only if it's remarketed through channels that protect your data, your brand, and your asset disposition controls. Integritrade's IT asset recovery program tests, grades, and remarkets enterprise hardware through vetted refurbisher networks. Net recovery is credited directly against your ITAD invoice as a transparent line item not paid out separately on a 90-day cycle. And no, your asset tags don't end up on consumer marketplaces.",
  //   sections: [
  //     {
  //       title: "Why Asset Recovery Goes Wrong at Most ITAD Vendors",
  //       content: [
  //         "Asset recovery sounds simple: take retired hardware, sell it, give the customer a check. The reality is messier and the way most ITAD vendors handle it creates risks that finance and compliance teams rarely see until something goes wrong.",
  //         "Hardware ends up on consumer marketplaces with company asset tags still attached, leaking organizational intelligence. 'Refurbishment' partners turn out to be brokers who export devices to non-OECD markets. Recovery payouts arrive 90+ days after the engagement, with line items that don't reconcile to the original asset list.",
  //         "Integritrade's asset recovery program was built specifically to close these gaps. Hardware is graded and remarketed through enterprise-grade refurbisher channels not consumer marketplaces, not export brokers. Net recovery appears as a transparent credit on your ITAD invoice, reconciled to the original asset inventory by serial number.",
  //       ],
  //     },
  //     {
  //       title: "How the Recovery Process Actually Works",
  //       content: [
  //         "IT Asset Valuation & Buyback Every asset is tested, graded (cosmetic + functional), and assigned a fair-market remarketing value before any destruction or recycling commitment is made. You see the full economics before authorizing disposition.",
  //         "Pre-Remarketing Data Sanitization Every device bound for resale is sanitized using ADISA-verified, NIST 800-88 compliant software erasure with serialized Certificates of Erasure. Asset tags are physically removed before any remarketing.",
  //         "Refurbishment & Enterprise Remarketing Devices with remaining useful life are remarketed through enterprise refurbisher partners and B2B secondary market wholesalers. No consumer marketplaces. No offshore export.",
  //         "Responsible Recycling for Non-Recoverable Assets Hardware without remarketing potential is recycled through our R2v3 certified processing chain. Material recovery is documented for ESG reporting alongside resale revenue.",
  //         "Logistics & Chain-of-Custody Reporting Pickup, processing, sanitization, remarketing, recycling every step tracked by serial number and reconciled into a single audit-ready report.",
  //       ],
  //     },
  //   ],
  //   whyChoose: [
  //     {
  //       title: "Net Recovery Credited Directly to Your Invoice",
  //       description:
  //         "Remarketing proceeds appear as a transparent line item against your ITAD engagement not a separate 90-day payout. You see exactly what each asset returned.",
  //     },
  //     {
  //       title: "Enterprise-Grade Remarketing Channels Only",
  //       description:
  //         "Hardware is remarketed through vetted B2B refurbisher networks. No consumer marketplaces. No offshore export. Asset tags are physically removed before resale.",
  //     },
  //     {
  //       title: "ADISA-Verified Pre-Resale Sanitization",
  //       description:
  //         "Every device bound for remarketing is sanitized using ADISA-verified software with serialized Certificates of Erasure not a generic 'wiped' claim.",
  //     },
  //     {
  //       title: "Full Asset-Level Economics",
  //       description:
  //         "Every asset's fair-market value is documented before disposition. You see the full economics of your IT lifecycle, not just a lump-sum check at the end.",
  //     },
  //     {
  //       title: "ESG-Aligned Lifecycle Reporting",
  //       description:
  //         "Resale and recycling outcomes are reported together extending product lifecycles, documenting circular-economy contribution, and supporting your sustainability metrics.",
  //     },
  //     {
  //       title: "Audit-Ready Single Report",
  //       description:
  //         "Pickup, sanitization, remarketing, recycling all reconciled in one document tied to the original asset inventory. Auditor-ready, accounting-clean, ESG-defensible.",
  //     },
  //   ],
  //   industries: [
  //     {
  //       label: "Banking & Finance",
  //       href: "/industries/finance",
  //     },
  //     {
  //       label: "Healthcare",
  //       href: "/industries/healthcare",
  //     },
  //     {
  //       label: "Government & Public Sector",
  //       href: "/industries/government-public-sector",
  //     },
  //     {
  //       label: "Education",
  //       href: "/industries/education",
  //     },
  //     {
  //       label: "Corporate & Enterprise",
  //       href: "/industries/business-corporate",
  //     },
  //     {
  //       label: "Defense Contractors",
  //       href: "/industries/defense-contractors",
  //     },
  //   ],
  //   serviceLevel: {
  //     tier: "04",
  //     label: "Asset Recovery",
  //     bestFor:
  //       "Finance and IT teams who know their retired hardware still has value, and compliance teams who need to make sure that value isn't recovered through channels that put their asset tags on consumer marketplaces.",
  //     includes:
  //       "IT asset valuation and buyback, pre-remarketing data sanitization, refurbishment, enterprise-grade remarketing, responsible recycling for non-recoverable assets, and full chain-of-custody logistics.",
  //     documentation:
  //       "Asset-level valuation reports, serialized Certificates of Erasure, reconciled chain-of-custody records, and a single audit-ready remarketing and recycling summary.",
  //     valueRecovery:
  //       "Included net recovery credited directly to your invoice as a transparent line item, not a separate 90-day payout.",
  //     whenToChoose:
  //       "Your retired IT still has remaining useful life, you want recovery routed through enterprise refurbisher networks instead of consumer marketplaces, and you need the resale proceeds reconciled against your ITAD invoice on the same engagement.",
  //     linkText: "Explore Asset Recovery",
  //   },
  //   cta: {
  //     title: "See What Your Retired IT Is Actually Worth",
  //     description:
  //       "Send us your asset list laptops, servers, networking, storage. We'll come back with a fair-market valuation and a recovery plan within 48 hours.",
  //     contact: "559-325-4813  |  info@integritradellc.com",
  //     buttonText: "Request a Valuation",
  //   },
  // },

  
  // ==========================================================================
  // 5. DEMANUFACTURING & PROTOTYPE DESTRUCTION
  //    (slug: demanufacturing-prototype-destruction)
  // ==========================================================================
  {
    slug: "demanufacturing-prototype-destruction",
    image: demanufacturing,
    metaTitle:
      "Demanufacturing and Witnessed Device Destruction Services | Prototype, Electronics, and IT Asset Destruction",
    metaDescription:
      "Secure demanufacturing and witnessed destruction services for prototypes, engineering samples, electronics, IT assets, and sensitive devices. We prepare material, remove batteries, coordinate shredding through a partner facility, and document the destruction process.",
    pageTitle: "Demanufacturing & Prototype Destruction",
    pageSubtitle:
      "For organizations that need controlled destruction rather than simple recycling, including prototypes, pre-release devices, engineering samples, recalled products, branded equipment, and sensitive IT assets that should never re-enter the market.",
    heroTitle:
      "Secure Demanufacturing for Devices That Cannot Be Resold, Reused, or Released",
    heroDescription:
      "Some electronics should not be resold, remarketed, donated, or handled as ordinary e-waste. Prototypes, pre-release devices, engineering samples, recalled products, failed test units, branded equipment, sensitive IT assets, and proprietary electronics may contain confidential designs, customer data, embedded storage, firmware, trade secrets, or components that should never re-enter the market. Our demanufacturing and witnessed destruction service is built for organizations that need controlled destruction rather than simple recycling. We help prepare, organize, transport, witness, record, and document the destruction of devices that require a higher level of security and accountability. This service is ideal for companies that need to prove that sensitive devices were physically destroyed, not resold, exported, stockpiled, or processed without oversight.",
    sections: [
      {
        title: "What Is Demanufacturing?",
        intro:
          "The controlled breakdown and preparation of electronic devices before recycling, shredding, or final destruction. Instead of treating material as loose scrap, we sort by type, remove hazards like batteries, stage material for secure shredding, and document every step. Sensitive devices often contain batteries, screens, storage, boards, identifiers, branded housings, or proprietary assemblies that need handling before destruction.",
        items: [
          { label: "Device sorting", description: "Organized by product type, risk level, and destruction method." },
          { label: "Battery removal", description: "Batteries and items unsafe for shredders removed first." },
          { label: "Component separation", description: "Boards, cables, plastics, metals, storage, and hazards separated where appropriate." },
          { label: "Destruction prep", description: "Material staged for safe, efficient shredding at the partner facility." },
          { label: "Witnessed shredding", description: "Shredding coordinated, witnessed, and recorded by Integritrade staff." },
          { label: "Documentation", description: "Destruction events recorded via logs, photos, video, and certificates." },
        ],
      },
      {
        title: "Built for Prototypes, Sensitive Devices, and Controlled Product Destruction",
        intro:
          "Standard e-waste pickup isn't enough when you're dealing with intellectual property, brand risk, or data-security concerns. A single prototype can expose product design, supplier info, firmware, board layout, testing history, or roadmap. Even non-working equipment can contain recoverable components, labels, or embedded data. Our process ensures devices aren't cherry-picked, resold, or released into the secondary market.",
        items: [
          { label: "Prototypes & engineering samples", description: "Protects IP, unreleased designs, and internal testing programs." },
          { label: "Branded electronics", description: "Prevents unauthorized resale, gray-market distribution, and brand misuse." },
          { label: "Recalled or defective products", description: "Keeps unsafe or nonconforming products out of circulation." },
          { label: "IT assets & data-bearing devices", description: "Supports data-security, privacy, and chain-of-custody requirements." },
          { label: "Medical & specialty electronics", description: "Controls sensitive equipment, firmware, and regulated components." },
          { label: "Returns & warranty units", description: "Prevents unauthorized harvesting or redistribution of restricted inventory." },
        ],
      },
      {
        title: "Our Destruction Workflow",
        content: [
          `<strong>1. Material review & scope.</strong> We identify device types, quantities, condition, security concerns, and required documentation. Batteries, storage media, hazardous components, serialized assets, or highly sensitive prototypes get handling requirements defined before pickup.`,
          `<strong>2. Receiving, sorting, staging.</strong> Sensitive devices segregated from general commodity material. Serialized tracking captures asset identifiers before destruction if required.`,
          `<strong>3. Battery & hazard removal.</strong> Lithium batteries and components that shouldn't be shredded with the device are removed protecting workers, equipment, and transportation.`,
          `<strong>4. Demanufacturing & destruction prep.</strong> Data-bearing media (HDDs, NVMe, flash) are isolated and physically destroyed on-site at our Fresno facility using dedicated shredders. For larger electronics, prototypes, and complex devices, we use a strategic partnership with an industrial-scale materials recovery facility our team acts as your agent on the ground, personally overseeing the transfer and physically witnessing end-to-end shredding in real time. Continuous video evidence available on request.`,
          `<strong>5. Witnessing & recording.</strong> We witness the shredding process and record the destruction event with photos, video, load records, weight records, asset lists, destruction summaries, and certificates.`,
          `<strong>6. Final documentation.</strong> Material description, quantity, date, handling notes, destruction method, partner facility involvement, and supporting records packaged appropriately for the project.`,
        ],
      },
      {
        title: "Why Preparation Before Shredding Matters",
        intro:
          "Shredding isn't as simple as feeding whole devices into a machine. Large electronics contain batteries, capacitors, glass, metal assemblies, plastics, boards, embedded storage, adhesives, and labels that should be removed or separated before destruction. Proper preparation reduces safety risk and improves documentation quality.",
        items: [
          { label: "Battery removal", description: "Reduces fire, smoke, thermal runaway, and equipment-damage risk." },
          { label: "Storage-media identification", description: "Ensures data-bearing components are tracked or destroyed." },
          { label: "Product segregation", description: "Keeps sensitive prototypes from being mixed with general scrap." },
          { label: "Label & identifier review", description: "Documents serialized or branded assets before destruction." },
          { label: "Load organization", description: "Makes shredding more efficient and easier to witness." },
          { label: "Documentation before destruction", description: "Creates a record before the device is physically altered." },
        ],
      },
      {
        title: "Documentation and Chain of Custody",
        intro:
          "A destruction service is only as strong as the documentation behind it. We create a defensible record showing material was received, prepared, transferred for shredding, witnessed, and destroyed supporting internal audits, customer requirements, compliance files, and vendor-management documentation.",
        items: [
          { label: "Certificate of destruction", description: "General proof that devices were destroyed." },
          { label: "Serialized asset report", description: "For ITAD projects, data-bearing devices, high-value electronics, and controlled assets." },
          { label: "Photo documentation", description: "Before-and-after evidence for product destruction or prototype disposal." },
          { label: "Video documentation", description: "Higher-security projects requiring visual proof of shredding." },
          { label: "Weight report", description: "Commodity, recycling, and recovery reporting." },
          { label: "Witness log", description: "Projects where a named individual must confirm the destruction event." },
        ],
      },
      {
        title: "Who Uses This Service?",
        intro:
          "Built for organizations that need a higher level of control than ordinary e-waste recycling especially when devices carry intellectual property, confidential data, brand-sensitive components, safety concerns, or regulatory risk.",
        items: [
          { label: "Technology companies", description: "Destruction of prototypes, engineering samples, failed test units, and unreleased products." },
          { label: "Manufacturers", description: "Controlled destruction of defective, obsolete, or nonconforming electronics." },
          { label: "OEMs", description: "Product destruction, brand protection, and downstream accountability." },
          { label: "IT departments", description: "Data-bearing asset destruction and serialized reporting." },
          { label: "Medical & laboratory orgs", description: "Controlled handling of specialized electronics and sensitive equipment." },
          { label: "Schools & public agencies", description: "Documented destruction of IT assets and obsolete electronics." },
          { label: "Retailers & distributors", description: "Destruction of returns, warranty units, and restricted inventory." },
        ],
      },
      {
        title: "Why Choose Controlled Destruction Instead of Basic Recycling?",
        intro:
          "Basic recycling may be acceptable for low-risk commodity material, but not for sensitive devices. If you need to protect IP, data, brand integrity, or compliance records, a pickup receipt isn't enough a controlled process gives you a defined workflow, witnessed shredding, and a clearer record of what happened.",
        compare: {
          leftLabel: "Basic recycling",
          rightLabel: "Controlled demanufacturing",
          rows: [
            { left: "Material handled as commodity scrap.", right: "Material handled per security and destruction requirements." },
            { left: "Limited visibility into preparation.", right: "Batteries, storage, and sensitive components reviewed before shredding." },
            { left: "Documentation may be limited to weight.", right: "Documentation includes assets, photos, video, witness notes, and certificates." },
            { left: "Devices may pass through multiple downstream channels.", right: "Destruction path coordinated and documented end-to-end." },
            { left: "Not ideal for prototypes or sensitive products.", right: "Designed for IP protection, brand protection, and data-security needs." },
          ],
        },
      },
    ],
    whyChoose: [
      {
        title: "Uninterrupted Chain of Custody",
        description:
          "We act as your dedicated agent on the ground, personally overseeing the transfer and physically witnessing the end-to-end shredding process in real time. No blind downstreaming, no lost visibility.",
      },
      {
        title: "On-Site Destruction of Data-Bearing Media",
        description:
          "Hard drives, NVMe drives, and flash memory are strictly isolated and physically destroyed on-site at our Fresno facility using dedicated, specialized shredders before anything leaves.",
      },
      {
        title: "Witnessed Partner-Facility Shredding",
        description:
          "Large electronics, prototypes, and complex devices are shredded at an industrial-scale materials recovery facility while our team witnesses and records the entire process.",
      },
      {
        title: "Video Evidence on Request",
        description:
          "For higher-security projects, we can provide continuous video evidence as your proprietary assets are completely reduced to raw commodities.",
      },
      {
        title: "Preparation Before Destruction",
        description:
          "Batteries, hazards, and sensitive components are removed and material is staged before shredding reducing fire risk, improving safety, and producing better documentation.",
      },
      {
        title: "Built for IP and Brand Protection",
        description:
          "Prototypes, branded electronics, recalled products, and returns are kept out of the secondary market and documented, not cherry-picked, resold, or exported.",
      },
    ],
    industries: [
      {
        label: "Corporate & Enterprise",
        href: "/industries/business-corporate",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Government & Public Sector",
        href: "/industries/government-public-sector",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Defense Contractors",
        href: "/industries/defense-contractors",
      },
    ],
    serviceLevel: {
      tier: "05",
      label: "Demanufacturing & Prototype Destruction",
      bestFor:
        "Organizations with prototypes, pre-release devices, engineering samples, recalled products, branded equipment, or sensitive electronics that must be physically destroyed not resold, exported, or downstreamed without oversight.",
      includes:
        "Material review, sorting and staging, battery and hazard removal, on-site destruction of data-bearing media, witnessed partner-facility shredding for large electronics, and full destruction documentation.",
      documentation:
        "Certificates of destruction, serialized asset reports, photo and video documentation, weight reports, and witness logs, depending on project scope.",
      valueRecovery:
        "Not included these assets are routed to controlled destruction, not resale.",
      whenToChoose:
        "You need controlled destruction with a documented, witnessed chain of custody for devices that carry intellectual property, brand risk, or data-security concerns and cannot be allowed to re-enter the market.",
      linkText: "Explore Demanufacturing",
    },
    cta: {
      title: "Need Proof Your Sensitive Devices Were Actually Destroyed?",
      description:
        "If you have prototypes, branded electronics, recalled products, or data-bearing assets that must be physically destroyed under a witnessed, documented chain of custody, we can build the workflow around your requirements.",
      contact: "559-325-4813  |  info@integritradellc.com",
      buttonText: "Request a Demanufacturing Quote",
    },
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}