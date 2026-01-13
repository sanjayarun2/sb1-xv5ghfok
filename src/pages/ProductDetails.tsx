import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { categoryProducts } from '../data/products';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function ProductDetails() {
  // Use 'slug' as defined in App.tsx
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Must be identical to the one in Products.tsx
  const slugify = (text: string) => 
    text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  useEffect(() => {
    const findProduct = () => {
      setLoading(true);
      
      // 1. Get all products from all categories
      const allProducts = Object.values(categoryProducts).flat();
      
      // 2. Find by comparing the slugified name from data to the slug in URL
      const foundProduct = allProducts.find((p) => slugify(p.name) === slug);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setProduct(null);
      }
      setLoading(false);
    };

    findProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-gray-200 rounded"></div>
            <div className="aspect-[4/5] w-full bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <p className="text-gray-500 mt-2">The packaging solution you are looking for might have moved.</p>
          <Link to="/" className="text-blue-600 mt-6 inline-block font-medium hover:underline">
            ← Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [{ id: 'main', url: product.image, alt_text: product.name }];

  return (
    <>
      <SEOHead
        title={`${product.name} | Saree Box Manufacturer`}
        description={product.description}
        keywords={`${product.name}, custom packaging, saree box wholesale, luxury saree boxes`}
        canonicalUrl={`https://premiumpacking.in/product/${slug}`}
        image={product.image.startsWith('http') ? product.image : `https://premiumpacking.in${product.image}`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              <div className="mt-6">
                <span className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  {product.price}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="product-carousel"
            >
              {allImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="aspect-[4/5] relative bg-white">
                    <img
                      src={image.url}
                      alt={`${image.alt_text} - Premium Saree Packaging`}
                      className="absolute inset-0 w-full h-full object-contain p-8"
                      loading="eager"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ShieldCheck className="mr-2 text-blue-600 h-6 w-6" /> Premium Manufacturing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our <strong>{product.name}</strong> is engineered specifically for the textile industry. 
                We use high-grade materials that prevent moisture buildup and protect delicate silk fibers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center uppercase text-xs tracking-widest">
                  <CheckCircle2 className="mr-2 text-green-500 h-4 w-4" /> Key Features
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• High-strength reinforcement</li>
                  <li>• Eco-friendly materials</li>
                  <li>• Smooth interior finish</li>
                  <li>• Custom dimensions available</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center uppercase text-xs tracking-widest">
                  <Box className="mr-2 text-blue-500 h-4 w-4" /> Usage
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trusted by retailers in Sivakasi and Elampillai for wedding collections and boutique packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}