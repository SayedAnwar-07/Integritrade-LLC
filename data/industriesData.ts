import { StaticImageData } from "next/image";
import Education from "@/public/industries/education.jpeg";
import Finance from "@/public/industries/finance.jpeg";
import BusinessCorporate from "@/public/industries/business-corporate.jpeg";
import Healthcare from "@/public/industries/healthcare.png";

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
    title: "Education Industry",
    description:
      "Helping schools, colleges, and universities manage device refreshes, student data risk, and surplus technology with clear documentation and value recovery.",
    metaTitle: "ITAD Services for Education | Secure School & University IT Disposal",
    metaDescription:
      "Secure IT asset disposition for schools and universities. FERPA-compliant data destruction, device recycling, and asset recovery for educational institutions.",
    content: [
      `For the Education industry, IntegriTrade LLC provides essential ITAD services that address the unique challenges of modern academic environments. Schools and universities today manage massive inventories of devices, from student Chromebooks to high-end research servers, all of which require a secure end-of-life strategy. We specialize in large-scale technology refreshes, helping educational institutions clear out outdated hardware while ensuring that student and faculty data is permanently destroyed in compliance with FERPA regulations. Our certified data sanitization process guarantees that sensitive academic records and personal information never leave the campus in a recoverable format.`,

      `Beyond security, we understand that education budgets are often under immense pressure. Our remarketing program allows schools to recoup significant value from their retired assets, turning old tech into a new revenue stream that can be reinvested into classroom innovation. We also support government-funded educational initiatives by providing detailed reporting and a transparent chain of custody required for public audits. By handling logistics, data security, and environmentally responsible recycling, IntegriTrade LLC empowers educators to focus on learning while we manage the lifecycle of their digital infrastructure with a zero-landfill commitment.`,
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
    title: "Finance Industry",
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
    title: "Business & Corporate Industry",
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
    title: "Healthcare Industry",
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

      `Integritrade provides secure education ITAD services for schools, colleges, universities, districts, libraries, and training institutions that need to retire technology without risking student data, faculty records, research files, or public accountability. Educational environments manage large volumes of Chromebooks, laptops, desktops, tablets, servers, drives, printers, networking equipment, classroom electronics, and surplus devices that may still contain sensitive information long after they are removed from service. We help education teams turn device refreshes, campus cleanouts, lab upgrades, and multi-site removals into a controlled process built around secure pickup, documented chain of custody, NIST SP 800-88-aligned sanitization options, responsible recycling, asset recovery, and final reporting,`,

      `FERPA-related data risk does not disappear when a device leaves a classroom, office, lab, or storage room. If retired equipment is lost, resold, donated, recycled, or discarded without proper data handling, student records, staff information, login credentials, financial documents, and institutional data may still be exposed. Integritrade helps close that gap with data security options designed for education environments. For eligible devices, software-based erasure is available to sanitize media while preserving resale value, and digitally signed certificates of destruction or sanitization can be provided to support FERPA documentation, public audits, grant-funded technology records, board reporting, and internal compliance files. When software erasure is not appropriate because of device condition, media type, district policy, research sensitivity, or data risk, physical destruction is available for virtually all data-bearing media devices.`,

      `With Integritrade, education asset retirement becomes more than an electronics pickup; it becomes a defensible, budget-conscious, audit-ready ITAD program. We help protect student privacy, reduce data breach exposure, clear valuable storage space, recover value from reusable equipment, and responsibly recycle end-of-life technology. Whether your institution is refreshing student devices, replacing staff computers, decommissioning servers, clearing surplus inventory, upgrading labs, or coordinating removals across multiple campuses, Integritrade gives your team a secure and well-documented path from pickup to final certificate.`,
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
];

export const getIndustryBySlug = (slug: string) =>
  industriesData.find((item) => item.slug === slug);