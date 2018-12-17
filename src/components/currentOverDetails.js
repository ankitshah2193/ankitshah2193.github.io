import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/currentOverDetails.css';
import {connect} from 'react-redux';

var currentOverDetails =" ";
class CurrentOverDetails extends React.Component{
    
      renderOverDetails(currentOverArray) {
        var index =0;
        for (index = 0; index < currentOverArray.length; index++) { 
            currentOverDetails = currentOverDetails + currentOverArray[index] + " ";
        } 
        return currentOverDetails;
      }
 

    render(){
        return (
            <div className="row current-over-details">
                <div className="col-sm-12">
                    This Over: {this.renderOverDetails(this.props.currentOverDetails)}
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

export default connect(mapStateToProp)(CurrentOverDetails);
