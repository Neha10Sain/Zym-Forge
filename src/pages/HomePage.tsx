import React from 'react';
import { PageId, Trainer, EquipmentFacility, MembershipPlan, Testimonial } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { ImageFallback } from '../components/ImageFallback';
import { BMICalculator } from '../components/BMICalculator';
import {
  ArrowRight,
  Check,
  Shield,
  Star,
  Dumbbell,
  Calendar,
  Flame,
  Award,
  ChevronRight,
  Zap,
  Activity
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  trainers: Trainer[];
  equipment: EquipmentFacility[];
  plans: MembershipPlan[];
  testimonials: Testimonial[];
  stats: { label: string; value: string; detail: string }[];
  benefits: { number: string; title: string; desc: string; badge: string }[];
  onOpenBooking: (trainerId?: string) => void;
  onOpenMembership: (planId?: string) => void;
  onOpenTrainerDetails: (trainer: Trainer) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  trainers,
  equipment,
  plans,
  testimonials,
  stats,
  benefits,
  onOpenBooking,
  onOpenMembership,
  onOpenTrainerDetails
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* Background Editorial Media with Dark Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <ImageFallback
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="FORGE modern gym interior with Olympic racks"
            categoryLabel="FORGE FLAGSHIP"
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-125"
          />
          {/* Measured scrims per Frontend Design guidelines */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/80 to-[#111315]/40" />
          <div className={`absolute inset-0 opacity-40 mix-blend-overlay ${
            isSanctuary ? 'bg-[#0E1A13]' : 'bg-[#111315]'
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col justify-center">
          <div className="max-w-4xl space-y-6">
            {/* Clean unboxed kicker with typographic separator (Zero-Pill discipline) */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-mono tracking-widest uppercase">
              <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
                FORGE ATHLETIC CLUB
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">EST. 2021</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">MUMBAI & BANGALORE</span>
            </div>

            {/* Main Headline: "BUILT BY DISCIPLINE. DEFINED BY YOU." */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-heading uppercase text-white leading-[0.95] text-balance">
              BUILT BY DISCIPLINE.<br />
              <span className={isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}>
                DEFINED BY YOU.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Train smarter. Get stronger. Become your best self. Experience 15,000 sq ft of tournament-grade strength stations, Olympic platforms, and contrast recovery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onOpenMembership('pro')}
                className={`w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded font-heading flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer ${
                  isSanctuary
                    ? 'bg-[#A3C9A8] text-[#0E1A13] hover:shadow-[0_0_30px_rgba(163,201,168,0.35)]'
                    : 'bg-[#C7FF3D] text-[#111315] hover:shadow-[0_0_30px_rgba(199,255,61,0.35)]'
                }`}
              >
                <span>Explore Memberships</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onNavigate('features');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded font-heading border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discover Our Gym</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Statistics Section (Full-width row placed below hero split) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-xl border ${
          isSanctuary ? 'bg-[#13231A] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
        }`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block">
                {stat.label}
              </span>
              <div className={`text-3xl sm:text-4xl font-black font-heading tabular-nums ${
                isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
              }`}>
                {stat.value}
              </div>
              <p className="text-xs text-neutral-400">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 text-right">
          <span className="text-[11px] font-mono text-neutral-500">
            *Verified audit data for FORGE flagship campus facility.
          </span>
        </div>
      </section>

      {/* Featured Benefits: Strength, Coaching, Functional, Recovery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              The Forge Standard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
              Engineered For Athletic Progress
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Every square foot is purpose-built. No crowded waiting lines, no decorative gimmicks—only uncompromising tools for strength and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 ${
                isSanctuary
                  ? 'bg-[#122017] border-[#A3C9A8]/15 hover:border-[#A3C9A8]/40'
                  : 'bg-[#16191C] border-white/10 hover:border-[#C7FF3D]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-2xl font-black font-mono ${
                    isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                  }`}>
                    {benefit.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                    {benefit.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span>Explore Protocol</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Equipment Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              World-Class Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
              Tournament-Grade Equipment
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('features');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-heading cursor-pointer ${
              isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
            }`}
          >
            <span>View All Equipment Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Marquee Equipment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {equipment.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-colors ${
                isSanctuary ? 'bg-[#132219] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <ImageFallback
                  src={item.imageUrl}
                  alt={item.title}
                  categoryLabel={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono uppercase text-neutral-300">
                  {item.brandPartner}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    {item.tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span>·</span>}
                        <span className="font-mono text-neutral-300">{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      onNavigate('features');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>Read Technical Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trainer Profile Previews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              Coaching Staff
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
              Led By Elite Practitioners
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Our coaches don't count reps—they study movement velocity, biomechanics, and neuromuscular adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((coach) => (
            <div
              key={coach.id}
              className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all group ${
                isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#16191C] border-white/10'
              }`}
            >
              <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => onOpenTrainerDetails(coach)}>
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
                    <span className="text-neutral-400 font-mono text-[11px]">({coach.sessionsCompleted}+ sessions)</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {coach.name}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1">
                    {coach.specialization}
                  </p>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  <Award className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{coach.certifications[0]}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => onOpenTrainerDetails(coach)}
                    className="py-2 text-[11px] font-bold uppercase tracking-wider rounded border border-white/15 text-neutral-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    View Bio
                  </button>
                  <button
                    onClick={() => onOpenBooking(coach.id)}
                    className={`py-2 text-[11px] font-bold uppercase tracking-wider rounded font-heading transition-colors cursor-pointer ${
                      isSanctuary
                        ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                        : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                    }`}
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Biometrics & Calorie Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BMICalculator onSelectPlan={(tier) => onOpenMembership(tier)} />
      </section>

      {/* Three Membership Plan Previews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
            Transparent Pricing in INR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
            Membership Options
          </h2>
          <p className="text-sm text-neutral-400">
            No hidden maintenance charges, no predatory contracts. Choose the tier that matches your commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.isRecommended;
            return (
              <div
                key={plan.id}
                className={`relative rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? isSanctuary
                      ? 'bg-[#15271E] border-2 border-[#A3C9A8] shadow-[0_0_30px_rgba(163,201,168,0.15)] md:-translate-y-2'
                      : 'bg-[#191D22] border-2 border-[#C7FF3D] shadow-[0_0_30px_rgba(199,255,61,0.15)] md:-translate-y-2'
                    : isSanctuary
                    ? 'bg-[#101D15] border border-[#A3C9A8]/20'
                    : 'bg-[#14171A] border border-white/10'
                }`}
              >
                {isFeatured && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded font-heading ${
                    isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
                  }`}>
                    {plan.badge || 'RECOMMENDED'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black font-heading text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {plan.accessHours.split(' ')[0]}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 min-h-[36px] mb-6">
                    {plan.tagline}
                  </p>

                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black font-heading text-white tabular-nums">
                        ₹{plan.monthlyPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">/ month</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 font-mono block mt-1">
                      or ₹{plan.annualPrice.toLocaleString('en-IN')}/yr (Save 20%)
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                        }`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenMembership(plan.id)}
                    className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all cursor-pointer ${
                      isFeatured
                        ? isSanctuary
                          ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                          : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Choose {plan.name} Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              onNavigate('pricing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs uppercase font-mono tracking-widest text-neutral-400 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Compare full feature matrix & FAQs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              Proven Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white">
              Athlete Testimonials
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Real members. Concrete biometric and lifting outcomes substantiating our standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between ${
                isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#16191D] border-white/10'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                  "{test.quote}"
                </p>

                <div className={`p-3 rounded border text-xs font-mono font-semibold ${
                  isSanctuary
                    ? 'bg-[#15261D] border-[#A3C9A8]/20 text-[#A3C9A8]'
                    : 'bg-[#1D2227] border-white/10 text-[#C7FF3D]'
                }`}>
                  Result: {test.resultMetric}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <ImageFallback
                  src={test.avatarUrl}
                  alt={test.name}
                  categoryLabel="ATHLETE"
                  className="w-10 h-10 rounded-full border border-white/15 object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span>{test.role}</span>
                    <span>·</span>
                    <span className="font-mono text-[11px]">{test.membershipTier}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Membership CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-2xl p-8 sm:p-12 md:p-16 border overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 ${
          isSanctuary
            ? 'bg-gradient-to-r from-[#14261C] to-[#0E1A13] border-[#A3C9A8]/30'
            : 'bg-gradient-to-r from-[#181C20] to-[#111315] border-white/15'
        }`}>
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              Step Onto The Floor
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white leading-tight">
              Ready to Forge Your Legacy?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Start with a 1-day complimentary athlete pass or secure an annual membership today. No waitlists, full access.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenMembership('pro')}
              className={`px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded font-heading transition-all shadow-lg cursor-pointer ${
                isSanctuary
                  ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                  : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
              }`}
            >
              Claim PRO Membership
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded font-heading border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Request Free Day Pass
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
