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
  // FIX 1: Change 'id' to 'slug' to match App.tsx
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // FIX 2: Helper function to turn name into URL format
  const slugify = (text: string) => 
    text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  useEffect(() => {
    const findProduct = () => {
      setLoading(true);
      const allProducts = Object.values(categoryProducts).flat();
      
      // FIX 3: Search using the slugified name instead of ID
      const foundProduct = allProducts.find((p) => slugify(p.name) === slug);
      
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setLoading(false);
    };

    findProduct();
  }, [slug]); // Depend on slug change

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-gray-200 rounded"></div>
            <div className="aspect-[4/5] w-full bg-gray-200 rounded-lg"></div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <Link to="/" className="text-blue-600 mt-4 block">Return to Products</Link>
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
        keywords={`${product.name}, custom packaging, saree box wholesale, luxury saree boxes, premiumpacking.in`}
        // FIX 4: Use slug in canonical URL for SEO
        canonicalUrl={`https://premiumpacking.in/product/${slugify(product.name)}`}
        image={product.image.startsWith('http') ? product.image : `https://premiumpacking.in${product.image}`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="product-carousel"
            >
              {allImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="aspect-[4/5] relative bg-gray-100">
                    <img
                      src={image.url}
                      alt={`${image.alt_text} - Premium Saree Packaging Solutions`}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                      loading="eager"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <ShieldCheck className="mr-2 text-blue-600" /> Premium Quality & Durability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our <strong>{product.name}</strong> is engineered specifically for the textile industry. 
                We understand that saree packing requires a balance of aesthetics and protection. 
                Each box is manufactured using high-grade materials that prevent moisture buildup 
                and protect delicate silk fibers from dust and external pressure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <CheckCircle2 className="mr-2 text-green-500" /> Key Features
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• High-strength reinforcement for stacking</li>
                  <li>• Eco-friendly and recyclable materials</li>
                  <li>• Smooth interior finish to prevent fabric snags</li>
                  <li>• Customizable dimensions for heavy silk sarees</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Box className="mr-2 text-blue-500" /> Industrial Usage
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trusted by retailers in Sivakasi and Elampillai, these boxes are ideal for 
                  wedding collections, luxury boutique packaging, and safe long-distance 
                  industrial shipping of textile goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}