import { useEffect, useState } from "react";
import { Ripple, Dropdown, initTE } from "tw-elements";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export default function Navbar() {
  //Used to initialise tailwind elements
  useEffect(() => {
    initTE({ Ripple, Dropdown });
  }, []);

  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      await axios
        .post("http://127.0.0.1:8000/account", {
          cookieValue,
        })
        .then((res) => {
          setName(res.data);
        })
        .catch(() => {});
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    submit();
  }, [cookieValue]);

  const [showMenu, setShowMenu] = useState(false); //for responsiveness ie phone display
  //just to toggle on and off
  const toggle = () => {
    setShowMenu(!showMenu);
  };

  const logOut = () => {
    Cookies.remove("email");
  };
  return (
    <div className="sticky top-0 z-50">
      {/*used md: for minimum width for phone*/}
      {/*header controls entire the nav*/}
      <header className="bg-slate-600 md:flex md:justify-between md:items-center md:pl-52 md:pr-52 md:px-4 md:py-0 ">
        {/*following code controls the left side of nav */}
        <div className="flex items-center justify-between px-0 py-1 md:p-0">
          <div className="w-96">
            {/* Clicking the logo takes you to the home page */}
            <Link to={"/"}>
              <img
                src="/src/components/Images/logo.png"
                alt="Logo"
                className=" w-full cursor-pointer md:mt-1 md:mb-1"
              />
            </Link>
          </div>
          {/* the following makes the cursor into hand when howered*/}
          <div className="md:hidden">
            <button onClick={toggle} className="text-white">
              <i className="cursor-pointer ml-3 mr-2 fa solid fa-bars scale-150"></i>
            </button>
          </div>
        </div>
        {/* nav bar children design, it form which is search bar and the search button and 3 other buttons*/}
        {/*nav tag controls the position of text on the right side in nav*/}
        <nav
          className={`  px-3 pt-1 pb-1 md:flex ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <form id="search-form">
            <div className="relative flex mx-auto text-gray-600 ">
              <div className=" relative md:w-64 w-80 md:mr-4 mr-2 ">
                {/*deign for search bar*/}
                <input
                  type="text"
                  placeholder="Search"
                  id="footer-field"
                  name="footer-field"
                  className="h-8 w-full bg-gray-100  rounded border border-gray-300 focus:ring-2  focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-0 pl-2 leading-8 transition-colors duration-400 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className=" text-white bg-indigo-500  px-4 focus:outline-none hover:bg-indigo-600  cursor-pointer  border-gray-200  border-solid rounded-lg ml-0"
              >
                <i className="fa-solid fa-magnifying-glass w-[20px]"></i>
              </button>
            </div>
          </form>

          {/* buttons on right*/}
          <Link
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            id="dropdownMenuButton"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
          >
            Projects
          </Link>
          <ul
            data-te-dropdown-menu-ref
            aria-labelledby="dropdownMenuButton"
            className="absolute z-[1000] float-right m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-base shadow-lg [&[data-te-dropdown-show]]:block"
          >
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/login"}
            >
              How does this work?
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Inspirations
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              DIY
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Get Started
            </Link>
          </ul>

          <Link
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            id="dropdownMenuButton"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
          >
            Designs
          </Link>
          <ul
            data-te-dropdown-menu-ref
            aria-labelledby="dropdownMenuButton"
            className="absolute z-[1000] float-right m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-base shadow-lg [&[data-te-dropdown-show]]:block"
          >
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Fences
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Doors
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Sofas
            </Link>
          </ul>

          <Link
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            id="dropdownMenuButton"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
          >
            Products
          </Link>
          <ul
            data-te-dropdown-menu-ref
            aria-labelledby="dropdownMenuButton"
            className="absolute z-[1000] float-right m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-base shadow-lg [&[data-te-dropdown-show]]:block"
          >
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Fences
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Doors
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Sofas
            </Link>
          </ul>
          <Link
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            id="dropdownMenuButton"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
          >
            Providers
          </Link>
          <ul
            data-te-dropdown-menu-ref
            aria-labelledby="dropdownMenuButton"
            className="absolute z-[1000] float-right m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-base shadow-lg [&[data-te-dropdown-show]]:block"
          >
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Maintenance
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Contractors
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:p-4"
              to={"/"}
            >
              Retailers
            </Link>
          </ul>
          <Link className="cursor-pointer block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700  md:ml-4">
            <i className="fa-solid fa-cart-shopping "></i>
          </Link>
          <h1
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            id="dropdownMenuButton"
            className=" cursor-pointer block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
          >
            {name}
          </h1>
          <ul
            data-te-dropdown-menu-ref
            aria-labelledby="dropdownMenuButton"
            className="absolute z-[1000] float-right m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-base shadow-lg [&[data-te-dropdown-show]]:block"
          >
            <Link
              className=" cursor-pointer block text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:py-4 md:px-4"
              to={"/profile"}
            >
              Profile
            </Link>
            <Link
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:py-4 md:px-4"
              to={"/"}
            >
              Orders
            </Link>
            <button
              className="cursor-pointer block px-2 py-1 text-gray-700 hover:text-white font-semibold rounded hover:bg-indigo-500 md:py-4 md:px-4"
              onClick={logOut}
            >
              Log Out
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}
