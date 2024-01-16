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
      <div>
        <h>Items for Sale</h>
        <p>Add them to cart and then view the cart</p>
      </div>
      <div className="flex gap-10 m-40 place-items-center justify-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItemComp
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                productImage={product.productImage}
              />
            );
          }
        })}
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
