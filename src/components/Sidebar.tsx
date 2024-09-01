import { NavLink } from 'react-router-dom';
import { Home, Map, BarChart2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { ScrollArea } from './ui/scroll-area';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/dashboard', icon: BarChart2, label: 'Dashboard' },
];

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => (
  <div className={cn(
    "bg-background border-r w-64 h-screen fixed left-0 top-0 transition-transform duration-300 ease-in-out transform z-50",
    isOpen ? "translate-x-0" : "-translate-x-full",
    "md:translate-x-0"
  )}>
    <ScrollArea className="h-full py-6">
      <nav className="space-y-2 px-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </ScrollArea>
  </div>
);