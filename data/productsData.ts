/**
 * The devices we accept, one page each.
 *
 * Shape borrowed from ERI's "Products We Recycle". Length borrowed too: their
 * pages run about 250 words and say one useful thing per section. Ours are
 * written to the same budget.
 *
 * What we do not copy is their interchangeability. Every device answers, in
 * its own words, how we handle it, what comes off it and what it is actually
 * worth. Where the answer is "nothing" we say so in one line.
 *
 * There is deliberately no "what is at risk" section. Ian cut it on
 * 2026-09-20 as fear-mongering, and is writing his own field notes per device
 * instead. Those go in `fieldNotes`.
 *
 * Keep it tight. If a sentence does not tell the reader something they can act
 * on, cut it.
 */

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type HandlingStep = {
  title: string;
  text: string;
};

export type Product = {
  slug: string;
  /** Short label for cards, breadcrumbs and nav. */
  name: string;
  /** H1. Carries the search term. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** One short paragraph. */
  intro: string;
  /**
   * Ian's own notes on what he has actually seen with this device. He writes
   * these himself from real jobs, the way the service pages were done. The
   * section simply does not render until he has supplied one, so a device
   * without notes yet is not a half-finished page.
   */
  fieldNotes?: { heading: string; text: string };
  handling: { heading: string; steps: HandlingStep[] };
  commodities: string[];
  compliance: string[];
  /** One or two sentences, including when the answer is "none". */
  valueRecovery: string;
  faqs: ProductFAQ[];
  related: string[];
};

