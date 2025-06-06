import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CollapsibleSidebar } from './CollapsibleSidebar';
import { TopHeader } from './TopHeader';
import { LyaAssistant } from '@/components/ai/LyaAssistant';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (itemId: string) => {
    console.log('Navigating to:', itemId);
    // Handle navigation logic here
  };

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <CollapsibleSidebar 
        onNavigate={handleNavigate} 
        onToggle={handleSidebarToggle}
      />
      
      <motion.div
        className="transition-all duration-300 ease-in-out"
        style={{ 
          marginLeft: sidebarCollapsed ? '64px' : '280px' 
        }}
        animate={{
          marginLeft: sidebarCollapsed ? '64px' : '280px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <TopHeader isCollapsed={sidebarCollapsed} />
        
        <main className="overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </motion.div>
      
      <LyaAssistant />
    </div>
  );
}
