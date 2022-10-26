import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Planets from './data/planets';
import missions from './data/missions';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem planetinfo={ Planets } />
        <Missions missionsinfo={ missions } />
      </div>
    );
  }
}

export default App;
