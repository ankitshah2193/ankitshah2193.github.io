import React, { Component } from 'react';
import './App.css';
import TeamScoreContainer from './containers/TeamScoreContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TeamScoreContainer/>
      </div>
    );
  }
}

export default App;
