'use client';

import Link from "next/link";
import Image from "next/image";
import ServicingAreaMenu from "../service-area/ServicingAreaMenu";
import integritradeLogoDark from "@/public/integritrade-logo-dark.png"

const footerServices = [
  { href: "/services/e-waste-recycling/", label: "Electronic Recycling" },
  { href: '/services/data-destruction-services/', label: "Data Destruction" },
  { href: "/services/it-asset-disposition/", label: "ITAD Services" },
  { href: "/services/asset-recovery-services/", label: "Asset Recovery" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0E0F] text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2aac61] to-transparent" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)`,
        }}
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">

          {/* Brand Column — 5 cols */}
          <div className="lg:col-span-5">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="flex items-center justify-center">
                <Image
                  src={integritradeLogoDark}
                  alt="Integritrade"
                  width={32}
                  height={32}
                  className="w-48 md:w-56 object-contain"
                  priority
                />
              </div>
            </Link>            

            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1 bg-gradient-to-r from-[#2aac61]/60 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#2aac61]" />
            </div>

            <p className="text-[13px] leading-7 text-white/80 max-w-sm font-light tracking-wide text-justify">
              Business ITAD, data destruction, electronics recycling, and asset recovery services built around pickup, tracking, processing, and final documentation.
            </p>

            {/* Contact Block */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: <LocationIcon />,
                  content: (
                    <span className="text-white/90 text-[13px] tracking-wide">
                      1945 N Fine Ave, STE 111 · Fresno, CA 93727
                    </span>
                  ),
                },
                {
                  icon: <PhoneIcon />,
                  content: (
                    <div className="flex flex-col">
                      <a
                        href="tel:+15593254813"
                        className="text-white/90 text-[13px] tracking-wide hover:text-[#2aac61] transition-colors duration-300"
                      >
                        (559) 325-4813
                      </a>
                      <span className="text-white/30 text-[11px] tracking-widest uppercase mt-0.5">
                        Available by Phone or Text
                      </span>
                    </div>
                  ),
                },
                {
                  icon: <EmailIcon />,
                  content: (
                    <a
                      href="mailto:info@integritradeLLC.com"
                      className="text-white/90 text-[13px] tracking-wide hover:text-[#2aac61] transition-colors duration-300"
                    >
                      info@integritradeLLC.com
                    </a>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded border border-[#2aac61]/20 bg-[#2aac61]/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#2aac61]/50 group-hover:bg-[#2aac61]/10 transition-all duration-300">
                    <span className="text-[#2aac61] w-3.5 h-3.5">{item.icon}</span>
                  </div>
                  <div className="pt-1.5">{item.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1" />

          {/* Services Column — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#2aac61] mb-6">
              Our Services
            </h3>
            <ul className="space-y-1">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 py-2.5 border-b border-white/5 hover:border-[#2aac61]/25 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#2aac61] transition-all duration-300 flex-shrink-0" />
                    <span className="text-[13px] text-white/80 group-hover:text-white/90 tracking-wide transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#2aac61] mb-6">
              Company
            </h3>
            <ul className="space-y-1">
              {[
                { href: "/services/", label: "Services" },
                { href: "/industries/", label: "Industries" },
                { href: "/certifications/", label: "Certifications" },
                { href: "/about/", label: "About Us" },
                { href: "/terms/", label: "Terms" },
                { href: "/privacy/", label: "Privacy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 py-2.5 border-b border-white/5 hover:border-[#2aac61]/25 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#2aac61] transition-all duration-300 flex-shrink-0" />
                    <span className="text-[13px] text-white/80 group-hover:text-white/90 tracking-wide transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Service Area Bar */}
        <div className="py-5 border-b border-white/5 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <ServicingAreaMenu />
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/40 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Integritrade LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="w-px h-3 bg-white/30 hidden md:block" />
            <span className="text-[11px] text-white/25 tracking-widest uppercase">
              Pickup &nbsp;·&nbsp; Tracking &nbsp;·&nbsp; Data Destruction &nbsp;·&nbsp; Reporting
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2aac61]/40 to-transparent" />
    </footer>
  );
}

// Icon Components
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );
}