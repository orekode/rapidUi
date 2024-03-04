

import { useRef, useState }         from 'react';
import { Button, Inputs, Uploads }  from '../../../components';
import { Link, useNavigate }                     from 'react-router-dom';
import { useLoading } from '../../../store/general';
import { Create } from '../../../apiCalls/create';
import Swal from 'sweetalert2';

const NewCategory = () => {

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
        const response = await Create('categories', details);
        Swal.fire({...response, icon: response?.status});

        if(response?.status == 'success') navigate(-1);
        set_errors(response?.errors)
      hideLoading();
    }

    return (
      <div>
        <div className="spacing">
          <div className="flex items-center gap-3 my-6 mb-4">
            <Link to={-1}>
              <Button.Sm baseColor='bg-black'>Back</Button.Sm>
            </Link>
            <div className="font-bold text-3xl">New Category</div>
          </div>

          <div className="max-w-[500px] mx-auto">
            <div className="mx-auto h-[300px] w-[300px]">
              <Uploads.Image uploadCallback={(image) => set_detail("image", image)} name="image" />
              <div className="error text-red-600 text-xs">{errors.image}</div>
            </div>

            <div className="input flex flex-col gap-1 my-4">
              <label htmlFor="full_name" className='text-gray-400'>Parent Category</label>
              <Inputs.Select target="categories" callback={(item) => set_detail("parent", item.id)}></Inputs.Select>
              <div className="error text-red-600 text-xs">{errors.parent}</div>
            </div>

            <div className="input flex flex-col gap-1 mb-4">
              <label htmlFor="name" className='text-gray-400'>Category Name</label>
              <input onChange={(event) => set_detail("name", event.target.value )} type="text" name="name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
              <div className="error text-red-600 text-xs">{errors.name}</div>
            </div>

            <Button.Md width='w-full' contentClass='w-full' onClick={handleSubmit}>Save Category</Button.Md>

          </div>

        </div>
      </div>
    )
}

export default NewCategory