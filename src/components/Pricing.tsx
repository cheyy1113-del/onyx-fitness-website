import React, { useState } from 'react';
import { Check, Shield, Star, Award, Zap, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planTitle: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeCategory, setActiveCategory] = useState<'gym' | 'pt' | 'friends' | 'pilates' | 'hybrid'>('gym');

  return (
    <section id="pricing" className="py-14 relative bg-[#050505] overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="ambient-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
            MEMBERSHIP & PRICING PROTOCOLS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mt-1">
            TRANSPARENT INVESTMENTS IN YOUR HEALTH
          </h2>
          <div className="h-1.5 w-16 bg-[#E50914] mx-auto my-3 rounded-full" />
          <p className="text-zinc-200 text-base sm:text-lg">
            Select from our standard gym access, intensive 1-to-1 personal training, Pilates reformer modules, or hybrid memberships.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2 scrollbar-hide">
          <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-2 rounded-2xl flex space-x-1.5 sm:space-x-2">
            <button
              onClick={() => setActiveCategory('gym')}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'gym'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Gym Access
            </button>
            
            <button
              onClick={() => setActiveCategory('pt')}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'pt'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Personal Training
            </button>

            <button
              onClick={() => setActiveCategory('friends')}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'friends'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Friends Special
            </button>

            <button
              onClick={() => setActiveCategory('pilates')}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'pilates'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Pilates
            </button>

            <button
              onClick={() => setActiveCategory('hybrid')}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'hybrid'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              ONYX Hybrid
            </button>
          </div>
        </div>

        {/* CATEGORY 1: GYM MEMBERSHIP */}
        {activeCategory === 'gym' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <PricingCard
              title="01 MONTH"
              subtitle="GENERAL ACCESS"
              price="₹3,500"
              period="/ Month"
              features={['Full gym floor access', 'State-of-the-art strength machinery', 'Cardio suites & free weights', 'Steam Bath facility access', 'Locker room access']}
              onSelect={() => onSelectPlan('Gym Membership - 01 Month (₹3,500)')}
            />

            <PricingCard
              title="03 MONTHS"
              subtitle="GENERAL ACCESS"
              price="₹8,999"
              period="/ 3 Months"
              popular
              features={['Full gym floor access', 'State-of-the-art strength machinery', 'Cardio suites & free weights', 'Steam Bath facility access', 'Locker room access', 'Workout plan guidance']}
              onSelect={() => onSelectPlan('Gym Membership - 03 Months (₹8,999)')}
            />

            <PricingCard
              title="06 MONTHS"
              subtitle="GENERAL ACCESS"
              price="₹14,999"
              period="/ 6 Months"
              features={['Full gym floor access', 'State-of-the-art strength machinery', 'Cardio suites & free weights', 'Steam Bath facility access', 'Locker room access', 'Periodic body composition audits']}
              onSelect={() => onSelectPlan('Gym Membership - 06 Months (₹14,999)')}
            />

            <PricingCard
              title="12 MONTHS"
              subtitle="GENERAL ACCESS"
              price="₹23,999"
              period="/ Year"
              features={['Full gym floor access', 'State-of-the-art strength machinery', 'Cardio suites & free weights', 'Steam Bath facility access', 'Locker room access', 'Full year uninterrupted consistency']}
              onSelect={() => onSelectPlan('Gym Membership - 12 Months (₹23,999)')}
            />
          </div>
        )}

        {/* CATEGORY 2: PERSONAL TRAINING (1-TO-1 COACHING) */}
        {activeCategory === 'pt' && (
          <div className="space-y-8 text-left">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl">
              <h3 className="text-2xl font-black uppercase text-white font-display mb-1">
                1-TO-1 PERSONAL TRAINING
              </h3>
              <p className="text-sm text-zinc-300">
                Dedicated GGFI certified coach conducting personalized biomechanics assessments, form correction, and custom training programming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                title="01 MONTH (5 DAYS/WK)"
                subtitle="5 DAYS / WEEK"
                price="₹10,000"
                period="/ Month"
                features={['5 Days a week 1-on-1 coaching', 'Custom body transformation blueprint', 'Posture & movement audit', 'Dietary macro guidance']}
                onSelect={() => onSelectPlan('PT 01 Month - 5 Days/Wk (₹10,000)')}
              />

              <PricingCard
                title="01 MONTH (3 DAYS/WK)"
                subtitle="3 DAYS / WEEK"
                price="₹7,000"
                period="/ Month"
                features={['3 Days a week 1-on-1 coaching', 'Targeted muscle focus sessions', 'Form correction & safety', 'General nutrition guidance']}
                onSelect={() => onSelectPlan('PT 01 Month - 3 Days/Wk (₹7,000)')}
              />

              <PricingCard
                title="03 MONTHS (5 DAYS/WK)"
                subtitle="5 DAYS / WEEK"
                price="₹27,000"
                period="/ 3 Months"
                popular
                features={['5 Days a week 1-on-1 coaching', 'Intensive fat loss / muscle gain phase', 'Progressive overload tracking', 'Continuous progress audits']}
                onSelect={() => onSelectPlan('PT 03 Months - 5 Days/Wk (₹27,000)')}
              />

              <PricingCard
                title="03 MONTHS (3 DAYS/WK)"
                subtitle="3 DAYS / WEEK"
                price="₹18,900"
                period="/ 3 Months"
                features={['3 Days a week 1-on-1 coaching', 'Steady progressive conditioning', 'Core & strength development', 'Nutrition alignment']}
                onSelect={() => onSelectPlan('PT 03 Months - 3 Days/Wk (₹18,900)')}
              />
            </div>

            {/* LONG TERM PT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#E50914] p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#E50914] uppercase tracking-wider mb-1">LONG-TERM PT</div>
                  <h4 className="text-3xl font-black text-white font-display mb-2">06 MONTHS PT</h4>
                  <div className="text-4xl sm:text-5xl font-black text-white font-display mb-4">₹48,000</div>
                  <ul className="space-y-2.5 text-sm text-zinc-200 mb-6">
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Full 6-Month 1-to-1 dedicated coach assignment</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Long-term athletic & physical transformation</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan('PT 06 Months Long-Term (₹48,000)')}
                  className="w-full py-4 bg-[#E50914] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl btn-red-glow"
                >
                  ENQUIRE FOR 06 MONTHS PT
                </button>
              </div>

              <div className="bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#E50914] p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#E50914] uppercase tracking-wider mb-1">LONG-TERM PT</div>
                  <h4 className="text-3xl font-black text-white font-display mb-2">12 MONTHS PT</h4>
                  <div className="text-4xl sm:text-5xl font-black text-white font-display mb-4">₹84,000</div>
                  <ul className="space-y-2.5 text-sm text-zinc-200 mb-6">
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Full 1-Year elite coaching sponsorship</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Complete lifestyle & physical overhaul</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan('PT 12 Months Long-Term (₹84,000)')}
                  className="w-full py-4 bg-[#E50914] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl btn-red-glow"
                >
                  ENQUIRE FOR 12 MONTHS PT
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 3: FRIENDS SPECIAL */}
        {activeCategory === 'friends' && (
          <div className="space-y-8 text-left">
            <div className="bg-gradient-to-r from-[#0D0D0D] via-[#121212] to-[#0D0D0D] border border-[#E50914]/50 p-8 rounded-3xl text-center">
              <span className="px-4 py-1.5 bg-[#E50914] text-white text-xs font-black uppercase tracking-widest rounded-full font-display">
                GROUP DISCOUNT PROTOCOL
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-display mt-3">
                FRIENDS SPECIAL — CROSSFIT & GROUP TRAINING
              </h3>
              <p className="text-zinc-200 text-base sm:text-lg font-bold mt-2">
                "Train together. Get stronger together."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PricingCard
                title="01 MONTH"
                subtitle="CROSSFIT • GROUP TRAINING"
                price="₹7,500"
                period="/ Month"
                features={['Group functional training', 'Crossfit style conditioning', 'Shared energy & accountability', 'Coach-supervised workouts']}
                onSelect={() => onSelectPlan('Friends Special 01 Month (₹7,500)')}
              />

              <PricingCard
                title="03 MONTHS"
                subtitle="CROSSFIT • GROUP TRAINING"
                price="₹20,250"
                period="/ 3 Months"
                popular
                features={['Group functional training', 'Crossfit style conditioning', 'Shared energy & accountability', 'Coach-supervised workouts', 'Sustained group progression']}
                onSelect={() => onSelectPlan('Friends Special 03 Months (₹20,250)')}
              />

              <PricingCard
                title="06 MONTHS"
                subtitle="CROSSFIT • GROUP TRAINING"
                price="₹36,000"
                period="/ 6 Months"
                features={['Group functional training', 'Crossfit style conditioning', 'Shared energy & accountability', 'Coach-supervised workouts', 'Complete fitness squad transformation']}
                onSelect={() => onSelectPlan('Friends Special 06 Months (₹36,000)')}
              />
            </div>
          </div>
        )}

        {/* CATEGORY 4: PILATES */}
        {activeCategory === 'pilates' && (
          <div className="space-y-8 text-left">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl">
              <h3 className="text-2xl font-black uppercase text-white font-display mb-1">
                PILATES — CONTROL • STRENGTH • MOBILITY
              </h3>
              <p className="text-sm text-zinc-300">
                Mat and Reformer Pilates sessions taught by specialized trainers for core power, postural alignment, and flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#E50914] uppercase tracking-wider mb-1">01 MONTH PILATES</div>
                  <div className="text-3xl font-black text-white font-display mb-4">₹9,500 <span className="text-xs text-zinc-400 font-normal">/ 12 Sessions (3 Days/Wk)</span></div>
                  <div className="text-2xl font-bold text-zinc-200 font-display mb-6">₹7,500 <span className="text-xs text-zinc-400 font-normal">/ 8 Sessions (2 Days/Wk)</span></div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Reformer & Mat apparatus training</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Core alignment & flexibility</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan('Pilates 01 Month Package')}
                  className="w-full py-3.5 bg-[#E50914] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl btn-red-glow"
                >
                  BOOK PILATES 01 MONTH
                </button>
              </div>

              <div className="bg-[#0D0D0D] border border-[#E50914] p-6 rounded-2xl flex flex-col justify-between relative shadow-red-glow">
                <span className="absolute -top-3.5 right-6 bg-[#E50914] text-white text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full font-display">POPULAR</span>
                <div>
                  <div className="text-xs font-bold text-[#E50914] uppercase tracking-wider mb-1">03 MONTHS PILATES</div>
                  <div className="text-3xl font-black text-white font-display mb-4">₹25,650 <span className="text-xs text-zinc-400 font-normal">/ 36 Sessions (3 Days/Wk)</span></div>
                  <div className="text-2xl font-bold text-zinc-200 font-display mb-6">₹20,250 <span className="text-xs text-zinc-400 font-normal">/ 24 Sessions (2 Days/Wk)</span></div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Reformer & Mat apparatus training</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Deep core strength & mobility</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan('Pilates 03 Months Package')}
                  className="w-full py-3.5 bg-[#E50914] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl btn-red-glow"
                >
                  BOOK PILATES 03 MONTHS
                </button>
              </div>

              <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#E50914] uppercase tracking-wider mb-1">06 MONTHS PILATES</div>
                  <div className="text-3xl font-black text-white font-display mb-4">₹48,450 <span className="text-xs text-zinc-400 font-normal">/ 72 Sessions (3 Days/Wk)</span></div>
                  <div className="text-2xl font-bold text-zinc-200 font-display mb-6">₹38,250 <span className="text-xs text-zinc-400 font-normal">/ 48 Sessions (2 Days/Wk)</span></div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Complete postural transformation</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-[#E50914] mr-2 flex-shrink-0" /> Long-term joint health</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan('Pilates 06 Months Package')}
                  className="w-full py-3.5 bg-[#E50914] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl btn-red-glow"
                >
                  BOOK PILATES 06 MONTHS
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 5: ONYX HYBRID (PILATES + GYM) */}
        {activeCategory === 'hybrid' && (
          <div className="space-y-8 text-left">
            <div className="bg-gradient-to-r from-[#0D0D0D] via-[#121212] to-[#0D0D0D] border border-[#E50914] p-8 rounded-3xl text-center shadow-red-glow">
              <span className="px-4 py-1.5 bg-[#E50914] text-white text-xs font-black uppercase tracking-widest rounded-full font-display">
                ULTIMATE COMBINATION MEMBERSHIP
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-display mt-3">
                ONYX HYBRID — PILATES + GYM
              </h3>
              <p className="text-zinc-200 text-base sm:text-lg max-w-xl mx-auto mt-2 font-medium">
                3 Days / Week Pilates + Full Gym Access on Remaining Days (Includes 12 Pilates sessions per month + gym access).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                title="01 MONTH HYBRID"
                subtitle="12 PILATES SESSIONS + GYM ACCESS"
                price="₹11,999"
                period="/ Month"
                features={['12 Pilates Sessions per month', 'Unlimited gym floor access', 'Best of strength & core mobility', 'Full facility amenities access']}
                onSelect={() => onSelectPlan('ONYX Hybrid - 01 Month (₹11,999)')}
              />

              <PricingCard
                title="03 MONTHS HYBRID"
                subtitle="36 PILATES SESSIONS + GYM ACCESS"
                price="₹32,399"
                period="/ 3 Months"
                popular
                features={['36 Pilates Sessions / 3 months', 'Unlimited gym floor access', 'Accelerated physical transformation', 'Full facility amenities access']}
                onSelect={() => onSelectPlan('ONYX Hybrid - 03 Months (₹32,399)')}
              />

              <PricingCard
                title="06 MONTHS HYBRID"
                subtitle="72 PILATES SESSIONS + GYM ACCESS"
                price="₹60,000"
                period="/ 6 Months"
                features={['72 Pilates Sessions / 6 months', 'Unlimited gym floor access', 'Comprehensive core & strength protocol', 'Full facility amenities access']}
                onSelect={() => onSelectPlan('ONYX Hybrid - 06 Months (₹60,000)')}
              />

              <PricingCard
                title="12 MONTHS HYBRID"
                subtitle="144 PILATES SESSIONS + GYM ACCESS"
                price="₹1,08,000"
                period="/ Year"
                features={['144 Pilates Sessions / Year', 'Unlimited gym floor access', 'Complete athletic lifestyle overhaul', 'Full facility amenities access']}
                onSelect={() => onSelectPlan('ONYX Hybrid - 12 Months (₹1,08,000)')}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  period,
  popular,
  features,
  onSelect,
}) => {
  return (
    <div
      className={`bg-[#0D0D0D] border ${
        popular ? 'border-[#E50914] shadow-red-glow' : 'border-[#1F1F1F] hover:border-zinc-500'
      } rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1`}
    >
      {popular && (
        <span className="absolute -top-3.5 right-6 bg-[#E50914] text-white text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full font-display">
          RECOMMENDED
        </span>
      )}

      <div>
        <div className="text-xs font-black uppercase tracking-wider text-[#E50914] mb-1">
          {subtitle}
        </div>
        <h3 className="text-2xl font-black uppercase text-white font-display mb-3">
          {title}
        </h3>
        
        <div className="mb-6">
          <span className="text-4xl sm:text-5xl font-black text-white font-display">{price}</span>
          <span className="text-xs text-zinc-400 font-bold ml-1.5">{period}</span>
        </div>

        <ul className="space-y-3 mb-8 border-t border-[#121212] pt-4">
          {features.map((feat, i) => (
            <li key={i} className="text-xs sm:text-sm text-zinc-200 flex items-start">
              <Check className="w-4 h-4 text-[#E50914] mr-2 mt-0.5 flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
          popular
            ? 'bg-[#E50914] hover:bg-[#C1070F] text-white btn-red-glow'
            : 'bg-[#121212] hover:bg-[#181818] text-white border border-[#1F1F1F] hover:border-[#E50914]'
        }`}
      >
        SELECT PLAN
      </button>
    </div>
  );
};
