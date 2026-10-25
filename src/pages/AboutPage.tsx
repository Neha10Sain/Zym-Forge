import React from 'react';
import { PageId } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { ImageFallback } from '../components/ImageFallback';
import {
  Shield,
  Target,
  Users,
  Compass,
  ArrowRight,
  Award,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMembership: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenMembership
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const milestones = [
    {
      year: '2021',
      title: 'The Foundation',
      desc: 'Founded in Lower Parel, Mumbai with 6 Olympic lifting platforms and a strict no-compromise equipment philosophy.'
    },
    {
      year: '2022',
      title: 'Biomechanics Lab Addition',
      desc: 'Integrated force-plate analysis and linear position transducers to track barbell velocity across all personal training.'
    },
    {
      year: '2023',
      title: 'Functional Turf & Hyrox Expansion',
      desc: 'Added 25 meters of indoor sprint turf, Woodway curved treadmills, and Concept2 ergometer bays.'
    },
    {
      year: '2024',
      title: 'Contrast Recovery Sanctuary',
      desc: 'Launched custom Finnish cedar dry saunas, 4°C continuous chilled plunge tubs, and NormaTec compression lounge.'
    },
    {
      year: '2025',
      title: 'National Barbell Open Host',
      desc: 'Sanctioned powerlifting and Olympic weightlifting meet host with over 200 competing athletes across South Asia.'
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Editorial Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageFallback
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
            alt="FORGE modern gym interior architectural view"
            categoryLabel="FORGE ARCHITECTURE"
            className="w-full h-full object-cover filter brightness-70 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/80 to-[#111315]/40" />
          <div className={`absolute inset-0 opacity-40 mix-blend-overlay ${
            isSanctuary ? 'bg-[#0E1A13]' : 'bg-[#111315]'
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-16">
          <div className="max-w-3xl space-y-4">
            <span className={`text-xs uppercase tracking-widest font-mono font-bold block ${
              isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
            }`}>
              Brand Creed & Ethos
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading uppercase tracking-tight text-white leading-none">
              MORE THAN A GYM.<br />
              <span className={isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}>
                A STANDARD.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
              We eliminated the gimmicks of commercial fitness clubs to create a temple for purposeful physical development.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Mission, Vision & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-8 rounded-xl border space-y-4 ${
            isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
          }`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
            }`}>
              <Target className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              To strip away fitness distractions and equip every athlete—from complete novices to international competitors—with tournament-grade tools and evidence-based coaching.
            </p>
          </div>

          <div className={`p-8 rounded-xl border space-y-4 ${
            isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
          }`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
            }`}>
              <Compass className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              To establish an enduring benchmark where physical strength, mental resilience, and restorative recovery unite seamlessly under one architectural roof.
            </p>
          </div>

          <div className={`p-8 rounded-xl border space-y-4 ${
            isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
          }`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
            }`}>
              <Shield className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Our Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Discipline is the single constant in human transformation. Motivation is ephemeral; repeatable mechanics, tracked progress, and consistent effort build indelible results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach: Strength, Consistency, Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
            The Three Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
            Our Approach to Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`p-8 rounded-xl border flex flex-col justify-between ${
            isSanctuary ? 'bg-[#13231A] border-[#A3C9A8]/20' : 'bg-[#171A1E] border-white/10'
          }`}>
            <div className="space-y-4">
              <span className={`text-4xl font-black font-mono ${
                isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
              }`}>
                01
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Strength as Foundation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Whether your goal is fat loss, marathon pacing, or joint longevity, foundational force production is non-negotiable. We build lifters from the ground up with proper bracing and kinetic chain mechanics.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
              Calibrated Barbells · Force-Curve Precision
            </div>
          </div>

          <div className={`p-8 rounded-xl border flex flex-col justify-between ${
            isSanctuary ? 'bg-[#13231A] border-[#A3C9A8]/20' : 'bg-[#171A1E] border-white/10'
          }`}>
            <div className="space-y-4">
              <span className={`text-4xl font-black font-mono ${
                isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
              }`}>
                02
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Calculated Consistency
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Random workouts yield random results. We operate on structured 4-week mesocycles where volume and intensity are tuned to your recovery capability, preventing burnout and joint overuse.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
              Periodized Splits · Deload Strategies
            </div>
          </div>

          <div className={`p-8 rounded-xl border flex flex-col justify-between ${
            isSanctuary ? 'bg-[#13231A] border-[#A3C9A8]/20' : 'bg-[#171A1E] border-white/10'
          }`}>
            <div className="space-y-4">
              <span className={`text-4xl font-black font-mono ${
                isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
              }`}>
                03
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Unspoken Camaraderie
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                FORGE attracts people who take their health seriously. No peacocking, no phone-scrolling on benches. You share the chalk with entrepreneurs, surgeons, and lifters united by high personal standards.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
              Zero-Ego Floor · Mutual Accountability
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Training-Floor Photography Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
            Inside the Campus
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
            The Training Floor Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 h-80 md:h-[480px] rounded-xl overflow-hidden relative group">
            <ImageFallback
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop"
              alt="Olympic barbell bay at FORGE"
              categoryLabel="OLYMPIC PLATFORM"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#C7FF3D]">Bay 01</span>
                <h4 className="text-xl font-bold font-heading text-white">Olympic Lifting Bay</h4>
                <p className="text-xs text-neutral-300">Shock-absorbing oak platforms and Eleiko IWF discs.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="h-56 md:h-[232px] rounded-xl overflow-hidden relative group">
              <ImageFallback
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
                alt="Functional turf lane"
                categoryLabel="TURF TRACK"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">25m Sprint & Sled Turf</h4>
                  <p className="text-[11px] text-neutral-300">Prowler track and Hyrox conditioning stations.</p>
                </div>
              </div>
            </div>

            <div className="h-56 md:h-[232px] rounded-xl overflow-hidden relative group">
              <ImageFallback
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
                alt="Cedar sauna and contrast baths"
                categoryLabel="RECOVERY SUITE"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">Cedar Sauna & 4°C Plunge</h4>
                  <p className="text-[11px] text-neutral-300">Restorative contrast therapy for lifters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
            Evolution & History
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
            Key Milestones
          </h2>
        </div>

        <div className={`p-8 rounded-xl border ${
          isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
        }`}>
          <div className="space-y-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 pb-8 border-b border-white/10 last:border-0 last:pb-0">
                <div className={`text-2xl sm:text-3xl font-black font-mono shrink-0 sm:w-28 ${
                  isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                }`}>
                  {item.year}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-heading text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-12 md:p-16 rounded-2xl border ${
          isSanctuary ? 'bg-[#14261C] border-[#A3C9A8]/30' : 'bg-[#171B20] border-white/15'
        }`}>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              The Coaching Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white leading-tight">
              Biomechanical Integrity Over Mindless Sweat
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              We reject the commercial gym habit of crushing clients with haphazard burpees and circuit fatigue. Every workout plan at FORGE follows strict mechanical progression:
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Assessment of joint active range of motion and hip/ankle dorsiflexion prior to loading',
                'Barbell bar path tracking to ensure maximum vertical mechanical efficiency',
                'Rate of Perceived Exertion (RPE) and Reps in Reserve (RIR) autogoverned training',
                'Direct nutrition frameworks calculating non-exercise activity thermogenesis (NEAT) and metabolic rate'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                  }`} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenMembership}
                className={`px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded font-heading flex items-center gap-2 transition-all cursor-pointer ${
                  isSanctuary
                    ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                    : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                }`}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
