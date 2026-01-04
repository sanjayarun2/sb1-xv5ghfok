// 1. Ensure this path is 100% correct relative to this file
import { BRANDS_DATA } from '../data/brands';

export default function TrustedBrands() {
  // 2. Safety check: if data fails to load, show a message instead of crashing
  if (!BRANDS_DATA || !Array.isArray(BRANDS_DATA)) {
    console.error("BRANDS_DATA is missing or not an array");
    return <div className="py-12 text-center">Loading brands...</div>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {BRANDS_DATA.map((brand) => (
            <div 
              key={brand.id} 
              className="flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-24 h-24 mb-3">
                <img
                  src={brand.logo_url}
                  alt={brand.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150?text=Logo';
                  }}
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 text-center">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}