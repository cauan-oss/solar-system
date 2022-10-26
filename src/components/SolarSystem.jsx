import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planets.map((plano) => (<PlanetCard
          key={ plano.name }
          planetName={ plano.name }
          planetImage={ plano.image }
        />))}

      </div>
    );
  }
}

export default SolarSystem;
