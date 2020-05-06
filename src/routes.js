import React from 'react';

const Search = React.lazy(() => import('./Screens/Search'));
const Detail = React.lazy(() => import('./Screens/Detail'));

const routes = [
  { path: '/', name: 'Home' },
  { path: '/search/:query', name: 'Search', component: Search },
  { path: '/detail/:id', name: 'Detail', component: Detail }
];

export default routes;