import React, { useRef, useState } from 'react';
import { Dumbbell, UserCheck, Flame, Layers, Users, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TrainingServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const TrainingServices: React.FC<TrainingServicesProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    {
      id: 'gym-membership',
      title: 'GYM MEMBERSHIP',
      subtitle: 'Professional Gym Access',
      desc: 'Spacious, hygienic environment equipped with premium plate-loaded machinery, heavy free weights, power racks, and cardio suites.',
      highlights: ['Premium equipment floor', 'Locker & shower facilities', 'General trainer floor guidance'],
      cta: 'EXPLORE MEMBERSHIP',
      icon: Dumbbell,
      image: '/assets/onyx_cardio_floor.jpg'
    },
    {
      id: 'personal-training',
      title: 'PERSONAL TRAINING',
      subtitle: '1-to-1 Structured Coaching',
      desc: 'Work directly with a GGFI certified coach. Custom assessment, form calibration, workout progression, and individual nutrition guidelines.',
      highlights: ['100% individual attention', 'Postural & movement assessment', 'Customized programming', 'Regular body progress checks'],
      cta: 'BOOK PERSONAL TRAINING',
      icon: UserCheck,
      image: '/assets/onyx_chest_press.jpg'
    },
    {
      id: 'pilates',
      title: 'PILATES',
      subtitle: 'Control • Strength • Mobility',
      desc: 'Mat and Reformer-based Pilates designed to cultivate deep core strength, spinal stabilization, muscle lengthening, and flexibility.',
      highlights: ['Reformer & Mat apparatus', 'Focus on posture & alignment', 'Improves joint flexibility', 'Controlled low-impact strength'],
      cta: 'EXPLORE PILATES',
      icon: Flame,
      image: '/assets/onyx_pilates_reformer.jpg'
    },
    {
      id: 'onyx-hybrid',
      title: 'ONYX HYBRID',
      subtitle: 'Pilates + Gym Access',
      desc: '3 Days / Week Pilates sessions combined with full Gym Access on remaining days to balance strength hypertrophy with core mobility.',
      highlights: ['12 Reformer Pilates sessions / mo', 'Unlimited gym floor access', 'Best of both disciplines', 'Accelerated transformation'],
      cta: 'EXPLORE HYBRID',
      icon: Layers,
      image: '/assets/onyx_strength_floor.jpg'
    },
    {
      id: 'small-group-transformation',
      title: 'SMALL GROUP TRANSFORMATION',
      subtitle: 'High Intensity Batches (2–5 Members)',
      desc: 'Supercharged 55-minute active sessions combining strength, HIIT, and conditioning under direct coach supervision.',
      highlights: ['Exclusive 2 to 5 members / batch', '55-Minute super active sessions', 'Mon-Fri daily workout', 'High motivation environment'],
      cta: 'VIEW PROGRAM',
      icon: Users,
      image: '/assets/onyx_dumbbells_rack.jpg'
    }
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
    <section id="training" className="py-14 relative bg-[#0D0D0D] border-y border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#E50914]/10 border border-[#E50914]/40 rounded-full px-4 py-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E50914] font-display">
                PURPOSE-BUILT PROGRAMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              OUR TRAINING SERVICES
            </h2>
            <p className="text-zinc-300 text-sm font-medium mt-1">
              Swipe left or right to explore our gym, personal training, Pilates, and hybrid programs.
            </p>
          </div>

          {/* Swipe Left/Right Buttons */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
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

        {/* Horizontal Swipeable Training Cards Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-6 scrollbar-none snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="snap-start flex-shrink-0 w-80 sm:w-96 bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Media Header */}
                <div className="relative h-52 overflow-hidden bg-[#121212]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#050505]/90 border border-[#1F1F1F] flex items-center justify-center text-[#E50914] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-white font-display mb-1 group-hover:text-[#E50914] transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs font-bold text-[#E50914] mb-2 uppercase tracking-wider">
                      {service.subtitle}
                    </div>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3">
                      {service.desc}
                    </p>

                    <ul className="space-y-1.5 mb-4 border-t border-[#121212] pt-3">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-zinc-200 flex items-start space-x-2">
                          <span className="text-[#E50914] font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 bg-[#121212] group-hover:bg-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded-xl border border-[#1F1F1F] group-hover:border-[#E50914] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Progress Bar */}
        <div className="w-full bg-[#1F1F1F] h-1 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-[#E50914] h-full transition-all duration-150"
            style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
          />
        </div>

      </div>
    </section>
  );
};
