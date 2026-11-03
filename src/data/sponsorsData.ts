export interface Sponsor {
  id: string;
  name: string;
  tier: 'title' | 'powered_by' | 'associate' | 'knowledge' | 'supporting' | 'media';
  tierLabel: string;
  logo: string;
  brandColor: string;
  industry: string;
  description: string;
  website: string;
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'tata-consultancy-services',
    name: 'Tata Consultancy Services',
    tier: 'title',
    tierLabel: 'Title Partner',
    logo: 'TCS',
    brandColor: '#004B87',
    industry: 'Digital Innovation & Enterprise Technology',
    description: 'Pioneering global digital transformation and empowering youth education initiatives across India.',
    website: 'https://www.tcs.com'
  },
  {
    id: 'state-bank-of-india',
    name: 'State Bank of India',
    tier: 'powered_by',
    tierLabel: 'Powered By Partner',
    logo: 'SBI',
    brandColor: '#280071',
    industry: 'Banking & National Financial Inclusion',
    description: 'The nation’s largest financial institution supporting scholastic leadership and socio-economic empowerment.',
    website: 'https://www.sbi.co.in'
  },
  {
    id: 'hcltech',
    name: 'HCLTech',
    tier: 'associate',
    tierLabel: 'Associate Partner',
    logo: 'HCLTech',
    brandColor: '#0072CE',
    industry: 'Global Technology Services',
    description: 'Supercharging progress through technology, sustainable enterprise, and student STEM sponsorships.',
    website: 'https://www.hcltech.com'
  },
  {
    id: 'oxford-university-press',
    name: 'Oxford University Press',
    tier: 'knowledge',
    tierLabel: 'Knowledge & Scholastic Partner',
    logo: 'OUP',
    brandColor: '#002147',
    industry: 'Scholarly Publishing & Research',
    description: 'Providing authoritative academic reference dossiers, adjudicator guides, and research awards.',
    website: 'https://global.oup.com'
  },
  {
    id: 'united-nations-information-centre',
    name: 'UN Information Centre for India & Bhutan',
    tier: 'knowledge',
    tierLabel: 'Knowledge & Multilateral Partner',
    logo: 'UNIC',
    brandColor: '#009EDB',
    industry: 'Multilateral Diplomacy & Global Goals',
    description: 'Sharing official SDG progress indices and multilateral deliberation protocols with student leaders.',
    website: 'https://www.unic.org.in'
  },
  {
    id: 'the-hindu',
    name: 'The Hindu',
    tier: 'media',
    tierLabel: 'Official National Media Partner',
    logo: 'The Hindu',
    brandColor: '#B31B1B',
    industry: 'National Journalism & Public Discourse',
    description: 'Chronicling the summit deliberations, plenary declarations, and student photojournalism across national editions.',
    website: 'https://www.thehindu.com'
  },
  {
    id: 'british-council',
    name: 'British Council India',
    tier: 'supporting',
    tierLabel: 'Supporting International Partner',
    logo: 'British Council',
    brandColor: '#00A88F',
    industry: 'Cultural Relations & Global Opportunities',
    description: 'Supporting global oratorical masterclasses and student exchange fellowships.',
    website: 'https://www.britishcouncil.in'
  },
  {
    id: 'lucknow-management-association',
    name: 'Lucknow Management Association (LMA)',
    tier: 'supporting',
    tierLabel: 'Institutional Civic Partner',
    logo: 'LMA',
    brandColor: '#3B5998',
    industry: 'Civic Governance & Leadership Forum',
    description: 'Fostering public-private leadership dialogue and mentoring delegates on state-level policy formulation.',
    website: 'https://www.lmalucknow.org'
  }
];

export const SPONSOR_ACKNOWLEDGEMENT = {
  headline: "In Devotion to the Future of Ideas",
  body: "The inaugural edition of SMRJ Youth Council 2027 is made possible through the generous intellectual and operational sponsorship of institutions that share our unwavering belief in young minds. Their commitment guarantees that scholarship, financial inclusivity, and diplomatic rigor remain at the heart of this international summit."
};
