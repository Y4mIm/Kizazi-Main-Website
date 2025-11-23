import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  imageUrl: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}