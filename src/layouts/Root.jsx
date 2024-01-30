import React, { useState } from 'react';
import { Button, Card, Footer, Image, LeftRightBanner, PageScroller, Scroll } from '../components';
import { Categories, HomeHeader, Nav, Products, Reviews } from '../groups';

const Root = () => {

  

  const title = 'Free Delivery For Orders On Campus.'.split('');

  return (
    <div className=''>
      
      <Nav />

      <div className="h-[70px] w-full"></div>

      <HomeHeader />

      <section className="spacing">

        <Categories.Popular />
        
      </section>

      <section className="spacing">
        <div className="text-center">
          <h1 className="text-4xl">Trending Products</h1>
          <p className="max-w-[400px] mx-auto text-sm my-3">
            We have made the ideal list of products for you to choose from,
            you want to see more? Visit the shop page to see all our products
          </p>
          <div className="mx-auto w-max">
            <Button.Md>Shop Page</Button.Md>
          </div>
          
        </div>

        <Products.Trending />
      </section>

      <section className="spacing">
        <LeftRightBanner title={title} />
      </section>

      <Reviews />

      <Footer />

      <PageScroller />

    </div>
  )
}

export default Root