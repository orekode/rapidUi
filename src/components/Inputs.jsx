

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

export const Select = () => {

    const [show, set_show] = useState(false);

    console.log(show);

    return (
        <div>
            <div className="relative">
                <div onClick={() => set_show(!show)} disabled type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl w-full z-30 h-[50px]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 cell-center z-20">
                    <ChevronDown />
                </div>
                <div className="relative">
                    <AnimatePresence>
                        {show &&
                            <motion.div className="absolute left-0 w-full border shadow-xl rounded-3xl border-neutral-300 dark:border-[#444] z-10" style={{top: "12px"}}>
                                <div className="">
                                    <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl w-full"/>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                    
            </div>
        </div>
    )
}
