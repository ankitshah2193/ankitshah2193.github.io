const initialState = {
    currentBattingTeam : 'Team1',
    previousBattingTeam: null,
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
                currentBatsmen: state.currentBatsmen.map(batsman => ({
                        ...batsman,
                        isStriker: !batsman.isStriker
                    }))
            };
        default:
            break;
    }
    return state;
};

export default game;