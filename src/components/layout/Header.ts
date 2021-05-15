import { a, button, div, header, nav } from 'bitterify';
import { MenuItems, menuVisible } from '../../store';
import { icon } from '../functions';

const Logo = div(['Bitterify']);

const Nav = nav(
  MenuItems.map((i) =>
    a(i.content, i.href).setClasses('pl-4 hover:text-gray-200'),
  ),
).setClasses('hidden md:block');

const MenuIcon = icon('M4 6h16M4 12h16M4 18h16');

const ShowNav = button(() => (menuVisible.value = !menuVisible.value), '')
  .setChildren([MenuIcon])
  .setClasses('md:hidden');

export const Header = header([
  div([Logo, Nav, ShowNav]).setClasses(
    'flex justify-between md:container mx-auto px-4 py-3',
  ),
]).setClasses('bg-red-500 text-white');
