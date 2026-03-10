import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { pillarMeta, clusterArticles } from '../data/processArticles';

const domain = 'https://premiumpacking.in';

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

function InternalLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-2 hover:decoration-blue-600 transition-colors"
    >
      {children}
    </Link>
  );
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: pillarMeta.title,
  description: pillarMeta.metaDescription,
  author: {
    '@type': 'Organization',
    name: 'Premium Packing',
    url: domain,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Premium Packing',
    url: domain,
  },
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
  mainEntityOfPage: `${domain}/process/${pillarMeta.slug}`,
  image: `${domain}/process/boxsize.png`,
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Manufacture a Saree Box',
  description:
    'Step-by-step saree box manufacturing process including paperboard selection, lamination, die preparing, and scoring.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Paperboard Selection',
      text: 'Select the right paperboard size and GSM based on the saree box dimensions. Calculate unwrapped size and match to standard sheet.',
      url: `${domain}/process/paperboard-selection`,
      image: `${domain}/process/boxsize.png`,
    },
    {
      '@type': 'HowToStep',
      name: 'Lamination',
      text: 'Apply BOPP thermal lamination to the printed paperboard for waterproofing, durability, and finish.',
      url: `${domain}/process/bopp-lamination`,
    },
    {
      '@type': 'HowToStep',
      name: 'Die Preparing',
      text: 'Create a custom die board with cutting blades and crease rules matching the box dimensions.',
      url: `${domain}/process/die-preparing`,
      image: `${domain}/process/die-board.jpg`,
    },
    {
      '@type': 'HowToStep',
      name: 'Scoring & Die Cutting',
      text: 'Fix the die to the machine and punch laminated paperboard sheets to cut and crease the box shape.',
      url: `${domain}/process/scoring-die-cutting`,
      image: `${domain}/process/scoring-setup.png`,
    },
  ],
};

