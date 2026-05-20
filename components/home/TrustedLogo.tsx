"use client"

import Image from "next/image"
import Avis_Car_Rental_USA from "@/public/TrustedLogo/Avis_Car_Rental_USA.png"
import Budget_Rent_Car_USA from "@/public/TrustedLogo/Budget_Rent_Car_USA.png"
import Department_of_Transportation_USA from "@/public/TrustedLogo/Department_of_Transportation_USA.png"
import Department_of_the_Interior__USA from "@/public/TrustedLogo/Department_of_the_Interior__USA.png"
import Federal_Aviation_Administration_USA from "@/public/TrustedLogo/Federal_Aviation_Administration_USA.svg"
import Macias_USA from "@/public/TrustedLogo/Macias_USA.svg"
import National_Park_Service_USA from "@/public/TrustedLogo/National_Park_Service_USA.svg"
import united_states_cold_storage_USA from "@/public/TrustedLogo/united_states_cold_storage_USA.png"
import ScrollLoader from "../shared/ScrollLoader"

const logos = [
  { src: Avis_Car_Rental_USA,                 alt: "Avis Car Rental" },
  { src: Budget_Rent_Car_USA,                 alt: "Budget Rent a Car" },
  { src: Department_of_Transportation_USA,    alt: "U.S. Department of Transportation" },
  { src: Department_of_the_Interior__USA,     alt: "U.S. Department of the Interior" },
  { src: Federal_Aviation_Administration_USA, alt: "Federal Aviation Administration" },
  { src: Macias_USA,                          alt: "Macias" },
  { src: National_Park_Service_USA,           alt: "National Park Service" },
  { src: united_states_cold_storage_USA,      alt: "United States Cold Storage" },
]

const track = [...logos, ...logos]

export default function TrustedLogos() {
  return (
    <section className="py-20 bg-secondary dark:bg-[#0a1f28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto overflow-hidden">
         <ScrollLoader>
            {/* Carousel */}
            <div className="relative overflow-hidden"> 
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10
                bg-gradient-to-r from-gray-50 dark:from-[#013242] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10
                bg-gradient-to-l from-gray-50 dark:from-[#013242] to-transparent pointer-events-none" />

              {/* Scrolling track */}
              <div className="flex w-max animate-[trustedScroll_28s_linear_infinite]">
                  {track.map((logo, i) => (
                      <div
                          key={i}
                          className="flex items-center justify-center
                          w-[200px] h-[130px]
                          sm:w-[230px] sm:h-[140px]
                          md:w-[280px] md:h-[170px]
                          lg:w-[300px] lg:h-[170px]
                          mx-2 sm:mx-3 md:mx-4
                          flex-shrink-0
                          bg-white
                          border border-gray-200 
                          hover:border-[#2aac61]/60
                          rounded-sm transition-all duration-300 group
                          px-3 sm:px-4 md:px-6 lg:px-8"
                      >
                          <Image
                              src={logo.src}
                              alt={logo.alt}
                              height={160}
                              width={280}
                              className="object-contain
                                  max-h-[80px] sm:max-h-[95px] md:max-h-[115px] lg:max-h-[130px]
                                  max-w-[90%]
                                  w-auto
                                  opacity-90
                                  group-hover:grayscale-0 group-hover:opacity-100
                                  transition-all duration-300"
                          />
                      </div>
                  ))}
              </div>
            </div>
        </ScrollLoader>

      </div>
    </section>
  )
}