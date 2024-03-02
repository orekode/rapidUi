import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useState }  from 'react';
import { Button }               from '../../../components';
import { Link } from 'react-router-dom';

const Categories = () => {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products').
        then(result => result.json()).
        then(result => setCategories(result));
  }, []);


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
      <div className="my-3 grid-250 fill gap-6">
        {categories.map((item) =>
          <div key={item.id} tabIndex={item.id} className="bg-gray-200 dark:bg-neutral-900 shadow transition-all duration-200 active:scale-90 rounded-3xl relative">
            <div className="image h-[250px] p-12 pb-3">
              <img src={item.image} alt="" className="object-contain h-full w-full" />
            </div>
            <div className="details p-6 pb-12 pt-0">
              <div className="font-bold text-lg text-center">Category name here</div>
              <div className="absolute bottom-0 left-0 w-full">
                <Button.Sm width='w-full' baseColor='bg-black' hoverColor='bg-blue-500' contentClass='w-full'>Edit</Button.Sm>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="my-3">
        <div className="flex items-center justify-end gap-3">
          <div className="h-[45px] w-[45px] rounded-full border shadow cell-center hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-200 active:scale-90">
            <ChevronLeft />
          </div>

          {Array.from({length: 5}, (_, index) => 
            <div className="h-[45px] w-[45px] rounded-full border shadow cell-center hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-200 active:scale-90">
              {index}
            </div>
          )}

          <div className="h-[45px] w-[45px] rounded-full border shadow cell-center hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-200 active:scale-90">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories