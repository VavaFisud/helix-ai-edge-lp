import React, { useState, useEffect } from 'react';
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
  Dna,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  { id: 'market-analysis', label: 'Market Analysis', icon: TrendingUp },
  { id: 'reports', label: 'Reports & Analytics', icon: FileText },
  { id: 'work-in-progress/ghostview', label: 'GhostView', icon: Bot },
  { id: 'work-in-progress/central-bank-whisperer', label: 'Central Bank Whisperer', icon: Building2 },
  { id: 'work-in-progress/market-psychology', label: 'Market Psychology', icon: Brain },
  { id: 'work-in-progress/charts', label: 'Charts', icon: TrendingUp },
  { id: 'work-in-progress/markets', label: 'Markets', icon: Globe },
  { id: 'work-in-progress/portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'calendar', label: 'FX Calendar', icon: Calendar },
];

interface CollapsibleSidebarProps {
  onNavigate?: (itemId: string) => void;
  onToggle?: (collapsed: boolean) => void;
}

export function CollapsibleSidebar({ onNavigate, onToggle }: CollapsibleSidebarProps) {
  const [user, setUser] = useState<any>(null);
  const [userFullName, setUserFullName] = useState<string | null>(null);
  const [accountStatus, setAccountStatus] = useState<string>('Free');
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const handleItemClick = (itemId: string) => {
    onNavigate?.(itemId);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const metadata = session.user.user_metadata;
        const firstName = metadata?.first_name || '';
        const lastName = metadata?.last_name || '';
        const fullName = metadata?.full_name || `${firstName} ${lastName}`.trim() || session.user.email;
        setUserFullName(fullName);
        setAccountStatus(metadata?.account_type || 'Free');
      }
    };
    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        const metadata = session.user.user_metadata;
        const firstName = metadata?.first_name || '';
        const lastName = metadata?.last_name || '';
        const fullName = metadata?.full_name || `${firstName} ${lastName}`.trim() || session.user.email;
        setUserFullName(fullName);
        setAccountStatus(metadata?.account_type || 'Free');
      } else {
        setUserFullName(null);
      }
    });

    // Listen for custom profileUpdated event
    const handleProfileUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ user: any }>;
      if (customEvent.detail && customEvent.detail.user) {
        const updatedUser = customEvent.detail.user;
        console.log('CollapsibleSidebar: profileUpdated event received, updating user from event detail:', updatedUser);
        console.log('CollapsibleSidebar: Avatar URL from updated user:', updatedUser.user_metadata?.avatar_url);
        setUser(updatedUser);
        const metadata = updatedUser.user_metadata;
        const firstName = metadata?.first_name || '';
        const lastName = metadata?.last_name || '';
        const fullName = metadata?.full_name || `${firstName} ${lastName}`.trim() || updatedUser.email;
        setUserFullName(fullName);
        setAccountStatus(metadata?.account_type || 'Free');
      } else {
        console.log('CollapsibleSidebar: profileUpdated event received, but no user detail. Refetching.');
        fetchUser();
      }
    };

    window.addEventListener('profileUpdated', handleProfileUpdate);

    return () => {
      authListener?.subscription.unsubscribe();
      window.removeEventListener('profileUpdated', handleProfileUpdate);
    };
  }, []); // Remove fetchUser from dependency array since it's defined inside the effect

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/auth';
  };

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle?.(!newExpanded);
  };

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 } // Increased collapsed width
  };

  return (
    <TooltipProvider>
      <motion.div
        className="fixed left-0 top-0 h-full bg-sidebar z-20 flex flex-col transition-colors duration-200 shadow-lg"
        variants={sidebarVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Header */}
        <div className="px-6 py-4">
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
                  <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                    <img 
                      src="/helix-logo.svg" 
                      alt="Helix Terminal" 
                      className="w-8 h-8"
                    />
                    <span className="text-xl font-bold text-sidebar-foreground">
                      Helix Terminal
                    </span>
                  </Link>
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
        <nav className={`flex-1 ${isExpanded ? 'p-4' : 'p-2'} space-y-2 overflow-y-auto custom-scrollbar`}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const navPath = `/${item.id}`;
            const isActive = location.pathname === navPath;
            const navButtonContent = (
              <>
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
              </>
            );

            const navButton = (
              <Link to={navPath} className="w-full" onClick={() => handleItemClick(item.id)}>
                <Button
                  key={item.id}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full ${isExpanded ? 'justify-start' : 'justify-center'} h-12 ${!isExpanded ? 'px-2' : 'px-4'} ${ 
                    isActive 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'text-sidebar-foreground group-hover:bg-sidebar-accent group-hover:text-sidebar-accent-foreground'
                  }`}
                >
                  {navButtonContent}
                </Button>
              </Link>
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
        <div className="p-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`w-full flex items-center ${isExpanded ? 'justify-start space-x-3' : 'justify-center'} ${!isExpanded ? 'p-3' : 'p-2'} h-auto text-left text-sidebar-foreground group-hover:bg-sidebar-accent group-hover:text-sidebar-accent-foreground`}>
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage 
                      src={user.user_metadata?.avatar_url || undefined} 
                      alt={userFullName || user.email}
                      onLoad={() => {
                        console.log('CollapsibleSidebar: Avatar loaded successfully:', user.user_metadata?.avatar_url);
                      }}
                      onError={(e) => {
                        console.log('CollapsibleSidebar: Avatar image failed to load:', user.user_metadata?.avatar_url);
                        console.log('CollapsibleSidebar: Full user metadata:', user.user_metadata);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <AvatarFallback>
                      {user.user_metadata?.first_name ? 
                        user.user_metadata.first_name.charAt(0).toUpperCase() + (user.user_metadata?.last_name ? user.user_metadata.last_name.charAt(0).toUpperCase() : '') :
                        (userFullName ? userFullName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase())
                      }
                    </AvatarFallback>
                  </Avatar>
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
                          {userFullName || 'User'}
                        </div>
                        <div className="text-xs text-sidebar-foreground/70 truncate">
                          {accountStatus} Account
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isExpanded && <ChevronDown className="h-4 w-4 text-sidebar-foreground/70 ml-auto flex-shrink-0" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side={isExpanded ? "top" : "right"} align="start" className="mb-2 w-56 bg-card border-border shadow-lg">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-foreground">{userFullName || 'User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="hover:bg-muted/50 cursor-pointer">
                  <Link to="/profile-settings">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted/50 cursor-pointer">
                  <Link to="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:bg-red-500/10 cursor-pointer focus:bg-red-500/10 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" className={`w-full flex items-center ${isExpanded ? 'justify-start space-x-3' : 'justify-center'} p-2 h-auto`} onClick={() => window.location.href = '/auth'}>
              <Avatar className="h-10 w-10">
                 <AvatarFallback />
              </Avatar>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm font-medium text-sidebar-foreground">Sign In</div>
                </motion.div>
              )}
            </Button>
          )}
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
