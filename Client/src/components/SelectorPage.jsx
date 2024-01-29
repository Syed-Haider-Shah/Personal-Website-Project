import { Link } from "react-router-dom";

export default function Selector() {
  return (
    <div>
      <section className="text-gray-600 grid place-items-center mt-6 mb-6 ">
        <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-bold text-gray-900">
          Welcome Patron
        </h1>
        <h2 className="mb-8 font-bold text-xl">
          Who would you like to register as?
        </h2>
        <div className="p-4 w-full flex flex-wrap justify-center">
          <Link
            to="/signupho"
            className=" shadow-lg transition-all duration-500 hover:bg-homeColor hover:text-white cursor-pointer text-slate-600 hover:m-0 w-fit m-4 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-house-user text-3xl lg:text-5xl"></i>
            <h2 className=" title-font font-medium text-lg lg:text-2xl mt-4 ">
              HOMEOWNER
            </h2>
            <p>I&apos;m looking for services to improve my home.</p>
          </Link>
          <Link
            to="/signuppro"
            className="shadow-lg transition-all duration-500 hover:bg-homeColor hover:text-white cursor-pointer text-slate-600 m-4 hover:m-0 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-hammer text-3xl lg:text-5xl"></i>
            <h2 className=" title-font font-medium text-lg lg:text-2xl mt-4 ">
              PROVIDER
            </h2>
            <p>I&apos;m looking for customers for my services.</p>
          </Link>
          <Link
            to="/signupcon"
            className="shadow-lg transition-all duration-500 hover:bg-homeColor hover:text-white cursor-pointer text-slate-600 w-fit m-4 hover:m-0 hover:shadow-lg border-2 text-center  border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            <i className="fa-solid fa-file text-3xl lg:text-5xl"></i>
            <h2 className=" title-font font-medium text-lg lg:text-2xl mt-4 ">
              CONTRIBUTOR
            </h2>
            <p>I&apos;m just here to help around in the website.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
