import { StaticImageData } from "next/image";
import Education from "@/public/industries/education.jpeg";
import Finance from "@/public/industries/finance.jpeg";
import BusinessCorporate from "@/public/industries/business-corporate.jpeg";
import Healthcare from "@/public/industries/healthcare.png";
import GovernmentITEquipment from "@/public/industries/government-IT-equipment.png";
import LawFirmData from "@/public/industries/law-firm-data.png";
import SecureRetailPOS from "@/public/industries/secure-retail-POS.png";
import SecureDefenseServer from "@/public/industries/secure-defense-server.png";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ClosingCallout = {
  before?: string;
  linkText: string;
  linkHref: string;
  after?: string;
};

export type BulletPoint =
  | string
  | {
      title: string;
      text: string;
    };

export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: BulletPoint[];
};

export type Industry = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  contentSections?: ContentSection[];
  closingCallout?: ClosingCallout;
  projectScenarios: {
    intro: string;
    items: { title: string; description: string }[];
  };
  faqs: FAQItem[];
};

export const industriesData: Industry[] = [
  {
    slug: "education",
    image: Education,
    imageAlt: "Students using laptops in a classroom",
    eyebrow: "Industries We Serve",
    title: "Education",
    description:
      "Helping schools, colleges, and universities manage device refreshes, student data risk, and surplus technology with clear documentation and value recovery.",
    metaTitle: "ITAD Services for Education | Secure School & University IT Disposal",
    metaDescription:
      "Secure IT asset disposition for schools and universities. FERPA-compliant data destruction, device recycling, and asset recovery for educational institutions.",
    content: [
      `Educational institutions manage vast fleets of technology - from individual student Chromebooks to complex research servers. Integritrade provides specialized IT Asset Disposition (ITAD) services designed to address the unique scale, budget constraints, and security requirements of modern academic environments.`,
      `By partnering with an optimally certified provider like Integritrade, you ensure your digital infrastructure is retired securely, profitably, and responsibly.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Educational institutions manage vast fleets of technology - from individual student Chromebooks to complex research servers. Integritrade provides specialized IT Asset Disposition (ITAD) services designed to address the unique scale, budget constraints, and security requirements of modern academic environments.`,
        ],
      },
      {
        heading: "Core Benefits for Schools and Universities",
        bullets: [
          {
            title: "FERPA-Compliant Data Destruction",
            text: "Protecting student and faculty data is paramount. Our certified data sanitization processes guarantee that sensitive academic records and personal information never leave your campus in a recoverable format.",
          },
          {
            title: "Maximizing Tight Budgets",
            text: "We help schools recoup significant value from retired assets through our targeted remarketing program. By turning outdated hardware into a new revenue stream, you can reinvest directly into classroom innovation.",
          },
          {
            title: "Audit-Ready Transparency",
            text: "We provide the rigorous chain-of-custody tracking and detailed reporting required for public audits and government-funded educational initiatives.",
          },
          {
            title: "Zero-Landfill Commitment",
            text: "We manage the logistics and environmentally responsible recycling from start to finish, allowing educators to focus on learning rather than lifecycle management.",
          },
        ],
      },
      {
        heading: "The R2v3 Advantage: Why Certification Matters",
        paragraphs: [
          `When managing sensitive educational data and retiring hardware, choosing a vendor certified to a rigorous industry standard like R2v3 is essential. This globally recognized certification guarantees that an ITAD partner doesn't just make promises, but actively undergoes third-party audits to ensure:`,
        ],
        bullets: [
          {
            title: "Absolute Data Security",
            text: "Strict, verifiable protocols for data sanitization and destruction.",
          },
          {
            title: "Environmental Responsibility",
            text: "A guarantee that e-waste is processed ethically and sustainably, never dumped in landfills or exported illegally.",
          },
          {
            title: "Liability Protection",
            text: "Potentially shielding your institution from the severe legal, financial, and reputational risks associated with data breaches or improper recycling by demonstrating vendor selection due-diligence.",
          },
        ],
      },
      {
        paragraphs: [
          `By partnering with an optimally certified provider like Integritrade, you ensure your digital infrastructure is retired securely, profitably, and responsibly.`,
        ],
      },
    ],
    projectScenarios: {
      intro:
        "Most education ITAD work falls into a handful of recurring project shapes. We've built our intake, scheduling, and reporting around these patterns so the work fits your academic calendar instead of fighting it.",
      items: [
        {
          title: "1:1 Chromebook Program Refresh",
          description:
            "End-of-lease or end-of-life rotation across an entire student fleet. We handle bulk pickup, per-asset serial capture, sanitization, and consolidated reporting tied to your original purchase or lease records.",
        },
        {
          title: "Summer-Break District-Wide Pickup",
          description:
            "The narrow window between graduation and August in-service days is when most retirements happen. We coordinate multi-site pickups across a district in a single project, scheduled around your custodial and IT staff availability.",
        },
        {
          title: "Bond-Funded Technology Upgrade",
          description:
            "When a school district passes a technology bond, the old equipment has to go somewhere documented. We provide the audit-ready disposal records boards and bond oversight committees expect.",
        },
        {
          title: "Campus Consolidation or Building Closure",
          description:
            "Shuttering a wing, merging campuses, or vacating a leased building. We inventory and clear the entire IT footprint including legacy AV, wiring closets, and forgotten storerooms.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you schedule pickups during summer break only?",
        answer:
          "Yes. Most of our education clients consolidate their decommissioning into the summer window, and we plan capacity around that. Tell us your last day of instruction and your target completion date, and we'll build a multi-site pickup schedule that finishes before staff returns.",
      },
      {
        question: "Do your reports satisfy bond audits and E-Rate documentation?",
        answer:
          "Our standard chain-of-custody and disposition reports include the line items public-funded technology audits typically require asset tag, serial number, make/model, sanitization method, final disposition, and date. If your auditor needs a specific format, send us the template and we'll match it.",
      },
      {
        question: "How do you handle student data on Chromebooks and tablets?",
        answer:
          "Every device-bearing data managed or not goes through certified sanitization or physical destruction before it leaves our chain of custody. We treat anything that touched a student account as FERPA-regulated by default, regardless of whether the data was synced to the cloud.",
      },
      {
        question: "Can we recover value from older devices, or is it all recycling?",
        answer:
          "It depends on age and condition. Recent-generation Chromebooks, faculty laptops, and lab equipment often carry meaningful resale value, and we share that recovery back to the district. Older or damaged equipment goes through R2v3-compliant recycling at no cost to you.",
      },
      {
        question: "Do you serve districts outside California?",
        answer:
          "Our home base is Fresno and we cover California end-to-end, but we handle multi-state university systems and regional consortiums on a project basis. Reach out with your locations and we'll confirm coverage.",
      },
    ],
  },

  {
    slug: "finance",
    image: Finance,
    imageAlt: "Financial professionals reviewing data on screens",
    eyebrow: "Industries We Serve",
    title: "Finance",
    description:
      "Supporting banks, insurance firms, and investment teams with controlled asset retirement, documented handling, and end-of-life hardware processing across regulated environments.",
    metaTitle: "ITAD for Finance | Secure Data Destruction & Compliance Services",
    metaDescription:
      "ITAD and data destruction for financial institutions. GLBA, SOX, and PCI DSS compliant services for banks, insurance, and investment firms.",
    content: [
      `Integritrade provides secure finance ITAD services for banks, credit unions, insurance firms, accounting teams, investment advisors, payment processors, and financial offices that cannot afford weak data handling, missing documentation, or uncontrolled asset disposal. Retired workstations, laptops, servers, hard drives, solid-state drives, mobile devices, printers, copiers, networking equipment, and storage systems may still contain customer financial records, account data, tax documents, payment information, loan files, credentials, proprietary models, audit materials, and confidential business records long after they are removed from service. We help financial organizations turn equipment refreshes, branch closures, office moves, server upgrades, and storage cleanouts into a controlled ITAD process built around secure pickup, documented chain of custody, NIST SP 800-88-aligned sanitization options, responsible recycling, asset recovery, and final reporting.`,

      `Financial compliance risk does not end when hardware is unplugged. Institutions operating under obligations such as GLBA, Sarbanes-Oxley internal control expectations, PCI DSS requirements for payment card environments, SEC Regulation S-P privacy safeguards, FINRA recordkeeping expectations, vendor risk reviews, and state privacy or breach-notification laws need more than a basic recycler. They need a defensible process that shows where assets went, how data was handled, and what final disposition occurred. For eligible devices, Integritrade offers software-based erasure to sanitize media while preserving resale value, with digitally signed certificates of destruction or sanitization available to support audits, compliance records, vendor management files, and internal risk documentation. When software erasure is not appropriate because of media type, device condition, retention policy, client requirements, or data sensitivity, physical destruction is available for virtually all data-bearing media devices.`,

      `With Integritrade, financial asset retirement becomes a secure, documented, and risk-aware program instead of a liability sitting in a storage room. We help protect customer trust, reduce breach exposure, support audit readiness, clear surplus equipment, recover value from reusable assets, and responsibly recycle end-of-life technology. Whether your organization is refreshing employee devices, decommissioning servers, removing equipment from multiple branches, replacing payment systems, or clearing archived hardware, Integritrade gives your team a professional path from pickup to final certificate with the documentation financial institutions expect.`,
    ],
    projectScenarios: {
      intro:
        "Financial ITAD projects tend to follow regulatory cycles, real-estate decisions, and platform migrations. These are the project types we see most often.",
      items: [
        {
          title: "Branch Closure or Consolidation Decommission",
          description:
            "When a branch closes, every data-bearing device on site has to be accounted for and destroyed before the keys turn over. We coordinate same-day or next-day pickups that finish before the lease ends.",
        },
        {
          title: "Trading Floor Relocation or Refresh",
          description:
            "Multi-monitor trading positions, low-latency networking gear, and specialized hardware require careful inventory and handling. We work outside market hours to avoid disrupting live trading.",
        },
        {
          title: "Core Banking or Platform Migration",
          description:
            "When a core processor changes Fiserv, FIS, Jack Henry the old hardware exits the environment in volume. We handle the staged decommission as the new platform comes online.",
        },
        {
          title: "M&A IT Consolidation",
          description:
            "Acquired institutions arrive with their own fleet, data centers, and branch hardware. We inventory the acquired estate, separate retain-vs-retire, and process the retirements with documentation acceptable to both legacy and acquiring compliance teams.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you offer on-site shredding witnessed by our security team?",
        answer:
          "Yes. On-site shredding is one of the most common requests we get from financial clients. Our mobile destruction equipment processes drives and tapes in your parking lot or loading dock, your team witnesses the work, and you receive a certificate of destruction before the truck leaves.",
      },
      {
        question: "How do you handle backup tape destruction?",
        answer:
          "Tapes go through a two-step process: degaussing to render the data unrecoverable at the magnetic level, then physical destruction. Each tape is logged by barcode, and you receive a separate destruction certificate covering tape media specifically.",
      },
      {
        question: "Can your documentation satisfy an OCC, FDIC, or FFIEC examination?",
        answer:
          "Our standard reporting was designed with regulatory examination in mind. It includes asset-level detail, sanitization method per device, NIST 800-88 alignment, chain-of-custody signatures, and final disposition. If your examiner asks for something specific, we can usually provide it without redoing the project.",
      },
      {
        question: "How quickly can you respond to a branch closure?",
        answer:
          "For California-based clients, we can typically be on-site within 48 to 72 hours of a confirmed pickup request, faster for emergencies. Branch closures usually have a hard lease-end date, so tell us that date as early as possible and we'll work backward.",
      },
      {
        question: "Do you sign NDAs and information security agreements?",
        answer:
          "Of course. Most financial clients have us under both an NDA and a vendor information security agreement before any project begins. Send us your standard documents and our compliance team will turn them around quickly.",
      },
    ],
  },

  {
    slug: "business-corporate",
    image: BusinessCorporate,
    imageAlt: "Corporate office workspace with computers",
    eyebrow: "Industries We Serve",
    title: "Business & Corporate",
    description:
      "Helping businesses retire office technology, recover asset value, and keep multi-location equipment projects organized from pickup to final reporting.",
    metaTitle: "Corporate ITAD Services | Multi-Site IT Decommissioning",
    metaDescription:
      "Enterprise ITAD solutions for businesses. Secure data destruction, asset recovery, and zero-landfill electronics recycling for corporate environments.",
    content: [
      `For the business and corporate sector, Integritrade provides a comprehensive ITAD framework that combines operational efficiency, data security, environmental responsibility, and asset recovery. Many organizations accumulate retired electronics for months or years because internal teams are unsure how to dispose of them securely. That delay creates avoidable risk. Stored equipment can contain sensitive data, take up valuable space, complicate audits, and expose the business if devices are lost, stolen, resold, or recycled without proper controls.`,

      `Integritrade turns that uncertainty into a managed process. We coordinate secure collection, transportation, sorting, data sanitization, resale evaluation, recycling, and final documentation. From office laptops and employee workstations to servers, storage media, mobile devices, printers, and networking hardware, we help businesses handle end-of-life technology with confidence.`,

      `Our data destruction and sanitization services are built for organizations that need proof, not promises. Software-based erasure is available for eligible devices and can be paired with digitally signed certificates of destruction or sanitization. When the asset, media condition, client policy, or data sensitivity calls for it, physical destruction is available for virtually all data-bearing media. That flexibility allows your company to choose the right outcome for each asset: secure reuse when value can be recovered, or destruction when risk must be eliminated.`,

      `Retiring IT assets should not create a security gap. With Integritrade, your business gets a clear path from pickup to final reporting: secure handling, NIST SP 800-88-aligned sanitization options, available digitally signed certificates, responsible recycling, and value recovery when possible.`,

      `If your company is planning a device refresh, office move, server replacement, storage cleanout, or multi-site decommissioning project, Integritrade can help you protect data, recover value, and document every step.`,
    ],
    closingCallout: {
      linkText: "Schedule a pickup",
      linkHref: "/contact",
      after: " or request a custom corporate ITAD quote today.",
    },
    projectScenarios: {
      intro:
        "Most corporate ITAD work clusters around a few well-defined business events. We've built repeatable playbooks for each so projects ship on schedule even when the underlying business move is messy.",
      items: [
        {
          title: "Office Downsizing or Hybrid Transition",
          description:
            "Vacating floors, consolidating to smaller footprints, or moving to a hybrid model leaves a tail of furniture and IT to clear. We handle the IT side end-to-end so you can focus on the lease and the move.",
        },
        {
          title: "Data Center Decommission",
          description:
            "Whether you're closing a colo cage, retiring an on-prem room as you migrate to cloud, or refreshing a generation of servers, we handle rack-and-roll work with serial-level reporting on every drive.",
        },
        {
          title: "M&A Asset Consolidation",
          description:
            "Acquisitions bring inherited fleets that may not match your standards or your security baseline. We sort retain-vs-retire, sanitize what's leaving, and document everything for both legal and IT.",
        },
        {
          title: "Lease Return Preparation",
          description:
            "Equipment leases end with strict return conditions. We sanitize data, restore-to-spec where required, and provide the documentation lessors need before they accept the return.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you handle pickups across multiple locations in one project?",
        answer:
          "Yes multi-site is most of what we do for corporate clients. One project manager, one consolidated report, one point of contact. We coordinate regional logistics so you're not managing ten separate engagements.",
      },
      {
        question: "What's your minimum project size?",
        answer:
          "We don't enforce a hard minimum, but corporate engagements usually start around 50 devices or a single office decommission. For smaller volumes, drop-off at our Fresno facility is often the most efficient option.",
      },
      {
        question: "How do you handle equipment with mixed disposition some resold, some destroyed?",
        answer:
          "Standard. At intake, every asset is evaluated for resale eligibility. Devices with recoverable value go through sanitization and resale; everything else goes through destruction. You receive a single report covering both paths with full traceability.",
      },
      {
        question: "Can you provide ESG and sustainability reporting?",
        answer:
          "Yes. Our standard reporting includes weight by material category, percent diverted from landfill, and downstream processor disclosure. If your sustainability team needs specific metrics or framework alignment (GRI, SASB), tell us upfront and we'll structure the report accordingly.",
      },
      {
        question: "Do you offer leased equipment return preparation?",
        answer:
          "We do. Lessor return packets vary widely, so send us the requirements with the project request. We'll sanitize to the lessor's specification, restore configuration where required, and provide documentation that satisfies the return inspection.",
      },
    ],
  },

  {
    slug: "healthcare",
    image: Healthcare,
    imageAlt: "Healthcare facility with medical equipment",
    title: "Healthcare",
    description:
      "Helping healthcare providers remove outdated technology while protecting patient information and maintaining audit-ready asset records.",
    eyebrow: "Industries We Serve",
    metaTitle: "Healthcare ITAD | HIPAA-Compliant Data Destruction Services",
    metaDescription:
      "Secure IT asset disposal for healthcare providers. HIPAA-compliant data destruction, equipment recycling, and asset recovery solutions.",
    content: [
      `Integritrade provides secure healthcare ITAD services for organizations that cannot afford uncertainty around HIPAA, PHI, patient privacy, or data-bearing equipment. Hospitals, clinics, dental offices, labs, imaging centers, medical groups, and care facilities handle technology that may contain protected health information, billing records, employee files, credentials, imaging data, and other confidential records long after the device is removed from service. We help healthcare teams retire computers, servers, drives, tablets, printers, networking equipment, medical office electronics, and other assets through a controlled process built around secure pickup, documented chain of custody, NIST SP 800-88-aligned sanitization options, responsible recycling, asset recovery, and final reporting.`,

      `HIPAA-related risk does not end when equipment is unplugged. If a retired workstation, hard drive, copier, server, or storage device is lost, resold, recycled, or discarded without proper data handling, the organization may still be exposed. Integritrade helps close that gap with data security options designed for healthcare environments. For eligible devices, software-based erasure is available to securely sanitize media while preserving resale value, and digitally signed certificates of destruction or sanitization can be provided to support HIPAA documentation, internal audits, vendor reviews, and compliance records. When software erasure is not appropriate because of device condition, media type, organizational policy, or PHI sensitivity, physical destruction is available for virtually all data-bearing media devices.`,

      `With Integritrade, healthcare asset retirement becomes more than an electronics pickup; it becomes a defensible, audit-ready process. We help protect patient trust, reduce breach exposure, maintain clear documentation, and responsibly manage end-of-life technology while recovering value from reusable equipment whenever possible. Whether your facility is refreshing workstations, clearing storage rooms, replacing servers, closing an office, or coordinating removals across multiple healthcare locations, Integritrade gives your team a secure and compliance-conscious path from pickup to final certificate.`,
    ],
    projectScenarios: {
      intro:
        "Healthcare ITAD projects almost always tie to a larger clinical or operational change. Knowing the trigger event tells us how to scope the work.",
      items: [
        {
          title: "EHR Platform Migration",
          description:
            "Moving from one EHR to another Epic, Cerner, Meditech, Athena generates a wave of endpoint replacements. We handle the staged decommission of legacy workstations as the new platform rolls out floor by floor.",
        },
        {
          title: "Hospital Wing Renovation or New Build",
          description:
            "Renovations and new construction phases mean clearing existing technology before crews move in. We coordinate around clinical operations so patient care areas stay live until the very last moment.",
        },
        {
          title: "Clinic Acquisition or Practice Rollup",
          description:
            "Health systems acquiring physician practices inherit fleets of mismatched hardware with PHI on every device. We standardize the disposition process across the acquired locations and provide unified reporting.",
        },
        {
          title: "Imaging or Lab Suite Upgrade",
          description:
            "Replacing a CT, MRI, or major lab analyzer also retires the associated workstations and storage. We handle the IT components specifically, coordinating with the OEM service team handling the clinical equipment.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you sign Business Associate Agreements?",
        answer:
          "Yes. A BAA is signed before any project begins. Send us your template and our compliance team will review and execute, or we can provide ours if you prefer.",
      },
      {
        question: "How do you handle ePHI on biomedical and clinical equipment?",
        answer:
          "Any device that stores or transmits ePHI is treated as PHI-bearing regardless of whether it's traditional IT or clinical hardware. We sanitize or destroy the data-bearing components and document the work to HIPAA Security Rule standards. For equipment that requires biomedical decontamination, we coordinate with your biomed team before pickup.",
      },
      {
        question: "Can you coordinate around Joint Commission or CMS surveys?",
        answer:
          "Yes. Survey timelines drive a lot of healthcare ITAD scheduling both the rush before and the cleanup after. Tell us your survey window when you scope the project and we'll plan around it.",
      },
      {
        question: "What documentation do we receive for HIPAA compliance?",
        answer:
          "Per project, you receive a Certificate of Data Destruction, an asset-level disposition report (serial number, sanitization method, final disposition), and chain-of-custody signatures from intake through destruction. The package is structured to satisfy HIPAA Security Rule documentation requirements and survive an OCR audit.",
      },
      {
        question: "Do you handle pickups outside business hours?",
        answer:
          "For hospitals and 24/7 facilities, yes. We schedule around clinical operations, including evenings, weekends, and shift changes when that's what the floor needs.",
      },
    ],
  },

  // {
  //   slug: "legal-professional-services",
  //   image: LawFirmData,
  //   imageAlt: "Professional services office with secure business technology",
  //   eyebrow: "Industries We Serve",
  //   title: "Legal & Professional Services",
  //   description:
  //     "Confidential ITAD for office refreshes, firm relocations, partner departures, and end-of-life business equipment.",
  //   metaTitle: "Legal ITAD | Law Firm Data Destruction & Electronics Recycling",
  //   metaDescription:
  //     "Confidential ITAD for law firms, accounting firms, consultants, and professional service providers. Secure data destruction, asset recovery, and electronics recycling.",
  //   content: [
  //     `Law firms, accounting firms, consultants, advisors, architects, and professional service providers handle highly confidential client and business records every single day. When it is time to upgrade or retire office technology, Integritrade provides specialized ITAD, electronic recycling, asset recovery, and data destruction for computers, servers, drives, phones, printers, and scanners that may contain sensitive files or litigation-sensitive data.`,
  //     `Uncompromising Security for Client Confidentiality Professional service firms require an asset retirement process that absolutely protects client confidentiality and supports strict internal records-retention and vendor-risk expectations. To guarantee this level of security, Integritrade processes all retired assets at our video-surveilled facility. Every device is handled exclusively by thoroughly vetted staff trained in strict security protocols. Utilizing industrial-grade, full destruction equipment, we can sanitize and/or physically shred hard drives and storage media to ensure that privileged communications, financial records, and proprietary client data are permanently destroyed.`,
  //     `Defensible Compliance and NIST-Aligned Destruction We understand the privacy obligations and litigation risks inherent in professional services. Integritrade provides a documented, legally defensible process by offering secure chain of custody, NIST SP 800-88 media sanitization, audit-ready documentation, and responsible electronics recycling. Whether you are managing a firm-wide technology refresh or securing data during a partner transition, Integritrade ensures your confidential information is protected from start to finish.`,
  //   ],
  //   contentSections: [
  //     {
  //       paragraphs: [
  //         `Law firms, accounting firms, consultants, advisors, architects, and professional service providers handle highly confidential client and business records every single day. When it is time to upgrade or retire office technology, Integritrade provides specialized ITAD, electronic recycling, asset recovery, and data destruction for computers, servers, drives, phones, printers, and scanners that may contain sensitive files or litigation-sensitive data.`,
  //       ],
  //     },
  //     {
  //       heading: "Uncompromising Security for Client Confidentiality",
  //       paragraphs: [
  //         `Professional service firms require an asset retirement process that absolutely protects client confidentiality and supports strict internal records-retention and vendor-risk expectations. To guarantee this level of security, Integritrade processes all retired assets at our video-surveilled facility. Every device is handled exclusively by thoroughly vetted staff trained in strict security protocols. Utilizing industrial-grade, full destruction equipment, we can sanitize and/or physically shred hard drives and storage media to ensure that privileged communications, financial records, and proprietary client data are permanently destroyed.`,
  //       ],
  //     },
  //     {
  //       heading: "Defensible Compliance and NIST-Aligned Destruction",
  //       paragraphs: [
  //         `We understand the privacy obligations and litigation risks inherent in professional services. Integritrade provides a documented, legally defensible process by offering:`,
  //       ],
  //       bullets: [
  //         {
  //           title: "Secure Chain of Custody",
  //           text: "Tracked and documented logistics tailored for firm relocations, office refreshes, and partner departures.",
  //         },
  //         {
  //           title: "NIST SP 800-88 Media Sanitization",
  //           text: "Strict adherence to federal guidelines for the logical wiping and physical destruction of data-bearing media.",
  //         },
  //         {
  //           title: "Audit-Ready Documentation",
  //           text: "Comprehensive reporting, including serialized inventory tracking and verifiable certificates of destruction.",
  //         },
  //         {
  //           title: "Responsible Electronics Recycling",
  //           text: "R2v3-certified processing to ensure environmentally compliant downstream recycling for all end-of-life business equipment.",
  //         },
  //       ],
  //     },
  //     {
  //       paragraphs: [
  //         `Whether you are managing a firm-wide technology refresh or securing data during a partner transition, Integritrade ensures your confidential information is protected from start to finish.`,
  //       ],
  //     },
  //   ],
  //   closingCallout: {
  //     linkText: "Request confidential ITAD support",
  //     linkHref: "/contact",
  //     after: " for your legal or professional services firm.",
  //   },
  //   projectScenarios: {
  //     intro:
  //       "Legal and professional services ITAD projects usually involve confidentiality, office transitions, and strict documentation expectations.",
  //     items: [
  //       {
  //         title: "Firm-Wide Office Refresh",
  //         description:
  //           "Retire desktops, laptops, monitors, printers, servers, and storage devices with documented handling and secure data destruction.",
  //       },
  //       {
  //         title: "Firm Relocation or Office Consolidation",
  //         description:
  //           "Clear end-of-life equipment during moves, consolidations, and office cleanouts while protecting confidential client data.",
  //       },
  //       {
  //         title: "Partner Departure or Practice Transition",
  //         description:
  //           "Securely retire or process devices tied to partner transitions, legacy matters, client records, and archived files.",
  //       },
  //       {
  //         title: "Confidential Device Disposal",
  //         description:
  //           "Support secure disposal of computers, drives, phones, printers, scanners, and other office equipment that may contain privileged data.",
  //       },
  //     ],
  //   },
  //   faqs: [
  //     {
  //       question: "Can you support law firm data destruction requirements?",
  //       answer:
  //         "Yes. We provide secure chain of custody, NIST SP 800-88-aligned sanitization, physical destruction when required, and certificates of destruction for confidential legal and professional services data.",
  //     },
  //     {
  //       question: "Do you handle office refreshes and firm relocations?",
  //       answer:
  //         "Yes. We support office refreshes, firm relocations, partner departures, and end-of-life business equipment projects.",
  //     },
  //     {
  //       question: "Can you provide documentation for client confidentiality and vendor review?",
  //       answer:
  //         "Yes. We provide serialized inventory tracking, audit-ready reporting, chain-of-custody records, and verifiable certificates of destruction.",
  //     },
  //   ],
  // },

  {
    slug: "retail-hospitality",
    image: SecureRetailPOS,
    imageAlt: "Retail and hospitality technology prepared for secure recycling",
    eyebrow: "Industries We Serve",
    title: "Retail & Hospitality",
    description:
      "Secure retirement for POS refreshes, store closures, hotel upgrades, franchise rollouts, and customer-data devices.",
    metaTitle: "Retail ITAD | Hospitality Electronics Recycling & POS Disposal",
    metaDescription:
      "Retail and hospitality ITAD services for POS system disposal, PCI DSS data destruction, hotel e-waste recycling, secure logistics, and certified documentation.",
    content: [
      `Retailers, hotels, restaurants, franchises, and hospitality groups rely heavily on interconnected technology across storefronts, properties, and distribution centers. When upgrading or decommissioning these systems, Integritrade provides specialized ITAD, electronic recycling, data destruction, and asset recovery for POS systems, tablets, laptops, displays, and back-office equipment to protect both your brand reputation and your customers.`,
      `High-Security Processing for Payment Data Retired retail and hospitality devices frequently harbor highly sensitive cardholder data, customer records, employee information, and corporate Wi-Fi credentials. To completely mitigate this risk, Integritrade safeguards your retired hardware at our video-surveilled facility. Every asset is handled exclusively by strictly vetted staff and processed using industrial-grade, full destruction equipment. We sanitize and physically shred hard drives, solid-state drives, and proprietary components to guarantee that sensitive payment and business data is permanently unrecoverable.`,
      `PCI DSS and NIST-Aligned Compliance Protecting customer data is not optional. Integritrade supports PCI DSS-conscious retirement of payment devices through rigorous, documented protocols. We support your brand's compliance and sustainability goals by offering secure logistics, NIST SP 800-88 media sanitization, documented chain of custody, and certified documentation. Whether you are closing a single location or rolling out new technology to hundreds of franchises, Integritrade ensures your data is destroyed and your electronics are recycled responsibly.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Retailers, hotels, restaurants, franchises, and hospitality groups rely heavily on interconnected technology across storefronts, properties, and distribution centers. When upgrading or decommissioning these systems, Integritrade provides specialized ITAD, electronic recycling, data destruction, and asset recovery for POS systems, tablets, laptops, displays, and back-office equipment to protect both your brand reputation and your customers.`,
        ],
      },
      {
        heading: "High-Security Processing for Payment Data",
        paragraphs: [
          `Retired retail and hospitality devices frequently harbor highly sensitive cardholder data, customer records, employee information, and corporate Wi-Fi credentials. To completely mitigate this risk, Integritrade safeguards your retired hardware at our video-surveilled facility. Every asset is handled exclusively by strictly vetted staff and processed using industrial-grade, full destruction equipment. We sanitize and physically shred hard drives, solid-state drives, and proprietary components to guarantee that sensitive payment and business data is permanently unrecoverable.`,
        ],
      },
      {
        heading: "PCI DSS and NIST-Aligned Compliance",
        paragraphs: [
          `Protecting customer data is not optional. Integritrade supports PCI DSS-conscious retirement of payment devices through rigorous, documented protocols. We support your brand's compliance and sustainability goals by offering:`,
        ],
        bullets: [
          {
            title: "Secure Logistics",
            text: "Tracked pickups for POS refreshes, store closures, hotel upgrades, and franchise rollouts.",
          },
          {
            title: "NIST SP 800-88 Media Sanitization",
            text: "Strict adherence to industry-standard guidelines for the logical wiping and physical destruction of data-bearing media.",
          },
          {
            title: "Documented Chain of Custody",
            text: "Serialized tracking and reporting for your inventory, providing a clear audit trail.",
          },
          {
            title: "Certified Documentation",
            text: "Verifiable certificates of destruction backed by our comprehensive R2v3 and ISO-certified recycling processes.",
          },
        ],
      },
      {
        paragraphs: [
          `Whether you are closing a single location or rolling out new technology to hundreds of franchises, Integritrade ensures your data is destroyed and your electronics are recycled responsibly.`,
        ],
      },
    ],
    closingCallout: {
      linkText: "Request retail ITAD support",
      linkHref: "/contact",
      after: " for POS refreshes, store closures, hotel upgrades, or franchise rollouts.",
    },
    projectScenarios: {
      intro:
        "Retail and hospitality ITAD projects often happen across many locations and require fast, consistent documentation.",
      items: [
        {
          title: "POS Refresh or Payment Device Retirement",
          description:
            "Securely retire POS systems, tablets, payment devices, and back-office hardware during payment technology upgrades.",
        },
        {
          title: "Store Closure or Hotel Upgrade",
          description:
            "Clear customer-data devices and electronics during closures, remodels, property upgrades, or brand conversions.",
        },
        {
          title: "Franchise Rollout",
          description:
            "Coordinate staged pickups and reporting across multiple restaurants, hotels, stores, or franchise locations.",
        },
        {
          title: "Customer Data Device Disposal",
          description:
            "Destroy or sanitize devices that may contain payment records, customer profiles, employee information, or Wi-Fi credentials.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you handle POS system disposal?",
        answer:
          "Yes. We handle POS systems, payment devices, tablets, laptops, displays, and related back-office equipment with secure data destruction and documentation.",
      },
      {
        question: "Do you support PCI DSS-conscious disposal processes?",
        answer:
          "Yes. Our process supports payment-data risk management through secure logistics, NIST SP 800-88-aligned sanitization, physical destruction when required, and audit-ready certificates.",
      },
      {
        question: "Can you manage multi-location franchise pickups?",
        answer:
          "Yes. We can coordinate staged pickups, consolidated reporting, and consistent asset disposition across multiple stores, hotels, or franchise locations.",
      },
    ],
  },

  {
    slug: "government-public-sector",
    image: GovernmentITEquipment,
    imageAlt: "Public sector office technology prepared for secure asset disposition",
    eyebrow: "Industries We Serve",
    title: "Government & Public Sector",
    description:
      "Secure and transparent ITAD for agencies, municipalities, public authorities, courts, and public institutions.",
    metaTitle: "Government ITAD Services | Public Sector Electronics Recycling",
    metaDescription:
      "Government ITAD services and public sector electronics recycling with chain of custody, NIST SP 800-88 sanitization, audit-ready reporting, and certified documentation.",
    content: [
      `Government agencies, municipalities, public authorities, transportation departments, courts, and public institutions manage a vast amount of sensitive citizen data and personnel records. When hardware reaches the end of its lifecycle, these organizations require a secure and highly transparent technology retirement process. Integritrade provides specialized ITAD, electronic recycling, asset recovery, and data destruction designed to meet strict public records and procurement requirements.`,
      `High-Security Processing for Public Sector Data Because public-sector environments frequently involve CJIS-sensitive systems, public safety records, and FISMA/NIST-aligned security programs, security cannot be compromised. Integritrade safeguards your retired assets at our video-surveilled facility, where all equipment is processed exclusively by thoroughly vetted staff. Using industrial-grade, full destruction equipment, we sanitize and physically shred and destroy sensitive drives and media to guarantee that classified or citizen data is completely eradicated.`,
      `Accountable, Compliant Asset Disposition We provide a documented, unbroken audit trail from the moment your surplus electronics leave your facility. Integritrade supports transparent and accountable asset disposition through chain-of-custody logistics, NIST SP 800-88 sanitization, audit-ready reporting, and certified documentation. Whether you are decommissioning public safety systems, executing an agency-wide hardware refresh, or clearing out surplus electronics, Integritrade delivers the security and accountability your municipality or agency demands.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Government agencies, municipalities, public authorities, transportation departments, courts, and public institutions manage a vast amount of sensitive citizen data and personnel records. When hardware reaches the end of its lifecycle, these organizations require a secure and highly transparent technology retirement process. Integritrade provides specialized ITAD, electronic recycling, asset recovery, and data destruction designed to meet strict public records and procurement requirements.`,
        ],
      },
      {
        heading: "High-Security Processing for Public Sector Data",
        paragraphs: [
          `Because public-sector environments frequently involve CJIS-sensitive systems, public safety records, and FISMA/NIST-aligned security programs, security cannot be compromised. Integritrade safeguards your retired assets at our video-surveilled facility, where all equipment is processed exclusively by thoroughly vetted staff. Using industrial-grade, full destruction equipment, we sanitize and physically shred and destroy sensitive drives and media to guarantee that classified or citizen data is completely eradicated.`,
        ],
      },
      {
        heading: "Accountable, Compliant Asset Disposition",
        paragraphs: [
          `We provide a documented, unbroken audit trail from the moment your surplus electronics leave your facility. Integritrade supports transparent and accountable asset disposition through:`,
        ],
        bullets: [
          {
            title: "Chain-of-Custody Logistics",
            text: "Secure, controlled pickups for agency refreshes and municipal cleanouts.",
          },
          {
            title: "NIST SP 800-88 Sanitization",
            text: "Strict adherence to federal guidelines for the logical wiping and physical destruction of data-bearing devices.",
          },
          {
            title: "Audit-Ready Reporting",
            text: "Serialized inventory tracking and transparent documentation for every asset processed.",
          },
          {
            title: "Certified Documentation",
            text: "Legally defensible certificates of destruction and responsible R2v3-certified recycling to meet environmental sustainability goals.",
          },
        ],
      },
      {
        paragraphs: [
          `Whether you are decommissioning public safety systems, executing an agency-wide hardware refresh, or clearing out surplus electronics, Integritrade delivers the security and accountability your municipality or agency demands.`,
        ],
      },
    ],
    closingCallout: {
      linkText: "Request public sector ITAD support",
      linkHref: "/contact",
      after: " for your agency, municipality, or institution.",
    },
    projectScenarios: {
      intro:
        "Public sector ITAD projects require security, transparency, and documentation that can stand up to audits and procurement review.",
      items: [
        {
          title: "Agency Hardware Refresh",
          description:
            "Retire computers, drives, servers, printers, and network equipment with serialized tracking and audit-ready reporting.",
        },
        {
          title: "Municipal Electronics Cleanout",
          description:
            "Clear surplus electronics from city offices, public works departments, courts, libraries, and public institutions.",
        },
        {
          title: "Public Safety System Decommission",
          description:
            "Securely process equipment tied to public safety records, CJIS-sensitive systems, dispatch operations, or citizen data.",
        },
        {
          title: "Procurement and Sustainability Reporting",
          description:
            "Support public accountability with certificates, chain-of-custody documentation, and responsible recycling records.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you support public-sector audit requirements?",
        answer:
          "Yes. We provide chain-of-custody documentation, serialized inventory tracking, certificates of destruction, and responsible recycling records.",
      },
      {
        question: "Can you handle CJIS-sensitive or public safety equipment?",
        answer:
          "Yes. We treat sensitive public-sector devices with controlled handling, NIST SP 800-88-aligned sanitization, and physical destruction when required.",
      },
      {
        question: "Do you support municipal cleanouts and agency refreshes?",
        answer:
          "Yes. We support agency-wide refreshes, municipal cleanouts, public safety decommissions, and surplus electronics projects.",
      },
    ],
  },

  {
    slug: "defense-contractors",
    image: SecureDefenseServer,
    imageAlt: "Secure defense contractor IT assets prepared for controlled destruction",
    eyebrow: "Industries We Serve",
    title: "Defense Contractors",
    description:
      "High-security ITAD for defense contractors, suppliers, secure labs, hardware refreshes, and sensitive project equipment.",
    metaTitle: "Defense Contractor ITAD | CMMC, CUI & NIST Data Destruction",
    metaDescription:
      "Defense contractor ITAD services with controlled logistics, NIST SP 800-88 media sanitization, chain of custody, and certified data destruction.",
    content: [
      `Defense contractors and suppliers operate in high-stakes environments where retiring assets requires strictly controlled ITAD processes. Hardware leaving your facility may contain sensitive project files, engineering data, contract information, credentials, or controlled technical data. Integritrade provides the highest level of secure IT asset disposition, electronic recycling, and asset recovery to ensure this information is permanently sanitized and protected.`,
      `Uncompromising Security Infrastructure To meet the stringent demands of the defense sector, Integritrade processes all materials through our highly secure, video-surveilled facility. Every asset is handled exclusively by strictly vetted staff who are trained in high-security protocols. Utilizing industrial-grade, full destruction equipment, we physically shred and destroy hard drives, solid-state drives, and proprietary components, ensuring that sensitive defense data is completely unrecoverable.`,
      `Meeting CMMC, CUI, and FCI Requirements As CMMC focuses on protecting Federal Contract Information (FCI) and Controlled Unclassified Information (CUI), and NIST SP 800-171 outlines the requirements for protecting CUI in contractor systems, your ITAD partner must be an extension of your compliance program. Integritrade supports defense contractor asset retirement by offering controlled logistics, NIST SP 800-88 media sanitization, documented chain of custody, and certified processing. Whether you are decommissioning a secure lab or managing routine hardware refreshes, Integritrade ensures your retired assets never become a liability.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Defense contractors and suppliers operate in high-stakes environments where retiring assets requires strictly controlled ITAD processes. Hardware leaving your facility may contain sensitive project files, engineering data, contract information, credentials, or controlled technical data. Integritrade provides the highest level of secure IT asset disposition, electronic recycling, and asset recovery to ensure this information is permanently sanitized and protected.`,
        ],
      },
      {
        heading: "Uncompromising Security Infrastructure",
        paragraphs: [
          `To meet the stringent demands of the defense sector, Integritrade processes all materials through our highly secure, video-surveilled facility. Every asset is handled exclusively by strictly vetted staff who are trained in high-security protocols. Utilizing industrial-grade, full destruction equipment, we physically shred and destroy hard drives, solid-state drives, and proprietary components, ensuring that sensitive defense data is completely unrecoverable.`,
        ],
      },
      {
        heading: "Meeting CMMC, CUI, and FCI Requirements",
        paragraphs: [
          `As CMMC focuses on protecting Federal Contract Information (FCI) and Controlled Unclassified Information (CUI), and NIST SP 800-171 outlines the requirements for protecting CUI in contractor systems, your ITAD partner must be an extension of your compliance program. Integritrade supports defense contractor asset retirement by offering:`,
        ],
        bullets: [
          {
            title: "Controlled Logistics",
            text: "Secure, tracked pickups from your facility directly to our processing center.",
          },
          {
            title: "NIST SP 800-88 Media Sanitization",
            text: "Strict adherence to the Department of Defense's preferred guidelines for logical wiping and physical destruction of data-bearing media.",
          },
          {
            title: "Documented Chain of Custody",
            text: "Serialized tracking and reporting for every asset, providing an unbroken audit trail.",
          },
          {
            title: "Certified Processing",
            text: "Verifiable destruction certificates backed by our comprehensive R2v3 and ISO-certified processing standards.",
          },
        ],
      },
      {
        paragraphs: [
          `Whether you are decommissioning a secure lab or managing routine hardware refreshes, Integritrade ensures your retired assets never become a liability.`,
        ],
      },
    ],
    closingCallout: {
      linkText: "Discuss a secure defense ITAD project",
      linkHref: "/contact",
      after: " with Integritrade.",
    },
    projectScenarios: {
      intro:
        "Defense contractor ITAD projects require strict handling, limited access, and defensible documentation from pickup to final destruction.",
      items: [
        {
          title: "Secure Lab Decommission",
          description:
            "Retire lab workstations, servers, drives, and proprietary components through controlled logistics and documented destruction.",
        },
        {
          title: "Defense Hardware Refresh",
          description:
            "Support planned refreshes while protecting sensitive project files, credentials, engineering data, and contract information.",
        },
        {
          title: "CUI or FCI Device Retirement",
          description:
            "Apply secure handling, NIST-aligned sanitization, physical destruction when required, and audit-ready certificates.",
        },
        {
          title: "Supplier or Contractor Cleanout",
          description:
            "Manage controlled pickups and reporting for suppliers, subcontractors, and facilities handling sensitive technical data.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you support CMMC, CUI, and FCI-focused asset retirement?",
        answer:
          "Yes. We support defense contractor asset retirement with controlled logistics, NIST SP 800-88-aligned sanitization, physical destruction when required, chain-of-custody documentation, and verifiable certificates.",
      },
      {
        question: "Do you physically destroy hard drives and SSDs?",
        answer:
          "Yes. We can physically shred and destroy hard drives, solid-state drives, and other data-bearing media using industrial-grade destruction equipment.",
      },
      {
        question: "Do you provide certificates and audit trails?",
        answer:
          "Yes. We provide serialized tracking, chain-of-custody documentation, and verifiable certificates of destruction backed by certified processing standards.",
      },
    ],
  },
];

export const getIndustryBySlug = (slug: string) =>
  industriesData.find((item) => item.slug === slug);