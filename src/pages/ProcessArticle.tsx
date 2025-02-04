import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const processArticles = {
  'pre-press': {
    title: 'Pre Press: The Foundation of Quality Printing',
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=2000',
    content: `
      Our pre-press department is where the magic begins in the printing process. Using state-of-the-art equipment and the latest software, our skilled technicians ensure every project starts with precision and excellence.

      The pre-press stage is crucial as it sets the foundation for the entire printing process. Here's what makes our pre-press operations special:

      • Advanced Color Management
      Our sophisticated color calibration systems ensure consistent, accurate colors across all printing methods. We use spectrophotometers and advanced profiling software to maintain color accuracy.

      • High-Resolution Imaging
      With our cutting-edge scanning and imaging equipment, we can process images at resolutions up to 2400 DPI, ensuring crystal-clear reproduction of even the finest details.

      • Digital Proofing
      Before proceeding to production, we provide accurate digital proofs that precisely match the final printed output, allowing for any necessary adjustments.

      • Automated Workflow
      Our automated workflow system reduces human error and ensures consistent quality across all projects, from simple business cards to complex packaging solutions.
    `
  },
  'binding-division': {
    title: 'Binding Division: Where Precision Meets Durability',
    image: 'https://images.unsplash.com/photo-1585980516944-5db41bae6786?auto=format&fit=crop&q=80&w=2000',
    content: `
      The binding division is where individual components come together to create finished products that are both beautiful and durable. Our state-of-the-art binding facility is equipped with the latest technology and operated by skilled craftsmen.

      Our binding capabilities include:

      • Perfect Binding
      Ideal for books, catalogs, and high-end brochures, our perfect binding process creates a clean, professional spine that's both durable and aesthetically pleasing.

      • Case Binding
      For premium products requiring exceptional durability, our case binding service offers traditional craftsmanship combined with modern precision.

      • Mechanical Binding
      We offer various mechanical binding options including spiral, wire-o, and ring binding, each suited to different applications and usage requirements.

      • Special Finishes
      Our binding process can incorporate special finishes such as foil stamping, embossing, and spot UV coating to add that extra touch of luxury to your products.
    `
  },
  'packaging-finishing': {
    title: 'Packaging Finishing: The Final Touch of Excellence',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
    content: `
      The finishing department is where our products receive their final touches, transforming them from mere printed materials into premium packaging solutions. Our finishing processes are designed to enhance both the aesthetic appeal and functional durability of your packaging.

      Our finishing expertise includes:

      • Surface Enhancement
      We offer a range of surface treatments including soft-touch coating, spot UV, and metallic finishes that not only look stunning but also provide additional protection.

      • Structural Finishing
      Our advanced die-cutting and folding equipment ensures precise, clean edges and perfect assembly of complex packaging structures.

      • Quality Control
      Every piece undergoes rigorous quality checks using both automated systems and expert human inspection to ensure perfection.

      • Custom Solutions
      We can develop custom finishing processes for unique packaging requirements, pushing the boundaries of what's possible in packaging design.
    `
  }
};

export default function ProcessArticle() {
  const { process } = useParams<{ process: string }>();
  const article = process ? processArticles[process as keyof typeof processArticles] : null;

  if (!article) return null;

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.content.slice(0, 155) + '...'}
        keywords="manufacturing process, packaging, printing, box manufacturing"
      />
      <div className="min-h-screen bg-white pt-16">
        <Breadcrumbs />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">{article.title}</h1>

          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}