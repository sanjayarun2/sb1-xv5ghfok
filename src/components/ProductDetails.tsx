import { useParams } from 'react-router-dom';
import { categoryProducts } from '../data/products';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const allProducts = Object.values(categoryProducts).flat();

  const slugify = (text: string) => text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const product = allProducts.find(p => slugify(p.name) === slug);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  // Schema for Google Search (SERP)
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [`https://premiumpacking.in${product.image}`],
    "description": product.description,
    "brand": { "@type": "Brand", "name": "Premium Box Manufacturing" },
    "offers": {
      "@type": "Offer",
      "url": `https://premiumpacking.in/product/${slug}`,
      "priceCurrency": "INR",
      "price": "9.50", // Google needs a number like this to show in search
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      {/* Schema Script for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img src={product.image} alt={product.name} className="rounded-2xl w-full" />
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-6 text-xl text-gray-600">{product.description}</p>
          <div className="mt-8 p-4 bg-blue-50 text-blue-700 font-bold rounded-lg inline-block">
            {/* Displaying price range 9 to 10 as requested */}
            ₹9.00 - ₹10.00
          </div>
        </div>
      </div>
    </div>
  );
}