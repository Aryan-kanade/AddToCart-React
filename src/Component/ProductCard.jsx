import { useCart } from "../Context/CartContext";

export default function ProductCard({ item }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="border rounded-2xl">

        <div className="w-55 h-40">
          <img
            className="rounded-t-2xl w-full h-full object-cover"
            src={item?.image}
            alt={item?.title}
          />
        </div>

        <div className="border-t pt-4 p-4">

          <h2 className="text-lg font-bold mb-4">
            {item?.title}
          </h2>

          <div className="flex justify-between mb-2">
            <span className="font-medium">Size</span>
            <span>{item?.size || "N/A"}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="font-medium">Color</span>
            <span>{item?.color || "N/A"}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="font-medium">Price</span>
            <span>${item?.price}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Add To Cart
          </button>

        </div>

      </div>
    </div>
  );
}