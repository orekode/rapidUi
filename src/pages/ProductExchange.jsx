
import React, { useEffect, useState } from 'react'
import { Button } from '../components';
import { ShoppingBag, ShoppingBasket } from 'lucide-react';
import { Products } from '../groups';

const ProductExchange = () => {

  const [product, setProduct] = useState({});

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products/1').
                              then( result => result.json()).
                              then(result => setProduct(result));
  }, []);

  console.log(product);

  return (
    <div>
      
      <div className="display-box grid grid-500 gap-12 spacing">
        <div className="left">
          <div className="border rounded-md h-[500px] p-12">
            <img src={product.image} alt="" className="object-contain h-full w-full" />
          </div>
          <div className="images flex items-center justify-center gap-6 py-6">
            {Array.from({length: 4}, (_, index) => 
              <div className="border h-[150px] w-[150px] rounded-lg p-6">
                <img src={product.image} alt="" className="object-contain h-full w-full" />
              </div>
            )}
          </div>
        </div>
        <div className="right ">
          <div className="name text-3xl font-bold">{product.title}</div>
          <div className="flex items-start gap-0.5 mt-3 ">
            <span className="text-sm">GHC</span>
            <div className="price text-5xl font-thin opacity-80 my-3">{product.price}</div>
          </div>
          <div className='mb-3'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vitae ex nostrum, quo, reiciendis eligendi fuga ad, iste natus enim aut cupiditate! Esse excepturi accusamus amet repudiandae blanditiis, velit corporis?
            </p>

            <ul className='list-disc px-12 py-3'>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
            </ul>
          </div>

          <div className="flex gap-3 my-6">

            <Button.Md width='w-full' contentClass='flex items-center justify-center w-full gap-1'>
              <span className='whitespace-nowrap'>Buy Now</span>
              <ShoppingBasket />
            </Button.Md>

          </div>
        </div>
      </div>

      

    </div>
  )
}

export default ProductExchange