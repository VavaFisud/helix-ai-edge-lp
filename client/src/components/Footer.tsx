
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '#' },
      { name: 'Integrations', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Community', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332] border-t border-[#0066CC]/20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-3xl animate-float animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-[#0066CC]/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow"></div>
                  <img 
                    src="/helix-logo.svg" 
                    alt="Helix Terminal" 
                    className="relative w-10 h-10 animate-glow"
                  />
                </div>
                <span className="ml-3 text-2xl font-bold text-white group-hover:text-[#E2E8F0] transition-colors duration-300 animate-glow">Helix Terminal</span>
              </div>
              <p className="text-[#E2E8F0] leading-relaxed mb-6 max-w-md animate-glow">
                The first collaborative forex terminal that learns from your trading insights 
                to deliver unmatched fundamental analysis accuracy.
              </p>
              
              {/* Enhanced Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center text-[#10B981] text-sm group animate-glow">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#10B981]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Bank-Grade Security & SOC 2 Compliant
                </div>
                <div className="flex items-center text-[#0066CC] text-sm group animate-glow">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#0066CC]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Trusted by 2,500+ Professional Traders
                </div>
                <div className="flex items-center text-[#8B5CF6] text-sm group animate-glow">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#8B5CF6]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  GDPR Compliant & Privacy First
                </div>
              </div>
            </div>

            {/* Enhanced Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4 capitalize animate-glow">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-[#E2E8F0] hover:text-[#0066CC] transition-all duration-300 relative group animate-glow">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full shadow-lg shadow-[#0066CC]/50"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="py-8 border-t border-[#0066CC]/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 animate-glow">
                Get Trading Insights & Updates
              </h3>
              <p className="text-[#E2E8F0] animate-glow">
                Join 15,000+ traders receiving market insights and platform updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC]/50 to-[#0052A3]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300 animate-glow"></div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="relative w-full px-4 py-3 bg-[#1A1A1A] border-2 border-[#0066CC]/30 rounded-lg text-white placeholder-[#E2E8F0]/60 focus:outline-none focus:border-[#0066CC] focus:ring-4 focus:ring-[#0066CC]/20 transition-all duration-300 shadow-lg animate-glow"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-glow"></div>
                <button className="relative px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white rounded-lg font-medium transition-all duration-300 shadow-xl shadow-[#0066CC]/25 hover:shadow-[#0066CC]/50 transform hover:scale-105 whitespace-nowrap animate-glow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="py-6 border-t border-[#0066CC]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#E2E8F0] text-sm animate-glow">
              © {currentYear} Helix Terminal. All rights reserved.
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {[
                // Twitter
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>,
                // LinkedIn
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>,
                // YouTube
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              ].map((icon, index) => (
                <a key={index} href="#" className="text-[#E2E8F0] hover:text-[#0066CC] transition-all duration-300 relative group animate-glow">
                  <div className="absolute -inset-2 bg-[#0066CC]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-2 rounded-full group-hover:bg-[#0066CC]/10 transition-colors duration-300">
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
