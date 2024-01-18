import { useState } from "react";
import { Link } from "react-router-dom";

const HelloPageCard = ({ icon, text, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Link
        className=" mt-5 bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg shadow-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        to="/"
      >
        <div
          className={`flex flex-col -translate-x-[0.1rem] -translate-y-[0.1rem] text-bold justify-center absolute bg-homeColor transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
            isHovering ? "h-[10rem]" : "h-[0rem]"
          }`}
          to="/"
        >
          <div className=" m-2 text-white text-1xl">{text}</div>
        </div>
        <div className="text-slate-700 pt-8 text-3xl lg:text-5xl">
          <i className={icon}></i>
          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
            {title}
          </h2>
        </div>
      </Link>
    </>
  );
};
export default HelloPageCard;
