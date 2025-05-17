export interface Project {
  id: number;
  title: string;
  timeline: string;
  role: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
  category: 'Electrical' | 'Web' | 'IoT';
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Platforms' | 'Soft Skills';
}

export interface Internship {
  id: number;
  role: string;
  company: string;
  location: string;
  type: string;
  timeline: string;
  description: string[];
  technologies?: string[];
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
  description: string;
  link?: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  timeline: string;
  score: string;
}