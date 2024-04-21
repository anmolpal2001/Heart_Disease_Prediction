import React from "react";
import { IoMdDownload } from "react-icons/io";
import MyDoc from "./PdfComponent";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function Accordion(props) {
  return (
    <div className="w-full">
        <div>
              <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
                {({loading}) =>
                  loading ? "" : <button className="flex justify-center items-center"> <IoMdDownload  className="" /> <span>Download</span></button>
                }
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
            <ul>
              <li>Age : 22</li>
              <li>Male:Male</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
