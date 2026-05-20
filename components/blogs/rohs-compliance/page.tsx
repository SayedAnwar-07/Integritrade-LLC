import { Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

import PageHeader from "@/components/shared/PageHeader";
import AllBlogCardsComponent from '@/components/EightBlogCards';
import ScrollLoader from '@/components/shared/ScrollLoader';

import rohsImage from "@/public/blogs/rohs-compliance.jpg";

export default function RohsCompliance() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="Environmental Compliance"
            title="What Is RoHS Compliance? Toxic Metals in Electronics Explained"
            description="RoHS restricts the toxic metals that electronics manufacturing once used routinely. Behind the acronym is a global compliance regime that shapes how devices are built, sold, and ultimately disposed of."
          />
        </ScrollLoader>

        {/* Meta */}
        <ScrollLoader>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-12-22">December 22, 2025</time>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>IT Asset Management</span>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span>9 min read</span>
          </div>
        </ScrollLoader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
              <figure className="mb-12 overflow-hidden rounded-lg">
                <Image
                  src={rohsImage}
                  alt="What is RoHS compliance: toxic metals in electronics manufacturing"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Modern electronics power nearly every part of daily life from smartphones and laptops to medical devices and industrial machinery. Behind that growth sits a real concern: the toxic metals and hazardous substances historically used in electronics manufacturing, and the long tail of environmental and health consequences they create when devices reach end-of-life.
                </p>
                <p className="text-justify">
                  RoHS compliance is the global regulatory response. This guide explains what RoHS is, which toxic metals it restricts, and why it has become a structural part of how electronics are designed, sold, and recycled worldwide.
                </p>
              </div>
            </ScrollLoader>

            {/* What RoHS Stands For */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  What RoHS Stands For
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    RoHS stands for Restriction of Hazardous Substances. It&apos;s a regulatory directive that limits or bans specific toxic metals and chemicals in electronics manufacturing substances known to cause neurological damage, organ toxicity, environmental contamination, and long-term ecosystem harm. The framework ensures electronic products are safer to manufacture, use, recycle, and dispose of, and it now serves as the foundational compliance regime for any manufacturer or supplier operating in global electronics markets.
                  </p>
                  <p className="text-justify">
                    As electronic devices became more advanced and affordable, electronic waste surged worldwide. Many components historically contained heavy metals and hazardous chemicals that leak into soil, water, and air when disposed of improperly. RoHS exists to limit those risks at the point of manufacture, before the harm can compound at end-of-life.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* History and Evolution */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  History and Evolution of the RoHS Directive
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    The RoHS Directive was adopted by the European Union in 2003 and came into effect in 2006, with the original goal of reducing hazardous substances in electronics sold within the EU. It quickly became a global benchmark, influencing regulations in China, the UK, South Korea, India, and many other major markets. The directive has gone through three major revisions, each one widening scope and tightening enforcement.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      RoHS 1 (2006)
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Introduced the original substance restrictions for major electronics categories, establishing the framework that subsequent revisions would build on.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      RoHS 2 (2011)
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Expanded scope, added the CE marking requirement for electronics sold in the EU, and significantly improved enforcement mechanisms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      RoHS 3 (2015)
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Added four phthalates to the restricted substance list and brought medical and monitoring equipment into scope, closing categories that had previously been exempt.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Restricted Substances */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Substances Restricted Under RoHS
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  RoHS sets maximum allowable concentrations for specific hazardous substances commonly found in electronics components. The current restricted list and their primary uses and risks:
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Substance</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Common Use</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Primary Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Lead (Pb)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Solder, circuit boards</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Brain and nervous system damage</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Mercury (Hg)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Switches, relays, lighting</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Aquatic bioaccumulation, neurotoxicity</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Cadmium (Cd)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Batteries, pigments, coatings</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Kidney failure, increased cancer risk</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Hexavalent Chromium (Cr VI)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Corrosion protection</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Carcinogenic, respiratory harm</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">PBBs and PBDEs</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Flame retardants in plastics</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Hormone disruption, tissue accumulation</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Phthalates (DEHP, BBP, DBP, DIBP)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Plasticizers in cables, casings</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Endocrine disruption</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollLoader>

            {/* Why RoHS Matters */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Why RoHS Compliance Matters
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    RoHS compliance is legally mandatory for selling electronics in regulated markets. Non-compliance can trigger product recalls, heavy fines, import and export bans, and reputational damage that lingers far longer than the original violation. To meet the standard, manufacturers must maintain technical documentation, testing records, and declarations of conformity that hold up to regulatory review.
                  </p>
                  <p className="text-justify">
                    Beyond legal obligation, RoHS compliance delivers strategic value: access to international markets that require it, improved brand trust and ESG positioning, reduced environmental liability across the product lifecycle, and alignment with the sustainability standards that increasingly shape investor and customer evaluation. Consumers and procurement teams now actively prefer compliant electronics, making RoHS less of a regulatory burden and more of a competitive necessity.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Health and Environmental Impact */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Health and Environmental Impact
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Exposure to restricted substances during manufacturing, use, or disposal can produce neurological disorders, hormonal imbalances, respiratory diseases, and long-term chronic illness. Children and pregnant women are particularly vulnerable, which is one of the reasons regulators have moved aggressively on these substances over the past two decades.
                  </p>
                  <p className="text-justify">
                    Factory workers face the highest exposure risk through direct contact with raw materials, while consumers can be exposed through device overheating, improper disposal, and informal recycling processes especially common in regions where e-waste is exported without certified recycling controls. RoHS compliance significantly reduces all of these exposure pathways.
                  </p>
                  <p className="text-justify">
                    When non-compliant electronics are dumped or burned, toxic metals leach into groundwater, pollute agricultural soil, and enter drinking water supplies. Heavy metals also bioaccumulate in plants and animals, disrupting ecosystems and food chains in ways that compound across decades. RoHS limits long-term environmental damage by preventing these toxic inputs at the manufacturing stage rather than trying to clean them up afterward.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* How Manufacturers Comply */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How Manufacturers Achieve Compliance
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Compliance involves three connected disciplines: substituting restricted materials, verifying the substitutions through testing, and producing the documentation that proves it.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Material selection and lead-free components
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Manufacturers replace restricted substances with safer alternatives lead-free solder alloys in place of traditional tin-lead solder, mercury-free lighting components, and eco-friendly polymers in place of brominated flame retardants where the engineering allows.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Testing and verification
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Compliance is verified through X-ray fluorescence (XRF) screening, laboratory chemical analysis, and supplier material declarations covering every component in the bill of materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Documentation and declaration of conformity
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Manufacturers maintain technical files, test reports, and the EU Declaration of Conformity that demonstrates ongoing compliance to regulators and customers. The documentation is what makes the compliance defensible during audit.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* RoHS vs Other Regulations */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  RoHS vs Other Electronics Regulations
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  RoHS is part of a broader regulatory framework. Three directives commonly overlap, each addressing different parts of the electronics lifecycle.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Regulation</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Scope</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Primary Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">RoHS</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Electronics manufacturing</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Restricts hazardous substances in products</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">REACH</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">All industries</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Controls chemicals across supply chains</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">WEEE</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Electronics end-of-life</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Mandates recycling and disposal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                  Together, these regulations support a circular electronics economy: RoHS prevents toxic inputs at manufacture, REACH governs chemicals more broadly, and WEEE handles end-of-life. Manufacturers operating internationally typically need to comply with all three.
                </p>
              </section>
            </ScrollLoader>

            {/* Common Myths */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Common Myths About RoHS
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Two misunderstandings show up regularly in procurement and product discussions, and both are worth correcting.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Is RoHS mandatory worldwide?
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      RoHS is not formally universal, but RoHS-equivalent laws have been adopted across major markets including the EU, UK, China, South Korea, and India. For any manufacturer operating internationally, compliance is effectively required regardless of where the product was originally designed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Does RoHS mean completely non-toxic?
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      No. RoHS sets maximum allowable concentration values for specific substances rather than requiring zero presence. Some exemptions exist where alternatives aren&apos;t yet technically feasible such as specialized medical equipment or certain industrial controls. The directive is designed to be ambitious but practical.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Future of RoHS */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Future of RoHS and Sustainable Electronics
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Electronics manufacturing is moving toward eco-design principles, carbon-neutral production targets, and verifiably sustainable supply chains. RoHS will continue evolving alongside ESG and climate regulations, with future revisions likely to expand the substance list and tighten the documentation requirements.
                  </p>
                  <p className="text-justify">
                    For organizations handling electronics at any scale from manufacturers building products to enterprises retiring fleets RoHS-aligned thinking is increasingly the foundation of how environmental responsibility actually gets implemented.
                  </p>
                </div>
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
                    RoHS compliance is more than a regulatory requirement. It&apos;s a structural commitment to human health, environmental protection, and responsible manufacturing that has reshaped global electronics over the past two decades. By restricting toxic metals at the point of manufacture, RoHS reduces pollution, prevents downstream health risks, and supports the kind of innovation that keeps electronics economically and environmentally sustainable.
                  </p>
                  <p className="text-justify">
                    As demand for electronics continues to grow, RoHS-aligned manufacturing remains essential for any company that wants to operate ethically, competitively, and sustainably and for any organization downstream that needs the resulting products to be safe to use, recycle, and dispose of.
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