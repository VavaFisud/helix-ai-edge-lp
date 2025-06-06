import React from 'react';
import { Bell, Sun, Moon, Dna, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';

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

  return (
    <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo when sidebar is collapsed */}
          {isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Dna className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Helix Terminal</span>
            </div>
          )}
          
          {/* Title when sidebar is expanded */}
          {!isCollapsed && (
            <div>
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground text-sm">{subtitle}</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Ghost Trading System Balance */}
          <div className="glassmorphism rounded-lg px-4 py-2 border border-primary/20">
            <div className="text-xs text-muted-foreground">Ghost Trading Balance</div>
            <div className="text-lg font-bold text-primary">
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
          <Button
            variant="outline"
            size="sm"
            className="relative p-2"
          >
            <Bell className="w-4 h-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center"
            >
              3
            </Badge>
          </Button>

          {/* User Profile */}
          <Button
            variant="outline"
            size="sm"
            className="p-2"
          >
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
