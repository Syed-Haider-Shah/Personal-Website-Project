import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const CartItemComp = ({
  id,
  productName,
  price,
  productImage,
  alt,
  itemNumber,
  description,
}) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <div className=" w-full h-80">
        <div className=" w-full h-full">
          <div className="h-[60%] flex justify-between items-center">
            <div className="shadow-md h-full w-[25%] flex items-center justify-center rounded-lg bg-cartColor">
              <img
                className="drop-shadow-4 h-[80%]"
                alt={alt}
                src={productImage}
              />
            </div>
            <p className="text-md font-bold ">${price}</p>
            <div className="items-center h-8 w-24 justify-between flex gap-2">
              <button
                className=" font-bold text-xl"
                onClick={() => {
                  removeFromCart(id);
                }}
              >
                <i className="fa-regular fa-square-minus transition-all hover:text-2xl">
                  <div className="bg-red h-full w-full"></div>
                </i>
              </button>
              <input
                className="w-8 rounded text-center border-2 border-black"
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button
                className="font-bold text-xl"
                onClick={() => {
                  addToCart(id);
                }}
              >
                <i className="fa-regular fa-square-plus transition-all hover:text-2xl"></i>
              </button>
            </div>
            <p className="text-md font-bold ">${price}</p>
          </div>
          <div className=" h-[40%]">
            <div className="flex justify-center  mt-5 gap-0 flex-col items-start pl-4">
              <p className="font-bold text-lg">{productName}</p>
              <p className="font-medium text-sm text-gray-500">#{itemNumber}</p>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItemComp;
