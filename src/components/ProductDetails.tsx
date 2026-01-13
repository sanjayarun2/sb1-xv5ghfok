import { useParams } from 'react-router-dom';
import { categoryProducts } from '../data/products';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>(); // Gets "plain-saree-box" from URL
  const allProducts = Object.values(categoryProducts).flat();

  // Helper to convert names to slugs (Must match the one in Products.tsx)
  const slugify = (text: string) => text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Find the product where the Name matches the URL slug
  const product = allProducts.find(p => slugify(p.name) === slug);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img src={product.image} alt={product.name} className="rounded-2xl w-full" />
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-6 text-xl text-gray-600">{product.description}</p>
          <div className="mt-8 p-4 bg-blue-50 text-blue-700 font-bold rounded-lg inline-block">
            {product.price}
          </div>
        </div>
      </div>
    </div>
  );
}