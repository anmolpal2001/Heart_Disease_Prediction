import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordionComponent from "../components/AccordionComponent";
import {outputClear} from "../redux/output/outputSlice";

function Results() {
  const DUMMY=[{
reportId:'#DFGHJK',
date:'bdhbashbaisd',
val:{
  age: 62,
            sex: 0,
            cp: 0,
            trestbps: 138,
            cholesterol: 294,
            fbs: 1,
            restecg: 1,
            thalach: 106,
            exang: 0,
            oldpeak: 1.9,
            slope: 1,
            ca: 3,
            thal: 2,

}
// val:
  }]
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let temp = [];
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
        console.log(res);
        res.previousResults.map((item) => {
          const date = item.createdAt;
          const reportId = item._id;
          const age = item.age;
          const sex = item.sex === "0" ? "Female" : "Male";
          let cp;
          if (item.cp === "0") {
            cp = "Typical angina";
          }
          if (item.cp === "1") {
            cp = "Atypical angina";
          }
          if (item.cp === "2") {
            cp = "Non-anginal pain";
          }
          if (item.cp === "3") {
            cp = "Typical angina";
          }

          const trestbps = item.trestbps;
          const chol = item.cholesterol;
          const fbs = item.fbs === "0" ? "False" : "True";

          const thalach = item.thalach;
          const exang =
            item.exang === "0"
              ? "Absence of Exercise-Induced Angina"
              : "Presence of Exercise-Induced Angina";
          const oldpeak = item.oldpeak;
          let restecg;
          if (item.restecg === "0") {
            restecg = "Normal";
          }
          if (item.restecg === "1") {
            restecg = "Having ST-T Wase Abnormality";
          }
          if (item.restecg === "2") {
            restecg = "showing Probable ";
          }
          let slope;
          if (item.slope === "0") {
            slope = "upsloping";
          }
          if (item.slope === "1") {
            slope = "flat (horizontal)";
          }
          if (item.slope === "2") {
            slope = "downsloping";
          }
          // const target =
          //   item.target === "0" ? "Have Heart Diease" : "No heart disease";
          const target = item.target;

          const ca = item.ca;
          let thal;
          if (item.thal === "0") {
            thal = "Normal";
          }
          if (item.thal === "1") {
            thal = "Fixed defect";
          }
          if (item.thal === "2") {
            thal = "Reversible defect";
          }
          if(item.thal === "3"){
            thal = "Unknown"
          }
          let val = {
            sex,
            target,
            restecg,
            cp,
            age,
            chol,
            trestbps,
            fbs,
            thalach,
            exang,
            oldpeak,
            slope,
            ca,
            thal,
          };
          temp.push({ date, reportId, val });
        });
        setResultData(temp);
        temp = [];
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
    console.log("Reseults", resultData);
    
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="bg-[#F7F7F7] lg:px-6 py-2.5 min-h-screen">
        <div className="mx-auto max-w-screen-2xl lg:mx-20 flex flex-col justify-center items-center">
          <div className="sm:px-4 lg:px-14 max-w-screen-2xl w-full mx-auto">
            {/* {loading && <p className="text-center my-10 text-xl">Loading...</p>}
            {!loading && resultData.length === 0 && <p className="text-center my-10 text-xl">No result found</p>}
            {!loading && */}
             { DUMMY.length > 0 &&
              DUMMY.map((item, index) => (
                <div key={index}>
                  <AccordionComponent
                    toggleResult={toggle}
                    index={index}
                    data={item.val}
                    show={index === openIndex}
                    date={item.date}
                    reportId={item.reportId}
                  />
                </div>
              ))
             }
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
