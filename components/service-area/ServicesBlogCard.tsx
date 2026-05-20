import Image from "next/image";
import Link from "next/link";
import { AreaService } from "@/data/areas/types/serviceAreaTypes";
import { ArrowUpRight } from "lucide-react";
import { truncate } from "@/lib/truncate";

interface Props {
  service: AreaService;
  areaSlug: string;
}

export function ServicesBlogCard({ service, areaSlug }: Props) {
  return (
    <article className="group h-full">
      <div className="h-full overflow-hidden rounded-md shadow-lg bg-white dark:bg-dark-secondary">
        <Link
          href={`/service-area/${areaSlug}/${service.slug}`}
          className="flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 ease-out hover:border-emerald-600/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-gray-800 dark:bg-dark-secondary dark:hover:border-emerald-500/40 shadow-lg"
        >
          <div className="relative h-52 w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

           {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                <h2 className="mb-3 font-serif text-xl leading-snug text-gray-900 transition-colors group-hover:text-emerald-700 dark:text-gray-50 dark:group-hover:text-emerald-400 line-clamp-2 min-h-[3.5rem]">
                  {service.title}
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                  {truncate(service.shortDescription, 80)}
                </p>

                <div className="mt-auto flex items-center gap-1.5 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-700 dark:text-gray-300">
                    Read article
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-emerald-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-emerald-500"
                    strokeWidth={2}
                  />
                </div>
              </div>
        </Link>
      </div>
    </article>
  );
}