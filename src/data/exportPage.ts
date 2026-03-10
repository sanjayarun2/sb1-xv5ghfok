export interface ExportRegion {
  id: string;
  name: string;
  heading: string;
  description: string;
  shippingInfo: string[];
}

export interface ExportPageData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  intro: string;
  note: string;
  regions: ExportRegion[];
}

export const exportPage: ExportPageData = {
  metaTitle: 'Export Saree Boxes | International Saree Packaging Supplier',
  metaDescription:
    'Manufacturer and exporter of premium saree boxes with international shipping to USA, UK, UAE, Saudi Arabia, Singapore and Malaysia. Export-ready packaging and corrugated cartons.',
  metaKeywords:
    'export saree boxes, saree box exporter, saree packaging international shipping, saree box supplier UAE, saree box supplier USA, saree box exporter UK',
  intro:
    'Along with pan-India deliveries, we regularly support exporters and overseas buyers with saree box manufacturing for international shipments. Our boxes are built to handle long-distance transport while keeping presentation quality intact.',
  note: 'All exports are handled from our Sivakasi production unit with proper outer corrugation, strapping and export markings as per your forwarder’s requirements.',
  regions: [
    {
      id: 'uae',
      name: 'UAE / Dubai',
      heading: 'Saree Box Export to UAE / Dubai',
      description:
        'We support exporters who ship sarees to Dubai and other UAE cities through air cargo and sea freight. Box stiffness and lamination are chosen to handle desert climate and repeated handling at distribution centres.',
      shippingInfo: [
        'Common routes: Chennai / Mumbai ports to Jebel Ali, and direct air cargo to Dubai.',
        'We recommend high weight coated (HWC) board with strong BOPP lamination for long shelf life.',
        'Outer corrugated cartons designed for container stacking and palletisation.',
      ],
    },
    {
      id: 'usa',
      name: 'USA',
      heading: 'Saree Box Export to USA',
      description:
        'For shipments to USA boutique stores and NRI customers, we focus on presentation as well as protection during long transits and customs handling.',
      shippingInfo: [
        'Supports both individual carton shipments via courier and palletised sea freight.',
        'Recommended combination: white-back HWC board with matte or glossy BOPP lamination.',
        'Carton printing with HS code, country of origin and fragile handling instructions available.',
      ],
    },
    {
      id: 'uk',
      name: 'UK',
      heading: 'Saree Box Export to UK',
      description:
        'We manufacture saree boxes used by UK-based Indian ethnic wear stores and online brands. Boxes are designed to look premium on shelf while being compact for storage.',
      shippingInfo: [
        'Optimised box sizes to reduce volumetric weight for air cargo.',
        'Velvet / soft-touch lamination and foil logos available for high-end bridal collections.',
        'Outer cartons tested for multi-leg journeys and warehouse stacking.',
      ],
    },
    {
      id: 'saudi',
      name: 'Saudi Arabia',
      heading: 'Saree Box Export to Saudi Arabia',
      description:
        'We work with exporters sending sarees to Saudi Arabia for retail and gifting. Packaging focuses on colour retention and moisture protection.',
      shippingInfo: [
        'Strong BOPP gloss lamination recommended for vibrant printed designs.',
        'Use of moisture-barrier films and proper inner poly-bagging for monsoon-season shipments.',
        'Cartons strapped and stretch-wrapped for long truck movements to port.',
      ],
    },
    {
      id: 'singapore',
      name: 'Singapore',
      heading: 'Saree Box Export to Singapore',
      description:
        'For compact markets like Singapore, we help brands maximise shelf impact in limited retail space with premium yet space-efficient saree boxes.',
      shippingInfo: [
        'Matte and soft-touch lamination combinations used for boutique positioning.',
        'Precise die-cutting for sharp edges and repeatable assembly, important for display quality.',
        'Support for small and medium lot sizes with consistent colour reproduction across repeats.',
      ],
    },
    {
      id: 'malaysia',
      name: 'Malaysia',
      heading: 'Saree Box Export to Malaysia',
      description:
        'We support exports of sarees to Malaysia for festive seasons and ongoing retail. Boxes are tuned for humid climate and repeat handling.',
      shippingInfo: [
        'Combination of gloss lamination and strong board to prevent edge crushing.',
        'Cartons designed for efficient packing of multiple saree box SKUs in one shipment.',
        'Option for bilingual printing (English + regional language) on request.',
      ],
    },
  ],
};