export default function SareeBoxManufacturing() {
  return (
    <>
      <SEOHead
        title={pillarMeta.metaTitle}
        description={pillarMeta.metaDescription}
        keywords={pillarMeta.metaKeywords}
        canonicalUrl={`${domain}/process/${pillarMeta.slug}`}
        image={`${domain}/process/boxsize.png`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs />

        {/* Hero / Intro */}
        <header className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              {pillarMeta.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Saree boxes are usually made up of sturdy cardboard or paperboard. Customers come with
              different sizes and different GSM requirements based on their saree folding types — mostly
              Book Fold and Visiri Fold. In this guide, we walk through every step of our manufacturing
              process, exactly as we do it at our factory.
            </p>
            <p className="mt-3 text-sm text-gray-400 font-medium">
              Published by Premium Packing &middot; Sivakasi &amp; Elampillai &middot; March 2026
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="my-10 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              In This Guide
            </h2>
            <ol className="space-y-2.5 text-sm sm:text-base list-decimal list-inside text-gray-700">
              <li><a href="#paperboard-selection" className="text-blue-600 hover:underline font-medium">Paperboard Selection</a></li>
              <li><a href="#lamination" className="text-blue-600 hover:underline font-medium">Lamination</a></li>
              <li><a href="#die-preparing" className="text-blue-600 hover:underline font-medium">Die Preparing</a></li>
              <li><a href="#scoring" className="text-blue-600 hover:underline font-medium">Scoring &amp; Die Cutting</a></li>
              <li><a href="#materials" className="text-blue-600 hover:underline font-medium">Saree Box Materials</a></li>
              <li><a href="#explore" className="text-blue-600 hover:underline font-medium">Explore All Processes</a></li>
            </ol>
          </nav>

          {/* =============== SECTION 1: PAPERBOARD SELECTION =============== */}
          <section id="paperboard-selection" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Step 1: <InternalLink to="/process/paperboard-selection">Paperboard Selection</InternalLink>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              For this explanation, we take the example of manufacturing a standard saree packing box, also
              called a <strong>Book Fold saree packing box</strong>. The finished size (Top Lid) is{' '}
              <strong>8 × 13 × 1.5 inches</strong> (W × H × T).
            </p>

            <figure className="my-8">
              <picture>
                <source srcSet="/process/boxsize.webp" type="image/webp" />
                <img
                  src="/process/boxsize.png"
                  alt="Saree box dimensions diagram — 13 x 8 x 1.5 inches"
                  className="w-full max-w-md mx-auto rounded-xl border border-gray-100 shadow-sm"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="text-center text-sm text-gray-400 mt-3">
                Standard Book Fold saree box dimensions: 13″ × 8″ × 1.5″
              </figcaption>
            </figure>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              The size 8×13×1.5 is the size <em>after folding</em>. In its unwrapped state, the total size
              is larger. To find the unwrapped size of the saree packing box:
            </p>

            <ul className="space-y-2 text-gray-700 text-base sm:text-lg pl-5 list-disc mb-4">
              <li>Height: left side 3.625 + Centre 13 + right side 3.625 = <strong>20.25″</strong></li>
              <li>Width: Top 3.75 + Centre 8 + Bottom 3.75 = <strong>15.5″</strong></li>
              <li>Total unwrapped size: <strong>20.25 × 15.5 inches (H × W)</strong></li>
            </ul>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              We then match this to the nearest standard paperboard size: <strong>22 × 32″ (H × W)</strong>.
              This means we can cut <strong>two top lids from a single sheet</strong> — this is how
              paperboard size is selected, and the same process applies for all custom saree box sizes.
            </p>

            <figure className="my-8">
              <picture>
                <source srcSet="/process/paperboard-sheet.webp" type="image/webp" />
                <img
                  src="/process/paperboard-sheet.png"
                  alt="Standard paperboard sheets used for saree box manufacturing"
                  className="w-full max-w-lg mx-auto rounded-xl border border-gray-100 shadow-sm"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="text-center text-sm text-gray-400 mt-3">
                Raw paperboard sheets — white back and grey back variants
              </figcaption>
            </figure>

            <ProTip>
              Getting two lids from one sheet instead of one halves your material cost per box. We always
              plan sheet utilization before confirming pricing to our clients.
            </ProTip>
          </section>

          {/* =============== SECTION 2: LAMINATION =============== */}
          <section id="lamination" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Step 2: Lamination
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Once the paperboard is selected, we apply lamination which gives the saree box waterproofing,
              durability, anti-cracking properties, colour retention, and a luxury finish.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              There are various methods of lamination:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { name: 'Thermal Lamination (Dry Lamination)', slug: 'thermal-lamination' },
                { name: 'Wet Lamination', slug: 'wet-lamination' },
                { name: 'BOPP Lamination', slug: 'bopp-lamination' },
                { name: 'Gloss Lamination', slug: 'gloss-lamination' },
                { name: 'Matte Lamination', slug: 'matte-lamination' },
                { name: 'Velvet / Soft Touch Lamination', slug: 'velvet-soft-touch-lamination' },
                { name: 'Met PET Lamination (Metallic)', slug: 'met-pet-metallic-lamination' },
              ].map((lam) => (
                <Link
                  key={lam.slug}
                  to={`/process/${lam.slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl text-gray-800 font-medium text-sm sm:text-base transition-colors group"
                >
                  <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                  {lam.name}
                </Link>
              ))}
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              At our factory, we primarily use{' '}
              <InternalLink to="/process/bopp-lamination">Thermal BOPP lamination</InternalLink> because the
              BOPP (Biaxially Oriented Polypropylene) film is clear, strong, and provides an excellent
              surface finishing.
            </p>

            <ProTip>
              We always run a small test batch when switching to a new paperboard supplier. Different boards
              absorb heat differently, and getting the roller temperature wrong causes bubbling or peeling.
            </ProTip>
          </section>

          {/* =============== SECTION 3: DIE PREPARING =============== */}
          <section id="die-preparing" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Step 3: <InternalLink to="/process/die-preparing">Die Preparing</InternalLink>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              A die is a custom-shaped metal tool used to cut or shape the sheet into the saree box shape —
              think of it as a heavy-duty stamp.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              A die is a flat wooden board that has metal blades sticking out of it:
            </p>

            <ul className="space-y-2 text-gray-700 text-base sm:text-lg pl-5 list-disc mb-6">
              <li>
                <strong>Cutting blades</strong> — sharp metal strips that cut the outer excess shape of the
                paperboard
              </li>
              <li>
                <strong>Crease rules</strong> — these do NOT cut the paperboard. Instead, they press into
                the board to create fold lines, so we can fold it easily
              </li>
            </ul>

            <figure className="my-8">
              <picture>
                <source srcSet="/process/die-board.webp" type="image/webp" />
                <img
                  src="/process/die-board.jpg"
                  alt="Die board from our factory with cutting blades and crease rules for saree box"
                  className="w-full max-w-lg mx-auto rounded-xl border border-gray-100 shadow-sm"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="text-center text-sm text-gray-400 mt-3">
                Real die board from our Sivakasi factory — note the cutting blades (edges) and crease rules
                (inner lines)
              </figcaption>
            </figure>

            <ProTip>
              The quality of the die directly affects every box produced from it. We inspect every new die
              with test cuts before starting production — a poorly made die causes uneven cuts, torn edges,
              or weak fold lines across the entire batch.
            </ProTip>
          </section>

          {/* =============== SECTION 4: SCORING =============== */}
          <section id="scoring" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Step 4: <InternalLink to="/process/scoring-die-cutting">Scoring &amp; Die Cutting</InternalLink>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Once the die is prepared, it is fixed to the die-cutting machine. Our worker takes the
              laminated paperboard, places it on top of the machine, and the die-cut punches it at regular
              frequency. This process is called scoring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <figure>
                <picture>
                  <source srcSet="/process/scoring-setup.webp" type="image/webp" />
                  <img
                    src="/process/scoring-setup.png"
                    alt="Worker placing laminated paperboard on die-cutting machine"
                    className="w-full rounded-xl border border-gray-100 shadow-sm"
                    width={600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption className="text-center text-sm text-gray-400 mt-3">
                  Placing the laminated sheet on the machine
                </figcaption>
              </figure>
              <figure>
                <picture>
                  <source srcSet="/process/scoring-machine.webp" type="image/webp" />
                  <img
                    src="/process/scoring-machine.png"
                    alt="Die cutting machine in action punching saree box shapes"
                    className="w-full rounded-xl border border-gray-100 shadow-sm"
                    width={600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption className="text-center text-sm text-gray-400 mt-3">
                  Die-cutting machine in action
                </figcaption>
              </figure>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              The same process is followed for the bottom lid, but the size is slightly reduced so it
              properly fits inside the top lid.
            </p>

            <figure className="my-8">
              <picture>
                <source srcSet="/process/top-bottom-lid.webp" type="image/webp" />
                <img
                  src="/process/top-bottom-lid.png"
                  alt="Saree box top lid and bottom lid showing size difference"
                  className="w-full max-w-md mx-auto rounded-xl border border-gray-100 shadow-sm"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="text-center text-sm text-gray-400 mt-3">
                Top Lid (larger) and Bottom Lid (slightly smaller) for a proper fit
              </figcaption>
            </figure>

            <ProTip>
              Machine pressure calibration is critical. Too much pressure and the crease rules cut through
              instead of just creasing. Too little and the fold lines are weak. We check settings at the
              start of every new die setup and after every 500 sheets.
            </ProTip>
          </section>

          {/* =============== SECTION 5: MATERIALS =============== */}
          <section id="materials" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              <InternalLink to="/process/saree-box-materials">Saree Box Materials</InternalLink>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Paperboard used for saree box manufacturing comes in several types classified by various
              attributes:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">By Backing Type</h3>
            <ul className="space-y-2 text-gray-700 text-base sm:text-lg pl-5 list-disc mb-6">
              <li>
                <strong>Grey Back</strong> (Recycled grey inner) — Uses recycled grey pulp for the inner
                layer. Cost-effective for general packaging where inside is not seen.
              </li>
              <li>
                <strong>White Back</strong> (Each side appears white) — White smooth inner layer providing
                a clean look for premium packaging where both sides need to appear bright.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3">By Coating Type</h3>
            <ul className="space-y-2 text-gray-700 text-base sm:text-lg pl-5 list-disc mb-6">
              <li>
                <strong>Coated</strong> (Glossy for vibrant prints) — Chemical coating on one side creating
                a glossy, smooth surface for high-quality, vibrant printing.
              </li>
              <li>
                <strong>Uncoated</strong> (Natural finish) — No coating; offers a natural matte finish.
                Mostly used for less demanding general packaging.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3">By Weight / Finish</h3>
            <ul className="space-y-2 text-gray-700 text-base sm:text-lg pl-5 list-disc mb-6">
              <li>
                <strong>High Weight Coated (HWC)</strong> — Heavier and more robust, good for sturdy
                boxes.
              </li>
              <li>
                <strong>Light Weight Coated (LWC)</strong> — Lighter, used for lighter packaging needs.
              </li>
            </ul>

            <ProTip>
              We always ask clients about their distribution method before recommending material weight. If
              boxes ship via courier (Bluedart, Delhivery), we recommend HWC for crush resistance. For
              local hand-delivery, LWC saves 15–20% on material cost.
            </ProTip>
          </section>

          {/* =============== EXPLORE ALL PROCESSES =============== */}
          <section id="explore" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Explore Each Process in Detail
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8">
              Dive deeper into each step of our saree box manufacturing process:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {clusterArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/process/${article.slug}`}
                  className="flex items-center gap-3 px-5 py-4 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl transition-colors group"
                >
                  <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{article.title}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
