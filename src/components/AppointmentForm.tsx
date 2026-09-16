import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { submitLead } from '../services/leadService';

interface AppointmentFormProps {
  selectedPlanPreset?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ selectedPlanPreset }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interestedIn: selectedPlanPreset || 'Personal Training',
    preferredDate: '',
    preferredTime: 'Morning (06:00 AM - 10:00 AM)',
    trainingGoal: 'Fat Loss & Physique Toning',
    message: '',
  });

  // Update interestedIn if selectedPlanPreset changes
  React.useEffect(() => {
    if (selectedPlanPreset) {
      setFormData(prev => ({ ...prev, interestedIn: selectedPlanPreset }));
    }
  }, [selectedPlanPreset]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMsg('Please enter your Full Name, Phone Number, and Email Address.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await submitLead({
        ...formData,
        source: 'Appointment Form'
      });

      setLoading(false);
      if (res.success) {
        setSuccess(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Submission error. Please try again or reach out on WhatsApp.');
    }
  };

  return (
    <section id="book-form" className="py-24 relative bg-[#0D0D0D] border-t border-[#1F1F1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Wrapper */}
        <div className="bg-[#050505] border border-[#1F1F1F] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left">
          
          {/* Top Red Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E50914]" />

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
              BOOK A CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-display mt-1">
              SCHEDULE YOUR ONYX SESSION
            </h2>
            <div className="h-1 w-12 bg-[#E50914] mx-auto my-3 rounded-full" />
            <p className="text-xs text-zinc-400">
              Provide your contact details and preferred slot. Our team will review your enquiry and get in touch with you shortly.
            </p>
          </div>

          {success ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E50914]/20 border border-[#E50914] flex items-center justify-center text-[#E50914] mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white font-display mb-2">
                ENQUIRY RECEIVED
              </h3>
              <p className="text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-medium">
                Thank you! Your enquiry has been received. The ONYX team will get in touch with you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-8 py-3 bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider rounded-xl btn-red-glow"
              >
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMsg && (
                <div className="p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-200 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Interested In
                  </label>
                  <select
                    value={formData.interestedIn}
                    onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white focus:outline-none focus:border-[#E50914]"
                  >
                    <option value="Gym Membership">Gym Membership</option>
                    <option value="Personal Training">Personal Training (1-to-1)</option>
                    <option value="Pilates">Pilates (Mat & Reformer)</option>
                    <option value="ONYX Hybrid">ONYX Hybrid (Pilates + Gym)</option>
                    <option value="Small Group Transformation">Small Group Transformation</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white focus:outline-none focus:border-[#E50914]"
                  >
                    <option value="Morning (06:00 AM - 10:00 AM)">Morning (06:00 AM - 10:00 AM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (05:00 PM - 09:30 PM)">Evening (05:00 PM - 09:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Training Goal
                  </label>
                  <select
                    value={formData.trainingGoal}
                    onChange={(e) => setFormData({ ...formData, trainingGoal: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white focus:outline-none focus:border-[#E50914]"
                  >
                    <option value="Fat Loss & Physique Toning">Fat Loss & Physique Toning</option>
                    <option value="Muscle Gain & Hypertrophy">Muscle Gain & Hypertrophy</option>
                    <option value="Pilates Core & Flexibility">Pilates Core & Flexibility</option>
                    <option value="Postural & Injury Rehabilitation">Postural & Injury Rehabilitation</option>
                    <option value="General Fitness">General Fitness</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Message / Special Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any existing injuries, prior training experience, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-10 py-4 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-xl btn-red-glow transition-all inline-flex items-center justify-center space-x-2"
                >
                  <span>{loading ? 'Submitting Enquiry...' : 'BOOK YOUR SESSION'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
