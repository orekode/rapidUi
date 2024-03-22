

import { useEffect, useRef, useState }         from 'react';
import { Button, Inputs, Uploads }  from '../../../components';
import { Link, useNavigate, useParams }                     from 'react-router-dom';
import { useLoading } from '../../../store/general';
import { Create } from '../../../apiCalls/create';
import Swal from 'sweetalert2';
import { useItem } from '../../../apiCalls/read';
import { Trash } from 'lucide-react';

const EditSlide = () => {

    const { id } = useParams();

    const { data } = useItem({target: `slides/${id}`});

    
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
        const response = await Create(`slides/${id}`, {...details, "_method" : "PATCH"}, "Update Successfull");
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

          const response = await Create(`slides/${id}`, {_method: "delete"}, "Slide Deleted Successfully");

          Swal.fire({...response, icon: response?.status});

          if(response?.status == 'success') navigate(-1);
      }
      
        
      hideLoading();
  }

    console.log(data, details);

    useEffect(() => {
      set_details({
        name: data?.name,
        url: data?.image,
        parent: data?.parent
      });
    }, [data])

    return (
      <div>
        <div className="spacing">
          <div className="flex items-center gap-3 my-6 mb-4">
            <Link to={-1}>
              <Button.Sm baseColor='bg-black'>Back</Button.Sm>
            </Link>
            <div className="font-bold text-3xl">Edit Slide</div>
          </div>

          <div className="max-w-[500px] mx-auto">
            
            <div className="mx-auto h-[300px] w-[300px] mb-6">
              <Uploads.Image 
                initUrl={details?.url} 
                uploadCallback={(image) => set_detail("image", image)} 
                name="image"
                error={errors.Image}
              />
            </div>

          

            <div className="flex items-center gap-1">
              <Button.Md 
                width='w-full' 
                contentClass='w-full' 
                onClick={handleSubmit}
              >
                Edit Slide
              </Button.Md>

              <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white shadow h-[40px] w-[40px] rounded-3xl flex items-center justify-center">
                  <Trash />
              </button>
            </div>

          </div>

        </div>
      </div>
    )
}

export default EditSlide