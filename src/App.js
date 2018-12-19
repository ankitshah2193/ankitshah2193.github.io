import React, { Component } from 'react';
import './App.css';
import TeamScoreContainer from './containers/TeamScoreContainer';
import ScoreContainer from './containers/ScoreContainer';
import CurrentOverDetails from './containers/CurrentOverDetails';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TeamScoreContainer/>
        <CurrentOverDetails/>
        <ScoreContainer/>
      </div>
    );
  }
}

export default App;
