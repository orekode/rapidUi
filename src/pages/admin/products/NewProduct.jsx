import React, { useRef, useState } from 'react'
import { Button, Inputs, Uploads } from '../../../components'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const NewProduct = () => {

    const [details, set_details] = useState({});
    const [errors, set_errors]   = useState({});
    const [images, set_images]   = useState([0]);

    const set_detail = (target, value) => {
        const clone_details = {...details};
        clone_details[target] = value;
        set_details({...clone_details});
    }



    return (
        <div>
            <div className="spacing">
                <div className="flex items-center">
                    <Link to={-1}>
                        <Button.Sm baseColor='bg-black'>Back</Button.Sm>
                    </Link>
                </div>

                <div className="flex items-center justify-between">
                    <div className="font-bold text-3xl my-6 mb-4">New Product</div>

                    <Button.Md>Save Product</Button.Md>
                </div>


                <div className="grid-500 py-3">
                    <form className="left">

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="product_name" className='text-gray-400'>Product Name</label>
                            <input onChange={(event) => set_detail("name", event.target.value )} type="text" name="product_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                        </div>

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="short_description" className='text-gray-400'>Short Description</label>
                            <textarea onChange={(event) => set_detail("short_description", event.target.value )} type="text" name="short_description" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] p-4 text-lg rounded-3xl min-h-[200px]"></textarea>
                        </div>

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Categories</label>
                            <Inputs.Select></Inputs.Select>
                        </div>

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Brands</label>
                            <Inputs.Select></Inputs.Select>
                        </div>

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Long Description</label>
                            <ReactQuill />
                        </div>

                    </form>
                    <div className="right px-12">

                        <div className="input flex flex-col gap-2 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Product Visiblity</label>
                            <div className="input flex items-center gap-6 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <input onChange={(event) => set_detail("visibility", event.target.value )} type="radio" name="visiblilty" value={'published'} />
                                    <label htmlFor="visibility">Published</label>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <input onChange={(event) => set_detail("visibility", event.target.value )} type="radio" name="visiblilty" value={'scheduled'} />
                                    <label htmlFor="visibility">Scheduled</label>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <input onChange={(event) => set_detail("visibility", event.target.value )} type="radio" name="visiblilty" value={'draft'} />
                                    <label htmlFor="visibility">Draft</label>
                                </div>
                            </div>
                        </div>

                        {details.visibility == "scheduled" && 
                            <div className="input flex flex-col gap-1 mb-4">
                                <label htmlFor="sheduled_date" className='text-gray-400'>Schedule Date</label>
                                <input onChange={(event) => set_detail("visibility", event.target.value )} type="datetime-local" name="sheduled_date" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                            </div>
                        }

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Product Image</label>
                            <div className="grid-250 fill mt-3 gap-3">
                                {images.map((_, index) =>
                                    <Uploads.ImageVideo key={index} closeCallback={() => {}}/>
                                )}
                            </div> 
                        </div>

                        <div className="mt-3 flex items-center justify-end">
                            <Button.Sm onClick={() => set_images([...images, images.length])}>Add More Image</Button.Sm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct