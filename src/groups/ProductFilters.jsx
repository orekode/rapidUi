
import { ChevronRight, ListFilter, X } from 'lucide-react'
import { Products } from '.'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

const ProductFilters = ({ initShow, initSearch = '' }) => {

    const [visible, setVisible] = initShow;
    const [show, setShow] = useState(true);
    const [search, setSearch] = useState(initSearch);
    const body = document.querySelector('body');

    const inputRef = useRef();

    useEffect(() => {
        if(initSearch.replaceAll(' ', '').length > 0) {
            setSearch(initSearch);
            setTimeout(() => {
                inputRef.current.focus();
            }, 300)
        }
    }, [initSearch]);

    if(!visible) {
        body.style.overflowY = 'scroll'
        return <></>;
    }
    body.style.overflow = 'hidden';
    
    console.log(search, initSearch);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='fixed top-0 right-0 w-screen h-screen z-[50]'>
            <div className="h-full w-full backdrop-blur-xl flex justify-end relative ">
                <div className="flex-grow h-full relative">
                    <div className="h-full p-6 overflow-y-scroll bg-white dark:bg-[#0e0e0e] bg-opacity-80">
                        <div className="search-box flex gap-3 absolute top-0 left-0 w-full p-4 bg-white dark:bg-[#0e0e0e] z-50">
                            <div className="input border dark:border-[#444] w-full rounded-3xl ">
                                <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Type your search here...' className='w-full h-full bg-transparent px-6 rounded-3xl' />
                            </div>

                            <div onClick={() => setShow(!show)} className="filter dark:border-[#444] bg-blue-600 hover:bg-red-600 active:scale-90 text-white w-[50px] h-[50px] rounded-full flex-center">
                                <ListFilter />
                            </div>

                            <div onClick={() => setVisible(!visible)} className="filter border-2 border-red-600 active:scale-90 text-red-600 w-[50px] h-[50px] rounded-full flex-center">
                                <X />
                            </div>
                        </div>

                        <div className="p-3 relative z-0 max-[400px]:px-0 ">
                            <Products.Trending />
                        </div>

                    </div>
                </div>

                {show &&
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="w-[400px] h-full bg-white dark:bg-[#0e0e0e] overflow-y-scroll max-[900px]:absolute top-0 right-0 z-50">
                        <div className="top flex items-center justify-between p-4">
                            <div className="font-bold">Filters</div>

                            <div onClick={() => setShow(!show)} onCick={() => setVisible(!visible)} className="text-red-600 border-red-600 border-2 px-3 py-1 rounded-3xl flex items-center  top-3 left-3 z-50 min-[900px]:hidden">
                                <span className="">hide</span>
                                <ChevronRight />
                            </div>
                        </div>

                        <div className="p-4">

                            <div className="scale-95 flex items-center gap-3">
                                <div className="flex flex-col mb-1.5 w-full">
                                    <label className='opacity-50' htmlFor="min-price">Price Ranking</label>
                            
                                    <select name="price-rank" className='dark:bg-[#111] border dark:border-[#333] p-1.5 px-4 my-1.5 rounded-3xl'>
                                        <option value="low-high-price">Low price -- High price</option>
                                        <option value="high-low-price">High price -- Low price</option>
                                    </select>
                                </div>
                            </div>

                            <div className="scale-95 flex items-center gap-3">
                                <div className="flex flex-col mb-1.5d w-1/2">
                                    <label className='opacity-50' htmlFor="min-price">Minimum Price</label>
                                    <input type="number" name="min-price" className='dark:bg-[#111] border dark:border-[#333] p-1.5 px-4 my-1.5 rounded-3xl' />
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <label className='opacity-50' htmlFor="max-price">Maximum Price</label>
                                    <input type="number" name="max-price" className='dark:bg-[#111] border dark:border-[#333] p-1.5 px-4 my-1.5 rounded-3xl' />
                                </div>
                            </div>

                            <div className="scale-95">
                                <div className="flex flex-col mb-1.5">
                                    <label className='opacity-50' htmlFor="min-price">Brands</label>
                                    <input type="text" name="min-price" placeholder="Type here to search for a brand" className='dark:bg-[#111] border dark:border-[#333] p-1.5 px-4 my-1.5 rounded-3xl' />
                                </div>

                                <div className="border dark:border-[#333] rounded-3xl p-3">
                                    {Array.from({length: 5}, (_, index) => 
                                        <div key={index} className="flex p-1.5 gap-1.5">
                                            <input type="checkbox" name="" id="" />
                                            <span>Name of the brand here</span>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className="scale-95">
                                <div className="flex flex-col mb-1.5">
                                    <label className='opacity-50' htmlFor="min-price">Categories</label>
                                    <input type="text" name="min-price" placeholder="Type here to search for a category" className='dark:bg-[#111] border dark:border-[#333] p-1.5 px-4 my-1.5 rounded-3xl' />
                                </div>

                                <div className="border dark:border-[#333] rounded-3xl p-3">
                                    {Array.from({length: 5}, (_, index) => 
                                        <div key={index} className="flex p-1.5 gap-1.5">
                                            <input type="checkbox" name="" id="" />
                                            <span>Name of the category here</span>
                                        </div>
                                    )}
                                </div>

                            </div>

                        </div>
                    </motion.div>
                }




            </div>
        </motion.div>
    );
}

export default ProductFilters