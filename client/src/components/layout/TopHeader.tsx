import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Sun, Moon, Dna, User, LogOut, ChevronDown, Settings, Construction } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';

interface Notification {
  id: string;
  title: string;
  content?: string;
  message?: string;
  type: 'info' | 'warning' | 'success' | 'error';
  isRead: boolean;
  createdAt: Date;
  isGlobal: boolean;
  userId?: string;
}

interface TopHeaderProps {
  title?: string;
  subtitle?: string;
  ghostTradingBalance?: number;
  isCollapsed?: boolean;
}

export function TopHeader({ 
  title = 'Dashboard', 
  subtitle = 'Real-time forex market overview',
  ghostTradingBalance = 87543.21,
  isCollapsed = false
}: TopHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState<any>(null);
  const [userFullName, setUserFullName] = useState<string | null>(null);
  const [accountStatus, setAccountStatus] = useState<string>('Free'); // Default to Free
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const userId = session?.user?.id;
      
      const url = userId ? `/api/notifications?userId=${userId}` : '/api/notifications';
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
        setUnreadCount(data.filter((n: Notification) => !n.isRead).length);
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isRead: true }),
      });
      if (response.ok) {
        fetchNotifications();
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return '📢';
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - new Date(date).getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        setUserFullName(session.user.user_metadata?.full_name || session.user.email);
        // TODO: Fetch actual account status from user_metadata or a separate table
        // For now, we can simulate it or check for a specific metadata field
        setAccountStatus(session.user.user_metadata?.account_type || 'Free'); 
      }
    };
    fetchUser();
    fetchNotifications();

    // Refresh notifications every 5 minutes
    const interval = setInterval(fetchNotifications, 300000);

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setUserFullName(session?.user?.user_metadata?.full_name || session?.user?.email || null);
      setAccountStatus(session?.user?.user_metadata?.account_type || 'Free');
    });

    // Listen for custom profileUpdated event
    const handleProfileUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ user: any }>;
      if (customEvent.detail && customEvent.detail.user) {
        const updatedUser = customEvent.detail.user;
        console.log('TopHeader: profileUpdated event received, updating user from event detail:', updatedUser);
        console.log('TopHeader: Avatar URL from updated user:', updatedUser.user_metadata?.avatar_url);
        setUser(updatedUser);
        setUserFullName(updatedUser.user_metadata?.full_name || updatedUser.email);
        setAccountStatus(updatedUser.user_metadata?.account_type || 'Free');
      } else {
        console.log('TopHeader: profileUpdated event received, but no user detail. Refetching.');
        fetchUser();
      }
    };

    window.addEventListener('profileUpdated', handleProfileUpdate);

    return () => {
      authListener?.subscription.unsubscribe();
      window.removeEventListener('profileUpdated', handleProfileUpdate);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Navigate to login or home page after logout
    window.location.href = '/auth'; // Or use useNavigate if within Router context
  };

  return (
    <header 
      className="fixed top-0 z-30 bg-card/95 backdrop-blur-md py-4 px-6"
      style={{ left: isCollapsed ? '80px' : '296px', right: '0' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Ghost Trading System Balance */}
          <div className="glassmorphism rounded-lg px-4 py-2 border border-primary/20 relative">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Construction className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Coming Soon</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground opacity-30">Ghost Trading Balance</div>
            <div className="text-lg font-bold text-primary opacity-30">
              ${ghostTradingBalance.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </div>
          </div>
          
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="p-2"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="relative p-2"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center"
                  >
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-card border-border shadow-lg">
              <DropdownMenuLabel className="font-normal">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Notifications</span>
                  {unreadCount > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {unreadCount} new
                    </Badge>
                  )}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    No notifications yet
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <DropdownMenuItem 
                      key={notification.id}
                      className={`flex flex-col items-start p-3 hover:bg-muted/50 cursor-pointer ${
                        !notification.isRead ? 'bg-muted/30' : ''
                      }`}
                      onClick={() => !notification.isRead && markAsRead(notification.id)}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-sm font-medium flex items-center gap-1">
                          {getNotificationIcon(notification.type)} {notification.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatTimeAgo(notification.createdAt)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.content || notification.message}</p>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 ml-auto"></div>
                      )}
                    </DropdownMenuItem>
                  ))
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center p-2 hover:bg-muted/50 cursor-pointer">
                <Link to="/admin" className="text-sm text-primary w-full">
                  Admin Panel
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile Dropdown */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 p-2 h-auto">
                  <Avatar className="h-8 w-8">
                    <AvatarImage 
                      src={user.user_metadata?.avatar_url || undefined} 
                      alt={userFullName || user.email}
                      onLoad={() => {
                        console.log('TopHeader: Avatar loaded successfully:', user.user_metadata?.avatar_url);
                      }}
                      onError={(e) => {
                        console.log('TopHeader: Avatar image failed to load:', user.user_metadata?.avatar_url);
                        console.log('TopHeader: Full user metadata:', user.user_metadata);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <AvatarFallback>{userFullName ? userFullName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-medium text-foreground truncate max-w-[100px]">{userFullName || 'User'}</div>
                    <div className="text-xs text-muted-foreground">{accountStatus} Account</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border-border shadow-lg">
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
                  {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
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
                  {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" className="p-2" onClick={() => window.location.href = '/auth'}>
              <User className="w-4 h-4 mr-1" /> Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
