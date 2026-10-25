import React, { useState } from 'react';
import { Trainer } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { X, Calendar, Clock, User, CheckCircle2, Dumbbell, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainers: Trainer[];
  selectedTrainerId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  trainers,
  selectedTrainerId
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [trainerId, setTrainerId] = useState<string>(
    selectedTrainerId || trainers[0]?.id || ''
  );
  const [sessionFocus, setSessionFocus] = useState('Barbell Strength & Mechanics');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('07:00 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    code: string;
    trainerName: string;
    date: string;
    time: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) return;

    setIsSubmitting(true);
    const selectedCoach = trainers.find(t => t.id === trainerId);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking({
        code: `FRG-${Math.floor(100000 + Math.random() * 900000)}`,
        trainerName: selectedCoach ? selectedCoach.name : 'Head Coach',
        date,
        time: timeSlot
      });
    }, 600);
  };

  const resetAndClose = () => {
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full max-w-lg rounded-xl border p-6 sm:p-8 shadow-2xl transition-colors ${
        isSanctuary
          ? 'bg-[#0E1A13] border-[#A3C9A8]/20 text-[#F7F5EE]'
          : 'bg-[#14171A] border-white/10 text-[#F4F3EE]'
      }`}>
        <button
          onClick={resetAndClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          <div className="py-6 text-center space-y-4">
            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
              isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
            }`}>
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                Booking Confirmed
              </span>
              <h3 className="text-2xl font-bold font-heading">
                Session Reserved
              </h3>
            </div>
            <div className={`p-4 rounded-lg border text-left text-xs font-mono space-y-1.5 ${
              isSanctuary ? 'bg-[#15261D] border-[#A3C9A8]/20' : 'bg-[#1C2024] border-white/10'
            }`}>
              <div className="flex justify-between">
                <span className="text-neutral-400">Confirmation Code:</span>
                <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
                  {confirmedBooking.code}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Coach:</span>
                <span className="text-white font-medium">{confirmedBooking.trainerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Date & Slot:</span>
                <span className="text-white font-medium">{confirmedBooking.date} at {confirmedBooking.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Focus:</span>
                <span className="text-white font-medium">{sessionFocus}</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We have dispatched your athlete pass confirmation to <span className="text-neutral-200">{email}</span>. Please arrive 10 minutes prior for movement screening.
            </p>
            <button
              onClick={resetAndClose}
              className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all cursor-pointer ${
                isSanctuary
                  ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                  : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
              }`}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                1-on-1 Performance Consultation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Book a Coaching Session
              </h3>
            </div>

            {/* Select Coach */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                Select Master Coach
              </label>
              <select
                value={trainerId}
                onChange={(e) => setTrainerId(e.target.value)}
                className={`w-full px-3.5 py-2.5 text-xs rounded border bg-neutral-900 focus:outline-none ${
                  isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                }`}
              >
                {trainers.map(t => (
                  <option key={t.id} value={t.id} className="bg-neutral-900 text-white">
                    {t.name} — {t.role} ({t.experienceYears}y exp)
                  </option>
                ))}
              </select>
            </div>

            {/* Focus area */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                Session Focus Area
              </label>
              <select
                value={sessionFocus}
                onChange={(e) => setSessionFocus(e.target.value)}
                className={`w-full px-3.5 py-2.5 text-xs rounded border bg-neutral-900 focus:outline-none ${
                  isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                }`}
              >
                <option value="Barbell Strength & Mechanics">Barbell Strength & Mechanics (Squat/Bench/Deadlift)</option>
                <option value="Olympic Weightlifting Refinement">Olympic Weightlifting Refinement (Snatch/Clean & Jerk)</option>
                <option value="Hyrox Engine & Erg Conditioning">Hyrox Engine & Erg Conditioning</option>
                <option value="Hypertrophy Split & Biomechanics">Hypertrophy Split & Biomechanics</option>
                <option value="Joint Mobility, Prehab & Posture">Joint Mobility, Prehab & Posture</option>
              </select>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                    isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                    isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                  }`}
                >
                  <option value="06:30 AM">06:30 AM (Morning Dawn)</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:30 PM">06:30 PM (Prime Hour)</option>
                  <option value="08:00 PM">08:00 PM</option>
                </select>
              </div>
            </div>

            {/* Athlete Contact info */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  <span>Athlete Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vikramaditya Rathore"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                    isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                  }`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                    Phone (+91)
                  </label>
                  <input
                    type="tel"
                    placeholder="98200 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                      isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="athlete@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                      isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all shadow-sm cursor-pointer ${
                  isSanctuary
                    ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                    : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                }`}
              >
                {isSubmitting ? 'Confirming Reservation...' : 'Confirm Session Booking'}
              </button>
              <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Zero charge demonstration booking. Complimentary for first-time visitors.</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
