import { connect } from 'react-redux';
import Popup from '../components/Popup';
import { setNewBatsman, setNewBowler } from '../actions/actions';

const mapStateToProps = (state) => ({
    bastmen: state.team[state.game.currentBattingTeam].players,
    wickets: state.team[state.game.currentBattingTeam].wickets,
    overs: state.team[state.game.currentBattingTeam].overs.length,
    bowlers: state.team[state.game.currentBowlingTeam].players
});

const mapDispatchToProps = (dispatch) => {
    return {
        setBatsman(playerName) {
            dispatch(setNewBatsman(playerName));
        },
        setBowler(playerName) {
            dispatch(setNewBowler(playerName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);