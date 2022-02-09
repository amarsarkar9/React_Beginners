import React from "react";
import { Container } from "react-bootstrap";
import "./css/practice.css";

const prac = () => {
  return (
    <div>
      {/* <Container className="text-primary bg-dark"> */}
      <Container className="bg-success">
        <b>this is footer from another component</b>
      </Container>
    </div>
  );
};
export default prac;
