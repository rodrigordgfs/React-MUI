import Button from "@mui/material/Button";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {
  const { toogleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button variant="contained" color="primary" onClick={toogleTheme}>
            Teste
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
