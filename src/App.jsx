import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Root } from '@/layouts';
import General from './layouts/General';

import { 
  Exchange, Home, 
  Shop, Product, 
  ProductExchange, 
  Checkout, Categories, Login, 
  SignUp, Products, 
  NewProduct, ShopCategory, 
  NewCategory, EditCategory,
  EditProduct,
  NewBrand,
  EditBrand,
  Brands,
  NewSlide,
  EditSlide,
  Slides,
  Orders,
  Order
} from './pages';

import * as Customers from "./pages/customer";
import * as LapExchange from "./pages/exchange";

import Admin from './layouts/Admin';
import Customer from './layouts/Customer';
import { isAdmin, isCustomer } from './utils/auth';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

        <Route element={ <General />}>

          <Route index                      element={<Home            />}  />
          <Route path="shop"                element={<Shop            />}  />
          <Route path="shop/category/:id"   element={<ShopCategory    />}  />
          <Route path="exchange"            element={<Exchange        />}  />
          <Route path="product/:id"         element={<Product         />}  />
          <Route path="exchange/product/:id"element={<ProductExchange />}  />
          <Route path="checkout"            element={<Checkout        />}  />
          <Route path="login"               element={<Login           />}  />
          <Route path="signup"              element={<SignUp          />}  />

        </Route>

        <Route loader={isAdmin} path="admin"        element={<Admin /> }>
          <Route index             element={<Products   />} />
          <Route path="products"   element={<Products   />} />
          <Route path="categories" element={<Categories  />} />
          <Route path="brands"     element={<Brands  />} />
          <Route path="slides"     element={<Slides  />} />
          <Route path="orders"     element={<Orders  />} />
        </Route>

        <Route loader={isCustomer} path="customer"     element={<Customer />} >
          <Route index                       element={<Customers.Orders />} />
          <Route path="products"             element={<Customers.Products />} />
        </Route>

        <Route loader={isAdmin} path="admin">
          <Route path="product/new"             element={<NewProduct  />}  />
          <Route path="category/new"            element={<NewCategory />}  />
          <Route path="brand/new"               element={<NewBrand />}  />
          <Route path="slide/new"               element={<NewSlide />}  />
          <Route path="category/edit/:id"       element={<EditCategory />} />
          <Route path="product/edit/:id"        element={<EditProduct />} />
          <Route path="brand/edit/:id"          element={<EditBrand />} />
          <Route path="slide/edit/:id"          element={<EditSlide />} />
          <Route path="order/:id"               element={<Order />} />
        </Route>

        <Route loader={isCustomer} path="customer/order/:id"        element={<Customers.Order />} />
        <Route loader={isCustomer} path="exchange/new"              element={<LapExchange.NewProduct />} />
        <Route loader={isCustomer} path="exchange/edit/:id"         element={<LapExchange.EditProduct />} />

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
