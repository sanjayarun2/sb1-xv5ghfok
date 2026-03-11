import { MessageCircle, FileText, Factory, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Share your requirement',
    description: 'Tell us saree count, box size, folding type, and printing preference via WhatsApp or phone.',
  },
  {
    icon: FileText,
    title: 'We send mockup and rate',
    description: 'We reply with size suggestion, material recommendation, sample photo or mockup, and per-box pricing.',
  },
  {
    icon: Factory,
    title: 'Production starts',
    description: 'After confirmation, production typically takes 5–10 working days depending on volume and finish.',
  },
  {
    icon: Truck,
    title: 'Dispatch and delivery',
    description: 'Boxes are packed in corrugated cartons and dispatched via Bluedart, Delhivery, or your preferred courier.',
  },
];

interface HowToOrderProps {
  variant?: 'default' | 'compact';
}

export default function HowToOrder({ variant = 'default' }: HowToOrderProps) {
  const isCompact = variant === 'compact';

  return (
    <section className={isCompact ? 'py-8' : 'py-10'}>
      <h2
        className={`${
          isCompact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
        } font-bold text-gray-900 tracking-tight mb-3`}
      >
        How to place an order
      </h2>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-2xl">
        First-time buyer? We can produce a small trial batch or send sample print sheets before full production.
      </p>

      <div
        className={`grid ${
          isCompact ? 'grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-4'
        } gap-4 sm:gap-5`}
      >
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5"
          >
            <span className="absolute top-3 right-3 text-3xl font-black text-gray-100 select-none">
              {idx + 1}
            </span>
            <step.icon className="h-5 w-5 text-blue-500 mb-3" />
            <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
