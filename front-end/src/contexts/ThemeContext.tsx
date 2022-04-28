import { createContext } from 'react';

export interface IThemeTypes {
  colorBg: string;
  colorText: string;
  colorBgOffset: string;
  colorTextOffset: string;
  colorSvg: string;
  isDarkMode: boolean;
}

interface IThemeContext {
  theme: IThemeTypes;
  setTheme: React.Dispatch<React.SetStateAction<IThemeTypes>>;
}

export const ThemeContext = createContext({} as IThemeContext);

export const themes = {
  light: {
    colorBg: '#fefeff',
    colorText: '#22252f',
    colorBgOffset: '#e5e7ec',
    colorTextOffset: '#767d90',
    colorSvg:
      'invert(12%) sepia(27%) saturate(419%) hue-rotate(188deg) brightness(95%) contrast(94%)',
    isDarkMode: false,
  },
  dark: {
    colorBg: '#131316',
    colorText: '#fbfbfd',
    colorBgOffset: '#767d90',
    colorTextOffset: '#e5e7ec',
    colorSvg:
      'invert(98%) sepia(2%) saturate(64%) hue-rotate(199deg) brightness(99%) contrast(100%)',
    isDarkMode: true,
  },
};
