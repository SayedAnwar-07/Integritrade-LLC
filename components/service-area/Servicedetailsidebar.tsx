import Link from "next/link";
import { Mail, Phone } from "lucide-react";

type SidebarServiceItem = {
  slug: string;
  title: string;
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
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden p-6 shadow-sm rounded-md">
        <h2 className="font-serif text-2xl font-bold">Get a Free {area.name} Quote</h2>
        <p className="mt-3 leading-7 text-white/85">
          Contact our team today for a no-obligation consultation and quote for{" "}
          {area.name}.
        </p>

        <Link
          href="/service-book/"
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3.5 font-semibold text-[#065f46] transition hover:bg-slate-100"
        >
          Schedule Pickup
        </Link>
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900">
          Contact Us
        </h3>

        <div className="mt-5 space-y-4 text-slate-600">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-emerald-600" />
            <a
              href="tel:5593254813"
              className="transition hover:text-slate-900"
            >
              (559) 325-4813
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-emerald-600" />
            <a
              href="mailto:info@integritradeLLC.com"
              className="transition hover:text-slate-900"
            >
              info@integritradeLLC.com
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900">
          Other Services in {area.name}
        </h3>

        {otherServices.length > 0 ? (
          <div className="mt-5 space-y-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/service-area/${area.slug}/${item.slug}/`}
                className="block rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href={`/service-area/${area.slug}`}
              className="inline-flex pt-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              ← All {area.name} services
            </Link>
          </div>
        ) : (
          <div className="mt-5">
            <p className="text-slate-500">More services coming soon.</p>
            <Link
              href={`/service-area/${area.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              ← All {area.name} services
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}