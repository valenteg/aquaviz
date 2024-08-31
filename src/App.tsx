import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Map = lazy(() => import('./pages/Map'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
              <Home />
            </Suspense>
          } />
          <Route path="map" element={
            <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
              <Map />
            </Suspense>
          } />
          <Route path="dashboard" element={
            <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
              <Dashboard />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
