import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../groups'
import { Footer, PageScroller } from '../components'
import Cart from '../groups/Cart'

const General = () => {
  return (
    <div className=''>
      
      <Nav />

      <div className="h-[70px] w-full"></div>

      <Outlet />

      <Footer />

      <Cart />

      <PageScroller />

    </div>
  )
}

export default General