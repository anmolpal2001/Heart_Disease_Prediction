import React, { useState } from "react";
import Form from "./Form";
import { MdHealthAndSafety } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

import { FaDownLong } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

import { FaSmile } from "react-icons/fa";

import { MdDownload } from "react-icons/md";

import { Link } from "react-router-dom";

//try

function Output() {
  const [yes, setYes] = useState(false);
  const diagnosis = yes
    ? "Our Analysis Indicates No Evidence Of Heart Disease Based On The Provided Data."
    : "Our Analysis Indicates The Presence Of Heart Disease Based On The Provided Data.";

  const Recommendations = yes ? (
    <div>
      <p className="my-2">
        <span className="font-bold ">Consult a Healthcare Professional :</span>{" "}
        We recommend seeking advice from a qualified medical practitioner for
        further evaluation and personalized treatment.
      </p>
      <p className="my-2">
        <span className="font-bold">Lifestyle Modifications :</span> Consider
        adopting a heart-healthy lifestyle, including regular exercise, a
        balanced diet, and stress management, to manage heart disease risk
        factors.
      </p>
    </div>
  ) : (
    <div>
      <p className="my-2">
        <span className="font-bold ">Maintain Healthy Habits :</span> Continue
        prioritizing a healthy lifestyle, including regular exercise, a balanced
        diet, and stress management, to support overall heart health.
      </p>
      <p className="my-2">
        <span className="font-bold">Regular Health Check-ups :</span> Schedule
        periodic check-ups with your healthcare provider to monitor your
        cardiovascular health and address any emerging concerns.
      </p>
    </div>
  );
  const nextStep = !yes ? (
    <div>
      <p className="my-2">
        <span className="font-bold">Preventive Measures :</span> Stay proactive
        in managing heart disease risk factors by maintaining a healthy weight,
        avoiding smoking, and managing stress.
      </p>
      <p className="my-2">
        <span className="font-bold">Monitor Symptoms :</span> Pay attention to
        any changes in your health and consult your healthcare provider if you
        experience symptoms of concern.
      </p>
    </div>
  ) : (
    <div>
      <p className="my-2">
        <span className="font-bold">Medical Consultation : </span> Schedule an
        appointment with a cardiologist or healthcare provider for a
        comprehensive evaluation and treatment plan.
      </p>
      <p className="my-2">
        <span className="font-bold">Follow-up Monitoring : </span> Stay
        proactive in your health by regularly monitoring your condition and
        adhering to the prescribed treatment regimen.
      </p>
    </div>
  );

  return (
    <div className="flex justify-center items-center mt-4 mx-auto bg-slate-100">
      <div className="flex flex-col justify-center items-center w-4/5 px-6 py-8 bg-white rounded-lg md:px-8 lg:px-10 my-3">
        {/* <MdHealthAndSafety className="text-[#2A8683] text-6xl mb-4" /> */}

        <h1 className="text-4xl font-bold mb-4 text-center text-[#2A8683]">
          Your Heart Report
        </h1>

        <div className="mb-4 w-[95%] sm:w-1/2">
          <div className="flex items-center justify-start ">
            <span className="w-1/2">Name</span>
            <span className="w-1/2">: name</span>
          </div>
          <div className="flex items-center justify-start ">
            <span className="w-1/2">Age</span>
            <span className="w-1/2">: name</span>
          </div>
          <div className="flex items-center justify-start ">
            <span className="w-1/2">Gender</span>
            <span className="w-1/2">: name</span>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {/* {yes ? (
              <FaThumbsUp className="text-[#2A8683] text-6xl mb-4 " />
            ) : (
              <FaThumbsDown className="text-[#2A8683] text-6xl mb-4 " />
            )}
            <FaSmile className="text-[#2A8683] text-6xl mb-4 " /> */}
            <FaRegSmile className="text-[#2A8683] text-6xl mb-4 " />
          </div>

          <p className="mb-4 text-center">
            <span className="font-semibold text-3xl text-[#2A8683]">
              Result{" "}
            </span>
          </p>
        </div>

        <div className="flex m-2 items-center justify-center border-t border-gray-400 w-full h-0"></div>

        <div className="m-4">
          {/* <p className="text-[#2A8683] text-2xl text-center font-bold">
            Diagnosis
          </p> */}
          <p className="text-center text-lg">{diagnosis}</p>
        </div>
        <div className="flex m-2 items-center justify-center border-t border-gray-400 w-full h-0"></div>

        <div className="m-2">
          <p className="text-[#2A8683] text-2xl text-center font-bold mb-1">
            Recommendations
          </p>
          <div>{Recommendations}</div>
        </div>
        <div className="flex m-2 items-center justify-center border-t border-gray-400 w-full h-0"></div>

        <div className="m-2">
          <p className="text-[#2A8683] text-2xl text-center mb-1 font-bold">
            Next Steps
          </p>
          <div>{nextStep}</div>
        </div>

        <button className="m-2 hover:translate-y-1 transition-transform duration-300">
          <Link to="/reports" className="flex text-lg text-[#2A8683]">
            View Full Report
            <span className="flex justify-center mx-1 items-center text-[#2A8683] text-xl -rotate-90">
              <FaDownLong />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Output;
