import { useState }  from 'react';
import { Button, Errors, Pagination, Search } from '../../../components';
import { Link } from 'react-router-dom';
import { useItems } from '../../../apiCalls/read';




const Slides = () => {

  const [ page, set_page ] = useState(1);
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItems({
    target: 'slides',
    params: { page, filters },
    isAuth: true,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">Slides</div>

        <Link to={'/admin/slide/new'}>
          <Button.Sm>Add New</Button.Sm>
        </Link>
      </div>

      {/* <Search.Simple callback={set_filters} /> */}

      <div className="my-3 mt-6 grid-200 fill gap-6">
        {(data && data.data && data.data.map) && data.data.map((item) =>
          <div key={item.id} tabIndex={item.id} className="bg-gray-200 dark:bg-neutral-900 shadow transition-all duration-200 rounded-3xl relative">
            <div className="image h-[230px] p-3 pb-3">
              <img src={item.image} alt="" className="object-contain h-full w-full" />
            </div>
            <div className="details p-6 pb-12 pt-0">
              <div className="absolute bottom-0 left-0 w-full">
                <Link to={`/admin/slide/edit/${item.id}`}>
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

      {(!isLoading && !isError) &&
        <Errors.Empty data={data?.data} title="No Slides Available" content={'Click the "Add New" button to create categories'} />
      }

      {isError && <Errors.Network />}

      <Pagination meta={data?.meta} setPage={set_page} />
    </div>
  );
};

export default Slides;