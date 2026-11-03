export interface CouncilPhase {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  actionWords: string[];
  description: string;
  format: string;
  deliverables: string[];
  judgingCriteria: string[];
  landingImage: string;
}

export const COUNCIL_PHASES: CouncilPhase[] = [
  {
    id: 'phase-1',
    stageNumber: '01',
    title: 'Phase I',
    subtitle: 'Question. Debate. Deliberate.',
    actionWords: ['QUESTION', 'CHALLENGE', 'DELIBERATE'],
    description: 'The foundation of the ascent begins in rigorous intellectual interrogation. Delegates dissect multi-layered geopolitical, socio-economic, and ethical crises through parliamentary procedure, moderated caucuses, and policy confrontation.',
    format: 'Intense structured committee sessions where each delegation must articulate, defend, and critique foundational position papers against peer scrutinies.',
    deliverables: [
      'Preliminary Position Whitepapers',
      'Structured Committee Defense & Cross-examination',
      'Crisis Directive Submissions'
    ],
    judgingCriteria: [
      'Substantive Knowledge & Analytical Depth',
      'Diplomatic Decorum & Rebuttal Precision',
      'Command of Institutional Precedents'
    ],
    landingImage: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'phase-2',
    stageNumber: '02',
    title: 'Phase II',
    subtitle: 'Collaborate. Construct. Create.',
    actionWords: ['COLLABORATE', 'CONSTRUCT', 'CREATE'],
    description: 'Moving beyond unilateral rhetoric into pragmatic multilateral synthesis. Delegates forge cross-bloc consensus, harmonize divergent perspectives, and co-author concrete actionable policy solutions to the unveiled Core Challenge Statement.',
    format: 'Unmoderated negotiation arenas, multi-bloc drafting lobbies, and joint resolution chambers testing emotional quotient and coalition-building acumen.',
    deliverables: [
      'Harmonized Draft Declarations',
      'Joint Policy Framework & Fiscal Roadmaps',
      'Plenary Presentation to Distinguished Jurists'
    ],
    judgingCriteria: [
      'Consensus-Building & Conflict Resolution',
      'Originality & Feasibility of Policy Mechanisms',
      'Collective Synergy & Multilateral Compromise'
    ],
    landingImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'phase-outcome',
    stageNumber: '03',
    title: 'The Culmination',
    subtitle: 'The Ascent Realized — Youth Declaration 2027',
    actionWords: ['SYNTHESIZE', 'RATIFY', 'TRANSFORM'],
    description: 'The summit apex. The ratified policies are codified into the official SMRJ Youth Declaration 2027, presented to global dignitaries, civil society leaders, and archived in the public repository for tangible policy advocacy.',
    format: 'Solemn Plenary Voting, General Assembly Ratification, and Valedictory Address.',
    deliverables: [
      'The SMRJ Youth Declaration 2027',
      'Actionable Recommendations for Civil Institutions',
      'Commendation of Laureates & Best Delegation Accolades'
    ],
    judgingCriteria: [
      'Actionable Real-World Feasibility',
      'Alignment with Vasudhaiva Kutumbakam Ethos',
      'Institutional Impact'
    ],
    landingImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80'
  }
];

export const ELIGIBILITY_CRITERIA = {
  teamSize: 3,
  teamDescription: 'Exactly three student delegates per institutional delegation.',
  gradeSpan: 'Grades IX — XII',
  schoolAffiliation: 'All three participants must be officially enrolled in the same registered school.',
  delegationCap: 'Schools may register up to 2 distinct delegations (subject to venue capacity).',
  requirements: [
    'Official nomination letter signed by the School Principal or Head of Institution.',
    'Assigned Faculty Escort/Teacher In-Charge accompanying the delegation.',
    'Commitment to attend both days (16th & 17th April 2027) in formal diplomatic attire.'
  ]
};

export const EVENT_DETAILS = {
  name: 'SMRJ Youth Council 2027',
  edition: 'Maiden Edition',
  dates: '16—17 April 2027',
  city: 'Lucknow, Uttar Pradesh, India',
  venue: 'Seth M.R. Jaipuria School, Vineet Khand, Gomti Nagar',
  taglineSanskrit: 'वसुधैव कुटुम्बकम्',
  taglineEnglish: 'The World is One Family',
  concept: 'The Ascent of Ideas',
  contactEmail: 'smrjyouthcouncil@gmail.com',
  registrationDeadline: '15 March 2027'
};
