import swal from 'sweetalert';

const initialState = {
    currentBattingTeam: 'Team1',
    previousBattingTeam: null,
    currentBowlingTeam: 'Team2',
    currentBatsmen: [
        { name: 'Player1', isStriker: true },
        { name: 'Player2', isStriker: false }
    ],
    currentBowler: 'Player1',
    noOfOvers: 5,
    noOfWickets: 5
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
        case 'INNINGS_OVER':
            swal({
                text: "First inning is over!!!!!!!!!!!!",
                icon: "success",
                closeOnClickOutside: false,
                button: "Start new inning",
            });
            return {
                ...state,
                currentBattingTeam: 'Team2',
                previousBattingTeam: 'Team1',
                currentBowlingTeam: 'Team1',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ]
            }
        case 'DECLARE_WINNER':
            swal({
                text: 'Congratulations, ' + action.winningTeam + ". You have won this match.",
                icon: "success",
                closeOnClickOutsåide: false,
                button: "Start new game",
            });
            return initialState;

            case 'DECLARE_TIE':
            swal({
                text: "The game is a draw.",
                icon: "success",
                closeOnClickOutside: false,
                button: "Start new game",
            });
            return initialState;
        
    
        default:
            break;
    }
    return state;
};

export default game;