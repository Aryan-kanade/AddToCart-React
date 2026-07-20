import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { state } = useCart();

  const totalItems = state.cartItem.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="grid grid-cols-3 items-center p-4">
      {/* Logo */}
      <h2 className="bg-yellow-500 text-white font-bold text-center p-2 rounded">
        Interstellar Store
      </h2>
        
    <div></div>
        
      <div className="flex items-center gap-2 justify-self-end">
        {totalItems > 0 && (
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white text-sm font-semibold">
            {totalItems}
          </span>
        )}

        <i
          onClick={() => navigate("/cart")}
          className="bx bx-shopping-bag text-2xl cursor-pointer"
        ></i>
      </div>
    </header>
  );
}