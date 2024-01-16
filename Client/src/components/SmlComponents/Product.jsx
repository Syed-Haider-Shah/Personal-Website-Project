import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const Product = ({ id, productName, price, productImage }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="">
        <img src={productImage} />
        <div className="flex gap-1 flex-col items-center justify-center">
          <p className="font-bold text-lg">{productName}</p>
          <p className="text-md">${price}</p>
          <button
            onClick={() => addToCart(id)}
            className="font-bold hover:text-slate-700 text-sm hover:bg-white border-2 border-slate-700 bg-slate-700 text-white p-1 px-3 transition-all shadow-lg rounded-full"
          >
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
