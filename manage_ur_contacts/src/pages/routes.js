import { Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./signUp";
import Dashboard from "./dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};
