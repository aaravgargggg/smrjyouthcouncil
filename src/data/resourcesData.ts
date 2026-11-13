export interface ResourceBoxItem {
  id: string;
  title: string;
  statusText: string;
  description: string;
  isAvailable: boolean;
  downloadUrl?: string;
}

export interface TeamStatementItem {
  code: string;
  schoolName: string;
  city: string;
  title: string;
  statement: string;
  votes: number;
}

export const RESOURCE_BOXES: ResourceBoxItem[] = [
  {
    id: 'brochure',
    title: 'Brochure',
    statusText: '(To be given later)',
    description: 'Official event brochure, institutional welcome, and council overview.',
    isAvailable: false
  },
  {
    id: 'accommodation',
    title: 'Accomodation',
    statusText: '(To be given later)',
    description: 'Outstation delegation lodging, partner hotel options, and transport assistance.',
    isAvailable: false
  },
  {
    id: 'timeline',
    title: 'Timeline',
    statusText: '(To be given later)',
    description: 'Detailed two-day conference itinerary and three-month implementation milestones.',
    isAvailable: false
  },
  {
    id: 'school-map',
    title: 'School Map',
    statusText: 'Available',
    description: 'Seth M.R. Jaipuria School campus layout, assembly hall, and committee rooms.',
    isAvailable: true
  }
];

export const TEAM_STATEMENTS_DATA: TeamStatementItem[] = [
  {
    code: 'YC-2701',
    schoolName: 'Seth M.R. Jaipuria School',
    city: 'Lucknow',
    title: 'Ecological Federalism and Shared River Basin Stewardship',
    statement: 'Grounding water security in the ancient ethos of Vasudhaiva Kutumbakam to build transparent, community-led transboundary water stewardship.',
    votes: 418
  },
  {
    code: 'YC-2702',
    schoolName: 'DPS International',
    city: 'New Delhi',
    title: 'Decentralized Sovereign AI Governance for Public Good',
    statement: 'A collaborative multilateral framework ensuring artificial intelligence tools serve public healthcare and basic education across developing economies.',
    votes: 342
  },
  {
    code: 'YC-2703',
    schoolName: 'The Cathedral and John Connon School',
    city: 'Mumbai',
    title: 'Climate Resilience Swaps and Sustainable Finance',
    statement: 'Linking sovereign debt relief with measurable green infrastructure development to protect vulnerable regions from ecological instability.',
    votes: 289
  },
  {
    code: 'YC-2704',
    schoolName: 'Modern School',
    city: 'New Delhi',
    title: 'Zero-Knowledge Digital Identity for Civic Inclusion',
    statement: 'Securing humanitarian access and civic dignity for displaced communities through privacy-preserving verification architectures.',
    votes: 265
  }
];
