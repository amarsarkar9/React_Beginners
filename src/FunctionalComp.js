import React, { Fragment, useState } from "react";
import "./css/functional.css";
import image1 from "./asserts/amar.jpg";
import { Button, Alert } from "react-bootstrap";

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

  return (
    <Fragment>
      <img className="image" src={image1} />
      <div className="sam"> sam...</div>
      <p className="name">
        {name} lives in {location} and works in {job}
      </p>
      <Alert variant="danger" className="width-500">
        danger
      </Alert>
      {count}
      <Button variant="success" onClick={IncreaseCount}>Increase</Button>
      <Button variant="success" onClick={DecreaseCount}>Decrease</Button>
    </Fragment>
  );
};
export default FunctionalComp;
