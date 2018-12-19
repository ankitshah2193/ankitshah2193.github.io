import React from 'react';
import Scoreboard from './scoreboard/Scoreboard.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ScoreInputPage from './scoreentry/ScoreInputPage.js';

export default class CricketRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={ScoreInputPage} />
                    <Route path="/scoreboard" component={Scoreboard} />
                </div>
            </Router>
        )
    }
}