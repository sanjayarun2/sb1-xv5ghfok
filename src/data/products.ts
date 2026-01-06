export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

export const categoryProducts: Record<string, Product[]> = {
  'saree-boxes': [
    {
      id: '1',
      name: 'Designer Saree Box', // Keyword: designer saree box
      description: 'Elegant saree cover box with golden accents and traditional design', // Keyword: saree cover box
      image: '/plain box.webp',
      price: 'Custom Quote'
    },
    {
      id: '2',
      name: 'Fancy Saree Box', // Keyword: fancy saree box
      description: 'Luxurious pattu saree packing with traditional designs and premium finish', // Keyword: pattu saree packing
      image: '/Printed box.webp',
      price: 'Custom Quote'
    },
    {
      id: '3',
      name: 'Customized Saree Box', // Keyword: customised saree box
      description: 'Modern box saree designs with metallic accents for premium retail', // Keyword: box saree designs
      image: '/Customized printed box.webp',
      price: 'Custom Quote'
    }
  ],
  'printed-boxes': [
    {
      id: '4',
      name: 'Saree Paper Box', // Keyword: saree paper box
      description: 'Full-color printed luxury saree packaging with your custom design', // Keyword: luxury saree packaging
      image: '/Printed box 2.webp',
      price: 'Custom Quote'
    },
    {
      id: '5',
      name: 'Premium Saree Box Online', // Keyword: saree boxes online
      description: 'Brand-focused saree box online shopping solutions with high-quality printing', // Keyword: saree box online shopping
      image: '/JP tex.webp',
      price: 'Custom Quote'
    }
  ],
  'carton-boxes': [
    {
      id: '6',
      name: 'Saree Storage Bags & Cartons', // Keyword: saree storage bags
      description: 'Heavy-duty corrugated boxes and saree storage bags for industrial shipping',
      image: '/4box.webp',
      price: 'Bulk Pricing'
    },
    {
      id: '7',
      name: 'Blushbees Storage Boxes Alternative', // Keyword: blushbees storage boxes
      description: 'Durable boxes for warehouse storage, a sturdier alternative to standard blushbees storage boxes',
      image: '/corrugated box2.webp',
      price: 'Bulk Pricing'
    }
  ]
};