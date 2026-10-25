import React from 'react';
import { Trainer } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { ImageFallback } from './ImageFallback';
import { X, Award, CheckCircle2, Star, Calendar, ArrowRight } from 'lucide-react';

interface TrainerModalProps {
  trainer: Trainer | null;
  onClose: () => void;
  onBookSession: (trainerId: string) => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({
  trainer,
  onClose,
  onBookSession
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  if (!trainer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border shadow-2xl transition-colors ${
        isSanctuary
          ? 'bg-[#0E1A13] border-[#A3C9A8]/20 text-[#F7F5EE]'
          : 'bg-[#14171A] border-white/10 text-[#F4F3EE]'
      }`}>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-10 p-2 text-neutral-400 hover:text-white rounded-full bg-black/50 backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Trainer Portrait */}
          <div className="md:col-span-2 relative h-72 md:h-auto min-h-[300px]">
            <ImageFallback
              src={trainer.imageUrl}
              alt={trainer.name}
              categoryLabel="MASTER COACH"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          </div>

          {/* Details Content */}
          <div className="md:col-span-3 p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs uppercase tracking-widest font-mono font-semibold ${
                  isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                }`}>
                  {trainer.role}
                </span>
                <span className="text-neutral-500">·</span>
                <div className="flex items-center gap-1 text-xs text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-mono text-neutral-300 font-semibold">{trainer.rating}</span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
                {trainer.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                {trainer.experienceYears}+ Years Practical Coaching · {trainer.sessionsCompleted.toLocaleString()} Platform Hours
              </p>
            </div>

            {/* Specialties & Tags (unboxed anti-pill per design rules) */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-1.5">
                Coaching Focus
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300">
                {trainer.specialties.map((spec, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-neutral-500">/</span>}
                    <span className="font-medium text-white">{spec}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-1">
                Background & Expertise
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {trainer.bio}
              </p>
            </div>

            {/* Philosophy quote */}
            <div className={`p-3.5 rounded-lg border italic text-xs leading-relaxed ${
              isSanctuary ? 'bg-[#15261D] border-[#A3C9A8]/20 text-neutral-200' : 'bg-[#181B1E] border-white/10 text-neutral-200'
            }`}>
              "{trainer.philosophy}"
            </div>

            {/* Certifications & Badges */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-2 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>Accreditations & Honors</span>
              </span>
              <div className="space-y-1.5">
                {trainer.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}`} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Floor Hours: {trainer.availability}</span>
            </div>

            {/* CTAs */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onBookSession(trainer.id);
                }}
                className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded font-heading flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSanctuary
                    ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                    : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                }`}
              >
                <span>Book 1-on-1 Session with {trainer.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
