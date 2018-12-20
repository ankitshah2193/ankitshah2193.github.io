import React from 'react';
import TeamScoreContainer from '../../containers/TeamScoreContainer';
import CurrentOverDetails from '../../containers/CurrentOverDetails';
import { Link } from 'react-router-dom'
import ScoreContainer from '../../containers/ScoreContainer';
import CurrentStrikers from '../../containers/CurrentStrikers';
import '../../styles/scoreInputPage.css';
import Popup from '../../containers/Popup'
export default class ScoreInputPage extends React.Component {

  render() {
    return (
      <div className="app-container">
        <TeamScoreContainer/>
        <CurrentOverDetails />
        <CurrentStrikers/>
        <ScoreContainer />
        <div className="scoreboard-link-container">
          <Link to="/scoreboard">Scoreboard</Link>
        </div>
        <Popup/>
      </div>
    );
  }
}