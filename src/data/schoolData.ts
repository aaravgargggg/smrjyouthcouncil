export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  sectionTitle?: string;
  salutation: string;
  image: string;
  quote?: string;
  message?: string;
}

export const SCHOOL_STATS = [
  { value: '1992', label: 'ESTABLISHED', detail: 'Founded in pursuit of educational excellence and conscious learning.' },
  { value: '5,000+', label: 'STUDENTS', detail: 'A vibrant scholarly community fostering individual potential.' },
  { value: '250+', label: 'FACULTY', detail: 'Distinguished educators and mentors guiding curious minds.' },
  { value: '10', label: 'ACRES', detail: 'Lush green campus in Gomti Nagar, Lucknow.' },
  { value: 'NURSERY — XII', label: 'GRADES', detail: 'Holistic nursery through Senior Secondary education.' },
  { value: 'CISCE', label: 'BOARD AFFILIATION', detail: 'Consistently ranked among the top schools in India.' },
];

export const SRI_AUROBINDO_QUOTE = {
  text: "Education is not the filling of a pail, but the lighting of a fire",
  author: "Sri Aurobindo"
};

export const SCHOOL_STORY = {
  quote: "Education is not the filling of a pail, but the lighting of a fire",
  paragraphs: [
    "At SMRJ, our identity is rooted in a belief that has guided us since the very beginning: education must do more than impart knowledge; it must inspire thought, nurture character and evolve with the world around us.",
    "Over the years, Seth M.R. Jaipuria School has grown into a progressive and dynamic institution, embracing new ideas while remaining firmly grounded in its founding values. Every step forward reflects a commitment to education that extends beyond academic achievement, fostering wisdom, awareness and an understanding of one's place in an ever-changing world.",
    "Guided by a philosophy that places equal importance on self-mastery and scholarship, the school strives to nurture individuals of character and conviction. Through an emphasis on discipline, resilience, integrity and purpose, students are encouraged to recognise their potential and develop the confidence to realise it.",
    "From classrooms that encourage curiosity and independent thought to platforms that celebrate creativity, expression and student leadership, SMRJ creates opportunities for learning beyond conventional boundaries. It is an environment where questions are welcomed, perspectives are explored and ideas are given the space to grow — making education an active and enriching experience.",
    "Ultimately, the story of SMRJ is not measured by milestones alone, but by the generations of individuals it continues to shape. Individuals equipped not only with knowledge and capability, but with the empathy, responsibility and discernment to contribute meaningfully to the world. At SMRJ, education is a lifelong pursuit of growth, self-discovery and conscious transformation."
  ]
};

export const TOP_10_RANKING = {
  title: "Seth M.R. Jaipuria School is in World’s Top 10",
  posterImage: '/assets/top-10-school.jpg',
  paragraphs: [
    "Seth M.R. Jaipuria School, Lucknow, has been recognized among the World’s Top 10 Schools in the Community Collaboration category at the World’s Best School Prizes by T4 Education.",
    "This honour acknowledges the school’s distinctive approach to education, one that brings together academic development, emotional well-being, self-awareness and meaningful community participation. Through initiatives such as SMRJ Samvaad, Silence Time and Navsrijan, the school continues to put these principles into practice, creating a culture of shared learning and collective responsibility.",
    "The achievement celebrates the contributions of students, educators, parents, grand-parents, alumni and the wider Jaipuria community in building an environment where purpose, compassion and character remain central to education."
  ]
};

export const SCHOOL_VISION = {
  motto: 'वसुदेव कुटुम्बकम्',
  description: 'Rooted in the timeless philosophy of "वसुदेव कुटुम्बकम्" — the world is one family — SMRJ envisions education as a means of fostering a more conscious, compassionate and interconnected society. As a School of Conscious Transformation, we strive to develop individuals who value diversity, embrace collective responsibility and approach the world with wisdom, integrity and a spirit of service.'
};

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    id: 'vice-chairperson',
    name: 'Mrs. Anjali Jaipuria',
    role: 'Vice Chairperson',
    sectionTitle: 'Vice Chairperson, Integral Education Society',
    salutation: 'Integral Education Society',
    image: '/assets/anjali-jaipuria.png',
    quote: 'For education to be complete, it must include education of the physical self, the vital self, the mental self and the spiritual self.'
  },
  {
    id: 'principal',
    name: 'Mrs. Promini Chopra',
    role: 'Principal',
    sectionTitle: 'Principal’s Message',
    salutation: 'Seth M.R. Jaipuria School',
    image: '/assets/promini-chopra.jpg',
    message: '(Message to be given later)'
  },
  {
    id: 'vp-academics',
    name: 'Mrs. Deepa Wahi',
    role: 'Vice Principal (Academics)',
    sectionTitle: 'Vice Principal’s (Academics) Message',
    salutation: 'Seth M.R. Jaipuria School',
    image: '/assets/deepa-wahi.jpg',
    message: '(Message to be given later)'
  },
  {
    id: 'vp-administration',
    name: 'Dr. Anupam Vidyarthi',
    role: 'Vice Principal (Administration)',
    sectionTitle: 'Vice Principal’s (Administration) Message',
    salutation: 'Seth M.R. Jaipuria School',
    image: '/assets/anupam-vidyarthi.jpg',
    message: '(Message to be given later)'
  }
];

export const CAMPUS_GALLERY = [
  {
    title: 'Basketball Court',
    image: '/assets/campus-basketball.png',
  },
  {
    title: 'Library',
    image: '/assets/campus-library.png',
  },
  {
    title: 'Courtyard',
    image: '/assets/campus-courtyard.png',
  },
  {
    title: 'Research Lab',
    image: '/assets/campus-research-lab.png',
  },
  {
    title: 'Reception',
    image: '/assets/campus-reception.png',
  }
];
