const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <>
      <div className="">
        <img src={productImage} />
        <div className="flex  flex-col items-center justify-center">
          <p className="font-bold">{productName}</p>
          <p>${price}</p>
        </div>
      </div>
    </>
  );
};
export default Product;
