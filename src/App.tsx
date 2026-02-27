import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RiderPage } from "./pages/RiderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rider/:slug" element={<RiderPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
