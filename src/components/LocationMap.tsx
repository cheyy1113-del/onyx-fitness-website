import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Mail, ExternalLink, Building2 } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Onyx+The+Professional+Fitness+Studio+SR+Nagar+Hyderabad+Telangana";
  const mapEmbedUrl = "https://maps.google.com/maps?q=Onyx+The+Professional+Fitness+Studio+SR+Nagar+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-14 relative bg-[#050505] overflow-hidden border-t border-[#1F1F1F]">
      {/* Ambient Red Glow */}
      <div className="ambient-glow-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
            LOCATION & CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mt-1">
            FIND ONYX FITNESS STUDIO
          </h2>
          <div className="h-1.5 w-16 bg-[#E50914] mx-auto my-3 rounded-full" />
          <p className="text-zinc-300 text-sm sm:text-base font-bold">
            Conveniently located in S.R. Nagar, Hyderabad. Visit us for a personal walkthrough & training session.
          </p>
        </div>

        {/* Building Photograph Banner */}
        <div className="mb-10 bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#E50914]/40 rounded-3xl overflow-hidden shadow-2xl relative group transition-colors duration-500">
          <div className="relative w-full max-h-[500px] bg-[#121212] overflow-hidden flex items-center justify-center">
            <img
              src="/assets/onyx_building_location.jpg"
              alt="ONYX The Professional Fitness Studio Building & Exterior Location"
              className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-102 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <div className="inline-flex items-center space-x-2 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded shadow font-display mb-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>ONYX STUDIO BUILDING & LOCATION</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black uppercase text-white font-display">
                ONYX THE PROFESSIONAL FITNESS STUDIO — S.R. NAGAR
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-medium">
                S.R. Nagar, Hyderabad, Telangana 500038
              </p>
            </div>
          </div>
        </div>

        {/* Grid: Contact Details & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Card */}
          <div className="lg:col-span-5 bg-[#0D0D0D] border border-[#1F1F1F] p-8 rounded-3xl shadow-2xl flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E50914] font-display">
                  OFFICIAL STUDIO ADDRESS
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-display mt-1">
                  ONYX FITNESS STUDIO
                </h3>
                <p className="text-xs text-zinc-300 font-bold mt-1">
                  S.R. Nagar, Hyderabad, Telangana 500038, India
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-4 border-t border-[#121212] pt-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Studio Location</div>
                    <div className="text-xs text-zinc-300">S.R. Nagar, Hyderabad, Telangana, India</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Phone Number</div>
                    <a href="tel:7989289409" className="text-xs text-zinc-300 hover:text-[#E50914] transition-colors font-mono font-bold">
                      +91 7989289409
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Email Address</div>
                    <a href="mailto:theprofessionalfitnessstudios.1@gmail.com" className="text-xs text-zinc-300 hover:text-[#E50914] transition-colors font-mono">
                      theprofessionalfitnessstudios.1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Studio Timings</div>
                    <div className="text-xs text-zinc-300">Monday – Saturday: 05:30 AM – 10:00 PM</div>
                    <div className="text-xs text-zinc-300">Sunday: 06:00 AM – 01:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 space-y-3">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-xl btn-red-glow flex items-center justify-center space-x-2 transition-all shadow-red-glow"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN ON GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:7989289409"
                  className="py-3 bg-[#121212] border border-[#1F1F1F] hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#E50914]" />
                  <span>CALL STUDIO</span>
                </a>

                <a
                  href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'd%20like%20to%20get%20directions%20to%20your%20SR%20Nagar%20studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-[#121212] border border-[#1F1F1F] hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map for ONYX Studio S.R. Nagar */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-[#1F1F1F] rounded-3xl overflow-hidden shadow-2xl relative min-h-[420px]">
            <iframe
              title="ONYX The Professional Fitness Studio Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
