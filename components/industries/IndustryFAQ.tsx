import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FAQItem } from "@/data/industriesData";

interface IndustryFAQProps {
  faqs: FAQItem[];
}

export default function IndustryFAQ({ faqs }: IndustryFAQProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-[15px] font-medium text-gray-900 dark:text-white">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-[15px] leading-[1.8] text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}