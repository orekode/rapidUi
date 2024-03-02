
import React from 'react'
import { Button, Card } from '../components'

const Checkout = () => {
  return (
    <div>
        <div className="spacing min-h-screen">
            <div className="grid-500 gap-12">
              <div className="left">
                <div className="title font-bold text-3xl mb-6">Contact Information</div>
                <div className="form">

                  <div className="input flex flex-col gap-1 mb-4">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                  </div>

                  <div className="input flex flex-col gap-1 mb-4">
                    <label htmlFor="full_name">Phone Number</label>
                    <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                  </div>

                  <div className="input flex flex-col gap-1 mb-4">
                    <label htmlFor="full_name">Email</label>
                    <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                  </div>

                  <div className="input flex flex-col gap-1 mb-4">
                    <label htmlFor="full_name">Address</label>
                    <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                  </div>

                  <div className="address-box border border-neutral-300 dark:border-[#444] rounded-3xl h-[350px]">

                  </div>

                  <div className="my-3">
                    <Button.Md width='w-full' contentClass='w-full' hoverColor='bg-green-500'>Make Payment</Button.Md>
                  </div>


                </div>
              </div>
              <div className="right">
                <div className="flex items-center">
                  <div className="title text-xl font-bold my-3 flex items-end gap-2">
                    <span className='text-2xl'>Total:</span> 
                    <span>
                      <span>Ghc</span>
                      <span className='text-5xl'>345002</span>
                    </span>
                  </div>
                </div>
                <div className="product-preview border h-screen overflow-y-scroll border-neutral-300 dark:border-[#444] p-3 rounded-3xl">
                  {Array.from({length: 10}, (_, index) => 
                    <Card.CartItem />
                  )}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout