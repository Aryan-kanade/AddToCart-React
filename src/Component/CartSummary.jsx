import { useCart } from "../Context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function CartSummary() {
  const { state } = useCart();
  const { cartItem } = state;

  const totalItems = cartItem.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subTotal = cartItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subTotal * 0.2;
  const deliveryFee = 15;
  const total = subTotal - discount + deliveryFee;

  return (
    <div className="font-serif border rounded-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">
        Order Summary
      </h1>

      <div>
        <div>
          <p className="font-medium">Subtotal</p>
          <p>${subTotal}</p>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <p className="font-medium">Total Items</p>
          <p>{totalItems}</p>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <p className="font-medium"  >Discount (-20%)</p>
          <p>-${formatPrice(discount)}</p>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <p className="font-medium">Delivery Fee</p>
          <p>${deliveryFee}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <p className="font-medium">Total</p>
          <p className="font-bold">${formatPrice(total)}</p>
        </div>

      <button className="flex gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
        Go to Checkout
        <i className="bx bx-arrow-right text-2xl"></i>
      </button>
    </div>
  );
}