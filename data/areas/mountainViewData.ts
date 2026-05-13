import { ServiceArea } from "./types/serviceAreaTypes";
import hardDriveShredding from "@/public/services/serviceArea/driveShredding.jpeg";
import dataDestruction from "@/public/services/serviceArea/dataDestruction.png";
import itAssetDisposition from "@/public/services/serviceArea/itAssetDisposition(ITAD).jpeg";
import electronicRecycling from "@/public/services/serviceArea/electronicRecycling.jpeg";
import assetRecovery from "@/public/services/serviceArea/assetRecovery.png";

export const mountainViewData: ServiceArea = {
  slug: "mountain-view",

  name: "Mountain View",

  tagline: "Secure IT Asset Disposition, Data Destruction & E-Waste Recycling Services in Mountain View, CA",

  metaTitle: "IT Asset Disposition (ITAD) in Mountain View, CA | Secure Data Destruction & E-Waste Recycling – IntegriTrade",

  metaDescription: "Looking for IT asset disposition (ITAD) in Mountain View, CA? IntegriTrade LLC provides secure data destruction, hard drive shredding, and certified e-waste recycling for businesses. Request a free quote today.",

  intro: "IntegriTrade LLC delivers professional IT asset disposition (ITAD) services in Mountain View, CA, helping businesses securely manage retired IT equipment. Serving the heart of Silicon Valley, we support tech companies, startups, and enterprises with certified data destruction, hard drive shredding, e-waste recycling, and IT asset recovery. Our solutions ensure full compliance with California regulations, protect sensitive data, and promote environmentally responsible disposal while maximizing value from outdated devices.",

  services: [
    {
      slug: "e-waste-recycling",
      title: "E-Waste Recycling Services in Mountain View",
      shortDescription:
        "Certified e-waste recycling for businesses in Mountain View with secure data handling, compliance, and eco-friendly disposal.",
      icon: "Monitor",

      metaTitle:
        "E-Waste Recycling Mountain View, CA | Certified Electronics Recycling & IT Disposal",

      metaDescription:
        "Need e-waste recycling in Mountain View? IntegriTrade LLC offers certified electronics recycling, secure data destruction, and business pickup services. Stay compliant and protect your data.",

      image: electronicRecycling,

      heroHeading:
        "Secure & Certified E-Waste Recycling for Mountain View Businesses",

      heroSubheading:
        "Mountain View, home to leading tech companies and startups, generates significant electronic waste. IntegriTrade LLC provides secure, compliant, and eco-friendly e-waste recycling solutions designed for enterprises, ensuring safe disposal of outdated IT equipment while protecting sensitive data.",

      ctaText: "Get a Free Quote",

      details: [
        {
          heading: "Sustainable E-Waste Recycling for Mountain View’s Tech Ecosystem",
          body:
            "Mountain View sits at the center of Silicon Valley innovation, where businesses frequently upgrade IT infrastructure. Improper disposal of outdated laptops, servers, and networking equipment can harm the environment and violate California regulations. Our certified e-waste recycling services ensure hazardous materials like lead and mercury are safely handled, while valuable materials are recovered and reused supporting sustainability goals and strengthening your organization’s corporate responsibility."
        },
        {
          heading: "Why Choose IntegriTrade LLC in Mountain View?",
          body:
            "We provide enterprise-grade e-waste recycling services tailored for Silicon Valley businesses, ensuring security, compliance, and environmental responsibility at every stage.",
          bullets:[
            "NIST 800-88 compliant data destruction for all storage devices",
            "R2v3 certified recycling processes meeting global environmental standards",
            "Convenient business pickup from offices and data centers in Mountain View",
            "Zero-landfill policy ensuring responsible material handling",
            "Detailed compliance documentation and recycling certificates for audit purposes"
          ]
        },
        {
          heading: "Our Advanced E-Waste Recycling Process",
          body:
            "Our streamlined process is designed for high-volume enterprise environments, ensuring complete transparency, traceability, and security throughout the lifecycle of your IT assets.",
          bullets:[
            "Comprehensive asset audit with serial number tracking",
            "Secure data destruction through physical shredding and certified methods",
            "Material separation into reusable components like metals, plastics, and glass",
            "Recovery of valuable materials such as gold, silver, and copper",
            "Final compliance reporting with full documentation for regulatory and internal audits"
          ]
        },
        {
        heading: "Common Questions About E-Waste Recycling in Mountain View",

        body:
           "Here are answers to some of the most frequently asked questions from businesses and individuals regarding electronics recycling in the Mountain View area.",

        qna: [
            {
            question: "Do you offer e-waste recycling pickup for businesses in Mountain View?",
            answer:
                "Yes, our logistics team provides direct pickup from offices, data centers, and corporate facilities across Mountain View and nearby Silicon Valley areas."
            },
            {
            question: "How do you ensure data security during recycling?",
            answer:
                "We follow strict NIST 800-88 data destruction standards, including physical shredding of storage devices, and provide certificates of destruction to eliminate any risk of data breaches."
            },
            {
            question: "What types of electronics do you accept?",
            answer:
                "We accept a wide range of IT equipment including laptops, desktops, servers, hard drives, networking devices, and other enterprise electronics."
            },
            {
            question: "Do you support personal (B2C) e-waste recycling?",
            answer:
                "While our primary focus is enterprise clients, we occasionally support community recycling drives where individuals can safely dispose of personal electronics."
            }
        ]
        },
        {
          heading: "Responsible E-Waste Management for Mountain View Businesses",
          body:
            "In a technology-driven city like Mountain View, responsible e-waste management is essential. Choosing the right recycling partner helps protect your organization’s sensitive data while reducing environmental impact. IntegriTrade LLC provides secure, compliant, and efficient recycling solutions tailored to your business needs. Whether you're clearing out outdated equipment or managing large-scale IT asset disposal, our expert team is ready to help. Contact us today to schedule a pickup or request a customized recycling quote."
        }
      ]
    },
  ]
};