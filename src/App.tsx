import React, { useState, useEffect } from 'react';
import { Navigation, PageId } from './components/Navigation';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { SchoolPage } from './pages/SchoolPage';
import { YouthCouncilPage } from './pages/YouthCouncilPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { RegisterPage } from './pages/RegisterPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync with URL Hash for shareable links and browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'school', 
        'council', 
        'resources', 
        'sponsors', 
        'team', 
        'contact', 
        'register'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'school':
        return <SchoolPage onNavigate={handleNavigate} />;
      case 'council':
        return <YouthCouncilPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'sponsors':
        return <SponsorsPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-body selection:bg-purple selection:text-gold relative selection:bg-purple/90 selection:text-gold">
      {/* Precision Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Navigation with Opaque Transition and Overlay */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Container with Curtain Fade Transition */}
      <main className={`flex-1 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      {/* Custom Identity Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
