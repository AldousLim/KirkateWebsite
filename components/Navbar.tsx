import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Facebook, MapPin } from 'lucide-react';
import kirkateLogo from '../assets/kirkateLogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Your Facebook URL
  const facebookUrl = "https://web.facebook.com/kirkateenterprise";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const logoUrl = kirkateLogo;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
      {/* Top Bar - Dark Blue */}
      <div 
        className={`bg-navTop text-white transition-all duration-700 cubic-bezier-[0.4,0,0.2,1] pointer-events-auto overflow-hidden ${
          scrolled 
          ? '-translate-y-full opacity-0 pointer-events-none invisible' 
          : 'translate-y-0 opacity-100 visible'
        }`}
        style={{ 
          maxHeight: scrolled ? '0px' : '45px',
          marginTop: scrolled ? '-45px' : '0px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[45px] flex justify-between items-center text-[11px] font-bold tracking-widest">
          <div className={`flex items-center space-x-6 transition-all duration-500 delay-75 ${scrolled ? 'blur-sm scale-95' : 'blur-0 scale-100'}`}>
            <div className="flex items-center space-x-2 group">
              <Phone size={12} className="text-white/60 group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-white/90">(+63) 945 612 8186/ 977 444 1450</span>
              <span className="sm:hidden text-white/90">995 545 8948</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 group">
              <MapPin size={12} className="text-white/60 group-hover:text-white transition-colors" />
              <span className="text-white/90 uppercase">Cavite, Philippines</span>
            </div>
          </div>
          
          <div className={`flex items-center space-x-5 transition-all duration-500 delay-100 ${scrolled ? 'blur-sm scale-95' : 'blur-0 scale-100'}`}>
            {/* UPDATED: Desktop Facebook Link */}
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white/60 transition-colors"
            >
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`pointer-events-auto transition-all duration-500 ease-in-out ${
        scrolled ? 'glass shadow-lg py-1' : 'bg-white py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <img 
                  src={logoUrl} 
                  alt="Company Logo" 
                  className={`transition-all duration-500 object-contain group-hover:scale-110 drop-shadow-md ${
                    scrolled ? 'h-10' : 'h-14'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/200x80/3f4095/ffffff?text=LOGO";
                  }}
                />
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center text-[13px] font-bold tracking-widest transition-all duration-300 ${
                      isActive(link.path) 
                      ? 'text-brand' 
                      : 'text-gray-500 hover:text-brand'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {isActive(link.path) && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand rounded-full"></div>
                  )}
                  {link.hasDropdown && (
                    <div className="absolute left-0 mt-4 w-56 bg-white shadow-2xl rounded-xl py-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 border border-gray-100">
                      <Link to="/services" className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-brand-muted hover:text-brand transition-colors">Our Expertise</Link>
                      <Link to="/services/gallery" className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-brand-muted hover:text-brand transition-colors">Project Portfolio</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand rounded-lg hover:bg-brand-muted transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 pointer-events-auto ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold ${
                isActive(link.path) ? 'text-brand' : 'text-gray-700 hover:text-brand'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-100 flex space-x-6 text-brand">
            {/* UPDATED: Mobile Facebook Link */}
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-70 transition-opacity"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;