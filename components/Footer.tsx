import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import kirkateLogo from '../assets/kirkateLogo.png';

const Footer: React.FC = () => {
  const facebookUrl = "https://web.facebook.com/kirkateenterprise";
  
  const servicesList = [
    "Service Entrance (Primary and Secondary Metering)",
    "Substation and Switchgear (Low/ Medium/ High Voltage)",
    "Electrical Installation for Residential, Commercial & Industrial Establishments",
    "Solar PV System (Net Metering & Power Purchaser Agreement)",
    "Installation of Transformers, Wires & Cables, Generators",
    "Preventive Maintenance (Gen Set, Panel Boards, etc.)",
    "Testing and Commissioning"
  ];

  const logoUrl = kirkateLogo;

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 mb-24">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="relative group inline-block">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-brand-light/10 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              
              <Link to="/" className="relative block">
                <img 
                  src={logoUrl} 
                  alt="Company Logo" 
                  /* Keep brightness-0 invert for visibility on dark footer */
                  className="h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/300x120/1a1c44/ffffff?text=LOGO";
                  }}
                />
              </Link>
            </div>

            <p className="text-white/50 leading-relaxed text-sm font-medium pr-8">
              Pioneering excellence in electrical-mechanical engineering in the Philippines. Delivering innovation, precision, and reliable support for over 11 years.
            </p>
            
            <div className="flex space-x-3">
              {/* UPDATED: Facebook Link */}
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 text-white/40"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-6 h-0.5 bg-accent"></div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Our Expertise</h3>
            </div>
            <ul className="space-y-4 text-[13px]">
              {servicesList.map((item, idx) => (
                <li key={idx} className="text-white/60 hover:text-white transition-all duration-300 flex items-start group">
                  <ChevronRight size={14} className="mt-1 mr-2 text-white/20 group-hover:text-accent transition-colors flex-shrink-0" />
                  <span className="leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-6 h-0.5 bg-accent"></div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Get In Touch</h3>
            </div>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg shadow-accent/20 transition-transform group-hover:rotate-12">
                  <MapPin size={18} />
                </div>
                <span className="text-white/60 leading-relaxed font-medium">
                  Unit 101 Torres Bldg., No. 505 Bgy San Juan 2, General Trias City, Cavite 4107
                </span>
              </li>
              <li className="flex flex-col space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg shadow-accent/20 transition-transform group-hover:-rotate-12">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    {/* UPDATED: Phone Numbers from Navbar */}
                    <a href="tel:+63 945 612 8186" className="text-white/60 font-medium hover:text-white transition-colors tracking-tight">(+63) 995 545 8948</a>
                    <a href="tel:+63 977 444 1450" className="text-white/60 font-medium hover:text-white transition-colors tracking-tight">(+63) 954 423 0751</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg shadow-accent/20 transition-transform group-hover:scale-110">
                  <Mail size={18} />
                </div>
                {/* Feel free to update this email if you have a business one like info@kirkate.com */}
                <a href="mailto:kirkateenterprise@gmail.com" className="text-white/60 font-medium hover:text-white transition-colors">sales@kirkate.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-semibold uppercase tracking-widest text-white/20 space-y-4 md:space-y-0">
          <p>© 2024 Kirkate Enterprise. Engineering Excellence.</p>
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