'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import integritradeLogo from "@/public/logo/integritrade-logo.svg"
import tracetechCurved from "@/public/nav/tracetech-curved.png"

import {
  ChevronDown,
  Monitor,
  Recycle,
  ShieldOff,
  Users,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Phone,
  Building2,
  HeartPulse,
  GraduationCap,
  Landmark,
  X,
  Menu,
  Briefcase,
  Store,
  Shield,
  Hammer,
  Scale,
  ChevronRight,
  Info,
  MessageSquare,
  Laptop,
} from "lucide-react";

import { ModeToggle } from './ModeToggle'
import PrimaryButton from './buttons/PrimaryButton'
import OutlineButton from './buttons/OutlineButton'

/* ----------------------------- Types ----------------------------- */
interface NavItem {
  href: string
  label: string
  dropdown?: Array<{ href: string; label: string; icon?: React.ComponentType<any> }>
}

/* -------- Colorful dropdown icon colors (keyed by href) -------- */
const DROPDOWN_ICON_COLORS: Record<string, string> = {
  // Services
  '/services/': 'text-slate-600 dark:text-slate-300',
  '/services/basic-electronics-recycling': 'text-emerald-600 dark:text-emerald-400',
  '/services/data-destruction-services': 'text-rose-600 dark:text-rose-400',
  '/services/it-asset-disposition': 'text-blue-600 dark:text-blue-400',
  "/services/remote-it-asset-recovery": 'text-violet-600 dark:text-violet-400',
  '/services/demanufacturing-prototype-destruction': 'text-amber-600 dark:text-amber-400',
  '/fresno-electronics-recycling/': 'text-teal-600 dark:text-teal-400',
  // Industries
  '/industries/business-corporate': 'text-blue-600 dark:text-blue-400',
  '/industries/healthcare': 'text-rose-600 dark:text-rose-400',
  '/industries/education': 'text-emerald-600 dark:text-emerald-400',
  '/industries/finance': 'text-amber-600 dark:text-amber-400',
  '/industries/legal-professional-services': 'text-indigo-600 dark:text-indigo-400',
  '/industries/retail-hospitality': 'text-orange-600 dark:text-orange-400',
  '/industries/government-public-sector': 'text-violet-600 dark:text-violet-400',
  '/industries/defense-contractors': 'text-slate-600 dark:text-slate-300',
  // About
  '/about/': 'text-blue-600 dark:text-blue-400',
  '/about/our-team': 'text-emerald-600 dark:text-emerald-400',
  '/about/our-equipment': 'text-amber-600 dark:text-amber-400',
}

interface DesktopDropdownProps {
  item: NavItem
  isActive: boolean
  registerRef: (el: HTMLDivElement | null) => void
}

/* --------------------- Active-state helpers --------------------- */
const normalizePath = (p: string): string =>
  p !== '/' && p.endsWith('/') ? p.replace(/\/+$/, '') : p

const isSubItemActive = (
  href: string,
  pathname: string,
  parentHref: string
): boolean => {
  const target = normalizePath(href)
  const current = normalizePath(pathname)
  if (target === normalizePath(parentHref)) return current === target
  return current === target || current.startsWith(`${target}/`)
}

