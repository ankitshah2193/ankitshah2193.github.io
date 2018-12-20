import { connect } from 'react-redux';
import Popup from '../components/Popup';
import { setNewBatsman } from '../actions/actions';

const mapStateToProps = (state) => ({
    players: state.team[state.game.currentBattingTeam].players,
    wickets: state.team[state.game.currentBattingTeam].wickets
});

const mapDispatchToProps = (dispatch) => {
    return {
        setBatsman(playerName) {
            dispatch(setNewBatsman(playerName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);