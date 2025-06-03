import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle as MessageCircleIcon, // Renamed to avoid conflict with component name
  Share2,
  Bookmark,
  Globe,
  Users,
  CircleUserRound
} from 'lucide-react';

interface FeedPostProps {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
    profileUrl?: string;
  };
  timestamp: string;
  privacy?: 'public' | 'friends' | 'only_me';
  location?: string;
  content: string;
  media?: {
    type: 'image' | 'video' | 'map';
    url?: string;
    alt?: string;
  };
  reactions: {
    likes: number;
    comments: number;
    shares: number;
  };
  taggedFriends?: { name: string, url: string }[];
  className?: string;
}

const FeedPost: React.FC<FeedPostProps> = ({
  user,
  timestamp,
  privacy = 'public' as const,
  location,
  content,
  media,
  reactions,
  taggedFriends,
  className,
}) => {
  const PrivacyIcon = privacy === 'public' ? Globe : Users;

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <a href={user.profileUrl || '#'}>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback><CircleUserRound /></AvatarFallback>
              </Avatar>
            </a>
            <div>
              <a href={user.profileUrl || '#'} className="font-semibold text-sm text-prd-primary-text hover:underline">
                {user.name}
              </a>
              {location && <span className='text-sm text-muted-foreground'> is in <a href="#" className='font-medium text-prd-primary-text hover:underline'>{location}</a></span>}
              {taggedFriends && taggedFriends.length > 0 && (
                <span className="text-sm text-muted-foreground">
                  {' with '}
                  {taggedFriends.map((friend, index) => (
                    <React.Fragment key={friend.name}>
                      <a href={friend.url} className="font-medium text-prd-primary-text hover:underline">{friend.name}</a>
                      {index < taggedFriends.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </span>
              )}
              <div className="text-xs text-muted-foreground flex items-center">
                <span>{timestamp}</span>
                <span className="mx-1">·</span>
                <PrivacyIcon className="h-3 w-3" />
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save Post</DropdownMenuItem>
              <DropdownMenuItem>Hide Post</DropdownMenuItem>
              <DropdownMenuItem>Report Post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-2 pt-0">
        <p className="text-sm text-prd-primary-text whitespace-pre-wrap mb-3">{content}</p>
        {media && media.type === 'image' && (
          <img src={media.url} alt={media.alt || 'Post media'} className="rounded-lg w-full object-cover max-h-[400px] border border-border" />
        )}
        {media && media.type === 'map' && (
          <div className="rounded-lg w-full h-64 bg-secondary border border-border flex items-center justify-center text-muted-foreground">
            Map Placeholder (Raleigh, NC)
          </div>
        )}
         {location && media?.type === 'map' && (
          <div className="mt-2 p-3 border border-border rounded-md bg-background/50 flex justify-between items-center">
            <div>
              <p className="font-semibold text-sm text-prd-primary-text">Raleigh, North Carolina</p>
              <p className="text-xs text-muted-foreground">City · United States</p>
              <p className="text-xs text-muted-foreground">Bryan Durand and 2 others have been here</p>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              <Bookmark className="h-3 w-3 mr-1.5"/> Save
            </Button>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-2 flex flex-col items-start space-y-2">
        {(reactions.likes > 0 || reactions.comments > 0 || reactions.shares > 0) && (
            <div className="flex items-center space-x-4 text-xs text-muted-foreground w-full pb-2">
                {reactions.likes > 0 && <span>{reactions.likes} Likes</span>}
                {reactions.comments > 0 && <span>{reactions.comments} Comments</span>}
                {reactions.shares > 0 && <span>{reactions.shares} Shares</span>}
            </div>
        )}
        <div className="grid grid-cols-3 gap-1 w-full border-t border-border pt-1">
          <Button variant="ghost" className="w-full text-muted-foreground hover:bg-secondary">
            <ThumbsUp className="h-5 w-5 mr-2" /> Like
          </Button>
          <Button variant="ghost" className="w-full text-muted-foreground hover:bg-secondary">
            <MessageCircleIcon className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="w-full text-muted-foreground hover:bg-secondary">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedPost;
