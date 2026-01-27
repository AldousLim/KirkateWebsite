import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
      {/* Top Bar - Disappears on scroll */}
      <div 
        className={`bg-[#1a1a1a] text-white transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-2.5 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center text-[11px] font-bold tracking-widest">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 group">
              <Phone size={12} className="text-white/60 group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-white/80">(+63) 995 545 8948 / 954 423 0751</span>
              <span className="sm:hidden text-white/80">995 545 8948</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 group">
              <MapPin size={12} className="text-white/60 group-hover:text-white transition-colors" />
              <span className="text-white/80 uppercase">Cavite, Philippines</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-5">
            <a href="#" className="hover:text-white/60 transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-1' : 'bg-white py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-brand text-2xl lg:text-3xl font-extrabold tracking-tighter">
                  KIRKATE<span className="text-brand-light">.</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
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

            {/* Mobile menu button */}
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
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
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
            <Facebook size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;