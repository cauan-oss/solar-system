import { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import MissionsCard from './MissionsCard';

class Missions extends Component {
  render() {
    const { missionsinfo } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="missoes" />
        {missionsinfo.map((missoes) => (
          <MissionsCard
            key={ missoes.name }
            missionsName={ missoes.name }
            missionsYear={ missoes.year }
            missionsCountry={ missoes.country }
            missionsDestination={ missoes.destination }
          />
        ))}
      </div>
    );
  }
}

Missions.propTypes = {
  missionsinfo: PropTypes.shape(PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  })).isRequired,
};

export default Missions;
