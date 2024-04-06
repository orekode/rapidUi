
import React, { useState } from 'react'
import { Button, Inputs } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, useLoading } from '../store/general';
import { Create } from '../apiCalls/create';
import Swal from 'sweetalert2';

const Login = () => {
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
          const response = await Create('login', details, 'Log In Successfull');
//           Swal.fire({...response, icon: response?.status});

          const data = response?.result?.data?.data;
          const token = response?.result?.data?.data?.token;

        //   console.log(data, role_path_map[data?.role]);

          sessionStorage.setItem('xsrf', token);
  
          if(response?.status == 'success') {
            login(
                role_path_map[data?.role] ?? '/customer', 
                data?.role,
                data?.name,
                data?.email,
                data?.phone_number
            );
            navigate(role_path_map[data?.role] ?? '/customer')
          }
          else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Credentials',
                text: 'Check your inputs and try again'
            });
          }

          set_errors(response?.errors)
        hideLoading();
    }

  return (
    <div>
        <div className="spacing spacing-y">
            <div className="mx-auto  rounded-3xl max-w-[500px] min-h-[400px]">
                <div className="title font-bold text-3xl">Welcome Back</div>
                <div className="border border-neutral-200 dark:border-[#444] rounded-3xl mt-4 p-6 shadow">
                    <Inputs.Text 
                        name="email" 
                        label="Email" 
                        callback={set_detail}
                        value={details?.email}
//                         error={errors?.email}
                    />
                    <Inputs.Password 
                        name="password" 
                        label="Password" 
                        callback={set_detail}
                        value={details?.password}
//                         error={errors?.password}
                    />
                    <div className="mt-4"></div>
                    <Button.Sm onClick={handleSubmit} width='w-full' contentClass='w-full' hoverColor='dark:bg-green-600 bg-green-500'>Log In</Button.Sm>

                    <div className="my-4 text-center">
                        Dont have an account? <Link to={'/signup'} className='text-blue-500'>Click Me</Link> to Sign Up.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login