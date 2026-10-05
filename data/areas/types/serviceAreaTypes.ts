import { StaticImageData } from "next/image";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  heading: string;
  /** Rendered as an h3 under the section's h2 (or on its own). */
  subheading?: string;
  body?: string;
  bullets?: string[];
  /** Paragraphs that follow the bullet list. */
  outro?: string;
  qna?: FAQItem[];
}

export interface AreaService {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  image: StaticImageData;
  heroHeading: string;
  heroSubheading: string;
  details: ServiceDetail[];
  ctaText?: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  tagline: string;
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  services: AreaService[];
}