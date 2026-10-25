export type PageId = 'home' | 'about' | 'features' | 'pricing' | 'contact' | 'portal';

export type ThemeMode = 'forge' | 'sanctuary';

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  certifications: string[];
  specialties: string[];
  bio: string;
  philosophy: string;
  achievements: string[];
  availability: string;
  rating: number;
  sessionsCompleted: number;
  imageUrl: string;
}

export interface EquipmentFacility {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'functional' | 'recovery';
  shortDesc: string;
  detailedSpecs: string[];
  tags: string[];
  imageUrl: string;
  brandPartner: string;
}

export interface MembershipPlan {
  id: 'starter' | 'pro' | 'elite';
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isRecommended?: boolean;
  features: string[];
  notIncluded?: string[];
  badge?: string;
  accessHours: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  membershipTier: string;
  quote: string;
  resultMetric: string;
  trainingTime: string;
  avatarUrl: string;
}

export interface ClassSession {
  id: string;
  title: string;
  trainerName: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  durationMinutes: number;
  category: 'Strength' | 'HIIT & Conditioning' | 'Mobility' | 'Powerlifting';
  capacity: number;
  bookedCount: number;
  intensity: 'High' | 'Medium' | 'Extreme';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
