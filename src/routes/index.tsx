import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
