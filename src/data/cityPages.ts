export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityPage {
  slug: string;
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroHeading: string;
  heroIntro: string;
  deliveryInfo: string;
  localFacts: string[];
  faqs: CityFAQ[];
}

export const cityPages: CityPage[] = [
  {
    slug: 'saree-box-manufacturer-in-surat',
    cityName: 'Surat',
    metaTitle: 'Saree Box Manufacturer in Surat | Premium Saree Packaging Boxes Wholesale',
    metaDescription:
      'Premium saree box manufacturer supplying custom saree packaging boxes to Surat textile and sari markets. Pan-India delivery with durable boxes for silk and wedding sarees.',
    metaKeywords:
      'saree box manufacturer surat, saree packaging box surat, saree boxes wholesale surat, textile market saree box',
    heroHeading: 'Saree Box Manufacturer for Surat Textile Market',
    heroIntro:
      'We manufacture premium saree boxes and ship daily to Surat textile and sari markets. Our boxes are designed for high-volume wholesalers and retail brands who need strong, attractive packaging for silk and designer sarees.',
    deliveryInfo:
      'Regular dispatches to Surat textile market with 4–7 day delivery through Bluedart, Delhivery and other logistics partners. Export-friendly packing available for resellers shipping abroad.',
    localFacts: [
      'Experience with high-volume saree orders from Ring Road and Varachha Road markets.',
      'Durable duplex board and strong lamination to withstand multiple handling cycles in wholesale godowns.',
    ],
    faqs: [
      { question: 'What is the minimum order for saree boxes from Surat?', answer: 'We accept orders starting from 500 boxes. For custom printing or special lamination, a 1,000-box minimum applies. Trial orders of 200–300 boxes are available at slightly adjusted rates.' },
      { question: 'How long does delivery take to Surat?', answer: 'Standard delivery to Surat takes 4–7 working days from dispatch. We ship via Bluedart and Delhivery with tracking provided on all orders.' },
      { question: 'Can you match my existing box design exactly?', answer: 'Yes. Send us a sample or clear photograph and we will replicate the size, print, and lamination. We maintain colour consistency across repeat batches.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-chennai',
    cityName: 'Chennai',
    metaTitle: 'Saree Box Manufacturer in Chennai | Silk Saree Packaging Boxes',
    metaDescription:
      'Manufacturer of premium saree boxes for Chennai silk saree showrooms and Kancheepuram saree brands. Custom printed boxes with gloss, matte or soft-touch lamination.',
    metaKeywords:
      'saree box manufacturer chennai, silk saree box chennai, kancheepuram saree packaging, saree gift box chennai',
    heroHeading: 'Premium Saree Box Supplier for Chennai & Kancheepuram',
    heroIntro:
      'From wedding silk sarees to daily wear collections, we manufacture custom saree boxes that match Chennai and Kancheepuram brand expectations.',
    deliveryInfo:
      'Dedicated routes to Chennai and nearby textile hubs with typical delivery in 3–6 working days. Strong corrugation and shrink-wrapping used for long-distance truck movement.',
    localFacts: [
      'Suitable for T Nagar, Mylapore and Kancheepuram silk showrooms.',
      'Options for velvet / soft-touch lamination for high-end bridal collections.',
    ],
    faqs: [
      { question: 'Do you supply saree boxes for Kancheepuram silk sarees?', answer: 'Yes. We manufacture boxes specifically sized for Kancheepuram silk sarees which are typically folded wider. Velvet and soft-touch lamination are popular choices for bridal silk collections.' },
      { question: 'Can you print my showroom logo on the saree box?', answer: 'Absolutely. We offer full-colour offset printing with your logo, tagline, and brand colours. Foil stamping is also available for a premium look.' },
      { question: 'What lamination is best for Chennai climate?', answer: 'We recommend BOPP gloss or matte lamination which provides moisture resistance suitable for Chennai humidity. For premium collections, velvet lamination adds both protection and a luxury feel.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-kolkata',
    cityName: 'Kolkata',
    metaTitle: 'Saree Box Manufacturer in Kolkata | Wholesale Saree Packaging',
    metaDescription:
      'Custom saree box manufacturer serving Kolkata saree markets. Strong, laminated boxes for cotton, silk and handloom sarees with pan-India delivery.',
    metaKeywords:
      'saree box manufacturer kolkata, saree packaging box kolkata, wholesale saree box kolkata',
    heroHeading: 'Saree Box Manufacturing for Kolkata Saree Hubs',
    heroIntro:
      'We support Kolkata saree traders and wholesalers with reliable, repeatable saree box manufacturing for bulk orders and seasonal peaks.',
    deliveryInfo:
      'Optimised packing for long-distance transport to Kolkata with focus on edge strength and crush resistance for stacked cartons.',
    localFacts: [
      'Suitable for Burrabazar and major saree trading hubs.',
      'Printed saree boxes with regional language branding available on request.',
    ],
    faqs: [
      { question: 'Can you print Bengali text on saree boxes?', answer: 'Yes. We support custom printing in Bengali and other regional languages. Share the artwork or text and we will incorporate it into the box design.' },
      { question: 'What board thickness is best for Kolkata wholesale?', answer: 'For wholesale bulk handling, we recommend 350 GSM duplex board with BOPP lamination. This provides good stacking strength and durability for godown storage.' },
      { question: 'Do you ship to Kolkata regularly?', answer: 'Yes, we have established logistics routes to Kolkata with optimised packing for long-distance road transport. Typical delivery is 5–8 working days.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-mumbai',
    cityName: 'Mumbai',
    metaTitle: 'Saree Box Manufacturer in Mumbai | Retail & Export Packaging',
    metaDescription:
      'Premium saree box manufacturer supplying to Mumbai boutiques, retail chains and exporters. Custom printed boxes with export-ready corrugated shipping solutions.',
    metaKeywords:
      'saree box manufacturer mumbai, saree packaging box mumbai, export saree box mumbai, saree gift box mumbai',
    heroHeading: 'Saree Box Manufacturing for Mumbai Retail & Export',
    heroIntro:
      'We manufacture saree boxes for Mumbai-based brands who sell both within India and overseas, focusing on premium presentation and safe shipping.',
    deliveryInfo:
      'Regular shipments to Mumbai with coordination for port-bound export containers when needed. Extra-strong outer cartons for long international transits.',
    localFacts: [
      'Supports Andheri, Dadar, Bhuleshwar and other key retail hubs.',
      'Experience with brand guidelines and colour consistency for national retail chains.',
    ],
    faqs: [
      { question: 'Can you supply saree boxes for export orders shipping from Mumbai port?', answer: 'Yes. We regularly coordinate with exporters shipping from Mumbai. Boxes are packed in export-grade corrugated cartons with proper markings and strapping for container loading.' },
      { question: 'Do you offer sample boxes before bulk orders?', answer: 'Yes. We can produce a small trial batch of 100–200 boxes so you can check size, print quality, and lamination before confirming a larger order.' },
      { question: 'What is the typical turnaround time for Mumbai orders?', answer: 'Standard orders ship within 5–10 working days from confirmation. Delivery to Mumbai typically takes 3–5 additional days depending on pin code.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-bangalore',
    cityName: 'Bangalore',
    metaTitle: 'Saree Box Manufacturer in Bangalore | Boutique Saree Packaging',
    metaDescription:
      'Custom saree box supplier for Bangalore boutiques and designer saree brands. Matte and soft-touch lamination options with foil logo finishing.',
    metaKeywords:
      'saree box manufacturer bangalore, saree packaging box bangalore, boutique saree box, designer saree box',
    heroHeading: 'Premium Saree Boxes for Bangalore Boutiques',
    heroIntro:
      'We work with Bangalore-based boutiques and online-first saree brands who need packaging that matches their premium positioning.',
    deliveryInfo:
      'Doorstep delivery to Bangalore with 3–6 day lead time for most pin codes. Strong focus on finish quality and unboxing experience.',
    localFacts: [
      'Ideal for Indiranagar, Jayanagar and commercial street boutiques.',
      'Soft-touch and matte lamination combinations that photograph well for online listings.',
    ],
    faqs: [
      { question: 'What finish works best for online saree brand photography?', answer: 'Matte and soft-touch lamination produce minimal glare and photograph best for product listings. We recommend these for brands selling primarily online.' },
      { question: 'Do you supply small batches for boutique collections?', answer: 'Yes. We understand boutiques work with smaller runs. Our minimum order is 500 boxes, and we maintain consistent quality even on smaller batches.' },
      { question: 'Can you add foil stamping to the logo?', answer: 'Yes. Gold, silver, and rose gold foil stamping is available. It works particularly well on matte or velvet laminated surfaces for a premium look.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-ahmedabad',
    cityName: 'Ahmedabad',
    metaTitle: 'Saree Box Manufacturer in Ahmedabad | Wholesale Saree Cartons & Boxes',
    metaDescription:
      'Saree box and storage carton manufacturer for Ahmedabad textile wholesalers. Durable duplex board boxes and corrugated cartons for long-term storage.',
    metaKeywords:
      'saree box manufacturer ahmedabad, saree packaging box ahmedabad, saree carton box ahmedabad',
    heroHeading: 'Saree Box & Carton Supplier for Ahmedabad',
    heroIntro:
      'We support Ahmedabad wholesalers with both decorative saree boxes for retail and heavy-duty saree storage cartons for warehouses.',
    deliveryInfo:
      'Bulk shipments in truckloads with optimised carton sizes for godown stacking and easy counting of saree bundles.',
    localFacts: [
      'Grey-back and white-back board options based on budget and visibility needs.',
      'Carton printing available for warehouse identification and export marking.',
    ],
    faqs: [
      { question: 'What is the difference between grey-back and white-back board?', answer: 'Grey-back board is more economical and suitable when the inside of the box is not visible. White-back board gives a cleaner look inside and is preferred for premium or gift saree boxes.' },
      { question: 'Can you supply both decorative boxes and plain storage cartons?', answer: 'Yes. We manufacture printed saree boxes for retail and heavy-duty corrugated cartons for warehouse storage. Both can be ordered together or separately.' },
      { question: 'Do you handle truckload shipments to Ahmedabad?', answer: 'Yes. For large orders, we arrange full truckload shipments with optimised carton stacking to reduce per-box shipping cost.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-hyderabad',
    cityName: 'Hyderabad',
    metaTitle: 'Saree Box Manufacturer in Hyderabad | Pattu Saree Packaging',
    metaDescription:
      'Manufacturer of premium saree boxes for Hyderabad and Telangana markets. Ideal for pattu sarees, bridal collections and festive gifting.',
    metaKeywords:
      'saree box manufacturer hyderabad, pattu saree box, bridal saree box hyderabad, saree packaging box hyderabad',
    heroHeading: 'Premium Saree Box Manufacturing for Hyderabad',
    heroIntro:
      'Our saree boxes are used by Hyderabad-based retailers for high-value pattu and bridal sarees where first impression matters.',
    deliveryInfo:
      'Careful packing with moisture-resistant lamination for monsoon seasons and inter-state road movement into Telangana.',
    localFacts: [
      'Suitable for Ameerpet, Charminar and other busy textile zones.',
      'Options for met-pet and velvet finishes for festive collections.',
    ],
    faqs: [
      { question: 'What finish is best for pattu saree boxes?', answer: 'Velvet or soft-touch lamination with gold foil logo stamping is the most popular combination for pattu and bridal saree boxes. It conveys luxury and protects the surface.' },
      { question: 'Can you handle festive season rush orders?', answer: 'Yes. We plan production capacity ahead of Dussehra, Diwali, and wedding seasons. For large festival orders, we recommend placing requirements 3–4 weeks in advance.' },
      { question: 'Do you supply to other cities in Telangana?', answer: 'Yes. While Hyderabad is our primary delivery point, we also ship to Warangal, Karimnagar, and other Telangana cities through the same logistics routes.' },
    ],
  },
  {
    slug: 'saree-box-manufacturer-in-delhi',
    cityName: 'Delhi',
    metaTitle: 'Saree Box Manufacturer in Delhi | Chandni Chowk & NCR Suppliers',
    metaDescription:
      'Custom saree box manufacturer supplying to Delhi and NCR markets including Chandni Chowk, Lajpat Nagar and Karol Bagh.',
    metaKeywords:
      'saree box manufacturer delhi, saree packaging box delhi, saree box chandni chowk, saree gift box delhi',
    heroHeading: 'Saree Box Manufacturing for Delhi & NCR',
    heroIntro:
      'We manufacture saree boxes that handle heavy footfall and repeated handling in Delhi shops and exhibitions.',
    deliveryInfo:
      'Regular truck routes to Delhi and NCR with packing designed for stacking in narrow shop godowns and upper floors.',
    localFacts: [
      'Suitable for Chandni Chowk, Lajpat Nagar, Karol Bagh and NCR outlets.',
      'High-contrast designs and lamination suitable for brightly lit showrooms.',
    ],
    faqs: [
      { question: 'Do you deliver to Chandni Chowk and Karol Bagh?', answer: 'Yes. We deliver to all Delhi pin codes including Chandni Chowk, Karol Bagh, Lajpat Nagar, and NCR areas via Bluedart and Delhivery with door-to-door tracking.' },
      { question: 'What box size suits exhibition and trade show sarees?', answer: 'For exhibitions, we recommend slightly larger boxes (10x15x2 inches) with high-contrast printing and glossy lamination for maximum visual impact under bright lights.' },
      { question: 'Can you supply saree boxes for wedding exhibitions?', answer: 'Yes. Many of our Delhi clients order special batches for wedding exhibitions and seasonal fairs. We can produce custom designs with fast turnaround for event deadlines.' },
    ],
  },
];

export const citySlugs = cityPages.map((city) => city.slug);

