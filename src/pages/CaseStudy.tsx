import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Package, Clock, Lightbulb, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { caseStudies } from '../data/caseStudies';

const domain = 'https://premiumpacking.in';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return null;

  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Case study not found</h1>
          <p className="text-gray-500 mb-4">This case study may have been moved or does not exist.</p>
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.metaDescription,
    author: { '@type': 'Organization', name: 'Premium Box Manufacturing', url: domain },
    publisher: { '@type': 'Organization', name: 'Premium Box Manufacturing', url: domain },
    datePublished: '2026-03-10',
    dateModified: '2026-03-10',
    mainEntityOfPage: `${domain}/case-study/${study.slug}`,
  };

  return (
    <>
      <SEOHead
        title={study.metaTitle}
        description={study.metaDescription}
        keywords={study.metaKeywords}
        canonicalUrl={`${domain}/case-study/${study.slug}`}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link
            to="/case-study"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Case Studies
          </Link>

          <header className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 bg-blue-50 text-blue-700">
              {study.category === 'export' ? 'Export order' : 'India order'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {study.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{study.intro}</p>
          </header>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium text-gray-900">{study.location}</p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
              <Package className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Volume</p>
                <p className="text-sm font-medium text-gray-900">{study.volume}</p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Timeline</p>
                <p className="text-sm font-medium text-gray-900">{study.timeline}</p>
              </div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The challenge</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{study.challenge}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How we solved it</h2>
            <ol className="space-y-3 text-base sm:text-lg text-gray-700 list-decimal pl-5">
              {study.solution.map((step) => (
                <li key={step} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </section>

          <section className="mb-10 bg-green-50 border border-green-100 rounded-2xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-green-900 mb-2">Result</h2>
            <p className="text-base sm:text-lg text-green-900 leading-relaxed">{study.result}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              What we learned
            </h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700 list-disc pl-5">
              {study.lessonsLearned.map((lesson) => (
                <li key={lesson} className="leading-relaxed">{lesson}</li>
              ))}
            </ul>
          </section>

          {study.relatedLinks.length > 0 && (
            <section className="border-t border-gray-100 pt-8 mt-12">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Related pages</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {study.relatedLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    <span className="text-gray-800 font-medium text-sm">{link.label}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
