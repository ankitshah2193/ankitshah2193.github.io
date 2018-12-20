import {connect} from 'react-redux';
import StatsTable from '../components/scoreboard/StatsTable';

function createBattingStatsIndex(overs) {
    let batsmenIndex = {};
    overs.map((over, i)=>{
        return over.map((ball, j)=>{
            if (!batsmenIndex.hasOwnProperty(ball.batsman))
                batsmenIndex[ball.batsman] = {
                    runs: 0,
                    balls: 0,
                    fours: 0,
                    sixes: 0
                }
            batsmenIndex[ball.batsman].runs += ball.runs;
            batsmenIndex[ball.batsman].balls += ball.extraType === 'W' ? 0 : 1;
            batsmenIndex[ball.batsman].fours += ball.runs === 4 ? 1 : 0;
            batsmenIndex[ball.batsman].sixes += ball.runs === 6 ? 1 : 0;
            batsmenIndex[ball.batsman].isOut = ball.isOut;
            return null;
        })
    });
    return batsmenIndex;
}

function getStrikeRate(runs, balls) {
    if (balls === 0) return 0;
    return (runs/balls*100).toFixed(2);
}

function getPlayerBattingStats(state) {
    let currentBattingTeam = state.game.currentBattingTeam;
    let currentPlayerList = state.team[currentBattingTeam].players;
    let battingIndex = createBattingStatsIndex(state.team[currentBattingTeam].overs);
    
    return Object.keys(currentPlayerList).map((playerName, index)=>{
        if (battingIndex[playerName] === undefined)
            return [playerName, 0, 0, 0, 0, 0];
        return [
            battingIndex[playerName].isOut ? playerName+'(out)' : playerName,
            battingIndex[playerName].runs,
            battingIndex[playerName].balls,
            battingIndex[playerName].fours,
            battingIndex[playerName].sixes,
            getStrikeRate(battingIndex[playerName].runs, battingIndex[playerName].balls)
        ]
    })
}

const mapStateToProps = state => {
    return {
        tableName: "Batting Table",
        stats: getPlayerBattingStats(state),
        headers: ['Batsman', 'Runs', 'Balls', 'Fours', 'Sixes', 'SR']
    }
}

export default connect(mapStateToProps)(StatsTable);