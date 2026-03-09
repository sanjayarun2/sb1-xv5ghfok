import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const content = {
  title: "Premium Saree Boxes Online",
  subtitle: "From Concept to Creation",
  description: "We provide end-to-end manufacturing for premium saree boxes and industrial packaging. Our process combines traditional craftsmanship with modern automation to deliver excellence.",
  fullContent: [
    "Our commitment to quality starts with the selection of raw materials. We source premium paperboard and eco-friendly adhesives to ensure structural integrity and a luxury feel for every box.",
    "In the design phase, our team works closely with clients to create custom templates that reflect brand identity. Whether it's metallic foiling, matte lamination, or intricate die-cutting, every detail is handled with precision.",
    "We also offer pan-India shipping with real-time tracking, ensuring your premium packaging arrives in perfect condition within 2-5 business days. Our scale allows us to offer bulk discounts up to 55% for high-volume orders."
  ]
};

export default function PillarSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      {/* Changed from max-w-4xl to max-w-7xl to match standard page width */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h2>
          <p className="text-lg text-blue-600 font-semibold uppercase tracking-wider">
            {content.subtitle}
          </p>
        </header>

        {/* Removed redundant padding and adjusted border for full-width look */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-12">
          <div className="prose prose-xl max-w-none text-gray-700">
            <p className="text-xl md:text-2xl leading-relaxed font-medium mb-0">
              {content.description}
            </p>

            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.fullContent.map((para, i) => (
                  <p key={i} className="text-lg text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-10 flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors mx-auto px-8 py-3 rounded-full border border-blue-100 hover:bg-blue-50 shadow-sm"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="h-5 w-5" /></>
            ) : (
              <>Read More <ChevronDown className="h-5 w-5" /></>
            )}
          </button>

          <Link
            to="/process/saree-box-manufacturing"
            className="mt-4 flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium transition-colors mx-auto text-sm justify-center"
          >
            Read Our Full Manufacturing Guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}