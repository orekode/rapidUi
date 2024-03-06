import React, { useEffect, useRef, useState } from 'react'
import { Button, Inputs, Uploads } from '../../../components'
import { Link, useParams } from 'react-router-dom'
import { Create } from '../../../apiCalls/create';
import Swal from 'sweetalert2';
import { useLoading } from '../../../store/general';
import { useItem } from '../../../apiCalls/read';


const EditProduct = () => {

    const { id } = useParams();

    const { data } = useItem({target: `products/${id}`});

    const [details, set_details] = useState();
    const [categories, set_categories] = useState([]);
    const [images_removed, set_images_removed] = useState([]);

    const [errors, set_errors]   = useState({});
    const [images, set_images]   = useState([0]);

    const { showLoading, hideLoading } = useLoading();

    const set_detail = (target, value) => {
        const clone_details = {...details};
        clone_details[target] = value;
        set_details({...clone_details});
    }

    const handleSubmit = async () => {
        showLoading();
          const images_upload = images.filter( image => image instanceof File );
          let category_ids = '';
          categories.forEach( category => category_ids += ` ${category.id} `);
          
          const response = await Create('products', {...details, images: images_upload, images_removed, categories: category_ids});
          Swal.fire({...response, icon: response?.status});
  
          if(response?.status == 'success') navigate(-1);
          set_errors(response?.errors)
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

    useEffect(() => {
        set_details({...data, init_long_description: data?.long_description});
        set_categories(data?.categories);
        set_images(data?.images);
    }, [data])

    console.log(details);

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
                    <div className="w-max">
                        <Button.Md onClick={handleSubmit}>Save Product</Button.Md>
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

                            <Inputs.Text 
                                name="quantity" 
                                label="Product Quantity (Units)" 
                                callback={set_detail}
                                value={details?.quantity}
                                error={errors?.quantity} 
                                placeholder="e.g 12"
                            />
                        </div>

                        <Inputs.TextArea
                            name="short_description" 
                            label="Short Description" 
                            callback={set_detail}
                            value={details?.short_description}
                            error={errors?.short_description} 
                        />

                        <Inputs.Select
                            name="categories"
                            label="Categories"
                            target="categories"
                            callback={handleCategorySelect}
                            initValue={["id", details?.categories]}
                            error={errors?.categories}
                        />

                        <div className="selected-categories flex items-center gap-1.5">
                            {categories?.map(item => 
                                <div 
                                    onClick={removeCategory} 
                                    className="bg-neutral-200 dark:bg-[#222] hover:bg-red-500 hover:text-white active:scale-90 transition-all duration-200 px-3 py-1.5 rounded-2xl shadow">{item.name}</div>
                            )}
                        </div>

                        <Inputs.Select
                            name="parent"
                            label="Brand"
                            target="categories"
                            callback={(item) => set_detail("parent", item.id)}
                            initValue={["id", details?.parent]}
                            error={errors?.parent}
                        />

                        <Inputs.Editor 
                            name="long_description" 
                            label="Long Description" 
                            callback={set_detail}
                            value={details?.init_long_description}
                            error={errors?.long_description} 
                        />

                    </form>

                    <div className="right px-12">

                        <div className="input flex flex-col gap-2 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Product Visiblity</label>
                            <div className="input flex items-center gap-6 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <input onChange={(event) => set_detail("status", event.target.value )} type="radio" checked={details?.status == 'published'} name="visiblilty" value={'published'} />
                                    <label htmlFor="status">Published</label>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <input onChange={(event) => set_detail("status", event.target.value )} type="radio" checked={details?.status == 'scheduled'}  name="visiblilty" value={'scheduled'} />
                                    <label htmlFor="status">Scheduled</label>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <input onChange={(event) => set_detail("status", event.target.value )} type="radio" checked={details?.status == 'draft'}  name="visiblilty" value={'draft'} />
                                    <label htmlFor="status">Draft</label>
                                </div>
                            </div>
                        </div>

                        {details?.status == "scheduled" && 
                            <div className="input flex flex-col gap-1 mb-4">
                                <label htmlFor="sheduled_date" className='text-gray-400'>Schedule Date</label>
                                <input onChange={(event) => set_detail("status", event.target.value )} type="datetime-local" name="sheduled_date" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                            </div>
                        }

                        <div className="input flex flex-col gap-1 mb-4">
                            <label htmlFor="full_name" className='text-gray-400'>Product Image</label>
                            <div className="error text-red-600 text-xs">
                                {errors.images}
                            </div>
                            <div className="grid-250 fill mt-3 gap-3">
                                {images?.map((item, index) =>
                                    <Uploads.Image 
                                        initUrl={item.image} 
                                        uploadCallback={(image) => {handleUpload(image, index); handleImagesRemoved(item)}} 
                                        key={index} 
                                        closeCallback={() => {removeImage(index); handleImagesRemoved(item)}}
                                    />
                                )}
                            </div> 
                        </div>

                        <div className="mt-3 flex items-center justify-end">
                            <Button.Sm onClick={() => set_images([...images, images.length])}>Add Image</Button.Sm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct