
import React, { useState } from 'react'
import { Button, Inputs } from '../components'
import { useAuth, useLoading } from '../store/general';
import { Create } from '../apiCalls/create';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [details, set_details] = useState({});
    const [errors, set_errors]   = useState({});
    const { showLoading, hideLoading } = useLoading();

    const role_path_map = {
        'admin' : '/admin',
        'customer': '/customer'
    }

    const navigate = useNavigate();

    const { login } = useAuth();

    const set_detail = (target, value) => {
        const clone_details = {...details};
        clone_details[target] = value;
        set_details({...clone_details});
    }

    const handleSubmit = async () => {
        showLoading();
          const response = await Create('signUp', details, 'Sign Up Successfull');
          Swal.fire({...response, icon: response?.status});

          const data = response?.result?.data?.data;
          const token = response?.result?.data?.data?.token;

          sessionStorage.setItem('xsrf', token);
  
          if(response?.status == 'success') {
            login(
                role_path_map[response?.data?.data?.role] ?? '/customer', 
                response?.data?.data?.role,
                data.name,
                data.email,
                data.phone_number
            );
            navigate(role_path_map[response?.data?.data?.role] ?? '/customer')
          };

          set_errors(response?.errors)
        hideLoading();
    }

  return (
    <div>
        <div className="spacing spacing-y">
            <div className="mx-auto  rounded-3xl max-w-[500px] min-h-[400px]">
                <div className="title font-bold text-3xl">Join The Crew</div>
                <div className="border border-neutral-200 dark:border-[#444] rounded-3xl mt-4 p-6 shadow">
                    {/* <div className="w-[200px] h-[200px] rounded-full shadow-xl mx-auto relative flex flex-col items-center justify-center">
                        <Upload size={100} strokeWidth={1}/>
                        <span className="text-center text-xs">click to upload an image of yourself</span>
                    </div> */}
                    <Inputs.Text 
                        name="fullname" 
                        label="Full Name" 
                        callback={set_detail}
                        value={details?.fullname}
                        error={errors?.fullname} 
                    />
                    {/* <div className="grid grid-cols-2 gap-3"> */}
                    <Inputs.Text 
                        name="email" 
                        label="Email" 
                        callback={set_detail}
                        value={details?.email}
                        error={errors?.email} 
                    />
                    <Inputs.Text 
                        name="phone_number" 
                        label="Phone Number" 
                        callback={set_detail}
                        value={details?.phone_number}
                        error={errors?.phone_number} 
                    />
                    {/* </div> */}
                    {/* <div className="grid grid-cols-2 gap-3"> */}
                    <Inputs.Password 
                        name="password" 
                        label="Password" 
                        callback={set_detail}
                        value={details?.password}
                        error={errors?.password} 
                    />
                    <Inputs.Password 
                        name="password_confirmation" 
                        label="Confirm Password" 
                        callback={set_detail}
                        value={details?.password_confirmation}
                        error={errors?.password_confirmation} 
                    />
                    {/* </div> */}
                    <Button.Sm onClick={handleSubmit} width='w-full' contentClass='w-full' hoverColor='dark:bg-green-600 bg-green-500'>Sign Up</Button.Sm>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp