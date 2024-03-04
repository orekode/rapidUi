

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useItems } from '../apiCalls/read';

export const Select = ({ target, callback=()=>{}, initValue=null }) => {

    const [show, set_show] = useState(false);
    const [item, set_item] = useState(false);

    const { data } = useItems({target});

    const handleSelect = (item) => {
        set_item(item);
        callback(item);
        set_show(!show);
    }

    useEffect(() => {
        if(initValue && data && data.data && data.data.map) {
            data.data.map( item => {
                //initValue[0] specify the attribute and initValue[1] specify the value
                if(item[initValue[0]] == initValue[1]) handleSelect(item);
            });

            set_show(false);
        }
    }, [])

    return (
        <div>
            <div className="relative">
                <div onClick={() => set_show(!show)} disabled type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-6 py-1.5 flex items-center text-lg rounded-3xl w-full z-30 h-[50px]">{item.name}</div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 cell-center z-20">
                    <ChevronDown />
                </div>
                <div className="relative">
                    <AnimatePresence>
                        {show &&
                            <motion.div className="absolute left-0 w-full border shadow-xl rounded-3xl border-neutral-300 dark:border-[#444] z-50  bg-gray-200 dark:bg-neutral-900 p-3 max-h-[400px] overflow-y-scroll" style={{top: "12px"}}>
                                <div className="mb-3">
                                    <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl w-full"/>
                                </div>

                                {(data && data.data && data.data.map) && data.data.map((item) =>
                                    <div onClick={() => handleSelect(item)} key={item.id} tabIndex={item.id} className="hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 bg-gray-200 dark:bg-neutral-900  shadow transition-all duration-200 active:scale-90 rounded-3xl relative flex gap-3 items-center px-3 py-1.5">
                                        <div className="h-[50px] w-[50px]">
                                            <img src={item.image} alt="" className="object-contain h-full w-full" />
                                        </div>

                                        <div className="">{item.name}</div>
                                    </div>
                                )}
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                    
            </div>
        </div>
    )
}
