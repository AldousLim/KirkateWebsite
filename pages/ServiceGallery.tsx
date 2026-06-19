import React from 'react';
import engineer1 from '../assets/engineer1.jpg';
import engineer2 from '../assets/engineer2.jpg';
import repair1 from '../assets/repair1.jpg';
import repair2 from '../assets/repair2.jpg';
import installation1 from '../assets/installation1.jpg';
import installation2 from '../assets/installation2.jpg';
import installation8 from '../assets/installation8.jpg';

const ServiceGallery: React.FC = () => {
  // Rearchitected portfolio mapping each capability directly to a visual asset row
  const portfolioSections = [
    {
      title: "Service Entrance (Primary and Secondary Metering)",
      id: "service-entrance",
      images: [installation2]
    },
    {
      title: "Substation and Switchgear (Low/ Medium/ High Voltage)",
      id: "substation-switchgear",
      images: [installation8]
    },
    {
      title: "Electrical Installation for Residential, Commercial & Industrial Establishments",
      id: "electrical-installation",
      images: [engineer1]
    },
    {
      title: "Solar PV System (Net Metering & Power Purchaser Agreement)",
      id: "solar-pv",
      images: [installation1]
    },
    {
      title: "Installation of Transformers, Wires & Cables, Generators",
      id: "installation-assets",
      images: [engineer2]
    },
    {
      title: "Preventive Maintenance (Gen Set, Panel Boards, etc.)",
      id: "preventive-maintenance",
      images: [repair1]
    },
    {
      title: "Testing and Commissioning",
      id: "testing-commissioning",
      images: [repair2]
    }
  ];

  return (
    <div className="w-full bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-brand-dark mb-4 uppercase tracking-widest">Our Service Portfolio</h2>
          <div className="w-24 h-1.5 bg-brand mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Gallery Stack */}
        <div className="space-y-24 max-w-4xl mx-auto">
          {portfolioSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32 flex flex-col items-center">

              {/* Centered Title with Balanced Dividers */}
              <div className="flex items-center justify-center w-full mb-8 gap-4 text-center">
                <div className="hidden sm:block flex-grow h-px bg-gray-200 max-w-[100px]"></div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight max-w-2xl">
                  {section.title}
                </h3>
                <div className="hidden sm:block flex-grow h-px bg-gray-200 max-w-[100px]"></div>
              </div>

              {/* Centered Image Layout Wrapper */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-2xl">
                  {section.images.map((src, idx) => (
                    <div key={idx} className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-50 border border-gray-100 flex flex-col items-center text-center w-full">
                      <div className="overflow-hidden w-full">
                        <img
                          src={src}
                          alt={`${section.title} Asset Visual`}
                          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 bg-white w-full flex justify-center items-center">
                        <p className="text-xs font-bold text-brand uppercase tracking-widest leading-relaxed max-w-md">
                          {section.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceGallery;