import React, { useState } from 'react';
import { MembershipPlan } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { X, Check, Shield, Dumbbell, Sparkles, AlertCircle } from 'lucide-react';

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: MembershipPlan[];
  selectedPlanId?: string;
  isAnnualDefault?: boolean;
}

export const PlanModal: React.FC<PlanModalProps> = ({
  isOpen,
  onClose,
  plans,
  selectedPlanId = 'pro',
  isAnnualDefault = false
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [activePlanId, setActivePlanId] = useState<string>(selectedPlanId);
  const [isAnnual, setIsAnnual] = useState(isAnnualDefault);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [enrolledResult, setEnrolledResult] = useState<{
    memberId: string;
    planName: string;
    amount: number;
    billingPeriod: string;
  } | null>(null);

  if (!isOpen) return null;

  const currentPlan = plans.find(p => p.id === activePlanId) || plans[1] || plans[0];
  const price = isAnnual ? currentPlan.annualPrice : currentPlan.monthlyPrice;

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setEnrolledResult({
        memberId: `FRG-ATH-${Math.floor(10000 + Math.random() * 90000)}`,
        planName: currentPlan.name,
        amount: price,
        billingPeriod: isAnnual ? 'Annual (12 Months)' : 'Monthly'
      });
    }, 700);
  };

  const handleClose = () => {
    setEnrolledResult(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl border p-6 sm:p-8 shadow-2xl transition-colors ${
        isSanctuary
          ? 'bg-[#0E1A13] border-[#A3C9A8]/20 text-[#F7F5EE]'
          : 'bg-[#14171A] border-white/10 text-[#F4F3EE]'
      }`}>
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {enrolledResult ? (
          <div className="py-6 text-center space-y-4">
            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
              isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
            }`}>
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                Registration Successful
              </span>
              <h3 className="text-2xl font-bold font-heading">
                Welcome to FORGE FITNESS
              </h3>
            </div>
            <div className={`p-4 rounded-lg border text-left text-xs font-mono space-y-2 ${
              isSanctuary ? 'bg-[#15261D] border-[#A3C9A8]/20' : 'bg-[#1C2024] border-white/10'
            }`}>
              <div className="flex justify-between">
                <span className="text-neutral-400">Athlete Membership ID:</span>
                <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
                  {enrolledResult.memberId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Enrolled Tier:</span>
                <span className="text-white font-bold">{enrolledResult.planName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Billing Structure:</span>
                <span className="text-white">{enrolledResult.billingPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Simulated Total:</span>
                <span className="text-white font-bold tabular-nums">₹{enrolledResult.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20 text-left flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200 leading-relaxed">
                Demo Notice: This is a sample simulation. No actual charges were deducted. Your virtual pass is active immediately at the front desk.
              </p>
            </div>
            <button
              onClick={handleClose}
              className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all cursor-pointer ${
                isSanctuary
                  ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                  : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
              }`}
            >
              Access Member Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleEnroll} className="space-y-5">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                Athlete Enrollment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Choose Your Forge Standard
              </h3>
            </div>

            {/* Plan Selector Buttons */}
            <div>
              <div className="grid grid-cols-3 gap-2 p-1 rounded-lg bg-neutral-900 border border-white/10">
                {plans.map(plan => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setActivePlanId(plan.id)}
                    className={`py-2 px-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      activePlanId === plan.id
                        ? isSanctuary
                          ? 'bg-[#A3C9A8] text-[#0E1A13] shadow-sm'
                          : 'bg-[#C7FF3D] text-[#111315] shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly vs Annual Toggle */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-white/10">
              <span className="text-xs font-mono text-neutral-300">
                Billing Cycle
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                    !isAnnual ? 'bg-white/20 text-white font-semibold' : 'text-neutral-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer flex items-center gap-1 ${
                    isAnnual
                      ? isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13] font-bold' : 'bg-[#C7FF3D] text-[#111315] font-bold'
                      : 'text-neutral-400'
                  }`}
                >
                  <span>Yearly</span>
                  <span className="text-[10px] font-mono uppercase bg-black/40 px-1 rounded">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Price & Summary Box */}
            <div className={`p-4 rounded-lg border ${
              isSanctuary ? 'bg-[#15261D] border-[#A3C9A8]/20' : 'bg-[#1A1E22] border-white/10'
            }`}>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-xs uppercase tracking-wider font-mono text-neutral-400 block">
                    {currentPlan.name} Membership
                  </span>
                  <p className="text-xs text-neutral-300 mt-0.5">{currentPlan.tagline}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black font-heading tabular-nums">
                    ₹{price.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    {isAnnual ? 'billed annually (incl. taxes)' : '/ month (cancel anytime)'}
                  </span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5">
                {currentPlan.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                    <Check className={`w-3.5 h-3.5 shrink-0 ${isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Athlete Form */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Siddharth Rao"
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
                    placeholder="98201 98765"
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

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                  Preferred Membership Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                    isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                  }`}
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all shadow-md cursor-pointer ${
                  isSanctuary
                    ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                    : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                }`}
              >
                {isProcessing ? 'Activating Athlete Profile...' : `Confirm & Activate — ₹${price.toLocaleString('en-IN')}`}
              </button>
              <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-neutral-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Simulated live checkout. No payment credentials required for preview.</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
