import { a, button, div, header, nav } from 'bitterify';
import { createComponent } from 'bitterify/lib/core';
import { MenuItems, menuVisible } from './Menu';

const Logo = div(['Bitterify']);

const Nav = nav(
  MenuItems.map((i) =>
    a(i.content, i.href).setClasses('pl-4 hover:text-gray-200'),
  ),
).setClasses('hidden md:block');

const Svg = createComponent('svg');
const SvgHtmlElement = Svg.getHtmlElement();
if (SvgHtmlElement instanceof HTMLElement) {
  SvgHtmlElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>`;
}

const ShowNav = button(() => (menuVisible.value = !menuVisible.value), '')
  .setChildren([Svg])
  .setClasses('md:hidden');

export const Header = header([
  div([Logo, Nav, ShowNav]).setClasses(
    'flex justify-between md:container mx-auto px-4 py-3',
  ),
]).setClasses('bg-red-500 text-white');
