import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CollapsibleSidebar } from './CollapsibleSidebar';
import { TopHeader } from './TopHeader';
import { LyaAssistant } from '@/components/ai/LyaAssistant';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (itemId: string) => {
    console.log('Navigating to:', itemId);
    navigate(`/${itemId}`);
  };

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopHeader isCollapsed={sidebarCollapsed} />
      
      <CollapsibleSidebar 
        onNavigate={handleNavigate} 
        onToggle={handleSidebarToggle}
      />
      
      <motion.div
        className="transition-all duration-300 ease-in-out pt-20"
        style={{ 
          marginLeft: sidebarCollapsed ? '64px' : '280px' 
        }}
        animate={{
          marginLeft: sidebarCollapsed ? '64px' : '280px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <main className="overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </motion.div>
      
      <LyaAssistant />
    </div>
  );
}
