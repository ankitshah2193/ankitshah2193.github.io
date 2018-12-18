import React, { Component } from 'react';
import './App.css';
import TeamScoreContainer from './containers/TeamScoreContainer';
import ScoreContainer from './containers/ScoreContainer';
import { CurrentOverDetailsRedux } from './components/currentOverDetails';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TeamScoreContainer/>
        <CurrentOverDetailsRedux />
        <ScoreContainer/>
      </div>
    );
  }
}

export default App;
