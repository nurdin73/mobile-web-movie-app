import React from 'react';

const Search = React.lazy(() => import('./Screens/Search'));


const routes = [
  { path: '/', name: 'Home' },
  { path: '/search/:query', name: 'Search', component: Search },
];

export default routes;