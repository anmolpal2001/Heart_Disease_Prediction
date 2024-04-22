import React from "react";
import { IoMdDownload } from "react-icons/io";
import MyDoc from "./PdfComponent";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

function Accordion(props) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}`;

    return { date: formattedDate, time: formattedTime };
  }

  const { date, time } = formatDateTime(props.date);

  const userData = {
    name: currentUser.sendData.firstName + " " + currentUser.sendData.lastName,
    age: props.data.age,
    gender : props.data.sex === 0 ? "Female" : "Male",
    date: date,
    time : time,
    parameters : {
      "Age": props.data.age,
      "Gender": props.data.sex === "0" ? "Female" : "Male",
      "Chest Pain": props.data.cp,
      "Resting Blood Pressure": props.data.trestbps,
      "Cholesterol": props.data.chol,
      "Fasting Blood Sugar": props.data.fbs,
      "Resting Electrocardiographic Result": props.data.restecg,
      "Thalach": props.data.thalach,
      "Exercise-Induced Angina": props.data.exang,
      "Oldpeak": props.data.oldpeak,
      "Slope": props.data.slope,
      "CA (Number of Major Vessels)": props.data.ca,
      "Thalassemia": props.data.thal,
    },

  }

  const output = props.data.target === "0" ? "Person is not likely to have a heart disease" : "Person is likely to have a heart disease";

  const color = props.data.target === "0" ? "text-green-800" : "text-red-800";

  return (
    <div className="w-full ">
      <div className="flex justify-end mb-2">
        <PDFDownloadLink document={<MyDoc userData={userData} />} fileName={`${Date.now()}`}>
          <button className="flex justify-center items-center">
            {" "}
            <IoMdDownload className="" /> <span>Download</span>
          </button>
        </PDFDownloadLink>
      </div>
      <div className="border rounded-md mb-1 ">
        <button
          className="w-full p-4 text-left bg-gray-200  
                           hover:bg-gray-300 transition duration-300"
          onClick={props.toggleResult}
        >
          <div className="sm:p-4 p-1 flex items-center justify-between">
            <div className="flex flex-wrap items-start w-full sm:gap-2 gap-4">
              <div className="w-1/2">
                <p className="font-bold sm:text-lg text-sm  mb-2">
                  Report ID: #{props.reportId}
                </p>
                <p className="text-sm text-gray-600">
                  Date : {date} | Age : {props.data.age} | Gender :{" "}
                  {props.data.sex === 0 ? "Female" : "Male"} | Time : {time}
                  {props.data.gender}
                </p>
              </div>
              <div>
                <p className={`font-bold sm:text-lg text-sm mb-2 ${color}`}>
                   {output}
                </p>
              </div>
            </div>

            <span
              className={`float-right transform ${
                props.isOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            >
              &#9660;
            </span>
          </div>
        </button>
        {props.isOpen && (
          <div
            onClick={props.toggleResult}
            className="p-4 bg-white cursor-pointer"
          >
            <div className="flex justify-center">
              <table className="shadow-lg bg-white border-collapse">
                <tr>
                  <th className="bg-blue-100 border text-left px-8 py-2">
                    Options
                  </th>
                  <th className="bg-blue-100 border text-left px-8 py-2">
                    Input
                  </th>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Age</td>
                  <td className="border px-8 py-2">{props.data.age}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Gender</td>
                  <td className="border px-8 py-2">{props.data.sex}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Chest Pain</td>
                  <td className="border px-8 py-2">{props.data.cp}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Resting Blood Pressure (90-180mmHg)</td>
                  <td className="border px-8 py-2">{props.data.trestbps}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">
                    Cholesterol (e.g. 100 -300 mg/dL )
                  </td>
                  <td className="border px-8 py-2">{props.data.chol}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Fasting Blood Sugar</td>
                  <td className="border px-8 py-2">{props.data.fbs}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">
                    Resting Electrocardiographic Result
                  </td>
                  <td className="border px-8 py-2">{props.data.restecg}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">
                    Thalach (e.g., 60 - 220 bpm)
                  </td>
                  <td className="border px-8 py-2">{props.data.thalach}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Exercise-Induced Angina</td>
                  <td className="border px-8 py-2">{props.data.exang}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">
                    Oldpeak (e.g., 0.0 - 6.2 mm)
                  </td>
                  <td className="border px-8 py-2">{props.data.oldpeak}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Slope</td>
                  <td className="border px-8 py-2">{props.data.slope}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">
                    CA (Number of Major Vessels)
                  </td>
                  <td className="border px-8 py-2">{props.data.ca}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-8 py-2">Thalassemia</td>
                  <td className="border px-8 py-2">{props.data.thal}</td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="border px-8 py-2">Result</td>
                  <td className="border px-8 py-2">{output}</td>
                </tr>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
