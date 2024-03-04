

import {} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ meta, setPage=()=>{} }) => {

    const handleNextPage = () => {
        const next_page = meta.current_page + 1;
        setPage( next_page > meta.last_page ? meta.last_page : next_page );
    }

    const handlePrevpage = () => {
        const prev_page = meta.current_page - 1;
        setPage( prev_page <= 0 ? 1 : prev_page);
    }

    if(meta)
        return (
            <div>
                <div className="my-3">
                    <div className="flex items-center justify-end gap-3">
                        <div onClick={handlePrevpage} className="h-[45px] w-[45px] rounded-full border shadow cell-center hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-200 active:scale-90">
                            <ChevronLeft />
                        </div>

                        {meta.links.slice(1, meta.links.length - 1).map( item => 
                            <div onClick={() => setPage(item.label)} key={item.label} className={` ${item.label == meta.current_page ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-[#333]' } h-[45px] w-[45px] rounded-full border shadow cell-center transition-all duration-200 active:scale-90`}>
                                {item.label}
                            </div>
                        )}

                        <div onClick={handleNextPage} className="h-[45px] w-[45px] rounded-full border shadow cell-center hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-200 active:scale-90">
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Pagination