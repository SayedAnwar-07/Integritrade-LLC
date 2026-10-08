import { Mail, MapPin, Phone } from "lucide-react";

// Contact card beside the closing call to action on the industry pages (Ian,
// 2026-10-08): a heading that says who you will reach, then the address (opens
// Google Maps), phone and email.
const MAPS_URL = "https://maps.app.goo.gl/foJtYrjryesSmFoG7";

const linkClass =
  "text-[15px] leading-relaxed text-gray-800 transition-colors hover:text-emerald-700 dark:text-gray-100 dark:hover:text-emerald-400";

const iconClass = "mt-1 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400";

export default function ExpertContactCard() {
  return (
    <div className="bg-white dark:bg-dark-secondary rounded-md shadow-sm p-8 lg:p-10">
      <div className="mb-8">
        <h3 className="font-serif text-2xl lg:text-[26px] font-semibold tracking-tight leading-tight text-stone-900 dark:text-white">
          Speak Directly with an IT Asset Disposition Expert
        </h3>
        <div className="mt-5 h-px bg-gray-200 dark:bg-gray-700/60" />
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className={iconClass} />
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            944 S. Topeka Ave
            <br />
            Fresno, CA 93721
          </a>
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-700/60" />

        <div className="flex items-start gap-4">
          <Phone className={iconClass} />
          <a href="tel:+15593254813" className={linkClass}>
            (559) 325-4813
          </a>
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-700/60" />

        <div className="flex items-start gap-4">
          <Mail className={iconClass} />
          <a href="mailto:info@integritradeLLC.com" className={`${linkClass} break-all`}>
            <span data-nosnippet="">info@integritradeLLC.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
