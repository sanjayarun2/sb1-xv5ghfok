export interface CaseStudy {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  category: 'india' | 'export';
  location: string;
  volume: string;
  timeline: string;
  intro: string;
  challenge: string;
  solution: string[];
  result: string;
  lessonsLearned: string[];
  relatedLinks: { label: string; to: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'surat-wholesale-5000-saree-boxes',
    title: 'How We Delivered 5,000 Saree Boxes to Surat in 7 Days',
    metaTitle: 'Surat Saree Box Order | 5,000 Boxes in 7 Days Case Study',
    metaDescription:
      'Real case study: how our Sivakasi factory manufactured and shipped 5,000 printed saree boxes to Surat textile market in 7 working days, including material selection, lamination and logistics.',
    metaKeywords:
      'saree box bulk order surat, saree box manufacturer case study, 5000 saree boxes, sivakasi to surat saree packaging',
    category: 'india',
    location: 'Surat, Gujarat',
    volume: '5,000 printed saree boxes',
    timeline: '7 working days',
    intro:
      'A wholesale saree trader from Surat contacted us needing 5,000 printed saree boxes for a seasonal push. They had tried two local suppliers who could not match the quality and timeline together. Here is how we handled it.',
    challenge:
      'The client needed boxes ready within 7 working days — including design approval, printing, lamination, die-cutting, and dispatch to Surat. The boxes were standard book-fold type (8x13x1.5 inches) with full-colour offset printing and gloss BOPP lamination. The tight timeline meant zero room for reprints or material delays.',
    solution: [
      'We confirmed 300 GSM white-back coated paperboard from our standing stock — no lead time for material procurement.',
      'Design approval was done over WhatsApp within 4 hours using our standard plate-ready template.',
      'Printing was completed in 1.5 days on our offset press with colour matching verified against the approved digital proof.',
      'Gloss BOPP thermal lamination was applied on day 3 — our default process, so no setup delays.',
      'Die-cutting and scoring completed on day 4-5 using the existing die for 8x13x1.5 size.',
      'Quality check, folding, and packing into outer cartons on day 6.',
      'Dispatched via Bluedart surface on day 7. Delivered to Surat godown on day 10.',
    ],
    result:
      'All 5,000 boxes passed quality inspection at the client end. The client placed a repeat order of 8,000 boxes the following month, switching entirely from their previous supplier to us.',
    lessonsLearned: [
      'Keeping standard paperboard sizes in stock eliminates the biggest bottleneck in fast-turnaround orders.',
      'WhatsApp-based design approval is faster than email for wholesale clients who are used to mobile communication.',
      'Having existing dies for common sizes (8x13x1.5, 9x14x1.5) means we can skip die-making time on most orders.',
    ],
    relatedLinks: [
      { label: 'Saree box manufacturer in Surat', to: '/saree-box-manufacturer-in-surat' },
      { label: 'Paperboard selection process', to: '/process/paperboard-selection' },
      { label: 'Gloss lamination details', to: '/process/gloss-lamination' },
      { label: 'Die preparing explained', to: '/process/die-preparing' },
    ],
  },
  {
    slug: 'uae-export-bridal-saree-boxes',
    title: 'Supplying Bridal Saree Boxes for a UAE Boutique — Export Case Study',
    metaTitle: 'UAE Export Saree Box | Bridal Packaging Case Study',
    metaDescription:
      'How we manufactured and exported premium bridal saree boxes to a Dubai boutique. Includes material choice, velvet lamination, export packing and shipping details.',
    metaKeywords:
      'export saree box uae, bridal saree box dubai, saree packaging export case study, premium saree box manufacturer export',
    category: 'export',
    location: 'Dubai, UAE',
    volume: '1,200 premium bridal saree boxes',
    timeline: '14 working days',
    intro:
      'A saree boutique in Dubai needed premium bridal saree boxes for their wedding season collection. They wanted velvet lamination with gold foil logos — a finish that had to survive air cargo and Dubai warehouse conditions. This is how we delivered.',
    challenge:
      'The client required velvet (soft-touch) lamination with gold foil stamping on white-back HWC board. Boxes had to be individually poly-bagged and packed in double-wall corrugated cartons suitable for air cargo. The boutique had no prior experience importing packaging from India, so we had to guide them through the entire process.',
    solution: [
      'Material: 350 GSM white-back HWC board selected for stiffness and clean interior appearance.',
      'Printing: 4-colour offset with gold foil stamping on the logo area.',
      'Lamination: velvet (soft-touch) BOPP applied via thermal lamination. Test batch of 20 boxes sent to the client for approval before full production.',
      'Die-cutting: custom die made for their slightly larger 9x14x2 inch box size. Die cost included in first order, reusable for repeats.',
      'Each box individually wrapped in tissue paper, then poly-bagged to prevent surface marking during transit.',
      'Packed in double-wall corrugated cartons, 25 boxes per carton, with internal dividers.',
      'Cartons strapped, stretch-wrapped, and labelled with HS code, country of origin, and handling instructions.',
      'Shipped via air cargo from Chennai to Dubai. Client arranged local customs clearance with their freight agent.',
    ],
    result:
      'All 1,200 boxes arrived in perfect condition. The boutique reported that the velvet finish and gold foil were a hit with their bridal customers. They have since placed two more orders — one for the same velvet finish and one for matte lamination with spot UV.',
    lessonsLearned: [
      'For export orders, always send a test batch (even 10-20 pieces) before full production. This avoids disputes over colour, texture, or finish expectations.',
      'Velvet lamination is sensitive to pressure marks — individual poly-bagging is not optional for long-distance shipping.',
      'Including HS code and clear origin markings on cartons makes customs clearance much faster for the buyer.',
      'WhatsApp video calls during production help build trust with overseas clients who cannot visit the factory.',
    ],
    relatedLinks: [
      { label: 'Export saree boxes', to: '/export-saree-boxes' },
      { label: 'Velvet / soft-touch lamination', to: '/process/velvet-soft-touch-lamination' },
      { label: 'Saree box materials guide', to: '/process/saree-box-materials' },
      { label: 'Scoring & die cutting', to: '/process/scoring-die-cutting' },
    ],
  },
  {
    slug: 'chennai-silk-saree-showroom-packaging',
    title: 'Custom Silk Saree Boxes for a Chennai Showroom Chain — 3 SKUs, 1 Factory',
    metaTitle: 'Chennai Silk Saree Box Order | Multi-SKU Case Study',
    metaDescription:
      'Case study: how we manufactured 3 different saree box SKUs for a Chennai silk saree showroom chain. Includes matte and gloss lamination, colour consistency, and repeat ordering.',
    metaKeywords:
      'silk saree box chennai, saree showroom packaging, multi sku saree box, chennai saree box manufacturer',
    category: 'india',
    location: 'Chennai, Tamil Nadu',
    volume: '3 SKUs, 2,000 boxes each (6,000 total)',
    timeline: '12 working days',
    intro:
      'A well-known silk saree showroom in T Nagar, Chennai wanted three different box designs for their product tiers: economy, premium, and bridal. Each had to look distinct but share the same base size. Here is how we handled multi-SKU production efficiently.',
    challenge:
      'Three separate designs on the same 8x13x1.5 base size, each with different lamination: economy (gloss BOPP), premium (matte BOPP), bridal (matte + spot UV on logo). All three had to maintain consistent brand colours across different finishes — a common challenge because matte and gloss lamination shift colour perception differently.',
    solution: [
      'Economy: 300 GSM grey-back coated board with full-colour offset print and standard gloss BOPP lamination.',
      'Premium: 300 GSM white-back coated board with offset print and matte BOPP lamination.',
      'Bridal: same white-back board, matte lamination, plus spot UV coating on the logo and brand name area.',
      'All three SKUs printed in sequence on the same press run to maintain colour density consistency.',
      'Lamination done in two batches: gloss first, then matte (to avoid contamination of matte rollers with gloss residue).',
      'Spot UV applied as a separate pass after matte lamination on the bridal SKU only.',
      'All three SKUs die-cut using the same die (identical base size), reducing setup time.',
      'Packed separately, clearly labelled per SKU, and dispatched in one combined truck to Chennai.',
    ],
    result:
      'The showroom was able to price their boxes into their product tiers seamlessly. The bridal box with matte + spot UV became their best seller for gift purchases. They now reorder all three SKUs quarterly.',
    lessonsLearned: [
      'Running multiple SKUs on the same press run (back to back) ensures colour consistency across variants.',
      'Using the same base die for all SKUs drastically reduces production time and cost.',
      'Matte lamination shifts perceived colour slightly warmer; we now adjust print files by -5% magenta for matte runs to compensate.',
      'Clear carton labelling per SKU prevents warehouse mix-ups at the client end.',
    ],
    relatedLinks: [
      { label: 'Saree box manufacturer in Chennai', to: '/saree-box-manufacturer-in-chennai' },
      { label: 'Matte lamination details', to: '/process/matte-lamination' },
      { label: 'Gloss lamination details', to: '/process/gloss-lamination' },
      { label: 'Full manufacturing guide', to: '/process/saree-box-manufacturing' },
    ],
  },
];

export const caseStudySlugs = caseStudies.map((cs) => cs.slug);
