import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQBlock({ title = 'Frequently Asked Questions', items }: FAQBlockProps) {
  if (items.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section className="py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-6 flex items-center gap-2">
        <HelpCircle className="h-6 w-6 text-blue-500" />
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
          >
            <summary className="cursor-pointer px-5 py-4 text-gray-900 font-semibold text-sm sm:text-base flex items-center justify-between select-none">
              {faq.question}
              <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl font-light ml-4 flex-shrink-0">
                +
              </span>
            </summary>
            <div className="px-5 pb-4 text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
