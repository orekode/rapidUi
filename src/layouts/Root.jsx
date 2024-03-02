import React, { useEffect, useState } from 'react';
import { Button, Card, Footer, Image, LeftRightBanner, PageScroller, Scroll } from '../components';
import { Categories, HomeHeader, Nav, Products, Reviews } from '../groups';
import { Outlet } from 'react-router-dom';
import { useMode } from '../store/general';

const Root = () => {

  const { mode } = useMode(state => state);

  useEffect(() => {
      if (mode === 'light') document.documentElement.classList.remove('dark')
      else document.documentElement.classList.add('dark')
  }, [mode]);

  return (
    <div className=''>
      
      <Outlet />

    </div>
  )
}

export default Root