export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}