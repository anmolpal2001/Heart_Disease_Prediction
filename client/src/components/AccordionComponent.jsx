import React from "react";

import Accordion from "./Accordion";
function AccordionComponent(props) {
  const childToggle = () => {
    props.toggleResult(props.index);
  };
  console.log(props);

  return (
    <div className="sm:p-2 py-2 sm:m-6 m-4 ">
      <Accordion
        reportId = {props.reportId}
        date = {props.date}
        data={props.data}
        isOpen={props.show}
        toggleResult={childToggle}
      />
    </div>
  );
}

export default AccordionComponent;
