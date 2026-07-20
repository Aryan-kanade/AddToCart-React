import CartSummary from "../Component/CartSummary";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartItem from "../Component/CartItem";

export default function Cart(){

    const navigate = useNavigate();
    const {state} = useCart();
    const {cartItem} = state;
    
    if (cartItem.length === 0 ){
        return(
            <div>
                <h1>Your store cart is empty!!!</h1>
                <button onClick={() => navigate("/")}>Go to home</button>
            </div>
        )
    }

    return(
        <div className="mx-auto my-8 w-full px-4 xl:my-10 xl:w-10/12">
           <div className="space-y-4">
                <div className="flex items-center text-sm xl:text-base">
                    <h1 className="cursor-pointer font-semibold text-gray-600 hover:underline" onClick={() => navigate("/")}>Home &gt;</h1>
                    <h2 className="ml-2 font-semibold">Cart</h2>
                </div>
                <h1 className="font-mono text-4xl xl:text-5xl">Your cart</h1>
            </div> 
            <div className="mt-8 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-7/12">
                {cartItem.map((item) => (
                    <CartItem key = {item.id} item={item}/>               
                     ))}
            </div>
                     <div className="w-full xl:w-5/12">
                        <CartSummary/>
            </div>
        </div></div>

    )
}