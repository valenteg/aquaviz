import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`flex flex-1 flex-col overflow-hidden transition-all duration-300 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <Header toggleSidebar={() => setIsExpanded(!isExpanded)} />
        <main className="flex-1 overflow-auto p-4">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};