import { Link } from 'react-router-dom';
import { MapPin, Package, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { caseStudies } from '../data/caseStudies';

const domain = 'https://premiumpacking.in';

export default function CaseStudyIndex() {
  return (
    <>
      <SEOHead
        title="Saree Box Case Studies | Real Orders from Our Factory"
        description="Real case studies from our saree box manufacturing factory. See how we handle bulk India orders and international export shipments with timelines, materials, and lessons learned."
        keywords="saree box case study, saree box manufacturer experience, saree packaging order, bulk saree box delivery"
        canonicalUrl={`${domain}/case-study`}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <header className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              From our factory floor
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Saree Box Case Studies
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              These are real orders we have fulfilled — with actual volumes, timelines, materials used, and
              lessons we learned along the way. No stock photos, no generic advice.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-study/${study.slug}`}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 bg-blue-50 text-blue-700">
                    {study.category === 'export' ? 'Export' : 'India'}
                  </span>

                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">{study.intro}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-50">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Package className="h-3.5 w-3.5" />
                      {study.volume.split(' ')[0]} boxes
                    </span>
                  </div>
                </div>

                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-semibold group-hover:underline">Read full case study</span>
                  <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Want similar results for your saree packaging?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Whether you need bulk orders for Indian textile markets or export-ready premium packaging, we can help.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://wa.me/918904752338?text=Hi%2C%20I%20saw%20your%20case%20studies%20and%20would%20like%20to%20discuss%20my%20saree%20box%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold shadow-md transition-colors"
              >
                Discuss your requirement on WhatsApp
              </a>
              <Link
                to="/process/saree-box-manufacturing"
                className="inline-flex items-center px-4 py-2.5 rounded-xl border border-blue-100 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
              >
                See our manufacturing process
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
