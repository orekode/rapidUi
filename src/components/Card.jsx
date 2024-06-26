
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Star, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../store/cart";
import { encrypt } from "../utils/encryption";

export const Product = ({ item }) => {
    const { toggle_item, product_ids } = useCart();
    return (
        <div className="relative group">
          <div className="w-full h-[300px] max-[550px]:h-[220px] max-[360px]:h-[170px] overflow-hidden relative border dark:border-[#262626] dark:bg-[#111] rounded-3xl  hover:shadow-sm shadow-slate-200 dark:shadow-black">
            <div className="h-full w-full p-12 max-[600px]:p-6">
              <img src={item.image} className="object-contain"/>
            </div>
  
            <div className="transition-all duration-300 absolute -bottom-52 group-hover:bottom-2 left-0 w-full px-2 flex items-center gap-2 z-10">
              
              <Link to={`/product/${encrypt(item.id)}`} className="flex-grow">
                <motion.div whileTap={{ scale: 0.85 }} className="bg-blue-600 text-white text-sm max-[360px]:text-xs px-3 py-1.5 rounded-3xl text-center">
                  Buy Now
                </motion.div>
              </Link>
  
              <motion.div onClick={(event) => toggle_item(event, item)} whileTap={{ scale: 0.85 }} className={` ${ product_ids.includes(`{${item.id}}`) ? 'bg-orange-500 text-white' : 'dark:bg-[#222]' } transition-all duration-300 flex-center border dark:border-none  hover:bg-red-500 hover:text-white rounded-full h-[35px] w-[35px]`}>
                <ShoppingBag size={20}/>
              </motion.div>
              
            </div>
          </div>
  
          <div className="details py-1.5">
            <div className="name max-[550px]:text-sm max-[360px]:text-xs hover:text-blue-300 active:text-yellow-200 underline">{item.name}</div>
            <div className="flex gap-1 py-1 text-yellowy">
  
              {Array.from({length: 5}, (_, index) => 
                <Star fill="#ffa436" key={index} size={15}/>
              )}
  
            </div>
  
            <div className="max-[550px]:text-sm max-[360px]:text-xs top-2 left-2 absolute bg-white dark:bg-[#222] group-hover:bg-blue-60 shadow px-3 py-1.5 rounded-full">
              Ghc {item.price}
            </div>
  
          </div>
        </div>
    );
}

export const CartItem = ({ item }) => {
    const { toggle_item, increase, decrease } = useCart();

    return (
      <div className="cart-item rounded-xl p-3 border dark:border-[#333] flex gap-3 mb-6 max-[480px]:rounded-none max-[480px]:border-x-0 max-[480px]:mb-1.5">
          {/* Product image */}
          <div className="image border max-[480px]:border-none dark:border-[#333] rounded-xl overflow-hidden w-[200px]  p-3 max-[480px]:p-0">
              <img src={item?.image} alt="" className="object-contain rounded-xl overflow-hidden " />
          </div>

          <div className="p-1.5 max-[480px]:px-0">
              <div className="name text-2xl max-[1000px]:text-base  max-[1200px]:text-xl max-[830px]:text-xl max-[480px]:text-base">This is the name of the product </div>

              {/* Unit Price */}
              <div className=" my-3 mb-1.5 flex items-end gap-3 opacity-70 max-[1000px]:text-xs max-[480px]:text-xs max-[830px]:text-base">
                  <span>Unit Price: </span>
                  <span className="text-xl  max-[1200px]:text-base max-[1000px]:text-sm">
                      <span className="text-xs">Ghc</span>
                      <span>{item?.price}</span>
                  </span>
              </div>

              {/* Sub - total */}
              <div className=" my-3 mt-1.5 flex items-end gap-3 opacity-90 max-[1000px]:text-xs max-[480px]:text-xs max-[830px]:text-base">
                  <span>Sub  Total: </span>
                  <span className="text-xl max-[1200px]:text-base max-[1000px]:text-sm">
                      <span className="text-xs">Ghc</span>
                      <span>{item?.quantity * item?.price}</span>
                  </span>
              </div>

              {/* Quantity and remove */}

              <div className="flex items-end justify-between mt-6 max-[950px]:hidden max-[830px]:flex max-[480px]:hidden">
                  <div className="flex gap-1">
                      <div onClick={() => increase(item)} className="border dark:border-[#333] h-[50px] w-[50px] max-[1200px]:w-[35px] max-[1200px]:h-[35px] rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200">
                          <Plus />
                      </div>
                      <div className="box min-w-[50px] max-[1200px]:min-w-[35px] flex items-center justify-center text-2xl">{item?.quantity}</div>
                      <div onClick={() => decrease(item)} className="border dark:border-[#333] h-[50px] w-[50px] max-[1200px]:w-[35px] max-[1200px]:h-[35px] rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200">
                          <Minus />
                      </div>
                  </div>

                  <div onClick={(event) => toggle_item(event, item)}  className="flex items-center justify-center gap-1.5 px-3 py-1.5 border dark:border-[#333] rounded-xl hover:bg-red-500 hover:text-white transition-all duration-200">
                      <div className="flex items-center justify-center">
                          <Trash size={20}/>
                      </div>
                      <span>Remove</span>
                  </div>
              </div>

              <div className="flex items-end justify-between mt-6 min-[950px]:hidden max-[830px]:hidden max-[480px]:flex">
                  <div className="flex gap-1">
                      <div className="border dark:border-[#333] h-[30px] w-[30px] rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200">
                          <Plus size={15} />
                      </div>
                      <div className="box min-w-[20px] flex items-center justify-center text-lg">1</div>

                      <div className="border dark:border-[#333] h-[30px] w-[30px] rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200">
                          <Minus size={15}/>
                      </div>
                  </div>

                  <div onClick={(event) => toggle_item(event, item)} className="flex items-center justify-center gap-1.5 px-3 py-1.5 border dark:border-[#333] rounded-xl hover:bg-red-500 hover:text-white transition-all duration-200 text-xs">
                      <div className="flex items-center justify-center">
                          <Trash size={15}/>
                      </div>
                      <span>Remove</span>
                  </div>
              </div>
          </div>
      </div>
  )
}

export const Mason = ({ item }) => {

  return (
    <Link to={`/exchange/product/${encrypt(item.id)}` }>
      <div className="product-item  mb-3 hover:scale-105 active:scale-95 transition-all duration-200">
        <div className="image p-12 border dark:border-[#333] shadow rounded-3xl">
          <img src={item.image} alt="" className="w-full" />
        </div>

        <div className="details my-3">
          <div className="price font-black text-lg text-blue-600">
            <span>Ghc</span>
            <span>{item.price}</span>
          </div>
          <div className="name">{item.name}</div>
          <p className="description text-xs text-gray-500 mt-1">
            {item.short_description.slice(0, 100)}...
          </p>
          <div className="usage p-0.5 px-1 mt-1.5 rounded bg-gray-100 dark:bg-[#444] shadow w-max text-xs ">{item.status}</div>
        </div>
      </div>
    </Link>
  );
}