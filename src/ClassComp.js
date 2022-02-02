import React from "react";
import { Button } from "react-bootstrap";

class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  IncreaseCount = () => {
    // this.State={
    //     count:this.state.count+1
    // }
    this.setState({
      count: this.state.count + 1,
    });
  };
  DecreaseCount = () => {
    // this.State={
    //     count:this.state.count+1
    // }
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <div className="header">ClassComp</div>
        <div>Count = {this.state.count}</div>
        <Button variant="primary" onClick={this.IncreaseCount}>
          Increase
        </Button>
        <Button variant="primary" onClick={this.DecreaseCount}>
          Decrease
        </Button>
      </>
    );
  }
}

export default ClassComp;
/*

*/
