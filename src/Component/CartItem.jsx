import { useCart } from "../Context/CartContext";

export default function CartItem ({item}){
    const {dispatch} = useCart()
    return (
        <div className="flex gap-4 border rounded-2xl p-4">
            <div className="flex gap-4">
                <img  src={item.img} alt={item.name} />
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h1 >{item.name}</h1>
                        <i onClick={() => dispatch({type: "REMOVE_FROM_CART", payload : item.id})}></i>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Size</span>
                        <span>{item.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Color</span>
                        <span>{item.color}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>${item.price}</h1>
                        <div className="flex gap-2 items-center">
                            <i onClick={() => dispatch({type: "DECREMENT", payload: item.id})}></i>
                            <span>{item.quantity}</span>
                            <i onClick={() => dispatch({type: "INCREMENT", payload: item.id})}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}