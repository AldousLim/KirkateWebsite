import React from 'react';
import engineer1 from '../assets/engineer1.jpg';
import engineer2 from '../assets/engineer2.jpg';
import repair1 from '../assets/repair1.jpg';
import repair2 from '../assets/repair2.jpg';
import installation1 from '../assets/installation1.jpg';
import installation2 from '../assets/installation2.jpg';

const ServiceGallery: React.FC = () => {
  const sections = [
    {
      id: "application",
      title: "Application & Permitting",
      // Keeping original placeholders as requested
      images: [
        "https://images.unsplash.com/photo-1454165833767-131435bb4420?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      ]
    },
    {
      id: "installation",
      title: "Electrical Installation",
      // Updated with local assets
      images: [installation1, installation2]
    },
    {
      id: "management",
      title: "Engineering Management",
      // Updated with local assets
      images: [engineer1, engineer2]
    },
    {
      id: "maintenance",
      title: "Repair & Maintenance",
      // Updated with local assets
      images: [repair1, repair2]
    }
  ];

  return (
    <div className="w-full bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-brand-dark mb-4 uppercase tracking-widest">Our Service Portfolio</h2>
          <div className="w-24 h-1.5 bg-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <div className="flex items-center space-x-4 mb-8">
                <h3 className="text-2xl font-bold text-brand-dark">{section.title}</h3>
                <div className="flex-grow h-px bg-gray-100"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.images.map((src, idx) => (
                  <div key={idx} className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-50 border border-gray-100">
                    <img 
                      src={src} 
                      alt={`${section.title} Project ${idx + 1}`} 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="p-6">
                      <p className="text-xs font-bold text-brand uppercase tracking-widest">Technical Specification Execution</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;