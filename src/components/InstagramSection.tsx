import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instaPosts = [
    {
      id: 'i1',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      likes: '428',
      caption: 'Heavy squat session on the ONYX floor. #OnyxHyderabad #TrainStrong'
    },
    {
      id: 'i2',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
      likes: '612',
      caption: 'Spinal lengthening and core control on the Pilates Reformer. #ReformerPilates'
    },
    {
      id: 'i3',
      imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      likes: '890',
      caption: '90-Day Small Group Transformation progression. Hard work pays off.'
    },
    {
      id: 'i4',
      imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
      likes: '534',
      caption: 'Form assessment with GGFI certified coaches. Precision over ego.'
    }
  ];

  return (
    <section className="py-20 relative bg-[#050505] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
              COMMUNITY & MEDIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-display mt-1">
              FOLLOW THE ONYX JOURNEY
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Daily workout clips, movement tips, and member transformations on Instagram.
            </p>
          </div>

          <a
            href="https://www.instagram.com/onyx.hyderabad/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 px-6 py-3.5 bg-[#0D0D0D] border border-[#E50914]/40 hover:border-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center space-x-2 group hover:shadow-red-glow"
          >
            <Instagram className="w-4 h-4 text-[#E50914]" />
            <span>FOLLOW @ONYX.HYDERABAD</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
          </a>
        </div>

        {/* Post Previews Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/onyx.hyderabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 rounded-2xl overflow-hidden bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#E50914]/60 transition-all duration-300"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post preview"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover overlay content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-left">
                <div className="flex justify-end">
                  <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                    <Instagram className="w-3.5 h-3.5 text-[#E50914]" />
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-zinc-200 line-clamp-2 leading-tight">
                    {post.caption}
                  </p>
                  <div className="text-[10px] text-[#E50914] font-bold mt-2">
                    ♥ {post.likes} Likes
                  </div>
                </div>
              </div>

              {/* Media upload tag */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-400 bg-black/80 px-1.5 py-0.5 rounded border border-dashed border-[#1F1F1F]">
                📷 Insta Slot
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
