import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Dashboard } from './pages/Dashboard';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuthCheck } from './hooks/useAuthCheck';
import { useAuthStore } from './stores/authStore';
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
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route element={<Layout />}>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/map" element={<ProtectedRoute><Map /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
