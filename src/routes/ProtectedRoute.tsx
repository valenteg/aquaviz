import { ReactNode, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth/authStore'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface ProtectedRouteProps {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuthStore()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
}