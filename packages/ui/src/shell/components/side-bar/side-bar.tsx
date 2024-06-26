import React from 'react';
import { Group, Code, ScrollArea, rem } from '@mantine/core';
import Link from 'next/link'
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from '../user-button/user-button';
import { Logo } from './logo';
import classes from './side-bar.module.css';
import { LinksGroup } from '../nav-bar-link/nav-bar-links-group';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link:'/dashboard' },
  {
    label: 'Orders',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'In Progress', link: '/orders/in-progress' },
      { label: 'Dispatched', link: '/orders/dispatched' },
      { label: 'Delivered', link: '/orders/delivered' },
      { label: 'Fulfilled', link: '/orders/fulfilled' },
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

export function SideBar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}