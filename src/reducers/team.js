const initialState = {
    Team1: {
        totalScore: 0,
        noOfBalls : 0,
        players: {
            player1: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player2: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player3: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player4: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player5: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            }
        },
        overs: [
        ]
    },
    Team2: {
        totalScore: 0,
        noOfBalls : 0,
        players: {
            player1: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player2: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player3: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player4: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            player5: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            }
        },
        overs: [
        ]
    }
};

const team = (state = initialState, action) => {
    const updatedState = {...state};

    switch (action.type) {
        case 'NEXT_BALL':
            const currentTeam = updatedState[action.teamName];
            let currentOver = currentTeam.overs.length > 0 ? currentTeam.overs.length - 1 : 0,
            currentBall = currentTeam.overs[currentOver] && currentTeam.overs[currentOver].length > 0 ? 
                                action.isExtra ? currentTeam.overs[currentOver].length : currentTeam.overs[currentOver].length + 1  : 1;
            currentTeam.totalScore += action.runs + action.extraRuns;

            if(currentBall > 6) {
                currentBall = 1;
                currentOver += 1;
            }

            if(!currentTeam.overs[currentOver]) {
                currentTeam.overs[currentOver] = [];
            }

            currentTeam.overs[currentOver].push({
                batsman: action.batsman,
                bowler: action.bowler,
                isExtra: action.isExtra,
                isOut: action.isOut,
                extraRuns: action.extraRuns,
                runs: action.runs,
                ballNo: currentBall,
                extraType: action.extraType
            });

            if(!action.isExtra) {
                currentTeam.noOfBalls += 1;
            }

            return updatedState;
        default:
            break;
    }
    return updatedState;
};

export default team;