
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

export const Product = () => {
    return (
      <div className="relative group">
          <div className="w-full h-[300px] max-[550px]:h-[220px] max-[360px]:h-[170px] overflow-hidden relative border border-[#262626] bg-[#111] rounded-3xl">
            <div className="h-full w-full">
              <img src='/images/laptop.png' className="object-contain"/>
            </div>
  
            <div className="transition-all duration-300 absolute -bottom-52 group-hover:bottom-2 left-0 w-full px-2 flex items-center gap-2 z-10">
              
              <motion.div whileTap={{ scale: 0.85 }} className="bg-blue-600 text-white text-sm max-[360px]:text-xs px-3 py-1.5 rounded-3xl flex-grow text-center">
                Buy Now
              </motion.div>
  
              <motion.div whileTap={{ scale: 0.85 }} className="flex-center bg-[#222] hover:bg-red-500 rounded-full h-[35px] w-[35px]">
                <ShoppingBag size={20}/>
              </motion.div>
              
            </div>
          </div>
  
          <div className="details py-1.5">
            <div className="name max-[550px]:text-sm max-[360px]:text-xs hover:text-blue-300 active:text-yellow-200 underline">ThinkVision 23.8 inch Monitor - T24i-30</div>
            <div className="flex gap-1 py-1 text-yellowy">
  
              {Array.from({length: 5}, (_, index) => 
                <Star fill="#ffa436" key={index} size={15}/>
              )}
  
            </div>
  
            <div className="max-[550px]:text-sm max-[360px]:text-xs top-2 left-2 absolute bg-white dark:bg-[#222] group-hover:bg-blue-60 shadow px-3 py-1.5 rounded-full">
              Ghc 3450
            </div>
  
          </div>
      </div>
    );
  }