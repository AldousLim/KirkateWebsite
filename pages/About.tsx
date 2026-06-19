import React from 'react';
import Counter from '../components/Counter';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Shield } from 'lucide-react';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import iwasaki from '../assets/iwasaki.jpg';
import precise from '../assets/precise.jpg';
import pcab from '../assets/pcab.jpg';
import meralco from '../assets/meralco.jpg';
import bni from '../assets/BNI.jpg';
import waines from '../assets/waines.jpg';
import sy3 from '../assets/sy3energy.jpg';
import ls from '../assets/LS_Industrial.jpg';
import sycwin from '../assets/synwin2.jpg';

const About: React.FC = () => {
  const certificateImages = [
    { img: cert1, label: "Certficate of Registration" },
    { img: cert2, label: "Contractors License" },
    { img: cert3, label: "Certficate of Registration" },
  ];

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

  const stats = [
    { label: 'Products Offered', target: 50, icon: <Award className="text-brand" size={24} /> },
    { label: 'Years Experience', target: 11, icon: <Users className="text-brand" size={24} /> },
    { label: 'Projects Completed', target: 20, icon: <Shield className="text-brand" size={24} /> },
  ];

  return (
    <div className="w-full pt-16">
      {/* Header */}
      <div className="bg-brand py-24 text-center px-6">
        <h4 className="text-white/60 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Since 2015</h4>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">Innovation Through Engineering</h1>
      </div>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Side-by-Side Clean 2-Column Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

            {/* Left Box: Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col hover:border-brand/20 transition-all duration-300">
              <h3 className="text-3xl font-extrabold text-brand-dark leading-tight mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Kirkate dedicates to providing a top-notch Professional Engineering Services, Repair & Maintenance Workd and highest quality of Material & Equipment Supplies, which adheres strictly to the latest Codes of Standards and best practices from leading companies.
              </p>
            </div>

            {/* Right Box: Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col hover:border-brand/20 transition-all duration-300">
              <h3 className="text-3xl font-extrabold text-brand-dark leading-tight mb-6">
                Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                We believe in providing more than just supplies; we provide peace of mind. Our team succeeds by understanding the pulse of the industry.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Facts Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="text-7xl font-black text-white flex items-center justify-center">
                  <Counter target={stat.target} />
                  <span className="text-accent ml-2">+</span>
                </div>
                <div className="text-brand-light font-bold tracking-widest uppercase text-xs">{stat.label}</div>
              </div>
            ))}
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

      {/* Certificates Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Accreditations & Licenses</h2>
            <p className="text-gray-500">Authorized and certified by leading national engineering boards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certificateImages.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    alt={item.label}
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-bold tracking-widest text-brand-light uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;