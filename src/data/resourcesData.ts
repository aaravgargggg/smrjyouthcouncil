export interface ResourceDoc {
  id: string;
  index: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  fileSize: string;
  status: 'available' | 'locked' | 'preview';
  downloadUrl?: string;
  lockedNote?: string;
}

export interface TeamStatement {
  code: string;
  schoolName: string;
  city: string;
  title: string;
  excerpt: string;
  fullStatement: string;
  votes: number;
  tags: string[];
}

export interface CampusPin {
  id: string;
  name: string;
  category: 'venue' | 'service' | 'dining' | 'entrance';
  x: number; // percentage on map
  y: number; // percentage on map
  description: string;
  hours: string;
  directions: string;
}

export const OFFICIAL_RESOURCES: ResourceDoc[] = [
  {
    id: 'official-brochure',
    index: '01',
    title: 'Official Summit Brochure',
    description: 'The master prospectus containing council ethos, architectural guide, itineraries, and institutional welcomes.',
    category: 'Publication',
    fileType: 'PDF Document',
    fileSize: '4.8 MB',
    status: 'available',
    downloadUrl: '#'
  },
  {
    id: 'accommodation-guide',
    index: '02',
    title: 'Accommodation & Hospitality Dossier',
    description: 'Curated lodging options, transportation shuttles from Lucknow Airport (LKO) & Charbagh Station, and dining protocols.',
    category: 'Logistics',
    fileType: 'PDF Document',
    fileSize: '2.1 MB',
    status: 'available',
    downloadUrl: '#'
  },
  {
    id: 'competition-rules',
    index: '03',
    title: 'Council Format & Rules of Procedure',
    description: 'Comprehensive parliamentary code, points and motions guide, citation rules, and adjudication rubric for both phases.',
    category: 'Governance',
    fileType: 'PDF Document',
    fileSize: '3.4 MB',
    status: 'available',
    downloadUrl: '#'
  },
  {
    id: 'event-timeline',
    index: '04',
    title: 'Official Master Schedule & Itinerary',
    description: 'Hour-by-hour agenda for 16th & 17th April 2027, including plenary timings, keynote addresses, and banquet schedules.',
    category: 'Schedule',
    fileType: 'PDF Document',
    fileSize: '1.2 MB',
    status: 'available',
    downloadUrl: '#'
  },
  {
    id: 'campus-venue-map',
    index: '05',
    title: 'Interactive Architectural Campus Map',
    description: 'Detailed spatial schematics of the 10-acre Seth M.R. Jaipuria campus marking committee rooms, auditoriums, and desks.',
    category: 'Wayfinding',
    fileType: 'Interactive & PDF',
    fileSize: '5.6 MB',
    status: 'available',
    downloadUrl: '#'
  },
  {
    id: 'challenge-statement',
    index: '06',
    title: 'Core Challenge Statement 2027',
    description: 'The classified thematic problem statement setting the premise for Phase II collaboration.',
    category: 'Confidential',
    fileType: 'Encrypted Dossier',
    fileSize: '1.9 MB',
    status: 'locked',
    lockedNote: 'Embargoed until the culmination of Day 1 Plenary (16 April 2027, 18:00 IST).'
  }
];

