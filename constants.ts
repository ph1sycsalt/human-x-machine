import { Unit, TeamMember, Resource } from './types';

export const UNITS: Unit[] = [
  {
    id: 'unit-3',
    title: 'Unit 3: Social Media',
    shortDescription: 'Social media usage in business contexts.',
    fullDescription: 'Exploration of how social media campaigns drive business engagement, including analytics, content planning, and automation strategies.',
    learningOutcomes: ['Understand social media business use', 'Plan a campaign', 'Analyze engagement metrics'],
    imageUrl: 'https://picsum.photos/seed/unit3/800/600',
    features: ['Campaign Mockups', 'Analytics Visualizer', 'Automation Demo']
  },
  {
    id: 'unit-6',
    title: 'Unit 6: Web Development',
    shortDescription: 'Designing and developing functional websites.',
    fullDescription: 'Full-stack approach to modern web development, focusing on responsive design, interactivity, and clean code architecture.',
    learningOutcomes: ['Website architecture design', 'Client-side scripting', 'Server-side deployment'],
    imageUrl: 'https://picsum.photos/seed/unit6/800/600',
    features: ['Live Code Snippets', 'Interactive UI Components', 'Deployment Notes']
  },
  {
    id: 'unit-5',
    title: 'Unit 5: Data Modelling',
    shortDescription: 'Visualizing and structuring complex data.',
    fullDescription: 'Techniques for representing real-world systems through data models, entity relationships, and flow diagrams.',
    learningOutcomes: ['Data flow analysis', 'Entity relationship modelling', 'Normalization'],
    imageUrl: 'https://picsum.photos/seed/unit5/800/600',
    features: ['Data Visualizations', 'Schema Diagrams', 'Sample Datasets']
  },
  {
    id: 'unit-2',
    title: 'Unit 2: Databases',
    shortDescription: 'Managing information systems securely.',
    fullDescription: 'Core principles of relational database design, SQL querying, security protocols, and data integrity maintenance.',
    learningOutcomes: ['Database design', 'SQL Querying', 'Security & Maintenance'],
    imageUrl: 'https://picsum.photos/seed/unit2/800/600',
    features: ['ER Diagrams', 'Query Playground', 'Backup/Restore Demo']
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Abraham Kemibaro', role: 'Lead Developer', initials: 'AK' },
  { name: 'Hawi Otieno', role: 'UI/UX Designer', initials: 'HO' },
  { name: 'Isaac Kenneth', role: 'Content Strategist', initials: 'IK' },
  { name: 'Zayaan Zubaid', role: 'Data Analyst', initials: 'ZZ' },
  { name: 'David Kenneth', role: 'System Architect', initials: 'DK' }
];

export const RESOURCES: Resource[] = [
  { title: 'Project Manifest', description: 'JSON structure of the site', type: 'doc' },
  { title: 'Animation Library', description: 'Framer Motion implementation notes', type: 'code' },
  { title: 'React Architecture', description: 'Component hierarchy diagram', type: 'doc' }
];

export const CONTACT_EMAIL = "3172abraham@scss.sc.ke";