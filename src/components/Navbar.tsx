// src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../utils/mockData';
import { NavigationItem } from '../types';
import { FluentIcon } from '@fluentui/react-icons';

// Update the types definition to match
export interface NavigationItemWithIcon extends NavigationItem {
  icon: FluentIcon;
}

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const renderNavItem = (item: NavigationItemWithIcon) => {
    // Use the icon component directly from the item
    const IconComponent = item.icon;

    return (
      <Link 
        key={item.path}
        to={item.path}
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-full 
          transition-all duration-300 ease-in-out
          ${isActive(item.path) 
            ? 'bg-white/20 text-white scale-105 shadow-lg' 
            : 'text-white/70 hover:text-white hover:bg-white/10'}
        `}
      >
        <IconComponent />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md">
      <div className="container mx-auto flex justify-center space-x-6 py-4">
        {navItems.map(renderNavItem)}
      </div>
    </nav>
  );
};

export default Navbar;