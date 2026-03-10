import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { galleryItems } from '../data/gallery';

const domain = 'https://premiumpacking.in';

export default function SareeBoxGallery() {
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Saree Box Designs Gallery',
    description:
      'Gallery of premium saree box designs manufactured at our Sivakasi factory. Includes plain, printed, customized, luxury, and corrugated packaging solutions.',
    url: `${domain}/gallery`,
    mainEntity: galleryItems.map((item) => ({
      '@type': 'ImageObject',
      contentUrl: `${domain}${item.image}`,
      name: item.caption,
      description: item.alt,
    })),
  };

  return (
    <>
      <SEOHead
        title="Saree Box Designs Gallery | Premium Packaging Photos"
        description="Browse our gallery of real saree box designs — plain, printed, customized, luxury and corrugated. All manufactured at our Sivakasi factory with various lamination finishes."
        keywords="saree box designs, saree box gallery, saree packaging photos, saree box images, premium saree box designs"
        canonicalUrl={`${domain}/gallery`}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <header className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Our work
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Saree Box Designs Gallery
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every box shown here is manufactured at our factory. Browse our range of plain, printed, customized,
              luxury and corrugated saree packaging — then tap any box to see product details or the process behind it.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                    width={640}
                    height={480}
                    decoding="async"
                  />
                </div>
                <figcaption className="p-4 flex flex-col flex-1">
                  <p className="text-sm sm:text-base font-medium text-gray-900 mb-3 flex-1">{item.caption}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {item.productLink && (
                      <Link
                        to={item.productLink}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-blue-100 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
                      >
                        View product <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                    {item.processLink && (
                      <Link
                        to={item.processLink}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        See process <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Want a custom design for your saree brand?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Share your brand colours, logo, and preferred box size. We will create a print-ready design and
              send you a sample before bulk production.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://wa.me/918904752338?text=Hi%2C%20I%20saw%20your%20gallery%20and%20want%20a%20custom%20saree%20box%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold shadow-md transition-colors"
              >
                Request custom design on WhatsApp
              </a>
              <Link
                to="/process/saree-box-manufacturing"
                className="inline-flex items-center px-4 py-2.5 rounded-xl border border-blue-100 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
              >
                How we manufacture these boxes
              </Link>
              <Link
                to="/case-study"
                className="inline-flex items-center px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Read our case studies
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
