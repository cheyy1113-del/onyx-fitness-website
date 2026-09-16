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
      {/* 1. Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Navigation */}
      <Navbar onBookClick={() => handleOpenBookModal()} />

      {/* 3. Hero Section */}
      <Hero onBookClick={() => handleOpenBookModal()} />

      {/* 4. Enquiry Modal (Opened only via CTA clicks) */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 5. Combined Training & Pricing Section */}
      <Pricing onSelectPlan={(plan) => handleOpenBookModal(plan)} />

      {/* 6. Certified Trainers Roster */}
      <CoachingTeam />

      {/* 7. Founder & CEO */}
      <Founder />

      {/* 8. Pure Media Swiper (Photos & Videos) */}
      <Gallery />

      {/* 9. Member Testimonials */}
      <Testimonials />

      {/* 10. Shortened About ONYX Section */}
      <About />

      {/* 11. Location & Google Maps */}
      <LocationMap />

      {/* 12. Appointment & Booking Form */}
      <AppointmentForm selectedPlanPreset={selectedPlanPreset} />

      {/* 13. Footer */}
      <Footer onBookClick={() => handleOpenBookModal()} />
    </div>
  );
};

export default App;

