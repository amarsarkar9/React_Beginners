import React, { Fragment, useState } from "react";
import "./css/functional.css";
import image1 from "./asserts/amar.jpg";
import { Button, Alert } from "react-bootstrap";
import AssingmentToggle from './AssingmentToggle'

const FunctionalComp = () => {
  const name = "amar sarkar";
  const location = "kolkata";
  const job = "IT";

  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount((count) => count + 1);
  };
    const DecreaseCount = () => {
    setCount((count) => count - 1);
  };

  const showPara=()=>{

  }

  return (
    <Fragment>
      {/* <img className="image" src={image1} />
      <div className="sam"> sam...</div>
      <p className="name">
        {name} lives in {location} and works in {job}
      </p>
      <Alert variant="danger" className="width-500">
        danger
      </Alert> */}
      <p>Functional Component {count}</p>
      <Button variant="primary" onClick={IncreaseCount}>Increase</Button>
      <Button variant="primary" onClick={DecreaseCount}>Decrease</Button>
      <br/><br/><br/><br/>
      <AssingmentToggle/>

    </Fragment>
  );
};
export default FunctionalComp;
