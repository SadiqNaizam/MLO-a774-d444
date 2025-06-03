import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The SidebarNav component already handles its own styling and fixed positioning (w-60, h-screen, bg-prd-sidebar-bg, etc.)
  // as defined in Layout Requirements. This Sidebar component acts as a semantic wrapper
  // and aligns with the AdminLayout composition specified in the project requirements.
  return (
    <aside className={cn("z-20", className)}> {/* Higher z-index for sidebar, matching SidebarNav's own z-index */} 
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
