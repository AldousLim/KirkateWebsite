
import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="text-white" size={20} />,
      label: "Unit 101 Torres Bldg., No. 505 Bgy San Juan 2, General Trias City, Cavite 4107",
      link: "https://maps.google.com/?q=Unit+101+Torres+Bldg.+No.+505+Bgy+San+Juan+2+General+Trias+City+Cavite+4107",
    },
    {
      icon: <Mail className="text-white" size={20} />,
      label: "sales@kirkate.com",
      link: "mailto:sales@kirkate.com",
    },
    {
      icon: <Phone className="text-white" size={20} />,
      label: "(+63) 945 612 8186/ 977 444 1450",
      link: "tel:+63945 612 8186/ 977 444 1450",
    },
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-10 tracking-tight">Contact Info</h2>
              <ul className="space-y-8">
                {contactDetails.map((detail, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 mr-6 flex-shrink-0 w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/10">
                      {detail.icon}
                    </div>
                    <a 
                      href={detail.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#d9534f] font-medium leading-relaxed hover:underline decoration-[#d9534f]/30 underline-offset-4 transition-all py-1.5"
                    >
                      {detail.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Map Decoration */}
            <div className="rounded-3xl overflow-hidden h-64 bg-gray-100 border border-gray-100 shadow-inner relative group">
              <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.881255530138!2d120.8813353!3d14.3768407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962d3a33962d3a%3A0x33962d3a33962d3a!2s505%20General%20Trias%20Dr%2C%20General%20Trias%2C%20Cavite!5e0!3m2!1sen!2sph!4v1711111111111!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
