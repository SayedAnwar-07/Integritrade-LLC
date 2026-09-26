import { StaticImageData } from "next/image";
import Education from "@/public/industries/education.webp";
import Finance from "@/public/industries/finance.webp";
import BusinessCorporate from "@/public/industries/business-corporate.webp";
import Healthcare from "@/public/industries/healthcare.webp";
import GovernmentITEquipment from "@/public/industries/government-IT-equipment.webp";
import LawFirmData from "@/public/industries/law-firm-data.webp";
import SecureRetailPOS from "@/public/industries/secure-retail-POS.webp";
import SecureDefenseServer from "@/public/industries/secure-defense-server.webp";

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
      link?: {
        text:string;
        href:string;
      };
    };

export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: BulletPoint[];
  cta?: { text: string; href: string };
  className?: string;
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
    imageAlt: "Chromebook and laptop fleet staged for a school technology refresh",
    eyebrow: "Education ITAD",
    title: "Education",
    description:
      "Retire school technology with security, clarity, and a better next step — for schools, districts, colleges, and universities across California and the Western U.S.",
    metaTitle: "Education ITAD & Electronics Recycling | Integritrade",
    metaDescription: "Secure electronics recycling and ITAD for schools and universities. FERPA-compliant Chromebook sanitization & serialized audit certificates. Get a quote.",
    content: [
      `Schools, districts, colleges, universities, and education technology teams manage large fleets of Chromebooks, laptops, tablets, desktops, servers, networking equipment, printers, MFPs, and classroom technology. When those devices are refreshed, reassigned, or retired, they may still hold student, family, staff, financial, research, or administrative information.`,
      `Integritrade helps education organizations manage retired technology through a documented process that supports secure pickup, client-specific data handling, asset recovery, electronics recycling, and clear final reporting that can support institutional FERPA and information-security requirements.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Schools, districts, colleges, universities, and education technology teams manage large fleets of Chromebooks, laptops, tablets, desktops, servers, networking equipment, printers, MFPs, and classroom technology. When those devices are refreshed, reassigned, or retired, they may still hold student, family, staff, financial, research, or administrative information.`,
          `Integritrade helps education organizations manage retired technology through a documented process that supports secure pickup, client-specific data handling, asset recovery, electronics recycling, and clear final reporting that can support institutional FERPA and information-security requirements.`,
        ],
      },
      {
        heading: "Built for education device fleets",
        paragraphs: [
          `A school technology refresh is not just a pallet of old computers. It can include student Chromebooks, faculty laptops, classroom desktops, tablets, mobile carts, servers, wireless equipment, network hardware, copiers, MFPs, displays, and loose data-bearing media. Each asset needs the right approved outcome.`,
          `Integritrade supports education organizations with secure IT asset disposition, data sanitization, physical data destruction, direct buyback, revenue-share remarketing, reuse evaluation, parts recovery, and qualified downstream recycling for truly end-of-life material.`,
        ],
      },
      {
        heading: "Where each asset can go",
        bullets: [
          {
            title: "1:1 Chromebook or tablet refresh",
            text: "Pickup, asset sorting, approved data handling, testing, reuse evaluation, and final reporting.",
          },
          {
            title: "Student, faculty, and staff data protection",
            text: "Client-approved data sanitization or physical destruction, with serialized Certificates of Erasure or Certificates of Destruction based on the service performed.",
          },
          {
            title: "Technology budget recovery",
            text: "Direct buyback or revenue-share remarketing for eligible Chromebooks, laptops, MacBooks, tablets, servers, networking equipment, and accessories.",
          },
          {
            title: "Summer, break, or campus scheduling",
            text: "Scheduled pickup and processing coordination designed around instructional calendars and facility access.",
          },
          {
            title: "End-of-life equipment",
            text: "Qualified downstream recycling for non-recoverable or client-designated electronics.",
          },
        ],
      },
      {
        heading: "Secure data handling for more than laptops",
        paragraphs: [
          `Education technology can hold sensitive information in more places than IT teams expect. In addition to laptops, servers, tablets, and phones, data may be found in internal SSDs, NVMe storage, removable media, copier and MFP hard drives, and devices that were previously marked for recycling.`,
          `Integritrade applies the institution's approved data-handling requirements to each project. Where a client does not specify a method, Integritrade follows its documented NIST SP 800-88 Rev. 2-aligned sanitization process, with physical destruction available when required.`,
          `On-site capabilities include PXE-based high-throughput erasure, HDD degauss-plus-shred processing for applicable magnetic hard drives, and 2 mm physical destruction for SSD and NVMe media. Devices that do not complete approved erasure can be routed to the appropriate client-approved physical-destruction path.`,
        ],
      },
      {
        heading: "Keep visibility after pickup",
        paragraphs: [
          `TraceTech is Integritrade's proprietary ITAD client platform, included at no additional cost for clients. Authorized education teams can follow project and asset status, reconcile school asset tags with Integritrade tracking tags, manage service requests or amendments, and retrieve available Certificates of Erasure, serialized Certificates of Destruction, manifests, and project records.`,
          `TraceTech can also associate approved project or asset-level instructions with the relevant record and display them when an asset is scanned. This helps maintain the selected workflow across a mixed fleet, whether the approved outcome is erasure, physical destruction, buyback, remarketing, reuse evaluation, or recycling.`,
        ],
        cta: { text: "Explore TraceTech", href: "/tracetech/" },
      },
      {
        heading: "A California facility for education projects at scale",
        paragraphs: [
          `Integritrade operates from a dedicated 31,000 sq ft ITAD facility at 944 S. Topeka Ave, Fresno, CA. The controlled-access, 24/7 video-monitored facility includes secure staging, industrial pallet racking, dock access, powered lift equipment, and background-checked personnel.`,
          `The facility can securely stage and store more than 1 million pounds of retired IT equipment and electronics each month. Integritrade supports individual campuses, district-wide refreshes, college and university technology programs, regional collections, and multi-location education projects throughout California and the Western United States.`,
          `Integritrade maintains R2v3, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications. These credentials support documented quality, environmental, occupational health and safety, and information-security management systems within the applicable certified scope.`,
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
        question: "Can Integritrade handle Chromebook, laptop, and tablet refreshes for schools?",
        answer:
          "Yes. Integritrade supports education device fleets including Chromebooks, laptops, MacBooks, tablets, desktops, servers, networking equipment, printers, MFPs, mobile carts, and related accessories. The project can include secure pickup, asset sorting, approved data handling, testing, value recovery, and final disposition reporting.",
      },
      {
        question: "Can education projects be scheduled during summer break or other school closures?",
        answer:
          "Yes. Integritrade can coordinate pickup and project activity around summer break, semester breaks, campus access rules, and other school-calendar requirements. Scheduling should be discussed during the project evaluation so site access, quantities, documentation, and custody-transfer requirements can be planned correctly.",
      },
      {
        question: "How does Integritrade protect student and staff data on retired devices?",
        answer:
          "Integritrade applies the institution's approved data-handling requirements to the project. This can include NIST SP 800-88 Rev. 2-aligned sanitization for eligible reuse pathways or physical destruction when required. Data-bearing components are identified before the asset is directed to reuse, value recovery, or recycling.",
      },
      {
        question: "Can schools recover value from retired technology?",
        answer:
          "Potentially. Integritrade evaluates eligible Chromebooks, laptops, MacBooks, tablets, servers, storage, networking equipment, and accessories for direct buyback or revenue-share remarketing. Eligibility depends on age, configuration, condition, successful approved data handling, corporate-lock status, client requirements, and market demand.",
      },
      {
        question: "What documentation does Integritrade provide for education ITAD projects?",
        answer:
          "Available documentation can include chain-of-custody records, manifests, serialized Certificates of Erasure, serialized Certificates of Destruction, project reporting, asset records, and final disposition information based on the work performed and agreed project scope. Authorized users can retrieve available records through TraceTech.",
      },
      {
        question: "Why is Integritrade a strong option for schools, districts, and universities?",
        answer:
          "Integritrade combines a 31,000 sq ft controlled-access and video-monitored facility, on-site data sanitization and physical-destruction capability, R2v3 plus ISO 9001, 14001, 45001, and 27001 certifications, background-checked personnel, value-first disposition planning, and TraceTech visibility. The company supports education organizations throughout California and the Western United States.",
      },
    ],
  },

  {
    slug: "finance",
    image: Finance,
    imageAlt: "Financial professionals reviewing data on screens",
    eyebrow: "Finance ITAD",
    title: "Finance",
    description:
      "Supporting banks, insurance firms, and investment teams with controlled asset retirement, documented handling, and end-of-life hardware processing across regulated environments.",
    metaTitle: "Financial ITAD & Banking Data Destruction | Integritrade",
    metaDescription: "GLBA & SOX compliant ITAD and NIST 800-88 data destruction for banks and financial institutions. Serialized audit CODs & secure custody. Request a quote.",
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
    imageAlt: "Enterprise laptops and servers staged for a corporate IT refresh",
    eyebrow: "Business & Corporate ITAD",
    title: "Business & Corporate",
    description:
      "Retire corporate technology with security, visibility, and a better recovery outcome — across California and the Western U.S.",
    metaTitle: "Corporate ITAD & NIST Data Destruction | Integritrade",
    metaDescription: "Protect corporate data while recovering fleet value. Certified ITAD, NIST 800-88 sanitization, and full serialized chain-of-custody reporting. Get a quote.",
    content: [
      `Retired laptops, desktops, servers, storage, networking equipment, phones, tablets, printers, and office technology can still hold sensitive data and recoverable value. Integritrade helps organizations move those assets through a documented IT asset disposition process built around secure pickup, client-specific handling instructions, data sanitization or physical destruction, value recovery, and qualified downstream recycling.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Retired laptops, desktops, servers, storage, networking equipment, phones, tablets, printers, and office technology can still hold sensitive data and recoverable value. Integritrade helps organizations move those assets through a documented IT asset disposition process built around secure pickup, client-specific handling instructions, data sanitization or physical destruction, value recovery, and qualified downstream recycling.`,
          `R2v3 Certified · ISO 9001, 14001, 45001 & 27001 · California & Western U.S. Coverage`,
        ],
      },
      {
        heading: "One project. The right disposition for every asset.",
        paragraphs: [
          `A corporate IT refresh is rarely all recycling or all resale. A single project may contain laptops ready for buyback, servers requiring erasure before remarketing, selected drives that require physical destruction, and truly end-of-life material that belongs in qualified downstream recycling.`,
          `Integritrade applies the client's approved requirements to the asset or project. Eligible devices can be evaluated for direct buyback, revenue-share remarketing, reuse, donation, or parts recovery. When client requirements call for data destruction, Integritrade provides NIST SP 800-88 Rev. 2-aligned sanitization and physical destruction options, including HDD degauss-plus-shred processing and 2 mm physical destruction for SSD and NVMe media.`,
        ],
      },
      {
        heading: "What the project needs",
        bullets: [
          {
            title: "Secure technology retirement",
            text: "Pickup, chain of custody, asset identification, project requirements, approved data handling, and final documentation.",
          },
          {
            title: "Data destruction",
            text: "Logical sanitization for eligible reuse pathways or physical destruction where required, with serialized Certificates of Erasure or Certificates of Destruction based on the service performed.",
          },
          {
            title: "Equipment buyback and recovery",
            text: "Direct buyback or revenue-share remarketing for eligible laptops, MacBooks, servers, networking equipment, GPUs, storage, tablets, phones, and accessories.",
          },
          {
            title: "End-of-life electronics recycling",
            text: "Qualified downstream recycling for non-recoverable or client-designated e-scrap.",
          },
        ],
      },
      {
        heading: "More visibility after pickup",
        paragraphs: [
          `TraceTech is Integritrade's proprietary ITAD client platform, included at no additional cost for clients. Authorized users can follow project and asset status, reconcile internal asset tags with Integritrade tracking tags, manage service requests or project amendments, and retrieve available documentation without relying on scattered spreadsheets and manual email requests.`,
          `TraceTech can also surface client-approved requirements to Integritrade technicians when an asset is scanned. That helps keep the selected workflow visible throughout processing, whether the approved outcome is erasure, physical destruction, remarketing, reuse evaluation, or recycling.`,
        ],
        cta: { text: "Explore TraceTech", href: "/tracetech/" },
      },
      {
        heading: "Built for corporate scale",
        paragraphs: [
          `Integritrade operates from a dedicated 31,000 sq ft ITAD facility at 944 S. Topeka Ave, Fresno, CA. The controlled-access, 24/7 video-monitored facility includes secure staging, industrial pallet racking, dock access, powered lift equipment, and background-checked personnel.`,
          `The facility can securely stage and store more than 1 million pounds of retired IT equipment and electronics each month. Integritrade supports office refreshes, multi-site collections, server-room and data-center projects, equipment buyback, lease-return preparation, remote recovery, returns processing, and electronics recycling for organizations throughout California and the Western United States.`,
          `Integritrade maintains R2v3, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications. These credentials support documented quality, environmental, occupational health and safety, and information-security management systems within the applicable certified scope.`,
        ],
      },
    ],
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
        question: "What corporate ITAD services does Integritrade provide?",
        answer:
          "Integritrade provides IT asset disposition, secure data destruction, electronics recycling, corporate IT equipment buyback, revenue-share remarketing, asset recovery, remote recovery, lease-return preparation, returns processing, and data-center decommissioning support.",
      },
      {
        question: "Can Integritrade handle office refreshes and multi-location ITAD projects?",
        answer:
          "Yes. Integritrade supports single-site, regional, and multi-location projects involving laptops, desktops, MacBooks, servers, storage, networking equipment, mobile fleets, printers, copiers, accessories, and loose data-bearing media.",
      },
      {
        question: "Can Integritrade apply different handling instructions to assets in the same project?",
        answer:
          "Yes. Integritrade can apply different client-approved outcomes in the same project. One asset group may be sanitized for remarketing, specified media may be physically destroyed, and non-recoverable material may move to qualified downstream recycling.",
      },
      {
        question: "Does Integritrade provide Certificates of Erasure and Certificates of Destruction?",
        answer:
          "Yes. Successful approved logical sanitization can generate serialized Certificates of Erasure. Physical data-destruction services can generate serialized Certificates of Destruction. Authorized users can retrieve available batch or individual documentation through TraceTech, based on the agreed project scope.",
      },
      {
        question: "Can Integritrade help sell retired corporate IT equipment?",
        answer:
          "Yes. Integritrade evaluates eligible laptops, desktops, MacBooks, servers, storage, networking equipment, GPUs, tablets, phones, and accessories for direct buyback or revenue-share remarketing. Eligibility depends on age, configuration, condition, successful approved data handling, corporate-lock status, client requirements, and market demand.",
      },
      {
        question: "Why is Integritrade a strong option for business and corporate ITAD?",
        answer:
          "Integritrade combines a 31,000 sq ft controlled-access and video-monitored facility, on-site data sanitization and physical-destruction capability, R2v3 plus ISO 9001, 14001, 45001, and 27001 certifications, background-checked personnel, value-first disposition planning, and TraceTech client visibility. The company supports organizations throughout California and the Western United States.",
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
    eyebrow: "Healthcare ITAD",
    metaTitle: "Healthcare ITAD & HIPAA Data Destruction | Integritrade",
    metaDescription: "HIPAA-compliant ITAD & NIST 800-88 data destruction for healthcare networks. Safeguard ePHI with unbroken chain of custody & serialized CODs. Get a quote.",
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
        question: "What healthcare ITAD services does Integritrade provide?",
        answer:
          "Integritrade provides healthcare IT asset disposition services for hospitals, medical groups, clinics, dental offices, laboratories, imaging centers, long-term-care providers, and other healthcare organizations. Services can include secure pickup, chain-of-custody documentation, asset inventory, data sanitization, physical data destruction, IT equipment buyback, remarketing, responsible electronics recycling, and final project reporting.",
      },
      {
        question: "Why should a healthcare organization use a certified ITAD provider?",
        answer:
          "Healthcare organizations should choose an ITAD provider with independently audited management systems and documented data-security controls because retired equipment may retain protected health information, billing records, credentials, imaging data, employee records, and other confidential information. Integritrade is R2v3 certified and maintains ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications. These certifications support structured controls for quality, environmental management, health and safety, information security, and qualified downstream vendor management within the applicable certification scope.",
      },
      {
        question:
          "Can Integritrade handle devices that may contain PHI or other patient information?",
        answer:
          "Yes. Integritrade manages projects involving equipment that may contain PHI, ePHI, PII, credentials, patient images, billing information, or other confidential records. Each project can be processed according to the healthcare organization’s approved data-handling requirements. When the client does not designate a method, Integritrade follows its documented NIST 800-88-based sanitization process, with physical destruction available when required by the device, media type, project scope, or client instruction.",
      },
      {
        question:
          "Does Integritrade sign a Business Associate Agreement for healthcare ITAD projects?",
        answer:
          "A Business Associate Agreement may be appropriate when the scope of work and the parties’ responsibilities require one. Healthcare organizations should discuss BAA requirements, project scope, data-handling instructions, and documentation expectations with Integritrade before service begins so the correct contractual and operational controls can be confirmed.",
      },
      {
        question:
          "What happens if a healthcare device cannot be erased successfully?",
        answer:
          "When a data-bearing device does not complete approved logical sanitization, Integritrade routes the device or media to the approved physical-destruction pathway. Integritrade uses 2 mm shredding for SSD and NVMe media. Hard disk drives may be degaussed and shredded. The final method is selected according to the client’s approved requirements, the media technology, and the project scope.",
      },
      {
        question:
          "Does Integritrade only handle computers, or can it process printers, copiers, and MFPs too?",
        answer:
          "Integritrade can process printers, copiers, multifunction printers, scanners, and other office electronics in addition to computers and servers. These devices deserve attention because internal storage, scanner beds, document feeders, paper trays, and removable media can create data or document-control risks. Integritrade can include inspection, data-bearing component review, approved sanitization or destruction, and electronics-recycling coordination in the project plan.",
      },
      {
        question:
          "Can Integritrade support a healthcare IT refresh, office closure, or multi-site decommissioning project?",
        answer:
          "Yes. Integritrade supports single-site and multi-location healthcare technology retirement projects across California. The 31,000 sq ft controlled-access, video-monitored Fresno ITAD facility supports secure staging, processing, and project coordination for workstation refreshes, server-room cleanouts, storage-room clearances, clinic relocations, office closures, and larger decommissioning programs.",
      },
      {
        question:
          "How can a healthcare organization track assets after pickup?",
        answer:
          "Integritrade provides TraceTech, its proprietary ITAD tracking platform, to give authorized clients visibility after pickup. Depending on project scope and permissions, clients can review processing status, manage future service requests, access available Certificates of Erasure and serialized Certificates of Destruction, and reconcile customer asset tags with Integritrade tracking tags. TraceTech can also surface client-approved handling instructions when an asset is scanned.",
      },
      {
        question:
          "Can retired healthcare IT equipment generate value instead of becoming a recycling cost?",
        answer:
          "Eligible laptops, desktops, servers, storage equipment, networking hardware, tablets, phones, and other reusable technology can be evaluated for direct buyback, revenue-share remarketing, reuse, or parts recovery before materials recycling is considered. Integritrade evaluates value-recovery opportunities alongside the healthcare organization’s data-security, disposition, and compliance requirements. Not every asset qualifies for resale or revenue recovery, but a value-first evaluation helps avoid treating usable technology as scrap by default.",
      },
      {
        question:
          "What documentation can Integritrade provide for a healthcare technology-retirement project?",
        answer:
          "Available documentation may include chain-of-custody records, mutually confirmed piece counts, asset manifests, data-erasure records, Certificates of Erasure, serialized Certificates of Destruction, disposition reporting, and applicable photo or video documentation when included in the project scope. The documentation package is aligned to the selected services and client requirements.",
      },
    ],
  },

  {
    slug: "legal-professional-services",
    image: LawFirmData,
    imageAlt: "Secure office technology and asset cart in a professional services firm",
    eyebrow: "Legal & Professional Services ITAD",
    title: "Legal & Professional Services",
    description:
      "Retire sensitive office technology without losing control of confidential information — for law firms and professional service organizations across California and the Western U.S.",
    metaTitle: "Law Firm ITAD & Legal Data Destruction | Integritrade",
    metaDescription: "Certified ITAD & NIST data destruction for law practices. Protect client privilege with strict chain of custody and serialized CODs. Request a quote.",
    content: [
      `Law firms, accounting practices, consulting groups, advisory firms, architects, and other professional-service organizations manage technology that can hold client files, financial records, privileged communications, case materials, contracts, research, and proprietary work product.`,
      `When that technology is retired, moved, replaced, returned, or sold, Integritrade helps keep it inside a documented IT asset disposition process. The process supports secure pickup, chain of custody, client-specific handling instructions, data sanitization or physical destruction, value recovery, qualified downstream recycling, and project reporting.`,
    ],
    contentSections: [
      {
        paragraphs: [
          `Law firms, accounting practices, consulting groups, advisory firms, architects, and other professional-service organizations manage technology that can hold client files, financial records, privileged communications, case materials, contracts, research, and proprietary work product.`,
          `When that technology is retired, moved, replaced, returned, or sold, Integritrade helps keep it inside a documented IT asset disposition process. The process supports secure pickup, chain of custody, client-specific handling instructions, data sanitization or physical destruction, value recovery, qualified downstream recycling, and project reporting.`,
        ],
      },
      {
        heading: "Confidential data can be hidden in more places than expected",
        paragraphs: [
          `Laptops, desktops, servers, phones, tablets, and loose hard drives are obvious data risks. But retired office technology can also contain sensitive material in copier and MFP hard drives, short M.2 storage modules, embedded flash, removable media, and documents left in scanner beds or paper trays.`,
          `Integritrade applies the client's approved data-handling requirements to each project. Where a client does not specify a method, Integritrade follows its documented NIST SP 800-88 Rev. 2-aligned sanitization process, with physical destruction available when required.`,
          `On-site capabilities include PXE-based high-throughput erasure, HDD degauss-plus-shred processing for applicable magnetic hard drives, and 2 mm physical destruction for SSD and NVMe media. Devices that do not complete approved sanitization can be routed to the appropriate client-approved physical-destruction path.`,
        ],
      },
      {
        heading: "One office project. Multiple approved outcomes.",
        paragraphs: [
          `A law-firm relocation, practice expansion, technology refresh, partner transition, or records-management project can include assets with very different requirements. Current laptops and servers may be eligible for secure erasure and remarketing, specified media may require physical destruction, office copiers may need internal data-bearing components identified, and truly end-of-life electronics may need qualified downstream recycling.`,
          `Integritrade helps legal and professional-service clients direct each category through the right approved path.`,
        ],
        bullets: [
          {
            title: "Confidential technology retirement",
            text: "Scheduled pickup, custody-transfer records, client-approved handling instructions, secure data workflows, and final documentation.",
          },
          {
            title: "Data sanitization or physical destruction",
            text: "NIST SP 800-88 Rev. 2-aligned sanitization for eligible reuse, plus physical-destruction options where the project requires them.",
          },
          {
            title: "Firm relocation or office closure",
            text: "Secure removal and processing of employee devices, servers, phones, printers, MFPs, networking equipment, and accumulated e-waste.",
          },
          {
            title: "Value recovery",
            text: "Direct buyback or revenue-share remarketing for eligible laptops, desktops, MacBooks, servers, storage, networking equipment, GPUs, phones, tablets, and accessories.",
          },
          {
            title: "End-of-life equipment",
            text: "Qualified downstream recycling for non-recoverable or client-designated material.",
          },
        ],
      },
      {
        heading: "Visibility and documentation after pickup",
        paragraphs: [
          `TraceTech is Integritrade's proprietary ITAD client platform, included at no additional cost for Integritrade clients. Authorized users can follow applicable project and asset statuses, reconcile client asset tags with Integritrade tracking tags, manage service requests or project amendments, and retrieve available documentation without relying on disconnected emails or spreadsheets.`,
          `Available documentation can include chain-of-custody records, manifests, serialized Certificates of Erasure, serialized Certificates of Destruction, and project reporting based on the services performed and agreed scope. TraceTech can also associate client-approved requirements with the project or asset record and display them when the asset is scanned.`,
        ],
        cta: { text: "Explore TraceTech", href: "/tracetech/" },
      },
      {
        heading: "Built for serious office technology projects",
        paragraphs: [
          `Integritrade operates from a dedicated 31,000 sq ft ITAD facility at 944 S. Topeka Ave, Fresno, CA. The controlled-access, 24/7 video-monitored facility includes secure staging, industrial pallet racking, dock access, powered lift equipment, and background-checked personnel.`,
          `The facility can securely stage and store more than 1 million pounds of retired IT equipment and electronics each month. Integritrade supports secure office IT retirement, technology refreshes, firm relocations, regional and multi-site collections, data destruction, corporate equipment buyback, and electronics recycling throughout California and the Western United States.`,
          `Integritrade maintains R2v3, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications. These credentials support documented quality, environmental, occupational health and safety, and information-security management systems within the applicable certified scope.`,
        ],
      },
    ],
    projectScenarios: {
      intro:
        "Legal and professional services ITAD projects usually involve confidentiality, office transitions, and strict documentation expectations.",
      items: [
        {
          title: "Firm-Wide Office Refresh",
          description:
            "Retire desktops, laptops, monitors, printers, servers, and storage devices with documented handling and secure data destruction.",
        },
        {
          title: "Firm Relocation or Office Consolidation",
          description:
            "Clear end-of-life equipment during moves, consolidations, and office cleanouts while protecting confidential client data.",
        },
        {
          title: "Partner Departure or Practice Transition",
          description:
            "Securely retire or process devices tied to partner transitions, legacy matters, client records, and archived files.",
        },
        {
          title: "Confidential Device Disposal",
          description:
            "Support secure disposal of computers, drives, phones, printers, scanners, and other office equipment that may contain privileged data.",
        },
      ],
    },
    faqs: [
      {
        question: "Can Integritrade support secure IT asset disposition for law firms and professional-service organizations?",
        answer:
          "Yes. Integritrade supports law firms, accounting firms, consulting practices, financial advisers, architects, and other professional-service organizations with secure pickup, asset tracking, approved data handling, data destruction, equipment buyback, value recovery, and qualified downstream recycling.",
      },
      {
        question: "What office equipment should law firms and professional-service organizations treat as a data risk?",
        answer:
          "Organizations should consider laptops, desktops, servers, phones, tablets, loose drives, storage devices, printers, copiers, MFPs, removable media, and devices with embedded or short-form-factor storage. Integritrade can help identify the relevant asset categories before a project begins.",
      },
      {
        question: "Can Integritrade handle different data-destruction requirements within one office project?",
        answer:
          "Yes. Integritrade can apply different client-approved outcomes in the same project. For example, eligible laptops may be sanitized for remarketing, specific media may be physically destroyed, and non-recoverable equipment may move to qualified downstream recycling.",
      },
      {
        question: "Does Integritrade provide Certificates of Erasure and Certificates of Destruction?",
        answer:
          "Yes. Successful approved logical sanitization can generate serialized Certificates of Erasure. Physical data-destruction services can generate serialized Certificates of Destruction. Authorized users can retrieve available batch or individual records through TraceTech, based on the agreed scope.",
      },
      {
        question: "Can Integritrade help recover value from retired law-firm or office IT equipment?",
        answer:
          "Yes. Integritrade evaluates eligible laptops, desktops, MacBooks, servers, storage, networking equipment, GPUs, phones, tablets, and accessories for direct buyback or revenue-share remarketing. Eligibility depends on equipment age, configuration, condition, successful approved data handling, lock status, client requirements, and market demand.",
      },
      {
        question: "Why is Integritrade a strong option for legal and professional-services ITAD?",
        answer:
          "Integritrade combines a 31,000 sq ft controlled-access and video-monitored facility, on-site data sanitization and physical-destruction capability, R2v3 plus ISO 9001, 14001, 45001, and 27001 certifications, background-checked personnel, value-first disposition planning, and TraceTech client visibility. The company supports organizations throughout California and the Western United States.",
      },
    ],
  },

  {
    slug: "retail-hospitality",
    image: SecureRetailPOS,
    imageAlt: "Retail and hospitality technology prepared for secure recycling",
    eyebrow: "Retail & Hospitality ITAD",
    title: "Retail & Hospitality",
    description:
      "Secure retirement for POS refreshes, store closures, hotel upgrades, franchise rollouts, and customer-data devices.",
    metaTitle: "Retail ITAD & POS System Data Destruction | Integritrade",
    metaDescription: "PCI-DSS compliant retail ITAD and POS data destruction. Secure back-office server retirement, unbroken chain of custody, and serialized CODs. Get a quote.",
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
    eyebrow: "Government & Public Sector ITAD",
    title: "Government & Public Sector",
    description:
      "Secure and transparent ITAD for agencies, municipalities, public authorities, courts, and public institutions.",
    metaTitle: "Federal & State Government ITAD Services | Integritrade",
    metaDescription: "NIST 800-88 compliant ITAD and media destruction for state and federal agencies. Unbroken chain of custody & serialized audit CODs. Request a quote.",
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
            text: "Certificates of destruction and responsible R2v3-certified recycling to meet environmental sustainability goals.",
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
    eyebrow: "Defense Contractor ITAD",
    title: "Defense Contractors",
    description:
      "High-security ITAD for defense contractors, suppliers, secure labs, hardware refreshes, and sensitive project equipment.",
    metaTitle: "Defense Contractor ITAD & Data Destruction | Integritrade",
    metaDescription: "NIST 800-88 compliant ITAD & witnessed destruction for defense contractors. Defend CUI data with strict custodial chain & serialized CODs. Request a quote.",
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