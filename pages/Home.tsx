import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Cog } from 'lucide-react';
import iwasaki from '../assets/iwasaki.jpg';
import precise from '../assets/precise.jpg';
import pcab from '../assets/pcab.jpg';
import meralco from '../assets/meralco.jpg';
import bni from '../assets/BNI.jpg';
import waines from '../assets/waines.jpg';
import sy3 from '../assets/sy3energy.jpg';
import ls from '../assets/LS_Industrial.jpg';
import sycwin from '../assets/synwin2.jpg';

const Home: React.FC = () => {
  // 2. Data array using the imported variables
  const partners = [
    { name: 'IWASAKI', img: iwasaki },
    { name: 'PRECISE', img: precise },
    { name: 'PCAB', img: pcab },
    { name: 'MERALCO', img: meralco },
    { name: 'BNI', img: bni },
    { name: 'WAINE\'S', img: waines },
    { name: 'SY3 ENERGY', img: sy3 },
    { name: 'LS Industrial', img: ls },
    { name: 'SYCWIN', img: sycwin },
  ];

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

      {/* Partners Section */}
      <section className="py-24 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">With the Partnership of:</h3>
              <p className="text-gray-500 font-medium">We collaborate with global industry leaders and verified institutions to deliver the best quality products and services.</p>
            </div>
            <Link to="/products" className="text-brand font-bold flex items-center hover:underline">
              View All Products <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center group border border-gray-100/50 h-32">
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="max-h-16 w-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;