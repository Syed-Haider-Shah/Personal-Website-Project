import { PRODUCTS } from "../constants/products";
import Product from "./SmlComponents/Product";
const ItemDisplay = () => {
  return (
    <>
      <div className="flex gap-10 m-40 place-items-center justify-center">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};
export default ItemDisplay;
