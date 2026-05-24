import { ServiceArea } from "./types/serviceAreaTypes";
import hardDriveShredding from "@/public/services/serviceArea/driveShredding.jpeg";
import dataDestruction from "@/public/services/serviceArea/dataDestruction.png";
import itAssetDisposition from "@/public/services/serviceArea/itAssetDisposition(ITAD).jpeg";
import electronicRecycling from "@/public/services/serviceArea/electronicRecycling.jpeg";
import assetRecovery from "@/public/services/serviceArea/assetRecovery.png";

export const cupertinoData: ServiceArea = {
  slug: "cupertino",

  name: "Cupertino",

  tagline: "Certified Electronics Disposal, Secure Data Destruction & High-Volume IT Asset Disposition in Cupertino, CA",

  metaTitle: "E-Waste Recycling in Cupertino, CA | Tech Campus ITAD & Data Destruction",

  metaDescription: "Need e-waste recycling in Cupertino? IntegriTrade LLC handles secure data destruction, server decommissioning, and certified electronics recycling for Silicon Valley tech campuses, fully compliant with California law.",

  intro: "IntegriTrade LLC provides certified electronics disposal and IT asset disposition services in Cupertino, CA, supporting technology companies, hardware R&D labs, and corporate campuses as they retire and refresh equipment at scale. Our work spans secure data destruction, hard drive shredding, high-volume server decommissioning, and asset value recovery on surplus IT hardware. Every project runs on a tracked chain of custody, meets full California regulatory requirements, and ends with audit-ready documentation built for the compliance demands of Silicon Valley enterprises.",

  services: [
    {
      slug: "e-waste-recycling",
      title: "Cupertino E-Waste Recycling | Silicon Valley IT Asset Disposition",
      shortDescription:
        "Certified e-waste recycling and server decommissioning for tech companies in the Cupertino area. Safe, legal, and fully documented electronics disposal.",
      icon: "Monitor",

      metaTitle:
        "E-waste Recycling Cupertino | Certified Tech Campus Electronics Recycling",

      metaDescription:
        "Need e-waste recycling in Cupertino? IntegriTrade LLC provides secure data destruction and environmentally responsible electronics recycling for Silicon Valley businesses, in compliance with California law.",

      image: electronicRecycling,

      heroHeading:
        "Cupertino Premium E-Waste Recycling & Server Decommissioning",

      heroSubheading:
        "We deliver enterprise-grade e-waste solutions for technology companies in Cupertino, one of Silicon Valley's most concentrated hardware and software hubs. From single-rack refreshes to full data-center decommissions, every device leaves your campus through a documented, environmentally compliant recycling chain.",

      ctaText: "Get a Free Quote",

      details: [
        {
          heading: "High-volume e-waste management for Cupertino's technology campuses",
          body:
            "Cupertino is defined by its technology sector, home to Apple's headquarters along with a dense cluster of semiconductor, hardware, and software firms across the De Anza corridor and Santa Clara County. Companies here cycle through laptops, workstations, servers, networking gear, and prototype hardware faster than almost any market in the country, which generates significant volumes of retired electronics. Under California's e-waste regulations, none of this equipment can be sent to a landfill, and the scale at which Cupertino businesses refresh their fleets makes a structured recycling partner essential rather than optional. Our service removes toxic components, recovers valuable metals for reuse, and keeps every retired asset out of the waste stream, strengthening the environmental record your organization reports to stakeholders and regulators."
        },
        {
          heading: "Secure Data Destruction and California Legal Compliance",
          body:
            "For Cupertino technology companies, the data on a retired device is often more sensitive than the hardware itself, ranging from source code and prototype designs to customer records and proprietary research. If that data is not destroyed correctly before recycling, the result can be intellectual property loss, regulatory exposure, and serious compliance violations. California's Department of Toxic Substances Control (DTSC) and CalRecycle continue to tighten enforcement, with added scrutiny on devices that carry embedded batteries and storage media. We destroy data to the NIST 800-88 standard and issue a Certificate of Destruction on every project, giving your security and legal teams verifiable proof that each drive was handled in full compliance with California law."
        },
        {
          heading: "Our specialty in Silicon Valley IT asset disposition",
          body:
            "As an experienced ITAD provider working across the South Bay, we understand the logistics of Cupertino's corporate campuses, secured facilities, and high-density server rooms. Our goal is to make large-scale retirements simple by handling scheduling, on-site collection, and decommissioning with minimal disruption to your operations. We do more than haul equipment away, we evaluate working assets for resale and recovery value so your organization recoups a return on surplus hardware instead of paying to dispose of it. The result is a transparent process that lowers your disposal costs, reduces legal and environmental risk, and reinforces the sustainability commitments that customers, investors, and employees increasingly expect. We tailor each engagement to the scale of the project, from a single department refresh to a multi-floor decommission."
        },
        {
          heading: "Why Choose IntegriTrade LLC for Cupertino Recycling?",
          body:
            "We provide reliable and certified recycling services across the Cupertino area, with every step designed around enterprise security needs and California environmental law. Here is what sets our service apart:",
          bullets: [
            "R2v3 Certified Process: Recycling that meets the leading international standard for responsible electronics handling.",
            "Secure Chain of Custody: Every device is tracked by serial number from pickup through final destruction.",
            "On-Site & Off-Site Options: We can decommission and shred at your Cupertino facility or at our processing floor, based on your security policy.",
            "Audit-Ready Reporting: A full settlement report and destruction certificate for your compliance, audit, and tax records."
          ]
        },
        {
          heading: "Our Advanced Work Process",
          body:
            "Our process is structured for enterprise-level security and full traceability. We begin by collecting equipment from your Cupertino office, lab, or server room and producing a complete audited inventory. Data-bearing media (HDD/SSD) is then separated from each unit and physically destroyed in industrial-grade shredders. The remaining components are broken down into plastics, glass, and metals, and precious metals such as copper and gold are forwarded to certified refineries for reuse. At the close of every project we issue a final Certificate of Destruction, giving your organization documented legal protection and complete transparency over each stage of the asset's retirement."
        },
        {
          heading: "Common Questions About Cupertino E-Waste Recycling",
          body:
            "Answers to frequently asked questions about certified electronics disposal, secure data destruction, and IT asset disposition services in Cupertino, CA.",
          qna: [
            {
              question: "Can you handle large server and data-center decommissions in Cupertino?",
              answer:
                "Yes. High-volume server and rack decommissioning is a core part of our Silicon Valley work. We schedule around your operations, manage on-site teardown and chain-of-custody tracking, and document every unit from removal through final processing."
            },
            {
              question: "Is there a risk of data theft during recycling?",
              answer:
                "No. All data-bearing media is shredded in industrial-grade shredders before any recycling takes place, and we issue a Certificate of Destruction for every project, ensuring your sensitive data and intellectual property are fully protected."
            }
          ]
        },
        {
          heading: "Conclusion",
          body:
            "In a technology capital like Cupertino, where hardware is retired and refreshed constantly, responsible e-waste management is both an environmental duty and a business safeguard. The right disposal partner protects your organization's data and intellectual property while keeping you fully compliant with California regulations. IntegriTrade LLC delivers secure, certified, and scalable recycling solutions built for the demands of Silicon Valley enterprises. Clear out the surplus and end-of-life equipment sitting in your storage and server rooms today, and partner with us to keep Cupertino's environment cleaner. Our team is ready to design a service plan around your project, get your secure recycling quotation today."
        }
      ]
    }
  ]
};