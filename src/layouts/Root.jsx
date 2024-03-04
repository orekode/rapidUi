import React, { useEffect, useState } from 'react';
import { Button, Card, Footer, Image, LeftRightBanner, Loading, PageScroller, Scroll } from '../components';
import { Categories, HomeHeader, Nav, Products, Reviews } from '../groups';
import { Outlet } from 'react-router-dom';
import { useLoading, useMode } from '../store/general';
import { SkeletonTheme } from 'react-loading-skeleton';

const Root = () => {

  const { mode } = useMode(state => state);
  const { show } = useLoading();

  useEffect(() => {
      if (mode === 'light') document.documentElement.classList.remove('dark')
      else document.documentElement.classList.add('dark')
  }, [mode]);

  return (
    <div className=''>

    <SkeletonTheme baseColor={ mode == "dark" ? "#202020" : ""} highlightColor={ mode == "dark" ? "#444" : ""}>
      
      <Outlet />

      {show && 
        <Loading />
      }
    </SkeletonTheme>

    </div>
  )
}

export default Root