import React, { useState } from 'react';
import { PageId } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import { Menu, X, Palette, User, Dumbbell } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenMembershipModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenMembershipModal
}) => {
  const { theme, toggleTheme } = useGymTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSanctuary = theme === 'sanctuary';

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 border-b backdrop-blur-md ${
      isSanctuary 
        ? 'bg-[#0E1A13]/90 border-[#A3C9A8]/15 text-[#F7F5EE]' 
        : 'bg-[#111315]/90 border-white/10 text-[#F4F3EE]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, no adjacent badges) */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0"
        >
          <div className={`w-8 h-8 rounded-sm flex items-center justify-center font-black text-sm tracking-tighter transition-transform group-hover:scale-105 ${
            isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
          }`}>
            <Dumbbell className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-wider uppercase font-heading whitespace-nowrap">
            FORGE <span className={isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'}>FITNESS</span>
          </span>
        </button>

        {/* Zone 2: 5 clean single-line nav links with subtle hover underlines */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? isSanctuary ? 'text-[#A3C9A8] font-semibold' : 'text-[#C7FF3D] font-semibold'
                    : isSanctuary ? 'text-neutral-300 hover:text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                      isSanctuary ? 'bg-[#A3C9A8]' : 'bg-[#C7FF3D]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action + portal link & theme switch */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          {/* Theme Change Switcher Button */}
          <button
            onClick={toggleTheme}
            title="Change website color theme"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded border transition-colors cursor-pointer ${
              isSanctuary
                ? 'bg-[#15261D] border-[#A3C9A8]/40 text-[#A3C9A8] hover:bg-[#1D3528]'
                : 'bg-[#181B1E] border-white/15 text-neutral-200 hover:border-[#C7FF3D]/50 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5 shrink-0" />
            <span className="font-semibold">Change Theme</span>
          </button>

          {/* Member Profile Icon Button */}
          <button
            onClick={() => handleNavClick('portal')}
            aria-label="Member Profile"
            title="Member Profile & Portal"
            className={`p-2 rounded border transition-colors cursor-pointer flex items-center justify-center ${
              currentPage === 'portal'
                ? isSanctuary ? 'text-[#A3C9A8] bg-[#15261D] border-[#A3C9A8]/40' : 'text-[#C7FF3D] bg-[#181B1E] border-[#C7FF3D]/40'
                : 'border-white/15 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/5'
            }`}
          >
            <User className="w-4 h-4" />
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenMembershipModal}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded font-heading transition-all shadow-sm hover:brightness-105 active:scale-95 whitespace-nowrap cursor-pointer ${
              isSanctuary
                ? 'bg-[#A3C9A8] text-[#0E1A13] hover:shadow-[0_0_20px_rgba(163,201,168,0.25)]'
                : 'bg-[#C7FF3D] text-[#111315] hover:shadow-[0_0_20px_rgba(199,255,61,0.25)]'
            }`}
          >
            Join Forge
          </button>
        </div>

        {/* Mobile Hamburger & Theme Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Change color theme"
            title="Change color theme"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded border border-white/15 text-neutral-300 text-xs font-mono"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase">Theme</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-neutral-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-3 pb-6 border-b transition-colors ${
          isSanctuary ? 'bg-[#0E1A13] border-[#A3C9A8]/20' : 'bg-[#111315] border-white/10'
        }`}>
          <div className="flex flex-col gap-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 text-base font-medium tracking-wide ${
                  currentPage === link.id
                    ? isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                    : 'text-neutral-300'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('portal')}
              className={`text-left py-2 text-base font-medium tracking-wide flex items-center gap-2 ${
                currentPage === 'portal'
                  ? isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
                  : 'text-neutral-300'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Member Portal & Login</span>
            </button>
            <button
              onClick={() => toggleTheme()}
              className="text-left py-2 text-base font-medium tracking-wide flex items-center gap-2 text-neutral-300 hover:text-white"
            >
              <Palette className="w-4 h-4" />
              <span>Change Theme</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMembershipModal();
              }}
              className={`mt-2 w-full py-3 text-sm font-bold uppercase tracking-wider rounded font-heading text-center cursor-pointer ${
                isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
              }`}
            >
              Join Forge
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
