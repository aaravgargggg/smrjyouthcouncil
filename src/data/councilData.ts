export interface CouncilPhase {
  id: string;
  phaseNumber: string;
  dayLabel: string;
  title: string;
  description: string;
}

export const COUNCIL_PHASES: CouncilPhase[] = [
  {
    id: 'phase-1-day-1',
    phaseNumber: 'Phase I',
    dayLabel: 'Day 1',
    title: 'Identifying the Challenge',
    description: 'Participating schools, each represented by a team of three students from Classes IX–XII, present a research-backed Regional Problem Brief highlighting a significant issue in their respective regions. Through expert panel interactions and critical questioning, teams examine the problem, identify its root causes and consolidate their findings into a focused Core Challenge Statement.'
  },
  {
    id: 'phase-1-day-2',
    phaseNumber: 'Phase I',
    dayLabel: 'Day 2',
    title: 'From Challenge to Solution',
    description: 'Teams draw lots to receive their assigned Core Challenge Statements and are given dedicated research time to develop practical, impactful solutions. They subsequently present their proposals before an expert jury for evaluation. The day concludes with a cultural exchange programme and closing ceremony, marking the transition towards the three-month Implementation Challenge.'
  },
  {
    id: 'phase-2-implementation',
    phaseNumber: 'Phase II',
    dayLabel: 'Post-Conference',
    title: 'The Three-Month Implementation Challenge',
    description: 'The Council extends beyond the conference through a three-month implementation journey. Teams execute their proposed solutions through structured action plans, document progress and demonstrate measurable impact. At the conclusion, initiatives are evaluated, with the most effective implementation recognised through the prestigious Impact in Action Award.'
  }
];

export const ABOUT_EVENT = {
  paragraph1: 'The SMRJ Youth Council is a national student-led initiative by Seth M.R. Jaipuria School, Lucknow, envisioned to bring together young minds from across the country on a shared platform of ideas, innovation and impact.',
  paragraph2: 'At a time when the world faces complex social, environmental, economic and technological challenges, the Council encourages students to look beyond their immediate surroundings, recognise issues affecting communities and explore ways to create meaningful change.',
  paragraph3: 'Through a two-day national council, students from Classes IX–XII will come together, bringing diverse experiences, perspectives and ideas. At its heart lies a simple yet powerful belief: every community has challenges worth addressing, and every young mind has the potential to contribute practical solutions.',
  paragraph4: 'More than an event, SMRJ Youth Council is a platform to connect perspectives, cultivate leadership, foster innovation and translate ideas into action. It seeks to inspire a generation that does not merely acknowledge the challenges around them, but takes the initiative to address them.',
  closingBelief: 'Because meaningful change begins when young minds unite with the courage to envision a better tomorrow and the determination to build it.'
};

export const ELIGIBILITY_CRITERIA = {
  teamSize: 3,
  description: 'Each school must register with a team of 3 participants from grades IX–XII.',
  gradeSpan: 'Classes IX — XII',
  affiliation: 'All three participants must be from the same school.'
};

export const EVENT_DETAILS = {
  name: 'SMRJ Youth Council 2027',
  dates: '16–17 April 2027',
  city: 'Lucknow, India',
  venue: 'Seth M.R. Jaipuria School, Lucknow',
  taglineSanskrit: 'वसुदेव कुटुम्बकम्',
  taglineEnglish: 'The world is one family.',
  contactEmail: 'smrjyouthcouncil@gmail.com'
};
