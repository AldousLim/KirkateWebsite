import React from 'react';
import Counter from '../components/Counter';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Shield } from 'lucide-react';
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
  // 2. DATA ARRAY FOR THE CERTIFICATES
  // This connects your imported files to the labels you want to show
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
    { label: 'Years Experience', target: 5, icon: <Users className="text-brand" size={24} /> },
    { label: 'Projects Completed', target: 20, icon: <Shield className="text-brand" size={24} /> },
  ];

  return (
    <div className="w-full pt-16">
      {/* Header */}
      <div className="bg-brand py-24 text-center px-6">
        <h4 className="text-white/60 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Since 2015</h4>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">Innovation Through Engineering</h1>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="sticky top-32">
              <span className="text-accent font-extrabold text-sm tracking-widest uppercase block mb-4 underline decoration-accent/30 underline-offset-8">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-[1.2] mb-10">
                Finding permanent solutions is our <span className="text-brand">ultimate goal.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We believe in providing more than just supplies; we provide peace of mind. Our team succeeds by understanding the pulse of the industry.
              </p>
              <div className="p-8 rounded-3xl bg-brand-muted border-l-8 border-brand">
                <p className="text-brand-dark font-semibold italic text-lg leading-relaxed">
                  "Our Commitment with trusted Partners & Clients is embodied with our After-sales Maintenance Packages and Guaranteed Products."
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                KIRKATE ENTERPRISE started its operation with Electrical Supplies and Consultancy. The unprecedented demand of technology-related services & products, brought by the significant rise of residential, commercial and industrial establishments, have made the Company engage in a more innovative and higher business opportunities.
              </p>
              <p>
                Five years of experience has expanded the company's services, to be one of the emerging electrical-mechanical engineering trade companies, which offer negotiable and innovative services ranging from supplies & trading, design & consultancy, project management, new installation, repair on generators & motors and preventive maintenance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand/20 transition-all">
                <Target className="text-accent mb-4" size={32} />
                <h4 className="font-bold text-brand-dark mb-2">Our Mission</h4>
                <p className="text-sm text-gray-500">To provide top-tier engineering services that adhere to global codes of excellence.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand/20 transition-all">
                <Award className="text-brand mb-4" size={32} />
                <h4 className="font-bold text-brand-dark mb-2">Our Quality</h4>
                <p className="text-sm text-gray-500">Focusing 100% on client needs, from the smallest bolt to the largest turbine.</p>
              </div>
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
            {/* UPDATED: Mapping over your actual image array instead of placeholder numbers */}
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