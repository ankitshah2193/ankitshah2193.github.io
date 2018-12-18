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

function getNoOfBalls(over) {
    let count = 0;
    over.forEach(ball => {
        if(!ball.isExtra || (ball.isExtra && (ball.extraType === 'Lb' || ball.extraType === 'B' ))) {
            count++;
        }
    })

    return count;
}

const team = (state = initialState, action) => {
    const updatedState = {...state};

    switch (action.type) {
        case 'RECORD_RUNS':
            const currentTeam = updatedState[action.teamName];
            const extraRuns = action.isExtra ? 1 : 0;
            let currentOver = currentTeam.overs.length > 0 ? currentTeam.overs.length - 1 : 0;
            let noOfValidBalls = currentTeam.overs[currentOver] && currentTeam.overs[currentOver].length > 0 ? getNoOfBalls(currentTeam.overs[currentOver]) : 0;
           
            const run = action.runs ? parseInt(action.runs, 10) : 0;
            currentTeam.totalScore += run + extraRuns;
           
            if(!action.isExtra || (action.isExtra && (action.extraType === 'Lb' || action.extraType === 'B' ))) {
                currentTeam.noOfBalls += 1;
                noOfValidBalls += 1;
            }

            if(noOfValidBalls === 6) {
                currentTeam.overs.push([]);
            }

            if(!currentTeam.overs[currentOver]) {
                currentTeam.overs[currentOver] = [];
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
                extraType: action.extraType
            });

            return updatedState;
        default:
            break;
    }
    return updatedState;
};

export default team;