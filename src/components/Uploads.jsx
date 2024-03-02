import { Image as ImageIcon, X } from 'lucide-react'
import { useRef, useState } from 'react';
import { getResourceType } from '../utils/files';

export const Image = ({ closeCallback=null, ...props}) => {

    const inputRef = useRef();

    const [image, set_image] = useState(null);
    const [show, set_show]   = useState(true);

    const uploadImage = (event) => {
        const image = URL.createObjectURL(event.target.files[0]);
        set_image(image);
    }

    if(show)
    return (
        <div  className="h-[300px] cell-center border border-neutral-300 dark:border-[#444] p-3 rounded-3xl relative">
            <div onClick={() => inputRef.current.click()} className="">
                <div className="absolute top-0 left-0 h-full w-full p-3">
                    {image && <img src={image} className='object-cover w-full h-full' />}
                </div>
                <ImageIcon size={150} strokeWidth={0.7} />
                <input ref={inputRef} onChange={uploadImage} type="file" accept='image/*' className="h-0 w-0 overflow-hidden" {...props} />
            </div>

            {closeCallback && 
                <div className="absolute top-0 right-0 p-3">
                    <div onClick={() => {closeCallback(); set_show(!show)}} className="h-[35px] w-[35px] rounded-full bg-red-400 shadow text-white cell-center">
                        <X />
                    </div>
                </div>
            }
        </div>
    );

}

export const ImageVideo = ({ closeCallback=null, ...props}) => {

    const inputRef = useRef();

    const [image, set_image] = useState(null);
    const [type, set_type]   = useState(null);
    const [show, set_show]   = useState(true);

    const uploadImage = (event) => {
        const image = URL.createObjectURL(event.target.files[0]);
        set_image(image);
        getResourceType(image)
            .then(type => set_type(type));
    }

    if(show)
    return (
        <div  className="h-[300px] cell-center border border-neutral-300 dark:border-[#444] p-3 rounded-3xl relative">
            <div onClick={() => inputRef.current.click()} className="">
                <div className="absolute top-0 left-0 h-full w-full p-3">
                    {(type && type=="image") && <img src={image} className='object-cover w-full h-full' />}
                    {(type && type=="video") && <video src={image} className='object-cover w-full h-full' autoPlay/>}
                </div>
                <ImageIcon size={150} strokeWidth={0.7} />
                <input ref={inputRef} onChange={uploadImage} type="file" accept='image/*, video/*' className="h-0 w-0 overflow-hidden" {...props} />
            </div>

            {closeCallback && 
                <div className="absolute top-0 right-0 p-3">
                    <div onClick={() => {closeCallback(); set_show(!show)}} className="h-[35px] w-[35px] rounded-full bg-red-400 shadow text-white cell-center">
                        <X />
                    </div>
                </div>
            }
        </div>
    );

}