import React from "react";
import bg from "../assets/bg.png";
import doctor from "../assets/doc.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuth=useSelector((state)=>state.auth.isAuthenticated)
  const navigate = useNavigate();
  const getReportHandler = (event) => {
    navigate("/form");
  };
  const getReportHistory=()=>{
navigate('/reports')
  }
  return (
    <div className="bg-[#F7F7F7] border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="mx-auto max-w-screen-xl">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto h-full">
          <div className="w-full mx-auto overflow-y-hidden">
          <div className="my-0 md:my-8 md:py-0 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2 mt-16 sm:my-11">
              <div className="flex flex-col items-center w-full">
                <div className="w-auto h-full relative flex justify-center items-center">
                  <img src={bg} alt="" className="md:h-[500px] w-auto h-96" />
                  <div className="absolute sm:bottom-2 bottom-0 md:bottom-0 right-37 flex items-center justify-center">
                    <img
                      src={doctor}
                      alt=""
                      className=" md:h-[500px] h-96 w-auto"
                    />
                  </div>
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
              <div className="flex">
              <button
                onClick={getReportHandler}
                className="bg-[#2A8683] px-7 py-2 my-8 text-white rounded transition-all duration-300 hover:translate-y-1"
              >
                Get Report
              </button>
             {isAuth&& <button
                onClick={getReportHistory}
                className="bg-[#2A8683] px-7 py-2 my-8 ml-10 text-white rounded transition-all duration-300 hover:translate-y-1"
              >
                Report History
              </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
