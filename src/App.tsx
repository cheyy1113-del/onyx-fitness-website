import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EnquiryModal } from './components/EnquiryModal';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { CoachingTeam } from './components/CoachingTeam';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { LocationMap } from './components/LocationMap';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanPreset, setSelectedPlanPreset] = useState<string>('');

  const handleOpenBookModal = (preset?: string) => {
    if (preset) {
      setSelectedPlanPreset(preset);
    }
    const formElement = document.getElementById('book-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E50914] selection:text-white relative">
      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Navigation */}
      <Navbar onBookClick={() => handleOpenBookModal()} />

      {/* 1. HOME / HERO SECTION */}
      <Hero onBookClick={() => handleOpenBookModal()} />

      {/* Enquiry Modal (Opened only via manual CTA clicks) */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 3. VISUALS / GALLERY / VIDEOS SECTION */}
      <Gallery />

      {/* 4. TRAINING & PRICING SECTION */}
      <Pricing onSelectPlan={(plan) => handleOpenBookModal(plan)} />

      {/* 5. TEAM & FOUNDER SECTION */}
      <div id="team">
        <CoachingTeam />
        <Founder />
      </div>

      {/* 6. TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 7. CONTACT / LOCATION SECTION */}
      <div id="contact">
        <LocationMap />
        <AppointmentForm selectedPlanPreset={selectedPlanPreset} />
      </div>

      {/* Footer */}
      <Footer onBookClick={() => handleOpenBookModal()} />
    </div>
  );
};

export default App;
