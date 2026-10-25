import React, { useState } from 'react';
import { PageId, Trainer, EquipmentFacility } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { ImageFallback } from '../components/ImageFallback';
import {
  Dumbbell,
  Award,
  Star,
  CheckCircle2,
  Calendar,
  Activity,
  ArrowRight,
  TrendingUp,
  FileText,
  Sliders,
  Sparkles
} from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (page: PageId) => void;
  trainers: Trainer[];
  equipment: EquipmentFacility[];
  onOpenBooking: (trainerId?: string) => void;
  onOpenTrainerDetails: (trainer: Trainer) => void;
  onOpenMembership: () => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({
  trainers,
  equipment,
  onOpenBooking,
  onOpenTrainerDetails,
  onOpenMembership
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [activeCategory, setActiveCategory] = useState<'all' | 'strength' | 'cardio' | 'functional' | 'recovery'>('all');
  const [trainerSpecialtyFilter, setTrainerSpecialtyFilter] = useState<string>('all');

  const filteredEquipment = activeCategory === 'all'
    ? equipment
    : equipment.filter(item => item.category === activeCategory);

  const filteredTrainers = trainerSpecialtyFilter === 'all'
    ? trainers
    : trainers.filter(t => t.specialties.some(s => s.toLowerCase().includes(trainerSpecialtyFilter.toLowerCase())));

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
            <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
              Features & Specifications
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">15,000 SQ FT CAMPUS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading uppercase tracking-tight text-white">
            Equipment & Elite Coaching
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Every piece of hardware is tournament-certified. Every coach is accredited and bound to evidence-based periodization.
          </p>
        </div>
      </section>

      {/* SECTION A: Equipment and Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
              Part A · Floor Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white">
              Equipment & Facilities
            </h2>
          </div>

          {/* Interactive Filter Tabs (functional button segmented control per skill rules) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-neutral-900 border border-white/10">
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'strength', label: 'Strength & Free Weights' },
              { id: 'cardio', label: 'Cardio & Ergs' },
              { id: 'functional', label: 'Turf & Mobility' },
              { id: 'recovery', label: 'Sauna & Recovery' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? isSanctuary
                      ? 'bg-[#A3C9A8] text-[#0E1A13] font-bold'
                      : 'bg-[#C7FF3D] text-[#111315] font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-200 ${
                isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
              }`}
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <ImageFallback
                    src={item.imageUrl}
                    alt={item.title}
                    categoryLabel={item.category}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-mono uppercase text-neutral-300">
                    {item.brandPartner}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-heading text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Feature Tags - Anti-pill clean unboxed text */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    {item.tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span className="text-neutral-500">·</span>}
                        <span className="font-mono text-neutral-300 font-medium">{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Detailed Specs list */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Engineering Specifications:
                    </span>
                    {item.detailedSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                        }`} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-2.5 rounded bg-black/30 border border-white/5 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                  <span>Demo Spec Data</span>
                  <span className="text-neutral-300">Configurable</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION B: Trainers and Coaching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-16">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
              Part B · Human Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white">
              Trainers & Performance Coaches
            </h2>
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-neutral-900 border border-white/10">
            {[
              { id: 'all', label: 'All Coaches' },
              { id: 'strength', label: 'Strength' },
              { id: 'conditioning', label: 'Fat Loss & Conditioning' },
              { id: 'hypertrophy', label: 'Hypertrophy' },
              { id: 'mobility', label: 'Mobility & Rehab' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setTrainerSpecialtyFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  trainerSpecialtyFilter === tab.id
                    ? isSanctuary
                      ? 'bg-[#A3C9A8] text-[#0E1A13] font-bold'
                      : 'bg-[#C7FF3D] text-[#111315] font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTrainers.map((coach) => (
            <div
              key={coach.id}
              className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all group ${
                isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
              }`}
            >
              <div>
                <div className="relative h-72 overflow-hidden">
                  <ImageFallback
                    src={coach.imageUrl}
                    alt={coach.name}
                    categoryLabel="COACH"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-mono text-white font-bold">{coach.rating}</span>
                      <span className="text-neutral-400 font-mono text-[11px]">({coach.experienceYears}+ years exp)</span>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-neutral-300">
                      {coach.role}
                    </p>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {/* Specialties */}
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                      Specialties
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-300">
                      {coach.specialties.map((s, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <span className="text-neutral-500">/</span>}
                          <span className="font-medium">{s}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Certifications (demo data) */}
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>Accreditations (Demo Data)</span>
                    </span>
                    <div className="text-xs text-neutral-300 space-y-1">
                      {coach.certifications.slice(0, 2).map((cert, cIdx) => (
                        <div key={cIdx} className="line-clamp-1 font-mono text-[11px] text-neutral-400">
                          • {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Philosophy */}
                  <p className="text-xs text-neutral-400 italic line-clamp-2">
                    "{coach.philosophy}"
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => onOpenTrainerDetails(coach)}
                  className="w-full py-2 text-xs font-bold uppercase tracking-wider rounded border border-white/20 text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  View Profile
                </button>
                <button
                  onClick={() => onOpenBooking(coach.id)}
                  className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider rounded font-heading transition-colors cursor-pointer ${
                    isSanctuary
                      ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                      : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                  }`}
                >
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: Personal Training System */}
        <div className={`p-8 sm:p-12 rounded-2xl border ${
          isSanctuary ? 'bg-[#14261C] border-[#A3C9A8]/30' : 'bg-[#171B20] border-white/15'
        }`}>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              1-on-1 Performance Architecture
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white leading-tight">
              Personal Training & Progress Tracking
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              When you train with a FORGE coach, your journey is documented with athletic rigor. We treat every trainee as an athlete with specific physiological goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
                }`}>
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-heading text-white">
                  Custom Workout Plans
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Periodized 4-week blocks mapped to your exact schedule, joint limitations, and strength milestones.
                </p>
              </div>

              <div className="space-y-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
                }`}>
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-heading text-white">
                  Biometric Tracking
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  InBody multi-frequency scans measuring visceral fat, segmental muscle distribution, and phase angle.
                </p>
              </div>

              <div className="space-y-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
                }`}>
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-heading text-white">
                  Weekly Adaptations
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Continuous adjustments to load velocity and volume sets based on your sleep and recovery markers.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenBooking()}
                className={`px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all cursor-pointer ${
                  isSanctuary
                    ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                    : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                }`}
              >
                Schedule Assessment Session
              </button>
              <button
                onClick={onOpenMembership}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded font-heading border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                View Coaching Memberships
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
