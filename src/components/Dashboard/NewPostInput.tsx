import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  PenSquare, // Make Post
  Image as ImageIcon, // Photo/Video Album
  Video as VideoIcon,
  ListOrdered, // List
  ImageUp, // Photo/Video (alternative for button)
  UserTag, // Tag Friends
  MoreHorizontal,
  Smile,
  MapPin,
  CircleUserRound
} from 'lucide-react';

interface NewPostInputProps {
  className?: string;
  user?: { name: string; avatarUrl: string };
}

const NewPostInput: React.FC<NewPostInputProps> = ({
  className,
  user = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/40?u=OlennaNewPost' },
}) => {
  const [postText, setPostText] = React.useState('');

  const postOptions = [
    { label: 'Make Post', icon: PenSquare, isActive: true },
    { label: 'Photo/Video Album', icon: ImageIcon },
    { label: 'Live Video', icon: VideoIcon },
  ];

  const actionButtons = [
    { label: 'List', icon: ListOrdered, color: 'text-orange-500' },
    { label: 'Photo/Video', icon: ImageUp, color: 'text-green-500' },
    { label: 'Tag Friends', icon: UserTag, color: 'text-blue-500' },
    // { label: 'Feeling/Activity', icon: Smile, color: 'text-yellow-500' },
    // { label: 'Check In', icon: MapPin, color: 'text-red-500' },
  ];

  return (
    <div className={cn('bg-card p-4 rounded-lg shadow-sm', className)}>
      <div className="flex items-center space-x-3 mb-3 border-b border-border pb-3">
        {postOptions.map((opt) => (
          <Button 
            key={opt.label} 
            variant="ghost" 
            className={cn(
              'text-sm font-medium h-auto py-2 px-3',
              opt.isActive ? 'text-primary border-b-2 border-primary rounded-none' : 'text-muted-foreground hover:bg-secondary'
            )}
          >
            <opt.icon className="h-5 w-5 mr-2" />
            {opt.label}
          </Button>
        ))}
      </div>
      
      <div className="flex items-start space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback><CircleUserRound /></AvatarFallback>
        </Avatar>
        <Input
          placeholder={`What's on your mind, ${user.name}?`}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="flex-1 h-10 bg-secondary border-none focus-visible:ring-1 focus-visible:ring-primary rounded-full px-4 text-sm"
        />
      </div>

      <Separator className="my-3" />

      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          {actionButtons.map((btn) => (
            <Button key={btn.label} variant="ghost" className={`hover:bg-secondary text-sm font-medium ${btn.color}`}>
              <btn.icon className={`h-5 w-5 mr-1.5`} />
              {btn.label}
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default NewPostInput;
