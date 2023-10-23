import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

//YO cardHeight is 10rem
export default function Hello() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      await axios
        .post("http://127.0.0.1:8000/hello", {
          cookieValue,
        })
        .then((res) => {
          setName(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    submit();
  }, [cookieValue]);

  const logOut = () => {
    Cookies.remove("email");
  };
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);
  const [isHovering8, setIsHovering8] = useState(false);

  return (
    <div className="">
      <section className="mt-10 flex flex-col">
        <h1 className="flex justify-center title-font sm:text-4xl  text-3xl mb-4 font-medium text-gray-900">
          Hello 👋 {name}
        </h1>
        <h2 className="flex justify-center mb-8 font-bold text-xl">
          {" "}
          Now you're logged-in, where would you like to go?
        </h2>
      </section>
      <section className="flex justify-evenly px-96 mt-6 mb-6 flex-wrap">
        <Link
          className=" bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering1(true)}
          onMouseLeave={() => setIsHovering1(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering1 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Review the RenoPilot process-from idea to finding a contractor.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-arrow-right text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Start Here
            </h2>
          </div>
        </Link>
        <Link
          className="bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering2(true)}
          onMouseLeave={() => setIsHovering2(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering2 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Use RenoPilot's Design App to inject your own flair into your
              project.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-pen text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Design
            </h2>
          </div>
        </Link>
        <Link
          className="bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering3(true)}
          onMouseLeave={() => setIsHovering3(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering3 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Explore a huge list of projects and RenoPilot's support (Design
              app, Cost app, etc) for each.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-file text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Projects
            </h2>
          </div>
        </Link>
        <Link
          className="bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering4(true)}
          onMouseLeave={() => setIsHovering4(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering4 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Search RenoPilot's Provider's database to find manufacturer,
              retailers, contractors and more.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-users text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Providers
            </h2>
          </div>
        </Link>
      </section>
      <section className="flex justify-evenly px-96 mt-6 mb-6 flex-wrap">
        <Link
          className=" bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering5(true)}
          onMouseLeave={() => setIsHovering5(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering5 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Explore real life examples of completed projects.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-wand-magic-sparkles text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Inspiration
            </h2>
          </div>
        </Link>
        <Link
          className="bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering6(true)}
          onMouseLeave={() => setIsHovering6(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering6 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Use RenoPilot's Cost App to estimate the potential cost of the
              project.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-comment-dollar text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Cost
            </h2>
          </div>
        </Link>
        <Link
          className="bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering7(true)}
          onMouseLeave={() => setIsHovering7(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering7 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Explore RenoPilot's Library of videos and papers which explain how
              you can build your project.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-brands fa-youtube text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              DIY
            </h2>
          </div>
        </Link>
        <Link
          className="bg-white h-[10rem] w-[13rem] overflow-hidden cursor-pointer text-center border-2 border-gray-200 rounded-lg"
          onMouseEnter={() => setIsHovering8(true)}
          onMouseLeave={() => setIsHovering8(false)}
          to="/"
        >
          <div
            className={`px-1 flex flex-col text-bold justify-center absolute bg-indigo-600 transition-all duration-300 w-[13rem] rounded-lg overflow-hidden shadow-lg ${
              isHovering8 ? "h-[10rem]" : "h-[0rem]"
            }`}
            to="/"
          >
            <div className=" m-2 text-white text-1xl">
              Search products available for your project from manufacturers and
              retailers.
            </div>
          </div>
          <div className="text-slate-700 pt-8">
            <i className="fa-solid fa-box text-3xl lg:text-5xl "></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Products
            </h2>
          </div>
        </Link>
      </section>
      <section className="flex justify-center px-40 mt-6 mb-6">
        <button
          onClick={logOut}
          className="ml-4 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
        >
          Log Out
        </button>
      </section>
    </div>
  );
}
