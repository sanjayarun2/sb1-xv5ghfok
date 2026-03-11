import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustStrip from '../components/TrustStrip';
import FAQBlock from '../components/FAQBlock';
import HowToOrder from '../components/HowToOrder';
import FactoryStandards from '../components/FactoryStandards';
import { cityPages } from '../data/cityPages';
import { categoryProducts } from '../data/products';

const domain = 'https://premiumpacking.in';
const whatsappURL =
  'https://wa.me/918904752338?text=Hi%2C%20I%20am%20interested%20in%20saree%20boxes%20for%20my%20city.';

export default function CityLanding() {
  const { citySlug } = useParams<{ citySlug: string }>();

  if (!citySlug) return null;

  const city = cityPages.find((c) => c.slug === citySlug);
  if (!city) {
    // If slug is not a known city, render a simple 404-style block.
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Location not found</h1>
          <p className="text-gray-500 mb-4">
            We could not find this city page. Please start from the main site and choose a valid location.
          </p>
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const organizationLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Premium Box Manufacturing',
    url: domain,
    areaServed: {
      '@type': 'City',
      name: city.cityName,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
    },
  };

  const allProducts = [
    ...categoryProducts['saree-boxes'],
    ...categoryProducts['printed-boxes'],
    ...categoryProducts['carton-boxes'],
  ];

  return (
    <>
      <SEOHead
        title={city.metaTitle}
        description={city.metaDescription}
        keywords={city.metaKeywords}
        canonicalUrl={`${domain}/${city.slug}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLocalBusinessSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <header className="mb-10">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Saree box manufacturer in {city.cityName}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {city.heroHeading}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
              {city.heroIntro}
            </p>
          </header>

          <section className="grid lg:grid-cols-[2fr,1.2fr] gap-10 lg:gap-16 mb-14">
            <div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  Delivery to {city.cityName}
                </h2>
                <p className="text-sm sm:text-base text-blue-900 leading-relaxed">{city.deliveryInfo}</p>
              </div>

              {city.localFacts.length > 0 && (
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc pl-5">
                  {city.localFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              )}
            </div>

            <aside className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Bulk & Retail Orders from {city.cityName}
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Share your saree count, box size requirement and printing preference. We will reply with sizing,
                material suggestion and best pricing.
              </p>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center px-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-bold tracking-wide shadow-md transition-colors"
              >
                WhatsApp us for {city.cityName} quotation
              </a>

              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                We already ship regularly to major Indian textile hubs. If you are a reseller or exporter based in{' '}
                {city.cityName}, we can support both domestic and export shipments.
              </p>
            </aside>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Saree box types we manufacture</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-2xl">
              The same saree box models you see on our main site are available for delivery to {city.cityName}. You
              can customise printing, lamination and box size based on your saree folding method.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} - Saree packaging solution for ${city.cityName}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={640}
                      height={480}
                      decoding="async"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 flex-1">{product.description}</p>
                    <p className="text-xs font-semibold text-blue-600 mt-auto">
                      Suitable for {city.cityName} wholesalers &amp; retailers
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <HowToOrder variant="compact" />

          <FactoryStandards />

          {city.faqs.length > 0 && (
            <FAQBlock
              title={`Saree box FAQs for ${city.cityName}`}
              items={city.faqs}
            />
          )}

          <section className="border-t border-gray-100 pt-8 mt-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Understand our manufacturing process in depth
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              If you would like to see exactly how we manufacture saree boxes before placing an order from{' '}
              {city.cityName}, explore our in-depth factory documentation.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                to="/process/saree-box-manufacturing"
                className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
              >
                Full Saree Box Manufacturing Guide
              </Link>
              <Link
                to="/process/paperboard-selection"
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Paperboard selection
              </Link>
              <Link
                to="/process/thermal-lamination"
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Lamination methods
              </Link>
              <Link
                to="/process/die-preparing"
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Die preparing
              </Link>
            </div>
          </section>
        </main>

        <TrustStrip variant="india" />
      </div>
    </>
  );
}

