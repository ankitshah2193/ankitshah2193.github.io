import { connect } from 'react-redux';
import CurrentStrikers from '../components/scoreentry/CurrentStrikers';


const mapStateToProps = (state) => ({
    strikers : state.game.currentBatsmen
});

export default connect(mapStateToProps)(CurrentStrikers);