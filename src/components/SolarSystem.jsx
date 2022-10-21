import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class solarSystem extends Component {
  render() {
    return (

      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}

export default solarSystem;
