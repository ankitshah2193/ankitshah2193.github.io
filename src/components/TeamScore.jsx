import React from 'react'
import '../styles/team-score.css'

const TeamScore = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <b>
                        <p className="team-name"> {props.teamName} </p>
                    </b>
                    <b>
                        <p className="team-score">{props.teamScore}/{props.teamWickets} in {props.currentOver}/{props.totalOvers}</p>
                    </b>

                </div>


            </div>

            <div className="row">
                <div className="col-lg-12" >
                    <p className={['team2-name', 'team-name'].join(" ")}>{props.teamName2}  scored {props.teamScore2}/{props.teamWickets} in {props.totalOvers} overs</p>
                </div>
            </div>
        </div>


    )
}

export default TeamScore;


