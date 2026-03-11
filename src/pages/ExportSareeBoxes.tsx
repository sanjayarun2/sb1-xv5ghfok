import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustStrip from '../components/TrustStrip';
import FAQBlock from '../components/FAQBlock';
import HowToOrder from '../components/HowToOrder';
import FactoryStandards from '../components/FactoryStandards';
import { exportPage } from '../data/exportPage';

const domain = 'https://premiumpacking.in';
const whatsappURL =
  'https://wa.me/918904752338?text=Hi%2C%20I%20am%20interested%20in%20export%20saree%20boxes%20for%20overseas%20orders.';

export default function ExportSareeBoxes() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: exportPage.metaTitle,
    description: exportPage.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Premium Box Manufacturing',
      url: domain,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Premium Box Manufacturing',
      url: domain,
    },
    mainEntityOfPage: `${domain}/export-saree-boxes`,
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Export saree boxes and packaging',
    description: exportPage.metaDescription,
    brand: {
      '@type': 'Brand',
      name: 'Premium Box Manufacturing',
    },
    areaServed: exportPage.regions.map((region) => ({
      '@type': 'Country',
      name: region.name,
    })),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <SEOHead
        title={exportPage.metaTitle}
        description={exportPage.metaDescription}
        keywords={exportPage.metaKeywords}
        canonicalUrl={`${domain}/export-saree-boxes`}
        type="product"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <header className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Saree box exporter
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Export Saree Boxes for International Orders
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{exportPage.intro}</p>
            <p className="mt-3 text-xs sm:text-sm text-gray-500">{exportPage.note}</p>
          </header>

          <section className="grid lg:grid-cols-[2fr,1.1fr] gap-10 lg:gap-16 mb-14">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Why exporters work with our factory
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc pl-5">
                <li>Experience supplying saree boxes for sea and air cargo shipments to multiple countries.</li>
                <li>High-weight coated (HWC) board and proper lamination to prevent edge crushing in transit.</li>
                <li>Support for export markings, HS codes and handling instructions on outer cartons.</li>
                <li>Flexible MOQs suitable for both established exporters and new brands testing markets.</li>
              </ul>
            </div>

            <aside className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Discuss your export saree box requirement
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Share destination country, approximate saree quantities per month and preferred box style. We will
                respond with material suggestions, packing method and tentative costing.
              </p>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center px-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-bold tracking-wide shadow-md transition-colors"
              >
                WhatsApp us for export quotation
              </a>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                You can also route enquiries through your existing freight forwarder. We coordinate packing and carton
                dimensions as per their guidelines.
              </p>
            </aside>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regions we commonly export to</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {exportPage.regions.map((region) => (
                <article
                  key={region.id}
                  className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{region.heading}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">{region.description}</p>
                  <ul className="space-y-1.5 text-sm text-gray-700 list-disc pl-4">
                    {region.shippingInfo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <HowToOrder variant="compact" />

          <FactoryStandards showExportDoc />

          <FAQBlock
            title="Export saree box FAQs"
            items={[
              { question: 'What is the minimum order for export saree boxes?', answer: 'For export orders, our minimum is 1,000 boxes per design. This allows us to set up printing and lamination efficiently while keeping per-box costs competitive for international shipments.' },
              { question: 'Do you provide HS code and export documentation?', answer: 'Yes. We include HS code, country of origin, packing list, and handling instructions on outer cartons. Our team coordinates with your freight forwarder for any specific documentation requirements.' },
              { question: 'How do you pack boxes for sea freight?', answer: 'Saree boxes are packed in 5-ply corrugated cartons, strapped, and stretch-wrapped. For container shipments, cartons are palletised to prevent movement. We follow standard export packing norms to minimise transit damage.' },
              { question: 'Can you ship samples internationally before a bulk order?', answer: 'Yes. We can courier sample boxes to any country via DHL or FedEx. Shipping cost for samples is borne by the buyer, and it typically takes 5–7 working days for delivery.' },
              { question: 'Do you support custom box sizes for international brands?', answer: 'Absolutely. We manufacture custom dies for any box size. Share the dimensions and folding style of your saree, and we will recommend the optimal box size for your specific saree type.' },
            ]}
          />

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Understand our saree box construction before you export
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              For exporters, it is important to know how the box is built before confirming a long-term program. Our
              process documentation is written from real factory experience.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="/process/saree-box-manufacturing"
                className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
              >
                Full Saree Box Manufacturing Guide
              </a>
              <a
                href="/process/saree-box-materials"
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Saree box materials
              </a>
              <a
                href="/process/scoring-die-cutting"
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Scoring &amp; die cutting
              </a>
            </div>
          </section>
        </main>

        <TrustStrip variant="export" />
      </div>
    </>
  );
}

