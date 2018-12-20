const initialState = {
    Team1: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Player1: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Player2: {
                isAvaialbleForBatting: false,
                isAvaialbleForBowling: true
            },
            Player3: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player4: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player5: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            }
        },
        overs: [
            []
        ]
    },
    Team2: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Player1: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player2: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player3: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player4: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player5: {
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
    Team1: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Player1: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player2: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player3: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player4: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player5: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            }
        },
        overs: [
            []
        ]
    },
    Team2: {
        totalScore: 0,
        noOfBalls: 0,
        wickets: 0,
        players: {
            Player1: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player2: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player3: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player4: {
                isAvaialbleForBatting: true,
                isAvaialbleForBowling: true
            },
            Player5: {
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
            updatedState[action.teamName].wickets += 1;
            updatedState[action.teamName].players[action.batsman].isAvaialbleForBatting = false;
            return updatedState;
        case 'DECLARE_WINNER':
            return resetState;
        default:
            break;
    }
    return updatedState;
};

export default team;