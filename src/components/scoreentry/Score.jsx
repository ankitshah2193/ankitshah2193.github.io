import React from 'react';
import '../../styles/score.css';
import propTypes from 'prop-types';

class Score extends React.Component {
    runs = [0, 1, 2, 3, 4, 6];
    extras = ['W', 'N', 'B', 'Lb'];

    constructor(props) {
        super(props);
        this.state = {
            runs: null,
            isExtra: false,
            isOut: false,
            extraType: null
        }
    }

    getRunDataTemplate = () => {
        return this.runs.map(run => <button 
                                    key={run} 
                                    className={'score-button btn ' + (this.state.runs === run.toString() ? 'btn-primary' : 'btn-light')}
                                    onClick={this.handleRunChange}
                                    >{run}</button>)
    }

    getExtrasDataTemplate = () => {
        return this.extras.map(extra => <button 
                                        key={extra} 
                                        className={'score-button btn ' + (this.state.extraType === extra.toString() ? 'btn-primary' : 'btn-light')}
                                        onClick={this.handleExtraChange}
                                        >{extra}</button>)
    }

    handleRunChange = (event) => {
        const run = event.target.innerText;
        this.setState({
            runs: this.state.runs === run ? null : run
        });
    }

    handleExtraChange = (event) => {
        const extra = event.target.innerText;
        this.setState({
            extraType: this.state.extraType === extra ? null : extra,
            isExtra: this.state.extraType === extra ? false : true
        });
    }

    handleOutChange = () => {
        this.setState({
            isOut: !this.state.isOut
        });
    }
    
    handleNextBallEvent = () => {
        const {runs, isExtra, isOut, extraType} = this.state;

        this.setState({
            runs: null,
            isExtra: false,
            isOut: false,
            extraType: null
        });

        this.props.recordRuns(runs, isExtra, extraType, isOut);
    }

    render() {
        return (
            <React.Fragment>
                <div className="runs-container">
                    {this.getRunDataTemplate()}
                </div>

                 <div className="extra-runs-container">
                    <span className="extra-label">Extras&nbsp;</span>
                    {this.getExtrasDataTemplate()}
                 </div>

                 <div className="out-container">
                    <button 
                    className={'score-button btn ' + (this.state.isOut ? 'btn-primary' : 'btn-light')}
                    onClick={this.handleOutChange}
                    >Out</button>
                 </div>

                  <div className="next-ball-container">
                    <button 
                    className={'btn btn-lg ' + (this.state.runs || this.state.isOut || this.state.isExtra ? 'btn-danger' : 'btn-secondary disabled')}
                    onClick={this.handleNextBallEvent}
                    >Next Ball</button>
                 </div>

            </React.Fragment>
        )
    }
}

export default Score;

Score.propTypes = {
    recordRuns: propTypes.func
}