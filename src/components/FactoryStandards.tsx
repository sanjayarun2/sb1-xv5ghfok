import { ShieldCheck, ClipboardCheck, Ruler, FileCheck } from 'lucide-react';

const standards = [
  {
    icon: ClipboardCheck,
    title: 'Written SOPs for every stage',
    text: 'Printing, lamination, die-cutting, and quality check — each has a documented standard operating procedure.',
  },
  {
    icon: Ruler,
    title: 'Batch-level quality checks',
    text: 'Every batch is checked for colour matching, lamination adhesion, crease depth, and cut accuracy before packing.',
  },
  {
    icon: ShieldCheck,
    title: 'Material traceability',
    text: 'We track paperboard supplier, GSM, and film batch for every order so we can replicate results on repeat runs.',
  },
  {
    icon: FileCheck,
    title: 'Export documentation',
    text: 'Packing list, invoice with HS code, country of origin, and carton marking format — prepared for every export shipment.',
  },
];

interface FactoryStandardsProps {
  showExportDoc?: boolean;
}

export default function FactoryStandards({ showExportDoc = false }: FactoryStandardsProps) {
  const items = showExportDoc ? standards : standards.filter((s) => s.title !== 'Export documentation');

  return (
    <section className="py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        Factory quality standards
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        We manufacture only saree and textile packaging — nothing else. This focus means every process in our factory is
        tuned specifically for saree box quality.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5">
            <item.icon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
