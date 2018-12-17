import React from 'react'
import TeamScore from '../components/TeamScore';

class TeamScoreContainer extends React.Component {
    constructor(props) {
        super(props);
        this.teamName = "default";
        this.teamScore = 0;
        this.teamWickets = 0;
        this.currentOver = 0;
        this.totalOvers = 20;

        this.teamName2 = "default";
        this.teamScore2 = 0;
        this.teamWickets2 = 0;
        this.totalOvers2 = 20;
    }

    render() {
        return (
            <div>
                <TeamScore teamName={this.props.teamName} teamScore={this.props.teamScore} 
                teamWickets={this.props.teamWickets} currentOver={this.props.currentOver} totalOvers={this.props.totalOvers}
                teamName2={this.props.teamName2} teamScore2={this.props.teamScore2} 
                teamWickets2={this.props.teamWickets2}  totalOvers2={this.props.totalOvers2}
                />
            </div>

        ) 
    }
    
}

export default TeamScoreContainer