import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { OnyxLogo } from './OnyxLogo';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const heroImages = [
    {
      url: '/assets/onyx_photo_01.jpg',
      caption: 'Professional Free Weight & Dumbbell Zone'
    },
    {
      url: '/assets/onyx_photo_02.jpg',
      caption: 'Main Strength & Machine Floor'
    },
    {
      url: '/assets/onyx_photo_03.jpg',
      caption: 'Dedicated Reformer Pilates Studio'
    },
    {
      url: '/assets/onyx_photo_04.jpg',
      caption: 'Cardio Suite & Studio View'
    },
    {
      url: '/assets/onyx_photo_05.jpg',
      caption: 'Functional Training & Cable Crossover'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide interval (cycles every 4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, heroImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-12 bg-[#050505]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Auto-Sliding Background Images - Bright & Clear Overlay */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.3) 0%, rgba(5, 5, 5, 0.75) 100%), url('${image.url}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      ))}

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] z-1" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/15 rounded-full blur-[140px] pointer-events-none z-1" />

      {/* Manual Left/Right Slide Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 bg-black/60 hover:bg-[#E50914] text-white rounded-full border border-zinc-700 backdrop-blur-md transition-all duration-300 hidden sm:flex items-center justify-center shadow-2xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 bg-black/60 hover:bg-[#E50914] text-white rounded-full border border-zinc-700 backdrop-blur-md transition-all duration-300 hidden sm:flex items-center justify-center shadow-2xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-9 bg-[#E50914]' : 'w-2.5 bg-zinc-500 hover:bg-zinc-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Location Badge Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#0D0D0D]/90 border border-[#E50914]/40 rounded-full px-4 py-1.5 mb-4 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-zinc-100 font-display">
            S.R. NAGAR, HYDERABAD
          </span>
        </div>

        {/* Official Blended Onyx Logo (XL Size with Prominent Text) */}
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
          <OnyxLogo size="xl" showSubtitle={true} />
        </div>

        {/* Clean Slogan */}
        <div className="inline-block bg-[#121212]/85 border border-[#1F1F1F] px-5 py-2 rounded-xl mb-4 backdrop-blur-md">
          <p className="text-base sm:text-xl font-extrabold tracking-wide text-zinc-100 uppercase">
            Train Strong <span className="text-[#E50914]">•</span> Move Better <span className="text-[#E50914]">•</span> Live Better
          </p>
        </div>

        {/* Concise Description Paragraph */}
        <p className="text-zinc-200 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-medium drop-shadow-md">
          Hyderabad’s premier studio integrating <span className="text-white font-bold">Strength Gym</span>, 1-on-1 <span className="text-white font-bold">Personal Coaching</span>, <span className="text-white font-bold">Reformer Pilates</span>, and <span className="text-white font-bold">Injury Rehabilitation</span>.
        </p>

        {/* Interactive Action CTAs */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-6">
          <button
            onClick={onBookClick}
            className="px-6 py-3.5 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full btn-red-glow flex items-center justify-center space-x-2 transition-all duration-300 shadow-red-glow"
          >
            <span>BOOK A SESSION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'd%20like%20to%20know%20more%20about%20your%20training%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#0D0D0D] hover:bg-[#181818] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-[#1F1F1F] hover:border-zinc-500 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Current Slide Label Tag */}
        <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-300 bg-black/75 border border-zinc-700 px-3.5 py-1 rounded-full backdrop-blur-md">
          📍 {heroImages[currentSlide].caption}
        </div>

      </div>
    </section>
  );
};
