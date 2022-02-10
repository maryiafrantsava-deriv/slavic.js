import React from 'react'

interface IThemeContext {
  active_theme: string;
  setActiveTheme: (theme: string) => void;
}

const initialValues = {
  active_theme: 'light',
  setActiveTheme: () => {},
}

const ThemeContext = React.createContext<IThemeContext>(initialValues);

export default ThemeContext;