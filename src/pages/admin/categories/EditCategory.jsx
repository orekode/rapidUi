

import { useEffect, useRef, useState }         from 'react';
import { Button, Inputs, Uploads }  from '../../../components';
import { Link, useNavigate, useParams }                     from 'react-router-dom';
import { useLoading } from '../../../store/general';
import { Create } from '../../../apiCalls/create';
import Swal from 'sweetalert2';
import { useItem } from '../../../apiCalls/read';

const EditCategory = () => {

    const { id } = useParams();

    const { data } = useItem({target: `categories/${id}`});

    const [details, set_details] = useState({});
    const [errors, set_errors] = useState({});

    const navigate = useNavigate();

    const { showLoading, hideLoading } = useLoading();


    const set_detail = (target, value) => {
      const clone_details = {...details};
      clone_details[target] = value;
      set_details({...clone_details});
    }

    const handleSubmit = async () => {
      showLoading();
        const response = await Create(`categories/${id}`, {...details, "_method" : "PATCH"}, "Update Successfull");
        Swal.fire({...response, icon: response?.status});
        if(response?.status == 'success') navigate(-1);
        set_errors(response?.errors)
      hideLoading();
    }

    useEffect(() => {
      set_detail("name", data?.name);
    }, [data])

    return (
      <div>
        <div className="spacing">
          <div className="flex items-center gap-3 my-6 mb-4">
            <Link to={-1}>
              <Button.Sm baseColor='bg-black'>Back</Button.Sm>
            </Link>
            <div className="font-bold text-3xl">Edit Category</div>
          </div>

          <div className="max-w-[500px] mx-auto">
            <div className="mx-auto h-[300px] w-[300px]">
              <Uploads.Image initUrl={data?.image} uploadCallback={(image) => set_detail("image", image)} name="image" />
              <div className="error text-red-600 text-xs">{errors.image}</div>
            </div>

            <div className="input flex flex-col gap-1 my-4">
              <label htmlFor="full_name" className='text-gray-400'>Parent Category</label>
              <Inputs.Select target="categories" callback={(item) => set_detail("parent", item.id)} initValue={["id", data?.parent]}></Inputs.Select>
              <div className="error text-red-600 text-xs">{errors.parent}</div>
            </div>

            <div className="input flex flex-col gap-1 mb-4">
              <label htmlFor="name" className='text-gray-400'>Category Name</label>
              <input onChange={(event) => set_detail("name", event.target.value )} value={details?.name} type="text" name="name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
              <div className="error text-red-600 text-xs">{errors.name}</div>
            </div>

            <Button.Md width='w-full' contentClass='w-full' onClick={handleSubmit}>Edit Category</Button.Md>

          </div>

        </div>
      </div>
    )
}

export default EditCategory