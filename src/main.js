import React from "react";
import FunctionalComp from "./FunctionalComp";
import{Row,Col} from "react-bootstrap";
import ClassComp from "./ClassComp";

const main = (props) => {
  return (
  <>
  <Row>
    <Col xs={6}>
      <FunctionalComp />
      </Col>
    <Col xs={6}>
      <ClassComp/>
    </Col>
  </Row>
  </>
  );
};
export default main;
