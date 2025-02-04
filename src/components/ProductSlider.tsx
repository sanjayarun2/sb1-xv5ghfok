import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const scrollLeft = () => {
    const slider = document.getElementById('product-slider');
    if (slider) slider.scrollLeft -= slider.offsetWidth;
  };

  const scrollRight = () => {
    const slider = document.getElementById('product-slider');
    if (slider) slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <div className="relative">
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      
      <div 
        id="product-slider" 
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide gap-6 py-4 px-8"
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-gray-500">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-bold">{product.price}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}