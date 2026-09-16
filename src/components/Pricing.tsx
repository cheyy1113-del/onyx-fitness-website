import React, { useState } from 'react';
import { Check, Star, Zap, Award, Sparkles, MessageSquare } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planTitle: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'gym' | 'pt' | 'pilates' | 'hybrid' | 'group'>('gym');

  return (
    <section id="pricing" className="py-14 relative bg-[#050505] overflow-hidden border-t border-[#1F1F1F]">
      {/* Background Glow */}
      <div className="ambient-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
            TRAINING & PRICING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mt-1">
            TRAINING OPTIONS & PRICING
          </h2>
          <div className="h-1.5 w-16 bg-[#E50914] mx-auto my-3 rounded-full" />
          <p className="text-zinc-300 text-base sm:text-lg">
            Clear, transparent investments across Gym Access, Personal Training, Pilates, ONYX Hybrid, and Small Group Transformation.
          </p>
        </div>

        {/* 5-Category Tab Navigation in EXACT required order */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2 scrollbar-none">
          <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-2 rounded-2xl flex space-x-1.5 sm:space-x-2">
            <button
              onClick={() => setActiveTab('gym')}
              className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'gym'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              1. Gym Access
            </button>
            
            <button
              onClick={() => setActiveTab('pt')}
              className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'pt'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              2. Personal Training
            </button>

            <button
              onClick={() => setActiveTab('pilates')}
              className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'pilates'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              3. Pilates
            </button>

            <button
              onClick={() => setActiveTab('hybrid')}
              className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'hybrid'
                  ? 'bg-[#E50914] text-white shadow-red-glow ring-2 ring-[#E50914]'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              4. ONYX Hybrid
            </button>

            <button
              onClick={() => setActiveTab('group')}
              className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'group'
                  ? 'bg-[#E50914] text-white shadow-red-glow'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              5. Small Group / Friends
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. GENERAL GYM ACCESS                                    */}
        {/* ======================================================== */}
        {activeTab === 'gym' && (
          <div className="space-y-6 text-left">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl">
              <h3 className="text-2xl font-black uppercase text-white font-display mb-1">
                GENERAL GYM ACCESS
              </h3>
              <p className="text-sm text-zinc-300">
                Spacious equipment floor with premium plate-loaded machines, power racks, cardio suites, and steam bath access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. PERSONAL TRAINING (NEW PRICING)                       */}
        {/* ======================================================== */}
        {activeTab === 'pt' && (
          <div className="space-y-8 text-left">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl">
              <h3 className="text-2xl font-black uppercase text-white font-display mb-1">
                PERSONAL TRAINING (1-TO-1 COACHING)
              </h3>
              <p className="text-sm text-zinc-300">
                Direct 1-on-1 coaching crafting tailored biomechanics, form calibration, workout progression, and nutrition guidelines.
              </p>
            </div>

            {/* 5 DAYS / WEEK SECTION */}
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded font-display">
                  5 DAYS / WEEK
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white font-display uppercase">
                  5 DAYS A WEEK — PERSONAL TRAINING
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] p-6 rounded-xl flex flex-col justify-between transition-all">
                  <div>
                    <div className="text-xs font-black text-[#E50914] uppercase tracking-wider mb-1">1 MONTH</div>
                    <div className="text-3xl font-black text-white font-display mb-3">₹13,500/-</div>
                    <p className="text-xs text-zinc-400 mb-4">Full 5 days/week intensive 1-on-1 coaching for 1 Month.</p>
                  </div>
                  <button
                    onClick={() => onSelectPlan('PT 5 Days/Wk - 1 Month (₹13,500)')}
                    className="w-full py-3 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-lg btn-red-glow"
                  >
                    SELECT 1 MONTH PT
                  </button>
                </div>

                <div className="bg-[#050505] border border-[#E50914] p-6 rounded-xl flex flex-col justify-between relative shadow-red-glow">
                  <span className="absolute -top-3 right-4 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full font-display">
                    15% OFF
                  </span>
                  <div>
                    <div className="text-xs font-black text-[#E50914] uppercase tracking-wider mb-1">3 MONTHS</div>
                    <div className="text-3xl font-black text-white font-display mb-1">₹34,400/-</div>
                    <div className="inline-block bg-[#E50914]/20 border border-[#E50914]/50 px-2 py-0.5 rounded text-[10px] font-black text-[#E50914] uppercase tracking-wider mb-3">
                      SAVINGS APPLIED (15% OFF)
                    </div>
                    <p className="text-xs text-zinc-400 mb-4">Sustained 5 days/week body transformation coaching over 3 Months.</p>
                  </div>
                  <button
                    onClick={() => onSelectPlan('PT 5 Days/Wk - 3 Months (₹34,400 - 15% OFF)')}
                    className="w-full py-3 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-lg btn-red-glow"
                  >
                    SELECT 3 MONTHS PT
                  </button>
                </div>

                <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] p-6 rounded-xl flex flex-col justify-between relative">
                  <span className="absolute -top-3 right-4 bg-zinc-800 border border-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full font-display">
                    25% OFF
                  </span>
                  <div>
                    <div className="text-xs font-black text-[#E50914] uppercase tracking-wider mb-1">6 MONTHS</div>
                    <div className="text-3xl font-black text-white font-display mb-1">₹60,700/-</div>
                    <div className="inline-block bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded text-[10px] font-black text-zinc-200 uppercase tracking-wider mb-3">
                      BEST VALUE (25% OFF)
                    </div>
                    <p className="text-xs text-zinc-400 mb-4">Complete 6-Month 1-on-1 athletic overhaul (5 days/week).</p>
                  </div>
                  <button
                    onClick={() => onSelectPlan('PT 5 Days/Wk - 6 Months (₹60,700 - 25% OFF)')}
                    className="w-full py-3 bg-[#121212] hover:bg-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded-lg border border-[#1F1F1F]"
                  >
                    SELECT 6 MONTHS PT
                  </button>
                </div>
              </div>
            </div>

            {/* 3 DAYS / WEEK SECTION */}
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-zinc-800 border border-[#1F1F1F] text-white text-xs font-black uppercase tracking-wider rounded font-display">
                  3 DAYS / WEEK
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white font-display uppercase">
                  3 DAYS A WEEK — PERSONAL TRAINING
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] p-6 rounded-xl flex flex-col justify-between transition-all">
                  <div>
                    <div className="text-xs font-black text-[#E50914] uppercase tracking-wider mb-1">1 MONTH</div>
                    <div className="text-3xl font-black text-white font-display mb-3">₹9,500/-</div>
                    <p className="text-xs text-zinc-400 mb-4">3 days/week targeted coaching & form correction for 1 Month.</p>
                  </div>
                  <button
                    onClick={() => onSelectPlan('PT 3 Days/Wk - 1 Month (₹9,500)')}
                    className="w-full py-3 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-lg btn-red-glow"
                  >
                    SELECT 1 MONTH PT
                  </button>
                </div>

                <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] p-6 rounded-xl flex flex-col justify-between relative">
                  <span className="absolute -top-3 right-4 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full font-display">
                    15% OFF
                  </span>
                  <div>
                    <div className="text-xs font-black text-[#E50914] uppercase tracking-wider mb-1">3 MONTHS</div>
                    <div className="text-3xl font-black text-white font-display mb-1">₹24,200/-</div>
                    <div className="inline-block bg-[#E50914]/20 border border-[#E50914]/50 px-2 py-0.5 rounded text-[10px] font-black text-[#E50914] uppercase tracking-wider mb-3">
                      SAVINGS APPLIED (15% OFF)
                    </div>
                    <p className="text-xs text-zinc-400 mb-4">Steady 3 days/week progressive coaching over 3 Months.</p>
                  </div>
                  <button
                    onClick={() => onSelectPlan('PT 3 Days/Wk - 3 Months (₹24,200 - 15% OFF)')}
                    className="w-full py-3 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-lg btn-red-glow"
                  >
                    SELECT 3 MONTHS PT
                  </button>
                </div>

                <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] p-6 rounded-xl flex flex-col justify-between relative">
                  <span className="absolute -top-3 right-4 bg-zinc-800 border border-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full font-display">
                    25% OFF
                  </span>
                  <div>
                    <div className="text-xs font-black text-[#E50914] uppercase tracking-wider mb-1">6 MONTHS</div>
                    <div className="text-3xl font-black text-white font-display mb-1">₹42,700/-</div>
                    <div className="inline-block bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded text-[10px] font-black text-zinc-200 uppercase tracking-wider mb-3">
                      BEST VALUE (25% OFF)
                    </div>
                    <p className="text-xs text-zinc-400 mb-4">Long-term 3 days/week coaching protocol over 6 Months.</p>
                  </div>
                  <button
                    onClick={() => onSelectPlan('PT 3 Days/Wk - 6 Months (₹42,700 - 25% OFF)')}
                    className="w-full py-3 bg-[#121212] hover:bg-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded-lg border border-[#1F1F1F]"
                  >
                    SELECT 6 MONTHS PT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 3. PILATES                                               */}
        {/* ======================================================== */}
        {activeTab === 'pilates' && (
          <div className="space-y-8 text-left">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl">
              <h3 className="text-2xl font-black uppercase text-white font-display mb-1">
                PILATES — CONTROL • STRENGTH • MOBILITY
              </h3>
              <p className="text-sm text-zinc-300">
                Mat and Reformer Pilates modules taught by specialized trainers for core power, postural alignment, and flexibility.
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

        {/* ======================================================== */}
        {/* 4. ONYX HYBRID (MUST STAND OUT)                         */}
        {/* ======================================================== */}
        {activeTab === 'hybrid' && (
          <div className="space-y-8 text-left">
            <div className="bg-gradient-to-r from-[#0D0D0D] via-[#1A0507] to-[#0D0D0D] border-2 border-[#E50914] p-8 sm:p-10 rounded-3xl text-center shadow-[0_0_40px_rgba(229,9,20,0.35)] relative overflow-hidden">
              <span className="px-5 py-1.5 bg-[#E50914] text-white text-xs font-black uppercase tracking-widest rounded-full font-display shadow-red-glow inline-flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FEATURED PREMIUM OFFERING</span>
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-display mt-4">
                ONYX HYBRID — PILATES + GYM
              </h3>
              <p className="text-zinc-200 text-base sm:text-lg max-w-2xl mx-auto mt-2 font-medium leading-relaxed">
                A complete ONYX training experience combining multiple training formats. 3 Days / Week Pilates + Full Gym Access on remaining days (includes 12 Pilates sessions per month + full gym access).
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

        {/* ======================================================== */}
        {/* 5. SMALL GROUP TRANSFORMATION / FRIENDS SPECIAL          */}
        {/* ======================================================== */}
        {activeTab === 'group' && (
          <div className="space-y-8 text-left">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 sm:p-8 rounded-2xl">
              <span className="px-3.5 py-1 bg-[#E50914]/20 border border-[#E50914]/50 text-[#E50914] text-xs font-black uppercase tracking-wider rounded font-display">
                GROUP & BATCH TRAINING
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-display mt-2 mb-1">
                SMALL GROUP TRANSFORMATION / FRIENDS SPECIAL
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base">
                Train together in coach-led high intensity 55-minute active sessions (Mon-Fri) or group crossfit style conditioning.
              </p>
            </div>

            {/* Batch Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0D0D0D] border border-[#E50914]/40 p-6 rounded-2xl flex flex-col justify-between shadow-red-glow">
                <div>
                  <div className="text-xs font-black uppercase text-[#E50914] tracking-wider mb-1">
                    SMALL GROUP TRANSFORMATION BATCHES
                  </div>
                  <h4 className="text-2xl font-black uppercase text-white font-display mb-4">
                    COACH-LED BATCH PRICING
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-4 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">2 – 3 Members / Batch</div>
                        <div className="text-xs text-zinc-400">Intimate semi-private coaching</div>
                      </div>
                      <div className="text-2xl font-black text-[#E50914] font-display">
                        ₹7,500 <span className="text-xs text-zinc-400 font-normal">/ person</span>
                      </div>
                    </div>

                    <div className="p-4 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">4 – 5 Members / Batch</div>
                        <div className="text-xs text-zinc-400">Focused group motivation</div>
                      </div>
                      <div className="text-2xl font-black text-[#E50914] font-display">
                        ₹5,000 <span className="text-xs text-zinc-400 font-normal">/ person</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan('Small Group Transformation')}
                  className="w-full py-3.5 bg-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded-xl btn-red-glow"
                >
                  ENQUIRE FOR SMALL GROUP TRANSFORMATION
                </button>
              </div>

              {/* Friends Special Multi-Month Packages */}
              <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black uppercase text-[#E50914] tracking-wider mb-1">
                    FRIENDS SPECIAL PACKAGES
                  </div>
                  <h4 className="text-2xl font-black uppercase text-white font-display mb-4">
                    GROUP DISCOUNT RATES
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                      <span className="text-sm font-bold text-white">01 Month Group Package</span>
                      <span className="text-xl font-black text-white font-display">₹7,500 <span className="text-xs text-zinc-400 font-normal">/ mo</span></span>
                    </div>
                    <div className="p-3.5 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                      <span className="text-sm font-bold text-white">03 Months Group Package</span>
                      <span className="text-xl font-black text-white font-display">₹20,250 <span className="text-xs text-zinc-400 font-normal">/ 3 mo</span></span>
                    </div>
                    <div className="p-3.5 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center justify-between">
                      <span className="text-sm font-bold text-white">06 Months Group Package</span>
                      <span className="text-xl font-black text-white font-display">₹36,000 <span className="text-xs text-zinc-400 font-normal">/ 6 mo</span></span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan('Friends Special Group Package')}
                  className="w-full py-3.5 bg-[#121212] hover:bg-[#E50914] text-white text-xs font-black uppercase tracking-wider rounded-xl border border-[#1F1F1F]"
                >
                  BOOK FRIENDS SPECIAL
                </button>
              </div>
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
        <span className="absolute -top-3.5 right-6 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full font-display">
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
