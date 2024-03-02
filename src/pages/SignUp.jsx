
import React from 'react'
import { Button } from '../components'
import { Upload } from 'lucide-react'

const SignUp = () => {
  return (
    <div>
        <div className="spacing spacing-y">
            <div className="mx-auto  rounded-3xl max-w-[500px] min-h-[400px]">
                <div className="title font-bold text-3xl">Join The Crew</div>
                <div className="border border-neutral-200 dark:border-[#444] rounded-3xl mt-4 p-6 shadow">
                    <div className="w-[200px] h-[200px] rounded-full shadow-xl mx-auto relative flex flex-col items-center justify-center">
                        <Upload size={100} strokeWidth={1}/>
                        <span className="text-center text-xs">click to upload an image of yourself</span>
                    </div>
                    <div className="input flex flex-col gap-1 mb-4">
                        <label htmlFor="contact">Full Name</label>
                        <input type="text" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                    </div>
                    <div className="input flex flex-col gap-1 mb-4">
                        <label htmlFor="contact">Phone Number</label>
                        <input type="text" name="contact" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                    </div>
                    <div className="input flex flex-col gap-1 mb-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="full_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
                    </div>
                    <Button.Sm width='w-full' contentClass='w-full' hoverColor='dark:bg-green-600 bg-green-500'>Sign Up</Button.Sm>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp