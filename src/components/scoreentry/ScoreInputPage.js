import React from 'react';
import TeamScoreContainer from '../../containers/TeamScoreContainer';
import {CurrentOverDetailsRedux} from './currentOverDetails';
import { Link } from 'react-router-dom'
export default class ScoreInputPage extends React.Component {

  render() {
    return (
      <div className="app-container container">
        <TeamScoreContainer/>
        <CurrentOverDetailsRedux />
        <Link to="/scoreboard">Scoreboard</Link>
      </div>
    );
  }
}