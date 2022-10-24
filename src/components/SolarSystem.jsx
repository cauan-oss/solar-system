import { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const { planetinfo } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planetinfo.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}

SolarSystem.propTypes = {
  planetinfo: PropTypes.shape(PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};
export default SolarSystem;
