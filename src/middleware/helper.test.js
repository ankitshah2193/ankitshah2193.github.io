import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { recordRunThunk } from './helper';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Helper class', () => {

    let initialState,
        store;

    beforeEach(() => {
        initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ]
            },
            team: {
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
                        }
                    },
                    overs: [
                        []
                    ]
                }
            }
        }

        store = mockStore(initialState);
    });

    it('should dispatch actions of updateTeamScore', () => {
        store.dispatch(recordRunThunk(4, false, null, false));

        expect(store.getActions()[0].type).toEqual('UPDATE_TEAM_SCORE');
        expect(store.getActions()[0].teamName).toEqual('Team1');
        expect(store.getActions()[0].totalRuns).toEqual(4);
    })

    it('should dispatch actions of updateNoOfBalls for valid delivery', () => {
        store.dispatch(recordRunThunk(4, false, null, false));
        expect(store.getActions()[1].type).toEqual('UPDATE_NO_OF_BALLS');
    })

    it('should dispatch actions of updateOverDetails', () => {
        store.dispatch(recordRunThunk(4, true, 'B', false));

        expect(store.getActions()[2].type).toEqual('UPDATE_OVER_DETAILS');
        expect(store.getActions()[2].teamName).toEqual('Team1');
        expect(store.getActions()[2].currentOver).toEqual(0);
        expect(store.getActions()[2].deliveryData.runs).toEqual(4);
    })

    it('should dispatch actions of changeStriker', () => {
        store.dispatch(recordRunThunk(3, false, null, false));
        expect(store.getActions()[3].type).toEqual('CHANGE_STRIKER');
    })

    it('should dispatch actions of overComplete', () => {
        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ]
            },
            team: {
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
                        }
                    },
                    overs: [
                        [
                            {
                                isExtra: false
                            },
                            {
                                isExtra: false
                            },
                            {
                                isExtra: false
                            },
                            {
                                isExtra: false
                            },
                            {
                                isExtra: false
                            }
                        ]
                    ]
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(4, true, 'B', false));

        expect(updatedStore.getActions()[3].type).toEqual('OVER_COMPLETE');
        expect(updatedStore.getActions()[4].type).toEqual('CHANGE_STRIKER');
    })

    it('should dispatch actions of declareWinner', () => {
        const uInitialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                previousBattingTeam: 'Team2',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ]
            },
            team: {
                Team1: {
                    totalScore: 27,
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
                        }
                    },
                    overs: [
                        []
                    ]
                },
                Team2: {
                    totalScore: 28,
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
            }
        }

        const updatedStore = mockStore(uInitialState);

        updatedStore.dispatch(recordRunThunk(2, false, null, false));
        expect(updatedStore.getActions()[3].type).toEqual('DECLARE_WINNER');
        expect(updatedStore.getActions()[3].winningTeam).toEqual('Team1');
    })

    it('should dispatch actions of inning over', () => {
        const over = [
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            }
        ];

        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ],
                noOfOvers: 5
            },
            team: {
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
                        }
                    },
                    overs: [
                        over,
                        over,
                        over,
                        over,
                        [{
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        }]
                    ]
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(4, true, 'B', false));

        expect(updatedStore.getActions()[3].type).toEqual('INNINGS_OVER');
    });

    it('should check for winner when second inning is over', () => {
        const over = [
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            }
        ];

        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ],
                noOfOvers: 5,
                previousBattingTeam: 'Team2'
            },
            team: {
                Team1: {
                    totalScore: 40,
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
                        }
                    },
                    overs: [
                        over,
                        over,
                        over,
                        over,
                        [{
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        }]
                    ]
                },
                Team2: {
                    totalScore: 50
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(4, true, 'B', false));

        expect(updatedStore.getActions()[3].type).toEqual('DECLARE_WINNER');
    })

    it('should check for tie when second inning is over', () => {
        const over = [
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            },
            {
                isExtra: false
            }
        ];

        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ],
                noOfOvers: 5,
                previousBattingTeam: 'Team2'
            },
            team: {
                Team1: {
                    totalScore: 46,
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
                        }
                    },
                    overs: [
                        over,
                        over,
                        over,
                        over,
                        [{
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        }]
                    ]
                },
                Team2: {
                    totalScore: 50
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(4, true, 'B', false));

        expect(updatedStore.getActions()[3].type).toEqual('DECLARE_TIE');
    })

    it('should dispatch record wicket on out', () => {
        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ],
                noOfOvers: 5,
                previousBattingTeam: 'Team2'
            },
            team: {
                Team1: {
                    totalScore: 46,
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
                        }
                    },
                    overs: [
                        [{
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        ]
                    ]
                },
                Team2: {
                    totalScore: 50
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(0, false, null, true));

        expect(updatedStore.getActions()[3].type).toEqual('UPDATE_WICKET');
    })

    it('should dispatch inning over when first team gets all out', () => {
        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ],
                noOfOvers: 5,
                previousBattingTeam: null, 
                noOfWickets: 5
            },
            team: {
                Team1: {
                    totalScore: 46,
                    noOfBalls: 0,
                    wickets: 4,
                    players: {
                        Player1: {
                            isAvaialbleForBatting: true,
                            isAvaialbleForBowling: true
                        },
                        Player2: {
                            isAvaialbleForBatting: true,
                            isAvaialbleForBowling: true
                        }
                    },
                    overs: [
                        [{
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        ]
                    ]
                },
                Team2: {
                    totalScore: 50
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(0, false, null, true));

        expect(updatedStore.getActions()[3].type).toEqual('INNINGS_OVER');
    })

    it('should dispatch declare winner when second team gets all out', () => {
        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ],
                noOfOvers: 5,
                previousBattingTeam: 'Team2', 
                noOfWickets: 5
            },
            team: {
                Team1: {
                    totalScore: 46,
                    noOfBalls: 0,
                    wickets: 4,
                    players: {
                        Player1: {
                            isAvaialbleForBatting: true,
                            isAvaialbleForBowling: true
                        },
                        Player2: {
                            isAvaialbleForBatting: true,
                            isAvaialbleForBowling: true
                        }
                    },
                    overs: [
                        [{
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        {
                            isExtra: false
                        },
                        ]
                    ]
                },
                Team2: {
                    totalScore: 50
                }
            }
        }

        const updatedStore = mockStore(initialState);

        updatedStore.dispatch(recordRunThunk(0, false, null, true));

        expect(updatedStore.getActions()[3].type).toEqual('DECLARE_WINNER');
    })

})