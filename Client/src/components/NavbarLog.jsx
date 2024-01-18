import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import NavBtn from "./SmlComponents/NavBtn";
import UserBtn from "./SmlComponents/Userbtn";
import classnames from "classnames";

const PageColors = [
  { link: "/", color: "bg-homeColor", initialColor: "bg-transparent" },
  { link: "/proportal", color: "bg-primary", initialColor: "bg-transparent" },
];

export default function Navbar() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");
  const [choice, setType] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const pageOption = PageColors.find((val) => val.link === pathname) || {
    link: "",
    color: "bg-homeColor",
    initialColor: "bg-homeColor",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollBreakpoint = 300;
      /*
        scrollTop is how far down from the top the screen has scrolled.
        Alter scrollBreakpoint to adjust how far down the screen you want the event to trigger.
      */
      if (scrollTop > scrollBreakpoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCookieValue = Cookies.get("email");
      if (updatedCookieValue !== cookieValue) {
        setCookieValue(updatedCookieValue);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cookieValue]);

  const navOptions = useMemo(() => {
    if (!cookieValue) return null;
    switch (choice) {
      case "provider":
        return <NavBtn button="Providers Portal" route="proportal" />;
      case "contributor":
        return (
          <>
            <NavBtn button="Providers Page" route="providerpage" />
            <NavBtn button="Portal" route="contributor" />
          </>
        );
      default:
        return <NavBtn button="Providers Page" route="providerpage" />;
    }
  }, [choice, cookieValue]);

  const submit = async () => {
    try {
      await axios
        .post("http://127.0.0.1:8000/account", {
          cookieValue,
        })
        .then((res) => {
          setName(res.data.name);
          setType(res.data.choice);
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

  return (
    <div className="sticky top-0 z-50">
      {/*used md: for minimum width for phone*/}
      {/*header controls entire the nav*/}
      <header
        className={classnames(
          "p-4 flex flex-col md:flex-row gap-6 md:gap-0 md:flex  md:justify-between md:items-center md:pl-52 md:pr-52 md:px-4 md:py-2 text-white transition-all duration-300 overflow-hidden",
          {
            [`py-6 shadow-lg ${pageOption.color}`]: scrolled,
            [pageOption.initialColor]: !scrolled,
          }
        )}
      >
        {/*following code controls the left side of nav */}
        <div className="flex items-center justify-between px-0 py-2 md:p-0">
          <div className="w-52">
            {/* Clicking the logo takes you to the home page */}
            <Link to={"/"}>
              <img
                src="/logo.svg"
                alt="Logo"
                aria-label="Website Logo"
                className=" w-full cursor-pointer md:mt-1 md:mb-1 drop-shadow-2"
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
          className={` flex-wrap gap-2 md:gap-0 flex-col pt-1 pb-1 flex md:flex md:flex-row  ${
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
                  className="h-8 w-full drop-shadow-3 bg-gray-100  rounded border border-gray-300 focus:ring-2  focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-0 pl-2 leading-8 transition-colors duration-400 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className=" text-white bg-lightSlate shadow-md  px-4 focus:outline-none hover:bg-slate  cursor-pointer  border-gray-200  border-solid rounded-lg mr-2"
              >
                <i className="fa-solid fa-magnifying-glass w-[20px]"></i>
              </button>
            </div>
          </form>

          {/* buttons on right*/}
          <NavBtn button="Image Slider" route="/slider" />
          <NavBtn button="Profile Keys" route="/profilekeys" />
          <NavBtn button="Items Display" route="/itemdisplay" />
          <NavBtn button="About Us" route="aboutus" />
          {navOptions}
          <Link
            to="/cart"
            className=" drop-shadow-2 cursor-pointer block px-2 py-1 text-white font-semibold rounded hover:bg-slate  md:ml-4"
          >
            <i className="fa-solid fa-cart-shopping "></i>
          </Link>
          {cookieValue == undefined && (
            <NavBtn button="Sign In" route="login" />
          )}

          {cookieValue != undefined && <UserBtn button={name} />}
        </nav>
      </header>
    </div>
  );
}
