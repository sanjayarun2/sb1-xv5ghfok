import { type TouchEvent, useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { categoryProducts } from '../data/products';
import { Link } from 'react-router-dom';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
  const allProducts = Object.values(categoryProducts).flat();
  const domain = "https://premiumpacking.in";
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Slugify function to create dynamic URLs from names
  const slugify = (text: string) => text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Saree Box Packaging Solutions Catalog", 
    "description": "Premium saree box packaging and customised solutions for luxury retail, textiles, and global industrial shipping.",
    "numberOfItems": allProducts.length,
    "itemListElement": allProducts.map((product, index) => {
      const productSlug = slugify(product.name);
      return {
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
            "url": `${domain}/product/${productSlug}`, 
            "priceCurrency": "INR",
            "price": "0", 
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          }
        }
      };
    })
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
    setTouchStartX(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? allProducts.length - 1 : prev - 1;
    });
  }, [allProducts.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === allProducts.length - 1 ? 0 : prev + 1;
    });
  }, [allProducts.length]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPreviousImage();
      if (event.key === 'ArrowRight') showNextImage();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [activeImageIndex, closeLightbox, showNextImage, showPreviousImage]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;
    const minSwipeDistance = 40;

    if (deltaX > minSwipeDistance) {
      showPreviousImage();
    } else if (deltaX < -minSwipeDistance) {
      showNextImage();
    }

    setTouchStartX(null);
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
            {allProducts.map((product, index) => {
              const productSlug = slugify(product.name);
              return (
                <SwiperSlide key={product.id}>
                  <div className="group block h-full">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-md transition-shadow">
                      <button
                        type="button"
                        aria-label={`Preview ${product.name} image`}
                        className="relative pt-[80%] bg-gray-200 block w-full text-left"
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img 
                          src={product.image}
                          alt={`${product.name} - Custom saree box manufacturer Premium Pack`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          width={800}
                          height={640}
                          decoding="async"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/800x600?text=Packaging+Solution';
                          }}
                        />
                      </button>

                      <div className="p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                          <Link to={`/product/${productSlug}`} className="text-blue-600 font-medium text-sm">
                            View Details →
                          </Link>
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-widest">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl leading-none"
              aria-label="Close image viewer"
            >
              ×
            </button>

            <img
              src={allProducts[activeImageIndex].image}
              alt={allProducts[activeImageIndex].name}
              className="w-full max-h-[85vh] object-contain rounded-xl"
              loading="eager"
            />

            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/65 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/65 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center"
              aria-label="Next image"
            >
              ›
            </button>

            <p className="text-white/90 text-center text-sm mt-3">
              {activeImageIndex + 1} / {allProducts.length} - {allProducts[activeImageIndex].name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}