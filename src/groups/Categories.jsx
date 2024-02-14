


import {} from 'react'
import { Scroll } from '../components'

export const Popular = () => {
  return (
    <Scroll.Side>
        {Array.from({length: 10}).map( (item, index) => 
        <div key={index} className="w-[180px] h-[220px] relative group active:scale-90 transition-all duration-300">
            <div className="image w-full h-[80%] relative top-0 group-hover:-top-3 transition-all duration-300 z-10 scale-90">
                <img src="/images/laptop.png" className="object-contain" />
            </div>
            <div className="details flex items-end justify-center text-center absolute bottom-[15%] left-0 z-0 w-full h-[40%] border border-gray-200 dark:border-[#161616] bg-gray-100 dark:bg-[#111] group-hover:dark:bg-blue-600 group-hover:bg-blue-400 rounded-3xl p-3">
                <span className="">Laptops</span>
            </div>
        </div>
        )}
    </Scroll.Side>
  )
}

export const PopularCircle = () => {
  return (
    <Scroll.Side>
        {Array.from({length: 10}).map( (item, index) => 
        <div key={index} className="text-center">
            <div className="h-[100px] w-[100px] p-3 rounded-full overflow-hidden border dark:border-[#444]">
                <img src="/images/laptop.png" className="object-contain" />
            </div>
            <div className="">
                <span className="">Laptops</span>
            </div>
        </div>
        )}
    </Scroll.Side>
  )
}