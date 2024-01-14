import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import NavBtn from "./SmlComponents/NavBtn";
import UserBtn from "./SmlComponents/Userbtn";
import classnames from "classnames";

const PageColors = [
  { link: "/", color: "bg-slate-700", initialColor: "bg-transparent" },
  { link: "/signuppro", color: "bg-slate-700", initialColor: "bg-transparent" },
];

export default function Navbar() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");
  const [choice, setType] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const pageOption = PageColors.find((val) => val.link === pathname) || {
    link: "",
    color: "bg-slate-700",
    initialColor: "bg-slate-700",
  };

  console.log(pageOption);

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
        return <NavBtn button="Providers" route="signuppro" />;
      case "contributor":
        return (
          <>
            <NavBtn button="Providers Page" route="providerpage" />
            <NavBtn button="Portal" route="signupcon" />
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
          "md:flex md:justify-between md:items-center md:pl-52 md:pr-52 md:px-4 md:py-0 text-white transition-all duration-300",
          {
            [`py-6 shadow-lg ${pageOption.color}`]: scrolled,
            [pageOption.initialColor]: !scrolled,
          }
        )}
      >
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
          <NavBtn button="Image Slider" />
          <NavBtn button="Profile Keys" />
          <NavBtn button="Items Display" />
          <NavBtn button="About Us" route="aboutus" />
          {navOptions}
          <Link className="cursor-pointer block px-2 py-1 text-white font-semibold rounded hover:bg-indigo-600  md:ml-4">
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
