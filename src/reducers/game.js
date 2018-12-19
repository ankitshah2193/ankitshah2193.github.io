const initialState = {
    currentBattingTeam: 'Team1',
    previousBattingTeam: null,
    currentBowlingTeam: 'Team2',
    currentBatsmen: [
        { name: 'Player1', isStriker: true },
        { name: 'Player2', isStriker: false }
    ],
    currentBowler: 'Player1',
    noOfOvers: 5
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STRIKER':
            return {
                ...state,
                currentBatsmen: state.currentBatsmen.map(batsman => {
                    return {
                        ...batsman,
                        isStriker: !batsman.isStriker
                    }
                })
            }
        case 'INNINGS_OVER':
            alert('First Inning Is Over!!!!!!!!!!!!');
            return {
                ...state,
                currentBattingTeam: 'Team2',
                previousBattingTeam: 'Team1',
                currentBowlingTeam: 'Team1'
            }
        case 'DECLARE_WINNER':
            alert('Congratulations, ' + action.winningTeam + ". You are the WINNER.");
            return state;
        default:
            break;
    }
    return state;
};

export default game;