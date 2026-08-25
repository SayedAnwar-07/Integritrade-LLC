export default function RemoteITAssetRecoveryContent() {
  return (
    <div className="space-y-12 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
      {/* INTRO */}
      <section className="space-y-5">
        <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
          Secure mail-in recovery for remote employees and distributed teams
        </h2>

        <p>
          When an employee works from home, leaves the company, or sits outside
          a scheduled pickup route, their laptop should not become an unmanaged
          exception. <strong>Integritrade Remote Recovery</strong> gives
          organizations a simple way to recover retired computers from anywhere
          while keeping data security, chain of custody, and value recovery at
          the center of the process.
        </p>

        <p>
          We send the employee a purpose-built recovery kit that includes a
          guided bootable USB erasure tool, clear return instructions,
          protective packaging, and return-shipping materials. The employee can
          follow the guided process to securely erase the computer before it is
          returned. Once the device reaches Integritrade, it is received,
          verified, processed, and documented through TraceTech.
        </p>

        <p>
          Remote recovery turns offboarding and distributed IT collection into
          a repeatable, trackable process - not a string of emails, improvised
          shipping labels, and unanswered questions.
        </p>
      </section>

      {/* BUILT FOR WORKFORCE */}
      <section className="space-y-5">
        <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
          Built for the workforce you cannot send a truck to
        </h2>

        <p>
          Remote Recovery is designed for organizations that need to collect
          laptops and related IT equipment from home offices, satellite
          locations, former employees, traveling staff, and distributed teams.
          It is especially useful during employee offboarding, company-wide
          technology refreshes, mergers, office consolidations, and
          device-replacement programs.
        </p>

        <p>
          Rather than asking a remote employee to guess how to prepare a device
          or ship sensitive equipment on their own, your team starts a
          documented recovery workflow. Integritrade sends the kit directly to
          the employee, gives them a straightforward process to follow, and
          keeps the project visible from request through final disposition.
        </p>

        <ComparisonTable />
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
          How Remote Recovery works
        </h2>

        <Step
          title="1. Start a recovery request"
          paragraphs={[
            "Your team provides the employee’s delivery information and the assets expected for return. Integritrade opens the recovery workflow so your organization has a clear record of the request from the start.",
          ]}
        />

        <Step
          title="2. The employee receives a secure recovery kit"
          paragraphs={[
            "The kit is shipped to the employee with protective return packaging, return-shipping materials, simple instructions, and a bootable USB erasure tool. The process is designed to be manageable for a non-technical employee while remaining visible to your IT team.",
          ]}
        />

        <Step
          title="3. Guided data erasure happens before return"
          paragraphs={[
            "The employee boots the computer using the included USB tool and follows the guided erasure workflow. This helps secure company data before the computer enters the shipping stream while preserving an eligible device for reuse and value recovery.",
            "Erasure is not the same as deleting files or resetting a user profile. The purpose of the workflow is to complete a documented sanitization process, aligned with your organization’s approved data-disposition requirements.",
          ]}
        />

        <Step
          title="4. The device is packed and returned"
          paragraphs={[
            "Once the guided workflow is complete, the employee packages the device using the provided materials and sends it back to Integritrade. The asset then enters Integritrade’s secured processing environment for intake, verification, and disposition.",
          ]}
        />

        <Step
          title="5. Integritrade verifies, processes, and documents the asset"
          paragraphs={[
            "At our secured ITAD facility, Integritrade confirms receipt and evaluates the asset. Eligible devices may be directed to reuse, buyback, or remarketing. If a device cannot complete logical data sanitization or does not qualify for reuse, it is routed for the appropriate physical data-destruction process and documented accordingly.",
          ]}
        />

        <Step
          title="6. Your team sees the outcome in TraceTech"
          paragraphs={[
            "TraceTech gives your team visibility into processing status, available certificates, and future recovery requests. Instead of chasing paperwork at the end of an offboarding project, your documentation remains accessible from one platform.",
          ]}
        />
      </section>

      {/* SECURITY */}
      <TextSection title="Security that starts before the box is sealed">
        <p>
          A laptop in an employee’s home can still hold credentials, client
          information, intellectual property, financial data, source code, and
          internal communications. Remote Recovery is designed to bring that
          device back under a defined disposition process before it becomes an
          unmanaged liability.
        </p>

        <p>
          The bootable USB erasure kit is the difference between asking someone
          to “reset the laptop” and giving them a guided process that prepares
          the device for secure return. After receipt, Integritrade provides
          controlled handling, intake verification, and final disposition under
          R2v3, ISO 27001, ISO 14001, ISO 9001, and ISO 45001 certified
          operations.
        </p>

        <p>
          For organizations that require physical media destruction in addition
          to erasure, Integritrade can build that requirement into the project
          workflow. When logical sanitization cannot be completed, physical
          destruction is included as the appropriate next step.
        </p>
      </TextSection>

      {/* VALUE */}
      <TextSection title="Preserve value without compromising data security">
        <p>
          Remote devices are often newer laptops or cell phones that still have
          meaningful recovery value. A secure erasure process protects the data
          while allowing the device to remain eligible for reuse, remarketing,
          or direct buyback where appropriate. That supports circularity and can
          create a better financial outcome than treating every remote return as
          scrap.
        </p>

        <p>
          Integritrade evaluates qualifying laptops, tablets, smartphones, and
          other IT equipment for value recovery after intake and verification.
          Organizations may choose a direct buyback model for a more predictable
          outcome or a remarketing model designed to maximize return on eligible
          assets.
        </p>
      </TextSection>

      {/* EMPLOYEE RECEIVES */}
      <section>
        <h2 className="mb-5 font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
          What the employee receives
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-y border-gray-300 dark:border-gray-700">
                <th className="w-[32%] px-3 py-4 font-serif font-semibold text-gray-900 dark:text-white">
                  Included in the recovery kit
                </th>
                <th className="px-3 py-4 font-serif font-semibold text-gray-900 dark:text-white">
                  Purpose
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              <tr>
                <td className="px-3 py-4">Guided bootable USB erasure tool</td>
                <td className="px-3 py-4">
                  Helps the employee securely erase an eligible computer before
                  return.
                </td>
              </tr>

              <tr>
                <td className="px-3 py-4">Clear step-by-step instructions</td>
                <td className="px-3 py-4">
                  Makes the process easy to complete without creating confusion
                  for the employee.
                </td>
              </tr>

              <tr>
                <td className="px-3 py-4">Protective return packaging</td>
                <td className="px-3 py-4">
                  Helps prepare the asset for return shipment.
                </td>
              </tr>

              <tr>
                <td className="px-3 py-4">Return-shipping materials</td>
                <td className="px-3 py-4">
                  Gives the employee a straightforward path to send the
                  equipment back.
                </td>
              </tr>

              <tr>
                <td className="px-3 py-4">Support path</td>
                <td className="px-3 py-4">
                  Provides a defined escalation path if the employee cannot
                  complete the workflow.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* USE CASES */}
      <TextSection title="Common Remote Recovery use cases">
        <p>
          Remote Recovery is a practical option for a single offboarded
          employee, a distributed company-wide laptop refresh, or a recurring
          remote-workforce program. Organizations commonly use the service when
          employees leave, when leased devices need to be returned, when IT
          ships replacements, or when an acquisition creates equipment spread
          across many home offices.
        </p>

        <p>
          The program is also useful for companies that want a consistent
          employee experience. Every remote return follows the same documented
          steps rather than relying on individual managers, personal shipping
          boxes, and unverified device resets.
        </p>
      </TextSection>

      {/* FAQ */}
      <section>
        <h2 className="mb-7 font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
          Frequently asked questions
        </h2>

        <div className="space-y-8">
          <Faq
            question="Can a remote employee complete the process without IT expertise?"
            answer="Yes. The kit is designed around a guided workflow and straightforward instructions. If the employee cannot complete the process, the project can follow the defined support and exception path rather than leaving the device unmanaged."
          />

          <Faq
            question="Does erasure mean the device has to be recycled?"
            answer="No. Secure logical erasure is designed to protect data while preserving eligible devices for reuse. After return and verification, Integritrade evaluates the device for buyback, remarketing, donation, parts harvesting, or responsible materials recovery."
          />

          <Faq
            question="What if the computer cannot be erased remotely?"
            answer="A device that cannot complete logical sanitization is handled through the appropriate exception workflow. When required, it is routed for physical data destruction and the related documentation is issued through the project record."
          />

          <Faq
            question="Can our IT team see the status of remote returns?"
            answer="Yes. TraceTech is included as a value-added service for Integritrade clients. It gives authorized users a central place to monitor processing status, manage future pickups, and download available Certificates of Erasure or Destruction."
          />

          <Faq
            question="Can we use this for remote employees outside California?"
            answer="Remote Recovery is designed for distributed teams and mail-in recovery. Contact Integritrade to confirm logistics, asset eligibility, and the right recovery workflow for your program."
          />
        </div>
      </section>

      {/* FINAL */}
      <TextSection title="Bring remote assets back under control">
        <p>
          Your company should not have to choose between data security, employee
          convenience, and value recovery. Integritrade Remote Recovery gives
          remote employees a clear process, gives IT a documented workflow, and
          gives every eligible device a path to secure reuse or responsible
          final disposition.
        </p>

        <p className="font-semibold text-gray-900 dark:text-white">
          Start a Remote Recovery program with Integritrade.
        </p>
      </TextSection>

      
    </div>
  );
}

