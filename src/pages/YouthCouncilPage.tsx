import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { COUNCIL_PHASES, ELIGIBILITY_CRITERIA, EVENT_DETAILS } from '../data/councilData';
import { 
  ArrowUpRight, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Download, 
  Users, 
  Sparkles, 
  Target, 
  ShieldCheck, 
  Compass 
} from 'lucide-react';

interface YouthCouncilPageProps {
  onNavigate: (page: PageId) => void;
}

export const YouthCouncilPage: React.FC<YouthCouncilPageProps> = ({ onNavigate }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const phase = COUNCIL_PHASES[activePhaseIndex];

  return (
    <div className="w-full bg-cream min-h-screen pt-24">
      
      {/* SECTION 1: IDEAS INTO IMPACT HERO */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6: Clean Cream Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-gold/40 text-purple text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                <span>The Summit Vision</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.08]">
                Ideas Into <br />
                <span className="italic font-garamond text-purple">Transformative Impact.</span>
              </h1>

              <p className="text-lg text-ink-muted leading-relaxed font-normal">
                A space for young leaders to consciously collaborate, challenge entrenched perspectives, and co-create lasting structural change.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('register')}
                  className="px-6 py-3 bg-purple text-gold font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple-700 shadow-md transition-all flex items-center gap-2"
                >
                  <span>Apply for Delegation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('resources')}
                  className="px-5 py-3 border border-purple/30 text-purple font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple/5 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Dossier</span>
                </button>
              </div>
            </div>

            {/* Right 6: Auditorium Summit Imagery */}
            <div className="lg:col-span-6 h-[440px] rounded-3xl overflow-hidden border border-gold/40 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                alt="Youth Council Plenary Chamber"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent flex flex-col justify-end p-8 text-cream">
                <span className="text-xs uppercase font-mono tracking-widest text-gold mb-1">
                  16—17 April 2027 · Lucknow
                </span>
                <p className="font-display text-2xl text-cream font-semibold">
                  Plenary Deliberations & Treaty Drafting
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2: WHAT IS THE YOUTH COUNCIL? */}
      <section className="py-20 bg-cream-dark/60 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 h-[400px] rounded-2xl overflow-hidden border border-purple/10 shadow-lg relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="Delegates Collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-ink-muted leading-relaxed text-base sm:text-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-purple block">
                02 — Institutional Genesis
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-ink font-bold">
                A Departure from Conventional Rhetoric
              </h2>
              <p>
                Most youth conferences stop at simulation. Delegates read scripted speeches, defend assigned national stances, and produce resolutions that disappear into committee archives.
              </p>
              <p>
                <strong>SMRJ Youth Council 2027</strong> was conceived to bridge the gap between simulation and real-world multilateral diplomacy. It brings together forward-thinking high school scholars not to mimic politicians, but to think like philosophers, negotiate like statesmen, and build like architects of the future.
              </p>
              <div className="p-4 bg-white rounded-xl border border-gold/30 text-xs text-ink/80 flex items-center gap-3">
                <Target className="w-5 h-5 text-purple shrink-0" />
                <span>Every delegate resolution is archived in the permanent SMRJ Youth Declaration repository and transmitted to civil policy institutions.</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3: THE TWO PHASES (INTERACTIVE DUAL-STAGE ARCHITECTURE) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              03 — The Dual Architecture
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
              The Two Phases of the Ascent
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Select between Phase I and Phase II to examine format, deliverables, and judging standards.
            </p>
          </div>

          {/* Dual Toggle Pill Switcher */}
          <div className="flex justify-center mb-10">
            <div className="p-1.5 bg-cream rounded-full border border-purple/20 flex gap-2">
              {COUNCIL_PHASES.slice(0, 2).map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    activePhaseIndex === idx
                      ? 'bg-purple text-gold shadow-md'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  <span className="font-mono">{p.stageNumber}</span>
                  <span>{p.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Phase Detailed Canvas Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-xl">
            
            {/* Left 6: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-gold">
                  {phase.stageNumber}
                </span>
                <span className="h-4 w-px bg-purple/20"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-purple">
                  {phase.title}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-ink font-bold leading-tight">
                {phase.subtitle}
              </h3>

              <p className="text-base text-ink-muted leading-relaxed">
                {phase.description}
              </p>

              <div className="p-4 bg-white/80 rounded-xl border border-purple/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple block mb-1">
                  Chamber Format:
                </span>
                <p className="text-xs text-ink/80 leading-relaxed">
                  {phase.format}
                </p>
              </div>

              {/* Deliverables & Rubric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-2">
                    Key Deliverables:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-ink/80">
                    {phase.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-purple mb-2">
                    Evaluation Focus:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-ink/80">
                    {phase.judgingCriteria.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"></span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right 6: Visual Image with Smooth Fade */}
            <div className="lg:col-span-6 h-[420px] rounded-2xl overflow-hidden border border-purple/10 relative shadow-md">
              <img
                src={phase.landingImage}
                alt={phase.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                  Chamber Dynamic · Phase {phase.stageNumber}
                </span>
                <span className="font-display text-xl text-cream font-medium">
                  {phase.subtitle}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: OUR VISION & SANSKRIT METAPHOR */}
      <section className="py-24 bg-cream relative overflow-hidden border-t border-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-purple">
            04 — The Guiding Ethos
          </span>
          <div className="font-devanagari text-4xl sm:text-6xl text-purple font-bold">
            अयं निजः परो वेति गणना लघुचेतसाम् । <br />
            उदारचरितानां तु वसुधैव कुटुम्बकम् ॥
          </div>
          <p className="text-sm sm:text-base font-garamond italic text-ink max-w-2xl mx-auto leading-relaxed">
            "Consideration like: 'he is mine or he is another's' occur only to the narrow-minded. For the noble-hearted, the entire earth is but one single family."
          </p>
          <p className="text-xs text-ink-muted uppercase tracking-widest">
            Maha Upanishad · Chapter 6, Verse 71
          </p>
        </div>
      </section>


      {/* SECTION 5: WHO CAN PARTICIPATE? (LARGE 3-PERSON TYPOGRAPHIC COMPOSITION) */}
      <section className="py-24 bg-cream-dark/60 border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              05 — Participation Framework
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
              Who Can Participate?
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Every delegation adheres to a strict three-member delegation structure ensuring peer synergy.
            </p>
          </div>

          {/* Large 3-Person Composition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Person 1: Lead Delegate */}
            <div className="p-8 bg-white rounded-2xl border border-gold/40 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-gold-dark tracking-wider block mb-2">
                  Role 01 · Substantive
                </span>
                <h3 className="font-display text-2xl text-ink font-bold">
                  Lead Policy Delegate
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  Steers bilateral positions, drafts initial whitepapers, and commands podium defense during Phase I.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-purple/10 text-xs font-semibold text-purple">
                Grades IX — XII Eligible
              </div>
            </div>

            {/* Person 2: Strategy Delegate */}
            <div className="p-8 bg-purple text-cream rounded-2xl border border-gold shadow-md flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-gold tracking-wider block mb-2">
                  Role 02 · Coalition
                </span>
                <h3 className="font-display text-2xl text-cream font-bold">
                  Negotiation & Bloc Whip
                </h3>
                <p className="text-xs text-cream/80 mt-2 leading-relaxed">
                  Brokers cross-chamber consensus, coordinates amendments, and drives Phase II multilateral treaty synthesis.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-gold">
                Same Registered School
              </div>
            </div>

            {/* Person 3: Jurist / Resolution Rapporteur */}
            <div className="p-8 bg-white rounded-2xl border border-gold/40 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-gold-dark tracking-wider block mb-2">
                  Role 03 · Synthesizer
                </span>
                <h3 className="font-display text-2xl text-ink font-bold">
                  Resolution Rapporteur
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  Ensures juridical coherence, verifies statistical citations, and co-authors the final ratified declaration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-purple/10 text-xs font-semibold text-purple">
                Accredited Faculty Escort
              </div>
            </div>

          </div>

          {/* Eligibility Rules Strip */}
          <div className="p-6 bg-white rounded-2xl border border-purple/15 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
              <div className="text-xs text-ink-muted">
                <strong>Mandatory Requirement:</strong> All three delegates must belong to Grades IX—XII of the same school institution, accompanied by an appointed teacher-in-charge.
              </div>
            </div>

            <button
              onClick={() => onNavigate('register')}
              className="px-6 py-2.5 bg-purple text-cream text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-purple-700 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Register Delegation</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
