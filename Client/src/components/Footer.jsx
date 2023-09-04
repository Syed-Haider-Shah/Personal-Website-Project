import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Pricing
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    View plans
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Why premium?
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Why ultimate?
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Teams
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Policy
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT US :
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <Link to={"/contact"}>
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Contact Form
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 ">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col md:justify-between ">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ">
              <img
                className="h-8 md:h-20  md:mt-1 md:mb-1"
                src="/src/components/Images/logo.png"
                alt=""
              />
            </a>
            <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4  justify-end">
              © 2023 Reno Pilots
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
