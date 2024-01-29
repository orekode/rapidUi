import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Root } from '@/layouts';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

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
