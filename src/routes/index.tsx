import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ProtectedRoute } from './ProtectedRoute';

const RootLayout = lazy(() => import('@/components/layout/RootLayout').then(module => ({ default: module.RootLayout })));
const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })));
const Map = lazy(() => import('@/pages/Map').then(module => ({ default: module.Map })));
const Dashboard = lazy(() => import('@/pages/Dashboard').then(module => ({ default: module.Dashboard })));
const LoginForm = lazy(() => import('@/pages/auth/LoginPage').then(module => ({ default: module.LoginForm })));
const SignupForm = lazy(() => import('@/pages/auth/SignupPage').then(module => ({ default: module.SignupForm })));
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })));

export const AppRoutes = () => (
  <Suspense fallback={<LoadingSpinner />}>
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
  </Suspense>
);