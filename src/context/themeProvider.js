import { useState, useCallback, createContext, useContext } from "react";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
import theme from "../styles/theme";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const localTheme = window.localStorage.getItem("theme") || "light";
  const [mode, setMode] = useState(localTheme);
  const themeObject = mode === "light" ? theme.mode.light : theme.mode.dark;

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <EmotionProvider theme={themeObject}>{children}</EmotionProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const { mode, setMode } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return [mode, toggleTheme];
}

export { ThemeProvider, useTheme };
