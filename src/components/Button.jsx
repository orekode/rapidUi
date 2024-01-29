


export const Md = ({ children }) => {
  return (
    <div className="group relative bg-blue-500  text-white px-6 py-3 rounded-3xl w-max  max-[965px]:mx-auto overflow-hidden active:scale-90 transition-all duration-150">
        <button className="relative z-10 outline-none s">
            {children}
        </button>
        <div className="absolute z-0 top-0 left-0 h-full w-0 group-hover:w-full bg-red-500 transition-all duration-300"></div>
    </div>
  )
}
