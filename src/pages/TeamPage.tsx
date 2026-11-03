import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { 
  FACULTY_ADVISOR, 
  DIRECTORS, 
  DEPARTMENTS, 
  Department 
} from '../data/teamData';
import { 
  Quote, 
  ChevronRight, 
  Sparkles, 
  Heart, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [activeDeptId, setActiveDeptId] = useState<string>(DEPARTMENTS[0].id);

  const activeDept = DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];

  return (
    <div className="w-full bg-cream min-h-screen pt-24">
      
      {/* SECTION 1: HEADER & COLLECTIVE TEAM IMAGE */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                01 — The Human Heart
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight">
                The Faces of <br />
                <span className="italic font-garamond text-purple">SMRJ Youth Council.</span>
              </h1>
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                Curated and executed by a passionate student secretariat under the guidance of esteemed faculty mentors. Meet the minds shaping the 2027 summit.
              </p>
            </div>

            <div className="lg:col-span-6 h-[400px] rounded-3xl overflow-hidden border border-gold/40 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="SMRJ Youth Council Student Secretariat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                  Jaipuria Secretariat 2027
                </span>
                <p className="font-display text-xl text-cream font-medium">
                  United by purpose, driven by intellect.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2: FACULTY ADVISOR */}
      <section className="py-20 bg-cream-dark/50 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              02 — Mentorship & Guidance
            </span>
            <h2 className="font-display text-4xl text-ink mt-1">
              Faculty Advisor
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden border border-purple/10 shadow-md">
              <img
                src={FACULTY_ADVISOR.image}
                alt={FACULTY_ADVISOR.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                  {FACULTY_ADVISOR.salutation}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-ink font-bold">
                  {FACULTY_ADVISOR.name}
                </h3>
                <div className="text-xs text-purple font-semibold mt-0.5">
                  {FACULTY_ADVISOR.role}
                </div>
              </div>

              <div className="p-4 bg-cream-dark/60 border-l-2 border-gold rounded-r-lg font-garamond italic text-base text-ink leading-relaxed">
                "{FACULTY_ADVISOR.quote}"
              </div>

              <p className="text-sm text-ink-muted leading-relaxed">
                {FACULTY_ADVISOR.message}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3: OUR DIRECTORS (DUAL PORTRAIT + COLLABORATIVE MESSAGE) */}
      <section className="py-24 bg-white border-b border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              03 — Secretariat Leadership
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
              Our Directors
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Leading diplomacy, substantive research, and summit operations.
            </p>
          </div>

          {/* Two Featured Portraits Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Director 1: Tavisha Gattani */}
            <div className="p-6 bg-cream rounded-3xl border border-gold/30 shadow-md text-center space-y-4">
              <div className="w-44 h-52 mx-auto rounded-2xl overflow-hidden border-2 border-gold/50 shadow-lg">
                <img
                  src={DIRECTORS.director1.image}
                  alt={DIRECTORS.director1.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink font-bold">
                  {DIRECTORS.director1.name}
                </h3>
                <div className="text-xs text-purple font-semibold">
                  {DIRECTORS.director1.role}
                </div>
                <div className="text-[11px] text-ink-muted mt-1">
                  {DIRECTORS.director1.title}
                </div>
              </div>
            </div>

            {/* Director 2: Rudraa Singh */}
            <div className="p-6 bg-cream rounded-3xl border border-gold/30 shadow-md text-center space-y-4">
              <div className="w-44 h-52 mx-auto rounded-2xl overflow-hidden border-2 border-gold/50 shadow-lg">
                <img
                  src={DIRECTORS.director2.image}
                  alt={DIRECTORS.director2.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink font-bold">
                  {DIRECTORS.director2.name}
                </h3>
                <div className="text-xs text-purple font-semibold">
                  {DIRECTORS.director2.role}
                </div>
                <div className="text-[11px] text-ink-muted mt-1">
                  {DIRECTORS.director2.title}
                </div>
              </div>
            </div>

          </div>

          {/* Shared Collaborative Editorial Message */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-cream via-white to-cream p-8 sm:p-12 rounded-3xl border border-purple/15 shadow-xl text-center space-y-4">
            <Quote className="w-8 h-8 text-gold mx-auto opacity-70" />
            <h4 className="font-display text-2xl text-purple font-bold">
              The Directors' Joint Convocation
            </h4>
            <p className="font-garamond italic text-base sm:text-lg text-ink leading-relaxed">
              "{DIRECTORS.sharedMessage}"
            </p>
            <div className="pt-2 text-xs font-mono uppercase tracking-widest text-ink-muted">
              Tavisha Gattani & Rudraa Singh · Directors, SMRJ Youth Council 2027
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 4: ORGANISING COMMITTEE (DEPARTMENT INDEX) */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              04 — The Secretariat Apparatus
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
              Organising Committee Index
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Eight dedicated departments managing every dimension of conference life. Select to expand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Columns: Vertical Department Index */}
            <div className="lg:col-span-5 space-y-2">
              {DEPARTMENTS.map((dept) => {
                const isSelected = dept.id === activeDeptId;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setActiveDeptId(dept.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple text-cream border-gold shadow-md'
                        : 'bg-white text-ink border-purple/10 hover:border-gold/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'text-gold' : 'text-purple'}`}>
                        {dept.index}
                      </span>
                      <span className="font-display text-lg font-bold">
                        {dept.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-gold' : 'text-ink-muted'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right 7 Columns: Expanded Department Members */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gold/30 shadow-xl space-y-6">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-gold-dark tracking-wider">
                  Department {activeDept.index}
                </span>
                <h3 className="font-display text-3xl text-ink font-bold mt-1">
                  {activeDept.name}
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  {activeDept.description}
                </p>
                <div className="p-3 bg-cream-dark/60 border-l-2 border-gold rounded-r-lg font-garamond italic text-xs text-ink mt-3">
                  "{activeDept.leadQuote}"
                </div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-purple/10">
                {activeDept.members.map((member) => (
                  <div
                    key={member.id}
                    className="p-4 rounded-2xl bg-cream border border-purple/10 flex items-center gap-4 hover:border-gold/60 transition-colors"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-xl object-cover border border-gold/40 shrink-0"
                    />
                    <div>
                      <h4 className="font-display text-lg text-ink font-bold leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-purple">
                        {member.role}
                      </p>
                      <p className="text-[10px] text-ink-muted mt-1 leading-snug">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 5: CLOSING STATEMENT */}
      <section className="py-20 bg-purple text-cream text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Sparkles className="w-8 h-8 text-gold mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-bold">
            Built by young minds. <br />
            <span className="italic font-garamond text-gold">Brought together by one vision.</span>
          </h2>
          <p className="text-sm text-cream/80 max-w-lg mx-auto">
            We look forward to hosting you at Seth M.R. Jaipuria School for two days of intellectual camaraderie.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-3 bg-gold text-[#2A1B36] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-gold-light transition-all shadow inline-flex items-center gap-2"
            >
              <span>Join As A Delegation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
