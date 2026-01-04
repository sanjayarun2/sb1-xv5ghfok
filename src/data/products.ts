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
      description: 'Elegant box with golden accents and traditional design',
      image: '/plain box.webp',
      price: 'Custom Quote'
    },
    {
      id: '2',
      name: 'Printed Saree Box',
      description: 'Luxurious box with traditional designs and premium finish',
      image: '/Printed box.webp',
      price: 'Custom Quote'
    },
    {
      id: '3',
      name: 'Customized Saree Box',
      description: 'Modern design with metallic accents',
      image: '/Customized printed box.webp',
      price: 'Custom Quote'
    }
  ],
  'printed-boxes': [
    {
      id: '4',
      name: 'Custom Printed Gift Box',
      description: 'Full-color printed packaging with your design',
      image: '/Printed box 2.webp',
      price: 'Custom Quote'
    },
    {
      id: '5',
      name: 'Retail Product Box',
      description: 'Brand-focused packaging with high-quality printing',
      image: '/JP tex.webp',
      price: 'Custom Quote'
    }
  ],
  'carton-boxes': [
    {
      id: '6',
      name: 'Industrial Carton',
      description: 'Heavy-duty corrugated boxes for shipping',
      image: '/4box.webp',
      price: 'Bulk Pricing'
    },
    {
      id: '7',
      name: 'Storage Carton',
      description: 'Durable boxes for warehouse storage',
      image: '/corrugated box2.webp',
      price: 'Bulk Pricing'
    }
  ]
};