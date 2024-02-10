import { Info, Minus, Plus, Trash, X } from "lucide-react";
import { Button, Card } from "../components";
import { useCart } from "../store/general";




const Cart = () => {
    const {cart, toggle } = useCart((state) => state)
    return (
        <section className={`cart h-screen w-screen fixed ${ cart ? 'top-0' : 'top-[200vh]'} left-0 z-[50] pxy6-12 transition-all duration-300`}>



            <div className="bg-white dark:bg-[#0e0e0e]  max-w-[1200px] mx-auto shadow rounded-3xl relative z-10 p-3 px-4">

                <div className="flex justify-between">

                    <div className="flex gap-2 relative z-10">
                        <div className="flex justify-between items-center  rounded-3xl gap-3">
                            <span>Total</span>
                            <span>
                                <span className="text-xs">Ghc</span><span>1200</span>
                            </span>
                        </div>

                        <div className="flex justify-between items-center rounded-3xl gap-3">
                            <span>Delivery</span>
                            <div className="flex gap-1.5 items-center">
                                <span>
                                    <span className="text-xs">Ghc</span><span>1200</span>
                                </span>
                                <div >
                                    <Info className="text-blue-500" size={16}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Close button */}
                    <div onClick={toggle} className=" h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white">
                        <X />   
                    </div>

                </div>

                <div className="h-[80vh] overflow-y-scroll   scrollbar-thin">
                    <div className="">
                        <div className="   max-[1000px]:w-full">
                            {Array.from({length: 10}, (_, index) => 
                                <Card.CartItem />
                            )}
                        </div>
                    </div>
                </div>
                
                

                <Button.Md width="w-full text-center mt-3 ">Proceed to checkout</Button.Md>
            </div>


            {/* Background overlay */}
            <div className={`bg-black ${ cart ? ' backdrop-blur bg-opacity-20' : 'bg-opacity-0'} absolute h-full w-full top-0 left-0 z-0 transition-all duration-700 delay-300`}>

            </div>
        </section>
    )
}


export default Cart;