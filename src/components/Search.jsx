


import { debounce } from 'lodash';
import { SearchIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Simple = ({ callback }) => 
{
    const [ search, set_search ] = useState({
        name: {
            $contains: ''
        },
    });

    const handleSearch = debounce((event) => {
        set_search({...search, 
            name: {
                $contains: event.target.value
            }
        });
    }, 300);

    useEffect(() => {
        callback(search);
    }, [search]);

    return (
        <div>
            <div className="search-box flex gap-3">
                <div className="input border border-neutral-400 dark:border-[#444] w-full rounded-3xl ">
                    <input onChange={handleSearch} type="text" placeholder='type your search here...' className='w-full h-full bg-transparent px-6 rounded-3xl' />
                </div>
                <div onClick={() => callback(search)} className="filter dark:border-[#444] bg-blue-600 hover:bg-red-600 active:scale-90 text-white w-[50px] h-[50px] rounded-full flex-center">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
