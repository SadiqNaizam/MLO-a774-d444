import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListUsers,
  HeartHandshake,
  ChevronDown,
  Settings,
  LogOut,
  CircleUserRound
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  isSectionTitle?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, isSectionTitle, children, onClick }) => {
  if (isSectionTitle) {
    return <h3 className="px-3 pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</h3>;
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium hover:bg-prd-accent-blue/20',
        isActive ? 'bg-prd-accent-blue/30 text-white' : 'text-primary-foreground/90',
        onClick && 'cursor-pointer'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {children && <span className="ml-auto">{children}</span>}
    </a>
  );
};

const SidebarNav: React.FC = () => {
  const [showMoreExplore, setShowMoreExplore] = React.useState(false);

  const primaryNavItems = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageCircle, label: 'Messenger' },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts = [
    { icon: Gamepad2, label: 'FarmVille 2' },
  ];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: ListUsers, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
  ];

  const createLinks = [
    { label: 'Ad', href: '#' },
    { label: 'Page', href: '#' },
    { label: 'Group', href: '#' },
    { label: 'Event', href: '#' },
    { label: 'Fundraiser', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-60 bg-prd-sidebar-bg text-primary-foreground flex flex-col z-20 shadow-lg">
      <div className="p-4 border-b border-white/10">
        <a href="#" className="flex items-center space-x-2">
          <Facebook className="h-8 w-8 text-white" />
          <span className="font-bold text-xl text-white">SocialClone</span>
        </a>
      </div>

      <div className="p-4 border-b border-white/10">
        <a href="#" className="flex items-center space-x-3 group">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/40?u=OlennaMason" alt="Olenna Mason" />
            <AvatarFallback><CircleUserRound /></AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm text-white group-hover:underline">Olenna Mason</span>
        </a>
      </div>

      <div className="flex-grow overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-prd-accent-blue/50 scrollbar-track-prd-sidebar-bg">
        {primaryNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}

        <NavItem label="Shortcuts" isSectionTitle />
        {shortcuts.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}

        <NavItem label="Explore" isSectionTitle />
        {exploreItems.slice(0, showMoreExplore ? exploreItems.length : 3).map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <NavItem 
          icon={ChevronDown} 
          label={showMoreExplore ? 'See Less' : 'See More...'}
          onClick={() => setShowMoreExplore(!showMoreExplore)}
        />
        
        <NavItem label="Create" isSectionTitle />
        <div className="px-3 space-y-1">
            {createLinks.map(link => (
                <a key={link.label} href={link.href} className="block text-xs text-gray-300 hover:text-white hover:underline">{link.label}</a>
            ))}
        </div>
      </div>

      <div className="p-3 border-t border-white/10 mt-auto">
        <NavItem icon={Settings} label="Settings" />
        <NavItem icon={LogOut} label="Logout" />
      </div>
    </nav>
  );
};

export default SidebarNav;