function Step({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div>
      <h3 className="mb-3 font-serif text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <div className="space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function TextSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
        {title}
      </h2>

      {children}
    </section>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div>
      <h3 className="mb-2 font-serif text-lg font-semibold text-gray-900 dark:text-white">
        {question}
      </h3>

      <p>{answer}</p>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    [
      "A laptop is sitting with a remote or former employee.",
      "Send a recovery kit directly to the employee.",
    ],
    [
      "The device may contain company or client data.",
      "Use the guided bootable USB erasure process before the asset is returned.",
    ],
    [
      "IT needs proof of what happened.",
      "Track the device and retrieve available documentation through TraceTech.",
    ],
    [
      "The organization wants to recover value, not just dispose of equipment.",
      "Evaluate eligible equipment for reuse, buyback, or remarketing after verification.",
    ],
  ];

  return (
    <div className="overflow-x-auto pt-2">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-y border-gray-300 dark:border-gray-700">
            <th className="w-1/2 px-3 py-4 font-serif font-semibold text-gray-900 dark:text-white">
              The challenge
            </th>

            <th className="w-1/2 border-l border-gray-300 px-3 py-4 font-serif font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
              The Integritrade Remote Recovery solution
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
          {rows.map(([challenge, solution]) => (
            <tr key={challenge}>
              <td className="px-3 py-4">{challenge}</td>

              <td className="border-l border-gray-300 px-3 py-4 dark:border-gray-700">
                {solution}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}