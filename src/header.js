import React from "react";

const header = (props) => {
    console.log(props);
  return (
  <>
  <div className="bg-success">header</div>
  <span>{props.menuitem1} </span>
  <span>{props.menuitem2} </span>
  <span>{props.menuitem3} </span>
  </>
  );
};
export default header;
