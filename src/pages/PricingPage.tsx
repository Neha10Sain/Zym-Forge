import React, { useState } from 'react';
import { PageId, MembershipPlan, FAQItem } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import {
  Check,
  X as XIcon,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  plans: MembershipPlan[];
  faqs: FAQItem[];
  comparisonFeatures: { feature: string; starter: string; pro: string; elite: string }[];
  onOpenMembership: (planId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  plans,
  faqs,
  comparisonFeatures,
  onOpenMembership
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Header */}
      <section className="relative pt-12 pb-8 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase">
            <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
              Transparent Investment in INR (₹)
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">NO HIDDEN CONTRACTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading uppercase tracking-tight text-white">
            Memberships & Tiers
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Select the standard that matches your discipline. Every tier delivers unrestricted access to certified Olympic hardware.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="pt-6 flex items-center justify-center">
            <div className="p-1 rounded-xl bg-neutral-900 border border-white/15 flex items-center gap-2">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  !isAnnual
                    ? isSanctuary
                      ? 'bg-[#A3C9A8] text-[#0E1A13] shadow'
                      : 'bg-[#C7FF3D] text-[#111315] shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                  isAnnual
                    ? isSanctuary
                      ? 'bg-[#A3C9A8] text-[#0E1A13] shadow'
                      : 'bg-[#C7FF3D] text-[#111315] shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase rounded bg-black/40 text-neutral-200">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.isRecommended;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const monthlyEquivalent = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? isSanctuary
                      ? 'bg-[#15271E] border-2 border-[#A3C9A8] shadow-[0_0_35px_rgba(163,201,168,0.18)] md:-translate-y-3'
                      : 'bg-[#191D22] border-2 border-[#C7FF3D] shadow-[0_0_35px_rgba(199,255,61,0.18)] md:-translate-y-3'
                    : isSanctuary
                    ? 'bg-[#101D15] border border-[#A3C9A8]/20'
                    : 'bg-[#14171A] border border-white/10'
                }`}
              >
                {isFeatured && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-black uppercase tracking-widest rounded-full font-heading shadow ${
                    isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
                  }`}>
                    {plan.badge || 'RECOMMENDED TIER'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-black font-heading text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono uppercase text-neutral-400">
                      {isAnnual ? 'Annual' : 'Monthly'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 min-h-[40px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl font-black font-heading text-white tabular-nums tracking-tight">
                        ₹{monthlyEquivalent.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">/ month</span>
                    </div>

                    <div className="mt-2 text-xs font-mono text-neutral-400">
                      {isAnnual ? (
                        <span>Billed ₹{price.toLocaleString('en-IN')} upfront for 12 months</span>
                      ) : (
                        <span>Billed ₹{price.toLocaleString('en-IN')} monthly · Cancel anytime</span>
                      )}
                    </div>
                  </div>

                  {/* Included features */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block font-semibold">
                      What is included:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                        }`} />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 border-t border-white/5 space-y-2 opacity-50">
                        {plan.notIncluded.map((nFeat, ni) => (
                          <div key={ni} className="flex items-start gap-3 text-xs text-neutral-400">
                            <XIcon className="w-4 h-4 shrink-0 mt-0.5 text-neutral-500" />
                            <span>{nFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenMembership(plan.id)}
                    className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all shadow-md cursor-pointer ${
                      isFeatured
                        ? isSanctuary
                          ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                          : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Choose {plan.name} Plan
                  </button>
                  <p className="text-[11px] text-neutral-500 font-mono text-center mt-2.5">
                    Instant onboarding · Demo checkout
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Notice Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl border border-white/10 bg-neutral-900/50 flex items-start gap-3 text-xs text-neutral-400">
          <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All prices are shown in Indian Rupees (INR ₹) inclusive of all applicable statutory fitness facility taxes. Payments are simulated in this environment; no real credit card or bank account will be charged.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
            Side-By-Side Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white">
            Feature Comparison Matrix
          </h2>
        </div>

        <div className={`rounded-xl border overflow-x-auto ${
          isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
        }`}>
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase text-neutral-400">
                <th className="py-4 px-6 font-semibold">Tier Feature</th>
                <th className="py-4 px-6 font-semibold text-center w-36">STARTER</th>
                <th className={`py-4 px-6 font-semibold text-center w-36 ${
                  isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                }`}>PRO</th>
                <th className="py-4 px-6 font-semibold text-center w-40">ELITE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-neutral-200 font-sans text-xs sm:text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center text-neutral-400 text-xs">
                    {row.starter}
                  </td>
                  <td className={`py-4 px-6 text-center font-semibold text-xs ${
                    isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                  }`}>
                    {row.pro}
                  </td>
                  <td className="py-4 px-6 text-center text-white font-bold text-xs">
                    {row.elite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Membership FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
            Need Clarification?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${
                  isSanctuary
                    ? 'bg-[#122018] border-[#A3C9A8]/20'
                    : 'bg-[#16191D] border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold font-heading text-white">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 text-neutral-400 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Step CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`p-8 sm:p-12 rounded-2xl border ${
          isSanctuary ? 'bg-[#13231A] border-[#A3C9A8]/30' : 'bg-[#16191D] border-white/15'
        }`}>
          <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white mb-3">
            Still deciding which tier suits your schedule?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-6">
            Book a complimentary 1-Day athlete guest pass to tour our facilities and run a workout before enrolling.
          </p>
          <button
            onClick={() => onOpenMembership('pro')}
            className={`px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all shadow-md cursor-pointer ${
              isSanctuary
                ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
            }`}
          >
            Start with PRO Membership
          </button>
        </div>
      </section>
    </div>
  );
};
