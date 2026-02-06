export interface Unit {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  learningOutcomes: string[];
  imageUrl: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface Resource {
  title: string;
  description: string;
  link?: string;
  type: 'code' | 'doc' | 'repo';
}