import React, { useState } from 'react';
import { useGymTheme } from '../context/ThemeContext';
import { Dumbbell, Activity, Flame, ShieldAlert, ArrowRight } from 'lucide-react';

interface BMICalculatorProps {
  onSelectPlan?: (tierId: string) => void;
}

export const BMICalculator: React.FC<BMICalculatorProps> = ({ onSelectPlan }) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [goal, setGoal] = useState<'strength' | 'fatloss' | 'hypertrophy' | 'performance'>('strength');
  const [activity, setActivity] = useState<number>(1.55); // moderate

  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? (weightKg / (heightM * heightM)) : 0;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * 28 + 5; // Mifflin-St Jeor estimate
  const maintenanceCalories = Math.round(bmr * activity);

  let targetCalories = maintenanceCalories;
  let targetProteinGrams = Math.round(weightKg * 2.0); // 2.0g per kg
  let recommendedTier = 'pro';

  if (goal === 'fatloss') {
    targetCalories = Math.round(maintenanceCalories - 450);
    targetProteinGrams = Math.round(weightKg * 2.2);
    recommendedTier = 'pro';
  } else if (goal === 'hypertrophy') {
    targetCalories = Math.round(maintenanceCalories + 300);
    targetProteinGrams = Math.round(weightKg * 2.0);
    recommendedTier = 'pro';
  } else if (goal === 'strength') {
    targetCalories = Math.round(maintenanceCalories + 150);
    targetProteinGrams = Math.round(weightKg * 2.1);
    recommendedTier = 'elite';
  } else {
    targetCalories = maintenanceCalories;
    targetProteinGrams = Math.round(weightKg * 1.9);
    recommendedTier = 'starter';
  }

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-sky-400' };
    if (val < 25) return { label: 'Athletic / Normal', color: isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]' };
    if (val < 30) return { label: 'Muscular / Overweight', color: 'text-amber-400' };
    return { label: 'High Body Composition', color: 'text-rose-400' };
  };

  const bmiCat = getBmiCategory(bmi);

  return (
    <div className={`p-6 sm:p-8 rounded-xl border transition-colors ${
      isSanctuary
        ? 'bg-[#122018] border-[#A3C9A8]/20 text-[#F7F5EE]'
        : 'bg-[#15181C] border-white/10 text-[#F4F3EE]'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
            Biometric Performance Matrix
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Calculate Your Training Fuel & Split
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>Evidence-Based Formula (Mifflin-St Jeor)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input sliders */}
        <div className="lg:col-span-7 space-y-5">
          {/* Weight */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300">Body Weight</span>
              <span className="font-bold text-white tabular-nums text-sm">{weightKg} kg</span>
            </div>
            <input
              type="range"
              min={45}
              max={140}
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C7FF3D]"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>45 kg</span>
              <span>90 kg</span>
              <span>140 kg</span>
            </div>
          </div>

          {/* Height */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300">Height</span>
              <span className="font-bold text-white tabular-nums text-sm">{heightCm} cm</span>
            </div>
            <input
              type="range"
              min={140}
              max={215}
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C7FF3D]"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>140 cm</span>
              <span>175 cm</span>
              <span>215 cm</span>
            </div>
          </div>

          {/* Goal buttons */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400 mb-2">
              Primary Objective
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'strength', label: 'Max Strength' },
                { id: 'hypertrophy', label: 'Hypertrophy' },
                { id: 'fatloss', label: 'Fat Loss' },
                { id: 'performance', label: 'Hyrox Engine' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setGoal(opt.id as any)}
                  className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                    goal === opt.id
                      ? isSanctuary
                        ? 'bg-[#A3C9A8] border-[#A3C9A8] text-[#0E1A13] font-bold'
                        : 'bg-[#C7FF3D] border-[#C7FF3D] text-[#111315] font-bold'
                      : 'bg-neutral-900 border-white/10 text-neutral-300 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400 mb-1.5">
              Weekly Activity Level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className={`w-full px-3 py-2 text-xs rounded border bg-neutral-900 focus:outline-none ${
                isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
              }`}
            >
              <option value={1.375}>Light (1-2 gym sessions / week)</option>
              <option value={1.55}>Moderate (3-4 heavy lifting sessions / week)</option>
              <option value={1.725}>Hardcore Athlete (5-6 sessions / week)</option>
              <option value={1.9}>Elite Competitor (Daily two-a-days)</option>
            </select>
          </div>
        </div>

        {/* Results Card */}
        <div className={`lg:col-span-5 p-5 sm:p-6 rounded-lg border flex flex-col justify-between ${
          isSanctuary ? 'bg-[#16291F] border-[#A3C9A8]/30' : 'bg-[#1A1E23] border-white/15'
        }`}>
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                Body Composition Index
              </span>
              <span className={`text-xs font-mono font-bold ${bmiCat.color}`}>
                {bmiCat.label}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-b border-white/10">
              <div>
                <span className="text-[11px] text-neutral-400 font-mono block">BMI Ratio</span>
                <span className="text-2xl font-black font-heading tabular-nums text-white">
                  {bmi.toFixed(1)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 font-mono block">Daily Target</span>
                <span className="text-2xl font-black font-heading tabular-nums text-white">
                  {targetCalories} <span className="text-xs font-normal text-neutral-400">kcal</span>
                </span>
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 font-mono block">Daily Protein</span>
                <span className={`text-2xl font-black font-heading tabular-nums ${
                  isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                }`}>
                  {targetProteinGrams}g
                </span>
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 font-mono block">Recommended Split</span>
                <span className="text-xs font-bold text-white uppercase block mt-1">
                  {goal === 'strength' ? '4-Day Conjugate / Upper-Lower' : goal === 'hypertrophy' ? 'Push-Pull-Legs' : 'Strength + Hyrox MetCon'}
                </span>
              </div>
            </div>

            <div className="pt-4 space-y-2 text-xs text-neutral-300">
              <p className="leading-relaxed">
                At FORGE, every member on the <strong className="text-white uppercase">{recommendedTier}</strong> tier receives a dedicated InBody scan to replace generic equations with exact intracellular water and skeletal muscle mass data.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10">
            <button
              onClick={() => onSelectPlan && onSelectPlan(recommendedTier)}
              className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider rounded font-heading flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isSanctuary
                  ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                  : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
              }`}
            >
              <span>Explore Recommended {recommendedTier.toUpperCase()} Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
