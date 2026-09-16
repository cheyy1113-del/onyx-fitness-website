import React, { useRef, useState } from 'react';
import { GalleryItem } from '../types';
import { Play, X, Film, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeVideo, setActiveVideo] = useState<{ url: string } | null>(null);

  const galleryItems: GalleryItem[] = [
    // Video Reels (4 Real Studio Reels)
    { id: 'v1', title: '', category: 'video', imageUrl: '/assets/onyx_photo_01.jpg', videoUrl: '/assets/videos/onyx_video_01.mp4', isVideo: true, caption: '' },
    { id: 'v2', title: '', category: 'video', imageUrl: '/assets/onyx_photo_02.jpg', videoUrl: '/assets/videos/onyx_video_02.mp4', isVideo: true, caption: '' },
    { id: 'v3', title: '', category: 'video', imageUrl: '/assets/onyx_photo_03.jpg', videoUrl: '/assets/videos/onyx_video_03.mp4', isVideo: true, caption: '' },
    { id: 'v4', title: '', category: 'video', imageUrl: '/assets/onyx_photo_04.jpg', videoUrl: '/assets/videos/onyx_video_04.mp4', isVideo: true, caption: '' },

    // Pure Client Studio Photos (16 Photos)
    { id: 'p1', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_01.jpg', caption: '' },
    { id: 'p2', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_02.jpg', caption: '' },
    { id: 'p3', title: '', category: 'pilates', imageUrl: '/assets/onyx_photo_03.jpg', caption: '' },
    { id: 'p4', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_04.jpg', caption: '' },
    { id: 'p5', title: '', category: 'pt', imageUrl: '/assets/onyx_photo_05.jpg', caption: '' },
    { id: 'p6', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_06.jpg', caption: '' },
    { id: 'p7', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_07.jpg', caption: '' },
    { id: 'p8', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_08.jpg', caption: '' },
    { id: 'p9', title: '', category: 'pt', imageUrl: '/assets/onyx_photo_09.jpg', caption: '' },
    { id: 'p10', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_10.jpg', caption: '' },
    { id: 'p11', title: '', category: 'pilates', imageUrl: '/assets/onyx_photo_11.jpg', caption: '' },
    { id: 'p12', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_12.jpg', caption: '' },
    { id: 'p13', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_13.jpg', caption: '' },
    { id: 'p14', title: '', category: 'pt', imageUrl: '/assets/onyx_photo_14.jpg', caption: '' },
    { id: 'p15', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_15.jpg', caption: '' },
    { id: 'p16', title: '', category: 'gym', imageUrl: '/assets/onyx_photo_16.jpg', caption: '' }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const total = scrollWidth - clientWidth;
      if (total > 0) {
        setScrollProgress(scrollLeft / total);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-12 relative bg-[#0D0D0D] border-y border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Swiper Controls Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white font-display">
              SWIPE MEDIA GALLERY ({galleryItems.length})
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={scrollLeft}
              className="p-3 bg-[#050505] hover:bg-[#E50914] text-white rounded-full border border-[#1F1F1F] hover:border-[#E50914] transition-all duration-300 shadow-lg"
              aria-label="Swipe left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 bg-[#050505] hover:bg-[#E50914] text-white rounded-full border border-[#1F1F1F] hover:border-[#E50914] transition-all duration-300 shadow-lg"
              aria-label="Swipe right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 100% PURE MEDIA SWIPER CAROUSEL (NO TEXT) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-6 scrollbar-none snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth transform-gpu"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => item.isVideo && item.videoUrl && setActiveVideo({ url: item.videoUrl })}
              className={`snap-start flex-shrink-0 w-72 sm:w-80 h-96 sm:h-[420px] bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group relative transform-gpu ${
                item.isVideo ? 'cursor-pointer hover:-translate-y-1.5 ring-1 ring-[#E50914]/40' : 'hover:-translate-y-1'
              }`}
              style={{ contentVisibility: 'auto', containIntrinsicSize: '320px 420px' }}
            >
              {item.isVideo && item.videoUrl ? (
                <>
                  <img
                    src={item.imageUrl}
                    alt="Media Thumbnail"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <video
                    src={item.videoUrl}
                    poster={item.imageUrl}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onMouseOver={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                    onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-red-glow group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={item.imageUrl}
                  alt="Studio Media"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>

        {/* Carousel Progress Bar */}
        <div className="w-full bg-[#1F1F1F] h-1 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-[#E50914] h-full transition-all duration-150"
            style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
          />
        </div>

        {/* Full-Screen Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
            <div className="relative w-full max-w-4xl bg-[#050505] border border-[#E50914]/50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F1F] bg-[#0D0D0D]">
                <div className="flex items-center space-x-3">
                  <Film className="w-5 h-5 text-[#E50914]" />
                  <span className="text-sm font-black uppercase text-white font-display">ONYX VIDEO REEL</span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 text-zinc-400 hover:text-white bg-[#181818] hover:bg-[#E50914] rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-black aspect-video flex items-center justify-center">
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
