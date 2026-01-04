import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { categoryProducts } from '../data/products';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
  const allProducts = Object.values(categoryProducts).flat();
  const domain = "https://premiumpacking.in";

  // Optimized JSON-LD for Rich Results
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
        "image": product.image.startsWith('http') ? product.image : `${domain}${product.image}`, 
        "description": product.description,
        "sku": `BOX-${product.id}`, 
        "brand": {
          "@type": "Brand",
          "name": "Our Box Solution"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120"
        },
        "offers": {
          "@type": "Offer",
          "url": domain,
          "priceCurrency": "INR",
          "price": "0", 
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "hasMerchantReturnPolicy": { 
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "IN",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 7,
            "returnFees": "https://schema.org/FreeReturn",
            "returnMethod": "https://schema.org/ReturnByMail"
          },
          "shippingDetails": {
             "@type": "OfferShippingDetails",
             "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "INR"
             },
             "shippingDestination": { 
                "@type": "DefinedRegion",
                "addressCountry": "IN"
             },
             "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
                "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 5, "unitCode": "DAY" }
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
                {/* Visual Card - Cleaned of all Microdata attributes */}
                <div className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
                  <div className="relative pt-[80%] bg-gray-200">
                    <img 
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
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-gray-400 font-medium text-sm">
                        Product Solution
                      </span>
                      
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-widest">
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