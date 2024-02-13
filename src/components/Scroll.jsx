import { ChevronLeft, ChevronRight } from "lucide-react"

export const Side = ({ children, gap="8" }) => {
  return (
    <div className="relative">
        <div className="flex-center h-[40px] w-[40px] rounded-full backdrop-blur-3xl bg-gray-200 dark:bg-black bg-opacity-50 top-1/2 left-3 -translate-y-1/2 absolute z-10">
            <ChevronLeft />
        </div>

        <div className="flex-center h-[40px] w-[40px] rounded-full backdrop-blur-3xl bg-gray-200 dark:bg-black bg-opacity-50 top-1/2 right-3 -translate-y-1/2 absolute z-10">
            <ChevronRight />
        </div>

        <div className="w-full overflow-x-scroll scrollbar-track-transparent scrollbar-none bg-opacity-10 relative z-0">
            <div className={`w-max flex gap-${gap}`}>
                {children}
            </div>
        </div>
    </div>
  )
}
