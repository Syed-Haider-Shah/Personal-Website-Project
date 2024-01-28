import { PRODUCTS } from "../constants/products";
import Product from "./SmlComponents/Product";
const ItemDisplay = () => {
  return (
    <div className="bg-gradient-to-tl to-white from-cartColor h-screen">
      <div className="ml-40 flex flex-col gap-2 translate-y-20">
        <h1 className=" text-4xl font-bold">ITEMS FOR SALE</h1>
        <p className="text-gray-500">
          Add them to cart and then view the cart.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 my-40 place-items-center justify-center">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.productName}
            price={product.price}
            productImage={product.productImage}
            description={product.description}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
};
export default ItemDisplay;
