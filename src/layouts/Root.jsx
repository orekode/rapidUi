import React from 'react';
import { Image } from '../components';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const Root = () => {

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
  return (
    <div>
      <nav className='fixed top-0 left-0 w-full'>
        <div className="flex-between px-24 h-[70px] bg-neutral-950">
          <div className="logo">
            <div className="h-[50px] w-[50px] rounded-full bg-white"></div>
          </div>

          <div className="flex items-center gap-3">
            {nav.map( item => 
              <Link to={item.link} key={item.name} className="border border-gray-800 text-gray-300 px-3 py-0.5 rounded-3xl shadow">{item.name}</Link>
            )}
            <div className="">
              <ShoppingBag />
            </div>
          </div>
        </div>
      </nav>
      
      <div className="h-[70px] w-full"></div>

      <section className=" grid grid-cols-12 max-[965px]:grid-cols-6 spacing py-12">
        <div className="col-span-6 flex items-center">
          <div className="max-[965px]:max-w-[500px] max-[965px]:text-center max-[965px]:mx-auto">
            <h1 className=" h capitalize font-light text-6xl max-[1345px]:text-5xl  max-[560px]:text-4xl max-[425px]:text-3xl">
              Your one stop <span className="text-blue-300">shop for affordable devices</span>
            </h1>
            <p className='max-w-[400px]  max-[965px]:mx-auto py-3'>Browse our collection of products, find the best fit for you, make an order and enjoy the rapid experience</p>

            <div className="group relative bg-blue-500  text-white px-6 py-3 rounded-3xl w-max  max-[965px]:mx-auto overflow-hidden active:scale-90 transition-all duration-150">
              <button className="relative z-10 outline-none s">
                Shop Now
              </button>
              <div className="absolute z-0 top-0 left-0 h-full w-0 group-hover:w-full bg-red-500 transition-all duration-300"></div>
            </div>

          </div>
        </div>

        <div className="col-span-6 max-[965px]:row-start-1  max-[965px]:mb-6">
          <Image.Background src="/images/g7.png" className="object-contain">
            <div className="min-h-[80vh]  max-[560px]:min-h-[60vh]">
              
            </div>
          </Image.Background>
        </div>
      </section>

      <section className="relative spacing">

        <div className="flex-center h-[40px] w-[40px] rounded-full backdrop-blur-3xl bg-black bg-opacity-50 top-1/2 left-3 -translate-y-1/2 absolute z-10">
          <ChevronLeft />
        </div>

        <div className="flex-center h-[40px] w-[40px] rounded-full backdrop-blur-3xl bg-black bg-opacity-50 top-1/2 right-3 -translate-y-1/2 absolute z-10">
          <ChevronRight />
        </div>

        <div className="w-full overflow-x-scroll scrollbar-track-transparent scrollbar-none bg-opacity-10 relative z-0">
          <div className="w-max flex gap-8">
            {Array.from({length: 10}).map( item => 
              <div className="w-[180px] h-[220px] relative group active:scale-90 transition-all duration-300">
                <div className="image w-full h-[80%] relative top-0 hover:-top-3 transition-all duration-300 z-10 scale-90">
                  <img src="/images/laptop.png" className="object-contain" />
                </div>
                <div className="details flex items-end justify-center text-center absolute bottom-[15%] left-0 z-0 w-full h-[40%] border border-[#161616] bg-[#111] group-hover:bg-blue-600 rounded-3xl p-3">
                  <span className="">Laptops</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-6">
            <div className="card w-full h-[400px] rounded-md  relative">
              <h1 className="text-4xl p-12">Free Delivery For Orders On Campus</h1>
              <img src="/images/delivery.png" class="object-contain absolute top-10 left-10" />
            </div>
          </div>
          <div className="col-span-4 p-6">
            <div className="card w-full h-[400px] rounded-md  relative">
              <div className="h-1/2">
                <img src="/images/g10.png" class="object-contain top-10 left-10" />
              </div>
              <h1 className="text-4xl p-12">Free Delivery For Orders On Campus</h1>
            </div>
          </div>
          <div className="col-span-4 p-6">
            <div className="card w-full h-[400px] rounded-md bg-blue-600"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Root