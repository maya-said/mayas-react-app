import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import AuthLayout from "../../components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";

import ProtectedRoute from "@/routes/ProtectedRoute";

import Login from "@/components/pages/auth/Login";
import Signup from "@/components/pages/auth/Signup";

import Dashboard from "@/components/pages/main/Dashboard";
import Profile from "@/components/pages/main/Profile";
import Settings from "@/components/pages/main/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>

          <Route element={<MainLayout />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Route>

        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;