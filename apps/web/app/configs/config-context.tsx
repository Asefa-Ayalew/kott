import React from 'react';

interface MenuItem {
  label: string;
  icon: React.ComponentType<any>;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export const ConfigContext = React.createContext<MenuItem[] | null>(null);
