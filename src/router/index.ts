import { router } from 'bitterify/lib';
import { simple } from '../layout';
import { About, Docs, Home } from '../views';

export const Router = router([
  { path: 'about', layout: simple, view: () => About },
  { path: 'docs', layout: simple, view: () => Docs },
  { path: '*', layout: simple, view: () => Home },
]);
