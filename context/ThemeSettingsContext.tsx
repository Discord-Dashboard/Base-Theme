import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = {
  loading: boolean;
  data: Object;
};

type ThemeContextType = [Theme, Dispatch<SetStateAction<Theme>>];

const initialTheme: Theme = { loading: true, data: null };

const ThemeContext = createContext<ThemeContextType>([initialTheme, () => {}]);

export function ThemeSettingsProvider({ children }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    setTimeout(() => {
      const data = fetch('/api/theme');

      setTheme({
        loading: false,
        data: {},
      });
    }, 3000);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeSettingsContext() {
  return useContext(ThemeContext);
}
