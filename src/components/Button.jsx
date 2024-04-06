


export const Md = ({  baseColor="bg-blue-500", hoverColor="bg-red-500", width="w-max", contentClass="", children, ...props }) => {
  return (
    <div className={`group relative ${baseColor}  text-white px-6 py-3 rounded-3xl ${width}  max-[965px]:mx-auto overflow-hidden active:scale-90 transition-all duration-150 shadow-xl`} {...props}>
        <button className={`relative z-10 outline-none ${contentClass}`}>
            {children}
        </button>
        <div className={`absolute z-0 top-0 left-0 h-full w-0 group-hover:w-full ${hoverColor} transition-all duration-300`}></div>
    </div>
  )
}

export const Sm = ({ baseColor="bg-blue-500", hoverColor="bg-red-500", width="w-max", contentClass="", children, ...props }) => {
  return (
    <div className={`group relative ${baseColor}  text-white px-4 py-1.5 rounded-3xl ${width}  max-[965px]:mx-auto overflow-hidden active:scale-90 transition-all duration-150 shadow-xl`} {...props}>
        <button className={`relative z-10 outline-none ${contentClass}`}>
            {children}
        </button>
        <div className={`absolute z-0 top-0 left-0 h-full w-0 group-hover:w-full ${hoverColor} transition-all duration-300`}></div>
    </div>
  )
}
