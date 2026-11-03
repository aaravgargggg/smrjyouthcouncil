import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export type PageId = 
  | 'home' 
  | 'school' 
  | 'council' 
  | 'resources' 
  | 'sponsors' 
  | 'team' 
  | 'contact' 
  | 'register';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavItem {
  id: PageId;
  num: string;
  label: string;
  hindiLabel?: string;
  previewImage: string;
  description: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    num: '01',
    label: 'Home',
    previewImage: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=800&q=80',
    description: 'The Ascent of Ideas: The 3D monumental spiral staircase and summit prelude.'
  },
  {
    id: 'school',
    num: '02',
    label: 'Our School',
    hindiLabel: 'सेठ एम.आर. जयपुरिया',
    previewImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    description: 'A legacy of learning since 1992, World’s Top 10 recognition, and leadership messages.'
  },
  {
    id: 'council',
    num: '03',
    label: 'Youth Council',
    previewImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    description: 'Ideas Into Impact: Deliberation (Phase I) & Multilateral Collaboration (Phase II).'
  },
  {
    id: 'resources',
    num: '04',
    label: 'Resources',
    previewImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    description: 'Official dossiers, campus map, Core Challenge statement, and Team Statement Voting.'
  },
  {
    id: 'sponsors',
    num: '05',
    label: 'Sponsors',
    previewImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    description: 'Celebrating the visionary institutions supporting youth diplomacy and scholarship.'
  },
  {
    id: 'team',
    num: '06',
    label: 'Our Team',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Faculty Advisor, Summit Directors, and the 8-department student organising committee.'
  },
  {
    id: 'contact',
    num: '07',
    label: 'Contact',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Direct liaison for queries, registrations, travel, and institutional sponsorship.'
  },
  {
    id: 'register',
    num: '08',
    label: 'Register',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description: 'Three-stage school and 3-member delegate delegation application.'
  }
];

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavItem>(NAV_ITEMS[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPage = (id: PageId) => {
    onNavigate(id);
    setIsOverlayOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-purple/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleSelectPage('home')}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/60 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white">
              <img
                src="/assets/smrj-emblem.png"
                alt="SMRJ Youth Council 2027"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-widest text-purple uppercase">
                  SMRJ
                </span>
                <span className="text-[10px] text-gold font-semibold uppercase px-1.5 py-0.2 bg-purple rounded">
                  2027
                </span>
              </div>
              <div className="text-[11px] tracking-wide text-ink-muted">
                Youth Council · Jaipuria
              </div>
            </div>
          </button>

          {/* Center Date & Location Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-dark/60 border border-purple/10 text-[11px] font-medium text-ink-muted tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span>16—17 April 2027</span>
            <span className="text-purple/30">•</span>
            <span>Lucknow, India</span>
          </div>

          {/* Right Navigation & Trigger */}
          <div className="flex items-center gap-3">
            {/* Desktop Quick Nav Links */}
            <nav className="hidden md:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              {['home', 'school', 'council', 'resources', 'team'].map((key) => {
                const item = NAV_ITEMS.find((n) => n.id === key);
                if (!item) return null;
                const isActive = currentPage === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectPage(key as PageId)}
                    className={`relative py-1 transition-colors hover:text-purple ${
                      isActive ? 'text-purple' : ''
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Register CTA Pill */}
            <button
              onClick={() => handleSelectPage('register')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                currentPage === 'register'
                  ? 'bg-purple text-gold shadow-md'
                  : 'bg-purple text-cream hover:bg-purple-700 shadow hover:shadow-md'
              }`}
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </button>

            {/* Full-Screen Menu Overlay Button */}
            <button
              onClick={() => setIsOverlayOpen(true)}
              className="p-2 rounded-full border border-purple/20 text-purple hover:bg-purple hover:text-cream transition-colors duration-200"
              aria-label="Open Navigation Overlay"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Animated Full-Screen Navigation Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col justify-between animate-fadeIn">
          {/* Top Bar inside Overlay */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-purple/10">
            <div className="flex items-center gap-3">
              <img
                src="/assets/smrj-emblem.png"
                alt="SMRJ Logo"
                className="w-10 h-10 object-contain rounded-full border border-gold/50"
              />
              <div>
                <span className="font-bold text-sm tracking-widest text-purple uppercase">
                  SMRJ YOUTH COUNCIL 2027
                </span>
                <span className="block text-[11px] text-ink-muted font-devanagari">
                  वसुधैव कुटुम्बकम् · The World is One Family
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOverlayOpen(false)}
              className="p-2.5 rounded-full border border-purple/20 text-purple hover:bg-purple hover:text-cream transition-all duration-200"
              aria-label="Close Navigation Overlay"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Body: Split Editorial Nav */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Columns: Giant Numbered List */}
            <div className="lg:col-span-7 flex flex-col space-y-1 sm:space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setHoveredItem(item)}
                    onClick={() => handleSelectPage(item.id)}
                    className={`group flex items-baseline gap-4 sm:gap-8 py-1.5 sm:py-2 text-left transition-all duration-200 ${
                      isActive ? 'text-purple' : 'text-ink/80 hover:text-purple'
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-sm text-gold font-bold">
                      {item.num}
                    </span>
                    <span className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight transition-transform duration-300 group-hover:translate-x-3">
                      {item.label}
                    </span>
                    {item.hindiLabel && (
                      <span className="hidden sm:inline-block font-devanagari text-xs text-purple/60">
                        {item.hindiLabel}
                      </span>
                    )}
                    {isActive && (
                      <span className="text-xs font-sans uppercase font-bold text-gold tracking-widest ml-auto">
                        Current Page
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right 5 Columns: Dynamic Editorial Preview */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-center items-center p-6 border-l border-purple/10">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-gold/40 shadow-xl relative aspect-[4/3] bg-purple-900">
                <img
                  src={hoveredItem.previewImage}
                  alt={hoveredItem.label}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent flex flex-col justify-end p-6 text-cream">
                  <div className="text-gold font-mono text-xs uppercase tracking-widest mb-1">
                    Section {hoveredItem.num}
                  </div>
                  <h4 className="font-display text-2xl text-cream font-bold">
                    {hoveredItem.label}
                  </h4>
                  <p className="text-xs text-cream/80 mt-1 line-clamp-2">
                    {hoveredItem.description}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar inside Overlay */}
          <div className="border-t border-purple/10 py-4 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Maiden Edition · Seth M.R. Jaipuria School, Lucknow</span>
            </div>
            <div className="mt-2 sm:mt-0 font-devanagari text-purple">
              वसुधैव कुटुम्बकम्
            </div>
          </div>
        </div>
      )}
    </>
  );
};
