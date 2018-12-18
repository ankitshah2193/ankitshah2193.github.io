import React, { Component } from 'react';
import './App.css';
import TeamScoreContainer from './containers/TeamScoreContainer';
import ScoreContainer from './containers/ScoreContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TeamScoreContainer/>
        <ScoreContainer/>
      </div>
    );
  }
}

export default App;
