import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X, CircleUserRound } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  category?: string; // Not in image, but MADdicts implies it
  memberCount: number;
  coverImageUrl: string;
  memberAvatars: string[];
}

interface SuggestedGroupsProps {
  className?: string;
}

const dummyGroups: Group[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    memberCount: 6195,
    coverImageUrl: 'https://picsum.photos/seed/madmen/300/100',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=group1mem1',
      'https://i.pravatar.cc/24?u=group1mem2',
      'https://i.pravatar.cc/24?u=group1mem3',
      'https://i.pravatar.cc/24?u=group1mem4',
      'https://i.pravatar.cc/24?u=group1mem5',
    ],
  },
  {
    id: '2',
    name: 'Dexter Morgan Fans',
    memberCount: 6984,
    coverImageUrl: 'https://picsum.photos/seed/dexter/300/100',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=group2mem1',
      'https://i.pravatar.cc/24?u=group2mem2',
      'https://i.pravatar.cc/24?u=group2mem3',
    ],
  },
];

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const [groups, setGroups] = React.useState(dummyGroups);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="pb-2 px-4 pt-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-semibold text-prd-primary-text">Suggested Groups</CardTitle>
          <Button variant="link" size="sm" className="text-xs text-primary hover:text-primary/80 px-0 h-auto">See All</Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-4">
        {groups.map((group) => (
          <div key={group.id} className="relative border border-border rounded-lg overflow-hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-1 right-1 h-6 w-6 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white z-10"
              onClick={() => handleDismiss(group.id)}
            >
              <X className="h-3 w-3" />
            </Button>
            <div className="relative h-20 bg-secondary">
              <img src={group.coverImageUrl} alt={`${group.name} cover`} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 flex -space-x-2">
                {group.memberAvatars.slice(0, 5).map((avatarUrl, index) => (
                  <Avatar key={index} className="h-6 w-6 border-2 border-card">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback><CircleUserRound size={10}/></AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-prd-primary-text hover:underline cursor-pointer">{group.name}</h4>
              <p className="text-xs text-muted-foreground">{group.memberCount.toLocaleString()} members</p>
              <Button variant="outline" size="sm" className="w-full mt-2 text-sm">
                <Plus className="h-4 w-4 mr-1.5" /> Join
              </Button>
            </div>
          </div>
        ))}
        {groups.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">No more group suggestions for now.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
