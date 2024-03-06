import { Home, Laptop, Menu, Moon, Network, ShoppingBasket, Sun, Target } from 'lucide-react';
import React, { useState } from 'react'
import { useMode } from '../store/general';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {

  const nav_items = [
    {
      icon: <Laptop />,
      title: 'Products',
      link: '/admin'
    },
    {
      icon: <Network />,
      title: 'Categories',
      link: '/admin/categories'
    },
    {
      icon: <ShoppingBasket />,
      title: 'Orders',
      link: '/admin/'
    },
    {
      icon: <Target />,
      title: 'Brands',
      link: '/admin'
    },
    
  ];

  const { mode, toggle } = useMode(state => state);

  const [menu, set_menu] = useState(false);

  return (
    <div className='bg-gray-200 dark:bg-[#0e0e0e] dark:text-white bg-opacity-70'>
      <div className={`admin ${ menu && "active" } flex shadow dark:shadow-black`}>
        <div className={`admin-left overflow-hidden transition-all duration-200 bg-white dark:bg-[#111] shadow h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent dark:scrollbar-track-[#111] scrollbar-thumb-blue-700`}>

          <div className="font-bold text-xl p-6">
            RapidCrew
          </div>

          <div className="links">
            {nav_items.map( item => 
              <Link to={item.link} key={item.title} className="link-item flex items-center border-y dark:border-neutral-700 px-2 py-4 hover:bg-blue-500 hover:text-white transition-all duration-200">
                <div className="px-3">
                  {item.icon}
                </div>
                <span className='px-3 whitespace-nowrap'>{item.title}</span>
              </Link>
            )}

              <div onClick={toggle} className="link-item flex items-center border-y dark:border-neutral-700 px-2 py-4 hover:bg-blue-500 hover:text-white transition-all duration-200">
                <div className="px-3">
                  {mode == 'light' ?
                    <Moon />
                    :
                    <Sun />
                  }
                </div>
                <span className='px-3 whitespace-nowrap'>
                  {mode == 'light' ? 
                    "Dark Mode"
                    :
                    "Light Mode"
                  }
                </span>
              </div>
          </div>

        </div>
        <div className="admin-right transition-all duration-200 overflow-hidden h-screen ">

          <div className="p-6 pb-3">
            <nav className='admin-nav bg-white dark:bg-[#111] shadow px-6 py-2 flex items-center justify-between rounded-3xl'>
              <div onClick={() => set_menu(!menu)} className="menu-btn">
                <Menu size={40} strokeWidth={0.7}/>
              </div>

              <div className="flex items-center gap-3">
                <div className="">Admin</div>
                <div className="h-[50px] w-[50px] rounded-full border shadow"></div>
              </div>
            </nav>
          </div>

          <div className="admin-content p-9 py-3 pb-24 scrollbar-thin scrollbar-track-transparent dark:scrollbar-track-[#111] scrollbar-thumb-blue-700">
              <Outlet />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Admin;