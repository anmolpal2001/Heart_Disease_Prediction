import React from "react";
import Result from "../components/Result";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const DUMMy = [
  {
    date: "10 may",
    reportId: "1234",
  },
  {
    date: "10 april",
    reportId: "1234",
  },
];
function Results() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      const res = await fetch("http://localhost:4000/api/v1/heart/results", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      const response = await res.json();
      console.log(response);
      return response;
    };
    getAllData()
      .then((res) => {
        console.log(res.previousResults);
        setResultData(res.previousResults);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (index) => {
    // console.log('index ',index)
    // console.log('openINdex',openIndex)
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
    // console.log('after openINdex',openIndex)
  };

  return (
    <>
      <div className="bg-[#F7F7F7] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="mx-auto max-w-screen-2xl flex flex-col justify-center items-center">
          <div className="px-4 lg:px-14 max-w-screen-2xl w-full mx-auto h-screen">
            <div className="my-10 flex flex-col items-center justify-between gap-12">
              {DUMMy.map((data, index) => (
                <div
                  className="w-1/2 flex justify-center items-center bg-green-300"
                  key={index}
                >
                  <Result
                    toggleResult={toggle}
                    index={index}
                    show={index === openIndex}
                    date={data.data}
                    reportId={data.reportId}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
