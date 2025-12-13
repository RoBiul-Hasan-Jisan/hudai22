import React from 'react';
import { NavItem } from './types';
import { NAV_ITEMS } from './constants';

interface NavigationProps {
  location: any;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ location, scrollToSection }) => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map((item: NavItem) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.path)}
          className={`text-sm font-medium transition-colors hover:text-purple-600 ${
            location.hash === item.path ? 'text-purple-600' : 'text-gray-700'
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;