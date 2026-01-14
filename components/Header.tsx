import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-glass-border' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-white hover:text-accent transition-colors">
          HCP<span className="text-accent-secondary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="mailto:hcprajwal9901@gmail.com"
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-accent/20"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? <line x1="18" y1="6" x2="6" y2="18"></line> : <line x1="3" y1="12" x2="21" y2="12"></line>}
            {!isMobileMenuOpen && <line x1="3" y1="6" x2="21" y2="6"></line>}
            {!isMobileMenuOpen && <line x1="3" y1="18" x2="21" y2="18"></line>}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-b border-glass-border animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-text-secondary hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
