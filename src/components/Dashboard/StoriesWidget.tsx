import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  PlusCircle,
  Archive,
  Settings,
  CircleUserRound
} from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  avatarUrl: string;
  storyImageUrl: string;
  viewed?: boolean;
}

interface StoriesWidgetProps {
  className?: string;
}

const dummyStories: Story[] = [
  { id: '1', userName: 'User 1', avatarUrl: 'https://i.pravatar.cc/40?u=story1', storyImageUrl: 'https://picsum.photos/seed/story1/100/150' },
  { id: '2', userName: 'User 2', avatarUrl: 'https://i.pravatar.cc/40?u=story2', storyImageUrl: 'https://picsum.photos/seed/story2/100/150', viewed: true },
  { id: '3', userName: 'User 3', avatarUrl: 'https://i.pravatar.cc/40?u=story3', storyImageUrl: 'https://picsum.photos/seed/story3/100/150' },
  { id: '4', userName: 'User 4', avatarUrl: 'https://i.pravatar.cc/40?u=story4', storyImageUrl: 'https://picsum.photos/seed/story4/100/150' },
  { id: '5', userName: 'User 5', avatarUrl: 'https://i.pravatar.cc/40?u=story5', storyImageUrl: 'https://picsum.photos/seed/story5/100/150', viewed: true },
  { id: '6', userName: 'User 6', avatarUrl: 'https://i.pravatar.cc/40?u=story6', storyImageUrl: 'https://picsum.photos/seed/story6/100/150' },
];

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="pb-2 px-4 pt-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-prd-primary-text">Stories</CardTitle>
          <div className="space-x-1">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-secondary">Archive</Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-secondary">Settings</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-3">
            {/* Add to Story Card */}
            <div className="flex-shrink-0 w-[100px] h-[150px] rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer flex flex-col items-center justify-center bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2">
                <PlusCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-xs font-medium text-center text-prd-primary-text">Add to Your Story</p>
              <p className="text-xs text-muted-foreground text-center">Share a photo or video.</p>
            </div>

            {/* Story Cards */}
            {dummyStories.map((story) => (
              <div 
                key={story.id} 
                className={cn(
                  'relative flex-shrink-0 w-[100px] h-[150px] rounded-lg overflow-hidden cursor-pointer group',
                  'border-2 border-transparent',
                  story.viewed ? 'opacity-70' : 'border-primary'
                )}
              >
                <img src={story.storyImageUrl} alt={`${story.userName}'s story`} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Avatar className={cn(
                  'absolute top-2 left-2 h-8 w-8 border-2',
                  story.viewed ? 'border-muted-foreground' : 'border-primary'
                )}>
                  <AvatarImage src={story.avatarUrl} alt={story.userName} />
                  <AvatarFallback><CircleUserRound size={16}/></AvatarFallback>
                </Avatar>
                <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium truncate">{story.userName}</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
