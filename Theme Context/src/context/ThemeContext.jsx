import { createContext } from "react";

const ThemeContext = createContext({
  isLight: true,
  setIsLight: () => {},
});

export default ThemeContext;
