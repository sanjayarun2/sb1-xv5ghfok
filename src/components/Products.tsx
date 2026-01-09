import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { categoryProducts } from '../data/products';
import { Link } from 'react-router-dom'; // FIX: Required to link pages

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
  const allProducts = Object.values(categoryProducts).flat();
  const domain = "https://premiumpacking.in";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Saree Box Packaging Solutions Catalog", 
    "description": "Premium saree box packaging and customised solutions for luxury retail, textiles, and global industrial shipping.",
    "numberOfItems": allProducts.length,
    "itemListElement": allProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image.startsWith('http') ? product.image : `${domain}${product.image}`, 
        "description": product.description,
        "sku": `BOX-${product.id}`, 
        "brand": {
          "@type": "Brand",
          "name": "Premium Packing" 
        },
        "offers": {
          "@type": "Offer",
          "url": `${domain}/product/${product.id}`, // FIX: Link to specific product URL
          "priceCurrency": "INR",
          "price": "0", 
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      }
    }))
  };

  return (
    <section id="products" className="bg-gray-50 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Saree Box Packaging Solutions
          </h2>
          <div className="mt-4 h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Premium saree box packaging and customised solutions for luxury retail, textiles, and global industrial shipping.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {allProducts.map((product) => (
              <SwiperSlide key={product.id}>
                {/* FIX: Wrapped in Link so Google can crawl your productDetails pages */}
                <Link to={`/product/${product.id}`} className="group block h-full">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="relative pt-[80%] bg-gray-200">
                      <img 
                        src={product.image}
                        alt={`${product.name} - Custom Saree Box Manufacturer`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/800x600?text=Packaging+Solution';
                        }}
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-sm">
                          View Details →
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-widest">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}