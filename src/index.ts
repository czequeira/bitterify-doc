import { app, h3 } from 'bitterify';

const Title = h3('Title').setClasses('text-3xl');

app([Title]).addLinks(['css/tailwindcss.css']);
