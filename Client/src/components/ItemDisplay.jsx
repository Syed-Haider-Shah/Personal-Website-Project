import { PRODUCTS } from "../constants/products";
import Product from "./SmlComponents/Product";
const ItemDisplay = () => {
  return (
    <>
      <div>
        <h>Items for Sale</h>
        <p>Add them to cart and then view the cart</p>
      </div>
      <div className="flex gap-10 m-40 place-items-center justify-center">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};
export default ItemDisplay;
