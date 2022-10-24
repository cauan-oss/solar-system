import { Component } from "react";
import missions from '../data/missions';

class MissionsCard extends Component {
  render(){
    const {name, year, country, destination} = this.props 
    return(
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year"> { year }</p>
        <p data-testid="mission-country"> { country }</p>
        <p data-testid="mission-destination"> { destination }</p>
      </div>

    )
  }
}

export default MissionsCard;