
import React from 'react'
import { Button } from '../components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className="spacing spacing-y">
            <div className="mx-auto  rounded-3xl max-w-[500px] min-h-[400px]">
                <div className="title font-bold text-3xl">Welcome Back</div>
                <div className="border border-neutral-200 dark:border-[#444] rounded-3xl mt-4 p-6 shadow">
                    <div className="input flex flex-col gap-1 mb-4">
                        <label htmlFor="contact">Phone Number</label>
                        <input type="text" name="contact" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                    </div>
                    <div className="input flex flex-col gap-1 mb-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                        <div className="flex justify-end text-sm">
                            <Link to={'/forgot/password'} className='text-blue-500'>Forgot Password</Link>
                        </div>
                    </div>
                    <div className="mt-4"></div>
                    <Button.Sm width='w-full' contentClass='w-full' hoverColor='dark:bg-green-600 bg-green-500'>Log In</Button.Sm>

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