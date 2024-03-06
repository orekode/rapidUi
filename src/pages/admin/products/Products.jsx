import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useState }  from 'react';
import { Button }               from '../../../components';
import { Link } from 'react-router-dom';
import { useItems } from '../../../apiCalls/read';

const Products = () => {

  const [ page, set_page ] = useState(1);
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItems({
    target: 'products',
    params: { page, filters }
  });


  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">Products</div>

          <Link to={'/admin/product/new'}>
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
      <div className="my-3">
        {(data && data.data && data.data.map) && data.data.map((item) =>
          <div key={item.id} tabIndex={item.id} className="table hover:bg-gray-200 dark:hover:bg-neutral-900 shadow my-3 transition-all duration-200 ">
            <div className="cell h-[120px] p-3">
              <img src={item.image} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="cell cell-center text-center">
              <span>{item.name}</span>
            </div>
            <div className="cell cell-center gap-1">
              <span>Ghc</span>
              <span className='text-2xl'>{item.price}</span>
            </div>
            <div className="cell cell-center gap-1">
              <span>{item.quantity}</span>
              <span>units</span>
            </div>
            <div className="cell cell-center">
              <Link to={`/admin/product/edit/${item.id}`}>
                <Button.Sm>Edit</Button.Sm>
              </Link>
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

export default Products