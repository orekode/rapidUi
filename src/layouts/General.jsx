import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../groups'
import { Footer, PageScroller } from '../components'
import Cart from '../groups/Cart'
import { ShoppingBasket } from 'lucide-react'

const General = () => {
  return (
    <div className=''>
      
      <Nav />

      <div className="h-[70px] w-full"></div>

      <Outlet />

      <Footer />

      <Cart />

      <PageScroller />

      <div id="cart-icon-animate" className="fixed top-1/2 left-1/2 z-[-10]" style={{opacity: 0}}>
        <div className="h-[30px] w-[30px] rounded-full border bg-orange-500 shadow flex items-center justify-center">
          <ShoppingBasket size={20}/>
        </div>
      </div>

    </div>
  )
}

export default General