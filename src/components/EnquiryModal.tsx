import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle, AlertCircle, Calendar, Clock } from 'lucide-react';
import { submitLead } from '../services/leadService';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interestedIn: 'Gym Membership',
    preferredDate: '',
    preferredTime: 'Morning (06:00 AM - 10:00 AM)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleDismiss = () => {
    try {
      localStorage.setItem('onyx_modal_dismissed', 'true');
    } catch (e) {
      console.warn(e);
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMsg('Please fill in your Full Name, Phone Number, and Email Address.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await submitLead({
        ...formData,
        source: 'Website Popup'
      });

      setLoading(false);
      if (res.success) {
        setSuccess(true);
        try {
          localStorage.setItem('onyx_modal_dismissed', 'true');
        } catch (e) {}
      } else {
        setErrorMsg(res.message);
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Submission error. Please try submitting again or chat with us on WhatsApp.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0D0D0D] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient Red Glow in Card Header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-[#E50914] rounded-b-full shadow-red-glow" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full bg-[#121212] border border-[#1F1F1F] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E50914]/20 border border-[#E50914] flex items-center justify-center text-[#E50914] mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase text-white font-display mb-2">
              YOUR JOURNEY BEGINS
            </h3>
            <p className="text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-medium">
              Thank you! Your enquiry has been submitted. Our team will contact you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleDismiss}
                className="flex-1 py-3 bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider rounded-xl btn-red-glow"
              >
                CLOSE
              </button>
              <a
                href="https://wa.me/917989289409?text=Hi%20ONYX,%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#121212] border border-[#1F1F1F] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E50914] font-display mb-1">
                EXCLUSIVITY • DISCIPLINE • RESULTS
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
                READY TO START YOUR ONYX JOURNEY?
              </h2>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Tell us what you're looking for and our team will help you choose the right training experience.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-800/80 rounded-lg text-xs text-red-200 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Interested In
                </label>
                <select
                  value={formData.interestedIn}
                  onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white focus:outline-none focus:border-[#E50914]"
                >
                  <option value="Gym Membership">Gym Membership</option>
                  <option value="Personal Training">Personal Training (1-to-1)</option>
                  <option value="Pilates">Pilates (Mat & Reformer)</option>
                  <option value="ONYX Hybrid">ONYX Hybrid (Pilates + Gym)</option>
                  <option value="Small Group Transformation">Small Group Transformation</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white focus:outline-none focus:border-[#E50914]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white focus:outline-none focus:border-[#E50914]"
                  >
                    <option value="Morning (06:00 AM - 10:00 AM)">Morning (06:00 AM - 10:00 AM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (05:00 PM - 09:30 PM)">Evening (05:00 PM - 09:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your fitness goal or queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#121212] border border-[#1F1F1F] rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-xl btn-red-glow transition-all"
                >
                  {loading ? 'Submitting...' : 'START YOUR JOURNEY'}
                </button>

                <a
                  href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'd%20like%20to%20know%20more%20about%20your%20training%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#121212] border border-[#1F1F1F] hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
