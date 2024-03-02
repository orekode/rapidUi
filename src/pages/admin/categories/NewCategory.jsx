

import React, { useState } from 'react'
import { Button, Inputs, Uploads } from '../../../components'
import { Link } from 'react-router-dom'

const NewCategory = () => {

    const [details, set_details] = useState({});

    return (
      <div>
        <div className="spacing">

          <div className="flex items-center">
            <Link to={-1}>
              <Button.Sm baseColor='bg-black'>Back</Button.Sm>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-3xl my-6 mb-4">New Category</div>
            <Button.Md>Save Category</Button.Md>
          </div>

          <div className="max-w-[500px] mx-auto">
            <div className="mx-auto h-[300px] w-[300px]">
              <Uploads.Image />
            </div>

            <div className="input flex flex-col gap-1 my-4">
              <label htmlFor="full_name" className='text-gray-400'>Parent Category</label>
              <Inputs.Select></Inputs.Select>
            </div>

            <div className="input flex flex-col gap-1 mb-4">
              <label htmlFor="product_name" className='text-gray-400'>Category Name</label>
              <input onChange={(event) => set_detail("name", event.target.value )} type="text" name="product_name" className="border dark:bg-[#111] border-neutral-300 dark:border-[#444] px-3 py-1.5 text-lg rounded-3xl"/>
            </div>
          </div>

        </div>
      </div>
    )
}

export default NewCategory