import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { Home } from '@/pages/Home';
import { Map } from '@/features/map/components/Map';
import { Dashboard } from '@/features/dashboard/components/Dashboard';
import { LoginForm } from '@/pages/auth/LoginPage';
import { SignupForm } from '@/pages/auth/SignupPage';
import { NotFound } from '@/pages/NotFound';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route element={<RootLayout />}>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/map" element={<ProtectedRoute><Map /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);