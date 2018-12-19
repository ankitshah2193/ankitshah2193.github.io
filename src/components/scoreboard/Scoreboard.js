import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TeamScoreContainer from '../../containers/TeamScoreContainer';

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div className="app-container container">
                <Link to="/">ScoreEntry</Link>

                <TeamScoreContainer/>
            </div>
        )
    }
}