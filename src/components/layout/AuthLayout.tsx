import React from 'react';
import { Footer } from './Footer';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { motion } from 'framer-motion';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/kelp-forest.webp)' }}
    >
      <header className="w-full p-4 flex justify-between items-center">
        <img src="/logo.svg" alt="Aquaviz Logo" className="h-10 w-10 invert dark:invert-0" />
        <ModeToggle />
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};