

import React from 'react'

const LeftRightBanner = ({ title }) => {
  return (
    <div className="rounded-3xl bg-blue-900 relative z-10" style={{backgroundColor: "#613b73"}}>
        <div className="grid grid-cols-12 max-[700px]:grid-cols-7 ">
            <div className="col-span-7 flex items-center relative">
                <div className="">
                    <h1 className="text-8xl max-[1050px]:text-6xl max-[400px]:text-5xl font-bold text-transparent blue-image-text scale-90">
                        {title.split("").map( (item, index) => 
                            <span key={index} className="text-animate" style={{"--i": index}}>{item}</span>
                        )}
                    </h1>
                </div>
            </div>
            <div className="col-span-5">
                <img src="/images/devices2.avif" className='object-cover rounded-tr-3xl rounded-br-3xl' />
            </div>
        </div>
    </div>
  )
}

export default LeftRightBanner