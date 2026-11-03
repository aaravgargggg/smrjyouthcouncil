export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  salutation: string;
  image: string;
  quote: string;
  message: string;
  credentials: string;
}

export const SCHOOL_STATS = [
  { value: '1992', label: 'ESTABLISHED', detail: 'Founded in pursuit of educational excellence and integral consciousness.' },
  { value: '5,000+', label: 'STUDENTS', detail: 'A vibrant scholarly community fostering individual potential.' },
  { value: '250+', label: 'FACULTY', detail: 'Distinguished educators and mentors guiding curious minds.' },
  { value: '10', label: 'ACRES', detail: 'State-of-the-art lush green campus in Gomti Nagar, Lucknow.' },
  { value: 'XII', label: 'GRADES THROUGH', detail: 'Holistic nursery through Senior Secondary education.' },
  { value: 'CISCE', label: 'BOARD AFFILIATION', detail: 'Consistently ranked among the top schools in India.' },
];

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    id: 'vice-chairperson',
    name: 'Mrs. Anjali Jaipuria',
    role: 'Vice Chairperson',
    salutation: 'Integral Education Society',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'True education is not mere accumulation of facts, but the elevation of human consciousness towards a harmonious tomorrow.',
    credentials: 'Visionary educationist guiding Seth M.R. Jaipuria School with the integral philosophy of Sri Aurobindo and The Mother.',
    message: 'Welcome to the maiden edition of SMRJ Youth Council. Our endeavor is to inspire young minds to seek truth, cultivate intellectual rigor, and recognize that the universe is bound by a singular destiny. May this council ignite profound inquiry and purposeful action.'
  },
  {
    id: 'principal',
    name: 'Mrs. Promini Chopra',
    role: 'Principal',
    salutation: 'Seth M.R. Jaipuria School',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
    quote: 'When youth deliberate with integrity and compassion, dialogue transcends borders to construct solutions for humanity.',
    credentials: 'Award-winning academic leader with over three decades of transformative pedagogical leadership.',
    message: 'At Jaipuria, we empower our students not merely to inherit the world, but to elevate it. The SMRJ Youth Council 2027 provides a platform for courageous questions and collaborative statesmanship.'
  },
  {
    id: 'vp-academics',
    name: 'Mrs. Deepa Wahi',
    role: 'Vice Principal',
    salutation: 'Academics',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    quote: 'Rigorous debate refines understanding; collective intellect shapes the contours of our shared future.',
    credentials: 'Distinguished scholar steering curriculum innovation, holistic learning, and academic distinction.',
    message: 'Every delegate who enters these halls carries the responsibility to debate deeply and construct viable frameworks for the challenges of our century.'
  },
  {
    id: 'vp-administration',
    name: 'Dr. Anupam Vidyarthi',
    role: 'Vice Principal',
    salutation: 'Administration',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    quote: 'Excellence is an institutional discipline where tradition meets visionary modern stewardship.',
    credentials: 'Administrator and educator championing institutional governance, student well-being, and global youth engagement.',
    message: 'Our campus is fully prepared to host delegates from across the nation and globe for an unforgettable summit of ideas, diplomacy, and camaraderie.'
  }
];

export const CAMPUS_GALLERY = [
  {
    title: 'Main Academic Quadrangle',
    category: 'Architecture',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    caption: 'Classic Jaipuria brickwork and sweeping arches greeting students and scholars.'
  },
  {
    title: 'Dr. S. Radhakrishnan Auditorium',
    category: 'Venues',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    caption: 'The majestic plenary hall where Youth Council opening & closing ceremonies take place.'
  },
  {
    title: 'Knowledge & Integral Library',
    category: 'Facilities',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    caption: 'Over 30,000 volumes, research archives, and quiet study alcoves overlooking the greens.'
  },
  {
    title: 'Collaborative Innovation Labs',
    category: 'Academics',
    aspect: 'aspect-[16/9]',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    caption: 'High-tech debate breakout zones equipped for research and resolution drafting.'
  },
  {
    title: 'Athletic Grounds & Courts',
    category: 'Sports',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    caption: 'Expansive 10-acre green spaces promoting vitality, sportsmanship, and wellness.'
  },
  {
    title: 'Amphitheatre & Cultural Arena',
    category: 'Campus Life',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    caption: 'The outdoor amphitheatre where delegates congregate under starlit evening gatherings.'
  }
];

export const SRI_AUROBINDO_QUOTE = {
  text: "The first principle of true teaching is that nothing can be taught. The teacher is not an instructor or taskmaster, he is a helper and a guide. His business is to suggest and not to impose.",
  author: "Sri Aurobindo",
  source: "A System of National Education"
};

export const TOP_10_RANKING = {
  title: "World's Top 10 School Recognition",
  rank: "TOP 10",
  body: "T4 Education World's Best School Prizes",
  year: "2022 — 2024 Finalist",
  category: "Overcoming Adversity & Transformative Innovation",
  description: "Recognized globally among the World's Top 10 institutions by T4 Education in partnership with Templeton World Charity Foundation, Accenture, and American Express, celebrating Seth M.R. Jaipuria School's exemplary dedication to integral pedagogy and social impact."
};
