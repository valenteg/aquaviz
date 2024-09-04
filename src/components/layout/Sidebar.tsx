import { NavLink } from 'react-router-dom';
import { Home, Map, BarChart2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ScrollArea } from '../ui/scroll-area';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/dashboard', icon: BarChart2, label: 'Dashboard' },
];

export const Sidebar = ({ isExpanded, setIsExpanded }: { isExpanded: boolean; setIsExpanded: (value: boolean) => void }) => {
  return (
    <div
      className={cn(
        "bg-background border-r transition-all duration-300 ease-in-out fixed left-0 top-0 z-40 h-screen",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center justify-center lg:h-[61px]">
        <img src="/logo.svg" alt="Aquaviz Logo" className="h-10 w-10 dark:invert" />
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground',
                    !isExpanded && 'justify-center'
                  )
                }
              >
                <Icon className="h-5 w-5" />
                {isExpanded && <span>{label}</span>}
              </NavLink>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
};