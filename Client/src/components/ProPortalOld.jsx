import { Link } from "react-router-dom";

export default function ProPortalOld() {
  return (
    <div>
      <section className="text-gray-600 grid place-items-center mt-6 mb-6 ">
        <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-bold text-gray-900">
          Welcome Provider Portal
        </h1>
        <h2 className="mb-8 font-bold text-xl">
          What kind of service provider are you?
        </h2>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[47%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              CONTRACTOR
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[45%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              MANUFACTURER
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[49.5%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              RETAILER
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[46.5%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              WHOLESALER
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[48%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              GARDENER
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[45%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              CONSTRUCTION
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[50%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              ROOFER
            </h2>
          </Link>
        </div>
        <div className="p-3 w-[50%] flex flex-wrap justify-center">
          <Link
            to="/"
            className=" px-0 lg:px-[50%] bg-slate-600 transition-all hover:bg-indigo-500 hover:text-white cursor-pointer text-white w-fit m-0 hover:shadow-lg border-2 text-center border-gray-200 py-0 rounded-lg"
          >
            <h2 className=" title-font font-medium text-lg lg:text-2xl m-4 ">
              PAINTER
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
}
