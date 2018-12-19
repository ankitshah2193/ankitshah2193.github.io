import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/currentOverDetails.css';

import PropTypes from 'prop-types';

class CurrentOverDetails extends React.Component{
    
    render(){
        return (
            <div className="current-over-container">
                <div>
                    This Over: {this.props.currentOverDetails}
                </div>
                <div>
                    Bowler: {this.props.currentBowler}
                </div>
            </div>
        );
    }

}

CurrentOverDetails.propTypes = {
    currentBowler : PropTypes.string,
    currentOverDetails : PropTypes.string
}

export default CurrentOverDetails;

