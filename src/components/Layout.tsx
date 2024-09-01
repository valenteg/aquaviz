import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ThemeProvider } from './ThemeProvider';

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};