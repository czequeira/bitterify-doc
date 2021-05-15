import { bind } from 'bitterify/lib';

interface MenuItem {
  content: string;
  href: string;
}

export const MenuItems: MenuItem[] = [
  { content: 'Home', href: '#' },
  { content: 'Docs', href: '#docs' },
  { content: 'About', href: '#about' },
];

export const menuVisible = bind(false, 'boolean');
