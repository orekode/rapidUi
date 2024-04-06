

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'
import { useItems } from '../apiCalls/read';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Select = ({ label, target, callback=()=>{}, initValue=null , error}) => {

    const [show, set_show] = useState(false);
    const [item, set_item] = useState(false);

    const { data } = useItems({target, isAuth: true});

    const handleSelect = (item) => {
        set_item(item);
        callback(item);
        set_show(!show);
    }

    useEffect(() => {
        if(initValue && data && data.data && data.data.map) {
            data.data.map( an_item => {
                //initValue[0] specify the attribute and initValue[1] specify the value
                if(an_item[initValue[0]] == initValue[1] && item !== an_item) handleSelect(an_item);
            });

            set_show(false);
        }
    }, [initValue])

    return (
        <div className="input flex flex-col gap-1 my-3">
            <label htmlFor="full_name" className='text-gray-400'>{label}</label>
            <div className="relative">
                <div onClick={() => set_show(!show)} type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-6 py-1.5 flex items-center text-lg rounded-3xl w-full z-30 h-[50px]">{item.name}</div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 cell-center z-20">
                    {show ?
                        <ChevronUp />
                        :
                        <ChevronDown />
                    }
                </div>
                <div className="relative">
                    <AnimatePresence>
                        {show &&
                            <motion.div className="absolute left-0 w-full border shadow-xl rounded-3xl border-neutral-300 dark:border-[#444] z-50  bg-gray-200 dark:bg-neutral-900 p-3 max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent dark:scrollbar-track-[#111] scrollbar-thumb-blue-700" style={{top: "12px"}}>
                                {(data && data.data && data.data.length > 0) && 
                                    <div className="mb-3">
                                        <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl w-full"/>
                                    </div>
                                }

                                {(data && data.data && data.data.map) && data.data.map((item) =>
                                    <div onClick={() => handleSelect(item)} key={item.id} tabIndex={item.id} className="hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 bg-gray-200 dark:bg-neutral-900  shadow transition-all duration-200 active:scale-90 rounded-3xl relative flex gap-3 items-center px-3 py-1.5">
                                        <div className="h-[50px] w-[50px]">
                                            <img src={item.image} alt="" className="object-contain h-full w-full" />
                                        </div>

                                        <div className="">{item.name}</div>
                                    </div>
                                )}

                                {(data && data.data && data.data.length <= 0) && 
                                    <div className='text-center p-1 w-full'>Oops, nothing here...</div>
                                }
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                    
            </div>
            <div className="error text-red-600 text-xs">
                {error}
            </div>
        </div>
    )
};

export const Password = ({ name, label, callback, value, error, ...props }) => {

    const [visible, set_visible] = useState(false);

    return (
        <div className="input flex flex-col gap-1 my-3">
            <label htmlFor={name} className='text-gray-400'>{label}</label>
            <div className="relative flex">
                <input onChange={(event) => callback(name, event.target.value )} value={value} type={visible ? "text" : "password"} name={name} className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl flex-grow" {...props}/>
                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                    <div onClick={() => set_visible(!visible)} className="h-[40px] w-[40px] flex items-center justify-center">
                        {visible ? 
                            <Eye size={18}/>
                        :
                            <EyeOff size={18}/>
                        }
                    </div>
                </div>
            </div>
            <div className="error text-red-600 text-xs">
                {error}
            </div>

        </div>
    );
};

export const Text = ({ name, label, callback, value, error, ...props }) => {

    return (
        <div className="input flex flex-col gap-1 my-3">
            <label htmlFor={name} className='text-gray-400'>{label}</label>
            <input onChange={(event) => callback(name, event.target.value )} value={value} type="text" name={name} className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl" {...props}/>
            <div className="error text-red-600 text-xs">
                {error}
            </div>
        </div>
    );
};

export const TextArea = ({ name, label, callback, value, error , ...props}) => {

    return (
        <div className="input flex flex-col gap-1 my-3">
            <label htmlFor={name} className='text-gray-400'>{label}</label>
            <textarea onChange={(event) => callback(name, event.target.value )} value={value} type="text" name={name} className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] p-4 text-lg rounded-3xl min-h-[200px]" {...props}/>
            <div className="error text-red-600 text-xs">
                {error}
            </div>
        </div>
    );
};

export const Editor = ({ name, label, callback, value, error, ...props }) => {

    const quillRef = useRef();

    const handleChange = () => {
        const editor = quillRef.current.getEditor();
        const contents = editor.getContents();
        callback(name, JSON.stringify(contents));
    };

    useEffect(() => {
        try {
            const editor = quillRef.current.getEditor();
            const contents = JSON.parse(value);
            editor.setContents(contents);
        } catch(error) {}
    }, [value]);

    return (
        <div className={`input flex flex-col gap-1 my-3 ${props?.readOnly ? 'readonly' : '' }`}>
            <label htmlFor={name} className='text-gray-400'>{label}</label>
            <ReactQuill ref={quillRef} onChange={handleChange} {...props}/>
            <div className="error text-red-600 text-xs">
                {error}
            </div>
        </div>
    );
};

