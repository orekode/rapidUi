import React, { useEffect, useState } from 'react'
import { Button, Scroll } from '../components';
import { ShoppingBag, ShoppingBasket } from 'lucide-react';
import { Products } from '../groups';

const Product = () => {

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
      
      <div className="display-box grid grid-500 max-[650px]:block gap-12 spacing">
        <div className="left">
          <div className="border rounded-md h-[500px] p-12">
            <img src={product.image} alt="" className="object-contain h-full w-full" />
          </div>
          <div className="images py-6">
            <Scroll.Side>
              {Array.from({length: 4}, (_, index) => 
                <div className="border h-[150px] w-[150px] rounded-lg p-6">
                  <img src={product.image} alt="" className="object-contain h-full w-full" />
                </div>
              )}
            </Scroll.Side>
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

            <ul className='list-disc px-12 py-3 max-[650px]:px-3'>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
              <li className='mb-1.5'>item one is here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto  </li>
            </ul>
          </div>

          <div className="flex gap-3 my-6 max-[650px]:flex-col">

            <Button.Md width='w-full' contentClass='flex items-center justify-center w-full gap-1'>
              <span className='whitespace-nowrap'>Buy Now</span>
              <ShoppingBasket />
            </Button.Md>

            <button className="text-center p-3 px-6 rounded-3xl border hover:bg-black hover:text-white active:scale-90 transition-all duration-200 flex items-center justify-center gap-1">
              <span className='whitespace-nowrap'>Add To Cart</span>
              <ShoppingBag />
            </button>

          </div>
        </div>
      </div>

      <div className="spacing">

        <div className="top-nav flex gap-1.5">
          <div onClick={() => setToggle(!toggle)} className={`item p-3 rounded-md border shadow ${!toggle ? 'bg-blue-500 text-white' : ''} hover:bg-blue-600 hover:text-white active:scale-90 transition-all duration-200`}>Related Products</div>
          <div onClick={() => setToggle(!toggle)} className={`item p-3 rounded-md border shadow ${toggle  ? 'bg-blue-500 text-white' : ''} hover:bg-blue-600 hover:text-white active:scale-90 transition-all duration-200`}>Full Description</div>
        </div>

        <div className="min-h-screen">
          {toggle ? 
              <div className="description my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis in quos quis officia, placeat, debitis incidunt magnam vitae illo fugiat. Porro quibusdam quasi consequatur provident, consectetur hic a deleniti error doloremque neque, quos eligendi ipsam maxime accusantium nemo assumenda quo temporibus voluptas! Optio deserunt iste perferendis architecto voluptas sint ut aliquid natus itaque! Autem nulla deserunt repudiandae molestiae ipsam possimus consectetur rem quod? Maiores repudiandae minus ea a error hic quasi quae? Dicta iusto explicabo similique dolorum, placeat sit tempore reiciendis est mollitia, quisquam obcaecati rerum? Cumque incidunt alias veniam quasi, esse expedita ad nemo, reiciendis distinctio voluptas eligendi molestiae vero! Nesciunt sint, aspernatur velit pariatur necessitatibus odit hic labore, quos aliquid, ullam corporis alias nihil quis quae placeat laudantium autem sunt? Voluptates fugiat quos consectetur quam reiciendis at odio voluptatum aut ipsum minima delectus ut ea, fuga accusantium veniam dolorum rem cupiditate eaque architecto quod accusamus ratione. Ipsam, voluptates excepturi, libero nostrum aliquam illum voluptatibus, laudantium repudiandae magni id cum! Commodi deserunt id, at iusto eum accusamus laudantium eos labore, nemo ut, reprehenderit obcaecati! Reprehenderit fugiat veritatis omnis explicabo vitae odit quod officia reiciendis nihil at eligendi voluptatibus sequi placeat sed adipisci, repellendus voluptatum est repudiandae magnam rerum. Architecto porro qui vel, necessitatibus amet animi nobis optio eaque dignissimos molestias officia nemo dolorem minima deserunt hic, ex, tempora facilis a doloremque autem. Recusandae quibusdam aliquam illo dicta beatae minima quas! Cum quod veritatis sit possimus quidem molestiae adipisci aperiam magnam iure nostrum at explicabo sint doloribus cumque velit, illum nisi quam similique illo corrupti libero ab. Quaerat sed perspiciatis voluptatum id dignissimos aliquid doloribus dolorem fugiat corrupti nemo illum, consequatur mollitia quasi non, ratione sint hic et culpa odit blanditiis nobis impedit vel provident saepe. Dolorum repellat corrupti, consequatur minima dolorem est distinctio tempora id impedit. Eius, ea.
              </div>
            :
              <Products.Trending />
          }
        </div>

      </div>

    </div>
  )
}

export default Product