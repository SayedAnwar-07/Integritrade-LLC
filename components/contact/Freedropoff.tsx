import {
  Monitor,
  Smartphone,
  Tv,
  Printer,
  Gamepad2,
  CheckCircle2,
} from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import ScrollLoader from '../shared/ScrollLoader'

const acceptedDevices = [
  {
    icon: Monitor,
    title: 'Computers & IT Equipment',
    // Blue
    iconColor: 'text-blue-700 dark:text-blue-400',
    iconBorder: 'border-blue-300 dark:border-blue-500/60',
    items: [
      'Desktop computers & towers',
      'Laptops & notebooks',
      'All-in-one computers',
      'Servers & workstations',
      'Computer components & parts',
      'Network switches, routers & firewalls',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Devices',
    // Purple
    iconColor: 'text-purple-700 dark:text-purple-400',
    iconBorder: 'border-purple-300 dark:border-purple-500/60',
    items: [
      'Smartphones & cell phones',
      'Tablets & e-readers',
      'Two-way radios',
      'GPS devices',
      'Mobile hotspots',
    ],
  },
  {
    icon: Tv,
    title: 'Monitors, TVs & Displays',
    // Amber
    iconColor: 'text-amber-700 dark:text-amber-400',
    iconBorder: 'border-amber-300 dark:border-amber-500/60',
    items: [
      'LCD/LED/OLED monitors',
      'Flat screen TVs',
      'Computer projectors',
      'Digital photo frames',
      'Touch screen displays',
    ],
  },
  {
    icon: Printer,
    title: 'Office Peripherals',
    // Rose
    iconColor: 'text-rose-700 dark:text-rose-400',
    iconBorder: 'border-rose-300 dark:border-rose-500/60',
    items: [
      'Printers & scanners',
      'Keyboards & mice',
      'Webcams & speakers',
      'Network routers & modems',
      'External hard drives & storage media',
    ],
  },
  {
    icon: Gamepad2,
    title: 'Consumer Electronics & Gaming',
    // Teal
    iconColor: 'text-teal-700 dark:text-teal-400',
    iconBorder: 'border-teal-300 dark:border-teal-500/60',
    items: [
      'Gaming consoles & accessories',
      'DVD/Blu-ray players',
      'VR headsets',
      'Digital cameras',
      'Audio systems & headphones',
    ],
  },
]

export default function FreeDropOff() {
  return (
    <section className="mt-24" aria-labelledby="dropoff-heading">
      <ScrollLoader>
          <SectionHeader
            eyebrow="Free Public Drop-Off"
            title="Free E-Waste Drop-Off Recycling in Fresno, CA Accepted Electronics"
            description="Our Fresno facility welcomes a wide range of devices for responsible processing.
              Every item we accept is diverted from California landfills and handled under
              certified environmental and security standards. No appointment required."
          />
      </ScrollLoader>

      {/* Devices grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {acceptedDevices.map((cat, i) => (
          <ScrollLoader key={cat.title} delay={i * 0.08}>
              <DeviceCard key={i} {...cat} index={i} />
          </ScrollLoader>
        ))}
      </div>
    </section>
  )
}

// ─── DEVICE CARD ──────────────────────────────────────────────────────────────
function DeviceCard({
  icon: Icon,
  title,
  items,
  iconColor,
  iconBorder,
}: {
  icon: React.ElementType
  title: string
  items: string[]
  index: number
  iconColor: string
  iconBorder: string
}) {
  return (
    <article
      className="group relative rounded-md border border-stone-200 dark:border-slate-700/60 bg-white dark:bg-dark-secondary p-6 shadow-lg overflow-hidden h-full"
      aria-label={`${title} accepted for free drop-off`}
    >
      {/* Icon */}
      <div
        className={`mb-5 inline-flex items-center justify-center h-11 w-11 rounded-md border ${iconBorder}`}
      >
        <Icon
          className={`h-5 w-5 ${iconColor}`}
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-stone-900 dark:text-white mb-4 leading-tight">
        {title}
      </h3>

      {/* Items */}
      <ul className="space-y-2" aria-label={`${title} items accepted`}>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2
              className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="text-stone-700 dark:text-slate-300 leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}