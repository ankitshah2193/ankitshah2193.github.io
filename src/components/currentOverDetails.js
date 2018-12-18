import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/currentOverDetails.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CurrentOverDetails extends React.Component{
    
    renderOverDetails() {
        return this.props.currentOverDetails.map((value, index)=>{
            return value + " ";
        });
    }

    render(){
        return (
            <div className="row current-over-details">
                <div className="col-sm-12">
                    This Over: {this.renderOverDetails()}
                </div>
                <div className="col-sm-12">
                    Bowler: {this.props.currentBowler}
                </div>
            </div>
        );
    }

}

CurrentOverDetails.propTypes = {
    currentBowler : PropTypes.string,
    currentOverDetails : PropTypes.array
}

const mapStateToProp = state =>{
    function getLastOver() {
        let overs = state.team[state.game.currentBattingTeam].overs;
        return overs[overs.length - 1];
    }
    
    return {
        currentBowler: state.game.currentBowler,
        currentOverDetails: getLastOver()
    }
}

const CurrentOverDetailsRedux = connect(mapStateToProp)(CurrentOverDetails);
export {
    CurrentOverDetails,
    CurrentOverDetailsRedux
}
