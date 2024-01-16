import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const CartItemComp = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <div className="">
        <img src={productImage} />
        <div className="flex gap-1 flex-col items-center justify-center">
          <p className="font-bold text-lg">{productName}</p>
          <p className="text-md">${price}</p>
          <div className="countHandler">
            <button
              onClick={() => {
                removeFromCart(id);
              }}
            >
              -
            </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              onClick={() => {
                addToCart(id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItemComp;
