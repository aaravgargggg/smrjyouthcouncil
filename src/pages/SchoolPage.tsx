import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { 
  SCHOOL_STATS, 
  SCHOOL_STORY,
  SRI_AUROBINDO_QUOTE,
  TOP_10_RANKING,
  SCHOOL_VISION,
  LEADERSHIP_PROFILES, 
  CAMPUS_GALLERY
} from '../data/schoolData';
import { X } from 'lucide-react';

interface SchoolPageProps {
  onNavigate: (page: PageId) => void;
}

export const SchoolPage: React.FC<SchoolPageProps> = ({ onNavigate }) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24 text-[#1f1b16]">
      
      {/* 1. HERITAGE & SCHOOL STORY */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] tracking-wider uppercase">
            01 · Heritage
          </span>
        </div>

        <div className="max-w-3xl mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1b16] font-normal leading-[1.1] tracking-tight">
            A Legacy of Learning
          </h1>
        </div>

        {/* Real campus photo in true color */}
        <div className="w-full aspect-[16/9] rounded-[16px] overflow-hidden border border-[rgba(31,27,22,0.08)] shadow-sm mb-12 bg-[#efe9df]">
          <img
            src="/assets/school-building.png"
            alt="Seth M.R. Jaipuria School campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Full-width Sri Aurobindo Quote */}
        <div className="my-12 p-8 sm:p-10 bg-[#fdfbf7] rounded-[12px] border-l-4 border-l-[#edc868] border border-[rgba(31,27,22,0.08)]">
          <p className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal leading-relaxed">
            “{SRI_AUROBINDO_QUOTE.text}”
          </p>
          <div className="mt-4 text-sm font-sans text-[#6f665a] font-medium">
            — {SRI_AUROBINDO_QUOTE.author}
          </div>
        </div>

        {/* 5-Paragraph School Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-[#3d362e] text-base sm:text-[17px] leading-relaxed pt-2">
          <div className="lg:col-span-6 space-y-6">
            <p>
              {SCHOOL_STORY.paragraphs[0]}
            </p>
            <p>
              {SCHOOL_STORY.paragraphs[1]}
            </p>
            <p>
              {SCHOOL_STORY.paragraphs[2]}
            </p>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <p>
              {SCHOOL_STORY.paragraphs[3]}
            </p>
            <p>
              {SCHOOL_STORY.paragraphs[4]}
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS BOXES ONLY (No 'School facts' text, no 'Vineet Khand gn' on left) */}
      <section className="py-16 bg-[#fdfbf7] border-y border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SCHOOL_STATS.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-[10px] bg-[#f7f4ee]/60 border border-[rgba(31,27,22,0.06)] space-y-1">
                <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider block">
                  {stat.label}
                </span>
                <div className="font-serif text-2xl sm:text-3xl text-[#1f1b16] tabular-nums font-normal">
                  {stat.value}
                </div>
                <p className="text-xs text-[#5e554a] leading-normal pt-1">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORLD'S TOP 10 SCHOOLS */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            02 · Recognition
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#fdfbf7] p-8 sm:p-12 rounded-[16px] border border-[rgba(31,27,22,0.08)] shadow-sm">
          {/* Top 10 Poster Image */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => setActiveLightboxImage(TOP_10_RANKING.posterImage)}
              className="w-full aspect-[4/5] rounded-[12px] overflow-hidden border border-[rgba(31,27,22,0.12)] cursor-pointer group bg-[#f3ede2]"
            >
              <img
                src={TOP_10_RANKING.posterImage}
                alt="Seth M.R. Jaipuria School - World's Top 10 Schools"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3 text-xs font-mono text-[#6f665a] text-center">
              Click to view poster
            </div>
          </div>

          {/* Top 10 Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal leading-tight">
              {TOP_10_RANKING.title}
            </h2>

            <div className="space-y-4 text-base text-[#3d362e] leading-relaxed">
              {TOP_10_RANKING.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VISION (No globe line, exactly the content given) */}
      <section className="py-20 bg-[#fdfbf7] border-y border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
            <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
              03 · Vision
            </span>
          </div>

          <div className="w-full space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
              Our Vision
            </h2>
            <div lang="sa" className="font-devanagari text-4xl sm:text-5xl text-[#2a1b36] font-normal">
              “{SCHOOL_VISION.motto}”
            </div>
            <p className="text-base sm:text-[18px] text-[#3d362e] leading-relaxed pt-2 w-full">
              {SCHOOL_VISION.description}
            </p>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP MESSAGES */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
            04 · Leadership Messages
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
            Leadership Messages
          </h2>
        </div>

        {/* 4 Leadership Entries */}
        <div className="divide-y divide-[rgba(31,27,22,0.08)] border-y border-[rgba(31,27,22,0.08)]">
          {LEADERSHIP_PROFILES.map((leader) => (
            <div key={leader.id} className="py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Authentic Portrait Image */}
                <div className="md:col-span-3 sm:w-48 md:w-full">
                  <div 
                    onClick={() => setActiveLightboxImage(leader.image)}
                    className="aspect-[3/4] rounded-[10px] overflow-hidden border border-[rgba(31,27,22,0.12)] bg-[#efe9df] shadow-sm cursor-pointer group"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Details & Quote/Message */}
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6f665a] mb-1">
                      {leader.sectionTitle || leader.role}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                      {leader.name}
                    </h3>
                  </div>

                  {leader.quote && (
                    <blockquote className="font-serif text-xl sm:text-2xl text-[#1f1b16] leading-relaxed italic border-l-2 border-[#edc868] pl-4 my-3">
                      “{leader.quote}”
                    </blockquote>
                  )}

                  {leader.message && (
                    <p className="text-sm font-mono text-[#6f665a] italic">
                      {leader.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR CAMPUS */}
      <section className="py-20 bg-[#fdfbf7] border-t border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
            <span className="font-mono text-xs text-[#6f665a] uppercase tracking-wider">
              05 · Campus
            </span>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
              Our campus
            </h2>
          </div>

          {/* 5 campus images with first spanning 2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* First image spans 2 columns */}
            <div
              onClick={() => setActiveLightboxImage(CAMPUS_GALLERY[0].image)}
              className="lg:col-span-2 cursor-pointer group"
            >
              <div className="aspect-[3/2] rounded-[12px] overflow-hidden border border-[rgba(31,27,22,0.08)] bg-[#efe9df]">
                <img
                  src={CAMPUS_GALLERY[0].image}
                  alt={CAMPUS_GALLERY[0].title}
                  className="w-full h-full object-cover transition-opacity duration-150 group-hover:opacity-95"
                />
              </div>
              <div className="mt-2 text-sm text-[#1f1b16] font-sans font-medium">
                {CAMPUS_GALLERY[0].title}
              </div>
            </div>

            {/* Remaining 4 images in 1 column each on lg */}
            {CAMPUS_GALLERY.slice(1).map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(item.image)}
                className="cursor-pointer group"
              >
                <div className="aspect-[3/2] rounded-[12px] overflow-hidden border border-[rgba(31,27,22,0.08)] bg-[#efe9df]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-opacity duration-150 group-hover:opacity-95"
                  />
                </div>
                <div className="mt-2 text-sm text-[#1f1b16] font-sans font-medium">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-[8px] bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl max-h-[85vh] rounded-[12px] overflow-hidden shadow-2xl">
            <img
              src={activeLightboxImage}
              alt="Enlarged View"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* 7. REGISTRATION CALL TO ACTION */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-8 border-t border-[rgba(31,27,22,0.08)] text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal">
            Register your school
          </h2>
          <p className="text-sm sm:text-base text-[#5e554a]">
            Each school participates with a team of three members from Classes IX–XII.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('register')}
              className="h-11 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36] shadow-sm"
            >
              Register your school
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
