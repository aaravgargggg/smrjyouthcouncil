import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { 
  OFFICIAL_RESOURCES, 
  TEAM_STATEMENTS, 
  CAMPUS_PINS, 
  ResourceDoc, 
  TeamStatement, 
  CampusPin 
} from '../data/resourcesData';
import { 
  FileText, 
  Download, 
  Lock, 
  Search, 
  ThumbsUp, 
  MapPin, 
  ExternalLink, 
  Check, 
  AlertCircle, 
  Info, 
  X, 
  Clock, 
  Compass, 
  Sparkles 
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatement, setSelectedStatement] = useState<TeamStatement | null>(null);
  const [votedTeams, setVotedTeams] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('smrj_voted_teams') || '[]');
    } catch {
      return [];
    }
  });
  const [statements, setStatements] = useState<TeamStatement[]>(TEAM_STATEMENTS);
  const [votingOpen, setVotingOpen] = useState(true);
  const [activePin, setActivePin] = useState<CampusPin>(CAMPUS_PINS[0]);
  const [selectedDocPreview, setSelectedDocPreview] = useState<ResourceDoc | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleVote = (code: string) => {
    if (!votingOpen) {
      showToast('Voting is currently closed by the Youth Council Secretariat.');
      return;
    }
    if (votedTeams.includes(code)) {
      showToast('You have already cast your ballot for this resolution.');
      return;
    }

    const updatedVoted = [...votedTeams, code];
    setVotedTeams(updatedVoted);
    localStorage.setItem('smrj_voted_teams', JSON.stringify(updatedVoted));

    setStatements((prev) =>
      prev.map((s) => (s.code === code ? { ...s, votes: s.votes + 1 } : s))
    );

    showToast(`Ballot recorded! Vote verified for team ${code}.`);
  };

  const filteredStatements = statements.filter(
    (s) =>
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-full bg-cream min-h-screen pt-24">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-purple text-cream px-5 py-3 rounded-xl border border-gold shadow-2xl flex items-center gap-3 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                01 — The Knowledge Archive
              </span>
              <h1 className="font-display text-5xl sm:text-6xl text-ink leading-tight">
                All the Resources <br />
                <span className="italic font-garamond text-purple">You Need.</span>
              </h1>
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
                Access official dossiers, summit regulations, logistical schedules, the locked Core Challenge statement, and participate in the democratic voting archive.
              </p>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden border border-gold/40 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80"
                alt="Jaipuria Library and Archives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                  Archival Codex
                </span>
                <span className="font-display text-lg text-cream">
                  Official Summit Reference
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2: RESOURCE ARCHIVE (2-ROW, 3-COLUMN GRID) */}
      <section className="py-20 bg-cream-dark/60 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                02 — Official Publications
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
                Resource Dossiers
              </h2>
            </div>
            <p className="text-xs text-ink-muted mt-2 sm:mt-0 uppercase tracking-wider">
              6 Master Reference Volumes
            </p>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_RESOURCES.map((doc) => {
              const isLocked = doc.status === 'locked';
              return (
                <div
                  key={doc.id}
                  className={`p-6 sm:p-8 bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isLocked
                      ? 'border-purple/20 bg-purple-50/30'
                      : 'border-purple/10 hover:border-gold shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-gold-dark">
                        {doc.index}
                      </span>
                      {isLocked ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-purple/10 text-purple text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                          <Lock className="w-3 h-3 text-purple" />
                          <span>Embargoed</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Available</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl text-ink font-bold mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple/10 flex items-center justify-between">
                    <span className="text-[11px] text-ink-muted font-mono">
                      {doc.fileType} · {doc.fileSize}
                    </span>

                    {isLocked ? (
                      <button
                        onClick={() => setSelectedDocPreview(doc)}
                        className="text-xs font-semibold text-purple/70 hover:text-purple flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Inspect Condition</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedDocPreview(doc)}
                        className="px-3.5 py-1.5 bg-purple text-cream text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5 text-gold" />
                        <span>Download</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* SECTION 3: CORE CHALLENGE STATEMENT (LOCKED PREVIEW) */}
      <section className="py-20 bg-white border-b border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900 to-[#3B284B] text-cream border border-gold/40 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold/5 pointer-events-none"></div>

            <div className="max-w-2xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold text-gold text-xs font-semibold uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" />
                <span>Classified Thematic Mandate</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl text-cream font-bold">
                The Core Challenge Statement 2027
              </h2>

              <p className="text-sm sm:text-base text-cream/80 leading-relaxed">
                The thematic problem statement anchoring Phase II multilateral negotiation remains under strict secretarial embargo. It will be officially unsealed by the Secretariat during the Day 1 Closing Plenary.
              </p>

              <div className="p-4 rounded-xl bg-white/10 border border-gold/30 text-xs text-gold flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0" />
                <span>Unsealing Date & Time: 16 April 2027 at 18:00 IST in the Dr. S. Radhakrishnan Auditorium.</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: VOTE FOR WHAT MATTERS (STATEMENT ARCHIVE) */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                04 — Democratic Ratification
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
                Vote for What Matters
              </h2>
              <p className="text-sm text-ink-muted mt-2">
                The Youth Council Statement Archive. Review student policy theses and cast your verified vote.
              </p>
            </div>

            {/* Admin Voting Status Indicator */}
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <span className="text-xs text-ink-muted">Voting Status:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                votingOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
              }`}>
                {votingOpen ? '● Voting Active' : '● Voting Concluded'}
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search team code (e.g. YC-2701), school, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white rounded-full border border-purple/20 text-xs text-ink focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {/* Statements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStatements.map((stmt) => {
              const hasVoted = votedTeams.includes(stmt.code);
              return (
                <div
                  key={stmt.code}
                  className="p-6 sm:p-8 bg-white rounded-2xl border border-purple/10 hover:border-gold/60 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-purple text-gold font-mono text-xs font-bold tracking-wider">
                        {stmt.code}
                      </span>
                      <span className="text-xs text-ink-muted font-medium">
                        {stmt.schoolName} · {stmt.city}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-ink font-bold leading-tight mb-2">
                      {stmt.title}
                    </h3>

                    <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
                      {stmt.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {stmt.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-cream-dark text-purple text-[10px] font-semibold rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedStatement(stmt)}
                      className="text-xs font-semibold text-purple hover:underline"
                    >
                      Read Complete Thesis →
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-ink">
                        {stmt.votes} Votes
                      </span>
                      <button
                        onClick={() => handleVote(stmt.code)}
                        disabled={hasVoted}
                        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 ${
                          hasVoted
                            ? 'bg-emerald-600 text-white cursor-default'
                            : 'bg-purple text-gold hover:bg-purple-700 shadow-sm'
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{hasVoted ? 'Voted' : 'Vote'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* STATEMENT MODAL */}
      {selectedStatement && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 border border-gold/40 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedStatement(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-cream text-ink-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-purple text-gold font-mono text-xs font-bold">
                {selectedStatement.code}
              </span>
              <span className="text-xs text-ink-muted">
                {selectedStatement.schoolName} ({selectedStatement.city})
              </span>
            </div>

            <h2 className="font-display text-3xl text-ink font-bold mb-4 leading-tight">
              {selectedStatement.title}
            </h2>

            <div className="p-4 bg-cream-dark/60 border-l-2 border-gold rounded-r-lg font-garamond italic text-sm text-ink mb-6">
              "{selectedStatement.excerpt}"
            </div>

            <div className="text-sm text-ink-muted leading-relaxed space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-purple">
                Full Summit Policy Submission:
              </h4>
              <p className="whitespace-pre-line">
                {selectedStatement.fullStatement}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-purple/10 flex items-center justify-between">
              <span className="font-mono text-xs text-ink-muted">
                Current Verified Ballots: <strong className="text-purple">{selectedStatement.votes}</strong>
              </span>
              <button
                onClick={() => {
                  handleVote(selectedStatement.code);
                  setSelectedStatement(null);
                }}
                disabled={votedTeams.includes(selectedStatement.code)}
                className="px-5 py-2.5 bg-purple text-gold font-bold text-xs uppercase tracking-wider rounded-full shadow hover:bg-purple-700 transition-all flex items-center gap-2"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{votedTeams.includes(selectedStatement.code) ? 'Ballot Cast' : 'Vote For This Policy'}</span>
              </button>
            </div>
          </div>
        </div>
      )}


      {/* SECTION 5: INTERACTIVE SCHOOL CAMPUS MAP */}
      <section className="py-24 bg-cream-dark/60 border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              05 — Spatial Navigation
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
              Interactive Campus Schematics
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Explore key venues across our 10-acre campus. Click pins to reveal access routes and timings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Map Visual with Pins */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-xl relative overflow-hidden">
              <div className="relative w-full aspect-[16/10] bg-[#F5F0E8] rounded-2xl overflow-hidden border border-purple/10">
                {/* Stylized Architectural Campus Map Artwork */}
                <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
                <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-purple/10 rounded-2xl border border-purple/20 flex items-center justify-center font-display text-xs font-bold text-purple/40 uppercase">
                  Central Atrium
                </div>
                <div className="absolute bottom-6 right-8 w-1/4 h-1/4 bg-emerald-50 rounded-xl border border-emerald-200/50 flex items-center justify-center font-display text-[10px] text-emerald-800/40 uppercase">
                  South Lawns
                </div>

                {/* Plot Pins */}
                {CAMPUS_PINS.map((pin) => {
                  const isActive = activePin.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setActivePin(pin)}
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-transform duration-300 ${
                        isActive
                          ? 'bg-purple text-gold scale-125 shadow-xl ring-4 ring-gold/40 z-20'
                          : 'bg-white text-purple border border-purple/30 hover:scale-110 shadow-md z-10'
                      }`}
                      title={pin.name}
                    >
                      <MapPin className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-ink-muted">
                <span>Select a marker on the schematics to inspect operational details.</span>
              </div>
            </div>

            {/* Active Pin Details Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gold/40 shadow-xl space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                Venue Details
              </span>
              <h3 className="font-display text-2xl text-ink font-bold">
                {activePin.name}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {activePin.description}
              </p>
              
              <div className="p-3 bg-cream rounded-xl text-xs space-y-1.5 border border-purple/10">
                <div className="text-purple font-semibold">Operational Schedule:</div>
                <div className="text-ink-muted">{activePin.hours}</div>
              </div>

              <div className="p-3 bg-cream rounded-xl text-xs space-y-1.5 border border-purple/10">
                <div className="text-purple font-semibold">Wayfinding:</div>
                <div className="text-ink-muted">{activePin.directions}</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 6: LOCATION & DIRECTIONS */}
      <section className="py-20 bg-cream border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-purple">
            06 — Lucknow Host City
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-bold">
            Seth M.R. Jaipuria School, Gomti Nagar, Lucknow
          </h2>
          <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
            Vineet Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India. 25 minutes from Chaudhary Charan Singh International Airport (LKO).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://maps.google.com/?q=Seth+M.R.+Jaipuria+School+Gomti+Nagar+Lucknow"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-purple text-gold text-xs font-bold uppercase tracking-wider rounded-full hover:bg-purple-700 shadow flex items-center gap-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4 text-gold" />
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-purple text-purple text-xs font-bold uppercase tracking-wider rounded-full hover:bg-purple/5 transition-colors"
            >
              <span>Contact Secretariat</span>
            </button>
          </div>
        </div>
      </section>

      {/* DOCUMENT PREVIEW MODAL */}
      {selectedDocPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 border border-gold/40 shadow-2xl relative">
            <button
              onClick={() => setSelectedDocPreview(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-cream text-ink-muted"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-gold-dark font-bold">{selectedDocPreview.index}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-purple px-2 py-0.5 bg-purple/10 rounded">
                {selectedDocPreview.category}
              </span>
            </div>
            <h3 className="font-display text-2xl text-ink font-bold mb-2">
              {selectedDocPreview.title}
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed mb-4">
              {selectedDocPreview.description}
            </p>

            {selectedDocPreview.status === 'locked' ? (
              <div className="p-4 bg-purple-50 rounded-xl border border-purple/20 text-xs text-purple mb-4">
                <strong>Embargo Condition:</strong> {selectedDocPreview.lockedNote}
              </div>
            ) : (
              <div className="p-4 bg-cream rounded-xl text-xs text-ink-muted mb-4">
                Ready for download: <strong>{selectedDocPreview.fileType} ({selectedDocPreview.fileSize})</strong>
              </div>
            )}

            <button
              onClick={() => {
                if (selectedDocPreview.status === 'locked') {
                  showToast('Document remains under secretarial lock until Day 1.');
                } else {
                  showToast(`Downloading official file: ${selectedDocPreview.title}...`);
                }
                setSelectedDocPreview(null);
              }}
              className="w-full py-3 bg-purple text-gold font-bold text-xs uppercase tracking-wider rounded-xl shadow hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
            >
              {selectedDocPreview.status === 'locked' ? (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Acknowledge Embargo</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download File Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
