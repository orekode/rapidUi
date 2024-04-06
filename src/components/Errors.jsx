
import Skeleton from 'react-loading-skeleton';

export const Empty = ({ title, content, data }) => {
    if(typeof data !== 'object' || data.length <= 0)
    return (
      <div>
          <div className="cell-center flex-col p-12">
            <div className="h-[200px] w-[200px] mx-auto">
              <img src="/images/empty.png" alt="" className="object-contain h-full w-full" />
            </div>
  
            <div className="text-center">
              <h1 className='font-black text-3xl'>{title}</h1>
              <p className='my-3'>{content}</p>
            </div>
          </div>
      </div>
    )
  }

export const Network = () => {
  return (
    <div>
        <div className="cell-center flex-col p-12">
          <div className="h-[300px] w-[300px] mx-auto">
            <img src="/images/connection.png" alt="" className="object-contain h-full w-full" />
          </div>

          <div className="text-center">
            <h1 className='font-black text-3xl'>No Internet Connection</h1>
            <p className='my-3'>Please check your internet connection and try again.</p>
          </div>
        </div>
    </div>
  )
}

export const MdCard = () => {
  return (
    <div>
        <div className="bg-gray-200 dark:bg-neutral-900 shadow transition-all duration-200 active:scale-90 rounded-3xl relative p-3">
            <Skeleton containerClassName='w-full h-[250px] block' className='block h-full w-full'/>
            <div className="details p-6 pb-0 pt-0">
              <div className="font-bold text-lg text-center mt-3">
                <Skeleton />
              </div>
              <div className=" mb-3 w-full">
                <Skeleton />
              </div>
            </div>
        </div>
    </div>
  )
}

export const Table = () => {
  return (
    <div className="table hover:bg-gray-200 dark:hover:bg-neutral-900 shadow my-3 transition-all duration-200 ">
      <div className="cell h-[120px] p-3">
        <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
      </div>
      <div className="cell cell-center text-center">
        <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
      </div>
      <div className="cell cell-center gap-1">
        <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
      </div>
      <div className="cell cell-center gap-1">
        <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
      </div>
      <div className="cell cell-center">
        <Skeleton containerClassName='w-full h-full block' className='block h-full w-full'/>
      </div>
    </div>
  );
}