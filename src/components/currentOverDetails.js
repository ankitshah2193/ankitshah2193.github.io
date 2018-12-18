import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/currentOverDetails.css';
import {connect} from 'react-redux';

class CurrentOverDetails extends React.Component{
    
    renderOverDetails() {
        return this.props.currentOverDetails.map((value, index)=>{
            return <span>{value} </span>
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

const mapStateToProp = state =>{
    return {
        currentBowler: state.currentBowler,
        currentOverDetails: state.currentOverDetails
    }
}

const CurrentOverDetailsRedux = connect(mapStateToProp)(CurrentOverDetails);
export {
    CurrentOverDetails,
    CurrentOverDetailsRedux
}
