import { useEffect, useState }  from 'react';
import { Button, Errors, Pagination, Search }               from '../../components';
import { Link, useParams } from 'react-router-dom';
import { useItem, useItems } from '../../apiCalls/read';
import { Eye } from 'lucide-react';

const Orders = () => {

  const { id } = useParams();
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItem({
    target: 'user/order/' + id,
    isAuth: true
    // params: { page, filters }
  });

  console.log(data);

  return (
    <div className='p-12'>

      <div className="flex items-center gap-3 mb-6">
        <Link to={-1}>
            <Button.Sm baseColor='bg-black'>Back</Button.Sm>
        </Link>
        <div className="font-bold text-xl">Order</div>
      </div>

      {/* <Search.Simple callback={set_filters} /> */}

      <div className="my-3">
        {data && data.products && data.products.map((item) =>
          <div key={item.id} tabIndex={item.id} className="table hover:bg-gray-200 dark:hover:bg-neutral-900 shadow my-3 transition-all duration-200 ">
            <div className="cell h-[120px] p-3 flex flex-wrap justify-center items-center gap-2">
                <img src={item.image} alt="" className="h-full w-full object-contain rounded-full" />
            </div>
            <div className="cell cell-center text-center font-bold text-lg gap-2">
                <span>{item.name}</span>
            </div>
            <div className="cell cell-center gap-1">
              <span>Ghc</span>
              <span className='text-2xl'>{item.order_price}</span>
            </div>
            <div className="cell cell-center gap-1">
              <span>{item.order_quantity}</span>
              <span>units</span>
            </div>
            <div className="cell cell-center capitalize">
              {
              item.order_status == 'confirmed' ?
                <div className="bg-blue-400 text-white px-3 py-1.5 rounded-xl">
                  {item.order_status}
                </div>
              : item.order_status == 'pending' ?
                <div className="bg-orange-400 text-white px-3 py-1.5 rounded-xl">
                  {item.order_status}
                </div>
                :
                <div className="bg-red-400 text-white px-3 py-1.5 rounded-xl">
                  {item.order_status}
                </div>
              }
            </div>
          </div>
        )}
        {isLoading && Array.from({length: 10}, (_, index) => 
          <Errors.Table key={index} />
        )}
      </div>

      {(!isLoading && !isError) &&
        <Errors.Empty data={data?.products} title="No Orders Available" content={'Click the "Add New" button to create products'} />
      }

      {isError && <Errors.Network />}

    </div>
  )
}

export default Orders