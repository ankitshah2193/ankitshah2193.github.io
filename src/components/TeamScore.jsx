import React from 'react'
import '../styles/team-score.css'

function getPreviousTeamScoreTemplate(props) {
    if (props.previousBattingTeam) {
        return <span> {props.previousBattingTeam} scored {props.previousBattingTeamScore}/{props.teamWickets} in {props.previousTeamOvers} overs </span>;
    }
    return <span></span>;
}

const TeamScore = (props) => {
    return (
        <div>
            <div className="current-team-summary">
                <span> {props.currentBattingTeam} </span>
                <span>{props.currentBattingTeamScore}/{props.teamWickets} in {props.currentTeamOver}/{props.totalOvers}</span>
            </div>

            <div>
                <span className="previous-team-summary">{getPreviousTeamScoreTemplate(props)}</span>
            </div>
        </div>
    )
}

export default TeamScore;


