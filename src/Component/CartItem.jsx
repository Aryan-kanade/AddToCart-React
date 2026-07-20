import { useCart } from "../Context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="flex gap-4 border rounded-2xl p-4">
      <div className="flex gap-4">

        <img
          src={item.image}
          alt={item.title}
          className="w-32 h-32 object-cover rounded-lg"
        />

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">{item.title}</h1>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id,
                })
              }
              className="text-red-500"
            >
              ✕
            </button>
          </div>

          <div className="flex justify-between">
            <span>Size</span>
            <span>{item.size || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span>Color</span>
            <span>{item.color || "N/A"}</span>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="font-bold">${formatPrice(item.price)}</h2>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  dispatch({
                    type: "DECREMENT",
                    payload: item.id,
                  })
                }
                className="px-2 py-1 border rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch({
                    type: "INCREMENT",
                    payload: item.id,
                  })
                }
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}