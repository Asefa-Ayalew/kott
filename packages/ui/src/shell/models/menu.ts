 export interface MenuItem {
  label: string;
  icon: React.ComponentType<any>; // Assuming the icons are React components
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

interface ShellProps {
  Menu: MenuItem[];
}
