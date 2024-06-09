import { Link } from "react-router-dom";
const EmptyCartCard = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="bg-cartColor w-full h-[40%]"></div>
      <div className="bg-white w-full h-[60%]"></div>
      <div className=" absolute gap-2 flex flex-col justify-center items-center bg-transparent w-full -translate-y-[96%] h-[100%]">
        <img
          src="cartEmpty3.png"
          alt="Empty Cart Image"
          className="bg-transparent h-[25%] w-[40%]"
        ></img>
        <div className="text-2xl font-medium drop-shadow-4">Empty Cart</div>
        <div className="mx-20 text-center mb-6">
          Looks like you haven't made your choice yet...
        </div>
        <Link
          to="/itemdisplay"
          className="bg-orange-700 shadow-md hover:shadow-xl text-white p-2 px-16 rounded"
        >
          Back to Items Display
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartCard;
