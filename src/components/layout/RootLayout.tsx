import { Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/auth/authStore';
import { AuthLayout } from './AuthLayout';
import { MainLayout } from './MainLayout';

export const RootLayout = () => {
  const { user } = useAuthStore();

  return user ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};