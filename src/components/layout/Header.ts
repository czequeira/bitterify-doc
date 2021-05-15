import { a, button, div, header, nav } from 'bitterify';
import { MenuItems, menuVisible } from '../../store';
import { icon } from '../functions';

const Logo = div(['Bitterify']);

// TODO: Poner el menu item que ocupe todo el alto
const Nav = nav(
  MenuItems.map((i) =>
    a(i.content, i.href).setClasses('px-2 py-1 hover:bg-red-600'),
  ),
).setClasses('hidden md:block');

const MenuIcon = icon('M4 6h16M4 12h16M4 18h16');

const ShowNav = button(() => (menuVisible.value = !menuVisible.value), '')
  .setChildren([MenuIcon])
  .setClasses('md:hidden hover:bg-red-600 p-1 rounded-md');

export const Header = header([
  div([Logo, Nav, ShowNav]).setClasses(
    'flex justify-between md:container mx-auto px-4 py-3',
  ),
]).setClasses('bg-red-500 text-white');
