import { Info, Minus, Plus, Trash, X } from "lucide-react";
import { Button, Card, Errors } from "../components";
import { useCart } from "../store/cart";
import { Link } from "react-router-dom";




const Cart = () => {
    const {show, items, toggle, total_quantity, total_price } = useCart((state) => state)
    return (
        <section className={`cart h-screen w-screen fixed ${ show ? 'top-0' : 'top-[200vh]'} left-0 z-[50] transition-all duration-300`}>

            <div className="bg-white dark:bg-[#0e0e0e]  max-w-[1350px] mx-auto shadow rounded-3xl relative z-10 p-3 px-4 max-[480px]:px-0 scale-95">

                <div className="flex justify-between max-[480px]:p-3 max-[480px]:pt-0 max-[480px]:pb-0">

                    <div className="flex gap-2 relative z-10">
                        <div className="flex justify-between items-center  rounded-3xl gap-3">
                            <span>Total</span>
                            <span>
                                <span className="text-xs">Ghc</span><span>{total_price}</span>
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

                <div className="h-[80vh] overflow-y-scroll   scrollbar-thin scrollbar-track-transparent dark:scrollbar-track-[#111] scrollbar-thumb-blue-700">
                    <div className="">
                        <div className="grid grid-cols-2 max-[830px]:grid-cols-1 gap-x-6 max-[1000px]:w-full">
                            {items.map((item, index) => 
                                <Card.CartItem key={index} item={item} />
                            )}
                        </div>
                        {items.length <= 0 &&
                        
                            <div className="mx-auto max-w-[500px]">
                                <Errors.Empty title='No Items In Cart' content={'Browse through our list of amaizing products and add products to cart now! '}/>
                            </div>
                        }
                    </div>
                </div>
                
                {items.length > 0 &&
                    <Link onClick={toggle} className='block flex-grow' to="/checkout">
                        <Button.Md width="w-full text-center mt-3 max-[480px]:scale-90">Proceed to checkout</Button.Md>
                    </Link>
                }

            </div>

            {/* Background overlay */}
            <div className={`bg-black ${ show ? ' backdrop-blur bg-opacity-20' : 'bg-opacity-0'} absolute h-full w-full top-0 left-0 z-0 transition-all duration-700 delay-300`}>

            </div>
        </section>
    )
}


export default Cart;