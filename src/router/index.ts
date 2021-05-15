import { router } from 'bitterify/lib';
import { simple } from '../layout/simple';
import { About } from '../views/About';
import { Docs } from '../views/Docs';
import { Home } from '../views/Home';

export const Router = router([
  { path: 'about', layout: simple, view: () => About },
  { path: 'docs', layout: simple, view: () => Docs },
  { path: '*', layout: simple, view: () => Home },
]);
