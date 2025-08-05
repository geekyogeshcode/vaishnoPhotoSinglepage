export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'weddings' | 'portraits' | 'events' | 'corporate';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  serviceType: string;
  message: string;
}