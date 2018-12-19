import React from 'react';
import {Link} from 'react-router-dom';
import TeamScoreContainer from '../../containers/TeamScoreContainer';
import BattingTableContainer from '../../containers/BattingTableContainer';

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div className="app-container container">
                <Link to="/">ScoreEntry</Link>
                <TeamScoreContainer/>
                <BattingTableContainer />
            </div>
        )
    }
}