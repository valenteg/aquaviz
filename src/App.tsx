import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { AppRoutes } from './routes';
import { useAuthCheck } from './hooks/useAuthCheck';
import { useAuthStore } from './store/auth/authStore';
import { LoadingSpinner } from './components/ui/loading-spinner';

function App() {
  useAuthCheck();
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size={40} />
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="aquaviz-theme">
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;