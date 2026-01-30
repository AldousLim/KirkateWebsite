import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Cog, Award } from 'lucide-react';

// Client Logo Imports
import billion from '../assets/Billion.jpg';
import power4all from '../assets/Power4all.jpg';
import netforce from '../assets/Netforce.png';
import philkor from '../assets/Philkor.jpg';
import boxhill from '../assets/Boxhill.png';
import widus from '../assets/Widus.png';
import enomoto from '../assets/Enomoto.png';
import mec from '../assets/MEC.png';
import asti from '../assets/Asti.jpg';
import maynilad from '../assets/Maynilad.jpg';
import ginebra from '../assets/Ginebra.png';
import dali from '../assets/Dali.png';
import picc from '../assets/PICC.jpg';
import cityhomes from '../assets/CityHomes.jpeg';
import glory from '../assets/Glory.png';

const Home: React.FC = () => {
  const clientLogos = [
    { name: "Billion", src: billion },
    { name: "Power 4 All", src: power4all },
    { name: "Netforce", src: netforce },
    { name: "Philkor", src: philkor },
    { name: "Boxhill", src: boxhill },
    { name: "Widus", src: widus },
    { name: "Enomoto", src: enomoto },
    { name: "MEC", src: mec },
    { name: "ASTI", src: asti },
    { name: "Maynilad", src: maynilad },
    { name: "Ginebra", src: ginebra },
    { name: "Dali", src: dali },
    { name: "PICC", src: picc },
    { name: "CityHomes", src: cityhomes },
    { name: "Glory", src: glory }
  ];

  // Logic: Use 3 sets of logos. 
  // With -33.33% animation, it loops perfectly from Set 1 to Set 2.
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand/50 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1545439625-662706c9a304?auto=format&fit=crop&q=80&w=2000" 
            alt="Electrical Substation" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Leading the Electrical Future
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 drop-shadow-sm">
              YOUR RELIABLE <br/>
              <span className="text-white">ENGINEERING</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">ONE-STOP SHOP.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 font-medium">
              Providing cutting-edge electrical-mechanical solutions for over 5 years. Quality, innovation, and client success at our core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-white text-brand px-10 py-4 rounded-full font-bold text-sm tracking-widest flex items-center justify-center hover:bg-brand-muted transition-all group shadow-xl">
                OUR SERVICES
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link to="/about" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest flex items-center justify-center hover:bg-white/10 transition-all backdrop-blur-sm">
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED Client Logo Scrolling Ticker */}
      <div className="w-full bg-brand py-16 overflow-hidden relative z-30 border-y border-white/10">
        {/* 'w-max' is critical here so it doesn't wrap */}
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] cursor-pointer">
          {marqueeLogos.map((client, idx) => (
            <div key={idx} className="flex items-center px-10">
              {/* Card design matching your reference image */}
              <div className="bg-white w-56 h-36 rounded-2xl shadow-2xl flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Side Gradients for a soft transition */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-brand via-brand/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-brand via-brand/80 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800" 
              className="rounded-3xl shadow-2xl relative z-10"
              alt="Electrical Engineer"
            />
          </div>
          <div>
            <h4 className="text-brand font-bold text-sm tracking-widest uppercase mb-4">THE KIRKATE STORY</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8">
              5 Years of Unwavering Service Excellence.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Starting as a small consultancy in 2015, we've grown into a comprehensive engineering partner. Our expansion into trading, installation, and maintenance reflects our commitment to the evolving needs of the industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center text-brand">
                  <Zap size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm">Efficient Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center text-brand">
                  <Cog size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm">Expert Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-muted opacity-30 skew-x-12 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative z-10">
            <h4 className="text-brand font-bold text-sm tracking-widest uppercase mb-4">WHY CHOOSE US</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">
              Pioneering Safety and Technical Innovation.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-balance">
              Our holistic approach combines deep technical expertise with a commitment to long-term reliability. We don't just supply equipment; we architect systems that power progress and ensure operational continuity.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center text-brand">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm">Unmatched Safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center text-brand">
                  <Award size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm">Global Standards</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
              alt="Electrical Precision Work"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand rounded-3xl -z-0 opacity-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;