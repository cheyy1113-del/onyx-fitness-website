import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EnquiryModal } from './components/EnquiryModal';
import { About } from './components/About';
import { TrainingServices } from './components/TrainingServices';
import { Founder } from './components/Founder';
import { CoachingTeam } from './components/CoachingTeam';
import { Pricing } from './components/Pricing';
import { Transformation } from './components/Transformation';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { LocationMap } from './components/LocationMap';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanPreset, setSelectedPlanPreset] = useState<string>('');

  useEffect(() => {
    // Trigger popup after 4 seconds unless previously dismissed
    const timer = setTimeout(() => {
      try {
        const dismissed = localStorage.getItem('onyx_modal_dismissed');
        if (!dismissed) {
          setIsModalOpen(true);
        }
      } catch (e) {
        setIsModalOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBookModal = (preset?: string) => {
    if (preset) {
      setSelectedPlanPreset(preset);
    }
    // Scroll directly to appointment form or open modal
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

      {/* 4. Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 5. About Section */}
      <About />

      {/* 6. Services & Training */}
      <TrainingServices onSelectService={(svc) => handleOpenBookModal(svc)} />

      {/* 7. Founder & CEO */}
      <Founder />

      {/* 8. Coaching Team */}
      <CoachingTeam />

      {/* 9. Pricing Schedules */}
      <Pricing onSelectPlan={(plan) => handleOpenBookModal(plan)} />

      {/* 10. Small Group Transformation */}
      <Transformation onBookClick={() => handleOpenBookModal('Small Group Transformation')} />


      {/* 11. Member Testimonials */}
      <Testimonials />

      {/* 12. Pure Media Swiper (Photos & Videos) */}
      <Gallery />

      {/* 12. Location & Google Maps */}
      <LocationMap />

      {/* 13. Appointment & Booking Form */}
      <AppointmentForm selectedPlanPreset={selectedPlanPreset} />

      {/* 14. Footer */}
      <Footer onBookClick={() => handleOpenBookModal()} />
    </div>
  );
};

export default App;
