import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContext {
  themeName: "light" | "dark";
  toogleTheme: () => void;
}

interface IAppThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContext);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: IAppThemeProvider) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toogleTheme = useCallback(() => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    return themeName === "light" ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
      <Box
        width="100vw"
        height="100vh"
        bgcolor={theme.palette.background.default}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </ThemeContext.Provider>
  );
};
