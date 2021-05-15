import { div } from 'bitterify/lib';
import { Child } from 'bitterify/lib/core/types';
import { Header, Menu } from '../components/layout';

export function simple(view: Child): Child {
  return div([Header, Menu, view]);
}
