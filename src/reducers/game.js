const initialState = {
    currentBattingTeam : 'Team1',
    previousBattingTeam: 'Team2',
    currentBowlingTeam : 'Team2',
    currentBatsmen: [
        {name: 'Player1', isStriker: true},
        {name: 'Player2', isStriker: false}
    ],
    currentBowler: 'Player3',
    noOfOvers: 5
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STRIKER':
            return {
                ...state,
                currentBatsmen : state.currentBatsmen.map(batsman => {
                    return {
                        ...batsman,
                        isStriker : !batsman.isStriker
                    }
                })
            }
        case 'SET_NEW_BATSMAN':
            return {
                ...state,
                currentBatsmen : state.currentBatsmen.map(batsman => {
                        if(batsman.isStriker) {
                            batsman.name = action.batsman;
                        }
                        return batsman;
                })
            }
        default:
            break;
    }
    return state;
};

export default game;