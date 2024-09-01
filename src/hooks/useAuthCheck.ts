import { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';

export const useAuthCheck = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
};