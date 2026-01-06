import { BRANDS_DATA } from '../data/brands';

export default function TrustedBrands() {
  if (!BRANDS_DATA || !Array.isArray(BRANDS_DATA)) {
    console.error("BRANDS_DATA is missing or not an array");
    return <div className="py-12 text-center text-gray-400">Loading partners...</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aesthetic Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The preferred choice for luxury saree packaging and high-end pattu saree packing solutions across India.
          </p>
        </div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 items-center">
          {BRANDS_DATA.map((brand) => (
            <div 
              key={brand.id} 
              className="group flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-full h-24 mb-4">
                <img
                  src={brand.logo_url}
                  alt={`${brand.name} - Luxury Saree Packaging Partner`}
                  className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150?text=Brand';
                  }}
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}