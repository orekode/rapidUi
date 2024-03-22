import { useEffect, useState } from 'react'
import { Md, Sm } from '../components/Button'
import { Side } from '../components/Scroll'
import { Products } from '../groups'
import { PopularCircle } from '../components/Categories'
import { Filter, FilterX, ListFilter } from 'lucide-react'
import ProductFilters from '../groups/ProductFilters'
import { Slides } from '../components'
import { debounce } from 'lodash'

const Shop = () => {

  const [visible, setVisible] = useState(false); 

  const [ search, setSearch ] = useState('');

  useEffect(() => {
    if(search.replaceAll(' ', '').length > 0) {
      setVisible(true);
      debounce(() => {
        setSearch('');
      }, 3600)();
    }
  }, [search])

  return (
    <div>

      <div className="spacing">
        <div className="search-box flex gap-3">
          <div className="input border dark:border-[#444] w-full rounded-3xl ">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='type your search here...' className='w-full h-full bg-transparent px-6 rounded-3xl' />
          </div>
          <div onClick={() => setVisible(!visible)} className="filter dark:border-[#444] bg-blue-600 hover:bg-red-600 active:scale-90 text-white w-[50px] h-[50px] rounded-full flex-center">
            <ListFilter />
          </div>
        </div>
      </div>

      <div className="spacing">
        <PopularCircle />
      </div>

      <div className="flex items-center gap-3 spacing">
          <div className="slide-item flex-grow w-[900px] h-[420px] max-[550px]:h-max bg-blue-500 text-white rounded-3xl grid grid-cols-12 p-12 max-[1000px]:p-9 max-[420px]:text-center max-[420px]:p-6">
            <div className="col-span-7 flex items-center max-[420px]:col-span-12">
              <div className="">
                <div className="title text-4xl max-[1000px]:text-3xl max-[550px]:text-xl">The title of the slide is going to be here</div>
                <p className="content max-[1000px]:text-sm max-[550px]:text-xs my-4">This is where the content of the slide is going to be placed, it would elaborate more on the slide title</p>
                <div className="w-max max-[420px]:mx-auto">
                  <Md >The call to action</Md>
                </div>
              </div>
            </div>
            <div className="col-span-5 max-[420px]:col-span-12">
              <img src="/images/laptop.png" alt="" className="object-contain h-full w-full" />
            </div>
          </div>
          <div className="max-[890px]:hidden">
            
            <Slides.Sm />

            <div className="slide-item w-[350px] h-[200px] bg-orange-500 text-white rounded-3xl grid grid-cols-12 p-4">
              <div className="col-span-7 flex items-center">
                <div className="">
                  <div className="title text-base">The title of the slide is going to be here</div>
                  <p className="content my-2 text-xs">This is where the content of the slide is going to be placed</p>
                  <Sm>The call to action</Sm>
                </div>
              </div>
              <div className="col-span-5">
                <img src="/images/laptop.png" alt="" className="object-contain h-full w-full" />
              </div>
            </div>
          </div>
      </div>

      {/* <div className="shorts-container spacing">
        <Side gap="gap-4 max-[600px]:gap-3">
          {Array.from({length: 10}, (_, index) => 
            <div className="short h-[250px] w-[170px] max-[600px]:w-[120px] max-[600px]:h-[200px] overflow-hidden shadow bg-gray-200 rounded-xl">
              <img src="/images/video.jpg" alt="" className="object-cover h-full w-full" />
            </div>
          )}
        </Side>
      </div> */}

      <div className="spacing">
        <Products.Shop/>
      </div>

      <ProductFilters initSearch={search} initShow={[visible, setVisible]} />

    </div>
  )
}

export default Shop