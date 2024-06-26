import { IconAdjustments, IconCalendarStats, IconFileAnalytics, IconGauge, IconLock, IconNotes, IconPresentationAnalytics } from "@tabler/icons-react";

interface MenuItem {
    label: string;
    icon: any; // Assuming icons are React components
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
  }

export const Menu:any = [
    { label: 'Dashboard', icon: IconGauge },
    {
      label: 'Orders',
      icon: IconNotes,
      initiallyOpened: true,
      links: [
        { label: 'In progress', link: '/' },
        { label: 'Delivered', link: '/' },
        { label: 'Outlook', link: '/' },
        { label: 'Real time', link: '/' },
      ],
    },
    {
      label: 'Releases',
      icon: IconCalendarStats,
      links: [
        { label: 'Upcoming releases', link: '/' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
      ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics },
    { label: 'Contracts', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
    {
      label: 'Security',
      icon: IconLock,
      links: [
        { label: 'Enable 2FA', link: '/' },
        { label: 'Change password', link: '/' },
        { label: 'Recovery codes', link: '/' },
      ],
    },
  ];