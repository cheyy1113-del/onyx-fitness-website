import React from 'react';
import { Flame, Clock, Users, MessageSquare, Zap } from 'lucide-react';

interface TransformationProps {
  onBookClick: () => void;
}

export const Transformation: React.FC<TransformationProps> = ({ onBookClick }) => {
  const batches = [
    { time: '12:00 PM – 12:55 PM', status: 'Filling Fast' },
    { time: '01:00 PM – 01:55 PM', status: 'Available' },
    { time: '02:00 PM – 02:55 PM', status: 'Available' },
    { time: '03:00 PM – 03:55 PM', status: 'Limited Slots' },
  ];

  return (
    <section id="transform" className="py-14 relative bg-[#0D0D0D] border-y border-[#1F1F1F] overflow-hidden">
      {/* Red Background Glow */}
      <div className="ambient-glow-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#E50914]/15 border border-[#E50914]/40 px-4 py-1.5 rounded-full mb-3 shadow-red-glow">
            <Flame className="w-4 h-4 text-[#E50914] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white font-display">
              HIGH IMPACT TRANSFORMATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            ONYX SMALL GROUP TRANSFORMATION
          </h2>
          <div className="h-1.5 w-20 bg-[#E50914] mx-auto my-3 rounded-full" />
          <p className="text-lg sm:text-xl font-bold uppercase tracking-wide text-zinc-100 font-display">
            Coach-Led High Intensity Batches (2–5 Members) • Mon–Fri 55-Min Sessions
          </p>
        </div>

        {/* Specifications & Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="p-6 bg-[#050505] border border-[#1F1F1F] rounded-2xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 border border-[#E50914]/40 flex items-center justify-center text-[#E50914] flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-black text-white uppercase font-display">55-Minute Sessions</div>
              <div className="text-xs text-zinc-400">Super active strength & HIIT workouts</div>
            </div>
          </div>

          <div className="p-6 bg-[#050505] border border-[#1F1F1F] rounded-2xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 border border-[#E50914]/40 flex items-center justify-center text-[#E50914] flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-black text-white uppercase font-display">2 to 5 Members</div>
              <div className="text-xs text-zinc-400">Strict batch cap for coach attention</div>
            </div>
          </div>

          <div className="p-6 bg-[#050505] border border-[#1F1F1F] rounded-2xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 border border-[#E50914]/40 flex items-center justify-center text-[#E50914] flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-black text-white uppercase font-display">Monday–Friday</div>
              <div className="text-xs text-zinc-400">Daily structured workout progression</div>
            </div>
          </div>
        </div>

        {/* Pricing & Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Monthly Fee Box */}
          <div className="bg-[#050505] border border-[#E50914]/50 p-8 rounded-2xl shadow-red-glow flex flex-col justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#E50914] mb-1 font-display">
                MONTHLY TRANSFORMATION FEE
              </div>
              <h4 className="text-2xl sm:text-3xl font-black uppercase text-white font-display mb-6">
                FLEXIBLE BATCH PRICING
              </h4>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-[#121212] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-white">2 – 3 Members / Batch</div>
                    <div className="text-xs text-zinc-300">Intimate semi-private coaching</div>
                  </div>
                  <div className="text-3xl font-black text-[#E50914] font-display">
                    ₹7,500 <span className="text-xs text-zinc-400 font-normal">/ person</span>
                  </div>
                </div>

                <div className="p-4 bg-[#121212] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-white">4 – 5 Members / Batch</div>
                    <div className="text-xs text-zinc-300">Focused group energy</div>
                  </div>
                  <div className="text-3xl font-black text-[#E50914] font-display">
                    ₹5,000 <span className="text-xs text-zinc-400 font-normal">/ person</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onBookClick}
                className="flex-1 py-4 bg-[#E50914] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl btn-red-glow text-center"
              >
                BOOK TRANSFORMATION
              </button>

              <a
                href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'm%20interested%20in%20the%20Small%20Group%20Transformation%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-4 bg-[#121212] border border-[#1F1F1F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Daily Batches Box */}
          <div className="bg-[#050505] border border-[#1F1F1F] p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#E50914] mb-1 font-display">
                AVAILABLE SCHEDULE
              </div>
              <h4 className="text-2xl sm:text-3xl font-black uppercase text-white font-display mb-6">
                MONDAY – FRIDAY BATCHES
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {batches.map((b, i) => (
                  <div key={i} className="p-4 bg-[#121212] border border-[#1F1F1F] rounded-xl flex flex-col justify-between">
                    <span className="text-sm font-bold text-white font-mono">{b.time}</span>
                    <span className="text-xs font-bold text-[#E50914] uppercase mt-1">{b.status}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#121212]/60 border border-[#1F1F1F] rounded-xl text-xs sm:text-sm text-zinc-300 space-y-1">
                <div>• Minimum: <span className="text-white font-bold">2 members</span> to launch a batch</div>
                <div>• Maximum: <span className="text-white font-bold">5 members per batch</span> (Cap enforced)</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#121212] text-center">
              <a
                href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'm%20interested%20in%20the%20Small%20Group%20Transformation%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#25D366] hover:underline uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: "Hi ONYX, I'm interested in the Small Group Transformation program."</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
