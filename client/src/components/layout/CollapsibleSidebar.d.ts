interface CollapsibleSidebarProps {
    onNavigate?: (itemId: string) => void;
    onToggle?: (collapsed: boolean) => void;
}
export declare function CollapsibleSidebar({ onNavigate, onToggle }: CollapsibleSidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
