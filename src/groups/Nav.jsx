import { Link } from 'react-router-dom';
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { Button } from '../components';
import { useCart, useMode } from '../store/general';
import { useEffect, useState } from 'react';


const Nav = () => {

    const nav = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Shop',
            link: '/'
        },
        {
            name: 'Lap Exchange',
            link: '/'
        },
    ];

    const { mode, toggle } = useMode(state => state);
    const cart = useCart(state => state);

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (mode === 'light') document.documentElement.classList.remove('dark')
        else document.documentElement.classList.add('dark')
    }, [mode]);


    return (
        <>
            <nav className='fixed top-0 left-0 w-full z-50 scale-90'>
                <div className="flex-between px-24 max-[900px]:px-6 h-[70px] bg-gray-100 dark:bg-neutral-950 rounded-full">
                    <div className="logo">
                        <div className="h-[50px] w-[50px] rounded-full dark:bg-white bg-black"></div>
                    </div>

                    <div className="flex items-center gap-3 max-[700px]:hidden">
                        {nav.map(item =>
                            <Link to={item.link} key={item.name} className="transition-all duration-300 dark:text-gray-300 px-1.5 py-0.5 rounded-3xl hover:shadow">{item.name}</Link>
                        )}

                        <div onClick={() => {cart.toggle(); console.log('clicked')}}  className="mx-3">
                            <ShoppingBag />
                        </div>

                        <div className="flex gap-3">
                            <Button.Sm>Log In</Button.Sm>
                            <Button.Sm baseColor='bg-red-500' hoverColor='bg-blue-500'>Sign Up</Button.Sm>

                            <div onClick={toggle} className="h-[35px] w-[35px] rounded-full bg-gray-200 dark:bg-black border border-gray-500 dark:border-yellow-400 dark:text-yellow-300  flex-center scale-75">
                                {mode == 'light' ?
                                    <Moon />
                                    :
                                    <Sun />
                                }
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setShowMenu(!showMenu)} className="min-[700px]:hidden flex-center border p-1.5 rounded-full">
                        <Menu />
                    </div>
                </div>
            </nav>

            <div className={`flex flex-col gap-3 fixed top-0 ${showMenu ? 'right-0' : '-right-[100vw]'} transition-all duration-300 z-50 bg-white w-[300px] h-screen`}>
                <div onClick={() => setShowMenu(!showMenu)} className="p-4 pb-0 flex justify-end">
                    <X />
                </div>
                {nav.map(item =>
                    <Link to={item.link} key={item.name} className="transition-all duration-300 dark:text-gray-300 px-9 py-3 hover:shadow border-y text-2xl">{item.name}</Link>
                )}

                <div onClick={() => cart.toggle()} className=" flex items-center gap-3 border-y py-3 px-9 text-2xl">
                    Cart
                    <ShoppingBag />
                </div>

                <div className="btns mx-6 flex flex-col gap-3 py-6">
                    <Button.Sm width="w-full text-center">Log In</Button.Sm>
                    <Button.Sm width="w-full text-center" baseColor='bg-red-500' hoverColor='bg-blue-500'>Sign Up</Button.Sm>
                </div>
            </div>

            <div onClick={toggle} className="min-[700px]:hidden z-50 h-[35px] w-[35px] rounded-full bg-gray-200 dark:bg-black border border-gray-500 dark:border-yellow-400 dark:text-yellow-300  flex-center fixed bottom-5 right-10">
                {mode == 'light' ?
                    <Moon />
                    :
                    <Sun />
                }
            </div>
        </>
    )
}

export default Nav