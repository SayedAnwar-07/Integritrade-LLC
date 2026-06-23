import Link from "next/link";
import { Mail, Phone } from "lucide-react";

type SidebarServiceItem = {
  slug: string;
  heroHeading: string;
};

type ServiceDetailSidebarProps = {
  area: {
    slug: string;
    name: string;
  };
  otherServices: SidebarServiceItem[];
};

export default function ServiceDetailSidebar({
  area,
  otherServices,
}: ServiceDetailSidebarProps) {
  return (
    <aside className="h-fit space-y-6 lg:sticky lg:top-24">
      <div className="bg-gradient-to-br from-[#145c28] via-[#1c7d36] to-[#2aa649] text-white overflow-hidden p-6 shadow-lg rounded-md">
        <h2 className="font-serif text-2xl font-bold">Get a Free {area.name} Quote</h2>
        <p className="mt-3 leading-7 text-white/85">
          Contact our team today for a no-obligation consultation and quote for{" "}
          {area.name}.
        </p>

        <Link
          href="/service-book/"
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3.5 font-semibold text-primary transition hover:bg-slate-100"
        >
          Schedule Pickup
        </Link>
      </div>

      <div className="rounded-md bg-white dark:bg-dark-secondary p-6 shadow-sm">
        <h3 className="font-serif text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 dark:text-gray-100">
          Contact Us
        </h3>

        <div className="mt-5 space-y-4 text-slate-600">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-emerald-600" />
            <a
              href="tel:5593254813"
              className="inline-block text-slate-700 dark:text-gray-300 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] hover:text-primary hover-dark:text-primary"
            >
              (559) 325-4813
            </a>
          </div>

          <div className="group flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:info@integritradeLLC.com"
              className="inline-block text-slate-700 dark:text-gray-300 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] hover:text-primary"
            >
              info@integritradeLLC.com
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-white dark:bg-dark-secondary p-6 shadow-sm">
        <h3 className="font-serif text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 dark:text-gray-100">
          Other Services in {area.name}
        </h3>

        {otherServices.length > 0 ? (
          <div className="mt-5 space-y-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/service-area/${area.slug}/${item.slug}/`}
                className="block py-3 border-b text-sm font-medium text-slate-700 dark:text-gray-300 transform-gpu transition-all duration-500 ease-out hover:scale-[1.02] hover:border-primary/40 hover:text-primary"
              >
                {item.heroHeading}
              </Link>
            ))}

            <Link
              href={`/service-area/${area.slug}`}
              className="inline-flex pt-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-gray-300"
            >
              ← All {area.name} services
            </Link>
          </div>
        ) : (
          <div className="mt-5">
            <p className="text-slate-500">More services coming soon.</p>
            <Link
              href={`/service-area/${area.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-gray-300"
            >
              ← All {area.name} services
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}