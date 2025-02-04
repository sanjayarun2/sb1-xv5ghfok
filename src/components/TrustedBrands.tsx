import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function TrustedBrands() {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const { data } = await supabase
        .from('trusted_brands')
        .select('*')
        .order('name');
      if (data) setBrands(data);
    };
    fetchBrands();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-24 h-24 mb-3">
                <img
                  src={brand.logo_url}
                  alt={brand.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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