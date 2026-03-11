import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import FactoryStandards from '../components/FactoryStandards';
import HowToOrder from '../components/HowToOrder';

const domain = 'https://premiumpacking.in';

export default function WhySareeBoxOnly() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why We Manufacture Only Saree Boxes',
    description:
      'We chose to focus on saree boxes and nothing else. Learn why our Sivakasi factory specialises in saree and textile packaging.',
    author: { '@type': 'Organization', name: 'Premium Box Manufacturing', url: domain },
    publisher: { '@type': 'Organization', name: 'Premium Box Manufacturing', url: domain },
    datePublished: '2026-03-10',
    dateModified: '2026-03-10',
    mainEntityOfPage: `${domain}/why-saree-box-only`,
  };

  return (
    <>
      <SEOHead
        title="Why We Manufacture Only Saree Boxes | Our Story"
        description="We focus 100% on saree and textile packaging — no food boxes, no cosmetics, no generic cartons. Learn why we chose this path and what it means for your saree brand."
        keywords="saree box manufacturer only, saree box specialist, why saree box, saree packaging focus, dedicated saree box factory"
        canonicalUrl={`${domain}/why-saree-box-only`}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        <main className="max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <header className="mb-10">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Our story
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Why We Manufacture Only Saree Boxes
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
              Most packaging factories try to do everything — food boxes, cosmetics, electronics, garments. We took the
              opposite approach. Since 2010, our entire factory has been built around one thing: manufacturing the best
              possible saree box.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              How it started
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              We are based in Sivakasi, Tamil Nadu — India's printing and packaging capital. When we started, like
              every other small factory here, we took whatever orders came in: sweet boxes, shirt boxes, calendar
              printing, visiting cards.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              But one product kept coming back with repeat orders, higher volumes, and fewer complaints: saree boxes.
              Textile traders from Surat, silk saree brands from Chennai, wholesalers from Kolkata — they all needed
              one thing done well, and they were frustrated with generic packaging factories that treated their saree
              boxes like an afterthought between food carton runs.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              So we made a decision: stop doing everything else. Focus only on saree and textile packaging. Tune every
              machine, every process, every quality check specifically for saree boxes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              What this focus means for your orders
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Dies ready for common sizes',
                  text: 'We already have dies for the most popular saree box sizes (8x13x1.5, 9x14x1.5, and more). No die-making wait time for standard orders.',
                },
                {
                  title: 'Paperboard always in stock',
                  text: 'We keep 300 GSM and 350 GSM white-back and grey-back board in stock at all times because we know exactly what saree box orders need.',
                },
                {
                  title: 'Lamination tuned for saree boxes',
                  text: 'Our roller temperatures, pressure settings, and film thickness are dialled in for saree box board weight — not adjusted each time from a food carton run.',
                },
                {
                  title: 'QC that understands textile packaging',
                  text: 'Our quality team checks for things that matter to saree brands: crease sharpness for clean folds, lamination adhesion for moisture protection, and colour consistency across repeat orders.',
                },
                {
                  title: 'Faster turnaround',
                  text: 'Because we are not switching between product types, there is no setup time wasted. A 5,000-box order typically ships in 7 working days.',
                },
                {
                  title: 'Better pricing on bulk',
                  text: 'Our material sourcing, production planning, and logistics are all optimised for one product type. This efficiency translates directly to better per-box rates for you.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              What we do NOT manufacture
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              To stay focused, we deliberately say no to:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700 list-disc pl-5 mb-4">
              <li>Food packaging (sweet boxes, cake boxes, snack cartons)</li>
              <li>Cosmetics and perfume boxes</li>
              <li>Electronics packaging</li>
              <li>Pharmaceutical boxes</li>
              <li>Generic mono cartons</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              If you need any of the above, we are happy to refer you to other factories in Sivakasi who specialise in
              those areas. Our focus stays on saree and textile packaging only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Who we serve today
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our saree box clients include:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700 list-disc pl-5">
              <li>Wholesale saree traders in Surat, Chennai, Kolkata, Mumbai, Delhi, Bangalore, Ahmedabad, and Hyderabad</li>
              <li>Silk saree showrooms and retail brands across South India</li>
              <li>Saree exporters shipping to UAE, USA, UK, Saudi Arabia, Singapore, and Malaysia</li>
              <li>Online saree brands who need packaging that photographs well and ships safely</li>
              <li>Wedding saree gift box buyers who need premium finishes (velvet, matte, foil)</li>
            </ul>
          </section>

          <FactoryStandards showExportDoc />

          <HowToOrder />

          <section className="border-t border-gray-100 pt-8 mt-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Explore more about how we work
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <Link to="/process/saree-box-manufacturing" className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group">
                <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                <span className="text-gray-800 font-medium">Full manufacturing guide</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group">
                <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                <span className="text-gray-800 font-medium">Saree box gallery</span>
              </Link>
              <Link to="/case-study" className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group">
                <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                <span className="text-gray-800 font-medium">Real order case studies</span>
              </Link>
              <Link to="/export-saree-boxes" className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group">
                <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                <span className="text-gray-800 font-medium">Export saree boxes</span>
              </Link>
              <Link to="/about" className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group">
                <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                <span className="text-gray-800 font-medium">About us</span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
