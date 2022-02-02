import React from "react";
import FunctionalComp from "./FunctionalComp";
// import ClassComp from "./ClassComp";

const main = (props) => {
  return (
  <>
  <div>{props.companyname}</div>
  
  <FunctionalComp />
  {/* <ClassComp/> */}
  </>
  );
};
export default main;
