import { Info, Minus, Plus, Trash, X } from "lucide-react";
import { Button, Card } from "../components";
import { useCart } from "../store/general";




const Cart = () => {
    const {cart, toggle } = useCart((state) => state)
    return (
        <section className={`cart h-screen w-screen fixed ${ cart ? 'top-0' : 'top-[200vh]'} left-0 z-[50] p-12 transition-all duration-300`}>
            <div className="bg-white dark:bg-[#0e0e0e] max-w-[1200px] mx-auto shadow rounded-3xl p-12 max-[1200px]:px-6 py-3 relative z-10">

                <div className=" py-4 text-2xl">Cart</div>

                <div className=" flex gap-12 max-[1200px]:gap-6 max-[1000px]:flex-col">
                    <div className="border h-[80vh]  max-[1000px]:h-[60vh] overflow-y-scroll scrollbar-thin rounded-3xl w-[700px] max-[1200px]:w-[650px] max-[1070px]:w-[600px]  max-[1000px]:w-full p-6">
                        {Array.from({length: 10}, (_, index) => 
                            <Card.CartItem />
                        )}
                    </div>

                    {/* Summary box */}
                    <div className="border py-6 px-3 flex-grow rounded-3xl h-max ">
                        <div className="text-3xl px-3 mb-3">Total</div>
                        <div className="flex justify-between items-center p-3 my-1.5 border rounded-3xl ">
                            <span>Sub-total</span>
                            <span>
                                <span className="text-xs">Ghc</span><span>1200</span>
                            </span>
                        </div>
                        <div className="flex justify-between items-center p-3 my-1.5 border rounded-3xl">
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
                        <Button.Md width="w-full text-center mt-3">Proceed to checkout</Button.Md>
                    </div>
                </div>
                
                {/* Close button */}
                <div onClick={toggle} className="absolute -top-5 -right-5 h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white">
                    <X />
                </div>

            </div>

            {/* Background overlay */}
            <div className={`bg-black ${ cart ? ' backdrop-blur bg-opacity-20' : 'bg-opacity-0'} absolute h-full w-full top-0 left-0 z-0 transition-all duration-700 delay-300`}>

            </div>
        </section>
    )
}


export default Cart;