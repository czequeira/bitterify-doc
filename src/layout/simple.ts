import { div } from 'bitterify/lib';
import { Child } from 'bitterify/lib/core/types';
import { Header } from '../components/layout/Header';
import { Menu } from '../components/layout/Menu';

export function simple(view: Child): Child {
  return div([Header, Menu, view]);
}
