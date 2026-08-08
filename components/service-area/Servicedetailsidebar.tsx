import Link from "next/link";
import ConsultationForm from "@/components/contact/ConsultationForm";

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
  serviceTitle?: string;
};

export default function ServiceDetailSidebar({
  area,
  otherServices,
  serviceTitle,
}: ServiceDetailSidebarProps) {
  return (
    <aside className="h-fit space-y-6 lg:sticky lg:top-24">
      {/* Free consultation form */}
      <ConsultationForm industry={serviceTitle || area.name} />

      {/* Other services in this area */}
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
