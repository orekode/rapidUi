


import {} from 'react'
import { Scroll } from '.'
import { useItems } from '../apiCalls/read';

export const Popular = () => {
  const { data, isLoading, isError } = useItems({
    target: 'categories',
    // params: { page, filters }
  });

  return (
    <Scroll.Side>
        {(data && data.data && data.data.map) && data.data.map((item, index) =>
          <div key={index} className="w-[180px] h-[220px] relative group active:scale-90 transition-all duration-300">
            <div className="image w-full h-[80%] relative top-0 group-hover:-top-3 transition-all duration-300 z-10 scale-90">
              <img src={item.image} className="object-contain" />
            </div>
            <div className="details flex items-end justify-center text-center absolute bottom-[22%] left-0 z-0 w-full h-[40%] border border-gray-200 dark:border-[#161616] bg-gray-100 dark:bg-[#111] group-hover:dark:bg-blue-600 group-hover:bg-blue-400 rounded-3xl p-3">
              <span className="">{item.name}</span>
            </div>
          </div>
        )}
    </Scroll.Side>
  )
}

export const PopularCircle = () => {
  const { data, isLoading, isError } = useItems({
    target: 'categories',
    // params: { page, filters }
  });

  return (
    <Scroll.Side>
        {(data && data.data && data.data.map) && data.data.map((item, index) =>
        <div key={index} className="text-center">
            <div className="h-[100px] w-[100px] p-3 rounded-full overflow-hidden border dark:border-[#444]">
                <img src={item.image}className="object-contain" />
            </div>
            <div className="">
                <span className="">{item.name}</span>
            </div>
        </div>
        )}
    </Scroll.Side>
  )
}