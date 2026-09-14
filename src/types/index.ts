export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  interestedIn: string;
  preferredDate?: string;
  preferredTime?: string;
  trainingGoal?: string;
  message?: string;
  source: 'Website Popup' | 'Appointment Form' | 'Transformation Campaign' | 'WhatsApp CTA' | 'Instagram CTA';
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  certifications: string[];
  specializations: string[];
  imagePlaceholderUrl: string;
  isPilates?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  quote: string;
  rating: number;
  duration?: string;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'gym' | 'pilates' | 'pt' | 'transformation' | 'community' | 'video';
  imageUrl: string;
  caption: string;
  isVideo?: boolean;
  videoUrl?: string;
}
