import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Instagram, MapPin, ArrowUp, ChevronUp } from 'lucide-react';
import { OnyxLogo } from './OnyxLogo';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const [waMenuOpen, setWaMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] border-t border-[#1F1F1F] text-zinc-400 relative pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block group">
              <OnyxLogo size="md" showSubtitle={true} />
            </a>

            <div className="inline-block bg-[#0D0D0D] border border-[#1F1F1F] px-4 py-1.5 rounded-lg text-xs font-bold text-white uppercase">
              Train Strong • Move Better • Live Better
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Hyderabad’s high-performance fitness studio offering Gym Memberships, 1-on-1 Personal Coaching, Reformer Pilates, and Small Group Transformation programs in S.R. Nagar.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white font-display mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#hero" className="hover:text-[#E50914] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E50914] transition-colors">About ONYX</a></li>
              <li><a href="#gallery" className="hover:text-[#E50914] transition-colors">Visual Gallery</a></li>
              <li><a href="#pricing" className="hover:text-[#E50914] transition-colors">Training & Pricing</a></li>
              <li><a href="#founder" className="hover:text-[#E50914] transition-colors">Founder & CEO</a></li>
              <li><a href="#testimonials" className="hover:text-[#E50914] transition-colors">Member Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#E50914] transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white font-display mb-4">
              STUDIO CONTACT INFO
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                <span>S.R. Nagar, Hyderabad, Telangana, India</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                <a href="tel:7989289409" className="text-zinc-200 hover:text-[#E50914] font-mono">
                  7989289409
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                <a href="mailto:theprofessionalfitnessstudios.1@gmail.com" className="text-zinc-200 hover:text-[#E50914] font-mono">
                  theprofessionalfitnessstudios.1@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                <a
                  href="https://www.instagram.com/onyx.hyderabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-[#E50914]"
                >
                  @onyx.hyderabad
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-3 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-xl btn-red-glow transition-all"
              >
                BOOK A SESSION NOW
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-[#121212] pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} ONYX — The Professional Fitness Studio. All Rights Reserved.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <span>S.R. Nagar, Hyderabad</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#0D0D0D] border border-[#1F1F1F] rounded-lg text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {waMenuOpen && (
          <div className="mb-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-2xl p-4 shadow-2xl w-64 space-y-2 text-xs font-bold animate-fade-in text-left">
            <div className="text-[10px] text-[#E50914] uppercase tracking-wider font-display mb-2">
              START WHATSAPP CHAT
            </div>
            
            <a
              href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'd%20like%20to%20know%20more%20about%20your%20training%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 bg-[#121212] hover:bg-[#181818] rounded-xl text-white border border-[#1F1F1F] transition-colors"
            >
              💬 General Enquiry
            </a>

            <a
              href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'm%20interested%20in%20Personal%20Training."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 bg-[#121212] hover:bg-[#181818] rounded-xl text-white border border-[#1F1F1F] transition-colors"
            >
              🏋️ Personal Training
            </a>

            <a
              href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'm%20interested%20in%20the%20Small%20Group%20Transformation%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 bg-[#121212] hover:bg-[#181818] rounded-xl text-white border border-[#1F1F1F] transition-colors"
            >
              🔥 Small Group Transformation
            </a>
          </div>
        )}

        <button
          onClick={() => setWaMenuOpen(!waMenuOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 btn-red-glow"
          aria-label="WhatsApp quick contact"
        >
          <MessageSquare className="w-7 h-7" />
        </button>
      </div>
    </footer>
  );
};
