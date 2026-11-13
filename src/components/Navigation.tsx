import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
}

const NAV_ITEMS: NavItem[] = [
  { id: 'school', num: '01', label: 'Our school' },
  { id: 'council', num: '02', label: 'Youth council' },
  { id: 'resources', num: '03', label: 'Resources' },
  { id: 'sponsors', num: '04', label: 'Sponsors' },
  { id: 'team', num: '05', label: 'Our team' },
  { id: 'contact', num: '06', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleSelectPage = (id: PageId) => {
    onNavigate(id);
    setIsOverlayOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-[#f7f4ee] border-b border-[rgba(31,27,22,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-full flex items-center justify-between">
          
          {/* Logo & Wordmark */}
          <button
            onClick={() => handleSelectPage('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <img
              src="/assets/smrj-emblem.png"
              alt="SMRJ Youth Council"
              className="w-9 h-9 object-contain"
            />
            <span className="font-semibold text-base text-[#1f1b16] font-sans">
              SMRJ Youth Council
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5e554a]">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectPage(item.id)}
                    className={`relative h-8 flex items-center transition-colors hover:text-[#1f1b16] ${
                      isActive ? 'text-[#1f1b16]' : ''
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#edc868]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Primary Action Button */}
            <button
              onClick={() => handleSelectPage('register')}
              className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36]"
            >
              Register
            </button>

            {/* Mobile Menu Button - 44px tap target */}
            <button
              onClick={() => setIsOverlayOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-[8px] text-[#1f1b16] hover:bg-[#efe9df] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 z-50 bg-[#f7f4ee] flex flex-col justify-between p-6 sm:p-8 animate-fadeIn md:hidden">
          <div className="flex items-center justify-between pb-4 border-b border-[rgba(31,27,22,0.08)]">
            <button
              onClick={() => handleSelectPage('home')}
              className="flex items-center gap-3 text-left"
            >
              <img
                src="/assets/smrj-emblem.png"
                alt="SMRJ Youth Council"
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-base text-[#1f1b16]">
                SMRJ Youth Council
              </span>
            </button>
            <button
              onClick={() => setIsOverlayOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-[8px] text-[#1f1b16] hover:bg-[#efe9df]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 py-8">
            <button
              onClick={() => handleSelectPage('home')}
              className={`text-left text-2xl font-serif py-1 ${currentPage === 'home' ? 'text-[#1f1b16] font-semibold' : 'text-[#5e554a]'}`}
            >
              Home
            </button>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectPage(item.id)}
                className={`text-left text-2xl font-serif py-1 ${currentPage === item.id ? 'text-[#1f1b16] font-semibold' : 'text-[#5e554a]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[rgba(31,27,22,0.08)] space-y-4">
            <button
              onClick={() => handleSelectPage('register')}
              className="w-full h-11 flex items-center justify-center rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c]"
            >
              Register your school
            </button>
            <div className="flex items-center justify-between text-xs text-[#6f665a] font-mono">
              <span>16–17 April 2027</span>
              <span lang="sa" className="font-devanagari">वसुधैव कुटुम्बकम्</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
