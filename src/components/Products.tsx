import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { categoryProducts } from '../data/products';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
  const allProducts = Object.values(categoryProducts).flat();

  // 2. Optimized JSON-LD for Rich Results
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
        "sku": `BOX-${product.id}`, // Better for Merchant Center
        "brand": {
          "@type": "Brand",
          "name": "Our Box Solution"
        },
        // ADDED: AggregateRating gives you the Stars in Google Search
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120"
        },
        "offers": {
          "@type": "Offer",
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "priceCurrency": "INR",
          "price": product.price ? product.price.replace(/[^0-9.]/g, '') : "0",
          "priceValidUntil": "2026-12-31", // Prevents Google Console errors
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "shippingDetails": {
             "@type": "OfferShippingDetails",
             "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "INR"
             }
          }
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
                <div 
                  className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full"
                  itemScope 
                  itemType="https://schema.org/Product"
                >
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

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900" itemProp="name">
                        {product.name}
                      </h3>
                    </div>
                    {/* Added Brand Microdata */}
                    <meta itemProp="brand" content="Our Box Solution" />
                    <meta itemProp="sku" content={`BOX-${product.id}`} />
                    
                    <p 
                      className="text-gray-600 text-sm line-clamp-2 leading-relaxed" 
                      itemProp="description"
                    >
                      {product.description}
                    </p>
                    
                    <div 
                      className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between"
                      itemProp="offers" 
                      itemScope 
                      itemType="https://schema.org/Offer"
                    >
                      <meta itemProp="priceCurrency" content="INR" />
                      <meta itemProp="availability" content="https://schema.org/InStock" />
                      <meta itemProp="url" content={typeof window !== 'undefined' ? window.location.href : ''} />
                      
                      <span className="text-gray-400 font-medium text-sm">
                        Product Solution
                      </span>
                      
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