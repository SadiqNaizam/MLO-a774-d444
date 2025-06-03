import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  rightSidebarContent,
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Sidebar /> {/* Handles its own fixed positioning: w-60, left-0, top-0, h-screen, z-20 */}
      <Header />  {/* Handles its own fixed positioning: h-[60px], top-0, left-60, right-80, z-10 */}

      {/* Main Content Area */}
      <main
        className={cn(
          'mt-[60px]', // Below fixed Header
          'ml-60',    // To the right of fixed Sidebar
          rightSidebarContent ? 'mr-80' : 'mr-0', // To the left of fixed RightSidebar, if it exists
          'p-4',      // Padding as per Layout Requirements (mainContent.layout)
          'h-[calc(100vh-60px)]', // Fill remaining vertical space below header
          'overflow-y-auto',      // Allow scrolling for main content (mainContent.sizing)
          'min-w-0',              // Prevent content from breaking layout (mainContent.sizing)
          'scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent' // Consistent scrollbar styling
        )}
      >
        {/* Inner container for gap as per Layout Requirements (mainContent.container) */}
        <div className="flex flex-col gap-6">
          {children}
        </div>
      </main>

      {/* Right Sidebar Area Container */}
      {rightSidebarContent && (
        <aside
          className={cn(
            'fixed top-0 right-0 h-screen w-80', // Sizing as per Layout Requirements (overall.sizing.rightSidebar)
            'bg-card', // Background as per Layout Requirements (rightSidebar.layout -> bg-surface -> card)
            'border-l border-border shadow-lg', // Visual separation and style
            'z-10', // Positioned above main content scroll, below modals. Consistent with Header.
            'flex flex-col', // Layout as per Layout Requirements (rightSidebar.layout)
            'p-4 space-y-4', // Added padding and spacing for items within the right sidebar
            'overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent' // Scrolling support as per Layout Requirements (rightSidebar.notes)
          )}
        >
          {rightSidebarContent}
          {/* 
            The `rightSidebarContent` prop will typically contain components like StoriesWidget, SuggestedGroups.
            ChatWidget has its own fixed positioning (bottom-right of viewport) and will overlay if included here or rendered as a sibling to MainAppLayout.
            This setup aligns with `Layout Requirements -> rightSidebar.notes` which mentions it contains these widgets and has scrolling support.
          */}
        </aside>
      )}
    </div>
  );
};

export default MainAppLayout;
