import React from 'react';
import { PageId } from '../components/Navigation';
import { 
  TEACHER_COORDINATOR, 
  DIRECTORS, 
  ORGANISING_COMMITTEE_DEPARTMENTS, 
} from '../data/teamData';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = () => {
  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24 text-[#1f1b16]">
      
      {/* 1. HEADER */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            01 · Leadership
          </span>
        </div>

        <div className="max-w-3xl space-y-3 mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1b16] font-normal leading-[1.1] tracking-tight">
            Our Team
          </h1>
          <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed">
            The faculty guidance, student leadership and organising committee for SMRJ Youth Council 2027.
          </p>
        </div>
      </section>

      {/* 2. TEACHER COORDINATOR’S MESSAGE */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="p-8 sm:p-10 rounded-[16px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Photo Placeholder */}
            <div className="md:col-span-3 sm:w-44 md:w-full">
              <div className="aspect-[3/4] rounded-[10px] border border-dashed border-[rgba(31,27,22,0.25)] bg-[#efe9df] flex flex-col items-center justify-center p-4 text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6f665a] font-semibold">
                  PHOTO
                </span>
                <span className="font-mono text-[10px] text-[#6f665a]/70 mt-1">
                  Teacher Coordinator
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-9 space-y-2">
              <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider block">
                Teacher Coordinator
              </span>
              <div className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
                {TEACHER_COORDINATOR.name}
              </div>
              <p className="text-base text-[#6f665a] font-mono italic pt-3">
                {TEACHER_COORDINATOR.message}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DIRECTORS (Heading: Directors, No contact no on pic cards, Space for Directors' Message) */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            Directors
          </span>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Director 1 */}
            <div className="p-8 rounded-[14px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] shadow-sm flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-36 shrink-0">
                <div className="aspect-[3/4] rounded-[8px] border border-dashed border-[rgba(31,27,22,0.25)] bg-[#efe9df] flex flex-col items-center justify-center p-3 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#6f665a] font-semibold">
                    PHOTO
                  </span>
                  <span className="font-mono text-[10px] text-[#6f665a]/70 mt-1">
                    Director
                  </span>
                </div>
              </div>
              <div className="space-y-2 flex-1 pt-1">
                <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider block">
                  Director
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                  {DIRECTORS.director1.name}
                </h3>
              </div>
            </div>

            {/* Director 2 */}
            <div className="p-8 rounded-[14px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] shadow-sm flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-36 shrink-0">
                <div className="aspect-[3/4] rounded-[8px] border border-dashed border-[rgba(31,27,22,0.25)] bg-[#efe9df] flex flex-col items-center justify-center p-3 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#6f665a] font-semibold">
                    PHOTO
                  </span>
                  <span className="font-mono text-[10px] text-[#6f665a]/70 mt-1">
                    Director
                  </span>
                </div>
              </div>
              <div className="space-y-2 flex-1 pt-1">
                <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider block">
                  Director
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                  {DIRECTORS.director2.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Space for Directors' Message */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] shadow-sm space-y-3">
            <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider block">
              Directors’ Message
            </span>
            <p className="text-base text-[#6f665a] font-mono italic">
              {DIRECTORS.message}
            </p>
          </div>
        </div>
      </section>

      {/* 4. ORGANISING COMMITTEE HEADS (EXTENDS ACROSS ENTIRE HORIZONTAL CONTAINER) */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            02 · Organising Committee Heads
          </span>
        </div>

        <div className="space-y-12 w-full">
          {ORGANISING_COMMITTEE_DEPARTMENTS.map((dept) => {
            const cleanTitle = dept.name
              .replace(/ Heads$/i, ' Heads')
              .replace(/^Administrative and Public Relations/i, 'Administrative and Public Relations')
              .replace(/^Tech and Media/i, 'Tech and Media');

            return (
              <div key={dept.id} className="pt-8 border-t border-[rgba(31,27,22,0.08)] w-full">
                <div className="mb-6 flex items-baseline justify-between w-full">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                    {cleanTitle}
                  </h3>
                  <span className="font-mono text-xs text-[#6f665a]">
                    Dept {dept.index}
                  </span>
                </div>

                {/* 2-Column Full Width Grid: Each card takes 50% width, stretching across the entire container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {dept.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[12px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] shadow-sm flex flex-col sm:flex-row gap-6 items-center w-full hover:border-[rgba(31,27,22,0.18)] transition-all"
                    >
                      {/* Photo Placeholder */}
                      <div className="w-28 sm:w-32 shrink-0">
                        <div className="aspect-[3/4] w-full rounded-[8px] border border-dashed border-[rgba(31,27,22,0.25)] bg-[#efe9df] flex items-center justify-center p-3 text-center">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#6f665a] font-semibold">
                            PHOTO
                          </span>
                        </div>
                      </div>

                      {/* Member Info - Only Name */}
                      <div className="flex-1">
                        <h4 className="font-serif text-2xl text-[#1f1b16] font-normal">
                          {member.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
