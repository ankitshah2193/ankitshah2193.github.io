const initialState = {
    India: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Sehwag: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Sachin: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Kohli: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Dhoni: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Singh: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Khan: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            }
        },
        overs: [
            []
        ]
    },
    Australia: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Hayden: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: false
            },
            Gilchrist: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Ponting: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Clark: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            McGrath: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Warne: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            }
        },
        overs: [
            []
        ]
    }
};

const resetState = {
    India: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Sehwag: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Sachin: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Kohli: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Dhoni: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Singh: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Khan: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            }
        },
        overs: [
            []
        ]
    },
    Australia: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Hayden: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: false
            },
            Gilchrist: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Ponting: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Clark: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            McGrath: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Warne: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            }
        },
        overs: [
            []
        ]
    }
};


const team = (state = initialState, action) => {
    const updatedState = { ...state };

    switch (action.type) {
        case 'UPDATE_TEAM_SCORE':
            updatedState[action.teamName].totalScore += action.totalRuns;
            return updatedState;
        case 'UPDATE_NO_OF_BALLS':
            updatedState[action.teamName].noOfBalls += 1;
            return updatedState;
        case 'UPDATE_OVER_DETAILS':
            updatedState[action.teamName].overs[action.currentOver].push(action.deliveryData);
            return updatedState;
        case 'OVER_COMPLETE':
            updatedState[action.teamName].overs.push([]);
            return updatedState;
        case 'UPDATE_WICKET':
            updatedState[action.teamName].players[action.batsman].isAvaialbleForBatting = false;
            updatedState[action.teamName].wickets += 1;
            return updatedState;
        case 'CHANGE_BOWLER':
            Object.keys(updatedState[action.bowlingTeam].players).forEach(function(key){ updatedState[action.bowlingTeam].players[key]['isAvaialbleForBowling'] = true });
            updatedState[action.bowlingTeam].players[action.currentBowler].isAvaialbleForBowling = false;
            return updatedState;
        case 'DECLARE_TIE':  
        case 'DECLARE_WINNER':
            return resetState;
        default:
            break;
    }
    return updatedState;
};

export default team;