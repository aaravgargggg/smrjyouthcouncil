import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navigation';
import { SpiralStaircase3D } from '../components/WebGL/SpiralStaircase3D';
import { COUNCIL_PHASES } from '../data/councilData';
import { 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeLanding, setActiveLanding] = useState<number>(1);
  const [activeJourneyStage, setActiveJourneyStage] = useState<number>(0);

  // Countdown timer calculation to 16 April 2027 09:00:00 IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2027-04-16T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentPhase = COUNCIL_PHASES[activeLanding - 1] || COUNCIL_PHASES[0];

  return (
    <div className="relative w-full bg-cream min-h-screen">
      
      {/* SECTION 1: THE OPENING EXPERIENCE (THE ASCENT HERO) */}
      <section className="relative min-h-screen w-full pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark">
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Event Identity & Giant Typography */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            
            {/* Sanskrit Tagline & Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple/5 border border-gold/40 shadow-sm">
              <span className="font-devanagari text-lg text-purple font-semibold">वसुधैव कुटुम्बकम्</span>
              <span className="text-purple/30">•</span>
              <span className="text-xs uppercase tracking-wider text-ink-muted font-medium">The World is One Family</span>
            </div>

            {/* Giant Display Headline */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-purple">
                Creative Direction · SMRJ Youth Council 2027
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.08]">
                The Ascent <br />
                <span className="italic font-garamond text-purple">of Ideas.</span>
              </h1>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal max-w-xl">
              An idea is not an endpoint. It is the beginning of a journey. Where young leaders enter at the base of an intellectual structure, rise through rigorous debate, and culminate in collective impact.
            </p>

            {/* Meta Pill Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-ink/80 pt-1">
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-purple" />
                <span>16—17 April 2027</span>
              </div>
              <span className="text-purple/20">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-purple" />
                <span>Lucknow, India</span>
              </div>
              <span className="text-purple/20">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-purple" />
                <span>Grades IX—XII</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('register')}
                className="px-6 py-3 bg-purple text-gold font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple-700 shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Register Delegation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onNavigate('council')}
                className="px-5 py-3 border border-purple/30 text-purple font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple/5 transition-all flex items-center gap-2"
              >
                <span>Explore Summit</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('resources')}
                className="px-4 py-3 text-ink-muted hover:text-purple text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Brochure</span>
              </button>
            </div>

            {/* Active Landing Context Card */}
            <div className="pt-4 border-t border-purple/10">
              <div className="p-4 bg-white/70 backdrop-blur rounded-xl border border-gold/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gold-dark">
                    Current Landing in 3D: Stage {currentPhase.stageNumber}
                  </div>
                  <h4 className="font-display text-lg text-ink font-semibold">
                    {currentPhase.title} — {currentPhase.subtitle}
                  </h4>
                </div>
                <button
                  onClick={() => onNavigate('council')}
                  className="text-xs font-semibold text-purple hover:text-purple-700 flex items-center gap-1 shrink-0"
                >
                  <span>Read Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Signature 3D Spiral Staircase */}
          <div className="lg:col-span-6 h-[550px] lg:h-[680px] w-full relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-cream-light">
            <SpiralStaircase3D
              activeLanding={activeLanding}
              onSelectLanding={(idx) => setActiveLanding(idx)}
            />
          </div>

        </div>

        {/* Bottom Architectural Transition Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-[11px] text-ink-muted uppercase tracking-widest">
          <span>Seth M.R. Jaipuria School</span>
          <span className="hidden sm:inline">The Spiral Staircase: Intellectual Progression</span>
          <span>Scroll to Ascend ↓</span>
        </div>
      </section>


      {/* SECTION 2: ABOUT THE EVENT (EDITORIAL SPLIT COMPOSITION) */}
      <section className="py-24 relative overflow-hidden bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Oversized Typography */}
            <div className="lg:col-span-5 relative">
              {/* Subtle Architectural Arch Backdrop */}
              <div className="absolute -left-8 -top-12 w-64 h-80 border-2 border-purple/10 arch-mask pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-purple">
                  02 — The Convocation
                </span>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.12]">
                  Where young minds meet to <span className="italic font-garamond text-purple">shape tomorrow.</span>
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full"></div>
              </div>
            </div>

            {/* Right: The Event Introduction & Philosophy */}
            <div className="lg:col-span-7 space-y-6 text-ink-muted leading-relaxed text-base sm:text-lg">
              <p>
                In a fractured world grappling with technological disruptions, ecological imperatives, and shifting geopolitical balances, leadership requires far more than conventional posturing. It demands the courage to listen, the discipline to debate without malice, and the vision to unite divergent worldviews under a common human horizon.
              </p>
              <p>
                The maiden edition of <strong>SMRJ Youth Council 2027</strong> convenes selected student delegations from premier institutions across India and the globe at the historic campus of Seth M.R. Jaipuria School in Lucknow. Across two transformative days, delegates will transcend conventional MUN paradigms to architect binding, multilateral solutions.
              </p>

              {/* Editorial Quote Treatment */}
              <div className="p-6 bg-cream-dark/60 border-l-2 border-gold rounded-r-xl text-sm italic font-garamond text-ink">
                "An assembly designed not to merely simulate diplomacy, but to foster authentic statesmanship grounded in Vasudhaiva Kutumbakam."
              </div>
            </div>
          </div>

          {/* Bottom Information Strip */}
          <div className="mt-16 pt-8 border-t border-purple/15 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-ink-muted block mb-1">
                Venue
              </span>
              <div className="font-display text-lg text-ink font-semibold">
                Seth M.R. Jaipuria School
              </div>
              <div className="text-xs text-ink-muted">Gomti Nagar, Lucknow</div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-ink-muted block mb-1">
                Event Dates
              </span>
              <div className="font-display text-lg text-ink font-semibold">
                16 & 17 April 2027
              </div>
              <div className="text-xs text-ink-muted">Friday & Saturday</div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-ink-muted block mb-1">
                Delegations
              </span>
              <div className="font-display text-lg text-ink font-semibold">
                3 Delegates / School
              </div>
              <div className="text-xs text-ink-muted">Grades IX through XII</div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-ink-muted block mb-1">
                Organising Host
              </span>
              <div className="font-display text-lg text-ink font-semibold">
                Jaipuria Youth Secretariat
              </div>
              <div className="text-xs text-ink-muted">Founded 1992</div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: THE COMPETITION JOURNEY (HORIZONTAL INTERACTIVE TABS) */}
      <section className="py-24 bg-cream-dark/50 border-y border-purple/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                03 — The Progression
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
                The Competition Journey
              </h2>
            </div>
            <p className="text-sm text-ink-muted max-w-md mt-4 md:mt-0">
              The staircase motif translated into three distinct operational stages of the summit. Hover or click to explore each phase.
            </p>
          </div>

          {/* Interactive Stage Selector Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {COUNCIL_PHASES.map((stage, idx) => {
              const isSelected = activeJourneyStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveJourneyStage(idx)}
                  className={`p-6 text-left rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-purple text-cream border-gold shadow-lg'
                      : 'bg-white text-ink border-purple/10 hover:border-gold/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-sm font-bold ${isSelected ? 'text-gold' : 'text-purple'}`}>
                      {stage.stageNumber}
                    </span>
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-gold text-purple' : 'bg-purple/10 text-purple'
                    }`}>
                      Landing {idx + 1}
                    </span>
                  </div>
                  <h3 className={`font-display text-2xl font-bold ${isSelected ? 'text-cream' : 'text-ink'}`}>
                    {stage.title}
                  </h3>
                  <p className={`text-xs mt-1 ${isSelected ? 'text-cream/80' : 'text-ink-muted'}`}>
                    {stage.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Display */}
          {(() => {
            const currentStage = COUNCIL_PHASES[activeJourneyStage];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-10 border border-gold/30 shadow-xl">
                
                {/* Left 6 Columns: Editorial Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {currentStage.actionWords.map((word) => (
                      <span
                        key={word}
                        className="px-3 py-1 bg-purple/10 text-purple text-[11px] font-bold uppercase tracking-wider rounded-full"
                      >
                        {word}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-ink font-bold">
                    {currentStage.title}: {currentStage.subtitle}
                  </h3>

                  <p className="text-base text-ink-muted leading-relaxed">
                    {currentStage.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs uppercase font-bold tracking-wider text-purple">
                      Core Summit Deliverables:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentStage.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-ink/80">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('council')}
                      className="px-5 py-2.5 bg-purple text-cream text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2"
                    >
                      <span>Explore Complete Rules</span>
                      <ArrowUpRight className="w-4 h-4 text-gold" />
                    </button>
                  </div>
                </div>

                {/* Right 5 Columns: Visual Image */}
                <div className="lg:col-span-5 h-80 sm:h-96 rounded-xl overflow-hidden border border-purple/10 relative shadow-md">
                  <img
                    src={currentStage.landingImage}
                    alt={currentStage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-cream">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                      Stage {currentStage.stageNumber} Preview
                    </span>
                    <span className="font-display text-lg text-cream">
                      {currentStage.subtitle}
                    </span>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>


      {/* SECTION 4: THE LIVING COUNTDOWN (FULL-WIDTH DEEP PURPLE) */}
      <section className="py-24 bg-[#3B284B] text-cream relative overflow-hidden">
        {/* Subtle Background Grids */}
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Countdown Begins</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl text-cream font-bold max-w-2xl mx-auto">
            Until We Meet in Lucknow
          </h2>
          
          <p className="text-sm text-cream/70 font-garamond italic mt-2">
            16 April 2027 · A meeting of minds. A beginning of possibilities.
          </p>

          {/* Living Numeral Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mt-12 mb-12">
            
            {/* Days */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gold/30 backdrop-blur-sm">
              <div className="font-display text-5xl sm:text-7xl font-bold text-gold tracking-tight">
                {String(timeLeft.days).padStart(3, '0')}
              </div>
              <div className="text-xs uppercase font-bold tracking-widest text-cream/60 mt-2">
                Days
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gold/30 backdrop-blur-sm">
              <div className="font-display text-5xl sm:text-7xl font-bold text-gold tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold tracking-widest text-cream/60 mt-2">
                Hours
              </div>
            </div>

            {/* Minutes */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gold/30 backdrop-blur-sm">
              <div className="font-display text-5xl sm:text-7xl font-bold text-gold tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold tracking-widest text-cream/60 mt-2">
                Minutes
              </div>
            </div>

            {/* Seconds */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gold/30 backdrop-blur-sm">
              <div className="font-display text-5xl sm:text-7xl font-bold text-gold tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold tracking-widest text-cream/60 mt-2">
                Seconds
              </div>
            </div>

          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-3.5 bg-gold text-[#2A1B36] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-gold-light transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <span>Secure Delegation Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* SECTION 5: WHO CAN BE A PART? (TYPOGRAPHIC STATEMENT) */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6: Dramatic Delegate Image */}
            <div className="lg:col-span-6 h-[460px] rounded-2xl overflow-hidden border border-purple/15 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80"
                alt="Young delegates in deliberation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent flex flex-col justify-end p-8 text-cream">
                <span className="text-xs font-mono uppercase tracking-widest text-gold mb-1">
                  Youth Leadership
                </span>
                <p className="font-display text-2xl text-cream font-medium">
                  "Courageous questions. Collective solutions."
                </p>
              </div>
            </div>

            {/* Right 6: Massive Typographic Statement & Gold Line */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                05 — Eligibility & Voice
              </span>

              <h2 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
                Every young voice. <br />
                <span className="italic font-garamond text-purple">Every bold idea.</span>
              </h2>

              <p className="text-base text-ink-muted leading-relaxed">
                Open to passionate student delegates in <strong>Grades IX through XII</strong>. Each school delegation comprises exactly <strong>three participants</strong> enrolled in the same educational institution. 
              </p>

              {/* Vertical Gold Line & CTA block */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-1 bg-gold h-20 rounded-full shrink-0"></div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider font-semibold text-ink">
                    Delegation limit: Up to two delegations per school
                  </p>
                  <button
                    onClick={() => onNavigate('register')}
                    className="px-6 py-3 bg-purple text-gold font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple-700 transition-all flex items-center gap-2 shadow"
                  >
                    <span>Register Your School</span>
                    <ArrowUpRight className="w-4 h-4 text-gold" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 6: ABOUT OUR SCHOOL PREVIEW (ARCHITECTURAL CAMPUS) */}
      <section className="py-24 bg-cream-dark/60 border-t border-purple/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Campus Photograph (~65% section visual) */}
            <div className="lg:col-span-8 h-[440px] rounded-2xl overflow-hidden border border-gold/40 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                alt="Seth M.R. Jaipuria School Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-transparent to-transparent flex flex-col justify-end p-8 text-cream">
                <span className="text-xs font-mono uppercase tracking-widest text-gold mb-1">
                  10-Acre Campus · Gomti Nagar, Lucknow
                </span>
                <h3 className="font-display text-3xl text-cream font-bold">
                  Seth M.R. Jaipuria School
                </h3>
              </div>
            </div>

            {/* Text Overlay & Exploration CTA */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                06 — The Host Legacy
              </span>

              <h3 className="font-display text-3xl sm:text-4xl text-ink leading-snug">
                A legacy that inspires. <br />
                <span className="italic font-garamond text-purple">A future that belongs to us.</span>
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed">
                Ranked among the World's Top 10 Schools by T4 Education, Seth M.R. Jaipuria School blends ancient Indian ethos with state-of-the-art intellectual pedagogy.
              </p>

              <button
                onClick={() => onNavigate('school')}
                className="px-5 py-2.5 border-2 border-purple text-purple font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple hover:text-cream transition-all flex items-center gap-2"
              >
                <span>Discover Our School</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
