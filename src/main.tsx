import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App.tsx';
import './assets/index.css';
import SearchView from './views/SearchView.tsx';
import DetailsView from './views/DetailsView.tsx';
import FavouritesView from './views/FavouritesView.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<SearchView />} />
      <Route path="/details" element={<DetailsView />} />
      <Route path="/favourites" element={<FavouritesView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
