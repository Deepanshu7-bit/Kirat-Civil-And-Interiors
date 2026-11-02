export type ServiceScope = 'civil' | 'interiors' | 'turnkey';
export type PropertyTier = 'standard' | 'premium' | 'luxury';
export type PropertyBHK = '1bhk' | '2bhk' | '3bhk' | 'villa' | 'sco';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'civil' | 'interior' | 'turnkey';
  tagline: string;
  description: string;
  features: string[];
  materialsUsed: string[];
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'residential' | 'kitchen' | 'ceiling' | 'civil';
  locality: string;
  scope: string;
  image: string;
  bhk: string;
}

export interface TransformationRoom {
  id: string;
  title: string;
  rawImage: string;
  finishedImage: string;
  rawHotspots: { x: number; y: number; label: string; detail: string }[];
  finishedHotspots: { x: number; y: number; label: string; detail: string }[];
  subtitle: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  locality: string;
  projectType: string;
  rating: number;
  reviewText: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'turnkey' | 'costs' | 'civil' | 'materials' | 'areas';
}
