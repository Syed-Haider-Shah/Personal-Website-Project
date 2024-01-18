import { PRODUCTS } from "../constants/products";
import { useContext } from "react";
import { ShopContext } from "./SmlComponents/ShopContext";
import CartItemComp from "./SmlComponents/CartItemComp";
import { Link } from "react-router-dom";
import EmptyCartCard from "./SmlComponents/EmptyCartCard";

const Cart = () => {
  const { cartItems, getTotalCartAmount, getSingleTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalSingle = getSingleTotalCartAmount();
  console.log(totalSingle);
  return (
    <div className="overflow-hidden">
      {totalAmount > 0 ? (
        <div className="flex w-full bg-white h-full">
          <div className="w-[60%] flex flex-col m-40 place-items-center justify-center">
            <div className=" font-bold mb-10 text-gray-400 justify-center flex gap-56">
              <div className="translate-x-10">PRODUCT</div>
              <div className="translate-x-[4.2rem]">PRICE</div>
              <div className="translate-x-10">QTY</div>
              <div className="translate-x-2">TOTAL</div>
            </div>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return (
                  <CartItemComp
                    key={product.id}
                    id={product.id}
                    productName={product.productName}
                    price={product.price}
                    productImage={product.productImage}
                    alt={product.alt}
                    itemNumber={product.itemNumber}
                    description={product.description}
                    total={totalSingle[product.id]}
                  />
                );
              }
            })}
          </div>
          <div className="w-[40%] bg-cartColor flex flex-col gap-24 items-center py-40">
            <div className="bg-slate w-[70%] h-2 shadow-md"></div>
            <div className="flex items-start flex-col gap-2 w-[60%]">
              <div className=" flex items-center gap-5">
                <div className="text-sm">CART TOTAL :</div>
                <div className="font-medium text-lg">
                  ${totalAmount.toFixed(2)}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Shipping & taxes calculated at checkout
              </div>
            </div>
            <div className="w-[60%]">
              <div className="flex gap-5 items-center">
                <input
                  className="cursor-pointer h-4 w-4"
                  type="checkbox"
                ></input>
                <div className="flex gap-1">
                  <div>I agree to</div>
                  <Link className=" text-red-400">Terms & Condition</Link>
                </div>
              </div>
            </div>
            <div className="pb-20 w-[60%]">
              <div className="flex flex-col gap-5">
                <Link
                  className="shadow-md bg-slate font-medium flex gap-2 text-white items-center rounded-full p-2 px-4 w-52"
                  to="/itemdisplay"
                >
                  <div className="text-sm ">CONTINUE SHOPPING</div>
                  <div>
                    <i className=" p-1 fa-solid fa-bag-shopping"></i>
                  </div>
                </Link>
                <button className="shadow-md bg-white font-medium flex gap-2 text-slate items-center rounded-full p-2 px-4 w-52">
                  <div className="text-sm ">CHECKOUT</div>
                  <div>
                    <i className="fa-solid fa-right-from-bracket p-1"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" h-screen flex flex-col items-center justify-center">
          <div className="bg-cartColor h-[50%] w-screen"></div>
          <div className="bg-white h-[50%] w-screen"></div>
          <div className="absolute h-[65%] w-96 shadow-2xl drop-shadow-2">
            <EmptyCartCard />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
