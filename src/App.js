import React, { Component } from 'react';
import './App.css';
import TeamScoreContainer from './containers/TeamScoreContainer';
import { CurrentOverDetails, CurrentOverDetailsRedux } from './components/currentOverDetails';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TeamScoreContainer/>
        <CurrentOverDetailsRedux />
      </div>
    );
  }
}

export default App;
