import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/currentOverDetails.css';


class CurrentOverDetails extends React.Component{
    render(){
        return (
            <div className="row current-over-details">
                <div className="col-sm-12">
                    This Over : 2 3 4 5 6 2
                    
                </div>
                <div className="col-sm-12">
                    Bowler :  Abhilash 
                </div>
            </div>
        );
    }
}

export default CurrentOverDetails; 