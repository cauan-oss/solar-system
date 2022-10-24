import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Planets from './data/planets';
import Missions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem planetinfo={ Planets } />
        <Missions missionsinfo= { Missions } />
      </div>
    );
  }
}

export default App;
