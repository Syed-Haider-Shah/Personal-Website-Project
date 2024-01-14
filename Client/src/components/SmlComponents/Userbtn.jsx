import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import NavBtn from "./NavBtn";
import { useState } from "react";

export default function UserBtn({ button, route }) {
  const nav = useNavigate();
  const logOut = async () => {
    Cookies.remove("email");
    await nav("/");
  };
  const [dropdown, showDropdown] = useState(false);

  return (
    <div className="">
      <div
        onClick={() => showDropdown((val) => !val)}
        className="flex items-center w-96"
      >
        <NavBtn button={button} />
      </div>
      <div
        className={` mt-2 absolute bg-white w-[7rem] flex-col shadow-lg rounded-lg ${
          dropdown ? "block" : "hidden"
        }`}
      >
        <Link className="transition-all block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:py-4 md:px-4">
          Profile
        </Link>
        <Link className="transition-all block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:py-4 md:px-4">
          Orders
        </Link>
        <div
          className="transition-all cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:py-4 md:px-4"
          onClick={logOut}
        >
          Log Out
        </div>
      </div>
    </div>
  );
}
