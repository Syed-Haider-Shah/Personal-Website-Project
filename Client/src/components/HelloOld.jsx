import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export default function HelloOld() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      await axios
        .post("reno-pilot.vercel.app/hello", {
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

  return (
    <div>
      <section className="text-gray-600 grid place-items-center mt-6 mb-6 ">
        <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-medium text-gray-900">
          Hello 👋 {name}
        </h1>
        <h2 className="mb-8 font-bold text-xl">
          {" "}
          Now you're logged-in, where would you like to go?
        </h2>
        <div className="p-4  w-full flex flex-wrap justify-center">
          <Link
            to="/orders"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-arrow-right text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Start Here
            </h2>
          </Link>
          <Link
            to="/orders"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-pen text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Design
            </h2>
          </Link>
          <Link
            to="/cart"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-file text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Projects
            </h2>
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-users text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Providers
            </h2>
          </Link>
        </div>
      </section>
      <section className="text-gray-600 grid place-items-center mt-6 mb-6 ">
        <div className="p-4  w-full flex flex-wrap justify-center">
          <Link
            to="/orders"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Inspiration
            </h2>
          </Link>
          <Link
            to="/cart"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-comment-dollar text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900 px-5">
              Cost
            </h2>
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-brands fa-youtube text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900 px-4">
              DIY
            </h2>
          </Link>
          <Link
            to="/orders"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-box text-3xl lg:text-5xl"></i>
            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-gray-900">
              Products
            </h2>
          </Link>
        </div>

        <button
          onClick={logOut}
          className="ml-4  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
        >
          Log Out
        </button>
      </section>
    </div>
  );
}
