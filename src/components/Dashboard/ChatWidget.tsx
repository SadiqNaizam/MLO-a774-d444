import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  MessageSquareText, // Main Chat Icon
  SquarePen, // New Message
  Settings2, // Options
  ChevronsUpDown, // Expand/Collapse
  X, // Close
  Search,
  CircleUserRound,
  Video,
  Phone
} from 'lucide-react';

interface ChatContact {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastMessage?: string;
  unreadCount?: number;
}

interface ChatWidgetProps {
  className?: string;
}

const dummyContacts: ChatContact[] = [
  { id: '1', name: 'Alice Wonderland', avatarUrl: 'https://i.pravatar.cc/32?u=alice', isOnline: true, lastMessage: 'Hey there!', unreadCount: 2 },
  { id: '2', name: 'Bob The Builder', avatarUrl: 'https://i.pravatar.cc/32?u=bob', isOnline: false, lastMessage: 'Can we fix it?' },
  { id: '3', name: 'Charlie Chaplin', avatarUrl: 'https://i.pravatar.cc/32?u=charlie', isOnline: true },
  { id: '4', name: 'Diana Prince', avatarUrl: 'https://i.pravatar.cc/32?u=diana', isOnline: true, lastMessage: 'Wondering about...', unreadCount: 1 },
  { id: '5', name: 'Edward Scissorhands', avatarUrl: 'https://i.pravatar.cc/32?u=edward', isOnline: false },
];

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredContacts = dummyContacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) {
    return (
      <Button 
        className={cn('fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-30 bg-primary hover:bg-primary/90', className)}
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquareText className="h-6 w-6 text-primary-foreground" />
      </Button>
    );
  }

  return (
    <div className={cn('fixed bottom-0 right-4 w-72 h-[400px] bg-card border border-border rounded-t-lg shadow-xl flex flex-col z-30', className)}>
      <header className="flex items-center justify-between p-2 border-b border-border bg-secondary/30 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <MessageSquareText className="h-5 w-5 text-prd-primary-text" />
          <h3 className="font-semibold text-sm text-prd-primary-text">Chat</h3>
        </div>
        <div className="flex items-center space-x-0.5">
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-secondary">
            <SquarePen className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-secondary">
            <Settings2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-secondary" onClick={() => setIsOpen(false)}>
            <ChevronsUpDown className="h-4 w-4" /> {/* Using this for minimize for now */}
          </Button>
          {/* <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button> */}
        </div>
      </header>

      <div className="p-2 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search contacts..."
            className="pl-8 pr-2 py-1.5 h-8 text-sm bg-background focus-visible:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {filteredContacts.map(contact => (
            <div 
              key={contact.id} 
              className="flex items-center justify-between p-2 rounded-md hover:bg-secondary cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                  <AvatarFallback><CircleUserRound size={16}/></AvatarFallback>
                  {contact.isOnline && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-card rounded-full"></div>}
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-prd-primary-text truncate max-w-[100px]">{contact.name}</p>
                  {contact.lastMessage && <p className="text-xs text-muted-foreground truncate max-w-[100px]">{contact.lastMessage}</p>}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary">
                    <Phone className="h-4 w-4"/>
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary">
                    <Video className="h-4 w-4"/>
                </Button>
                {contact.unreadCount && contact.unreadCount > 0 && (
                    <Badge variant="destructive" className="h-5 min-w-[20px] p-1 text-xs flex items-center justify-center">
                        {contact.unreadCount}
                    </Badge>
                )}
              </div>
            </div>
          ))}
          {filteredContacts.length === 0 && searchTerm && (
            <p className="text-sm text-muted-foreground text-center py-4">No contacts found.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatWidget;
