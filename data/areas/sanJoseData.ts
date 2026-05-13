import { ServiceArea } from "./types/serviceAreaTypes";
import hardDriveShredding from "@/public/services/serviceArea/driveShredding.jpeg";
import dataDestruction from "@/public/services/serviceArea/dataDestruction.png";
import itAssetDisposition from "@/public/services/serviceArea/itAssetDisposition(ITAD).jpeg";
import electronicRecycling from "@/public/services/serviceArea/electronicRecycling.jpeg";
import assetRecovery from "@/public/services/serviceArea/assetRecovery.png";

export const sanJoseData: ServiceArea = {
  slug: "san-jose",

  name: "San Jose",

  tagline: "Secure IT Asset Disposition, Data Destruction & E-Waste Recycling Services in San Jose, CA",

  metaTitle: "IT Asset Disposition (ITAD) in San Jose, CA | Data Destruction & E-Waste Recycling",

  metaDescription: "Trusted IT asset disposition (ITAD) services in San Jose, CA including secure data destruction, hard drive shredding, e-waste recycling, and IT asset recovery. Certified, compliant, and nationwide support. Request a free quote today.",

  intro: "Integritrade LLC delivers professional IT asset disposition (ITAD) services in San Jose, CA, helping businesses securely manage retired IT equipment. Our services include certified data destruction, hard drive shredding, e-waste recycling, and IT asset recovery to maximize value from your outdated devices. We ensure full compliance, secure handling, and environmentally responsible disposal tailored to your business needs.",

  services: [
    {
      slug: "e-waste-recycling",
      title: "Professional e-waste recycling in San Jose | Sustainable IT Asset Management",
      shortDescription:
        "Certified e-waste recycling for businesses in the San Jose area. We ensure safe, legal, and environmentally friendly electronics waste disposal.",
      icon: "Monitor",

      metaTitle:
        "E-waste Recycling San Jose | Safe and Certified E-waste Recycling",

      metaDescription:
        "Looking for e-waste recycling in San Jose? IntegriTrade LLC provides secure data destruction and environmentally friendly electronics recycling services in compliance with California law",

      image: electronicRecycling,

      heroHeading:
        "Premium e-waste recycling solutions in San Jose",

      heroSubheading:
        "As technology innovation abounds in San Jose, the heart of Silicon Valley, so does e-waste. Our certified recycling service protects both the environment and data—by processing your organization's old electronics in a safe, legal, and sustainable manner",

      ctaText: "Get a Free Quote",

      details: [
        {
          heading: "Sustainable e-waste recycling for Silicon Valley businesses",
          body:
            "In this era of rapid technology change, San Jose businesses need to constantly upgrade their hardware. However, old computers, servers, or networking gear cannot be thrown away like normal garbage. E-waste contains harmful substances such as lead, mercury, and cadmium that can cause serious damage to the environment. Also, California's strict environmental laws require every business to dispose of its e-waste through certified channels. Our professional recycling services in San Jose ensure that your organization is compliant with the law and, at the same time, help to create a circular economy or sustainable economy by recovering valuable raw materials."
        },
        {
          heading: "Why Choose IntegriTrade LLC for San Jose Recycling",
          body:
            "We take over the complete management of your organization's unused or legacy IT assets. From small startups to large data centers we are trusted for our transparency and security by all San Jose clients.",
          bullets:[
            "R2v3 Certified Standard: We ensure recycling in an environmentally friendly manner in accordance with international standards.",
            "ZERO-LANDFILL POLICY: We guarantee that any electronic waste you give us will not end up in landfills, but instead will be converted into raw materials.",
            "Data Security Integration: Each device's data storage is checked before recycling, and data is destroyed to NIST standards.",
            "LOCAL LOGISTICS FACILITIES: Our own logistics team in San Jose collects the goods directly from your office or warehouse.",
            "Compliance Report: At the end of each project, we issue a recycling certificate, which helps in your audit and CSR reporting.",
          ]
        },
        {
          heading: "Our transparent e-waste recycling process in San Jose",
          body:
            "With San Jose's tech-heavy environment in mind, we've designed our recycling process to be highly efficient and secure.",
          bullets:[
            "COLLECTION & INVENTORY: After the collection of goods from your office, an inventory is created with the serial number of each device.",
            "Sorting: Devices are separated, which can be refurbished and reused, and which can be recycled as raw materials.",
            "Secure data destruction: Hard drives or memory chips are physically shredded (shredding) so that data recovery is impossible.",
            "Mechanical Processing: Unused units are broken down and separated into plastics, glass, and circuit boards.",
            "Metal Extraction: Gold, silver, and copper are extracted from circuit boards and sent to refineries for reuse.",
          ]
        },
        {
        heading: "IT Asset Disposition (ITAD), Data Destruction & E-Waste Recycling FAQs in San Jose, CA",

        body:
           "Find answers to common questions about IT asset disposition (ITAD), secure data destruction, hard drive shredding, e-waste recycling, and IT asset recovery services in San Jose, CA.",

        qna: [
            {
            question: "Is it illegal to dispose of electronics in regular trash in San Jose, CA?",
            answer:
                "Yes. California law prohibits disposing of electronic waste such as laptops, monitors, and batteries in general trash bins. Improper disposal can result in fines and environmental violations. Certified recycling ensures compliance with state regulations."
            },
            {
            question: "Do you provide certificates after e-waste recycling or data destruction?",
            answer:
                "Yes. We provide a Certificate of Recycling and, when applicable, a Certificate of Data Destruction. These documents confirm that your equipment was processed securely and in compliance with environmental and data protection standards."
            },
            {
            question: "What types of IT equipment do you accept for recycling and disposal?",
            answer:
                "We accept a wide range of electronics including servers, laptops, desktops, hard drives, networking equipment, mobile devices, printers, and other corporate IT assets."
            },
            {
            question: "Do you offer secure hard drive shredding in San Jose?",
            answer:
                "Yes. We provide certified hard drive shredding and data destruction services to ensure all sensitive data is permanently destroyed before recycling or disposal."
            },
            {
            question: "Can businesses recover value from old IT equipment?",
            answer:
                "Absolutely. Our IT asset recovery services help businesses maximize value by refurbishing, reselling, or recycling equipment while maintaining full data security and compliance."
            }
        ]
        },
        {
          heading: "Conclusion",
          body:
            "Proper e-waste recycling is an integral part of any responsible business in San Jose. By choosing IntegriTrade LLC, you are not only reducing legal and environmental risks but also contributing to the sustainable growth of Silicon Valley. Our certified process ensures that your data remains safe and your organization's environmental impact is minimized. Whether it's your old office equipment or a data center refresh project, we provide you with the fastest and safest in San Jose.Services Contact us today and make your organization's e-waste management more modern and eco-friendly."
        }
      ]
    },
  ]
};