import { Target, Tag, Truck } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Designer Saree Boxes", // Keyword: Designer Saree Box
    description: "Premium packaging and fancy saree box designs tailored for luxury retail and secure fabric protection."
  },
  {
    icon: Tag,
    title: "Wholesale Pricing", // Keyword: Saree boxes wholesale price
    description: "Get the best saree boxes wholesale price with bulk savings up to 55% on orders of 25+ pieces."
  },
  {
    icon: Truck,
    title: "Pan-India Shipping",
    description: "Fast delivery for all saree box online orders across India, with quick turnaround in 2–5 business days."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NEW HEADING SECTION ADDED HERE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Premium Box Saree Designs
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Innovative packaging features designed for elegance, brand value, and industrial-grade durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}