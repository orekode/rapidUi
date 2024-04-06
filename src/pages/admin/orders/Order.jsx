import { useEffect, useState }  from 'react';
import { Button, Errors, Pagination, Search }               from '../../../components';
import { Link, useParams } from 'react-router-dom';
import { useItem, useItems } from '../../../apiCalls/read';
import { Eye } from 'lucide-react';
import { useLoading } from '../../../store/general';
import Swal from 'sweetalert2';
import { Create } from '../../../apiCalls/create';
import { useQueryClient } from 'react-query';

const Orders = () => {

  const { id } = useParams();
  const [ filters, set_filters ] = useState({});

  const { data, isLoading, isError } = useItem({
    target: 'orders/' + id,
    isAuth: true
    // params: { page, filters }
  });

  const queryClient = useQueryClient()

  const { showLoading, hideLoading } = useLoading();

  const confirm_order = async (id) => {
    showLoading();

    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirm it!"
    })

    if (result.isConfirmed) {

        const response = await Create(`confirmOrder/${id}`, {}, "Order Confirmed Successfully", true);
        queryClient.invalidateQueries();

        Swal.fire({...response, icon: response?.status});

        // if(response?.status == 'success') navigate(-1);
    }
    
      
    hideLoading();
  }

  const reject_order = async (id) => {
    showLoading();

    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reject it!"
    })

    if (result.isConfirmed) {

        const response = await Create(`rejectOrder/${id}`, {}, "Order Rejected Successfully", true);

        queryClient.invalidateQueries();

        Swal.fire({...response, icon: response?.status});

        // if(response?.status == 'success') navigate(-1);
    }
    
      
    hideLoading();
  }

  console.log(data)

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
            <div className="cell cell-center flex-col gap-1.5">
              <button onClick={() => confirm_order(item.order_id)} className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white px-3 py-1.5 rounded-xl flex items-center justify-center gap-1.5">
                Confirm
                {item.order_status == 'confirmed' && <span className='h-[7px] w-[7px] rounded-full bg-green-400'></span>}
              </button>

              <button onClick={() => reject_order(item.order_id)} className="bg-red-400 hover:bg-red-500 active:bg-red-600 text-white px-3 py-1.5 rounded-xl flex items-center justify-center gap-1.5">
                Reject
                {item.order_status == 'rejected' && <span className='h-[7px] w-[7px] rounded-full bg-green-400'></span>}
              </button>
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