import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import NewPostInput from '../components/Dashboard/NewPostInput';
import FeedPost from '../components/Dashboard/FeedPost';
import StoriesWidget from '../components/Dashboard/StoriesWidget';
import SuggestedGroups from '../components/Dashboard/SuggestedGroups';
import ChatWidget from '../components/Dashboard/ChatWidget';

interface UserData {
  name: string;
  avatarUrl: string;
}

interface FeedPostData {
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
  taggedFriends?: { name: string; url: string }[];
}

const currentUserData: UserData = {
  name: 'Olenna',
  avatarUrl: 'https://i.pravatar.cc/40?u=OlennaPageContext',
};

const feedPostsData: FeedPostData[] = [
  {
    id: 'post1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/40?u=JuliaFillory',
      profileUrl: '#profile-julia',
    },
    timestamp: '2 hrs ago',
    privacy: 'friends' as const,
    location: 'Raleigh, North Carolina',
    content: 'Checking out some new stores downtown!',
    media: {
      type: 'map' as const,
      // URL for map image not strictly needed as FeedPost component shows a placeholder, 
      // but good practice to include if it were a real map image.
      // url: 'link_to_map_image.jpg', 
      alt: 'Map of Raleigh, North Carolina',
    },
    reactions: {
      likes: 125,
      comments: 18,
      shares: 7,
    },
    taggedFriends: [
      { name: 'Bryan Durand', url: '#bryan' },
      { name: 'Anna Smith', url: '#anna' },
    ],
  },
  {
    id: 'post2',
    user: {
      name: 'Alex Maverick',
      avatarUrl: 'https://i.pravatar.cc/40?u=AlexMaverick',
      profileUrl: '#profile-alex',
    },
    timestamp: '5 hrs ago',
    privacy: 'public' as const,
    content: 'Just enjoyed a beautiful sunset! \n#blessed #nature #sunsetlover',
    media: {
      type: 'image' as const,
      url: 'https://picsum.photos/seed/sunsetpost/600/400',
      alt: 'Beautiful sunset over mountains',
    },
    reactions: {
      likes: 230,
      comments: 45,
      shares: 12,
    },
  },
  {
    id: 'post3',
    user: {
      name: 'Olenna Mason',
      avatarUrl: currentUserData.avatarUrl, // Same as current user
      profileUrl: '#profile-olenna',
    },
    timestamp: '1 day ago',
    privacy: 'public' as const,
    content: 'Excited to share my new blog post about modern React development trends! Check it out. Link in bio. \n\n#react #webdev #frontend #typescript',
    reactions: {
      likes: 98,
      comments: 22,
      shares: 5,
    },
  },
];

const SocialDashboardPage: React.FC = () => {
  return (
    <>
      <MainAppLayout
        rightSidebarContent={
          <>
            <StoriesWidget />
            <SuggestedGroups />
            {/* ChatWidget is rendered outside MainAppLayout's right sidebar panel for its own fixed positioning */}
          </>
        }
      >
        {/* Main Content Area */}
        <NewPostInput user={currentUserData} />
        {feedPostsData.map((post) => (
          <FeedPost
            key={post.id}
            id={post.id}
            user={post.user}
            timestamp={post.timestamp}
            privacy={post.privacy}
            location={post.location}
            content={post.content}
            media={post.media}
            reactions={post.reactions}
            taggedFriends={post.taggedFriends}
          />
        ))}
      </MainAppLayout>
      <ChatWidget />
    </>
  );
};

export default SocialDashboardPage;
