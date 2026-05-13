import { Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

import PageHeader from "@/components/shared/PageHeader";
import AllBlogCardsComponent from '@/components/EightBlogCards';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import decommissionBanner from "@/public/blogs/decommission-computers.jpg";
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function Decommission() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="ITAD Guide"
          title="How to Properly Decommission Old Computers and Office Equipment"
          description="A clear, secure, and compliant approach to retiring outdated technology covering data destruction, chain of custody, certified recycling, and audit-ready documentation."
        />
        </ScrollLoader>

        {/* Meta Information */}
        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2025-12-21">December 21, 2025</time>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>IT Asset Management</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span>10 min read</span>
        </div>
        </ScrollLoader>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* Article Content */}
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
            <figure className="mb-12 overflow-hidden rounded-lg">
              <Image
                src={decommissionBanner}
                alt="Properly decommissioning old computers and office equipment"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                Most organizations replace computers, servers, and office electronics every few years. What surprises many is that retiring this equipment is rarely as simple as unplugging it and sending it out the door. Modern devices store sensitive data, contain hazardous materials, and fall under strict state and federal regulations.
              </p>
              <p className="text-justify">
                Done poorly, decommissioning exposes the business to data breaches, legal violations, environmental liability, and meaningful fines. Done properly, it&apos;s a structured process that protects information, recovers value where possible, and produces the documentation auditors expect.
              </p>
            </div>
            </ScrollLoader>

            {/* What Is IT Equipment Decommissioning */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What IT Equipment Decommissioning Actually Involves
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Decommissioning is the structured removal of outdated or unused technology from a business environment. It covers data backup, certified data wiping or destruction, removal of internal storage components, secure packing and labeling, certified recycling or refurbishment, and the documentation that ties the entire process together for compliance.
                </p>
                <p className="text-justify">
                  The scope is broader than most teams initially assume. Desktops, laptops, servers, monitors, networking equipment, VoIP phones, storage arrays, POS systems, and multifunction printers and copiers all fall within scope because every one of them stores or processes data.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Why It Matters */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why Proper Decommissioning Matters
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  The risks of mishandled decommissioning fall into four interconnected categories, each capable of causing serious harm on its own.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Preventing data breaches
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Retired computers, servers, printers, and copiers routinely contain employee records, customer data, financial documents, internal communications, and credentials. A single overlooked hard drive can lead to identity theft, fraud, and direct regulatory exposure.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Avoiding legal violations
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Electronics are banned from landfills in 25+ states, including California, New York, Illinois, Colorado, Massachusetts, and Minnesota. Frameworks such as HIPAA, SOX, FERPA, FACTA, and state privacy laws require defensible handling of data-bearing devices, with clear penalties for non-compliance.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Limiting environmental damage
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Lead, mercury, cadmium, and arsenic are common inside everyday office electronics. Improper disposal allows these substances to leach into soil and groundwater, contributing to one of the fastest-growing pollution categories in the world.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Reducing corporate liability
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Beyond regulatory fines, mishandled disposal can trigger civil litigation, loss of certifications, and lasting damage to brand reputation. Strong decommissioning is, in practical terms, a risk-management discipline.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Hazardous Materials Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why Electronics Don&apos;t Belong in the Trash
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The materials inside everyday office electronics are exactly why landfill disposal is restricted in so many jurisdictions.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Hazardous Substance</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Common Source</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Health and Environmental Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Lead</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">CRT monitors, solder</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Brain and kidney damage</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Mercury</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">LED backlights, switches</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Affects the nervous system</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Cadmium</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Batteries, circuit boards</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Known carcinogen</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Arsenic</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Semiconductors, displays</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Toxic to humans and wildlife</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* Step-by-Step Guide */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                A Step-by-Step Decommissioning Process
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                A repeatable process is what turns decommissioning from a stressful event into a routine operation. Each stage below contributes a specific control, and together they form a defensible chain of custody from intake to final disposition.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    1. Build a complete IT asset inventory
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Before anything moves, capture asset numbers, serial numbers, device types, assigned users, condition, hard drive status, and any special handling notes. A complete inventory ensures traceability, prevents loss, and makes downstream reporting straightforward.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    2. Back up and migrate critical data
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Confirm that everything important has been backed up to cloud platforms, network storage, or relevant business systems before any device is wiped. A zero-data-loss policy keeps operations running smoothly through the transition.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    3. Sanitize, wipe, or destroy data securely
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    This is the most critical stage. Data should be eliminated using methods aligned with NIST 800-88, DoD 5220.22-M, HIPAA/HITECH, or GLBA depending on the regulatory environment. Certified wiping suits reusable drives, degaussing handles legacy magnetic media, and physical destruction covers damaged drives or environments that mandate it.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    4. Remove sensitive components from office equipment
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Multifunction printers, copiers, fax machines, and high-volume office printers commonly hold internal storage. Hard drives and memory modules should be extracted and sanitized before the host device is recycled.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    5. Disconnect, label, and prepare for pickup
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Cables come off, devices are labeled by department or user, similar units are grouped, accessories are bagged, and fragile equipment is properly packed. Organized handoff reduces in-transit damage and accelerates downstream processing.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    6. Choose a certified e-waste recycling partner
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Uncertified haulers carry real risk illegal export, security violations, or unsafe overseas dumping. Look for R2v3, e-Stewards, ISO 14001, ISO 45001, and which together cover responsible recycling, environmental management, worker safety, and data destruction.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    7. Arrange secure transport and chain of custody
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    A qualified ITAD partner uses GPS-tracked vehicles, locked transport containers, sealed bins, digital asset tracking, and scan-in/scan-out logs. This continuity is especially important for healthcare, finance, education, government, and enterprise environments.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    8. Receive certificates of destruction and recycling
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    At completion, expect a Certificate of Data Destruction, an equipment serial number report, and a recycling or refurbishment summary. These three documents together support audits, compliance reviews, ESG reporting, and any legal requirement to prove how data and assets were handled.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Equipment Specific */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Special Considerations by Equipment Type
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Different categories of office equipment carry different risks and need slightly different handling.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Printers and copiers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Modern multifunction devices store printed documents, scanned files, copy jobs, and user credentials on internal drives. The drive should be removed and sanitized or destroyed before the device is disconnected, packed, and sent for certified recycling.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Servers and networking equipment
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Servers commonly hold customer databases, employee records, financial data, and administrative credentials. Back up everything required, wipe RAID arrays, remove SSD and HDD media, decommission switches and firewalls, and prepare the hardware for secure recycling with full documentation.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Monitors (LCD, LED, and CRT)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Displays require special handling because of their internal materials. LED backlights contain mercury and CRT monitors contain leaded glass, both of which require certified facilities equipped to manage hazardous components responsibly.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Sustainability Benefits */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Sustainability Case for Proper IT Recycling
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Beyond compliance, structured decommissioning delivers measurable environmental and economic benefits that increasingly matter for ESG reporting and corporate sustainability goals.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Less landfill waste
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Electronics are one of the fastest-growing toxic waste streams worldwide. Certified recycling keeps hazardous materials out of soil and groundwater and away from communities near disposal sites.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Recovery of raw materials
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Recycling reclaims gold, silver, copper, palladium, and aluminum, reducing demand for new mining and the environmental footprint that comes with it.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Lower carbon emissions
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Reusing components and recovering materials avoids the energy-intensive manufacturing required to build replacements from scratch, lowering total emissions across the asset lifecycle.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Cost and Partner Selection */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Costs and How to Choose the Right ITAD Partner
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Decommissioning costs vary based on the number of devices, the type of data destruction required, pickup distance, whether processing is on-site or off-site, and the certification level needed. Most pricing scales reasonably with volume, and value recovery from resold assets often offsets a portion of the cost.
                </p>
                <p className="text-justify">
                  Selecting the right partner is what determines whether the program is genuinely defensible or merely cost-effective. The questions below separate qualified providers from the rest.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Are they R2v3 certified?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    R2v3 is the recognized standard for responsible electronics recycling and a baseline expectation for any serious ITAD provider.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Do they offer on-site data destruction?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    For sensitive environments, performing destruction at your location eliminates the in-transit risk window entirely.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Do they provide chain-of-custody documentation?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Without continuous tracking from pickup to final disposition, the rest of the program loses much of its audit value.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Are they insured and compliant with state laws?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Verified insurance and clear adherence to state-level e-waste and privacy regulations protect your organization from inheriting a partner&apos;s exposure.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* FAQ Section */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    How long does decommissioning take?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Most projects complete in one to five business days depending on volume. Many ITAD providers offer scheduled or same-week pickup for routine decommissioning work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Can we observe the shredding process?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Yes. Certified providers commonly offer in-person witnessing or video-verified shredding, providing transparency and an additional layer of audit assurance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Do printers and copiers really store data?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Almost all modern office printers contain internal memory that retains printed, scanned, and copied documents along with user credentials. Treating them as data-bearing devices is the safe default.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Are we required to destroy data?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      For most organizations, yes. HIPAA, SOX, FERPA, GDPR, and various industry-specific frameworks require defensible data sanitization before retired devices leave organizational control.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What certifications should we look for?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      R2v3 for responsible recycling, e-Stewards for environmental excellence, ISO 14001 for environmental management, ISO 45001 for worker safety, and for data destruction are the recognized standards to expect from a qualified partner.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
            </ScrollLoader>

            {/* Conclusion */}
            <ScrollLoader>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Final Thoughts
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Properly decommissioning old computers and office electronics is not optional. The risks of doing it informally data breaches, regulatory penalties, environmental harm, and corporate liability are too well-documented to ignore.
                </p>
                <p className="text-justify">
                  A repeatable process and a certified ITAD partner turn decommissioning into a controlled, predictable part of the IT lifecycle. The result is stronger security, cleaner compliance, measurable sustainability outcomes, and a smoother transition every time the business upgrades its technology.
                </p>
              </div>
            </section>
            </ScrollLoader>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <AllBlogCardsComponent />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}