import { a, app, button, div, header, nav } from 'bitterify';
import { createComponent } from 'bitterify/lib/core';

const Logo = div(['Bitterify']);

interface MenuItem {
  content: string;
  href: string;
}
const MenuItems: MenuItem[] = [
  { content: 'Home', href: '#' },
  { content: 'Docs', href: '#' },
  { content: 'About', href: '#' },
];

const Menu = div(
  MenuItems.map((i) =>
    a(i.content, i.href).setClasses('py-2 hover:bg-red-500'),
  ),
).setClasses(
  'flex flex-col text-white text-center w-full top-16 bg-red-600 p-0',
);

const Nav = nav(MenuItems.map((i) => a(i.content, i.href)));
const Svg = createComponent('svg');
const SvgHtmlElement = Svg.getHtmlElement();

if (SvgHtmlElement instanceof HTMLElement) {
  SvgHtmlElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>`;
}

const ShowNav = button(() => console.log('click'), '').setChildren([Svg]);

const Header = header([Logo, Nav, ShowNav]).setClasses(
  'flex justify-between bg-red-500 text-white px-4 py-3',
);

app([Header, Menu]).addLinks(['css/tailwindcss.css']);
