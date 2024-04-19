import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="bg-[#F7F7F7] border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="mx-auto max-w-screen-xl">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <div className="w-full mx-auto">
            <div className="my-0 md:my-8 md:py-0 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div className="md:w-1/2">
              <div className="grid w-full">
                {/* <img src={logo} alt="" /> */}
                <div className="flex justify-center items-center">
                  <div className="md:w-40 md:h-52 w-48 h-36  bg-[#2A8683] rounded-tl-full rounded-bl-full rotate-90"></div>
                </div>
                <div className="flex -mt-6">
                  <div className="md:w-64 md:h-52 w-48 h-36 bg-[#2A8683] rounded-tl-full rounded-bl-full"></div>
                  <div className="md:w-64 md:h-52 w-48 h-36 bg-[#2A8683] rounded-tl-full rounded-bl-full rotate-180"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="md:w-40 md:h-52 w-48 h-36 -mt-6 bg-[#2A8683] rounded-tl-full rounded-bl-full -rotate-90"></div>
                </div>
              </div>
              </div>

              {/* hero text  */}
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-[#00343C] md:w-3/4 leading-snug">
                  Health is Wealth, <br /> Nurturing Lives, <br /> Inspiring
                  Wellness
                </h1>
                <p className="text-[#606E70] text-base mb-8">
                  Medical professionals adhere to ethical standards and
                  guidelines, prioritizing patient safety, confidentiality, and
                  informed
                </p>
                <button className="bg-[#2A8683] px-7 py-2 my-8 text-white rounded transition-all duration-300 hover:translate-y-1">
                  Get Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
