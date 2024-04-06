
import { useState } from 'react'
import { Button, Card, Inputs } from '../components'
import { useCart } from '../store/cart'
import { useAuth, useLoading } from '../store/general';
import Swal from 'sweetalert2';
import { Create } from '../apiCalls/create';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items, total_price, init_cart } = useCart();

  const { auth } = useAuth();

  const { name, email, phone_number } = auth;

  const [details, set_details] = useState({
    name,
    email,
    phone_number
  });
  console.log(details);
  const [errors, set_errors]   = useState({});

  const { showLoading, hideLoading } = useLoading();

  const navigate = useNavigate();

  const set_detail = (target, value) => {
    const clone_details = {...details};
    clone_details[target] = value;
    set_details({...clone_details});
  }

  const handleSubmit = async () => {
    showLoading();

      if(items.length <= 0) {
        
        Swal.fire({
          icon: 'warning',
          title: 'No Item In Cart',
          text: 'Please add some items to cart and try again'
        });

        hideLoading();

        return false;
      }

      const response = await Create(`orders`, {...details, products: items }, 'Order Made Successfully');

      Swal.fire({...response, icon: response?.status});

      if(response?.status == 'success') {
        init_cart();
        navigate(-1);
      }else
      set_errors(response?.errors)
      
    hideLoading();
  }

  return (
    <div>
        <div className="spacing min-h-screen">
            <div className="grid-500 gap-12">
              <div className="left">
                <div className="title font-bold text-3xl mb-6">Contact Information</div>
                <div className="form text-sm">

                  <Inputs.Text 
                    name="name" 
                    label="Full Name" 
                    callback={set_detail}
                    value={details?.name}
                    error={errors?.name} 
                    placeholder="e.g Tony Stark"
                  />

                  
                  <Inputs.Text 
                      name="phone_number" 
                      label="Phone Number" 
                      callback={set_detail}
                      value={details?.phone_number}
                      error={errors?.phone_number} 
                      placeholder="e.g 050xxxxxxx"
                  />

                  <Inputs.Text 
                      name="email" 
                      type="email"
                      label="Email" 
                      callback={set_detail}
                      value={details?.email}
                      error={errors?.email} 
                      placeholder="e.g david.divi@rapid.com"
                  />

                  <Inputs.Text 
                    name="address" 
                    type="address"
                    label="Address" 
                    callback={set_detail}
                    value={details?.address}
                    error={errors?.address} 
                    placeholder="e.g KNUST, Ghana"
                  />

                  <div className="input flex flex-col gap-1 mb-3">
                    <label htmlFor="payment_type" className='text-gray-400'>Payment Option</label>
                    <select name="payment_type" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl">
                      <option value="on_delivery" className="">Pay On Delivery</option>
                      <option value="online_pay" className="" disabled>Pay Online</option>
                    </select>
                  </div>

                  {/* <div className="address-box border border-neutral-300 dark:border-[#444] rounded-3xl h-[350px]">

                  </div> */}

                  <div className="my-3 mt-6">
                    <Button.Md onClick={handleSubmit} width='w-full' contentClass='w-full' hoverColor='bg-green-600'>Make Order</Button.Md>
                  </div>


                </div>
              </div>
              <div className="right">
                <div className="flex items-center">
                  <div className="title text-xl font-bold my-3 flex items-end gap-2">
                    <span className='text-2xl'>Total:</span> 
                    <span>
                      <span>Ghc</span>
                      <span className='text-5xl'>{total_price}</span>
                    </span>
                  </div>
                </div>
                <div className="product-preview border h-screen overflow-y-scroll border-neutral-300 dark:border-[#444] p-3 rounded-3xl scrollbar-thin scrollbar-track-transparent dark:scrollbar-track-[#111] scrollbar-thumb-blue-700">
                  {items.map((item, index) => 
                    <Card.CartItem key={index} item={item} />
                  )}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout