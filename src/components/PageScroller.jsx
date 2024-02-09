

import { ChevronUp, MousePointer2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const PageScroller = () => {
  const [ position, setPosition ] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => { window.removeEventListener('scroll', handleScroll) };
  }, []);


  if(position > window.scrollHeight / 2)
  return (
    <div className="fixed bottom-5 right-10 z-50 flex-col flex-center max-[700px]:hidden">
        <span className="text-nowrap w-max">Back Top</span>
        <div className="rounded-3xl h-[45px] w-[45px] border-2 border-blue-600 border-dashed relative  animate-bg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 dark:hidden w-max h-max animate-obj">
                <MousePointer2 size={25} fill='#444' color='#444' strokeWidth={0.9} /> 
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 hidden dark:block  w-max h-max animate-obj">
                <MousePointer2 size={25} fill='#666' color='#666' strokeWidth={0.9} /> 
            </div>
        </div>
    </div>
  )
}

export default PageScroller