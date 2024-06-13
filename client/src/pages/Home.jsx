import React, { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import doctor from "../assets/doc.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clock from "../assets/clock.jpeg";
import accuracy from "../assets/accuracy.jpeg"
import range from "../assets/range.jpg"

const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const getReportHandler = (event) => {
    navigate("/form");
  };
  const getReportHistory = () => {
    navigate("/reports");
  };
  return (
    <>
      <div className="bg-[#F7F7F7] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="mx-auto max-w-screen-xl">
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto h-full">
            <div className="w-full mx-auto overflow-y-hidden">
              <div className="my-0 md:my-8 md:py-0 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div className="md:w-1/2 mt-16 sm:my-11">
                  <div className="flex flex-col items-center w-full">
                    <div className="w-auto h-full relative flex justify-center items-center">
                      <img
                        src={bg}
                        alt=""
                        className="md:h-[500px] w-auto h-96"
                      />
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
                  <h1 className="text-4xl font-semibold mb-4 text-[#00343C] md:w-3/4 leading-snug">
                    Empowering Hearts with Precision Analytics.
                  </h1>
                  <p className="text-[#606E70] text-base mb-8">
                    Welcome to HeartCare, where cutting-edge technology meets
                    compassionate care. Our mission is to empower individuals
                    like you to take control of your heart health through
                    advanced predictive analytics.
                  </p>
                  <div className="flex">
                    <button
                      onClick={getReportHandler}
                      className="bg-[#2A8683] px-7 py-2 my-8 text-white rounded transition-all duration-300 hover:translate-y-1"
                    >
                      Get Report
                    </button>
                    {isAuth && (
                      <button
                        onClick={getReportHistory}
                        className="bg-[#2A8683] px-7 py-2 my-8 ml-10 text-white rounded transition-all duration-300 hover:translate-y-1"
                      >
                        Get All Records
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-3">
                {/* Three columns of text below the carousel */}
                <div className="flex flex-wrap my-3">
                  <div className="w-full md:w-1/3 px-4 mb-6">
                    <div className="text-center">
                      <img
                        className="rounded-full mx-auto"
                        src={clock}
                        alt="CLock Image"
                        width="140"
                        height="140"
                      />
                      <h2 className="text-xl font-bold mt-4">
                        Quick Prediction
                      </h2>
                    </div>
                    <p className="text-center">
                      Used ML model that can load within no time without
                      compromising on the accuracy of the prediction. Light
                      models quickly load which helps in better response of the
                      page.
                    </p>
                  </div>

                  <div className="w-full md:w-1/3 px-4 mb-6">
                    <div className="text-center">
                      <img
                        className="rounded-full mx-auto"
                        src={accuracy}
                        alt="Accuracy Image"
                        width="230"
                        height="230"
                      />
                      <h2 className="text-xl font-bold mt-4">
                        Highly Accurate
                      </h2>
                    </div>
                    <p className="text-center">
                      Though this website provides a wide range and high speed the
                      accuracy has not been compromised. Hyper-parameters have
                      been selected very carefully so that the accuracy is not
                      hampered.
                    </p>
                  </div>

                  <div className="w-full md:w-1/3 px-4 mb-6">
                    <div className="text-center">
                      <img
                        className="rounded-full mx-auto"
                        src={range}
                        alt="Checklist image"
                        width="240"
                        height="240"
                      />
                      <h2 className="text-xl font-bold mt-4">Range</h2>
                    </div>
                    <p className="text-center">
                      This Web-App provides a good range of predicting the
                      Heart Disease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
