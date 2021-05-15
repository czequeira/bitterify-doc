import { a, bind, div } from 'bitterify';

interface MenuItem {
  content: string;
  href: string;
}

export const MenuItems: MenuItem[] = [
  { content: 'Home', href: '#' },
  { content: 'Docs', href: '#docs' },
  { content: 'About', href: '#about' },
];

export const Menu = div(
  MenuItems.map((i) =>
    a(i.content, i.href).setClasses('py-2 hover:bg-red-500'),
  ),
).setClasses(
  'hidden flex-col text-white text-center w-full top-16 bg-red-600 p-0 md:hidden',
);

export const menuVisible = bind(false, 'boolean');
menuVisible.subscribeCallback('menu', (bind) => {
  if (bind.value) {
    Menu.removeClasses('hidden');
    Menu.addClasses('flex');
  } else {
    Menu.addClasses('hidden');
    Menu.removeClasses('flex');
  }
});
