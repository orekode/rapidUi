

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
              <Uploads.Image 
                uploadCallback={(image) => set_detail("image", image)} 
                name="image"
                error={errors.Image}
              />
            </div>

            <Inputs.Select
              name="parent"
              label="Parent Category"
              target="categories"
              callback={(item) => set_detail("parent", item.id)}
              initValue={["id", details?.parent]}
              error={errors.parent}
            />

            <Inputs.Text 
              name="name" 
              label="Category Name" 
              callback={set_detail}
              value={details.name}
              error={errors.name} 
            />

            <Button.Md 
              width='w-full'
              contentClass='w-full'
              onClick={handleSubmit}
            >
              Save Category
            </Button.Md>

          </div>

        </div>
      </div>
    )
}

export default NewCategory