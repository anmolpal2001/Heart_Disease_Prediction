import React from "react";

function Result(props) {
  const childToggle = () => {
    props.toggleResult(props.index);
  };

  return (
    <div className="w-full flex justify-center items-center bg-red-300">
      {!props.show && (
        <div
          className="inline-block rounded bg-primary px-6 py-10 text-xs font-medium uppercase leading-normal text-red transition duration-150 ease-in-out"
          onClick={childToggle}
        >
          Date : {props.date} || Report Id :#{props.reportId}
        </div>
      )}

      {props.show && (
        <div
          onClick={childToggle}
          className="cursor-pointer block rounded-lg bg-blue p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50"
        >
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Error, culpa cum maxime consequuntur debitis eum magni eligendi veniam
          dolorem quos perferendis distinctio enim asperiores. Officia
          recusandae accusantium quas voluptatibus nesciunt!
        </div>
      )}
    </div>
  );
}

export default Result;
