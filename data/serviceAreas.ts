import {
  ServiceArea,
  AreaService,
} from "./areas/types/serviceAreaTypes";

// ── Existing city data ───────────────────────────────────────

import { fresnoData } from "./areas/fresnoData";
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

// ── Southern California expansion ────────────────────────────
// Added from the latest client request.
// Each city is registered here so Next.js can generate its
// /service-area/[areaSlug] page and related service pages.

// Los Angeles County
import { losAngelesData } from "./areas/losAngelesData";
import { santaMonicaData } from "./areas/santaMonicaData";
import { culverCityData } from "./areas/culverCityData";
import { elSegundoData } from "./areas/elSegundoData";
import { torranceData } from "./areas/torranceData";
import { pasadenaData } from "./areas/pasadenaData";
import { glendaleData } from "./areas/glendaleData";
import { burbankData } from "./areas/burbankData";
import { longBeachData } from "./areas/longBeachData";

// Orange County
import { irvineData } from "./areas/irvineData";
import { newportBeachData } from "./areas/newportBeachData";
import { costaMesaData } from "./areas/costaMesaData";
import { anaheimData } from "./areas/anaheimData";
import { santaAnaData } from "./areas/santaAnaData";
import { huntingtonBeachData } from "./areas/huntingtonBeachData";

// San Diego County
import { sanDiegoData } from "./areas/sanDiegoData";
import { laJollaData } from "./areas/laJollaData";
import { sorrentoValleyData } from "./areas/sorrentoValleyData";
import { carlsbadData } from "./areas/carlsbadData";
import { oceansideData } from "./areas/oceansideData";
import { chulaVistaData } from "./areas/chulaVistaData";

// Inland Empire — San Bernardino & Riverside Counties
import { ontarioData } from "./areas/ontarioData";
import { ranchoCucamongaData } from "./areas/ranchoCucamongaData";
import { riversideData } from "./areas/riversideData";
import { sanBernardinoData } from "./areas/sanBernardinoData";
import { coronaData } from "./areas/coronaData";

// ── Master service-area registry ──────────────────────────────

export const serviceAreas: ServiceArea[] = [
  // Existing service areas
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

  // ── Los Angeles County ─────────────────────────────────────
  losAngelesData,
  santaMonicaData,
  culverCityData,
  elSegundoData,
  torranceData,
  pasadenaData,
  glendaleData,
  burbankData,
  longBeachData,

  // ── Orange County ──────────────────────────────────────────
  irvineData,
  newportBeachData,
  costaMesaData,
  anaheimData,
  santaAnaData,
  huntingtonBeachData,

  // ── San Diego County ───────────────────────────────────────
  sanDiegoData,
  laJollaData,
  sorrentoValleyData,
  carlsbadData,
  oceansideData,
  chulaVistaData,

  // ── Inland Empire ──────────────────────────────────────────
  ontarioData,
  ranchoCucamongaData,
  riversideData,
  sanBernardinoData,
  coronaData,
];

// ── Re-export shared types ───────────────────────────────────

export type {
  ServiceArea,
  AreaService,
};

// ── Static route helpers ─────────────────────────────────────

export function getAllAreaSlugs() {
  return serviceAreas.map((area) => ({
    areaSlug: area.slug,
  }));
}

export function getAllServiceParams() {
  return serviceAreas.flatMap((area) =>
    area.services.map((service) => ({
      areaSlug: area.slug,
      serviceSlug: service.slug,
    })),
  );
}

// ── Lookup helpers ───────────────────────────────────────────

export function getAreaBySlug(
  slug: string,
): ServiceArea | undefined {
  return serviceAreas.find(
    (area) => area.slug === slug,
  );
}

export function getServiceBySlug(
  areaSlug: string,
  serviceSlug: string,
): {
  area: ServiceArea;
  service: AreaService;
} | undefined {
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    return undefined;
  }

  const service = area.services.find(
    (item) => item.slug === serviceSlug,
  );

  if (!service) {
    return undefined;
  }

  return {
    area,
    service,
  };
}