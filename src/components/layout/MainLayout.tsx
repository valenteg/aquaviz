import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-auto p-6">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};