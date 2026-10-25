import React, { useState } from 'react';
import { PageId } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { Dumbbell, MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isSanctuary
        ? 'bg-[#0A140F] border-[#A3C9A8]/15 text-[#F7F5EE]'
        : 'bg-[#0B0C0E] border-white/10 text-[#F4F3EE]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-sm flex items-center justify-center font-black text-sm tracking-tighter ${
                isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
              }`}>
                <Dumbbell className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-black tracking-wider uppercase font-heading">
                FORGE <span className={isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}>FITNESS</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              BUILT BY DISCIPLINE. DEFINED BY YOU. An elite strength sanctuary engineered with Olympic lifting bays, calibrated iron, and science-driven coaching.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400 block mb-2">
                Join the Forge Dispatch
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#C7FF3D] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-inherit" />
                  <span>You are subscribed to weekly lifting protocols.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter athlete email"
                    required
                    className={`px-3.5 py-2 text-xs rounded border bg-neutral-900/60 focus:outline-none w-full ${
                      isSanctuary
                        ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]'
                        : 'border-white/15 focus:border-[#C7FF3D]'
                    }`}
                  />
                  <button
                    type="submit"
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded font-heading shrink-0 transition-all cursor-pointer ${
                      isSanctuary
                        ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                        : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                    }`}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Standard
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Equipment & Coaches
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Memberships (INR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('portal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Member Timetable & Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Day Pass
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-4 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Training Hours</span>
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 font-mono">
              <div>
                <span className="text-neutral-400 block">Monday – Saturday</span>
                <span className="font-semibold text-white">05:30 AM – 11:00 PM</span>
              </div>
              <div className="pt-1">
                <span className="text-neutral-400 block">Sunday</span>
                <span className="font-semibold text-white">07:00 AM – 08:00 PM</span>
              </div>
              <div className="pt-1">
                <span className="text-neutral-400 block">Recovery Sanctuary</span>
                <span className={isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}>06:00 AM – 10:00 PM Daily</span>
              </div>
              <div className="pt-2 text-[11px] text-neutral-400">
                24/7 keyless access available for ELITE members.
              </div>
            </div>
          </div>

          {/* Flagship Campus Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Campus Location</span>
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <p className="leading-relaxed text-neutral-300">
                FORGE Flagship Campus<br />
                Plot 42, Senapati Bapat Marg,<br />
                Lower Parel, Mumbai 400013
              </p>
              <div className="pt-1 space-y-1 text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-white">+91 (022) 8492-3000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-white">memberships@forgefitness.in</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`inline-flex items-center gap-1 text-xs font-semibold cursor-pointer ${
                    isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                  }`}
                >
                  <span>Directions & Parking</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} FORGE FITNESS PVT. LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Sample content for demonstration</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Gym Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
