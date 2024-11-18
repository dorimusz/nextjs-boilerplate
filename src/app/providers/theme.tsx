'use client';
import { ThemeProvider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import { setCookie } from 'cookies-next';
import { useEffect } from 'react';

const AppThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider enableColorScheme {...props}>
      <AppThemeProviderHelper />
      {children}
    </ThemeProvider>
  );
};

// Helper component to set theme in cookie
const AppThemeProviderHelper = () => {
  const { theme } = useTheme();

  useEffect(() => {
    setCookie('theme', theme, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      path: '/',
    });
  }, [theme]);

  return null;
};

export default AppThemeProvider;
