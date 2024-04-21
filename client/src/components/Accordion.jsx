import React from 'react'
import { AiFillMail } from "react-icons/ai";

import PdfComponent from './PdfComponent';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function Accordion(props) {
    const getDocumentHandler=()=>{
        return(<PdfComponent/>)
    }
 
    return ( 
          <div className="w-full ">
        <div className="border rounded-md mb-1 "> 
            <button 
                className="w-full p-4 text-left bg-gray-200  
                           hover:bg-gray-300 transition duration-300"
                onClick={props.toggleResult} 
            > 
                {props.title}  
                <span className={`float-right transform ${props.isOpen ?  
                                 'rotate-180' : 'rotate-0'}  
                                 transition-transform duration-300`}> 
                    &#9660; 
                </span> 
            </button> 
            {props.isOpen && ( 
                <div onClick={props.toggleResult}  className="p-4 bg-white cursor-pointer"> 
                  
                    <ul>
                        <li>Age : 22</li>
                        <li>Male:Male</li>
                    </ul>
                    <div className="justify-center flex w-full items-center">
                    <PDFDownloadLink document={getDocumentHandler()} fileName='random.pdf'>
                    {({ blob, url, loading, error }) =>
        loading ?   'Loading': 'Download'
      }
        </PDFDownloadLink> 





      {/* <button
       className="py-2 px-1 bg-[#2A8683] text-lg text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-1/5 flex items-center justify-center"  > 
     <AiFillMail className="mr-2"/>Download 
      </button> */}
                  
  
          </div>
                </div> 
            )} 
         
        </div> 
        </div>
    ); 
}

export default Accordion
