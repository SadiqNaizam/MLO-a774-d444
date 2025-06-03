import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Users,
  MessageSquare,
  Bell,
  HelpCircle,
  ChevronDown,
  Home,
  UsersRound, // Find Friends icon
  CircleUserRound
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        'fixed top-0 left-60 right-80 h-[60px] z-10',
        'flex items-center justify-between px-6 bg-card border-b border-border shadow-sm',
        className
      )}
    >
      {/* Left: Search Bar */}
      <div className="flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search Facebook" 
            className="pl-10 pr-4 py-2 h-9 w-64 bg-secondary rounded-full focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Middle: Navigation Links (Optional, as per image) */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="text-prd-accent-blue hover:bg-prd-accent-blue/10 h-auto px-4 py-2 rounded-md">
          <Home className="h-5 w-5 mr-1" /> Olenna
        </Button>
        <Button variant="ghost" className="hover:bg-prd-accent-gray/50 h-auto px-4 py-2 rounded-md">
          Home
        </Button>
        <Button variant="ghost" className="hover:bg-prd-accent-gray/50 h-auto px-4 py-2 rounded-md">
          Find Friends
        </Button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-prd-accent-gray/50">
          <UsersRound className="h-5 w-5 text-prd-primary-text" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs">8</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-prd-accent-gray/50">
          <MessageSquare className="h-5 w-5 text-prd-primary-text" />
        </Button>
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-prd-accent-gray/50">
          <Bell className="h-5 w-5 text-prd-primary-text" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs">36</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-prd-accent-gray/50">
          <HelpCircle className="h-5 w-5 text-prd-primary-text" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-1 p-1 rounded-full hover:bg-prd-accent-gray/50">
              <Avatar className="h-7 w-7">
                <AvatarImage src="https://i.pravatar.cc/32?u=OlennaMasonHeader" alt="Olenna Mason" />
                <AvatarFallback><CircleUserRound size={16}/></AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
