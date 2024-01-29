import { useState, useEffect } from "react";
import RedIcon from "../CustomIcons/RedIcon.jsx";
import PurpleIcon from "../CustomIcons/PurpleIcon.jsx";
import GreenIcon from "../CustomIcons/GreenIcon.jsx";

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
    <div className="mb-40">
      <section className="h-screen">
        <div
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          className="absolute inset-0 "
        >
          <img
            src="/pic6.jpg"
            alt="Home Page Image"
            className="w-full h-[90%] object-cover bg-homeColor/80"
          />
          <div
            className={`absolute top-[32%] left-[52%] transform -translate-x-[55%] bg-transparent text-center z-10`}
          >
            <h1 className="drop-shadow-2 text-3xl md:text-6xl font-bold text-white font-outline-">
              ONE-STOP-SHOP FOR
            </h1>
            <h1 className="drop-shadow-2 text-xl md:text-5xl font-bold text-white font-outline-">
              HOMEOWNERS & PROVIDERS
            </h1>
          </div>
        </div>
      </section>
      <section className=" md:translate-y-0 -translate-y-96">
        <div
          className="relative w-[96%] left-[2%] right-[2%] -mt-80 rounded-lg z-10 pb-32 bg-white"
          style={{
            borderRadius: "irem",
            /* The box shadow profile is for shadow over the grey box ordered in Top - bottom (0, 0, 0) is the RGB*/
            boxShadow:
              "0px -20px 30px rgba(0, 0, 0, 0.6), 0px 20px 30px rgba(0, 0, 0, 0.5), 10px 10px 20px rgba(0, 0, 0, 0), -10px 10px 20px rgba(0, 0, 0, 0)",
          }}
        >
          <section className="pt-28">
            <p className="drop-shadow- text-[1.65rem] text-black/60 text-center font-light mx-[27rem]">
              Welcome to RenoPilot powered by React, MongoDB, Tailwind CSS, and
              Express. It is dockerized and deployed on Vercel. An overview of
              all the features on this website is presented below, have a read
              before getting started. Additionally, the website has three
              different types of users, each with access to different pages.
            </p>
            <div className=" text-lg h-full w-full flex justify-center gap-8 mt-40">
              <div className=" flex flex-col w-[25%] items-center gap-10">
                <RedIcon />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h1 className=" text-slate font-bold text-xl">HOME OWNER</h1>
                  <p1 className="text-lg text-black/60 text-center font-light">
                    Homeowners are customers in search of services and service
                    providers. They have access to a welcome page, they will get
                    redirected to this page once they logged in or signed up to
                    the website. They also have access to Provider's Page, which
                    lists all the services that are available.
                  </p1>
                </div>
              </div>
              <div className=" flex flex-col w-[25%] items-center gap-10">
                <PurpleIcon />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h1 className=" text-slate font-bold text-xl">PROVIDER</h1>
                  <p1 className="text-lg text-black/60 text-center font-light">
                    Providers are user that cater to Homeowners needs. Provider
                    has access to their Portal Page, which they will get
                    redirected to once they are logged in or signed up, they
                    also have option to visit their Portal via the navbar.
                    Unlike the other two users, provider doesn't have access to
                    the Provider's Page.
                  </p1>
                </div>
              </div>
              <div className=" flex flex-col w-[25%] items-center gap-10">
                <GreenIcon />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h1 className=" text-slate font-bold text-xl">CONTRIBUTOR</h1>
                  <p1 className="text-lg text-black/60 text-center font-light">
                    Contributors are users who want to contribute to the website
                    itself. Their work is supposed to show up on DIY page. As of
                    now, DIY page has not been implemented to the website yet.
                    Contributor has access to Provider's Page and to the
                    Contributor's Portal page. Which they get redirected to
                    similar to other users.
                  </p1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Background;
