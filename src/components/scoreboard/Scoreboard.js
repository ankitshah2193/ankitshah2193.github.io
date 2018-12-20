import React from 'react';
import {Link} from 'react-router-dom';
import TeamScoreContainer from '../../containers/TeamScoreContainer';
import BattingTableContainer from '../../containers/BattingTableContainer';
import BowlingTableContainer from '../../containers/BowlingTableContainer';
import '../../styles/scoreBoard.css';

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div className="app-container container">
               
                <TeamScoreContainer/>
                <BattingTableContainer />
                <BowlingTableContainer />
                <div className="scoreentry-link-container">
                    <Link to="/">Score Entry</Link>
                </div>
            </div>
        )
    }
}