import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

/**
 * Proveedor de tema global para la aplicación.
 * Maneja dark/light mode con persistencia en localStorage y
 * respeta la preferencia del sistema operativo en la primera visita.
 */
export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    // Prioridad: 1) localStorage  2) preferencia del SO
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  // Sincroniza el tema con el DOM y localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Clases de Tailwind centralizadas para cada tema
  const themeClasses = {
    dark: {
      bg: 'bg-black',
      bgSecondary: 'bg-gray-900/50',
      bgTertiary: 'bg-gray-800/30',

      // Textos - ajustados para mejor contraste (WCAG AA)
      text: 'text-gray-100',
      textSecondary: 'text-gray-200',
      textMuted: 'text-gray-300',

      // Bordes
      border: 'border-gray-800/50',

      // Acentos - Celeste
      accent: 'from-blue-500 to-cyan-400',
      accentSolid: 'bg-blue-500',
      accentSecondary: 'from-orange-500 to-amber-400',

      // Cards
      card: 'bg-gray-900/20 border border-gray-800/30',
      cardHover: 'hover:bg-gray-900/40 hover:border-blue-500/30',

      // Glassmorphism Premium
      glassPrimary: 'bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08]',
      glassSecondary: 'bg-white/[0.02] backdrop-blur-xl border border-white/[0.05]',
      glassHover: 'hover:bg-white/[0.05] hover:border-white/[0.12]',

      // Texto con gradiente - Solo Celeste/Azul (SIN NARANJA)
      textGradient: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent',

      // Efectos
      glass: 'bg-black/60 backdrop-blur-md border-gray-800/20',
      glow: 'shadow-blue-500/20',
      glowEffect: 'shadow-[0_0_60px_-15px] shadow-blue-500/30',

      // Input fields
      input: 'bg-white/[0.05] border-white/[0.1] focus:border-blue-500/50 focus:ring-blue-500/20',

      // Tags/Badges
      tagPrimary: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300',
      tagSecondary: 'bg-white/[0.05] border border-white/[0.1] text-gray-300',
      tagGreen: 'bg-green-500/20 text-green-400 border border-green-500/30',
      tagPurple: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
      tagOrange: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',

      // Navbar específico
      navBg: 'bg-black/80 backdrop-blur-xl border-gray-800/50',

      // Timeline
      timelineBg: 'bg-gray-900',
      timelineRing: 'ring-gray-900'
    },
    light: {
      // Fondos - Blanco puro
      bg: 'bg-white',
      bgSecondary: 'bg-slate-50',
      bgTertiary: 'bg-slate-100',

      // Textos - ajustados para mejor contraste (WCAG AA)
      text: 'text-slate-900',
      textSecondary: 'text-slate-700',
      textMuted: 'text-slate-600',

      // Bordes
      border: 'border-slate-200',

      // Acentos - Azul marino
      accent: 'from-blue-700 to-blue-500',
      accentSolid: 'bg-blue-700',
      accentSecondary: 'from-blue-600 to-cyan-500',

      // Cards
      card: 'bg-white border border-slate-200 shadow-md',
      cardHover: 'hover:bg-slate-50 hover:border-blue-400 hover:shadow-lg',

      // Glassmorphism Premium - Sólido para light mode
      glassPrimary: 'bg-white border border-slate-200 shadow-lg',
      glassSecondary: 'bg-slate-50 border border-slate-200 shadow-md',
      glassHover: 'hover:bg-slate-50 hover:border-blue-300 hover:shadow-xl',

      // Texto con gradiente - Azul marino
      textGradient: 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 bg-clip-text text-transparent',

      // Efectos
      glass: 'bg-white border border-slate-200 shadow-md',
      glow: 'shadow-blue-400/30',
      glowEffect: 'shadow-[0_0_40px_-10px] shadow-blue-400/40',

      // Input fields
      input: 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/30',

      // Tags/Badges
      tagPrimary: 'bg-blue-100 text-blue-800 border border-blue-200 font-medium',
      tagSecondary: 'bg-slate-100 border border-slate-300 text-slate-700 font-medium',
      tagGreen: 'bg-green-100 text-green-800 border border-green-200 font-medium',
      tagPurple: 'bg-purple-100 text-purple-800 border border-purple-200 font-medium',
      tagOrange: 'bg-orange-100 text-orange-800 border border-orange-200 font-medium',

      // Navbar específico
      navBg: 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm',

      // Timeline
      timelineBg: 'bg-white',
      timelineRing: 'ring-white'
    }
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      themeClasses: themeClasses[theme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
