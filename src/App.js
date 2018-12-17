import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamScoreContainer from './containers/TeamScoreContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeamScoreContainer teamName="Team1" teamScore={0} teamWickets={0} currentOver={0.0} totalOvers={20}
          teamName2="Team2" teamScore2={150} teamWickets2={7} totalOvers2={20} />
      </div>
    );
  }
}

export default App;
