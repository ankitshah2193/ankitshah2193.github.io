import React from 'react';
import TeamScoreContainer from '../../containers/TeamScoreContainer';
import {CurrentOverDetailsRedux} from './currentOverDetails';
import { Link } from 'react-router-dom'
import ScoreContainer from '../../containers/ScoreContainer';
export default class ScoreInputPage extends React.Component {

  render() {
    return (
      <div className="app-container container">
        <TeamScoreContainer/>
        <CurrentOverDetailsRedux />
        <ScoreContainer />
        <Link to="/scoreboard">Scoreboard</Link>
      </div>
    );
  }
}