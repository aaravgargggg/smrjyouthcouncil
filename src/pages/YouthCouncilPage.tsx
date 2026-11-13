import React from 'react';
import { PageId } from '../components/Navigation';
import { ELIGIBILITY_CRITERIA, EVENT_DETAILS } from '../data/councilData';

interface YouthCouncilPageProps {
  onNavigate: (page: PageId) => void;
}

export const YouthCouncilPage: React.FC<YouthCouncilPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24 text-[#1f1b16]">
      
      {/* 1. CONCEPT & INTRODUCTION (No pic below) */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            01 · Concept & Purpose
          </span>
        </div>

        <div className="max-w-4xl space-y-4 mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1b16] font-normal leading-[1.1] tracking-tight">
            Ideas Into Impact
          </h1>
          <p className="text-lg sm:text-xl text-[#5e554a] font-sans leading-relaxed">
            A space for young leaders to consciously collaborate, challenge perspectives and create lasting change.
          </p>
        </div>

        {/* About Youth Council narrative */}
        <div className="pt-6 border-t border-[rgba(31,27,22,0.08)]">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider block mb-2">
              About the Council
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-[#3d362e] text-base sm:text-[17px] leading-relaxed">
            <div className="lg:col-span-6 space-y-6">
              <p>
                The SMRJ Youth Council is a national student-led initiative by Seth M.R. Jaipuria School, Lucknow, envisioned to bring together young minds from across the country on a common platform of ideas, innovation and impact.
              </p>
              <p>
                At a time when the world faces complex social, environmental, economic and technological challenges, the Council seeks to empower students to look beyond their immediate surroundings, recognise issues that shape communities and explore ways to bring about meaningful change.
              </p>
              <p>
                Through a two-day national council, students from Classes IX–XII will come together, representing diverse regions, experiences and perspectives. The initiative is built around a simple yet powerful idea: every community has challenges worth addressing, and every young mind has the potential to contribute towards solving them with practical solutions.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p>
                More than an event, SMRJ Youth Council is an opportunity to connect perspectives, cultivate leadership, encourage innovation and inspire action. It aims to create a generation that does not simply recognise the challenges around them, but takes the initiative to address and solve them.
              </p>
              <div className="p-6 bg-[#fdfbf7] rounded-[12px] border-l-4 border-l-[#edc868] border border-[rgba(31,27,22,0.08)]">
                <p className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-normal leading-relaxed italic">
                  “Because meaningful change begins when young minds come together with the courage to imagine a better tomorrow and the determination to build it.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE ELIGIBILITY / STRUCTURE CARDS */}
      <section className="py-16 bg-[#fdfbf7] border-y border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 rounded-[12px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] space-y-3">
              <span className="font-serif text-4xl text-[#1f1b16] font-normal block tabular-nums">
                03
              </span>
              <h3 className="font-serif text-xl text-[#1f1b16] font-normal">
                Participants Per Team
              </h3>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                {ELIGIBILITY_CRITERIA.description}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-[12px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] space-y-3">
              <span className="font-serif text-4xl text-[#1f1b16] font-normal block">
                IX–XII
              </span>
              <h3 className="font-serif text-xl text-[#1f1b16] font-normal">
                Eligible Classes
              </h3>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                {ELIGIBILITY_CRITERIA.gradeSpan}. Students must be currently enrolled in secondary or senior secondary grades.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-[12px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] space-y-3">
              <span className="font-serif text-4xl text-[#1f1b16] font-normal block tabular-nums">
                01
              </span>
              <h3 className="font-serif text-xl text-[#1f1b16] font-normal">
                School Team
              </h3>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                All 3 participants must be enrolled in the same educational institution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE TWO PHASES */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            02 · Competition Format
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
            The Two Phases
          </h2>
        </div>

        <div className="space-y-8">
          {/* PHASE I: 2 Days On-Campus */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[rgba(31,27,22,0.08)] pb-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                PHASE I: The Conference (16–17 April 2027)
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-[#6f665a]">
                On Campus · Seth M.R. Jaipuria School
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* Day 1 */}
              <div className="space-y-3 p-6 rounded-[10px] bg-[#f7f4ee]/70 border border-[rgba(31,27,22,0.06)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2a1b36] font-semibold block">
                  Day 1 · Identifying the Challenge
                </span>
                <p className="text-sm text-[#3d362e] leading-relaxed">
                  Participating schools, each represented by a team of three students from Classes IX–XII, present a research-backed Regional Problem Brief highlighting a significant issue in their respective regions. Through expert panel interactions and critical questioning, teams examine the problem, identify its root causes and consolidate their findings into a focused Core Challenge Statement.
                </p>
              </div>

              {/* Day 2 */}
              <div className="space-y-3 p-6 rounded-[10px] bg-[#f7f4ee]/70 border border-[rgba(31,27,22,0.06)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2a1b36] font-semibold block">
                  Day 2 · From Challenge to Solution
                </span>
                <p className="text-sm text-[#3d362e] leading-relaxed">
                  Teams draw lots to receive their assigned Core Challenge Statements and are given dedicated research time to develop practical, impactful solutions. They subsequently present their proposals before an expert jury for evaluation. The day concludes with a cultural exchange programme and closing ceremony, marking the transition towards the three-month Implementation Challenge.
                </p>
              </div>
            </div>
          </div>

          {/* PHASE II: Post-Conference */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-[#fdfbf7] border border-[rgba(31,27,22,0.08)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[rgba(31,27,22,0.08)] pb-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                PHASE II: Post-Conference
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-[#2a1b36] font-semibold">
                ✦ Impact in Action Award
              </span>
            </div>

            <div className="pt-2 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6f665a] block">
                The Three-Month Implementation Challenge
              </span>
              <p className="text-base text-[#3d362e] leading-relaxed">
                The Council extends beyond the conference through a three-month implementation journey. Teams execute their proposed solutions through structured action plans, document progress and demonstrate measurable impact. At the conclusion, initiatives are evaluated, with the most effective implementation recognised through the prestigious Impact in Action Award.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION (Exact content as put in doc) */}
      <section className="py-20 bg-[#fdfbf7] border-y border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
            <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
              03 · Vision
            </span>
          </div>

          <div className="w-full space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
              Vision
            </h2>
            <p className="text-base sm:text-[18px] text-[#3d362e] leading-relaxed w-full">
              Our vision is inspired by the timeless Indian philosophy of “वसुदेव कुटुम्बकम्” - the world is one family. We seek to foster a generation that rises above geographical and cultural boundaries, values the richness of diverse perspectives and recognises the possibilities that emerge through collective effort. We believe that meaningful progress begins with a shared sense of purpose, mutual respect and a commitment to the greater good. Through SMRJ Youth Council, we aim to bring young minds together to understand the pressing concerns of our times, exchange ideas and work towards thoughtful, actionable solutions. We envision a future built on unity, empathy and collective responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CALL TO ACTION */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
            Participate in SMRJ Youth Council 2027
          </h2>
          <p className="text-sm sm:text-base text-[#5e554a]">
            {EVENT_DETAILS.dates} · {EVENT_DETAILS.venue}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('register')}
              className="h-11 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36] shadow-sm"
            >
              Register your school
            </button>
            <button
              onClick={() => onNavigate('resources')}
              className="h-11 px-6 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-[#1f1b16] font-medium text-sm hover:bg-[#efe9df] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36]"
            >
              Download resources
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
