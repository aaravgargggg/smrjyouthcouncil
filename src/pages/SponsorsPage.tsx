import React from 'react';
import { PageId } from '../components/Navigation';
import { SPONSORS } from '../data/sponsorsData';

interface SponsorsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SponsorsPage: React.FC<SponsorsPageProps> = () => {
  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24 text-[#1f1b16]">
      
      {/* 1. HEADER (Capital P in Partners) */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            01 · Partners
          </span>
        </div>

        <div className="max-w-3xl space-y-3 mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1b16] font-normal leading-[1.1] tracking-tight">
            Sponsors and Partners
          </h1>
          <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed">
            Organisations supporting the maiden edition of SMRJ Youth Council 2027.
          </p>
        </div>

        {/* 2. UNIFIED SPONSORS GRID (NOT SEGREGATED, JUST LOGO & NAME) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="p-6 rounded-[12px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] shadow-sm flex flex-col justify-between items-center text-center space-y-4 hover:border-[rgba(31,27,22,0.18)] transition-all"
            >
              {/* Space for Logo */}
              <div className="w-full aspect-[16/9] rounded-[8px] bg-[#efe9df]/70 border border-[rgba(31,27,22,0.08)] flex items-center justify-center p-4">
                <span className="font-serif text-2xl font-bold text-[#2a1b36] tracking-wide">
                  {sponsor.logo}
                </span>
              </div>

              {/* Sponsor Name */}
              <div className="w-full pt-1">
                <h3 className="font-sans font-semibold text-base text-[#1f1b16]">
                  {sponsor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACKNOWLEDGEMENT */}
      <section className="py-16 max-w-[1200px] mx-auto px-6 sm:px-8 border-t border-[rgba(31,27,22,0.08)]">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
            Acknowledgement
          </h2>
          <p className="font-serif text-xl text-[#1f1b16] leading-relaxed">
            We extend our gratitude to the organisations supporting SMRJ Youth Council 2027 and assisting student delegates in collaborative debate and inquiry.
          </p>
          <div className="text-sm font-sans text-[#6f665a]">
            — The Organising Committee
          </div>
        </div>
      </section>

    </div>
  );
};
