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
      name: 'Plain Saree Box',
      description: 'Elegant saree cover box with golden accents and traditional design',
      image: '/plain box.webp',
      price: 'Custom Quote'
    },
    {
      id: '2',
      name: 'Printed Saree Box',
      description: 'Luxurious pattu saree packing with traditional designs and premium finish',
      image: '/Printed box.webp',
      price: 'Custom Quote'
    },
    {
      id: '3',
      name: 'Customized Saree Box',
      description: 'Modern box saree designs with metallic accents for premium retail',
      image: '/Customized printed box.webp',
      price: 'Custom Quote'
    }
  ],
  'printed-boxes': [
    {
      id: '4',
      name: 'Luxury Saree Paper Box',
      description: 'Full-color printed luxury saree packaging with your custom design',
      image: '/Printed box 2.webp',
      price: 'Custom Quote'
    },
    {
      id: '5',
      name: 'Custom designed saree box',
      description: 'Brand-focused saree box online shopping solutions with high-quality printing',
      image: '/JP tex.webp',
      price: 'Custom Quote'
    }
  ],
  'carton-boxes': [
    {
      id: '6',
      name: 'Saree Storage Bags & Cartons',
      description: 'Heavy-duty corrugated boxes and saree storage bags for industrial shipping',
      image: '/4box.webp',
      price: 'Bulk Pricing'
    },
    {
      id: '7',
      name: 'Blushbees Storage Boxes Alternative',
      description: 'Durable boxes for warehouse storage, a sturdier alternative to standard blushbees storage boxes',
      image: '/corrugated box2.webp',
      price: 'Bulk Pricing'
    }
  ]
};