import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Bot, 
  Building2, 
  Brain, 
  Briefcase, 
  Globe, 
  Calendar, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  User,
  LogOut,
  Dna
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
  { id: 'charts', label: 'Charts', icon: TrendingUp },
  { id: 'reports', label: 'Reports & Analytics', icon: FileText },
  { id: 'ghostview', label: 'GhostView', icon: Bot },
  { id: 'central-bank', label: 'Central Bank Whisperer', icon: Building2 },
  { id: 'market-psychology', label: 'Market Psychology', icon: Brain },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'markets', label: 'Markets', icon: Globe },
  { id: 'calendar', label: 'FX Calendar', icon: Calendar },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface CollapsibleSidebarProps {
  onNavigate?: (itemId: string) => void;
  onToggle?: (collapsed: boolean) => void;
}

export function CollapsibleSidebar({ onNavigate, onToggle }: CollapsibleSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
  };

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle?.(!newExpanded);
  };

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 64 }
  };

  return (
    <TooltipProvider>
      <motion.div
        className="fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-20 flex flex-col"
        variants={sidebarVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Dna className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold text-sidebar-foreground">
                    Helix Terminal
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggle}
              className="text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"
            >
              {isExpanded ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            const navButton = (
              <Button
                key={item.id}
                variant={isActive ? 'default' : 'ghost'}
                className={`w-full justify-start h-12 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                } ${!isExpanded ? 'px-3' : 'px-4'}`}
                onClick={() => handleItemClick(item.id)}
              >
                <Icon className={`${isExpanded ? 'mr-3' : ''} w-5 h-5 flex-shrink-0`} />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      className="font-medium truncate"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            );

            if (!isExpanded) {
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    {navButton}
                  </TooltipTrigger>
                  <TooltipContent side="right" className="ml-2">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            }

            return navButton;
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="flex-1 min-w-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm font-medium text-sidebar-foreground truncate">
                    Alex Trader
                  </div>
                  <div className="text-xs text-sidebar-foreground/70 truncate">
                    Premium Account
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent flex-shrink-0"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side={isExpanded ? 'top' : 'right'}>
                Sign Out
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
