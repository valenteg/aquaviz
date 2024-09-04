import { useEffect } from 'react';
import { useAuthStore } from '@/store/auth/authStore';

export const useAuthCheck = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
};