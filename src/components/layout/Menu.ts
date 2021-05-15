import { a, section } from 'bitterify';
import { MenuItems, menuVisible } from '../../store';

export const Menu = section(
  MenuItems.map((i) =>
    a(i.content, i.href).setClasses('py-2 hover:bg-red-500'),
  ),
).setClasses(
  'hidden flex-col text-white text-center w-full top-16 bg-red-600 p-0 md:hidden',
);

menuVisible.subscribeCallback('menu', (bind) => {
  if (bind.value) {
    Menu.removeClasses('hidden');
    Menu.addClasses('flex');
  } else {
    Menu.addClasses('hidden');
    Menu.removeClasses('flex');
  }
});
