import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryProducts } from '../data/products';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function CategoryPage() {
  const { category } = useParams();
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];
  
  const categoryName = category?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const description = `Browse our premium ${categoryName}. High-quality packaging solutions customized for your needs.`;
  const keywords = `${categoryName}, custom boxes, packaging solutions, premium boxes, box manufacturer`;

  return (
    <>
      <SEOHead 
        title={categoryName}
        description={description}
        keywords={keywords}
        canonicalUrl={`https://yourwebsite.com/category/${category}`}
      />
      <div className="pt-20 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-4">
              {categoryName}
            </h1>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-500">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-blue-600 font-bold">{product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}