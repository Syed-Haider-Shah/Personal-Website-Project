import { PRODUCTS } from "../constants/products";
import { useContext } from "react";
import { ShopContext } from "./SmlComponents/ShopContext";
import CartItemComp from "./SmlComponents/CartItemComp";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <div className="flex w-full bg-white h-full">
        <div className="w-[60%] flex flex-col gap-10 m-40 place-items-center justify-center">
          <div className=" font-bold text-gray-400 justify-center flex gap-56">
            <div className="translate-x-10">PRODUCT</div>
            <div className="translate-x-[3.2rem]">PRICE</div>
            <div className="translate-x-8">QTY</div>
            <div className="translate-x-5">TOTAL</div>
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
                />
              );
            }
          })}
        </div>
        <div className="w-[40%] bg-cartColor"></div>
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount.toFixed(2)}</p>
          <Link to="/itemdisplay">Continue Shopping</Link>
          <button>Checkout</button>
        </div>
      ) : (
        <h1> Your Cart is Empty</h1>
      )}
    </>
  );
};
export default Cart;
