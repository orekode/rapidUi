import { Cpu } from "lucide-react";


const Loading = () => {

    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-70 backdrop-blur-sm z-[70] cell-center'>
            <div className="h-[40px] w-[40px] relative  rounded-full cell-center icon-loading">
                <div className="absolute top-0 left-0 h-[100%] w-[100%] rounded-full border-4 border-dashed border-blue-500 rotation">
                </div>
                <Cpu />
            </div>
        </div>
    );

};

export default Loading;