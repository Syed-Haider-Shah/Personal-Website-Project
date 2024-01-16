import { useState, useEffect } from "react";
import SmlText from "./SmlComponents/SmlText";
import Card1 from "./SmlComponents/Card1";
import { CheckList1, CheckList2, Options1 } from "../constants/portalCards";
import Card2 from "./SmlComponents/Card2";

const Background = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrolled2, setScrolled2] = useState(false);
  const [scrolled3, setScrolled3] = useState(false);

  useEffect(() => {
    const handleScroll1 = () => {
      const scrollTop = window.scrollY;
      const scrollBreakpoint = 100;
      const scrollBreakpoint2 = 500;
      const scrollBreakpoint3 = 800;
      /*
        scrollTop is how far down from the top the screen has scrolled.
        Alter scrollBreakpoint to adjust how far down the screen you want the event to trigger.
      */
      console.log(scrollTop);
      if (scrollTop > scrollBreakpoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (scrollTop > scrollBreakpoint2) {
        setScrolled2(true);
      } else {
        setScrolled2(false);
      }
      if (scrollTop > scrollBreakpoint3) {
        setScrolled3(true);
      } else {
        setScrolled3(false);
      }
    };
    window.addEventListener("scroll", handleScroll1);

    return () => window.removeEventListener("scroll", handleScroll1);
  }, []);

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
    <div className="overflow-x-hidden pb-40 bg-gray-100">
      <section className="h-screen">
        <div
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          className="absolute inset-0 "
        >
          <img
            src="/art11.jpg"
            alt="Background"
            className="w-full h-[90%] object-cover"
          />
          <div
            className={`absolute top-[41%] md:top-[22%] left-[52%] transform -translate-x-[55%] bg-transparent text-center z-10`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2">
              Provider&apos;s Portal
            </h1>
          </div>
          <div className="hidden md:block absolute top-[32%] left-[40%] transform -translate-x-[25%] bg-red- w-[50rem] text-center z-10">
            {/* Title */}
            <SmlText
              text={`Our mission is to make Providers' lives a little easier by helping
              Homeowners better understand their design, cost and product
              options before they engage with contractors, manufacturers and
              retailers.`}
              size="2"
            />
            <SmlText
              text={`We believe a Homeowner who creates their own design and
              understands the impact on project costs of their decisions will
              be a far better client than a Homeowner who has litle or no
              idea.`}
              size="2"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div
          className="relative w-[96%] left-[2%] right-[2%] -mt-80 rounded-lg z-10 bg-gray-200"
          style={{
            borderRadius: "irem",
            /* The box shadow profile is for shadow over the grey box ordered in Top - bottom (0, 0, 0) is the RGB*/
            boxShadow:
              "0px -20px 30px rgba(0, 0, 0, 0.6), 0px 20px 30px rgba(0, 0, 0, 0.5), 10px 10px 20px rgba(0, 0, 0, 0), -10px 10px 20px rgba(0, 0, 0, 0)",
          }}
        >
          <section className="flex-row flex-wrap bg-transparent flex items-center justify-center">
            <div
              className={`${
                scrolled
                  ? "bg-primary shadow-lg text-white"
                  : "bg-transparent text-transparent"
              }  pt-3 h-48 md:h-80 w-[80%] mt-[6rem] rounded-3xl flex justify-center transition duration-300`}
            >
              <div className="m-2 md:mt-16 bg-transparent text-center ">
                <h1 className=" p-2 text-2xl md:text-4xl font-bold drop-shadow-4">
                  Our goal is for Contractors to pre-qualify clients by simply
                  asking:
                </h1>
                <h1 className="pt-2 md:pt-8 text-xl md:text-3xl font-bold drop-shadow-4">
                  “Have you used RenoPilot to create a design for, or estimate
                  the cost of your project?”
                </h1>
              </div>
            </div>
            <div className="w-[100%] flex justify-center  items-center h-48 md:h-96">
              <div
                className={`${
                  scrolled2 ? "h-48 md:h-96" : "md:h-0"
                }  gap-8 overflow-hidden w-[80%] mt-20 rounded-3xl flex justify-center transition-all duration-700`}
              >
                <Card1
                  heading="What sort of Provider are you?"
                  checklist={CheckList1}
                />

                <Card1
                  heading="Which Service do you wish to use?"
                  checklist={CheckList2}
                />

                <Card2
                  heading="To become a Provider you must"
                  checklist={Options1}
                />
              </div>
            </div>
            <div
              className={`${
                scrolled3 ? "md:translate-x-0" : "md:-translate-x-[80rem]"
              } transition-all duration-700 mx-2 bg-transparent flex h-96 w-[200rem] mt-20 flex-wrap justify-center`}
            >
              <Card2
                heading="Already a Provider and want to make changes?"
                checklist={Options1}
              />
            </div>
            <div className="h-40"></div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Background;
