import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Lightbulb, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { clusterArticles, type ProcessArticleData } from '../data/processArticles';

const domain = 'https://premiumpacking.in';

const legacyArticles: Record<string, { title: string; image: string; content: string }> = {
  'pre-press': {
    title: 'Pre Press: The Foundation of Quality Printing',
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=2000',
    content: `Our pre-press department is where the magic begins in the printing process. Using state-of-the-art equipment and the latest software, our skilled technicians ensure every project starts with precision and excellence.

The pre-press stage is crucial as it sets the foundation for the entire printing process. Here's what makes our pre-press operations special:

• Advanced Color Management
Our sophisticated color calibration systems ensure consistent, accurate colors across all printing methods. We use spectrophotometers and advanced profiling software to maintain color accuracy.

• High-Resolution Imaging
With our cutting-edge scanning and imaging equipment, we can process images at resolutions up to 2400 DPI, ensuring crystal-clear reproduction of even the finest details.

• Digital Proofing
Before proceeding to production, we provide accurate digital proofs that precisely match the final printed output, allowing for any necessary adjustments.

• Automated Workflow
Our automated workflow system reduces human error and ensures consistent quality across all projects, from simple business cards to complex packaging solutions.`,
  },
  'binding-division': {
    title: 'Binding Division: Where Precision Meets Durability',
    image: 'https://images.unsplash.com/photo-1585980516944-5db41bae6786?auto=format&fit=crop&q=80&w=2000',
    content: `The binding division is where individual components come together to create finished products that are both beautiful and durable. Our state-of-the-art binding facility is equipped with the latest technology and operated by skilled craftsmen.

Our binding capabilities include:

• Perfect Binding
Ideal for books, catalogs, and high-end brochures, our perfect binding process creates a clean, professional spine that's both durable and aesthetically pleasing.

• Case Binding
For premium products requiring exceptional durability, our case binding service offers traditional craftsmanship combined with modern precision.

• Mechanical Binding
We offer various mechanical binding options including spiral, wire-o, and ring binding, each suited to different applications and usage requirements.

• Special Finishes
Our binding process can incorporate special finishes such as foil stamping, embossing, and spot UV coating to add that extra touch of luxury to your products.`,
  },
  'packaging-finishing': {
    title: 'Packaging Finishing: The Final Touch of Excellence',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
    content: `The finishing department is where our products receive their final touches, transforming them from mere printed materials into premium packaging solutions. Our finishing processes are designed to enhance both the aesthetic appeal and functional durability of your packaging.

Our finishing expertise includes:

• Surface Enhancement
We offer a range of surface treatments including soft-touch coating, spot UV, and metallic finishes that not only look stunning but also provide additional protection.

• Structural Finishing
Our advanced die-cutting and folding equipment ensures precise, clean edges and perfect assembly of complex packaging structures.

• Quality Control
Every piece undergoes rigorous quality checks using both automated systems and expert human inspection to ensure perfection.

• Custom Solutions
We can develop custom finishing processes for unique packaging requirements, pushing the boundaries of what's possible in packaging design.`,
  },
};

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="text-amber-900 text-sm sm:text-base leading-relaxed font-medium">{children}</div>
      </div>
    </div>
  );
}

function LegacyArticle({ article }: { article: (typeof legacyArticles)[string] }) {
  return (
    <>
      <SEOHead
        title={article.title}
        description={article.content.slice(0, 155) + '...'}
        keywords="manufacturing process, packaging, printing, box manufacturing"
      />
      <div className="min-h-screen bg-white">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{article.title}</h1>

          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden">
            <img
              src={article.image}
              alt={`${article.title} - Premium Pack manufacturing process`}
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={675}
              decoding="async"
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

function ClusterArticle({ article }: { article: ProcessArticleData }) {
  const relatedArticles = clusterArticles.filter((a) => article.relatedSlugs.includes(a.slug));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: { '@type': 'Organization', name: 'Premium Packing', url: domain },
    publisher: { '@type': 'Organization', name: 'Premium Packing', url: domain },
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    mainEntityOfPage: `${domain}/process/${article.slug}`,
    ...(article.image ? { image: `${domain}${article.image}` } : {}),
  };

  return (
    <>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        keywords={article.metaKeywords}
        canonicalUrl={`${domain}/process/${article.slug}`}
        {...(article.image ? { image: `${domain}${article.image}` } : {})}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />
        <div className="max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          {/* Back Link */}
          <Link
            to="/process/saree-box-manufacturing"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Full Manufacturing Guide
          </Link>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            {article.title}
          </h1>

          {/* Answer Block for AI Overviews */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="text-blue-900 text-base sm:text-lg leading-relaxed font-medium">
              {article.answerBlock}
            </p>
          </div>

          {/* Hero Image */}
          {article.image && (
            <figure className="mb-10">
              {article.image.startsWith('/process/') && (article.image.endsWith('.png') || article.image.endsWith('.jpg')) ? (
                <picture>
                  <source srcSet={article.image.replace(/\.(png|jpg)$/i, '.webp')} type="image/webp" />
                  <img
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    className="w-full max-w-lg mx-auto rounded-xl border border-gray-100 shadow-sm"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              ) : (
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  className="w-full max-w-lg mx-auto rounded-xl border border-gray-100 shadow-sm"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              )}
              {article.imageAlt && (
                <figcaption className="text-center text-sm text-gray-400 mt-3">
                  {article.imageAlt}
                </figcaption>
              )}
            </figure>
          )}

          {/* Sections */}
          {article.sections.map((section, idx) => (
            <section key={idx} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>

              {section.content.map((para, pIdx) => (
                <p key={pIdx} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {section.list && (
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg pl-5 list-disc mb-4">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.proTip && <ProTip>{section.proTip}</ProTip>}
            </section>
          ))}

          {/* FAQ Section */}
          {article.faq.length > 0 && (
            <section className="mt-12 mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-blue-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {article.faq.map((faqItem, fIdx) => (
                  <details
                    key={fIdx}
                    className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <summary className="cursor-pointer px-5 py-4 text-gray-900 font-semibold text-base sm:text-lg flex items-center justify-between select-none">
                      {faqItem.question}
                      <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl font-light ml-4 flex-shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-700 text-base leading-relaxed">
                      {faqItem.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related Processes */}
          {relatedArticles.length > 0 && (
            <section className="mt-12 pt-10 border-t border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Related Processes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/process/${related.slug}`}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    <span className="text-gray-800 font-medium text-sm">{related.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA to Pillar */}
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <Link
              to="/process/saree-box-manufacturing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              Read the Full Manufacturing Guide
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProcessArticle() {
  const { process } = useParams<{ process: string }>();

  if (!process) return null;

  const legacyArticle = legacyArticles[process];
  if (legacyArticle) {
    return <LegacyArticle article={legacyArticle} />;
  }

  const clusterArticle = clusterArticles.find((a) => a.slug === process);
  if (clusterArticle) {
    return <ClusterArticle article={clusterArticle} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">Article not found</h2>
        <p className="text-gray-500 mt-2">The process article you are looking for might have moved.</p>
        <Link to="/" className="text-blue-600 mt-6 inline-block font-medium hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
