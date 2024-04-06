import { useEffect, useState } from 'react'
import { Md, Sm } from '../components/Button'
import { Side } from '../components/Scroll'
import { Products } from '../groups'
import { PopularCircle } from '../components/Categories'
import { Filter, FilterX, ListFilter, Search } from 'lucide-react'
import ProductFilters from '../groups/ProductFilters'
import { Slides } from '../components'
import { debounce } from 'lodash'
import { useParams } from 'react-router-dom'
import { decrypt } from '../utils/encryption'

const ShopCategory = () => {

  const {id} = useParams();

  const [ search, setSearch ] = useState('');

  return (
    <div>

      <div className="spacing">

        <div className="search-box flex gap-3">
          <div className="input border dark:border-[#444] w-full rounded-3xl ">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='type your search here...' className='w-full h-full bg-transparent px-6 rounded-3xl' />
          </div>
          <div className="filter dark:border-[#444] bg-blue-600 hover:bg-red-600 active:scale-90 text-white w-[50px] h-[50px] rounded-full flex-center">
            <Search />
          </div>
        </div>

        <div className="mt-3">
            <Products.Shop filters={{ categories: { $contains: [`{${decrypt(id)}}`] }, name: { $contains: search } }}/>
        </div>

      </div>


    </div>
  )
}

export default ShopCategory