import React from 'react';
import { PageId } from './Navigation';
import { ArrowUpRight, Globe, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#2A1B36] text-cream overflow-hidden border-t border-gold/30">
      {/* Decorative Gold Spiral Motif across footer header */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
      
      {/* Background Architectural Watermark */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-gold/10 pointer-events-none"></div>
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border border-gold/15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Identity Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Logo & Core Sanskrit Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/60 p-0.5 bg-white shadow-md">
                <img
                  src="/assets/smrj-emblem.png"
                  alt="SMRJ Youth Council"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-cream font-bold">
                  SMRJ YOUTH COUNCIL 2027
                </h3>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  The Ascent of Ideas
                </span>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="font-devanagari text-2xl text-gold-light tracking-wide">
                वसुधैव कुटुम्बकम्
              </div>
              <p className="text-sm text-cream/70 italic font-garamond">
                "The World is One Family."
              </p>
            </div>

            <p className="text-xs text-cream/70 leading-relaxed max-w-md pt-2">
              Maiden Edition of the international youth leadership summit hosted by Seth M.R. Jaipuria School, Gomti Nagar, Lucknow on 16th and 17th April, 2027.
            </p>
          </div>

          {/* Quick Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Col 1: Youth Council */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase font-bold tracking-widest text-gold">
                Youth Council
              </div>
              <ul className="space-y-2 text-xs text-cream/80">
                <li>
                  <button
                    onClick={() => { onNavigate('council'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    About the Council
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    Resources & Archive
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('sponsors'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    Sponsors & Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    Vote for Statements
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Institutional */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase font-bold tracking-widest text-gold">
                Information
              </div>
              <ul className="space-y-2 text-xs text-cream/80">
                <li>
                  <button
                    onClick={() => { onNavigate('school'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    Our School
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-gold transition-colors"
                  >
                    Contact & Venue
                  </button>
                </li>
                <li>
                  <a
                    href="https://jaipuriaschools.ac.in"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold transition-colors flex items-center gap-1"
                  >
                    <span>Jaipuria Institutional</span>
                    <ArrowUpRight className="w-3 h-3 text-gold" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Actions */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <div className="text-[11px] uppercase font-bold tracking-widest text-gold">
                Participate
              </div>
              <p className="text-xs text-cream/70">
                School delegations (3 participants, Grades IX—XII).
              </p>
              <button
                onClick={() => { onNavigate('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full mt-2 px-4 py-2.5 bg-gold text-[#2A1B36] font-semibold text-xs rounded-lg hover:bg-gold-light transition-all flex items-center justify-center gap-1.5 shadow"
              >
                <span>Register Delegation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <div className="flex items-center gap-2">
            <span>© 2027 SMRJ Youth Council. Hosted by Seth M.R. Jaipuria School.</span>
          </div>

          <div className="flex items-center gap-6 text-cream/80">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
