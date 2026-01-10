import React from 'react';

// 1. IMPORT LOCAL EQUIPMENT ASSETS
import breakers from '../assets/breakers.png';
import transformers from '../assets/transformers.png';
import metering from '../assets/metering.png';
import pipes from '../assets/pipes.png';
import elecBox from '../assets/elec_box.png';
import fittings from '../assets/fittings.png';
import led from '../assets/led.png';
import wiring from '../assets/sycwinDo.png'; 

const Products: React.FC = () => {
  const products = [
    { title: "BREAKERS", image: breakers, cat: "Electrical" },
    { title: "TRANSFORMERS", image: transformers, cat: "Power" },
    { title: "METERING EQUIPMENT", image: metering, cat: "Measurement" },
    { title: "WIRING & CABLES", image: wiring, cat: "Transmission" },
    { title: "ELECTRICAL BOX", image: elecBox, cat: "Safety" },
    { title: "FITTINGS & ACCS", image: fittings, cat: "Industrial" },
    { title: "LED LIGHTING", image: led, cat: "Eco-Friendly" },
    { title: "PIPES & CONDUIT", image: pipes, cat: "Infrastructure" },
  ];

  return (
    <div className="w-full pt-32 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-brand-dark mb-6 tracking-tight">Equipment Showcase</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We source and trade only high-end, certified materials that meet international safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {products.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Product Card Container with Pop-up Effect */}
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 mb-6 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(63,64,149,0.15)] group-hover:-translate-y-2">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="space-y-1 px-2">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.cat}</span>
                <h3 className="text-lg font-extrabold text-brand-dark group-hover:text-brand transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;