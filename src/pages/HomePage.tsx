import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navigation';
import { ABOUT_EVENT, COUNCIL_PHASES } from '../data/councilData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Live target date: 16 April 2027, 09:00 IST
  const targetTime = new Date('2027-04-16T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetTime - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen">
      
      {/* 1. HERO SECTION WITH PURPLE GRADIENT OVER REAL SCHOOL PHOTO */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden">
        {/* Authentic School Photo Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/school-building.png"
            alt="Seth M.R. Jaipuria School Campus"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Purple Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(42, 27, 54, 0.92) 0%, rgba(58, 33, 79, 0.86) 50%, rgba(30, 16, 42, 0.94) 100%)'
            }}
          />
        </div>

        {/* Top Folio Strip inside Hero */}
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 sm:px-8 pt-4">
          <div className="flex items-center justify-between text-xs text-white/80 font-mono tracking-wider border-b border-white/15 pb-3">
            <span>MAIDEN EDITION · NATIONAL YOUTH COUNCIL</span>
            <span>16–17 APRIL 2027 · LUCKNOW</span>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 sm:px-8 py-12 sm:py-16 my-auto">
          <div className="max-w-3xl space-y-6">
            {/* Sanskrit Motto */}
            <div lang="sa" className="font-devanagari text-2xl sm:text-3xl text-[#edc868] font-normal tracking-wide">
              वसुदेव कुटुम्बकम्
            </div>

            {/* Display Title */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.08] tracking-tight">
              SMRJ Youth Council 2027
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans max-w-xl font-normal">
              An inter-school council for Grades IX to XII, hosted by Seth M.R. Jaipuria School, Lucknow.
            </p>

            {/* Exactly two actions: primary gold and secondary outline */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onNavigate('register')}
                className="h-11 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white shadow-sm"
              >
                Register your school
              </button>

              <button
                onClick={() => onNavigate('resources')}
                className="h-11 px-6 rounded-[8px] border border-white/60 text-white font-medium text-sm hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Download brochure
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Folio Strip Inside Hero */}
        <div className="relative z-10 w-full border-t border-white/15 py-3">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between text-xs text-white/70 font-mono tracking-wider">
            <span>SETH M.R. JAIPURIA SCHOOL</span>
            <span lang="sa" className="font-devanagari text-white/80 font-normal">वसुदेव कुटुम्बकम्</span>
          </div>
        </div>
      </section>

      {/* 2. BROADSHEET FACTS STRIP (03 / Team, Teams of 3) */}
      <section className="bg-[#f7f4ee] border-b border-[rgba(31,27,22,0.08)] py-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-[rgba(31,27,22,0.08)]">
            
            {/* Venue */}
            <div className="space-y-1.5 md:pr-6">
              <span className="text-[11px] font-mono text-[#6f665a] uppercase tracking-widest block">
                01 / Venue
              </span>
              <div className="font-serif text-2xl text-[#1f1b16] font-normal">
                Seth M.R. Jaipuria School
              </div>
              <div className="text-sm text-[#5e554a]">
                Vineet Khand, Gomti Nagar, Lucknow
              </div>
            </div>

            {/* Date */}
            <div className="space-y-1.5 md:px-6">
              <span className="text-[11px] font-mono text-[#6f665a] uppercase tracking-widest block">
                02 / Dates
              </span>
              <div className="font-serif text-2xl text-[#1f1b16] tabular-nums font-normal">
                16–17 April 2027
              </div>
              <div className="text-sm text-[#5e554a]">
                Two-day national council sessions
              </div>
            </div>

            {/* Team */}
            <div className="space-y-1.5 md:pl-6">
              <span className="text-[11px] font-mono text-[#6f665a] uppercase tracking-widest block">
                03 / Team
              </span>
              <div className="font-serif text-2xl text-[#1f1b16] font-normal">
                A Team of 3
              </div>
              <div className="text-sm text-[#5e554a]">
                Participants from Classes IX–XII
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT THE EVENT (EXACT COPY PROVIDED BY USER) */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-10 flex items-center justify-between">
          <span className="font-mono text-xs text-[#6f665a] tracking-wider">
            § 01 · About the Event
          </span>
          <span className="text-xs font-mono text-[#6f665a]">01 / 03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f1b16] leading-[1.12] font-normal">
              Ideas, innovation and impact
            </h2>
            <div className="w-12 h-0.5 bg-[#edc868]" />
            <p className="font-serif text-lg text-[#1f1b16] leading-relaxed pt-2">
              {ABOUT_EVENT.closingBelief}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#5e554a] text-base leading-relaxed">
            <p className="text-lg text-[#1f1b16] font-serif leading-relaxed">
              {ABOUT_EVENT.paragraph1}
            </p>
            <p>
              {ABOUT_EVENT.paragraph2}
            </p>
            <p>
              {ABOUT_EVENT.paragraph3}
            </p>
            <p>
              {ABOUT_EVENT.paragraph4}
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMPETITION FORMAT (NO OUTCOMES BELOW BOXES) */}
      <section className="py-24 bg-[#fdfbf7] border-y border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-10 flex items-center justify-between">
            <span className="font-mono text-xs text-[#6f665a] tracking-wider">
              § 02 · Competition Format
            </span>
            <span className="text-xs font-mono text-[#6f665a]">02 / 03</span>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
              Structure & progression
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Phase I: Day 1 */}
            <div className="p-8 rounded-[12px] bg-[#f7f4ee] border border-[rgba(31,27,22,0.08)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#1f1b16] bg-[#efe9df] px-2.5 py-1 rounded-[4px]">
                  Phase I · Day 1
                </span>
                <span className="text-xs font-mono text-[#6f665a]">Conference</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1f1b16] font-normal pt-1">
                {COUNCIL_PHASES[0].title}
              </h3>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                {COUNCIL_PHASES[0].description}
              </p>
            </div>

            {/* Phase I: Day 2 */}
            <div className="p-8 rounded-[12px] bg-[#f7f4ee] border border-[rgba(31,27,22,0.08)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#1f1b16] bg-[#efe9df] px-2.5 py-1 rounded-[4px]">
                  Phase I · Day 2
                </span>
                <span className="text-xs font-mono text-[#6f665a]">Conference</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1f1b16] font-normal pt-1">
                {COUNCIL_PHASES[1].title}
              </h3>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                {COUNCIL_PHASES[1].description}
              </p>
            </div>

            {/* Phase II: Post-Conference */}
            <div className="p-8 rounded-[12px] bg-[#f7f4ee] border-2 border-[#edc868]/60 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#1f1b16] bg-[#edc868]/40 px-2.5 py-1 rounded-[4px]">
                  Phase II · 3 Months
                </span>
                <span className="text-xs font-mono text-[#6f665a]">Post-Conference</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1f1b16] font-normal pt-1">
                {COUNCIL_PHASES[2].title}
              </h3>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                {COUNCIL_PHASES[2].description}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. COUNTDOWN BAND (SEPARATED CARDS WITH LABELS ABOVE NUMBER, REGISTER BUTTON INCLUDED) */}
      <section className="py-20 bg-[#2a1b36] text-[#efe9de] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center space-y-10 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#edc868]">
              Countdown to SMRJ Youth Council
            </span>
            <h2 className="text-base sm:text-lg font-serif text-[#efe9de] font-normal">
              16–17 April 2027 · Seth M.R. Jaipuria School, Lucknow
            </h2>
          </div>

          {/* 4 Distinct Cards with Days, Hours, Minutes, Seconds written ABOVE number */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {/* Days Card */}
            <div className="p-6 rounded-[12px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#edc868] mb-2 font-medium">
                DAYS
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#efe9de] tabular-nums font-normal tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-[12px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#edc868] mb-2 font-medium">
                HOURS
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#efe9de] tabular-nums font-normal tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
            </div>

            {/* Minutes Card */}
            <div className="p-6 rounded-[12px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#edc868] mb-2 font-medium">
                MINUTES
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#efe9de] tabular-nums font-normal tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
            </div>

            {/* Seconds Card */}
            <div className="p-6 rounded-[12px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#edc868] mb-2 font-medium">
                SECONDS
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#efe9de] tabular-nums font-normal tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Registration Button Inside Countdown Section */}
          <div className="pt-4">
            <button
              onClick={() => onNavigate('register')}
              className="h-11 px-8 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white shadow-sm"
            >
              Register your school
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
