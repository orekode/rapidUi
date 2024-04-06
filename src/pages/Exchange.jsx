

import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { PopularCircle } from '../components/Categories'
import '@appnest/masonry-layout'
import { Card, Errors, Pagination, Search } from '../components'
import { Link } from 'react-router-dom'
import { useItems } from '../apiCalls/read'

const Exchange = () => {
  const [ page, set_page ] = useState(1);
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItems({
      target: 'data/exchange_products',
      params: { page, filters }
  });

  return (
    <div>
        <div className="spacing flex gap-6">
            <div className="flex-grow rounded-3xl shadow-xl overflow-hidden relative w-minus-250">
                {/* <img src="/images/exchange.avif" alt="" className="object-cover h-full w-full absolute top-0 left-0" /> */}
                <div className="relative p-12">
                  <div className="">
                    <h1 className="text-6xl font-semibold">Cool Cash Deals Just For You</h1>
                    <p className="py-6">Need devices at a cheaper price? or are you in need of some cool-cash deals for devices you no longer need? RapidCrew has got you covered, browse our amaizing deals and find the one that is right for you!</p>
                    <Search.Simple callback={set_filters} />
                  </div>
                </div>
            </div>
            <Link to="/exchange/new" className="w-[250px] h-[250px] rounded-3xl shadow-xl active:shadow-none flex-center flex-col gap-3 text-center group hover:bg-blue-500 active:bg-blue-600 hover:text-white transition-all duration-200">
              <div className="h-[150px] w-[150px] rounded-full border-8 border-blue-500 group-hover:border-white text-blue-500 group-hover:text-white flex-center">
                <Plus size={80} />
              </div>
              <div className="font-bold text-lg capitalize leading-none px-6">Click to Sell your device now!</div>
            </Link>
        </div>

        {/* <div className="spacing">
          <PopularCircle />
        </div> */}


        <div className="spacing">
          <masonry-layout maxcolwidth="300">
            {(data && data.data && data.data.map) && data.data.map((item, index) =>
              <Card.Mason item={item} />
            )}

            {isLoading && Array.from({length: 10}, (_, index) => 
              <Errors.MdCard key={index} />
            )}
          </masonry-layout>

          {(!isLoading && !isError) &&
            <Errors.Empty data={data?.data} title="No Products Available" content={'Click the "Add New" button to create products'} />
          }

          {isError && <Errors.Network />}

          <Pagination meta={data?.meta} setPage={set_page} />

        </div>
    </div>
  )
}

export default Exchange