import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useTheme(); // This will set up the theme
  return <>{children}</>;
};