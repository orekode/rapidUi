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
import { Create } from '../apiCalls/create';
import Swal from 'sweetalert2';

const ProductExchange = () => {

  const { id } = useParams();

  console.log(decrypt(id), `data/exchange_products/${decrypt(id)}`);

  const [ active_image, set_active_image ] = useState('');

  const [ orderModal, setOrderModal ] = useState(false)

  const navigate = useNavigate();

  const { showLoading, hideLoading } = useLoading();

  const { data, isLoading, isError } = useItem({target: `data/exchange_products/${decrypt(id)}`});

  const [toggle, setToggle] = useState(false);

  const { toggle_item, product_ids, add_item } = useCart();

  const [details, set_details] = useState();
  const [errors, set_errors]   = useState({});

  const handleSubmit = async () => {
    showLoading();

      const response = await Create(`order_exchange_product/${decrypt(id)}`, {
        ...details,
        // "_method": "PATCH"
      }, "Order Made Successfull", true);

      Swal.fire({...response, icon: response?.status});

      if(response?.status == 'success') navigate(-1);
      set_errors(response?.errors)
    hideLoading();
}

  const set_detail = (target, value) => {
      const clone_details = {...details};
      clone_details[target] = value;
      set_details({...clone_details});
  }

  useEffect(() => {
    set_active_image(data?.image);
  }, [data]);

  console.log(data);

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
            </div>
            <div className="right ">
              <div className="name text-3xl font-bold">{data?.name}</div>
              <div className="flex items-start gap-0.5 mt-3 ">
                <span className="text-sm">GHC</span>
                <div className="price text-5xl font-thin opacity-80 my-3">{data?.price}</div>
              </div>
              <div className='short my-3 min-h-[200px]'>
                {data?.short_description}
              </div>

              <div className="flex gap-3 my-6 max-[650px]:flex-col">
                
                <div className='block flex-grow'>
                  <Button.Md onClick={() => setOrderModal(true)} width='w-full' contentClass='flex items-center justify-center w-full gap-1'>
                    <span className='whitespace-nowrap'>Buy Now</span>
                    <ShoppingBasket />
                  </Button.Md>
                </div>

              </div>
            </div>
          </div>

          {orderModal &&
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 z-40 flex items-center justify-center">
              <div className="bg-white dark:bg-[#0e0e0e] max-w-[500px] w-full h-max rounded-lg shadow p-9 py-6 z-40">
                <h1 className="text-center font-bold text-xl">Please Provide The Following Details</h1>
                <Inputs.Text 
                  name="name" 
                  label="Full Name" 
                  callback={set_detail}
                  value={details?.name}
                  error={errors?.name} 
                  placeholder="e.g David Shalom"
                />
                <Inputs.Text 
                  name="number" 
                  label="Phone Number" 
                  callback={set_detail}
                  value={details?.number}
                  error={errors?.number} 
                  placeholder="e.g 0508809987"
                />
                <Inputs.Text 
                  name="email" 
                  label="Email" 
                  callback={set_detail}
                  value={details?.email}
                  error={errors?.email} 
                  placeholder="e.g rapidcrewtech@gmail.com"
                />

                <Button.Sm onClick={handleSubmit} width='w-full' contentClass='flex items-center justify-center w-full gap-1'>
                  <span className='whitespace-nowrap'>Order Now</span>
                  <ShoppingBasket />
                </Button.Sm>
              </div>

              <div onClick={() => setOrderModal(false)} className="absolute top-0 left-0 h-full w-full z-30"></div>
            </div>
          }

        </>
      }      

    </div>
  )
}

export default ProductExchange