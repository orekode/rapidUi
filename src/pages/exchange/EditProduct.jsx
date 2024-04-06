import React, { useEffect, useRef, useState } from 'react'
import { Button, Inputs, Uploads } from '../../components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Create } from '../../apiCalls/create';
import Swal from 'sweetalert2';
import { useLoading } from '../../store/general';
import { useItem } from '../../apiCalls/read';
import { Trash } from 'lucide-react';


const EditProduct = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { showLoading, hideLoading } = useLoading();

    const { data, isLoading, isError } = useItem({target: `exchange_products/${id}`, isAuth: true});

    const [details, set_details] = useState();
    const [categories, set_categories] = useState([]);
    const [brands, set_brands] = useState([]);
    const [images_removed, set_images_removed] = useState([]);

    const [errors, set_errors]   = useState({});
    const [images, set_images]   = useState([0]);

    const set_detail = (target, value) => {
        const clone_details = {...details};
        clone_details[target] = value;
        set_details({...clone_details});
    }

    const handleSubmit = async () => {
        console.log(images_removed);
        showLoading();
        console.log(images)
          const images_upload = images.filter( image => image instanceof File );

          delete details['image'];
          console.log(details);
          
          const response = await Create(`exchange_products/${id}`, {
            ...details,
            images: images_upload,
            "_method": "PATCH"
          }, "Create Successfull", true);

          Swal.fire({...response, icon: response?.status});
  
          if(response?.status == 'success') navigate(-1);
          set_errors(response?.errors)
        hideLoading();
    }


    const handleDelete = async () => {
        showLoading();

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

        if (result.isConfirmed) {

            const response = await Create(`exchange_products/${id}`, {_method: "delete"}, "Product Deleted Successfully", true);

            Swal.fire({...response, icon: response?.status});
  
            if(response?.status == 'success') navigate(-1);
        }
        
          
        hideLoading();
    }
  
    const handleUpload = (image, index) => {
        const clone = [...images];
        clone[index] = image;
        set_images([...clone]);
    };

    const removeImage = (index) => {
        const clone = [...images];
        clone.splice(index, 1);
        set_images([...clone]);
    };

    const handleImagesRemoved = (item) => {
        if(item && item.hasOwnProperty('id'))
        set_images_removed([...images_removed, item.id]);
    }

    const handleCategorySelect = (category) => {
        const check = categories.filter( item => item.id == category.id);

        if(check.length <= 0)
            set_categories([...categories, category]);
    }

    const removeCategory = (category) => {
        const check = categories.filter( item => item.id !== category.id);

        set_categories([...check]);
    }

    const handleBrandSelect = (brand) => {
        const check = brands.filter( item => item.id == brand.id);

        if(check.length <= 0)
            set_brands([...brands, brand]);
    }

    const removeBrand = (brand) => {
        const check = brands.filter( item => item.id !== brand.id);

        set_brands([...check]);
    }

    useEffect(() => {
        set_details({...data, init_long_description: data?.long_description, init_short_description: data?.short_description});
        set_categories(data?.categories);
        set_brands(data?.brands);

        isError || isLoading ? showLoading() : hideLoading();

    }, [data])




    return (
        <div>
            <div className="spacing">
                <div className="flex items-center">
                    <Link to={-1}>
                        <Button.Sm baseColor='bg-black'>Back</Button.Sm>
                    </Link>
                </div>

                <div className="flex items-center justify-between">
                    <div className="font-bold text-3xl my-6 mb-4">Edit Product</div>
                    <div className="flex items-center gap-1">
                        <div className="w-max">
                            <Button.Md onClick={handleSubmit}>Save Product</Button.Md>
                        </div>

                        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white shadow h-[40px] w-[40px] rounded-3xl flex items-center justify-center">
                            <Trash />
                        </button>
                    </div>
                </div>


                <div className="grid-500 py-3">
                    <form className="left">

                        <Inputs.Text 
                            name="name" 
                            label="Product Name" 
                            callback={set_detail}
                            value={details?.name}
                            error={errors?.name} 
                        />

                        <div className="grid grid-cols-2 gap-3">
                            <Inputs.Text 
                                name="price" 
                                label="Product Price (Ghc)" 
                                callback={set_detail}
                                value={details?.price}
                                error={errors?.price} 
                                placeholder="e.g 1450"
                            />

                            <div className="input flex flex-col gap-1 my-3">
                                <label htmlFor="payment_type" className='text-gray-400'>Product State</label>
                                <select onChange={(event) => {set_detail('status', event.target.value)}} defaultValue={details?.status} name="payment_type" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl">
                                    <option value="Used" className="">Used</option>
                                    <option value="Brand New">Brand New</option>
                                </select>
                            </div>
                        </div>

                        <div className="short">
                            <Inputs.TextArea 
                                name="short_description" 
                                label="Short Description" 
                                callback={set_detail}
                                value={details?.short_description}
                                error={errors?.short_description} 
                            />
                        </div>

                    </form>

                    <div className="right px-12">

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Product Image</label>
                            <div className="error text-red-600 text-xs">
                                {errors?.images}
                            </div>
                            <div className="grid-250 fill mt-3 gap-3">
                                <Uploads.Image 
                                    initUrl={data?.image} 
                                    uploadCallback={(image) => {handleUpload(image, 0)}}
                                />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct