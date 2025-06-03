import React from 'react';
import TopHeader from '../Dashboard/TopHeader';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // The TopHeader component already handles its own styling and fixed positioning 
  // (h-[60px], fixed top-0, left-60, right-80, bg-card, z-10, etc.) as per Layout Requirements.
  // This Header component serves as a semantic wrapper and aligns with the AdminLayout composition.
  return (
    // The `header` tag is semantically appropriate. TopHeader itself is a `header` too.
    // We can use a div here to avoid nested headers if TopHeader is already <header>.
    // Checking TopHeader.tsx: it is indeed a `<header>`. So use a `div` or `React.Fragment`.
    // Using a div allows passing className.
    <div className={cn(className)}>
      <TopHeader />
    </div>
  );
};

export default Header;
