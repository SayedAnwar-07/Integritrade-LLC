'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import integritradeLogoLight from "@/public/integritrade-logo-light.png"
import integritradeLogoDark from "@/public/integritrade-logo-dark.png"
import {
  ChevronDown,
  Monitor,
  Recycle,
  PackageSearch,
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
} from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { useTheme } from 'next-themes'
import PrimaryButton from './buttons/PrimaryButton'
import OutlineButton from './buttons/OutlineButton'

/* ----------------------------- Types ----------------------------- */
interface NavItem {
  href: string
  label: string
  dropdown?: Array<{ href: string; label: string; icon?: React.ComponentType<any> }>
}

interface DesktopDropdownProps {
  item: NavItem
  isActive: boolean
  registerRef: (el: HTMLDivElement | null) => void
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
        className={`relative z-10 inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 no-underline transition-colors duration-300 font-medium text-[13px] tracking-tight ${
          isActive
            ? 'text-primary'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
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
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="w-[340px] bg-white/95 dark:bg-[#0a1f17]/95 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden p-2">
          {item.dropdown?.map((dropdownItem, idx) => {
            const isSubActive = pathname === dropdownItem.href
            const Icon = dropdownItem.icon

            return (
              <Link
                key={dropdownItem.href}
                href={dropdownItem.href}
                style={{ transitionDelay: open ? `${idx * 30}ms` : '0ms' }}
                className={`group/item flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isSubActive
                    ? 'bg-primary/8 dark:bg-primary/15'
                    : 'hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {Icon && (
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isSubActive
                        ? 'bg-primary/15 dark:bg-primary/25'
                        : 'bg-gray-100 dark:bg-white/5 group-hover/item:bg-primary/10 dark:group-hover/item:bg-primary/20 group-hover/item:scale-110'
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2.2} />
                  </div>
                )}
                <span
                  className={`text-[13.5px] font-medium tracking-tight transition-colors ${
                    isSubActive
                      ? 'text-primary'
                      : 'text-gray-700 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-white'
                  }`}
                >
                  {dropdownItem.label}
                </span>
                <ArrowRight
                  className="w-3.5 h-3.5 ml-auto text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300"
                  strokeWidth={2.5}
                />
              </Link>
            )
          })}
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
          className={`flex-1 px-5 py-4 text-[15px] font-medium tracking-tight transition-colors ${
            isActive
              ? 'text-primary'
              : 'text-gray-700 dark:text-gray-200'
          }`}
        >
          {item.label}
        </Link>
        <button
          onClick={onToggle}
          className={`p-3 mr-3 rounded-md transition-all duration-300 ${
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
            const isSubActive = pathname === dropdownItem.href
            const Icon = dropdownItem.icon
            return (
              <Link
                key={dropdownItem.href}
                href={dropdownItem.href}
                onClick={onItemClick}
                style={{ transitionDelay: isOpen ? `${idx * 40}ms` : '0ms' }}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] transition-all duration-300 ${
                  isSubActive
                    ? 'bg-primary/8 text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                } ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
              >
                {Icon && (
                  <div className={`p-1.5 rounded-md ${isSubActive ? 'bg-primary/15' : 'bg-gray-100 dark:bg-white/5'}`}>
                    <Icon className="h-3.5 w-3.5 flex-shrink-0 text-primary" strokeWidth={2.2} />
                  </div>
                )}
                <span className="font-medium tracking-tight">{dropdownItem.label}</span>
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

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? integritradeLogoDark
      : integritradeLogoLight

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
        { href: '/services/e-waste-recycling', label: 'Electronics Recycling', icon: Recycle },
        { href: '/services/data-destruction-services', label: 'Data Destruction', icon: ShieldOff },
        { href: '/services/asset-recovery-services', label: 'Asset Remarketing / Buyback', icon: PackageSearch },
        // { href: '/services/it-asset-disposition', label: 'IT Asset Disposition', icon: Monitor },
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
      ],
    },
    { href: '/certifications', label: 'Certifications' },
    {
      href: '/about',
      label: 'About',
      dropdown: [
        { href: '/about/our-team', label: 'Our Team', icon: Users },
        { href: '/about/our-partners', label: 'Our Partners', icon: Handshake },
        { href: '/about/our-capabilities', label: 'Our Capabilities', icon: ShieldCheck },
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
        className={`sticky top-0 z-50 w-full transition-all duration-500 bg-secondary dark:bg-[#0a1f28] ${
          isScrolled
            ? 'shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]'
            : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-2">
          {/* ================== LOGO with subtle scale ================== */}
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src={logoSrc}
                alt="Integritrade"
                width={32}
                height={32}
                className="w-40 md:w-44 object-contain"
                priority
              />
            </div>
          </Link>

          {/* ================== DESKTOP NAV with sliding pill (lg+) ================== */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center relative"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {/* The sliding pill itself — duration & easing in style to avoid Tailwind ambiguity warnings */}
            <div
              className="absolute top-1 bottom-1 rounded-md bg-white/90 dark:bg-white/10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.4)] border border-primary/10 dark:border-white/[0.08] transition-all pointer-events-none"
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
                  className={`relative z-10 px-4 xl:px-5 py-2 no-underline transition-colors duration-300 font-medium text-[13px] tracking-tight ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ================== RIGHT SIDE (lg+) ================== */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <ModeToggle />
            <OutlineButton href="/accepted-items" testId="button-get-quote">
              Accepted E-waste Items
            </OutlineButton>

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
          className={`absolute top-0 right-0 bottom-0 h-full w-full sm:w-[420px] bg-secondary dark:bg-[#013242] shadow-2xl flex flex-col transform transition-transform duration-400 ease-out ${
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
              <Image
                src={logoSrc}
                alt="Integritrade"
                width={32}
                height={32}
                className="w-40 object-contain"
                priority
              />
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
                  className={`block px-5 py-4 border-b border-gray-100 dark:border-white/5 text-[15px] font-medium tracking-tight transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-700 dark:text-gray-200 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Footer CTAs */}
          <div className="p-5 space-y-3 flex-shrink-0 border-t border-gray-100 dark:border-white/5">
            <Link
              href="/service-book"
              onClick={() => setIsMenuOpen(false)}
              className="group relative flex items-center justify-center gap-2 w-full overflow-hidden rounded-md bg-primary px-5 py-3.5 text-[14px] font-semibold text-white tracking-tight shadow-[0_4px_20px_-4px_rgba(44,181,99,0.4)] transition-all"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Contact Us</span>
              <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>

            <Link
              href="/accepted-items"
              onClick={() => setIsMenuOpen(false)}
              className="group relative flex items-center justify-center gap-2 w-full overflow-hidden rounded-md bg-primary px-5 py-3.5 text-[14px] font-semibold text-white tracking-tight shadow-[0_4px_20px_-4px_rgba(44,181,99,0.4)] transition-all"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Accepted E-waste Items</span>
              <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>

            <Link
              href="tel:+15593254813"
              className="group relative flex items-center justify-center gap-2 w-full overflow-hidden rounded-md border border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-primary px-5 py-3.5 text-[14px] font-medium tracking-tight transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4" strokeWidth={2.2} />
              <span>(559) 325-4813</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}