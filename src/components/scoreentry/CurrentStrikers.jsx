import React from 'react';
import propTypes from 'prop-types';
import '../../styles/currentStrikers.css';


function getStrikers(strikers) {
    return strikers.map((striker, index) => {
        const classValue = striker.isStriker ? 'btn btn-info' : 'btn btn-secondary';
        return <div key={index} className={classValue}>{striker.name}</div>
    })
}

function CurrentStrikers(props) {
    return (
            <div className="current-striker-container">
                <div>
                    <span>This Ball</span>
                </div>
                <div className="current-striker-btn-container">
                    {getStrikers(props.strikers)}
                </div>
            </div>
    )
}

export default CurrentStrikers;

CurrentStrikers.propTypes = {
    strikers: propTypes.array
}