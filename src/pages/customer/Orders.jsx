import { useEffect, useState }  from 'react';
import { Button, Errors, Pagination, Search }               from '../../components';
import { Link } from 'react-router-dom';
import { useItems } from '../../apiCalls/read';
import { Eye } from 'lucide-react';
import { useAuth } from '../../store/general';

const Orders = () => {

  const [ page, set_page ] = useState(1);
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItems({
    target: 'user/orders',
    params: { page, filters },
    isAuth: true,
  });

  return (
    <div>

      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">Orders</div>
      </div>

      <Search.Simple callback={set_filters} />

      <div className="my-3">
        {(data && data.data && data.data.map) && data.data.map((item) =>
          <div key={item.id} tabIndex={item.id} className="table hover:bg-gray-200 dark:hover:bg-neutral-900 shadow my-3 transition-all duration-200 ">
            <div className="cell h-[120px] p-3 flex flex-wrap justify-center items-center gap-2">
              {item.products.map((item, index) => 
                <img src={item.image} key={index} alt="" className="h-[30px] w-[30px] object-contain rounded-full" />
              )}
            </div>
            <div className="cell cell-center text-center font-bold text-lg gap-2">
              {item.products.map((sub, index) => 
                <span>{sub.name}{index < item.products.length - 1 ? ',' : ''}</span>
              )}
            </div>
            <div className="cell cell-center gap-1">
              <span>Ghc</span>
              <span className='text-2xl'>{item.total_price}</span>
            </div>
            <div className="cell cell-center gap-1">
              <span>{item.total_quantity}</span>
              <span>units</span>
            </div>
            <div className="cell cell-center">
              <Link to={`/customer/order/${item.id}`}>
                <div className="bg-blue-500 hover:bg-red-500 active:bg-blue-600 active:shadow-none text-white rounded-full shadow h-[40px] w-[40px] cell-center">
                  <Eye />
                </div>
              </Link>
            </div>
          </div>
        )}
        {isLoading && Array.from({length: 10}, (_, index) => 
          <Errors.Table key={index} />
        )}
      </div>

      {(!isLoading && !isError) &&
        <Errors.Empty data={data?.data} title="No Orders Available" content={'Click the "Add New" button to create products'} />
      }

      {isError && <Errors.Network />}

      <Pagination meta={data?.meta} setPage={set_page} />
    </div>
  )
}

export default Orders