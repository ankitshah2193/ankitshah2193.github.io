import StatsTable from '../components/scoreboard/StatsTable'
import {connect} from 'react-redux';

function isLegitball(ball) {
    return !ball.isExtra || (ball.isExtra && (ball.extraType === 'B' || ball.extraType === 'Lb')) ? true : false;
}

function createBowlingStatsIndex(overs) {
    let bowlingIndex = {};
    overs.map((over, i) => {
        let runsInOver = 0;
        over.map((ball, j)=>{
            if (!bowlingIndex.hasOwnProperty(ball.bowler))
                bowlingIndex[ball.bowler] = {
                    balls: 0,
                    runs: 0,
                    maidens: 0,
                    wickets: 0,
                    extras: 0
                }
            bowlingIndex[ball.bowler].runs += ball.runs + ball.extraRuns;
            bowlingIndex[ball.bowler].balls += isLegitball(ball) ? 1 : 0;
            bowlingIndex[ball.bowler].wickets += ball.isOut ? 1 : 0;
            bowlingIndex[ball.bowler].extras += ball.isExtra && (ball.extraType === 'W' || ball.extraType === 'N') ? 1 : 0;
            runsInOver += ball.runs + ball.extraRuns;
            return ball;
        });
        if (over.length !== 0)
            bowlingIndex[over[0].bowler].maidens += runsInOver === 0 ? 1 : 0;
        return over;
    });
    return bowlingIndex;
}

function computeOvers(balls) {
    return parseInt(balls/6) + "." + balls%6;
}

function getPlayerBowlingStats(state) {
    let currentBattingTeam = state.game.currentBattingTeam;
    let currentPlayerList = state.team[currentBattingTeam].players;
    let bowlingIndex = createBowlingStatsIndex(state.team[currentBattingTeam].overs);
    
    return Object.keys(currentPlayerList).map((playerName, index)=>{
        if (bowlingIndex[playerName] === undefined)
            return [];
        return [
            playerName,
            computeOvers(bowlingIndex[playerName].balls),
            bowlingIndex[playerName].maidens,
            bowlingIndex[playerName].runs,
            bowlingIndex[playerName].extras,
            bowlingIndex[playerName].wickets            
        ]
    })
}


const mapStateToProps = state => {
    return {
        tableName: "Bowling Table",
        stats: getPlayerBowlingStats(state),
        headers: ['Bowler', 'Overs', 'Maidens', 'Runs', 'Extras', 'Wickets']
    }
}

export default connect(mapStateToProps)(StatsTable);