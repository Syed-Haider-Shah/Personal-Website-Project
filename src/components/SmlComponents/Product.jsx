import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const Product = ({
  id,
  productName,
  price,
  productImage,
  description,
  alt,
}) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="w-[350px] py-10 flex items-center flex-col flex-wrap bg-white shadow-lg">
        <img className="w-56" src={productImage} alt={alt} />
        <div className="flex gap-4 flex-col items-start w-full px-6 justify-center">
          <p className="font-bold text-lg">{productName}</p>
          <div className="flex justify-between gap-8 bg-white">
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-md text-green-700 font-medium flex justify-center items-center">
              ${price}
            </p>
          </div>

          <button
            onClick={() => addToCart(id)}
            className="font-bold hover:text-slate text-sm hover:bg-white border-2 border-slate bg-slate text-white p-1 px-3 transition-all shadow-lg rounded-full"
          >
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
