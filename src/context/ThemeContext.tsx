import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('forge_theme_mode');
    return (saved === 'sanctuary' ? 'sanctuary' : 'forge') as ThemeMode;
  });

  useEffect(() => {
    localStorage.setItem('forge_theme_mode', theme);
    const root = document.documentElement;
    if (theme === 'sanctuary') {
      root.classList.remove('theme-forge');
      root.classList.add('theme-sanctuary');
      document.body.style.backgroundColor = '#0E1A13';
      document.body.style.color = '#F7F5EE';
    } else {
      root.classList.remove('theme-sanctuary');
      root.classList.add('theme-forge');
      document.body.style.backgroundColor = '#111315';
      document.body.style.color = '#F4F3EE';
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'forge' ? 'sanctuary' : 'forge'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useGymTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useGymTheme must be used within a ThemeProvider');
  }
  return context;
};
