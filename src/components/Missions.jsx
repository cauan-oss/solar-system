import { Component } from "react";
import Title from "./Title";

class Missions extends Component {
  render () {
    return (
      <div data-testid="missions">
        <Title headline= 'missoes'/>
      </div>
    )
  }
}

expect default Missions;
