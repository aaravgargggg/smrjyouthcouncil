import React from 'react';
import { PageId } from './Navigation';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#2a1b36] text-[#efe9de] border-t border-[rgba(239,233,222,0.12)]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[rgba(239,233,222,0.12)]">
          
          {/* Identity & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-sans font-semibold text-lg text-[#efe9de]">
                Youth Council 2027
              </span>
            </div>

            <div className="space-y-1">
              <div lang="sa" className="font-devanagari text-2xl text-[#edc868]">
                वसुधैव कुटुम्बकम्
              </div>
              <p className="text-sm text-[#b3aaa0]">
                The world is one family
              </p>
            </div>

            <p className="text-sm text-[#b3aaa0] leading-relaxed max-w-sm pt-2">
              Maiden edition of SMRJ Youth Council hosted by Seth M.R. Jaipuria School, Lucknow on 16–17 April 2027.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            
            {/* 1. Youth council */}
            <div className="space-y-3">
              <div className="text-[13px] font-medium text-[#b3aaa0]">
                Youth council
              </div>
              <ul className="space-y-2 text-[#efe9de]">
                <li>
                  <button
                    onClick={() => { onNavigate('council'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    About the council
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('sponsors'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Sponsors
                  </button>
                </li>
              </ul>
            </div>

            {/* 2. Information */}
            <div className="space-y-3">
              <div className="text-[13px] font-medium text-[#b3aaa0]">
                Information
              </div>
              <ul className="space-y-2 text-[#efe9de]">
                <li>
                  <button
                    onClick={() => { onNavigate('school'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Our school
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('team'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Our team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Brochure
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* 3. Participate */}
            <div className="space-y-3">
              <div className="text-[13px] font-medium text-[#b3aaa0]">
                Participate
              </div>
              <ul className="space-y-2 text-[#efe9de]">
                <li>
                  <button
                    onClick={() => { onNavigate('register'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="hover:text-[#edc868] transition-colors"
                  >
                    Register your school
                  </button>
                </li>
              </ul>
            </div>

            {/* 4. Hosted by */}
            <div className="space-y-3">
              <div className="text-[13px] font-medium text-[#b3aaa0]">
                Hosted by
              </div>
              <p className="text-sm text-[#efe9de]">
                Seth M.R. Jaipuria School
              </p>
              <div className="text-xs text-[#b3aaa0]">
                Lucknow, India
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Strip: Copyright & Social Channels */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#b3aaa0]">
          <div>
            © 2027 SMRJ Youth Council
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#efe9de] transition-colors">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#efe9de] transition-colors">
              YouTube
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#efe9de] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
