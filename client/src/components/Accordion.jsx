import React from "react";
import { IoMdDownload } from "react-icons/io";
import MyDoc from "./PdfComponent";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function Accordion(props) {
  return (
    <div className="w-full ">
        <div className="flex justify-end mb-2">
           
              <PDFDownloadLink document={<MyDoc />} fileName={`${Date.now()}`}>
                <button className="flex justify-center items-center"> <IoMdDownload  className="" /> <span>Download</span></button>    
              </PDFDownloadLink>
              
            </div>
      <div className="border rounded-md mb-1 ">
        <button
          className="w-full p-4 text-left bg-gray-200  
                           hover:bg-gray-300 transition duration-300"
          onClick={props.toggleResult}
        >
          {props.title}
          <span
            className={`float-right transform ${
              props.isOpen ? "rotate-180" : "rotate-0"
            }  
                                 transition-transform duration-300`}
          >
            &#9660;
          </span>
        </button>
        {props.isOpen && (
          <div
            onClick={props.toggleResult}
            className="p-4 bg-white cursor-pointer"
          >
            <div className="flex justify-center">
            <table className="shadow-lg bg-white border-collapse">
         
              <tr>
              <th className="bg-blue-100 border text-left px-8 py-2">Options</th>
              <th className="bg-blue-100 border text-left px-8 py-2">Input</th>
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
                <td className="border px-8 py-2">TrestBPS (90-180mmHg)</td>
                <td className="border px-8 py-2">{props.data.trestbps}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2" >Cholesterol (e.g. 100 -300 mg/dL )</td>
                <td className="border px-8 py-2">{props.data.chol}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Fasting Blood Sugar</td>
                <td className="border px-8 py-2">{props.data.fbs}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Resting Electrocardiographic Result</td>
                <td className="border px-8 py-2">{props.data.restecg}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Thalach (e.g., 60 - 220 bpm)</td>
                <td className="border px-8 py-2">{props.data.thalach}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Exercise-Induced Angina</td>
                <td className="border px-8 py-2">{props.data.exang}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Oldpeak (e.g., 0.0 - 6.2 mm)</td>
                <td className="border px-8 py-2">{props.data.oldpeak}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Slope</td>
                <td className="border px-8 py-2">{props.data.slope}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">CA (Number of Major Vessels)</td>
                <td className="border px-8 py-2">{props.data.ca}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-8 py-2">Thalassemia</td>
                <td className="border px-8 py-2">{props.data.thal}</td>
              </tr>
          <tr className="bg-gray-300">
            <td className="border px-8 py-2">Result</td>
            <td className="border px-8 py-2">{props.data.target}</td>
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
