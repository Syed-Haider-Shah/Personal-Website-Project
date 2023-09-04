import React, { useState, useEffect } from "react";

const Background = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    /*Rate of scrolling*/
  }
  const parallaxOffset = scrollY * 0.3;

  return (
    <div>
      <section className="h-screen">
        <div
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          className="absolute inset-0 "
        >
          <img
            src="/src/components/Images/back5.jpg"
            alt="Background"
            className="w-full h-[90%] object-cover"
          />
          <div className="absolute top-[72%] left-[32%] transform -translate-x-[25%] bg-transparent text-center z-10">
            {/* Title */}
            <p1 className=" text-2xl text-white font-bol font-outline-">
              RenoPilot offers a suite of products for Homeowners undertaking
              property improvement or home renovation projects and for companies
              and individuals who provide the goods and services those projects
              require.
            </p1>
          </div>
          <div className="hidden w-96 absolute top-[30%] left-[45%] transform -translate-x-[25%] bg-transparent text-center z-10">
            <img
              src="/src/components/Images/fence-2.png"
              alt="fence"
              className=""
            />
          </div>
          <div className="absolute top-[15%] left-[52%] transform -translate-x-[55%] bg-transparent text-center z-10">
            <h1 className="text-5xl font-bold text-white font-outline-">
              ONE-STOP-SHOP FOR HOMEOWNERS, PROVIDERS & DIY-ERs
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-grey-500">
        <div
          className="relative w-[96%] left-[2%] right-[2%] -mt-40 h-screen rounded-lg z-10 mb-11 bg-slate-600"
          style={{
            borderRadius: "irem",
            /* The box shadow profile is for shadow over the grey box ordered in Top - bottom (0, 0, 0) is the RGB*/
            boxShadow:
              "0px -20px 30px rgba(0, 0, 0, 0.6), 0px 20px 30px rgba(0, 0, 0, 0.5), 10px 10px 20px rgba(0, 0, 0, 0), -10px 10px 20px rgba(0, 0, 0, 0)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Background;
