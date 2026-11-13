import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { RESOURCE_BOXES, TEAM_STATEMENTS_DATA, TeamStatementItem } from '../data/resourcesData';
import { 
  Download, 
  Lock, 
  Search, 
  ThumbsUp, 
  X,
  Check,
  FileText,
  MapPin
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatement, setSelectedStatement] = useState<TeamStatementItem | null>(null);
  const [votedTeams, setVotedTeams] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('smrj_voted_teams') || '[]');
    } catch {
      return [];
    }
  });
  const [statements, setStatements] = useState<TeamStatementItem[]>(TEAM_STATEMENTS_DATA);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleVote = (code: string) => {
    if (votedTeams.includes(code)) {
      showToast('You have already cast a vote for this team.');
      return;
    }

    const updatedVoted = [...votedTeams, code];
    setVotedTeams(updatedVoted);
    localStorage.setItem('smrj_voted_teams', JSON.stringify(updatedVoted));

    setStatements((prev) =>
      prev.map((s) => (s.code === code ? { ...s, votes: s.votes + 1 } : s))
    );

    showToast(`Vote recorded for team ${code}.`);
  };

  const filteredStatements = statements.filter(
    (s) =>
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const maxVotes = Math.max(...statements.map(s => s.votes), 1);

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24 text-[#1f1b16]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2a1b36] text-[#efe9de] px-4 py-3 rounded-[8px] border border-[rgba(239,233,222,0.2)] shadow-float flex items-center gap-2 animate-fadeIn text-sm font-sans">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. HEADER & BOXES */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            01 · Council Documents & Resources
          </span>
        </div>

        <div className="max-w-3xl space-y-3 mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1b16] font-normal leading-[1.1] tracking-tight">
            All the Resources You Need
          </h1>
          <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed">
            All official documents, brochure, core challenge statements, campus/venue information & more.
          </p>
        </div>

        {/* BOXES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCE_BOXES.map((box, idx) => (
            <div
              key={box.id}
              className="p-7 rounded-[12px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] flex flex-col justify-between space-y-5 transition-shadow hover:shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#6f665a] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-[4px] ${
                    box.isAvailable 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : 'bg-[#efe9df] text-[#6f665a]'
                  }`}>
                    {box.statusText}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#1f1b16] font-normal">
                  {box.title}
                </h3>
                <p className="text-sm text-[#5e554a] leading-relaxed">
                  {box.description}
                </p>
              </div>

              <div>
                {box.isAvailable ? (
                  <button
                    onClick={() => showToast(`Opening ${box.title}...`)}
                    className="h-9 px-4 rounded-[8px] bg-[#edc868] text-[#1f1b16] text-xs font-medium hover:bg-[#e2bc5c] transition-colors inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View & Download</span>
                  </button>
                ) : (
                  <div className="h-9 px-3 rounded-[8px] border border-[rgba(31,27,22,0.12)] text-[#6f665a] text-xs font-mono inline-flex items-center gap-2 bg-[#efe9df]/40">
                    <Lock className="w-3.5 h-3.5 opacity-60" />
                    <span>To be given later</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. VOTE FOR WHAT MATTERS */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            02 · Community Deliberation
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
              Vote for what Matters
            </h2>
            <p className="text-sm sm:text-base text-[#5e554a]">
              Cast your vote for the issue that matters.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#6f665a] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search code, title or school..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-3 rounded-[8px] border border-[rgba(31,27,22,0.32)] bg-[#fdfbf7] text-sm text-[#1f1b16] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
            />
          </div>
        </div>

        {/* List without public vote counts */}
        <div className="divide-y divide-[rgba(31,27,22,0.08)] border-y border-[rgba(31,27,22,0.08)]">
          {filteredStatements.map((stmt) => {
            const hasVoted = votedTeams.includes(stmt.code);

            return (
              <div
                key={stmt.code}
                className="py-5 sm:min-h-[76px] flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-colors hover:bg-[#efe9df]/30 px-3 rounded-[6px]"
              >
                {/* Left & Middle */}
                <div className="flex items-start gap-4 sm:gap-6 flex-1">
                  <span className="font-mono text-xs text-[#6f665a] tabular-nums pt-1 w-16">
                    {stmt.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-serif text-xl text-[#1f1b16] font-normal">
                      {stmt.title}
                    </h3>
                    <p className="text-sm text-[#5e554a] leading-relaxed max-w-2xl">
                      {stmt.statement}
                    </p>
                    <div className="text-xs text-[#6f665a] font-mono">
                      {stmt.schoolName}, {stmt.city}
                    </div>
                  </div>
                </div>

                {/* Right: Only the Option to Vote (Vote counts hidden from public) */}
                <div className="flex items-center gap-5 shrink-0 self-end lg:self-center pt-2 lg:pt-0">
                  <button
                    onClick={() => handleVote(stmt.code)}
                    disabled={hasVoted}
                    className={`h-9 px-4 rounded-[8px] text-xs font-medium transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36] ${
                      hasVoted
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 cursor-default'
                        : 'border border-[rgba(31,27,22,0.32)] text-[#1f1b16] hover:bg-[#efe9df]'
                    }`}
                  >
                    {hasVoted ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Voted</span>
                      </>
                    ) : (
                      <>
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Vote</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
