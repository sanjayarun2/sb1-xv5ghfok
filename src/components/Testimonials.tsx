import { useEffect } from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../data/testimonials';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  
  // --- DYNAMIC SCHEMA INJECTION (The only SEO you need) ---
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;

    const totalRating = testimonials.reduce((acc, curr) => acc + (curr.rating || 5), 0);
    const averageRating = (totalRating / testimonials.length).toFixed(1);

    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Product", 
      "name": "Our Box Solution Packaging Services",
      "image": "https://yourwebsite.com/logo.png", 
      "description": "Custom box packaging solutions for textiles and industrial use.",
      "brand": {
        "@type": "Brand",
        "name": "Our Box Solution"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": averageRating,
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": testimonials.length.toString()
      },
      "review": testimonials.map((t) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "reviewBody": t.content,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating || 5
        }
      }))
    };

    const scriptId = 'testimonial-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.innerHTML = JSON.stringify(schemaData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  const renderStars = (rating: number = 5) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 text-yellow-400 fill-current" />);
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-500">What our customers say about our custom boxes</p>
        </div>

        <div className="mt-8">
          {testimonials && testimonials.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="pb-16"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  {/* Visual Card - Cleaned of all itemProps/itemScopes */}
                  <div className="h-full bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 italic leading-relaxed flex-grow">
                      “{testimonial.content}”
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  );
}