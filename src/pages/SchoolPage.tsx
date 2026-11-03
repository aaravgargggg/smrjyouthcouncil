import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { 
  SCHOOL_STATS, 
  LEADERSHIP_PROFILES, 
  CAMPUS_GALLERY, 
  SRI_AUROBINDO_QUOTE, 
  TOP_10_RANKING 
} from '../data/schoolData';
import { ConnectedGlobe3D } from '../components/WebGL/ConnectedGlobe3D';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Quote, 
  Award, 
  Building2, 
  Compass, 
  X, 
  Sparkles 
} from 'lucide-react';

interface SchoolPageProps {
  onNavigate: (page: PageId) => void;
}

export const SchoolPage: React.FC<SchoolPageProps> = ({ onNavigate }) => {
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>(LEADERSHIP_PROFILES[0].id);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const selectedLeader = LEADERSHIP_PROFILES.find((l) => l.id === selectedLeaderId) || LEADERSHIP_PROFILES[0];

  return (
    <div className="w-full bg-cream min-h-screen pt-24">
      
      {/* SECTION 1: SCHOOL INTRODUCTION & SRI AUROBINDO QUOTE */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Tag & Title */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              01 — Institutional Legacy
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mt-2">
              A Legacy of <br />
              <span className="italic font-garamond text-purple">Conscious Learning.</span>
            </h1>
          </div>

          {/* Asymmetrical Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Columns: Campus Photograph & Arch */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl overflow-hidden border border-gold/40 shadow-2xl aspect-[16/10] relative">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                  alt="Seth M.R. Jaipuria School Lucknow"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Sri Aurobindo Quote Floating Box */}
              <div className="mt-6 lg:-mt-12 lg:ml-12 p-8 bg-white/95 backdrop-blur rounded-2xl border border-purple/15 shadow-xl relative z-10 max-w-xl">
                <Quote className="w-8 h-8 text-gold mb-3 opacity-80" />
                <p className="font-garamond italic text-base sm:text-lg text-ink leading-relaxed">
                  "{SRI_AUROBINDO_QUOTE.text}"
                </p>
                <div className="mt-4 pt-3 border-t border-purple/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple">
                    {SRI_AUROBINDO_QUOTE.author}
                  </span>
                  <span className="text-[11px] text-ink-muted">
                    {SRI_AUROBINDO_QUOTE.source}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Institutional Narrative */}
            <div className="lg:col-span-5 space-y-6 text-ink-muted text-base sm:text-lg leading-relaxed">
              <p>
                Founded in 1992 under the auspices of the Integral Education Society, <strong>Seth M.R. Jaipuria School, Lucknow</strong> has emerged as one of the premier educational institutions of India. 
              </p>
              <p>
                Anchored in the spiritual philosophy of Sri Aurobindo and The Mother, the school advocates an integral pedagogy that seeks the simultaneous perfection of the physical, vital, mental, and psychic dimensions of the young scholar.
              </p>
              <p>
                Our 10-acre campus in Gomti Nagar serves not merely as classrooms, but as a living sanctuary of debate, cultural vitality, and ethical inquiry, providing the ideal stage for the SMRJ Youth Council 2027.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 rounded-full text-xs font-semibold text-purple">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Affiliated with CISCE, New Delhi · ICSE & ISC</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2: EDITORIAL SCHOOL FACTS GRID */}
      <section className="py-20 bg-cream-dark/60 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                02 — Institutional In Numbers
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
                The Fabric of Excellence
              </h2>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted mt-3 md:mt-0">
              Vineet Khand · Gomti Nagar · Lucknow
            </span>
          </div>

          {/* Large Editorial Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SCHOOL_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-purple/10 shadow-sm flex flex-col justify-between hover:border-gold/60 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-purple tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase font-bold tracking-widest text-gold-dark mt-2">
                    {stat.label}
                  </div>
                </div>
                <p className="text-[11px] text-ink-muted mt-4 leading-normal">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 3: WORLD'S TOP 10 SPECIAL RECOGNITION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-cream via-cream to-cream-dark border-2 border-gold/40 p-8 sm:p-14 shadow-2xl overflow-hidden">
            
            {/* Giant Gold-Outlined Number '10' in Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 select-none pointer-events-none opacity-15">
              <span className="font-display text-[260px] sm:text-[380px] font-bold text-purple leading-none">
                10
              </span>
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold text-purple font-semibold text-xs uppercase tracking-widest">
                <Award className="w-4 h-4 text-gold-dark" />
                <span>{TOP_10_RANKING.year}</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-bold leading-tight">
                Recognized Among the <br />
                <span className="italic font-garamond text-purple">World's Top 10 Schools.</span>
              </h2>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                {TOP_10_RANKING.description}
              </p>

              <div className="p-4 bg-white/80 rounded-xl border border-purple/10 text-xs text-ink/80 space-y-1">
                <div className="font-semibold text-purple">Official Recognition Citation:</div>
                <div>Ranking Entity: <strong>T4 Education (World's Best School Prizes)</strong></div>
                <div>Category: <strong>{TOP_10_RANKING.category}</strong></div>
                <div>Global Partners: Templeton World Charity Foundation, Accenture, American Express</div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: OUR VISION & THE 3D CONNECTED GLOBE */}
      <section className="py-24 bg-cream relative overflow-hidden border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              04 — The Universal Horizon
            </span>
            <div className="font-devanagari text-4xl sm:text-5xl text-purple font-bold mt-2">
              वसुधैव कुटुम्बकम्
            </div>
            <p className="text-sm font-garamond italic text-ink-muted mt-2">
              "The World is One Family"
            </p>
            <p className="text-base text-ink-muted mt-4 leading-relaxed">
              We envision an educational fellowship where intellectual distinction is intrinsically tethered to global empathy, recognizing that sovereign boundaries are porous to shared civilizational aspirations.
            </p>
          </div>

          {/* 3D Connected Globe Component */}
          <div className="rounded-3xl border border-gold/40 shadow-xl overflow-hidden bg-cream-light relative">
            <ConnectedGlobe3D />
          </div>

        </div>
      </section>


      {/* SECTION 5: LEADERSHIP MESSAGES (FEATURED SELECTOR) */}
      <section className="py-24 bg-cream-dark/50 border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              05 — Institutional Guardians
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
              Leadership Messages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 4: Selectable Vertical Profile List */}
            <div className="lg:col-span-4 space-y-3">
              {LEADERSHIP_PROFILES.map((leader) => {
                const isSelected = leader.id === selectedLeaderId;
                return (
                  <button
                    key={leader.id}
                    onClick={() => setSelectedLeaderId(leader.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 border flex items-center gap-4 ${
                      isSelected
                        ? 'bg-purple text-cream border-gold shadow-md'
                        : 'bg-white text-ink border-purple/10 hover:border-gold/50'
                    }`}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold/60"
                    />
                    <div>
                      <h4 className={`font-display text-lg font-bold leading-tight ${isSelected ? 'text-cream' : 'text-ink'}`}>
                        {leader.name}
                      </h4>
                      <p className={`text-xs ${isSelected ? 'text-gold' : 'text-purple'}`}>
                        {leader.role} · {leader.salutation}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right 8: Featured Portrait & Full Message */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden border border-purple/10 shadow-md">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    {selectedLeader.salutation}
                  </span>
                  <h3 className="font-display text-3xl text-ink font-bold">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-xs text-purple font-medium mt-0.5">
                    {selectedLeader.role}
                  </div>
                </div>

                <div className="p-4 bg-cream-dark/60 border-l-2 border-gold rounded-r-lg font-garamond italic text-sm text-ink leading-relaxed">
                  "{selectedLeader.quote}"
                </div>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {selectedLeader.message}
                </p>

                <p className="text-xs text-ink-muted/80 pt-2 border-t border-purple/10">
                  {selectedLeader.credentials}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 6: OUR CAMPUS PHOTOGRAPHIC GALLERY */}
      <section className="py-24 bg-white border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                06 — Spatial Sanctuary
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
                Our Campus & Chambers
              </h2>
            </div>
            <p className="text-xs text-ink-muted mt-2 md:mt-0 uppercase tracking-wider">
              Click any photograph to view high-resolution gallery
            </p>
          </div>

          {/* Asymmetrical Photographic Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPUS_GALLERY.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(item.image)}
                className="group relative rounded-2xl overflow-hidden border border-purple/10 cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`${item.aspect} w-full overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dark">
                    {item.category}
                  </span>
                  <h4 className="font-display text-lg text-ink font-semibold mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-muted mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* LIGHTBOX MODAL */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-gold/40">
            <img
              src={activeLightboxImage}
              alt="Campus View"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}


      {/* SECTION 7: REGISTRATION CTA */}
      <section className="py-20 bg-purple text-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gold">
            Join the Jaipuria Summit
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-bold">
            Bring Your Delegation to Lucknow
          </h2>
          <p className="text-sm sm:text-base text-cream/80 max-w-xl mx-auto">
            Experience our 10-acre campus, world-class conference facilities, and traditional Awadhi hospitality this April 2027.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-3.5 bg-gold text-[#2A1B36] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-gold-light transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Register Your Delegation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