export const TEAM_STATEMENTS: TeamStatement[] = [
  {
    code: 'YC-2701',
    schoolName: 'The Doon School',
    city: 'Dehradun',
    title: 'Democratizing Algorithmic Governance in Multipolar Economies',
    excerpt: 'Proposing a binding decentralized oversight framework to prevent asymmetric sovereign monopolies in public AI utilities.',
    fullStatement: 'As global decision-making shifts from human institutions to opaque automated models, developing economies face unprecedented technological disenfranchisement. Our delegation proposes the creation of an Intergovernmental Algorithmic Audit Body (IAAB) based on open-weights verification, local linguistic preservation, and sovereign computing credit sharing. By treating ethical AI infrastructure as a public commons rather than proprietary leverage, we safeguard democratic self-determination across all sovereign hemispheres.',
    votes: 342,
    tags: ['AI Governance', 'Sovereignty', 'Multipolarity']
  },
  {
    code: 'YC-2702',
    schoolName: 'Seth M.R. Jaipuria School',
    city: 'Lucknow',
    title: 'Ecological Federalism: Reimagining Transboundary Water Stewardship',
    excerpt: 'Synthesizing ancient Indian riparian jurisprudence with modern satellite hydrological monitoring for cooperative basin management.',
    fullStatement: 'Water security can no longer be mediated through zero-sum geopolitical treaties. Grounded in the civilizational principle of Vasudhaiva Kutumbakam, this framework establishes autonomous river basin stewardships equipped with real-time hydrological telemetry and community-level restorative water rights. By elevating river systems from disputed boundaries to shared ecological sanctuaries, downstream and upstream communities achieve shared prosperity.',
    votes: 418,
    tags: ['Ecology', 'Water Security', 'Vasudhaiva Kutumbakam']
  },
  {
    code: 'YC-2703',
    schoolName: 'The Cathedral & John Connon School',
    city: 'Mumbai',
    title: 'Sovereign Debt Restructuring for Climate Resilient Infrastructure',
    excerpt: 'A fiscal protocol decoupling development aid from debt traps through multilateral green sovereign swaps.',
    fullStatement: 'Vulnerable global south nations spend upwards of four times more on servicing external debt than on climate adaptation. Our thesis outlines a multilateral debt-to-resilience swap mechanism anchored by regional development banks. Through standardized sustainability covenants and performance-indexed coupon adjustments, vulnerable nations regain fiscal space to fund clean energy and disaster mitigation without compromising national sovereignty.',
    votes: 289,
    tags: ['Climate Finance', 'Global South', 'Economics']
  },
  {
    code: 'YC-2704',
    schoolName: 'Modern School, Barakhamba Road',
    city: 'New Delhi',
    title: 'Universal Digital Identity as a Human Right vs. State Surveillance',
    excerpt: 'Zero-knowledge cryptographic identities that guarantee civic inclusion without centralized biometrics exploitation.',
    fullStatement: 'In an increasingly digitized state apparatus, millions without papers exist in civic limbo, while centralized biometric repositories invite surveillance vulnerabilities. We introduce a zero-knowledge citizen credential protocol allowing stateless and displaced communities to verify eligibility for healthcare, education, and humanitarian relief without revealing demographic or biometrical data to authoritarian brokers.',
    votes: 265,
    tags: ['Digital Rights', 'Cryptography', 'Civil Liberties']
  },
  {
    code: 'YC-2705',
    schoolName: 'La Martiniere College',
    city: 'Lucknow',
    title: 'Heritage Preservation and Urban Sprawl in Historic Post-Colonial Cities',
    excerpt: 'Balancing rapid metro transit and smart urbanization with the conservation of Awadhi architectural heritage.',
    fullStatement: 'Urban modernization frequently erases cultural memory through aggressive demolition and commercial homogeneity. Focusing on Lucknow’s unique architectural symbiosis of Mughal, Awadhi, and European motifs, our proposal champions Heritage Transfer of Development Rights (HTDR) and participatory conservation trusts that channel modern infrastructural wealth directly into living historic communities.',
    votes: 312,
    tags: ['Urbanism', 'Heritage', 'Cultural Memory']
  }
];

export const CAMPUS_PINS: CampusPin[] = [
  {
    id: 'pin-entrance',
    name: 'Main Gates & Security Welcome Arch',
    category: 'entrance',
    x: 18,
    y: 82,
    description: 'Primary ceremonial access from Vineet Khand avenue. Security clearance and welcome guides stationed here.',
    hours: 'Open 07:30 — 20:00 IST',
    directions: 'Directly off Gomti Nagar Main Road, opposite City Park.'
  },
  {
    id: 'pin-registration',
    name: 'Delegate Registration & Accreditation Foyer',
    category: 'service',
    x: 28,
    y: 65,
    description: 'Collection of summit kits, credential badges, voting smartcards, and official committee allocations.',
    hours: '08:00 — 10:30 IST (Day 1)',
    directions: 'Located in the Central Administrative Atrium ground floor.'
  },
  {
    id: 'pin-auditorium',
    name: 'Dr. S. Radhakrishnan Plenary Auditorium',
    category: 'venue',
    x: 48,
    y: 42,
    description: 'Main amphitheatre hosting opening & closing ceremonies, keynote addresses, and the General Assembly ratification.',
    hours: 'Plenary Sessions as per schedule',
    directions: 'Central Wing, Level 1 via the Grand Archway.'
  },
  {
    id: 'pin-committees',
    name: 'Academic Chambers (Phase I & II)',
    category: 'venue',
    x: 68,
    y: 35,
    description: 'Air-conditioned committee rooms, projection theatres, and breakout negotiation pods.',
    hours: '09:00 — 17:30 IST',
    directions: 'East Block, Levels 2 and 3.'
  },
  {
    id: 'pin-dining',
    name: 'Royal Awadhi Pavilion & Delegate Dining Lawns',
    category: 'dining',
    x: 75,
    y: 72,
    description: 'Lush manicured gardens serving breakfast, traditional Lucknowi luncheon, high tea, and dinner.',
    hours: 'Meals served throughout conference',
    directions: 'South Lawn adjoining the sports complex.'
  },
  {
    id: 'pin-medical',
    name: 'Medical Care & Delegate Concierge',
    category: 'service',
    x: 38,
    y: 52,
    description: 'Qualified medical practitioners, first aid dispensary, IT troubleshooting, and emergency assistance.',
    hours: 'Continuous 24-Hour support',
    directions: 'Ground Floor, West Wing corridor.'
  }
];
