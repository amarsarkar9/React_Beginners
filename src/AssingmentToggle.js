import React, { Fragment, useState } from "react";
import { Button, Alert } from "react-bootstrap";



const AssingmentToggle = () => {

  const [show, setShow] = useState(false);

  const showPara=()=>{
        setShow(show=>!show);
  }


  return (
    <Fragment>
      <Button variant="primary" onClick={showPara}>Toggle Box</Button>
      {show &&<div>Toggle when button is clicked...</div>}

    </Fragment>
  );
};
export default AssingmentToggle;
