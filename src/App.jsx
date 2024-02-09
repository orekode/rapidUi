import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Root } from '@/layouts';
import General from './layouts/General';
import { Home } from './pages';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={ <General />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