export const productsData: Product[] = [
  {
    slug: "laptops",
    name: "Laptops",
    title: "Laptop Recycling",
    metaTitle: "Laptop Recycling & Data Destruction | R2v3 Certified",
    metaDescription:
      "Certified laptop recycling with NIST 800-88 sanitization, lithium battery handling and asset-level reporting. Nationwide pickup from Fresno, CA.",
    intro:
      "Laptops dominate most refresh cycles and are the asset most likely to go missing between a desk and a disposal partner. We register each unit at your site, not at our dock.",
    fieldNotes: {
      heading: "What we see with laptops",
      text: "Some clients pull the drives before the laptops reach us, which is no problem: we record those units as arriving without media so your paperwork matches the hardware. Others do not realize a laptop can hold more than one drive. We open every chassis and count what is physically in it rather than working from the asset list.",
    },
    handling: {
      heading: "How we handle laptops",
      steps: [
        { title: "Registered at collection", text: "Scanned to your account before it leaves your building." },
        { title: "Battery removed", text: "Lithium cells pulled to a separate stream; swollen cells isolated on intake." },
        { title: "Drive sanitized or destroyed", text: "NIST SP 800-88 purge for reuse, or shredded to 2 mm. Either way you get a serialized certificate." },
        { title: "Graded or demanufactured", text: "Units that pass are graded for resale. The rest are broken down for materials." },
      ],
    },
    commodities: [
      "Aluminum and magnesium chassis",
      "Lithium-ion cells",
      "Boards carrying gold, silver and palladium",
      "Copper wiring and heat pipes",
      "LCD panel glass",
    ],
    compliance: [
      "R2v3 downstream chain and focus materials",
      "NIST SP 800-88 sanitization",
      "US DOT 49 CFR lithium transport",
    ],
    valueRecovery:
      "Our strongest resale category. Business-class units three to five years old carry real residual value, and we report recovery per asset so you can plan the next refresh around it.",
    faqs: [
      {
        question: "Can Integritrade collect laptops from remote employees?",
        answer:
          "Yes. We ship a prepaid, tracked kit to the employee. The unit is registered to your account the moment the label is issued.",
      },
      {
        question: "Do you remove the drive or wipe it in place?",
        answer:
          "Both. Units being resold are sanitized in place to NIST SP 800-88 and verified. Retired units have the drive removed and shredded to 2 mm.",
      },
      {
        question: "What about swollen batteries?",
        answer:
          "Isolated at intake and moved to a contained stream. Flag any you know about when booking, as they change how we pack the load.",
      },
    ],
    related: ["desktop-computers", "hard-drives", "phones-and-tablets"],
  },

  {
    slug: "desktop-computers",
    name: "Desktop Computers",
    title: "Desktop Computer and Workstation Recycling",
    metaTitle: "Desktop & Workstation Recycling | R2v3 Certified",
    metaDescription:
      "Secure desktop and workstation disposal with drive extraction, NIST 800-88 sanitization and asset-level reporting. R2v3 certified recycling in Fresno, CA.",
    intro:
      "Desktops stay in service long enough to accumulate storage nobody recorded. A tower that shipped with one drive often comes back with two.",
    handling: {
      heading: "How we handle desktops",
      steps: [
        { title: "Every chassis opened", text: "Storage is counted physically, not taken from your asset list." },
        { title: "Discrepancies reported", text: "Any drive that does not reconcile against your list is flagged before processing." },
        { title: "Drives destroyed or sanitized", text: "Removed and shredded to 2 mm, or sanitized to NIST SP 800-88 for reuse." },
        { title: "Components recovered", text: "Memory, processors and graphics cards tested and kept with the unit or recovered separately." },
      ],
    },
    commodities: [
      "Steel and aluminum chassis",
      "Power supply copper",
      "Motherboards and expansion cards",
      "Aluminum and copper heatsinks",
      "Engineering plastics",
    ],
    compliance: [
      "R2v3 downstream chain and focus materials",
      "NIST SP 800-88 sanitization",
      "R2v3 data sanitization for any unit resold",
    ],
    valueRecovery:
      "Standard office desktops are a commodity recovery and we will tell you when a fleet is not worth remarketing. Workstations with current GPUs or high core counts are the exception and worth separating out.",
    faqs: [
      {
        question: "Will you tell us if a machine had a drive we did not know about?",
        answer:
          "Yes, and it is a common finding. Every chassis is opened and counted, and anything that does not match your list is reported back.",
      },
      {
        question: "Do the machines need to be working or logged in?",
        answer:
          "No. We never ask for credentials. Drives are handled physically, so a dead or locked machine is processed the same way.",
      },
      {
        question: "Can you take all-in-ones?",
        answer:
          "Yes. They are handled as a computer and a display in one chassis, so both the drive and panel processes apply.",
      },
    ],
    related: ["laptops", "monitors-and-displays", "hard-drives"],
  },

  {
    slug: "servers",
    name: "Servers & Data Center Equipment",
    title: "Server and Data Center Equipment Recycling",
    metaTitle: "Server & Data Center Equipment Recycling | R2v3",
    metaDescription:
      "Rack decommissioning with serialized per-drive destruction, chain-of-custody records and value recovery on processors, memory and drives. R2v3 certified.",
    intro:
      "One retired server can hold more than a floor of laptops, and a rack decommission compresses that into a short window with contractors and carriers in play. We de-rack, label and palletize on site.",
    handling: {
      heading: "How we handle servers",
      steps: [
        { title: "On-site decommission", text: "De-racked and palletized in your cage, with the asset register built as units come out." },
        { title: "Serialized drive accounting", text: "Every drive tracked to its chassis and array. RAID members are certified as a set, never in isolation." },
        { title: "Management controllers cleared", text: "iDRAC, iLO and equivalents reset, with stored credentials and network config wiped." },
        { title: "Destroyed and certified", text: "Shredded to 2 mm with a certificate per drive. Videotaped destruction available on request." },
        { title: "Components recovered", text: "Processors, memory and non-data parts tested and remarketed against the original chassis." },
      ],
    },
    commodities: [
      "High-grade boards with dense precious metal content",
      "Processors and heat spreaders",
      "Copper from power distribution",
      "Steel chassis and rack rails",
      "Power supply components",
    ],
    compliance: [
      "R2v3 downstream chain and focus materials",
      "NIST SP 800-88 sanitization",
      "ISO 27001 aligned chain of custody",
    ],
    valueRecovery:
      "Chassis depreciate hard, but current-generation processors, memory and non-data components often carry the recovery on their own. We assess per component, and say up front when a generation is not worth remarketing.",
    faqs: [
      {
        question: "Can you decommission a rack on our site?",
        answer:
          "Yes. De-racking, cable removal, palletizing and transport, with the asset register built as equipment comes out rather than reconstructed later.",
      },
      {
        question: "How do you handle drives from a RAID array?",
        answer:
          "Every member is tracked to its array and certified as a complete set, because members pulled from a RAID are collectively recoverable.",
      },
      {
        question: "Do you clear iDRAC and iLO?",
        answer:
          "Yes, as standard intake. They hold credentials and network config in storage that survives a drive pull.",
      },
    ],
    related: ["hard-drives", "networking-equipment", "batteries-and-ups"],
  },

  {
    slug: "hard-drives",
    name: "Hard Drives & Media",
    title: "Hard Drive Destruction and Media Disposal",
    metaTitle: "Hard Drive Destruction & Media Disposal | 2 mm",
    metaDescription:
      "NIST 800-88 aligned destruction for hard drives, SSDs, tape and optical media, with serialized Certificates of Destruction and optional video evidence.",
    intro:
      "Drives pulled from machines over years and left in a drawer have no tag, no host and no record, so there is nothing to reconcile against. We serialize every piece at intake, labeled or not.",
    handling: {
      heading: "How we handle drives and media",
      steps: [
        { title: "Serialized at intake", text: "Every piece recorded, including unlabeled drives, so the certificate matches the physical count." },
        { title: "Sorted by media type", text: "Magnetic, flash, tape and optical separated, because one blanket method leaves gaps." },
        { title: "Destroyed to 2 mm", text: "Small enough to defeat chip-level recovery on flash as well as platter recovery on disk." },
        { title: "Certified", text: "A serialized certificate per piece, or a batch summary, exported from your portal once verified." },
      ],
    },
    commodities: [
      "Aluminum platters and castings",
      "Rare earth magnets",
      "Stainless steel",
      "Circuit boards",
      "Copper",
    ],
    compliance: [
      "NIST SP 800-88 method and verification",
      "R2v3 data sanitization requirements",
      "2 mm mandated destruction sizing",
    ],
    valueRecovery:
      "None on destroyed media, and any vendor implying otherwise is either reselling drives you think were destroyed or billing for work they are not doing. Sanitization for reuse is the only route to value here.",
    faqs: [
      {
        question: "Can you destroy SSDs and flash media?",
        answer:
          "Yes, and the method matters. Degaussing has no effect on flash. We destroy SSDs, NVMe, USB and SD physically at 2 mm.",
      },
      {
        question: "What size do you shred to?",
        answer:
          "2 mm. Small enough to defeat both platter recovery on magnetic media and chip-level recovery on flash.",
      },
      {
        question: "Can we send drives with no asset tags?",
        answer:
          "Yes, and it is common. We serialize every piece at intake regardless, so the certificate reflects what physically arrived.",
      },
    ],
    related: ["servers", "laptops", "desktop-computers"],
  },

  {
    slug: "monitors-and-displays",
    name: "Monitors & Displays",
    title: "Monitor, Display and CRT Recycling",
    metaTitle: "Monitor, Display & CRT Recycling | R2v3 Certified",
    metaDescription:
      "Certified monitor and CRT recycling with leaded glass and mercury backlight handling under California universal waste rules. R2v3 focus material management.",
    intro:
      "Displays are the clearest case of recycling and data destruction being separate problems. There is nothing on a monitor to wipe, and it still carries the strictest handling rules on this list.",
    handling: {
      heading: "How we handle displays",
      steps: [
        { title: "Sorted by technology", text: "CRT, CCFL-backlit and LED-backlit separated, because each has a different regulated material." },
        { title: "Controlled CRT handling", text: "Leaded glass separated under controlled conditions and sent only to permitted downstreams." },
        { title: "Backlights removed by hand", text: "Mercury-bearing CCFL tubes taken out intact and managed as universal waste." },
        { title: "Materials recovered", text: "Frames, boards, cabling and plastics recovered once the regulated fractions are out." },
      ],
    },
    commodities: [
      "Leaded CRT glass, permitted downstreams only",
      "Aluminum frames and stands",
      "Panel glass",
      "Boards and driver electronics",
      "Copper cabling",
    ],
    compliance: [
      "California universal waste rules for CRTs and lamps",
      "R2v3 focus materials for leaded glass and mercury",
      "Documented permitted downstream vendors",
    ],
    valueRecovery:
      "Be skeptical of anyone quoting recovery on displays. CRTs carry a net handling cost and always will. Modern LED panels in working condition have modest resale, but displays are a cost line, not a credit.",
    faqs: [
      {
        question: "Do you still accept CRT monitors and televisions?",
        answer:
          "Yes, handled under California universal waste rules with leaded glass sent only to permitted downstreams. There is a handling cost we confirm up front.",
      },
      {
        question: "Is there any data risk on a monitor?",
        answer:
          "Not on a standard display. All-in-ones and smart displays with onboard storage are treated as computers instead.",
      },
      {
        question: "Can displays come in the same pickup as computers?",
        answer:
          "Yes. They are collected together and separated into their streams at our facility, so you do not need to sort first.",
      },
    ],
    related: ["desktop-computers", "printers-and-copiers", "batteries-and-ups"],
  },

  {
    slug: "networking-equipment",
    name: "Networking Equipment",
    title: "Network Equipment Recycling",
    metaTitle: "Network Equipment Recycling & Config Wiping",
    metaDescription:
      "Switch, router and firewall disposal with NVRAM and configuration clearing, credential removal and value recovery on enterprise hardware. R2v3 certified.",
    intro:
      "Disposal policies are written around user data, so a switch gets classified as scrap. What it actually holds is the configuration of your network.",
    handling: {
      heading: "How we handle network gear",
      steps: [
        { title: "Config and credentials cleared", text: "Wiped from persistent storage, not just reset from the front panel." },
        { title: "Verified before resale", text: "Anything that cannot be verified clear is destroyed rather than sold." },
        { title: "Serials recorded", text: "So you can release or transfer support contracts instead of leaving them on hardware you no longer own." },
        { title: "Recovered or demanufactured", text: "Hardware with a secondary market is remarketed; the rest goes to board and metal recovery." },
      ],
    },
    commodities: [
      "Dense boards with high precious metal content",
      "Copper from ports and power sections",
      "Steel and aluminum chassis",
      "Power supplies",
      "Optical transceivers",
    ],
    compliance: [
      "R2v3 downstream chain and focus materials",
      "R2v3 data sanitization applied to device storage",
      "Documented config clearing before any resale",
    ],
    valueRecovery:
      "Holds value better than almost anything else in a refresh. Current switches, firewalls and transceivers have an active secondary market, so this is the category most worth separating from mixed scrap.",
    faqs: [
      {
        question: "Is there really data on a switch?",
        answer:
          "Not user files, but the running config, VPN keys, SNMP strings, RADIUS secrets and firewall rules. Much of it stays valid after removal.",
      },
      {
        question: "Is a factory reset enough?",
        answer:
          "Not reliably. Config can survive in a backup partition, in flash, or via the boot loader. We clear persistent storage directly and verify it.",
      },
      {
        question: "Do you take transceivers and cabling?",
        answer:
          "Yes. Transceivers often carry resale value and are assessed separately; structured cabling is recovered for copper.",
      },
    ],
    related: ["servers", "hard-drives", "printers-and-copiers"],
  },

  {
    slug: "printers-and-copiers",
    name: "Printers, Copiers & Plotters",
    title: "Printer, Copier and Plotter Recycling",
    metaTitle: "Printer, Copier & Plotter Recycling | Drive Removal",
    metaDescription:
      "Multifunction printer and copier disposal including internal hard drive location and destruction, toner handling and leased-unit return coordination.",
    intro:
      "We take the whole print category: desktop printers, 3D printers, office copiers and multifunction devices, and wide-format plotters. Large office copiers and plotters carry a handling fee, which we confirm before collection.",
    handling: {
      heading: "How we handle printers and copiers",
      steps: [
        { title: "Checked for a drive", text: "Not every model has one and the position varies by manufacturer, so each unit is checked against its own configuration." },
        { title: "Any drive removed and destroyed", text: "Shredded to 2 mm with a serialized certificate tied to the device." },
        { title: "Leased units coordinated", text: "We destroy the drive and return the chassis, so the lessor gets the hardware and not the data." },
        { title: "Toner handled separately", text: "Cartridges and residual toner kept out of general shredding." },
      ],
    },
    commodities: [
      "Steel frames and chassis",
      "Print heads and fusers",
      "Boards and control electronics",
      "Copper from motors and wiring",
      "Rollers and mechanical assemblies",
      "Toner, handled separately",
    ],
    compliance: [
      "R2v3 downstream chain and focus materials",
      "NIST SP 800-88 or 2 mm destruction for internal media",
      "Toner managed as a separate waste stream",
    ],
    valueRecovery:
      "A cost line rather than a credit. Large office copiers and wide-format plotters carry a handling fee because of their size and weight, and we confirm it before collection.",
    faqs: [
      {
        question: "Do you take 3D printers and plotters?",
        answer:
          "Yes. The category covers desktop printers, 3D printers, office copiers and multifunction devices, and wide-format plotters.",
      },
      {
        question: "Ours are leased. Can you help?",
        answer:
          "Yes, and that is where the risk sits. We remove and destroy the drive, certify it, and return the chassis to the lessor.",
      },
      {
        question: "Is there a fee for copiers and plotters?",
        answer:
          "Large office copiers and wide-format plotters carry a handling fee because of their size and weight. We confirm it up front, before anything is collected.",
      },
    ],
    related: ["networking-equipment", "hard-drives", "monitors-and-displays"],
  },

  {
    slug: "phones-and-tablets",
    name: "Phones & Tablets",
    title: "Mobile Phone and Tablet Recycling",
    metaTitle: "Mobile Phone & Tablet Recycling | R2v3 Certified",
    metaDescription:
      "Secure mobile device disposal with MDM and activation lock handling, lithium battery management and value recovery on eligible handsets and tablets.",
    intro:
      "Mobile devices combine dense data with strong per-unit resale, but both depend on the device being released from management first.",
    handling: {
      heading: "How we handle phones and tablets",
      steps: [
        { title: "Lock and enrollment checked", text: "Activation Lock, FRP and MDM checked first. Unreleased devices are reported so you can release them." },
        { title: "Sanitization verified", text: "A verified reset on an encrypted device destroys the key. We confirm it completed rather than trusting the screen." },
        { title: "Batteries assessed", text: "Swollen or damaged lithium cells isolated immediately as a fire risk." },
        { title: "Graded or destroyed", text: "Released devices are graded for resale. Anything still locked is physically destroyed." },
      ],
    },
    commodities: [
      "Lithium-ion cells",
      "Boards with high gold and rare earth density",
      "Aluminum housings",
      "Display glass and panel assemblies",
      "Copper",
    ],
    compliance: [
      "R2v3 downstream chain and focus materials",
      "NIST SP 800-88 aligned verification",
      "US DOT 49 CFR lithium transport",
    ],
    valueRecovery:
      "The highest per-unit resale in a typical refresh, and the steepest depreciation, so timing matters. Releasing devices from MDM before collection is the highest-return five minutes in the process.",
    faqs: [
      {
        question: "What if devices arrive still activation locked?",
        answer:
          "We report them so you can release them. Until then they cannot be resold, and anything still locked is destroyed rather than remarketed.",
      },
      {
        question: "Is a factory reset enough?",
        answer:
          "On a modern encrypted handset, a verified reset destroys the encryption key. We confirm the reset actually completed.",
      },
      {
        question: "Do you remove devices from our MDM?",
        answer:
          "No, and no vendor should. That action belongs inside your tenancy. We identify which devices are still enrolled and report them.",
      },
    ],
    related: ["laptops", "batteries-and-ups", "hard-drives"],
  },

  {
    slug: "batteries-and-ups",
    name: "Batteries & UPS Systems",
    title: "Battery and UPS System Recycling",
    metaTitle: "Battery & UPS Recycling | DOT Compliant Transport",
    metaDescription:
      "Lithium-ion, lead-acid and UPS battery disposal with DOT-compliant transport, damaged cell isolation and permitted downstream recycling. R2v3 certified.",
    intro:
      "Nothing to sanitize and nothing to recover financially, and still the most carefully handled category on this list. UPS strings in particular get forgotten until a comms room is cleared.",
    handling: {
      heading: "How we handle batteries",
      steps: [
        { title: "Sorted by chemistry", text: "Lithium, lead-acid, nickel and alkaline separated. Mixed chemistries in one container are a hazard." },
        { title: "Terminals protected", text: "Taped or capped to prevent short circuits in storage and transport." },
        { title: "Damaged cells isolated", text: "Swollen or leaking cells moved into contained packaging, separate from sound stock." },
        { title: "UPS strings removed on site", text: "So an energized cabinet does not have to be moved." },
        { title: "Permitted downstream", text: "Sent to permitted battery recyclers with documented records, never a general e-waste stream." },
      ],
    },
    commodities: [
      "Lead from sealed lead-acid cells",
      "Lithium, cobalt and nickel",
      "Steel casings",
      "Copper terminals",
      "Electrolyte, to permitted processors",
    ],
    compliance: [
      "US DOT 49 CFR battery transport",
      "California universal waste rules",
      "R2v3 focus materials with documented downstreams",
    ],
    valueRecovery:
      "None. Lead-acid occasionally offsets part of its own handling depending on the lead market, but budget batteries as a disposal cost and treat any promise otherwise with caution.",
    faqs: [
      {
        question: "Can you remove UPS batteries from our comms room?",
        answer:
          "Yes. We pull battery strings on site so an energized cabinet does not have to be moved, and package the cells for transport.",
      },
      {
        question: "What should we do with damaged batteries before pickup?",
        answer:
          "Isolate them, do not stack anything on them, and tell us at booking. It genuinely changes how we pack and transport the load.",
      },
      {
        question: "Can batteries go in the same pickup as our e-waste?",
        answer:
          "Same visit, separate packing by chemistry. They are never consolidated into a general e-waste stream.",
      },
    ],
    related: ["servers", "laptops", "phones-and-tablets"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

