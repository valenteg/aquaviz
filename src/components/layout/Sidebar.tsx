import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Map, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/dashboard', icon: BarChart2, label: 'Dashboard' },
];

export const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={cn(
        "bg-background border-r transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "fixed left-0 top-0 z-40 h-screen lg:relative lg:translate-x-0"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center justify-between px-3 lg:h-[61px]">
          {!isCollapsed && <span className="text-lg font-semibold">Aquaviz</span>}
          <Button variant="ghost" size="icon" onClick={toggleCollapse} className="hidden lg:flex">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
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
                    isCollapsed && 'justify-center'
                  )
                }
                onClick={() => {
                  if (!isCollapsed) {
                    toggleSidebar();
                  }
                }}
              >
                <Icon className="h-5 w-5" />
                {!isCollapsed && <span>{label}</span>}
              </NavLink>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
};