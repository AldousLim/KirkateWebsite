import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="text-white" size={20} />,
      label: "Unit 101 Torres Bldg., No. 505 Bgy San Juan 2, General Trias City, Cavite 4107",
      link: "https://maps.google.com/?q=Unit+101+Torres+Bldg+General+Trias+Cavite",
    },
    {
      icon: <Mail className="text-white" size={20} />,
      label: "sales@kirkate.com",
      link: "mailto:sales@kirkate.com",
    },
    {
      icon: <Phone className="text-white" size={20} />,
      label: "(+63) 945 612 8186 / 977 444 1450",
      link: "tel:+639456128186",
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
                    <div className="flex flex-col">
                      <a 
                        href={detail.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#d9534f] font-semibold leading-relaxed hover:text-red-700 transition-colors py-1"
                      >
                        {detail.label}
                      </a>
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

          {/* Contact Form
          <div className="lg:col-span-7">
            <form className="space-y-8 bg-white" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-400 tracking-wide">Your Name (required)</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white outline-none transition-all font-medium text-brand-dark"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-400 tracking-wide">Your Email (required)</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white outline-none transition-all font-medium text-brand-dark"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-400 tracking-wide">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white outline-none transition-all font-medium text-brand-dark"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-400 tracking-wide">Your Message</label>
                  <textarea 
                    rows={8}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white outline-none transition-all font-medium text-brand-dark resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="inline-flex items-center px-12 py-4 bg-[#d9534f] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-red-600 transition-all transform hover:-translate-y-1 active:scale-95 group"
              >
                Send
                <Send size={16} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Contact;
