import { connect } from 'react-redux';
import CurrentStrikers from '../components/scoreentry/CurrentStrikers';


const mapStateToProps = (state) => ({
    striker : state.game.currentBatsmen.filter(batsman => batsman.isStriker)[0].name,
    nonStriker : state.game.currentBatsmen.filter(batsman => !batsman.isStriker)[0].name
});

export default connect(mapStateToProps)(CurrentStrikers);