/* ----------------------- Desktop Dropdown ----------------------- */
function DesktopDropdown({ item, isActive, registerRef }: DesktopDropdownProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    registerRef(wrapperRef.current)
  }, [registerRef])

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`relative z-10 inline-flex items-center gap-1.5 rounded-md px-4 xl:px-5 py-2 no-underline transition-all duration-300 font-medium text-[13px] tracking-tight click-feel outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark ${
          isActive
            ? 'text-primary'
            : 'text-gray-600 dark:text-gray-300 hover:text-primary focus-visible:text-primary dark:hover:text-white dark:focus-visible:text-white'
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''} opacity-60`}
          strokeWidth={2.5}
        />
      </Link>

      {/* Hover dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-gray-200/70 dark:border-white/10 bg-white dark:bg-dark-secondary shadow-[0_20px_45px_rgba(0,0,0,0.12)] p-2.5">
          {/* Mega-menu grid — wider, icon + label, 2 cols for larger menus */}
          <div
            className={`grid gap-1 ${
              (item.dropdown?.length ?? 0) > 4
                ? 'grid-cols-2 w-[580px]'
                : 'grid-cols-1 w-[300px]'
            }`}
          >
            {item.dropdown?.map((dropdownItem) => {
              const isSubActive = isSubItemActive(dropdownItem.href, pathname, item.href)
              const Icon = dropdownItem.icon

              return (
                <Link
                  key={dropdownItem.href}
                  href={dropdownItem.href}
                  className={`group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 click-feel outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark-secondary ${
                    isSubActive
                      ? 'bg-primary/10 dark:bg-white/[0.10]'
                      : 'hover:bg-primary/10 focus-visible:bg-primary/10 dark:hover:bg-white/[0.10] dark:focus-visible:bg-white/[0.10]'
                  }`}
                >
                  {Icon && (
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-gray-50 transition-colors duration-200 group-hover/item:border-primary/40 group-hover/item:bg-primary/10 group-focus-visible/item:border-primary/40 group-focus-visible/item:bg-primary/10 dark:border-white/10 dark:bg-white/[0.04] dark:group-hover/item:border-white/25 dark:group-hover/item:bg-white/[0.10] ${
                        DROPDOWN_ICON_COLORS[dropdownItem.href] ??
                        'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    </span>
                  )}

                  <span
                    className={`text-[13px] font-medium leading-snug tracking-tight transition-colors duration-150 ${
                      isSubActive
                        ? 'text-primary dark:text-white'
                        : 'text-gray-700 dark:text-gray-200 group-hover/item:text-primary group-focus-visible/item:text-primary dark:group-hover/item:text-white dark:group-focus-visible/item:text-white'
                    }`}
                  >
                    {dropdownItem.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----------------------- TraceTech promo item ----------------------- */
const TRACETECH_HREF = '/about/#tracetech'

function TraceTechNavItem({
  registerRef,
}: {
  registerRef: (el: HTMLDivElement | null) => void
}) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    registerRef(wrapperRef.current)
  }, [registerRef])

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={TRACETECH_HREF}
        className="relative z-10 inline-flex items-center gap-1.5 rounded-md px-4 xl:px-5 py-2 no-underline transition-all duration-300 font-medium text-[13px] tracking-tight click-feel outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark text-gray-600 dark:text-gray-300 hover:text-primary focus-visible:text-primary dark:hover:text-white dark:focus-visible:text-white"
      >
        <span>TraceTech</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''} opacity-60`}
          strokeWidth={2.5}
        />
      </Link>

      {/* Hover promo panel — anchored right so it never overflows the viewport */}
      <div
        className={`absolute top-full right-0 pt-3 z-50 transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="w-[820px] overflow-hidden rounded-xl border border-gray-200/70 dark:border-white/10 bg-white dark:bg-dark-secondary shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-[1fr_440px]">
            {/* Copy — data-nosnippet keeps this chrome out of Google's search
                snippets; without it the panel text (present on every page)
                gets scraped as the page description. */}
            <div className="flex flex-col justify-center p-7" data-nosnippet>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Our Technology
              </p>

              <h3 className="mt-2 font-serif text-[22px] font-semibold leading-tight text-gray-900 dark:text-white">
                AI-Integrated ITAD with TraceTech
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-gray-600 dark:text-gray-300">
                TraceTech is Integritrade&apos;s proprietary AI-integrated ERP
                platform. It provides real-time transparency into your account
                activity tracking every asset from pickup through final
                disposition, with Certificates of Destruction and audit-ready
                reports available on demand.
              </p>

              <div className="mt-5">
                <Link
                  href={TRACETECH_HREF}
                  className="group/tt inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2.5 text-[13px] font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white click-feel"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tt:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Screenshot — transparent PNG, zoomed with the right edge (login
                screen) pinned so it never gets cropped */}
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src={tracetechCurved}
                alt="TraceTech ERP platform login"
                className="h-auto w-full scale-[0.94] translate-x-6"
                sizes="440px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----------------------- Mobile Dropdown ----------------------- */
interface MobileDropdownProps {
  item: NavItem
  isActive: boolean
  isOpen: boolean
  onToggle: () => void
  onItemClick: () => void
}

function MobileDropdown({ item, isActive, isOpen, onToggle, onItemClick }: MobileDropdownProps) {
  const pathname = usePathname()

  return (
    <div className="border-b border-gray-100 dark:border-white/5">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onItemClick}
          className={`flex-1 px-5 py-4 text-[15px] font-medium tracking-tight transition-all click-feel ${
            isActive
              ? 'text-primary'
              : 'text-gray-700 dark:text-gray-200'
          }`}
        >
          {item.label}
        </Link>
        <button
          onClick={onToggle}
          className={`p-1 mr-3 rounded-sm transition-all duration-300 ${
            isOpen
              ? 'bg-primary/10 text-primary rotate-180'
              : 'text-gray-400 hover:text-primary hover:bg-primary/5'
          }`}
          aria-label={`Toggle ${item.label} dropdown`}
        >
          <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
       <div className="px-3 pb-3 space-y-1">
          {item.dropdown?.map((dropdownItem, idx) => {
            const isSubActive = isSubItemActive(dropdownItem.href, pathname, item.href)
            const Icon = dropdownItem.icon
            return (
              <Link
                key={dropdownItem.href}
                href={dropdownItem.href}
                onClick={onItemClick}
                style={{ transitionDelay: isOpen ? `${idx * 40}ms` : '0ms' }}
                className={`flex items-center gap-3 rounded-md px-3 py-3 text-[14px] transition-all duration-300 click-feel outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark ${
                  isSubActive
                    ? 'bg-white dark:bg-dark text-primary font-semibold shadow-md active:bg-gray-50 dark:active:bg-white/10 '
                    : 'text-gray-600 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 active:bg-primary/15 dark:text-gray-300 dark:hover:bg-white/[0.10] dark:hover:text-white dark:focus-visible:bg-white/[0.10] dark:active:bg-white/15'
                } ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
              >
                {Icon && (
                  <div className="p-1.5 rounded-md">
                    <Icon className="h-3.5 w-3.5 flex-shrink-0 text-primary" strokeWidth={2.2} />
                  </div>
                )}
                <span className="font-medium tracking-tight">
                  {dropdownItem.label}
                </span>
              </Link>
            )
          })}
       </div>
      </div>
    </div>
  )
}

/* ----------------------------- Navbar ----------------------------- */
export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Sliding pill indicator state
  const navRef = useRef<HTMLElement | null>(null)
  const linkRefs = useRef<Map<string, HTMLDivElement | HTMLAnchorElement | null>>(new Map())
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const [hoveredHref, setHoveredHref] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    return () => {
      const savedScrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY || '0', 10) * -1)
      }
    }
  }, [isMenuOpen])

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      dropdown: [
        { href: '/services/', label: 'Compare Our Service Levels', icon: Scale },
        { href: '/services/basic-electronics-recycling', label: 'Basic Electronics Recycling', icon: Recycle },
        { href: '/services/data-destruction-services', label: 'Data Destruction Services', icon: ShieldOff },
        { href: '/services/it-asset-disposition', label: 'IT Asset Disposition & Value Recovery', icon: Monitor },  
        {href: "/services/remote-it-asset-recovery",label: "Remote IT Asset Recovery",icon: Laptop,},      
        { href: '/services/demanufacturing-prototype-destruction', label: 'Demanufacturing & Prototype Destruction', icon: Hammer },    
        { href: '/fresno-electronics-recycling/', label: 'Fresno Public E-Waste Drop Off', icon: Store },    
      ],
    },
    {
      href: '/industries',
      label: 'Industries',
      dropdown: [
        { href: '/industries/business-corporate', label: 'Corporate & Enterprise', icon: Building2 },
        { href: '/industries/healthcare', label: 'Healthcare', icon: HeartPulse },
        { href: '/industries/education', label: 'Education', icon: GraduationCap },
        { href: '/industries/finance', label: 'Banking & Finance', icon: Landmark },
        { href: '/industries/legal-professional-services', label: 'Legal & Professional Services', icon: Briefcase },
        { href: '/industries/retail-hospitality', label: 'Retail & Hospitality', icon: Store },
        { href: '/industries/government-public-sector', label: 'Government & Public Sector', icon: ShieldCheck },
        { href: '/industries/defense-contractors', label: 'Defense Contractors', icon: Shield },
      ],
    },
        { href: '/certifications', label: 'Certifications' },
    {
      href: '/about',
      label: 'About',
      dropdown: [
        { href: '/about/', label: 'About IntegriTrade', icon: Info },
        { href: '/about/our-team', label: 'Our Team', icon: Users },
        { href: '/about/our-equipment', label: 'Our Equipment', icon: ShieldCheck },
      ],
    },
  ]

  const handleDropdownToggle = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel)
  }

  const handleDropdownItemClick = () => {
    setOpenDropdown(null)
    setIsMenuOpen(false)
  }

  /* ----------------- Sliding pill computation ----------------- */
  const getActiveHref = () => {
    const match = navItems.find(
      (n) => pathname === n.href || (n.href !== '/' && pathname.startsWith(`${n.href}/`))
    )
    return match?.href ?? null
  }

  const movePillTo = (href: string | null) => {
    if (!href || !navRef.current) {
      setPillStyle((p) => ({ ...p, opacity: 0 }))
      return
    }
    const el = linkRefs.current.get(href)
    if (!el) {
      setPillStyle((p) => ({ ...p, opacity: 0 }))
      return
    }
    const navRect = navRef.current.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setPillStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
      opacity: 1,
    })
  }

  useEffect(() => {
    if (!mounted) return
    const target = hoveredHref ?? getActiveHref()
    movePillTo(target)
    const onResize = () => movePillTo(hoveredHref ?? getActiveHref())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hoveredHref, mounted])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 bg-secondary dark:bg-dark ${
          isScrolled
            ? 'shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]'
            : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-2">
          {/* ================== LOGO with subtle scale ================== */}
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03] w-52 md:w-64">
              <Image
                src={integritradeLogo}
                alt="Integritrade LLC Logo"
                width={2977}
                height={783}
                className="w-full h-auto object-contain"
                loading="eager"
                priority
              />
            </div>
          </Link>

          {/* ================== DESKTOP NAV with sliding pill (lg+) ================== */}
          <nav
            ref={navRef}
            aria-label="Primary"
            className="hidden lg:flex items-center relative"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {/* The sliding pill itself — duration & easing in style to avoid Tailwind ambiguity warnings */}
            <div
              className="absolute top-1 bottom-1 rounded-md bg-white/90 dark:bg-white/10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.4)] border border-primary/10 dark:border-white/[0.08] transition-all pointer-events-none active:scale-[0.97]"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
                transitionDuration: '450ms',
                transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
              }}
            />

            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(`${item.href}/`))
              const hasDropdown = item.dropdown && item.dropdown.length > 0

              if (hasDropdown) {
                return (
                  <div
                    key={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                  >
                    <DesktopDropdown
                      item={item}
                      isActive={isActive}
                      registerRef={(el) => linkRefs.current.set(item.href, el)}
                    />
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    if (el) linkRefs.current.set(item.href, el)
                  }}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  className={`relative z-10 rounded-md px-4 xl:px-5 py-2 no-underline transition-all duration-150 font-medium text-[13px] tracking-tight click-feel outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary focus-visible:text-primary dark:hover:text-white dark:focus-visible:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* TraceTech promo — always last */}
            <div onMouseEnter={() => setHoveredHref(TRACETECH_HREF)}>
              <TraceTechNavItem
                registerRef={(el) => linkRefs.current.set(TRACETECH_HREF, el)}
              />
            </div>
          </nav>

          {/* ================== RIGHT SIDE (lg+) ================== */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <ModeToggle />
            <PrimaryButton href="/service-book" testId="button-get-quote">
              Contact Us
            </PrimaryButton>
          </div>

          {/* ================== MOBILE BUTTONS (< lg) ================== */}
          <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative p-2.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      {/* ================== MOBILE MENU ================== */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-400 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 h-full w-full sm:w-[420px] bg-secondary dark:bg-dark-secondary shadow-2xl flex flex-col transform transition-transform duration-400 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            height: '100dvh',
            transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-white/5 flex-shrink-0">
            <Link
              href="/"
              className="flex gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block w-52">
                <Image
                  src={integritradeLogo}
                  alt="Integritrade LLC Logo"
                  width={2977}
                  height={783}
                  className="w-full h-auto object-contain"
                  loading="eager"
                  priority
                />
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>

          {/* Scrollable nav */}
          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto overscroll-contain min-h-0 py-2"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(`${item.href}/`))
              const hasDropdown = item.dropdown && item.dropdown.length > 0

              if (hasDropdown) {
                return (
                  <MobileDropdown
                    key={item.href}
                    item={item}
                    isActive={isActive}
                    isOpen={openDropdown === item.label}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onItemClick={handleDropdownItemClick}
                  />
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-5 py-4 border-b border-gray-100 dark:border-white/5 text-[15px] font-medium tracking-tight transition-all active:scale-[0.97] active:duration-75 ${
                    isActive ? 'text-primary' : 'text-gray-700 dark:text-gray-200 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* TraceTech — always last */}
            <Link
              href={TRACETECH_HREF}
              onClick={() => setIsMenuOpen(false)}
              className="block px-5 py-4 border-b border-gray-100 dark:border-white/5 text-[15px] font-medium tracking-tight transition-all active:scale-[0.97] active:duration-75 text-gray-700 dark:text-gray-200 hover:text-primary"
            >
              TraceTech
            </Link>
          </nav>

          {/* Footer CTAs */}
          <div className="p-5 space-y-3 flex-shrink-0 border-t border-gray-100 dark:border-white/5 flex flex-col"> 

            {/* Call / Text share one row so the phone number reads once,
                with the action split into two equal, centred boxes. */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="tel:+15593254813"
                onClick={() => setIsMenuOpen(false)}
                className="!bg-brand-accent hover:!bg-[hsl(var(--brand-accent-hover))] !text-white flex w-full items-center justify-center gap-2 rounded-md border border-primary/30 px-4 py-2.5 text-[14px] font-medium tracking-tight transition-all"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2.2} />
                <span>Call</span>
              </Link>

              <Link
                href="sms:+15593254813"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 px-4 py-2.5 text-[14px] font-medium tracking-tight text-primary transition-all hover:bg-primary/5"
              >
                <MessageSquare className="h-4 w-4 shrink-0" strokeWidth={2.2} />
                <span>Text</span>
              </Link>
            </div>

            <PrimaryButton href="/service-book" testId="button-get-quote">
              Contact Us
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}