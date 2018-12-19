import {connect} from 'react-redux';
import CurrentOverDetails from '../components/scoreentry/CurrentOverDetails';

const mapStateToProp = state =>{
    function getLastOver() {
        let overs = state.team[state.game.currentBattingTeam].overs;
        return overs.length > 0 ? 
                overs[overs.length - 1]
                .map(ball => {
                    let info = '';
                    
                    if(ball.runs === 0 && (ball.isExtra || ball.isOut)) {
                       info = '';
                    } else {
                        info += ball.runs;
                    }
                   
                    if(ball.isExtra) {
                        info += ball.extraType;
                    } 
                    if(ball.isOut) {
                        info += 'Out';
                    }   
                    return info;
                })
                .join('  ') : '';
    }
    
    return {
        currentBowler: state.game.currentBowler,
        currentOverDetails: getLastOver()
    }
}

export default connect(mapStateToProp)(CurrentOverDetails);
