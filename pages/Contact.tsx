import React from 'react';
import { MapPin, Mail, Phone, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="text-white" size={20} />,
      label: ["Unit 101 Torres Bldg., No. 505 Bgy San Juan 2, General Trias City, Cavite 4107"],
      link: "https://maps.google.com/?q=Unit+101+Torres+Bldg+General+Trias+Cavite",
    },
    {
      icon: <Mail className="text-white" size={20} />,
      label: ["sales@kirkate.com"],
      link: "mailto:sales@kirkate.com",
    },
    {
      icon: <Phone className="text-white" size={20} />,
      label: ["(046) 509-5368"],
      link: "tel:046509-5368",
    },
    {
      icon: <Smartphone className="text-white" size={20} />,
      label: [
        "(+63) 945 612 8186",
        "(+63) 945 612 8190",
        "(+63) 977 444 1450"
      ],
      links: [
        "tel:+639456128186",
        "tel:+639456128190",
        "tel:+639774441450"
      ],
    },
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-8 tracking-tight">
                Contact Info
              </h2>
              <p className="text-gray-500 mb-10 max-w-md">
                Have questions or need assistance? Reach out to us through any of the channels below.
              </p>

              <ul className="space-y-8">
                {contactDetails.map((detail, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 mr-5 flex-shrink-0 w-12 h-12 bg-[#d9534f] rounded-2xl flex items-center justify-center shadow-lg shadow-red-200 transition-transform group-hover:scale-110">
                      {detail.icon}
                    </div>
                    <div className="flex flex-col space-y-1">
                      {detail.label.map((text, numIndex) => (
                        <a
                          key={numIndex}
                          href={detail.links ? detail.links[numIndex] : detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d9534f] font-semibold leading-relaxed hover:text-red-700 transition-colors py-0.5"
                        >
                          {text}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Map Decoration */}
          <div className="relative w-full h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl group">
            {/* Overlay for aesthetic blending */}
            <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.881255530138!2d120.8813353!3d14.3768407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962d3a33962d3a%3A0x33962d3a33962d3a!2s505%20General%20Trias%20Dr%2C%20General%20Trias%2C%20Cavite!5e0!3m2!1sen!2sph!4v1711111111111!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
              className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;