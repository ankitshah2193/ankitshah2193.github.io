import TeamScore from '../components/scoreentry/TeamScore';
import { connect } from 'react-redux';

function getCurrentOver(balls) {
    return (Math.floor(balls / 6)) + '.' + (balls % 6);
}

const mapStateToProps = (state) => ({
    currentBattingTeam: state.game.currentBattingTeam,
    previousBattingTeam: state.game.previousBattingTeam,
    currentTeamOver: getCurrentOver(state.team[state.game.currentBattingTeam].noOfBalls),
    previousTeamOvers: state.team[state.game.previousBattingTeam] && getCurrentOver(state.team[state.game.previousBattingTeam].noOfBalls),
    currentBattingTeamScore: state.team[state.game.currentBattingTeam].totalScore,
    previousBattingTeamScore: state.team[state.game.previousBattingTeam] && state.team[state.game.previousBattingTeam].totalScore,
    currentTeamWickets: state.team[state.game.currentBattingTeam].wickets,
    totalOvers: state.game.noOfOvers,
    previousBattingTeamWickets: state.team[state.game.previousBattingTeam] && state.team[state.game.previousBattingTeam].wickets
});

export default connect(mapStateToProps)(TeamScore);