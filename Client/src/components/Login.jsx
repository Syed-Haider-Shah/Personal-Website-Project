import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  return (
    <div className="">
      <form action="POST" method="/login">
        <section className="text-gray-600 body-font relative grid place-items-center py-32">
          <div className="absolute inset-0 bg-gray-300"></div>

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font flex">
              <p className="pr-1 ">Welcome Back</p>
              <i className="fa-regular fa-face-smile fa-bounce text-black bottom-0 "></i>{" "}
              <p className="pl-1 ">!</p>
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Username or Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <ReCAPTCHA
              className="py-5"
              sitekey="6LdjJfMnAAAAAJA8J2HzOhrQrocs83XUzjBA8IQp"
            />
            <input
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
              value="Log In"
            />

            <p className="text-base mt-3">Don't have an account?</p>
            <p className="text-base text-blue-700 mt-3">
              <Link to={"/signup"}>Register New Account</Link>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}
