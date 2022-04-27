import { createContext } from 'react';

const themes = {
  light: {
    backgroundColor: '#fff',
    textColor: '#000',
  },
  dark: {
    backgroundColor: '#000',
    textColor: '#fff',
  },
};

export const ThemeContext = createContext(themes);
