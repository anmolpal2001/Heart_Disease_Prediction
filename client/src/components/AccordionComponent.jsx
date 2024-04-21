import React from 'react'

import Accordion from './Accordion';
function AccordionComponent(props) {
   
    const childToggle = () => {
        props.toggleResult(props.index);
      };
  
    return ( 
        
  
            <div className="p-2 m-6 "> 
                
                    <Accordion 
                      
                        title={`Report-Id : #${props.date} || Date : ${props.reportId}`}
                        data={props.data}
                        isOpen={props.show} 
                        toggleResult={childToggle}
                    /> 
            
            </div> 
      
         
    ); 
}

export default AccordionComponent
