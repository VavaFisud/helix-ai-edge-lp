
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
      isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-[#0066CC]/20 shadow-2xl shadow-[#0066CC]/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Clean Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fcc2c656-66bd-402c-a0c7-67f47ff18ea6.png" 
              alt="Helix Terminal" 
              className="w-10 h-10"
            />
            <span className="ml-3 text-xl font-bold text-white">Helix Terminal</span>
          </div>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-[#0066CC] transition-all duration-300 relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-white hover:text-[#0066CC] transition-all duration-300 relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-white hover:text-[#0066CC] transition-all duration-300 relative group">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <Button 
                variant="outline" 
                className="relative border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all duration-300"
              >
                Sign In
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <Button className="relative bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#0066CC] transition-colors duration-300 p-2 rounded-lg hover:bg-[#0066CC]/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#0066CC]/20 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-white hover:text-[#0066CC] hover:bg-[#0066CC]/10 rounded-md transition-colors duration-300">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-white hover:text-[#0066CC] hover:bg-[#0066CC]/10 rounded-md transition-colors duration-300">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-white hover:text-[#0066CC] hover:bg-[#0066CC]/10 rounded-md transition-colors duration-300">Reviews</a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  variant="outline" 
                  className="w-full border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all duration-300"
                >
                  Sign In
                </Button>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                  <Button className="relative w-full bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white transition-all duration-300">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
