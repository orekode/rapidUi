import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Root } from '@/layouts';
import General from './layouts/General';

import { 
  Exchange, Home, 
  Shop, Product, 
  ProductExchange, 
  Checkout, Login, 
  SignUp, Products, 
  NewProduct, Categories, 
  NewCategory, EditCategory,
  EditProduct,
  NewBrand,
  EditBrand,
  Brands,
  NewSlide,
  EditSlide,
  Slides
} from './pages';

import Admin from './layouts/Admin';
import NewCategories from './pages/admin/categories/NewCategory';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

        <Route element={ <General />}>

          <Route index                      element={<Home            />}  />
          <Route path="shop"                element={<Shop            />}  />
          <Route path="exchange"            element={<Exchange        />}  />
          <Route path="product/:id"             element={<Product         />}  />
          <Route path="exchange/product"    element={<ProductExchange />}  />
          <Route path="checkout"            element={<Checkout        />}  />
          <Route path="login"               element={<Login           />}  />
          <Route path="signup"              element={<SignUp          />}  />

        </Route>

        <Route path="admin"        element={<Admin /> }>
          <Route index             element={<Products   />} />
          <Route path="products"   element={<Products   />} />
          <Route path="categories" element={<Categories  />} />
          <Route path="brands"     element={<Brands  />} />
          <Route path="slides"     element={<Slides  />} />
        </Route>

        <Route path="admin/product/new"             element={<NewProduct  />}  />
        <Route path="admin/category/new"            element={<NewCategory />}  />
        <Route path="admin/brand/new"               element={<NewBrand />}  />
        <Route path="admin/slide/new"               element={<NewSlide />}  />
        <Route path="admin/category/edit/:id"       element={<EditCategory />} />
        <Route path="admin/product/edit/:id"        element={<EditProduct />} />
        <Route path="admin/brand/edit/:id"          element={<EditBrand />} />
        <Route path="admin/slide/edit/:id"          element={<EditSlide />} />

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
