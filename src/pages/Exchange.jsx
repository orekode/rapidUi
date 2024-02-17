

import { Plus, Search } from 'lucide-react'
import React from 'react'
import { PopularCircle } from '../groups/Categories'

const Exchange = () => {
  return (
    <div>
        <div className="spacing flex gap-6">
            <div className="flex-grow rounded-3xl shadow-xl overflow-hidden relative w-minus-250">
                {/* <img src="/images/exchange.avif" alt="" className="object-cover h-full w-full absolute top-0 left-0" /> */}
                <div className="relative p-12">
                  <div className="">
                    <h1 className="text-6xl font-semibold">Cool Cash Deals Just For You</h1>
                    <p className="py-6">Need devices at a cheaper price? or are you in need of some cool-cash deals for devices you no longer need? RapidCrew has got you covered, browse our amaizing deals and find the one that is right for you!</p>
                      <div className="search-box flex gap-3  top-0 left-0 w-full bg-white dark:bg-[#0e0e0e] z-50">
                        <div className="input border dark:border-[#444] w-full rounded-3xl ">
                            <input type="text" placeholder='Type your search here...' className='w-full h-full bg-transparent px-6 rounded-3xl' />
                        </div>

                        <div onClick={() => setShow(!show)} className="filter dark:border-[#444] bg-blue-600 hover:bg-red-600 active:scale-90 text-white w-[50px] h-[50px] rounded-full flex-center">
                            <Search />
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className="w-[250px] h-[250px] rounded-3xl shadow-xl active:shadow-none flex-center flex-col gap-3 text-center group hover:bg-blue-500 active:bg-blue-600 hover:text-white transition-all duration-200">
              <div className="h-[150px] w-[150px] rounded-full border-8 border-blue-500 group-hover:border-white text-blue-500 group-hover:text-white flex-center">
                <Plus size={80} />
              </div>
              <div className="font-bold text-lg capitalize leading-none px-6">Click to Sell your device now!</div>
            </div>
        </div>

        <div className="spacing">
          <PopularCircle />
        </div>
    </div>
  )
}

export default Exchange