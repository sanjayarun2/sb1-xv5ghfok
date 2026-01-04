import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { categoryProducts } from '../data/products';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
  // 1. Flatten products from all categories into one array for the Schema
  const allProducts = Object.values(categoryProducts).flat();

  // 2. Generate the JSON-LD ItemList Schema
  // This tells Google: "Here is a list of specific products available on this page"
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Our Box Solutions Catalog",
    "numberOfItems": allProducts.length,
    "itemListElement": allProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": "Our Box Solution"
        },
        "offers": {
          "@type": "Offer",
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "priceCurrency": "INR", // Change to your local currency code
          // Cleans price: converts "₹1,200" to "1200"
          "price": product.price ? product.price.replace(/[^0-9.]/g, '') : "0",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <section id="products" className="bg-gray-50 py-20">
      {/* SEO: Inject the structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Our Box Solutions
          </h2>
          <div className="mt-4 h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Specialized packaging for sarees, textiles, and industrial shipping.
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
                {/* Microdata: itemScope and itemType help search engines link visual elements to data */}
                <div 
                  className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full"
                  itemScope 
                  itemType="https://schema.org/Product"
                >
                  {/* Product Image */}
                  <div className="relative pt-[80%] bg-gray-200">
                    <img 
                      itemProp="image"
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/800x600?text=Packaging+Solution';
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900" itemProp="name">
                        {product.name}
                      </h3>
                    </div>
                    <p 
                      className="text-gray-600 text-sm line-clamp-2 leading-relaxed" 
                      itemProp="description"
                    >
                      {product.description}
                    </p>
                    
                    {/* Offer/Pricing Section */}
                    <div 
                      className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between"
                      itemProp="offers" 
                      itemScope 
                      itemType="https://schema.org/Offer"
                    >
                      {/* Hidden meta for bots */}
                      <meta itemProp="priceCurrency" content="INR" />
                      <meta itemProp="availability" content="https://schema.org/InStock" />
                      
                      <span className="text-gray-400 font-medium text-sm">
                        Product Solution
                      </span>
                      
                      {/* Visible Price */}
                      <span 
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-widest"
                        itemProp="price"
                        content={product.price ? product.price.replace(/[^0-9.]/g, '') : "0"}
                      >
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}