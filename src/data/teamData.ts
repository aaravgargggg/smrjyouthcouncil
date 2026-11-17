export interface Department {
  id: string;
  index: string;
  name: string;
  members: { name: string; role: string }[];
}

export const TEACHER_COORDINATOR = {
  name: 'Mrs. Bhavya Jain',
  role: 'Teacher Coordinator',
  phone: '+91 73185 89995',
  message: '(Message to be given)'
};

export const DIRECTORS = {
  director1: {
    name: 'Tavisha Gattani',
    role: 'Director',
    phone: '+91 78804 30531'
  },
  director2: {
    name: 'Rudraa Singh',
    role: 'Director',
    phone: '+91 96486 66630'
  },
  message: '(Message to be given)'
};

export const ORGANISING_COMMITTEE_DEPARTMENTS: Department[] = [
  {
    id: 'admin-pr',
    index: '01',
    name: 'Administrative and Public Relations Heads',
    members: [
      { name: 'Aratrika Gupta', role: 'Head' },
      { name: 'Punya Goel', role: 'Head' }
    ]
  },
  {
    id: 'tech-media',
    index: '02',
    name: 'Tech and Media Heads',
    members: [
      { name: 'Aarav Garg', role: 'Head' },
      { name: 'Rhea Mathur', role: 'Head' }
    ]
  },
  {
    id: 'finance',
    index: '03',
    name: 'Finance Heads',
    members: [
      { name: 'Arjun Singhal', role: 'Head' },
      { name: 'Ishaan Tandon', role: 'Head' }
    ]
  },
  {
    id: 'logistics',
    index: '04',
    name: 'Logistics Heads',
    members: [
      { name: 'Devansh Agarwal', role: 'Head' },
      { name: 'Shreya Verma', role: 'Head' }
    ]
  },
  {
    id: 'hospitality',
    index: '05',
    name: 'Hospitality Heads',
    members: [
      { name: 'Zoya Khan', role: 'Head' },
      { name: 'Madhav Rastogi', role: 'Head' }
    ]
  },
  {
    id: 'photography',
    index: '06',
    name: 'Photography Heads',
    members: [
      { name: 'Siddharth Roy', role: 'Head' },
      { name: 'Ananya Bajpai', role: 'Head' }
    ]
  },
  {
    id: 'cultural',
    index: '07',
    name: 'Cultural Heads',
    members: [
      { name: 'Meera Chawla', role: 'Head' },
      { name: 'Tanmay Kapoor', role: 'Head' }
    ]
  },
  {
    id: 'creative',
    index: '08',
    name: 'Creative Heads',
    members: [
      { name: 'Prisha Nair', role: 'Head' },
      { name: 'Vivaan Saxena', role: 'Head' }
    ]
  }
];
