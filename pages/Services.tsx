import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, Zap, Settings, Wrench } from 'lucide-react';
import engineer1 from '../assets/engineer1.jpg';
import engineer2 from '../assets/engineer2.jpg';
import repair1 from '../assets/repair1.jpg';
import repair2 from '../assets/repair2.jpg';
import installation1 from '../assets/installation1.jpg';
import installation2 from '../assets/installation2.jpg';

const Services: React.FC = () => {
  const industryProducts = [
    {
      id: "application-permitting",
      galleryId: "application",
      title: "Application & Permitting",
      icon: <CheckCircle2 className="text-accent" />,
      description: "Professional assistance with government agencies and utility providers to ensure your project stays compliant.",
      bullets: ["GAA Compliance", "Utility Hookup Coordination", "Safety Permits"],
    },
    {
      id: "electrical-installation",
      galleryId: "installation",
      title: "Electrical Installation",
      icon: <Zap className="text-accent" />,
      description: "Construction of world-class electrical facilities for varied industrial applications.",
      bullets: [
        "Primary/Secondary Metering",
        "Substation Management",
        "Commercial Wiring"
      ],
    },
    {
      id: "engineering-management",
      galleryId: "management",
      title: "Engineering Management",
      icon: <Settings className="text-accent" />,
      description: "End-to-end consultancy from planning to commissioning, allowing you to focus on your operations.",
      bullets: [
        "Design & Analysis",
        "Power Factor Audits",
        "Predictive Maintenance"
      ],
    },
    {
      id: "repair-maintenance",
      galleryId: "maintenance",
      title: "Repair & Maintenance",
      icon: <Wrench className="text-accent" />,
      description: "Specialized rotating machine solutions for generators and high-voltage motors.",
      bullets: [
        "Turbo Generator Outages",
        "MV/HV Motor Rewinding",
        "Vibration Analysis"
      ],
    },
  ];

  return (
    <div className="w-full pt-16">
      {/* Hero Section with engineer1 and installation1 */}
      <section className="bg-brand-muted/40 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h4 className="text-brand font-bold text-xs tracking-widest uppercase mb-4">OUR EXPERTISE</h4>
            <h2 className="text-5xl md:text-6xl font-black text-brand-dark mb-10 leading-tight">
              Optimized <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Engineering</span> Solutions.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                We provide a holistic package from planning to maintenance. Our combined team experience brings project management excellence and years of technical expertise.
              </p>
              <div className="flex space-x-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-brand-dark">100%</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Efficiency</span>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-brand-dark">24/7</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex gap-6 items-end">
              <div className="w-1/2 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img src={engineer1} className="w-full h-full object-cover" alt="Engineer" />
              </div>
              <div className="w-1/2 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl translate-y-12">
                <img src={installation1} className="w-full h-full object-cover" alt="Installation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section with engineer2 and repair1 featured visuals */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Industry Focused Products</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">We provide tailored solutions for power plants, industrial parks, and commercial skyscrapers.</p>
          </div>

          {/* Featured Visuals for Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="rounded-3xl overflow-hidden h-64 shadow-lg group">
              <img src={engineer2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Engineering" />
            </div>
            <div className="rounded-3xl overflow-hidden h-64 shadow-lg group">
              <img src={repair1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Repair" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryProducts.map((p, idx) => (
              <div 
                key={idx} 
                id={p.id}
                className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full scroll-mt-24"
              >
                <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(p.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-6 tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {p.description}
                </p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {p.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center text-xs font-bold text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mr-2" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/services/gallery#${p.galleryId}`}
                  className="flex items-center text-brand font-bold text-xs uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform"
                >
                  Learn More <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section with installation2 and repair2 imagery */}
      <section className="py-24 bg-brand text-white overflow-hidden relative">
        {/* Background Decorative Images */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src={installation2} className="w-full h-full object-cover grayscale" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src={repair2} className="w-full h-full object-cover grayscale" alt="" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Need a custom engineering solution?</h2>
            <p className="text-white/70 text-lg">Our team is ready to analyze your requirements and provide a detailed estimate for your next big project.</p>
          </div>
          <Link to="/about" className="bg-white text-brand px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-brand-muted transition-all whitespace-nowrap">
            CONSULT OUR ENGINEERS
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;