import { ServiceArea, AreaService } from "./areas/types/serviceAreaTypes";

// ── Import city data files ────────────────────────────────────
import { fresnoData }       from "./areas/fresnoData";
import { sanFranciscoData } from "./areas/sanFranciscoData";
import { sanJoseData } from "./areas/sanJoseData";
import { mountainViewData } from "./areas/mountainViewData";
import { paloAltoData } from "./areas/paloAltoData";
import { sunnyvaleData } from "./areas/sunnyvaleData";
import { losGatosData } from "./areas/losGatosData";
import { campbellData } from "./areas/campbellData";
import { milpitasData } from "./areas/milpitasData";
import { menloParkData } from "./areas/menloParkData";
import { redwoodCityData } from "./areas/redwoodCityData";
import { sanMateoData } from "./areas/sanMateoData";
import { berkeleyData } from "./areas/berkeleyData";
import { fremontData } from "./areas/fremontData";
import { oaklandData } from "./areas/oaklandData";
import { southSanFranciscoData } from "./areas/southSanFranciscoData";
import { sanBrunoData } from "./areas/sanBrunoData";
import { fosterCityData } from "./areas/fosterCityData";
import { alamedaData } from "./areas/alamedaData";
import { clovisData } from "./areas/clovisData";
import { emeryvilleData } from "./areas/emeryvilleData";
import { bakersfieldData } from "./areas/bakersfieldData";
import { petalumaData } from "./areas/petalumaData";
import { pleasantonData } from "./areas/pleasantonData";
import { sacramentoData } from "./areas/sacramentoData";
import { sanRafaelData } from "./areas/sanRafaelData";
import { santaRosaData } from "./areas/santaRosaData";
import { stocktonData } from "./areas/stocktonData";
import { modestoData } from "./areas/modestoData";
import { mercedData } from "./areas/mercedData";
import { visaliaData } from "./areas/visaliaData";
import { walnutCreekData } from "./areas/walnutCreekData";
import { santaClaraData } from "./areas/santaClaraData";
import { cupertinoData } from "./areas/cupertinoData";

// ── Master list ───────────────────────────────────────────────
export const serviceAreas: ServiceArea[] = [
  fresnoData,
  sanFranciscoData,
  sanJoseData,
  mountainViewData,
  paloAltoData,
  sunnyvaleData,
  losGatosData,
  campbellData,
  milpitasData,
  menloParkData,
  redwoodCityData,
  sanMateoData,
  berkeleyData,
  fremontData,
  oaklandData,
  southSanFranciscoData,
  sanBrunoData,
  fosterCityData,
  alamedaData,
  clovisData,
  emeryvilleData,
  bakersfieldData,
  petalumaData,
  pleasantonData,
  sacramentoData,
  sanRafaelData,
  santaRosaData,
  stocktonData,
  modestoData,
  mercedData,
  visaliaData,
  walnutCreekData,
  santaClaraData,
  cupertinoData,
];

// ── Re-export types ───────────────────────────────────────────
export type { ServiceArea, AreaService };

// ── Helper functions ─────────────────────────────────────────

export function getAllAreaSlugs() {
  return serviceAreas.map((a) => ({ areaSlug: a.slug }));
}

export function getAllServiceParams() {
  return serviceAreas.flatMap((area) =>
    area.services.map((service) => ({
      areaSlug: area.slug,
      serviceSlug: service.slug,
    }))
  );
}

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getServiceBySlug(
  areaSlug: string,
  serviceSlug: string
): { area: ServiceArea; service: AreaService } | undefined {
  const area = getAreaBySlug(areaSlug);
  if (!area) return undefined;
  const service = area.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { area, service };
}