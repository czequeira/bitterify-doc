import { a, b, div, img, p, section } from 'bitterify/lib';

const HeroSection = section([
  div().setClasses(
    'w-full h-full top-0 left-0 absolute bg-gray-500 opacity-50',
  ),
  div([
    b('A frontend framework without tags').setClasses(
      'text-2xl sm:text-4xl md:text-6xl',
    ),
    p(['Bitterify propouse a way to develop web apps']).setClasses(
      'text-lg sm:text-xl md:text-2xl',
    ),
    div([
      a('Getting started', '#').setClasses(
        'w-full text-center px-4 py-2 m-1 rounded bg-red-500 hover:bg-red-600 shadow',
      ),
      a('Github', '#').setClasses(
        'w-full text-center px-4 py-2 m-1 rounded bg-gray-500 hover:bg-gray-600 shadow',
      ),
    ]).setClasses(
      'flex flex-col w-full p-2 sm:block text-center sm:text-lg md:text-2xl',
    ),
  ]).setClasses(
    'h-full w-full px-8 md:px-24 text-center flex flex-col absolute top-0 left-0 justify-center items-center',
  ),
  img('images/pexels-tom-cordner-1399097-min.jpg').setClasses(
    'md:container mx-auto ',
  ),
]).setClasses('w-full relative text-white');

export const Home = HeroSection;
