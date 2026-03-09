export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "R. Senthil Kumar",
    role: "Owner – Textile Wholesale Business, Coimbatore",
    content:
      "We regularly order customised saree box packaging for our wholesale textile supply in Coimbatore. The box quality is strong, finishing is neat, and printing matches our brand perfectly. Their saree packing boxes are ideal for bulk orders and long-distance transport.",
    rating: 5,
  },
  {
    id: 2,
    name: "Meena Lakshmi",
    role: "Founder – Bridal Saree Boutique, Chennai",
    content:
      "For wedding saree packing boxes, we wanted a premium look with sturdy material. Their customised saree gift boxes added real value to our bridal collections. Delivery to Chennai was on time and support was very professional.",
    rating: 5,
  },
  {
    id: 3,
    name: "A. Prakash",
    role: "Purchase Manager – Textile Export House, Tiruppur",
    content:
      "We source saree packing boxes in bulk for export shipments. The boxes are export-quality, durable, and suitable for international transport. Very reliable saree box manufacturer with consistent quality.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Nandhini Rao",
    role: "Brand Manager – Saree Retail Chain, Bengaluru",
    content:
      "Our retail stores needed uniform branded saree boxes across locations. The customised saree box packaging helped improve our in-store presentation and customer experience. Excellent print clarity and premium finish.",
    rating: 5,
  },
  {
    id: 5,
    name: "Suresh Babu",
    role: "Owner – Handloom Saree Store, Madurai",
    content:
      "We were looking for affordable yet premium saree packing boxes for daily sales. Their wholesale saree boxes are cost-effective and strong enough for regular customer handling. Very good packaging supplier for textile businesses.",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Kavitha Narayanan",
    role: "Operations Head – Online Saree Brand, Hyderabad",
    content:
      "Our online saree shipments needed safe and attractive packaging. These saree gift boxes protect the product well during courier transit and enhance the unboxing experience. Highly recommended for e-commerce textile brands.",
    rating: 5,
  },
];
