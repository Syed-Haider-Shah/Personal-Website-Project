import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Explore
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Inspiration
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Products
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Providers
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    DIY
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    RenoPilot TV
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    FAQs
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Become
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    A Provider
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    A Contributor
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Explanatory Videos
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Community
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Events
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Website terms of use
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Cookie preferences
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Careers
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    General Inquiries
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Commercial Questions
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Help
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 ">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col md:justify-between ">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ">
              <img style={{ width: "250px" }} src="public/logo.svg" alt="" />
            </a>
            <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4  justify-end">
              © 2023 RenoPilot. All rights reserved. Website by URSA Consulting
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
