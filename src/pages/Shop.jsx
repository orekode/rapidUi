import React from 'react'
import { Md, Sm } from '../components/Button'
import { Side } from '../components/Scroll'
import { Products } from '../groups'

const Shop = () => {
  return (
    <div>
        <div className="flex items-center gap-3 spacing">
            <div className="slide-item w-[900px] h-[420px] max-[550px]:h-max bg-blue-500 text-white rounded-3xl grid grid-cols-12 p-12 max-[1000px]:p-9 max-[420px]:text-center max-[420px]:p-6">
              <div className="col-span-7 flex items-center max-[420px]:col-span-12">
                <div className="">
                  <div className="title text-4xl max-[1000px]:text-3xl max-[550px]:text-xl">The title of the slide is going to be here</div>
                  <p className="content max-[1000px]:text-sm max-[550px]:text-xs my-4">This is where the content of the slide is going to be placed, it would elaborate more on the slide title</p>
                  <div className="w-max max-[420px]:mx-auto">
                    <Md >The call to action</Md>
                  </div>
                </div>
              </div>
              <div className="col-span-5 max-[420px]:col-span-12">
                <img src="/images/laptop.png" alt="" className="object-contain h-full w-full" />
              </div>
            </div>
            <div className="max-[890px]:hidden">
              <div className="slide-item w-[350px] h-[200px] bg-red-500 text-white rounded-3xl grid grid-cols-12 p-4 mb-3">
                <div className="col-span-7 flex items-center">
                  <div className="">
                    <div className="title text-base">The title of the slide is going to be here</div>
                    <p className="content my-2 text-xs">This is where the content of the slide is going to be placed</p>
                    <Sm>The call to action</Sm>
                  </div>
                </div>
                <div className="col-span-5">
                  <img src="/images/laptop.png" alt="" className="object-contain h-full w-full" />
                </div>
              </div>

              <div className="slide-item w-[350px] h-[200px] bg-orange-500 text-white rounded-3xl grid grid-cols-12 p-4">
                <div className="col-span-7 flex items-center">
                  <div className="">
                    <div className="title text-base">The title of the slide is going to be here</div>
                    <p className="content my-2 text-xs">This is where the content of the slide is going to be placed</p>
                    <Sm>The call to action</Sm>
                  </div>
                </div>
                <div className="col-span-5">
                  <img src="/images/laptop.png" alt="" className="object-contain h-full w-full" />
                </div>
              </div>
            </div>
        </div>

        <div className="shorts-container spacing">
          <Side gap="8 max-[600px]:gap-3">
            {Array.from({length: 10}, (_, index) => 
              <div className="short h-[250px] w-[170px] max-[600px]:w-[120px] max-[600px]:h-[200px] overflow-hidden shadow bg-gray-200 rounded-xl">
                <img src="/images/video.jpg" alt="" className="object-cover h-full w-full" />
              </div>
            )}
          </Side>
        </div>

        <div className="spacing">
          <Products.Trending />
        </div>


    </div>
  )
}

export default Shop