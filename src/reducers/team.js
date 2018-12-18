const initialState = {
    Team1: {
        totalScore: 0,
        noOfBalls : 0,
        wickets: 0,
        players: {
            Player1: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player2: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player3: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player4: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player5: {
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
        wickets: 0,
        players: {
            Player1: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player2: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player3: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player4: {
                isAvaialbleForBatting : true,
                isAvaialbleForBowling : true
            },
            Player5: {
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
        case 'RECORD_RUNS':
            const currentTeam = updatedState[action.teamName];
            let currentOver = currentTeam.overs.length > 0 ? currentTeam.overs.length - 1 : 0,
            currentBall = currentTeam.overs[currentOver] && currentTeam.overs[currentOver].length > 0 ? 
                                action.isExtra ? currentTeam.overs[currentOver].length : currentTeam.overs[currentOver].length + 1  : 1;
           
            const extraRuns = action.isExtra ? 1 : 0;
            const run = action.runs ? parseInt(action.runs, 10) : 0;
            currentTeam.totalScore += run + extraRuns;

            if(currentBall > 6) {
                currentBall = 1;
                currentOver += 1;
            }

            if(!currentTeam.overs[currentOver]) {
                currentTeam.overs[currentOver] = [];
            }
           
            if(!action.isExtra || (action.isExtra && (action.extraType === 'Lb' || action.extraType === 'B' ))) {
                currentTeam.noOfBalls += 1;
            }

            if(action.isOut) {
                currentTeam.wickets += 1;
                currentTeam.players[action.batsman].isAvaialbleForBatting = false;
            }

            currentTeam.overs[currentOver].push({
                batsman: action.batsman,
                bowler: action.bowler,
                isExtra: action.isExtra,
                isOut: action.isOut,
                extraRuns: action.extraRuns,
                runs: run,
                ballNo: currentBall,
                extraType: action.extraType
            });


            return updatedState;
        default:
            break;
    }
    return updatedState;
};

export default team;