import React from 'react'

import Accordion from './Accordion';
function AccordionComponent(props) {
   
    const childToggle = () => {
        props.toggleResult(props.index);
      };
  
    return ( 
        
  
            <div className="p-2 m-6 "> 
                
                    <Accordion 
                      
                        title={`${props.date} || ${props.reportId}`}
                        data='Some placeholder content for the collapse component. This panel is
                        hidden by default but revealed when the user activates the relevant
                        trigger. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Error, culpa cum maxime consequuntur debitis eum magni eligendi veniam
                        dolorem quos perferendis distinctio enim asperiores. Officia
                        recusandae accusantium quas voluptatibus nesciunt!'
                        isOpen={props.show} 
                        toggleResult={childToggle}
                    /> 
            
            </div> 
      
         
    ); 
}

export default AccordionComponent
