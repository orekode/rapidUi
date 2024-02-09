import React, { useState } from 'react';
import { Button, Card, Footer, Image, LeftRightBanner, PageScroller, Scroll } from '../components';
import { Categories, HomeHeader, Nav, Products, Reviews } from '../groups';
import { Outlet } from 'react-router-dom';

const Root = () => {

  

  const title = 'Free Delivery For Orders On Campus.'.split('');

  return (
    <div className=''>
      
      <Outlet />

    </div>
  )
}

export default Root