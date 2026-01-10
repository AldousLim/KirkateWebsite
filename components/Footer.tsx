
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  // Mapping expertise titles to their relevant page routes and section IDs
  const expertiseLinks = [
    { name: 'Application & Permitting', path: '/services/gallery#application' },
    { name: 'Electrical Installation', path: '/services/gallery#installation' },
    { name: 'Engineering Management', path: '/services/gallery#management' },
    { name: 'Equipment Sourcing', path: '/products' },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <h2 className="text-3xl font-black text-white tracking-tighter transition-transform group-hover:scale-105">
                KIRKATE<span className="text-accent">.</span>
              </h2>
            </Link>
            <p className="text-white/50 leading-relaxed text-sm font-medium max-w-xs">
              Pioneering excellence in electrical-mechanical engineering across Southeast Asia. Delivering innovation, precision, and reliable support for over half a decade.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 text-white/60 border border-white/5 hover:border-brand/30 hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-10">Navigation</h3>
            <ul className="space-y-5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Company', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Equipment', path: '/products' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-white transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-10">Core Expertise</h3>
            <ul className="space-y-5 text-sm">
              {expertiseLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 flex items-center group hover:text-white transition-colors duration-300">
                    <ArrowRight size={14} className="mr-3 text-white/20 group-hover:text-accent transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Contact Details */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-10">Get In Touch</h3>
            <ul className="space-y-8 text-sm">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <MapPin size={18} />
                </div>
                <span className="text-white/60 leading-relaxed font-medium">Unit 101 Torres Bldg., No. 505 Bgy San Juan 2, General Trias City, Cavite 4107</span>
              </li>
              <li className="flex flex-col space-y-2 group">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+63209955458948" className="text-white/60 font-medium hover:text-white transition-colors">+632 0995-545-8948</a>
                </div>
                <a href="tel:+63209544230751" className="text-white/40 font-medium ml-14 hover:text-white transition-colors">+632 0954-423-0751</a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@kirkate.com" className="text-white/60 font-medium hover:text-white transition-colors">info@kirkate.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-semibold uppercase tracking-widest text-white/20 space-y-4 md:space-y-0">
          <p>© 2024 Kirkate Enterprise. High-Voltage Solutions.</p>
          <div className="flex items-center">
            <span className="mr-1">Built with Precision by</span>
            <span className="text-white/40 hover:text-accent transition-colors cursor-pointer">Wainessofttech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
