import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div className="app-container container">
                <Link to="/">ScoreEntry</Link>
            </div>
        )
    }
}