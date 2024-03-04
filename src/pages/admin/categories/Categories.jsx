import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useState }  from 'react';
import { Button, Errors, Pagination }               from '../../../components';
import { Link } from 'react-router-dom';
import { useItems } from '../../../apiCalls/read';


const Categories = () => {

  const [ page, set_page ] = useState(1);

  const { data, isLoading, isError } = useItems({
    target: 'categories',
    params: { page }
  });

  console.log(data);


  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">Categories</div>

          <Link to={'/admin/category/new'}>
            <Button.Sm>Add New</Button.Sm>
          </Link>
      </div>

      <div className="search-box flex gap-3">
        <div className="input border border-neutral-400 dark:border-[#444] w-full rounded-3xl ">
          <input type="text" placeholder='type your search here...' className='w-full h-full bg-transparent px-6 rounded-3xl' />
        </div>
        <div onClick={() => setVisible(!visible)} className="filter dark:border-[#444] bg-blue-600 hover:bg-red-600 active:scale-90 text-white w-[50px] h-[50px] rounded-full flex-center">
          <Search />
        </div>
      </div>

      <div className="my-3 mt-6 grid-250 fill gap-6">
        {(data && data.data && data.data.map) && data.data.map((item) =>
          <div key={item.id} tabIndex={item.id} className="bg-gray-200 dark:bg-neutral-900 shadow transition-all duration-200 active:scale-90 rounded-3xl relative">
            <div className="image h-[250px] p-12 pb-3">
              <img src={item.image} alt="" className="object-contain h-full w-full" />
            </div>
            <div className="details p-6 pb-12 pt-0">
              <div className="font-bold text-lg text-center">{item.name}</div>
              <div className="absolute bottom-0 left-0 w-full">
                <Link to={`/admin/category/edit/${item.id}`}>
                  <Button.Sm width='w-full' baseColor='bg-black' hoverColor='bg-blue-500' contentClass='w-full'>Edit</Button.Sm>
                </Link>
              </div>
            </div>
          </div>
        )}
        {isLoading && Array.from({length: 10}, (_, index) => 
          <Errors.MdCard key={index} />
        )}
      </div>

      <Errors.Empty data={data?.data} title="No Categories Available" content={'Click the "Add New" button to create categories'} />
      {isError && <Errors.Network />}

      <Pagination meta={data?.meta} setPage={set_page} />
    </div>
  )
}

export default Categories