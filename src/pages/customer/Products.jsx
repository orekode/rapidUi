import { useEffect, useState }  from 'react';
import { Button, Errors, Pagination, Search } from '../../components';
import { Link } from 'react-router-dom';
import { useItems } from '../../apiCalls/read';

const Products = () => {

  const [ page, set_page ] = useState(1);
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItems({
    target: 'user/exchange_products',
    params: { page, filters },
    isAuth: true
  });


  return (
    <div>

      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">Products</div>

          <Link to={'/exchange/new'}>
            <Button.Sm>Add New</Button.Sm>
          </Link>
      </div>

      <Search.Simple callback={set_filters} />

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
              <span>{item.views}</span>
              <span>views</span>
            </div>
            <div className="cell cell-center">
              <Link to={`/exchange/edit/${item.id}`}>
                <Button.Sm>Edit</Button.Sm>
              </Link>
            </div>
          </div>
        )}
        {isLoading && Array.from({length: 10}, (_, index) => 
          <Errors.Table key={index} />
        )}
      </div>

      {(!isLoading && !isError) &&
        <Errors.Empty data={data?.data} title="No Products Available" content={'Click the "Add New" button to create products'} />
      }

      {isError && <Errors.Network />}

      <Pagination meta={data?.meta} setPage={set_page} />
    </div>
  )
}

export default Products