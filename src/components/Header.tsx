
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0F1C]/95 backdrop-blur-lg border-b border-[#1A2332]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="ml-2 text-xl font-bold text-white">Helix Terminal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#E2E8F0] hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-[#E2E8F0] hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-[#E2E8F0] hover:text-white transition-colors">Reviews</a>
            <Button 
              variant="outline" 
              className="btn-secondary border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white hover:border-[#0066CC]"
            >
              Sign In
            </Button>
            <Button className="btn-primary bg-[#0066CC] hover:bg-[#0052A3] text-white">
              Start Free Trial
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#2B7CE5] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1A2332] border-t border-[#243142] rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-[#E2E8F0] hover:text-white hover:bg-[#243142] rounded-md transition-colors">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-[#E2E8F0] hover:text-white hover:bg-[#243142] rounded-md transition-colors">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-[#E2E8F0] hover:text-white hover:bg-[#243142] rounded-md transition-colors">Reviews</a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  variant="outline" 
                  className="btn-secondary border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white"
                >
                  Sign In
                </Button>
                <Button className="btn-primary bg-[#0066CC] hover:bg-[#0052A3] text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
