import React from 'react';
import { Target, Tag, Truck } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Quality selection",
    description: "Premium packaging solutions for all industries. From elegant saree boxes to sturdy shipping cartons."
  },
  {
    icon: Tag,
    title: "Good discounts",
    description: "Bulk order savings of up to 55% starting at 25 pieces. Better rates for larger quantities."
  },
  {
    icon: Truck,
    title: "Fast delivery",
    description: "Pan-India delivery with no minimum order requirements. Quick turnaround in 2–5 business days."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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