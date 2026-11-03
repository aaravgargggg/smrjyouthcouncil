export interface TeamMember {
  id: string;
  name: string;
  role: string;
  departmentId: string;
  image: string;
  bio: string;
}

export interface Department {
  id: string;
  index: string;
  name: string;
  description: string;
  leadQuote: string;
  members: TeamMember[];
}

export const FACULTY_ADVISOR = {
  name: 'Mrs. Bhavya Jain',
  role: 'Faculty Advisor',
  salutation: 'Seth M.R. Jaipuria School',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  quote: 'Youth is not merely a preparatory stage of life; it is the vital ignition point where intellectual idealism shapes institutional reality.',
  message: 'Guiding the inaugural cohort of SMRJ Youth Council has reaffirmed my deep belief in the transformative brilliance of our student body. Through rigorous scholarship, unwavering discipline, and deep empathy for global struggles, these young leaders have crafted an international forum worthy of the Jaipuria heritage. We invite you to experience an intellectual sanctuary where every voice is heard, refined, and elevated.'
};

export const DIRECTORS = {
  director1: {
    name: 'Tavisha Gattani',
    role: 'Director-General',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    title: 'Director of Diplomacy & Substantive Affairs'
  },
  director2: {
    name: 'Rudraa Singh',
    role: 'Secretary-General',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    title: 'Director of Operations & Summit Strategy'
  },
  sharedMessage: `When we conceptualized the SMRJ Youth Council 2027, our conviction was simple: high school summits must evolve beyond mechanical speeches and pre-rehearsed resolutions. We envisioned an architectural and intellectual ascent — a summit that begins with relentless critique of existing paradigms and culminates in co-created multilateral compacts. Seth M.R. Jaipuria School has taught us that true leadership balances civilizational wisdom with modern innovation. We have spent months preparing these chambers, curating real-world crisis frameworks, and ensuring that your 48 hours in Lucknow will remain a transformative milestone in your intellectual youth. Welcome to the Ascent of Ideas.`
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'admin-pr',
    index: '01',
    name: 'Administrative & Public Relations',
    description: 'Directing diplomatic protocol, delegation liaison, press relations, and official communications with participating schools.',
    leadQuote: 'Bridging institutional relations across hundreds of schools with clarity and diplomatic grace.',
    members: [
      {
        id: 'apr-1',
        name: 'Aanya Srivastava',
        role: 'Head of External Affairs & PR',
        departmentId: 'admin-pr',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
        bio: 'Spearheading institutional outreach, school accreditations, and media relations across national circuits.'
      },
      {
        id: 'apr-2',
        name: 'Kabir Mehrotra',
        role: 'Head of Administrative Protocol',
        departmentId: 'admin-pr',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        bio: 'Overseeing regulatory compliance, official clearances, and master plenary scheduling.'
      }
    ]
  },
  {
    id: 'finance',
    index: '02',
    name: 'Finance & Sponsorship Accounting',
    description: 'Fiscal stewardship, budgetary governance, procurement integrity, and partner endowment management.',
    leadQuote: 'Upholding strict institutional accountability in every rupee allocated to the summit experience.',
    members: [
      {
        id: 'fin-1',
        name: 'Arjun Singhal',
        role: 'Chief Financial Officer',
        departmentId: 'finance',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        bio: 'Managing financial audits, balance forecasting, and transparent institutional vendor disbursements.'
      },
      {
        id: 'fin-2',
        name: 'Ishaan Tandon',
        role: 'Head of Sponsorship Accounts',
        departmentId: 'finance',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        bio: 'Managing sponsor relations, grant reconciliation, and scholarship stipends for remote delegations.'
      }
    ]
  },
  {
    id: 'tech-media',
    index: '03',
    name: 'Tech & Digital Media',
    description: 'Architects of the digital experience, live streaming systems, network infrastructure, and real-time voting portals.',
    leadQuote: 'Fusing cutting-edge web architecture with seamless summit logistics.',
    members: [
      {
        id: 'tech-1',
        name: 'Aarav Gupta',
        role: 'Head of Systems & Web Architecture',
        departmentId: 'tech-media',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        bio: 'Engineered the 3D digital ascent, voting verification protocol, and secure delegation portal.'
      },
      {
        id: 'tech-2',
        name: 'Rhea Mathur',
        role: 'Head of Digital Broadcast & AV',
        departmentId: 'tech-media',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        bio: 'Directing the high-definition live telecast, audio fidelity, and multi-camera plenary coverage.'
      }
    ]
  },
  {
    id: 'logistics',
    index: '04',
    name: 'Logistics & Infrastructure',
    description: 'Venue management, spatial design, committee apparatus, and real-time conference coordination.',
    leadQuote: 'Transforming our 10-acre campus into a master-planned international diplomatic sanctuary.',
    members: [
      {
        id: 'log-1',
        name: 'Devansh Agarwal',
        role: 'Head of Spatial Logistics',
        departmentId: 'logistics',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        bio: 'Coordinating committee chamber layouts, acoustic partitioning, and signage wayfinding.'
      },
      {
        id: 'log-2',
        name: 'Shreya Verma',
        role: 'Head of Resource Dispatch',
        departmentId: 'logistics',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        bio: 'Managing delegate dossier distribution, stationery caches, and real-time runner coordination.'
      }
    ]
  },
  {
    id: 'hospitality',
    index: '05',
    name: 'Hospitality & Delegate Care',
    description: 'Welcoming national delegates with traditional Lucknowi tehzeeb, premium boarding, and curated culinary experiences.',
    leadQuote: 'Embodying Lucknow’s timeless warmth and grace for every visiting scholar.',
    members: [
      {
        id: 'hosp-1',
        name: 'Zoya Khan',
        role: 'Head of Delegate Concierge',
        departmentId: 'hospitality',
        image: 'https://images.unsplash.com/photo-1534751516642-a171ed292022?auto=format&fit=crop&w=600&q=80',
        bio: 'Ensuring seamless hotel accommodations, airport transfers, and 24-hour delegate comfort.'
      },
      {
        id: 'hosp-2',
        name: 'Madhav Rastogi',
        role: 'Head of Culinary & Banquets',
        departmentId: 'hospitality',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        bio: 'Curating royal Awadhi cuisine, dietary accommodations, and the Gala Diplomatic Dinner.'
      }
    ]
  },
  {
    id: 'photography',
    index: '06',
    name: 'Photography & Visual Journalism',
    description: 'Documenting every spark of debate, poignant silence, and victorious moment through high-art visual journalism.',
    leadQuote: 'Capturing the living history of the council through timeless cinematic frames.',
    members: [
      {
        id: 'photo-1',
        name: 'Siddharth Roy',
        role: 'Director of Photography',
        departmentId: 'photography',
        image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        bio: 'Award-winning student photojournalist chronicling the summit with documentary intimacy.'
      },
      {
        id: 'photo-2',
        name: 'Ananya Bajpai',
        role: 'Head of Cinematography',
        departmentId: 'photography',
        image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80',
        bio: 'Directing the official summit aftermovie and real-time social reels during deliberations.'
      }
    ]
  },
  {
    id: 'cultural',
    index: '07',
    name: 'Cultural Affairs & Plenary Arts',
    description: 'Weaving civilizational art forms, musical interludes, and the grand opening cultural showcase.',
    leadQuote: 'Grounding intellectual discourse in the soul of India’s timeless cultural heritage.',
    members: [
      {
        id: 'cult-1',
        name: 'Meera Chawla',
        role: 'Head of Cultural Programming',
        departmentId: 'cultural',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
        bio: 'Orchestrating classical musical preludes and ceremonial invocations for the opening plenary.'
      },
      {
        id: 'cult-2',
        name: 'Tanmay Kapoor',
        role: 'Head of Delegate Socials',
        departmentId: 'cultural',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        bio: 'Curating the cross-school fellowship evening and cultural exchange showcase.'
      }
    ]
  },
  {
    id: 'creative',
    index: '08',
    name: 'Creative Direction & Visual Identity',
    description: 'Custodians of the Ascent of Ideas visual identity, bespoke typography, architectural motifs, and print publications.',
    leadQuote: 'Translating deep institutional philosophy into tactile, unforgettable aesthetics.',
    members: [
      {
        id: 'creat-1',
        name: 'Prisha Nair',
        role: 'Creative Director',
        departmentId: 'creative',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        bio: 'Designed the official conference brand book, stage scenography, and delegate keepsakes.'
      },
      {
        id: 'creat-2',
        name: 'Vivaan Saxena',
        role: 'Lead Visual Designer',
        departmentId: 'creative',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        bio: 'Crafted the architectural motifs, publication layouts, and ceremonial scrolls.'
      }
    ]
  }
];
