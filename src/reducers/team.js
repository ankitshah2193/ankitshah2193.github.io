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
        case 'UPDATE_TEAM_DETAILS':
            updatedState[action.teamName] = action.teamData;
            return updatedState;
        default:
            break;
    }
    return updatedState;
};

export default team;