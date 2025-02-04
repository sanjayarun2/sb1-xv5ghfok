import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductImage {
  id: string;
  url: string;
  alt_text: string;
  display_order: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category_id: string;
  images: ProductImage[];
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setLoading(true);

      try {
        const { data: productData, error: productError } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();

        if (productError) throw productError;

        const { data: imageData, error: imageError } = await supabase
          .from('product_images')
          .select('*')
          .eq('product_id', id)
          .order('display_order');

        if (imageError) throw imageError;

        if (productData) {
          setProduct({
            ...productData,
            images: imageData || []
          });
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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

  if (!product) return null;

  const allImages = [
    { id: 'main', url: product.image_url, alt_text: product.name, display_order: 0 },
    ...product.images
  ];

  return (
    <>
      <SEOHead
        title={product.name}
        description={product.description}
        keywords={`${product.name}, premium boxes, packaging`}
      />
      <div className="min-h-screen bg-gray-50">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>

          {/* Main Image Carousel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="product-carousel"
            >
              {allImages.map((image, index) => (
                <SwiperSlide key={image.id}>
                  <div className="aspect-[4/5] relative bg-gray-100">
                    <img
                      src={image.url}
                      alt={image.alt_text || `${product.name} - View ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2 mt-4">
            {allImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  activeIndex === index ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img
                  src={image.url}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}