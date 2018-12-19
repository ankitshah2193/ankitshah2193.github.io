import React from 'react';
import propTypes from 'prop-types';
import '../../styles/currentStrikers.css';

function CurrentStrikers(props) {
    return (
        <div className="current-striker-container">
            <div>
                <span>This Ball</span>
            </div>
            <div className="current-striker-btn-container">
                <div className="btn btn-info">
                    {props.striker}
                </div>
                <div className="btn btn-secondary">
                    {props.nonStriker}
                </div>
            </div>
        </div>

    )
}

export default CurrentStrikers;

CurrentStrikers.propTypes = {
    striker: propTypes.string,
    nonStriker: propTypes.string,
}