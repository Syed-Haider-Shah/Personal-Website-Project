import { Link } from "react-router-dom";

export default function ConPortal() {
  return (
    <div>
      <section className=" text-gray-600 grid place-items-center mt-6 mb-6 ">
        <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-bold text-gray-900">
          Welcome to Contributor's Portal
        </h1>
        <h2 className="mb-8 font-bold text-xl"></h2>
        <div className=" text-gray-600 flex items-center px-10 mt-6 mb-6">
          <Link className="pb-12 hover:-translate-y-5 border-2 text-center hover:border-indigo-700 border-gray-200 -translate-x-10 bg-white text-slate-600 w-96 min-h-[10rem] hover:shadow-lg rounded-md overflow-hidden">
            <img
              src="/src/components/Images/back4.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="p-5 flex-col gap-3">
              <div className="justify-center flex items-center gap-2">
                <h2 className="title-font font-bold text-lg lg:text-2xl text-gray-900">
                  INSPIRATION
                </h2>
              </div>
              <p1>
                Collaborate with fellow contributors to craft innovative
                template designs that can inspire and guide homeowners in their
                creative endeavors.
              </p1>
            </div>
          </Link>
          <Link className="hover:-translate-y-5 border-2 text-center hover:border-indigo-700 border-gray-200 translate-x-10 bg-white text-slate-600 w-96 min-h-[10rem] hover:shadow-lg rounded-md overflow-hidden">
            <img
              src="/src/components/Images/back1.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="p-5 flex-col gap-3">
              <div className="justify-center flex items-center gap-2">
                <h2 className="title-font font-bold text-lg lg:text-2xl text-gray-900">
                  DYI
                </h2>
              </div>
              <p1>
                Empower homeowners to take charge of their own home improvement
                projects by providing comprehensive guides and tutorials that
                simplify the process and enable them to confidently tackle home
                repairs and renovations.
              </p1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
