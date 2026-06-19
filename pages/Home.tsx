import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Cog, Award, Users } from 'lucide-react';

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
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 drop-shadow-sm whitespace-nowrap">
              YOUR ELECTRICAL - MECHANICAL
            </h1>
            <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">ONE-STOP SHOP.</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 font-medium">
              We are all but resources that ought to be consumed by others.
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

        {/* FIXED: Centered "OUR CLIENTS" section header with stylish layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 text-center flex flex-col items-center">
          <h4 className="text-white/80 font-extrabold text-3xl tracking-widest uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-white/40">
            OUR CLIENTS
          </h4>
        </div>

        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] cursor-pointer">
          {marqueeLogos.map((client, idx) => (
            <div key={idx} className="flex items-center px-10">
              <div className="bg-white  w-56 h-36 rounded-2xl shadow-2xl flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-brand via-brand/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-brand via-brand/80 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* FIXED: Balanced widths, centered text alignment parent */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-14">

          {/* Top Content Row */}
          <div className="w-full flex flex-col items-center">
            {/* FIXED: Upgraded header to a large, clear prominent statement */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">
              Our History
            </h2>
            {/* FIXED: Set to text-justify, with neat desktop line wrapping adjustments */}
            <p className="text-gray-600 text-lg mb-10 leading-relaxed text-justify md:text-center-last">
              Founded in 2015 as a small consultancy firm, we have steadily evolved into a trusted full-service engineering partner. What began with technical expertise and client-focused solutions has expanded into comprehensive trading, installation, and maintenance services. Allowing us to better support the growing and changing demands of the industry. Today, we remain committed to delivering reliable, innovative, and high-quality engineering solutions built on experience, integrity, and long-term partnerships.
            </p>

            {/* FIXED: Centered the feature highlights row */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-md">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center text-brand shrink-0">
                  <Zap size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm tracking-wide">Efficient Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center text-brand shrink-0">
                  <Cog size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm tracking-wide">Expert Engineering</span>
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Landscape Image Row */}
          <div className="w-full">
            <img
              src="../assets/History.png"
              className="w-full h-auto max-h-[550px] object-cover rounded-3xl shadow-2xl border border-gray-100"
              alt="Our History Landscape"
            />
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">

          {/* Main Title Heading Section */}
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-wide uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[2px] after:bg-gray-400">
              WHY CHOOSE US?
            </h2>
          </div>

          {/* Vertical Layout Features Stack */}
          <div className="flex flex-col items-center gap-16 w-full max-w-xl">

            {/* Feature 1: Credibility and Services */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-brand-dark mb-5 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <Users size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-wide max-w-sm leading-snug">
                Credibility and<br />Top Quality Services
              </h3>
            </div>

            {/* Feature 2: Guaranteed Products */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-brand-dark mb-5 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <ShieldCheck size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-wide max-w-sm leading-snug">
                Guaranteed Products and<br />Trusted Suppliers
              </h3>
            </div>

            {/* Feature 3: After-Sales Maintenance */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-brand-dark mb-5 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <Cog size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-wide max-w-md leading-snug">
                After-Sales Maintenance and<br />Warranties
              </h3>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;