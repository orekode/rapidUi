import React, { useEffect, useState } from 'react'
import { Button, Errors, Inputs, Scroll } from '../components';
import { ShoppingBag, ShoppingBasket } from 'lucide-react';
import { Products } from '../groups';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLoading } from '../store/general';
import { useItem } from '../apiCalls/read';
import Skeleton from 'react-loading-skeleton';
import { decrypt } from '../utils/encryption';
import { useCart } from '../store/cart';

const Product = () => {

  const { id } = useParams();

  const [ active_image, set_active_image ] = useState('');

  const navigate = useNavigate();

  const { showLoading, hideLoading } = useLoading();

  const { data, isLoading, isError } = useItem({target: `products/${decrypt(id)}`});

  const [toggle, setToggle] = useState(false);

  const { toggle_item, product_ids } = useCart();

  useEffect(() => {
    set_active_image(data?.image);
  }, [data]);

  return (
    <div>

      {isLoading &&
        <div className="display-box grid grid-500 max-[650px]:block gap-12 spacing">
          <div className="left">
            <div className="border dark:border-[#262626] rounded-md h-[500px] p-12">
              <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
            </div>
            <div className="images py-6">
              <Scroll.Side>
                {Array.from({length: 4}, (_, index) => 
                  <div className="border dark:border-[#262626] h-[150px] w-[150px] rounded-lg p-6">
                    <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
                  </div>
                )}
              </Scroll.Side>
            </div>
          </div>
          <div className="right ">
            <div className="name text-3xl font-bold h-[100px]">
              <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
            </div>
            <div className="flex items-start gap-0.5 mt-3 h-[60px] w-[150px] ">
              <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
            </div>
            <div className='my-3'>
              <p className="h-[170px]">
                <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
              </p>

              
            </div>

            <div className="flex gap-3 my-6 h-[50px] max-[650px]:flex-col">
              <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
              <Skeleton containerClassName='w-[200px] h-full block' className='block h-full w-full'/>
            </div>
          </div>
        </div> 
      }

      {isError && <Errors.Network />}

      {!(isLoading || isError) && 
        <>
          <div className="display-box grid grid-500 max-[650px]:block gap-12 spacing">
            <div className="left">
              <div className="border dark:border-[#262626] rounded-md h-[500px] p-12">
                <img src={active_image} alt="" className="object-contain h-full w-full" />
              </div>
              <div className="images py-6">
                <Scroll.Side>
                  {data?.images?.map((item, index) => 
                    <div onClick={() => set_active_image(item?.image)} key={index} className="border dark:border-[#262626] h-[150px] w-[150px] rounded-lg p-6">
                      <img src={item?.image} alt="" className="object-contain h-full w-full" />
                    </div>
                  )}
                </Scroll.Side>
              </div>
            </div>
            <div className="right ">
              <div className="name text-3xl font-bold">{data?.name}</div>
              <div className="flex items-start gap-0.5 mt-3 ">
                <span className="text-sm">GHC</span>
                <div className="price text-5xl font-thin opacity-80 my-3">{data?.price}</div>
              </div>
              <div className='short mb-3'>
                <Inputs.Editor 
                    name="short_description" 
                    label=""
                    value={data?.short_description}
                    readOnly={true}
                    theme="snow"
                />
              </div>

              <div className="flex gap-3 my-6 max-[650px]:flex-col">
                
                <Link className='block flex-grow' to="/checkout">
                  <Button.Md width='w-full' contentClass='flex items-center justify-center w-full gap-1'>
                    <span className='whitespace-nowrap'>Buy Now</span>
                    <ShoppingBasket />
                  </Button.Md>
                </Link>

                <button onClick={(event) => toggle_item(event, data)} className={`text-center p-3 px-6 rounded-3xl border dark:border-[#262626] ${ product_ids.includes(`{${data.id}}`) ? 'bg-orange-500 text-white' : 'dark:bg-[#222] hover:bg-black' }  hover:text-white active:scale-90 transition-all duration-200 flex items-center justify-center gap-1`}>
                  <span className='whitespace-nowrap'>Add To Cart</span>
                  <ShoppingBag />
                </button>

              </div>
            </div>
          </div>

          <div className="spacing">

            <div className="top-nav flex gap-1.5">
              <div onClick={() => setToggle(!toggle)} className={`item p-3 rounded-md border dark:border-[#262626] shadow ${!toggle ? 'bg-blue-500 text-white' : ''} hover:bg-blue-600 hover:text-white active:scale-90 transition-all duration-200`}>Related Products</div>
              <div onClick={() => setToggle(!toggle)} className={`item p-3 rounded-md border dark:border-[#262626] shadow ${toggle  ? 'bg-blue-500 text-white' : ''} hover:bg-blue-600 hover:text-white active:scale-90 transition-all duration-200`}>Full Description</div>
            </div>

            <div className="min-h-screen">
              {toggle ? 
                  <Inputs.Editor 
                    name="long_description" 
                    label=""
                    value={data?.long_description}
                    readOnly={true}
                    theme="snow"
                  />
                :
                  <Products.Trending />
              }
            </div>

          </div>
        </>
      }      

    </div>
  )
}

export default Product