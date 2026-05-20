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

import depProtection from "@/public/blogs/DEP-Protection.jpg";
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function RemoveDEPProtection() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="Apple Device Management"
          title="How to Remove DEP Protection Before Reusing, Selling, or Recycling Apple Devices"
          description="Apple devices that stay enrolled in DEP remain tied to their original organization and re-enroll into MDM after every reset. Here&apos;s how to release them properly so they can be resold, reused, or recycled without friction."
        />
        </ScrollLoader>

        {/* Meta Information */}
        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2025-12-27">December 27, 2025</time>
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* Article Content */}
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
            <figure className="mb-12 overflow-hidden rounded-lg">
              <Image
                src={depProtection}
                alt="Removing DEP protection from Apple devices before resale or recycling"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                When organizations retire Apple devices iPhones, iPads, MacBooks, or Mac desktops the data wipe is rarely the issue. The problem is that the devices remain enrolled in DEP and quietly re-enroll into MDM the moment a new owner sets them up. The Remote Management screen appears, the device asks for credentials no buyer has, and the asset effectively becomes scrap.
              </p>
              <p className="text-justify">
                Removing DEP protection isn&apos;t complicated, but it has to happen through the right channel and in the right order. This guide explains what DEP is, why it must be removed before disposition, and the exact steps to release devices through Apple Business Manager.
              </p>
            </div>
            </ScrollLoader>

            {/* What Is DEP */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What DEP Actually Does
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  The Apple Device Enrollment Program (DEP) is a feature within Apple Business Manager (ABM) and Apple School Manager (ASM) that automatically enrolls Apple devices into an organization&apos;s MDM solution during initial setup. It allows IT teams to enforce security policies, configure devices remotely, prevent unauthorized use, and standardize provisioning at scale.
                </p>
                <p className="text-justify">
                  The detail that matters at end-of-life: once a device is enrolled in DEP, it stays linked to the organization indefinitely. Factory resets do not break that link. Only an administrator with ABM access can release the device through the proper channel.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* DEP vs MDM Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                DEP vs MDM: Two Different Things
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify">
                Most disposition issues come from confusing DEP with MDM. They work together, but they do different jobs and removing one does not remove the other.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">DEP</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">MDM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Primary Role</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Ownership assignment</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Device management</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Where Configured</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Apple Business Manager</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">MDM platform (Jamf, Intune, etc.)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Triggers At</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Initial device setup</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Post-enrollment</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Persists After Reset</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No (re-enrolls if DEP active)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Removal Method</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Release Device in ABM</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unassign in MDM console</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8 text-justify">
                The practical implication is clear: removing MDM without removing DEP is insufficient. The device will re-enroll into MDM after a factory reset as long as DEP remains active.
              </p>
            </section>
            </ScrollLoader>

            {/* Risks of Not Removing DEP */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What Goes Wrong When DEP Stays Active
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Skipping DEP removal at end-of-life creates immediate operational and financial problems for whoever ends up with the device next.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Device activation is blocked
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    The Remote Management screen appears during setup, asks for the original organization&apos;s credentials, and refuses to proceed. The new owner cannot use the device.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Resale value collapses
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Certified recyclers and ITAD partners cannot resell DEP-locked hardware. Equipment that should have generated meaningful recovery value gets treated as scrap or refused outright.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Compliance and security exposure
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Orphaned devices that remain associated with your organization can create audit findings, brand exposure, and lingering questions about how data-bearing assets were handled at retirement.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* When to Remove DEP */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                When DEP Removal Is Required
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Any time ownership is leaving your organization, DEP removal needs to be part of the process. The most common scenarios include selling devices to a third party, donating equipment to schools or nonprofits, recycling or decommissioning hardware, reassigning ownership outside the organization, and completing IT Asset Disposition (ITAD) workflows.
                </p>
                <p className="text-justify">
                  All Apple devices managed through ABM or ASM are subject to DEP iPhone, iPad, MacBook, iMac, Mac mini, and Mac Studio. The release process is the same across the entire fleet.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Prerequisites */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Before You Begin
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Two things need to be in place before starting the removal workflow.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Administrator access to Apple Business Manager
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    DEP removal requires admin-level access to ABM or ASM. There is no official path to releasing a device without it, which is why maintaining ABM access during organizational transitions matters more than most teams realize.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Backup, sign-out, and data sanitization plan
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Back up any user or business data that needs to be preserved, ensure devices are signed out of iCloud, and plan certified data sanitization aligned with relevant standards (NIST 800-88, GDPR, internal IT policies). DEP removal is the ownership step; data protection runs alongside it.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Step-by-Step Guide */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Removing DEP Through Apple Business Manager
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  This is the only officially supported method for releasing devices from DEP. The workflow is straightforward, but the action is irreversible once devices are released, they cannot be re-added to the same DEP program.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    1. Log in to Apple Business Manager
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Sign in at business.apple.com with administrator credentials.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    2. Navigate to the Devices section
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Open the Devices area from the ABM dashboard to view all enrolled hardware.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    3. Locate the device by serial number
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Search for the specific device using its serial number to ensure you&apos;re acting on the correct unit.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    4. Select Release Device
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Open the device record and choose the release option from the device action menu.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    5. Confirm the release
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Verify the action when prompted. Once confirmed, the device is no longer associated with your organization and DEP auto-enrollment is permanently disabled for that unit.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* MDM Removal */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Completing the Process: MDM Removal and Factory Reset
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Releasing the device from DEP is the critical step, but the workflow isn&apos;t complete until MDM is removed and the device is reset cleanly.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Unassign the device in your MDM console
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Remove the device from your MDM platform (Jamf, Intune, Kandji, or whichever solution your organization uses) so it no longer receives policies or commands.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Perform a full factory reset
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Wipe the device completely so the next owner sees a fresh setup experience without any residual configuration or accounts.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Verify a clean setup flow
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Walk through the setup process and confirm that no Remote Management screen appears. If the device proceeds to the standard onboarding flow, DEP and MDM have been removed successfully and the device is ready to transfer.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Common Issues */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Common Issues and How to Resolve Them
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Two situations cause most of the difficulty teams encounter during DEP removal.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    The Remote Management screen still appears
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    This typically means DEP was not fully removed before the reset, the device was reset before being released in ABM, or only MDM was unassigned while DEP remained active. Return to ABM, confirm the device has been released, then reset again.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No access to the original ABM account
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    This is the harder case. Without ABM access, Apple will not remove DEP ownership, and the device may be considered non-transferable. Recyclers may only accept it as non-functional hardware. The lesson is preventive: maintain ABM access through every organizational transition, including divestitures, mergers, and IT vendor changes.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* ITAD Considerations */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why DEP Removal Matters for ITAD and Recycling
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  For certified ITAD partners, DEP status often determines whether an Apple device can be recovered for resale or has to be processed as scrap. Properly released devices extend their useful lifecycle, generate recovery value, and reduce e-waste. Locked devices do none of those things.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Maintain an accurate ABM inventory
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Keep your DEP records in sync with your physical fleet so retirements can be processed without delay or missing records.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Remove DEP at employee exit
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Build DEP release into your offboarding process so devices returned at separation are ready for redeployment or disposition immediately.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Verify status before resale
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Confirm that DEP and MDM are both clear before any device leaves your control. A 30-second check prevents costly returns and customer disputes.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Partner with certified ITAD providers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Work with providers experienced in Apple device disposition who can validate DEP status, document the lifecycle, and handle the rare cases where access has been lost.
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
                    Can DEP be removed without Apple Business Manager?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      No. DEP removal requires official administrator access to ABM or ASM. Without it, there is no supported method to release the device.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Is DEP removal permanent?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Yes. Once a device is released from DEP, it cannot be re-added to the same DEP program. The action is irreversible, which is why confirmation matters.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Can a factory reset remove DEP?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      No. A factory reset alone does not affect DEP enrollment. The device will re-enroll into MDM during setup as long as DEP remains active in ABM.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What happens if I lose access to the original ABM account?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Apple will not transfer DEP ownership without verified administrator access. The device may become non-transferable for resale, and certified recyclers may only accept it as non-functional hardware.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Does DEP apply to personally owned Apple devices?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      No. DEP applies only to devices purchased through approved channels and enrolled in an organization&apos;s ABM or ASM account. Personally purchased devices are not subject to DEP enrollment.
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
                  Removing DEP protection is a small step with a large downstream impact. Skip it, and Apple devices come back as locked, unsellable inventory. Handle it correctly, and the same hardware moves smoothly into resale, redeployment, or certified recycling with no friction for the next owner.
                </p>
                <p className="text-justify">
                  The right approach is straightforward: release the device through Apple Business Manager, unassign it from MDM, perform a verified factory reset, and document the action as part of the asset&apos;s disposition record. Done consistently, this becomes a routine part of Apple device lifecycle management rather than a point of friction at end-of-life.
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