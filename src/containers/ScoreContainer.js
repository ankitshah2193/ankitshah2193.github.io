import { connect } from 'react-redux';
import Score from '../components/Score';
import { recordRuns } from '../actions/actions';

const mapStateToProps = (state) => ({
    currentBattingTeam: state.game.currentBattingTeam,
    currentBowler: state.game.currentBowler,
    currentBatsman: state.game.currentBatsmen.filter(batsman => batsman.isStriker)[0].name
});

const mapDispatchToProps = (dispatch) => {
    return {
        recordRuns(teamName, batsman, bowler, runs, isExtra, extraType, isOut) {
            dispatch(recordRuns(teamName, batsman, bowler, runs, isExtra, extraType, isOut))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);