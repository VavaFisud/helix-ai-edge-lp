import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CollapsibleSidebar } from './CollapsibleSidebar';
import { TopHeader } from './TopHeader';
import { LyaAssistant } from '@/components/ai/LyaAssistant';
export function MainLayout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const handleNavigate = (itemId) => {
        console.log('Navigating to:', itemId);
        // Handle navigation logic here
    };
    const handleSidebarToggle = (collapsed) => {
        setSidebarCollapsed(collapsed);
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(CollapsibleSidebar, { onNavigate: handleNavigate, onToggle: handleSidebarToggle }), _jsxs(motion.div, { className: "transition-all duration-300 ease-in-out", style: {
                    marginLeft: sidebarCollapsed ? '64px' : '280px'
                }, animate: {
                    marginLeft: sidebarCollapsed ? '64px' : '280px'
                }, transition: { duration: 0.3, ease: 'easeInOut' }, children: [_jsx(TopHeader, { isCollapsed: sidebarCollapsed }), _jsx("main", { className: "overflow-y-auto custom-scrollbar", children: children })] }), _jsx(LyaAssistant, {})] }));
}
