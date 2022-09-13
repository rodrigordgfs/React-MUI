import Button from "@mui/material/Button";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toogleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toogleDrawerOpen}
          >
            Toogle Theme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
