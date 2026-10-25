import React, { useState } from 'react';
import { PageId, ClassSession } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import {
  User,
  QrCode,
  Calendar,
  Clock,
  Dumbbell,
  CheckCircle2,
  AlertCircle,
  Flame,
  Award,
  LogOut,
  ChevronRight,
  Shield,
  Activity
} from 'lucide-react';

interface MemberPortalPageProps {
  onNavigate: (page: PageId) => void;
  classes: ClassSession[];
}

export const MemberPortalPage: React.FC<MemberPortalPageProps> = ({
  classes: initialClasses
}) => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: 'Devraj Chauhan',
    email: 'devraj.c@athlete.in',
    tier: 'PRO',
    memberSince: 'March 2024',
    athleteId: 'FRG-ATH-82910',
    workoutsThisMonth: 16,
    streakDays: 4
  });

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [classFilter, setClassFilter] = useState<string>('All');
  const [bookedClasses, setBookedClasses] = useState<string[]>(['c-2']);
  const [classList, setClassList] = useState<ClassSession[]>(initialClasses);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const filteredClasses = classList.filter(c => {
    const matchesDay = c.day === selectedDay;
    const matchesCat = classFilter === 'All' || c.category === classFilter;
    return matchesDay && matchesCat;
  });

  const handleBookClass = (classId: string) => {
    if (bookedClasses.includes(classId)) {
      setBookedClasses(prev => prev.filter(id => id !== classId));
      setClassList(prev => prev.map(c => c.id === classId ? { ...c, bookedCount: Math.max(0, c.bookedCount - 1) } : c));
    } else {
      setBookedClasses(prev => [...prev, classId]);
      setClassList(prev => prev.map(c => c.id === classId ? { ...c, bookedCount: c.bookedCount + 1 } : c));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setCurrentUser({
      name: emailInput.split('@')[0].toUpperCase(),
      email: emailInput,
      tier: 'PRO',
      memberSince: 'Active',
      athleteId: `FRG-ATH-${Math.floor(10000 + Math.random() * 90000)}`,
      workoutsThisMonth: 12,
      streakDays: 3
    });
    setIsLoggedIn(true);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <section className="relative pt-12 pb-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
            <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
              Athlete Portal & Schedule
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">CONTACTLESS CHECK-IN</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading uppercase tracking-tight text-white">
            Member Hub & Timetable
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Manage your biometric QR entrance pass, check current week class bookings, and monitor your monthly consistency streak.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isLoggedIn ? (
          /* Login Screen */
          <div className="max-w-md mx-auto">
            <div className={`p-8 rounded-2xl border ${
              isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
            }`}>
              <div className="text-center space-y-2 mb-6">
                <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${
                  isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
                }`}>
                  <User className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Athlete Sign In
                </h3>
                <p className="text-xs text-neutral-400">
                  Enter your registered credentials to access your pass.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="athlete@domain.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 text-xs rounded-lg border border-white/15 bg-neutral-900 focus:outline-none focus:border-[#C7FF3D]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                    Access Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 text-xs rounded-lg border border-white/15 bg-neutral-900 focus:outline-none focus:border-[#C7FF3D]"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded font-heading cursor-pointer ${
                    isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
                  }`}
                >
                  Sign In to Dashboard
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="text-xs font-mono text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Quick Sign In With Demo Profile
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Active Member Dashboard Grid */
          <div className="space-y-12">
            {/* Top Pass Strip */}
            <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
              isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
            }`}>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                {/* Simulated QR Code */}
                <div className="w-24 h-24 p-2 bg-white rounded-xl shadow-lg flex items-center justify-center shrink-0">
                  <QrCode className="w-20 h-20 text-[#111315]" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
                    }`}>
                      {currentUser.tier} ATHLETE PASS
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{currentUser.athleteId}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {currentUser.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-mono">
                    Floor Access Active · Member since {currentUser.memberSince}
                  </p>
                </div>
              </div>

              {/* Quick Stats Strip */}
              <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8 text-center">
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                    Workouts
                  </span>
                  <span className="text-2xl font-black font-heading text-white tabular-nums">
                    {currentUser.workoutsThisMonth}
                  </span>
                  <span className="text-[10px] text-neutral-400 block font-mono">This Month</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                    Streak
                  </span>
                  <span className={`text-2xl font-black font-heading tabular-nums ${
                    isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                  }`}>
                    {currentUser.streakDays} Days
                  </span>
                  <span className="text-[10px] text-neutral-400 block font-mono">Unbroken</span>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  title="Sign Out"
                  className="p-2.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekly Timetable & Class Booking */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                    Floor Schedule
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white">
                    Book Group Conditioning & Classes
                  </h2>
                </div>

                {/* Category filter */}
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-neutral-900 border border-white/10">
                  {['All', 'Strength', 'HIIT & Conditioning', 'Mobility', 'Powerlifting'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setClassFilter(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                        classFilter === cat
                          ? isSanctuary
                            ? 'bg-[#A3C9A8] text-[#0E1A13] font-bold'
                            : 'bg-[#C7FF3D] text-[#111315] font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Day Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      selectedDay === day
                        ? isSanctuary
                          ? 'bg-[#A3C9A8] text-[#0E1A13]'
                          : 'bg-[#C7FF3D] text-[#111315]'
                        : 'bg-neutral-900/60 border border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Class Sessions List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClasses.length > 0 ? (
                  filteredClasses.map(session => {
                    const isBooked = bookedClasses.includes(session.id);
                    const spotsLeft = session.capacity - session.bookedCount;

                    return (
                      <div
                        key={session.id}
                        className={`p-6 rounded-xl border flex flex-col justify-between transition-colors ${
                          isBooked
                            ? isSanctuary
                              ? 'bg-[#15271E] border-[#A3C9A8]'
                              : 'bg-[#1A1F24] border-[#C7FF3D]'
                            : isSanctuary
                            ? 'bg-[#122018] border-[#A3C9A8]/20'
                            : 'bg-[#15181C] border-white/10'
                        }`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                              {session.category}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              session.intensity === 'Extreme' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                            }`}>
                              {session.intensity} Intensity
                            </span>
                          </div>

                          <h3 className="text-xl font-bold font-heading text-white">
                            {session.title}
                          </h3>

                          <div className="space-y-1 text-xs text-neutral-300 font-mono">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-neutral-400" />
                              <span>{session.time} · {session.durationMinutes} mins</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-neutral-400" />
                              <span>Coach: {session.trainerName}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                          <span className="text-xs font-mono text-neutral-400">
                            {spotsLeft > 0 ? `${spotsLeft} spots available` : 'Full capacity'}
                          </span>

                          <button
                            onClick={() => handleBookClass(session.id)}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded font-heading transition-all cursor-pointer ${
                              isBooked
                                ? 'bg-neutral-800 text-rose-300 border border-rose-500/30 hover:bg-rose-950/40'
                                : isSanctuary
                                ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                                : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                            }`}
                          >
                            {isBooked ? 'Cancel Spot' : 'Reserve Spot'}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-full p-12 text-center rounded-xl border border-white/10 bg-neutral-900/30">
                    <p className="text-sm text-neutral-400 font-mono">
                      No classes scheduled for this category on {selectedDay}. Please select another day or category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
