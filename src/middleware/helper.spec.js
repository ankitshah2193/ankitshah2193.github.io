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

                    ]
                }
            }
        }

        store = mockStore(initialState);
    });

    it('should dispatch actions of updateTeamDetails', () => {
        store.dispatch(recordRunThunk(4, false, null, false));

        expect(store.getActions()[0].type).toEqual('UPDATE_TEAM_DETAILS');
        expect(store.getActions()[0].teamName).toEqual('Team1');
        expect(store.getActions()[0].teamData.noOfBalls).toEqual(1);
        expect(store.getActions()[0].teamData.overs.length).toEqual(1);
    })

    it('should dispatch actions of updateTeamDetails for extra balls', () => {
        store.dispatch(recordRunThunk(4, true, 'N', false));

        expect(store.getActions()[0].type).toEqual('UPDATE_TEAM_DETAILS');
        expect(store.getActions()[0].teamName).toEqual('Team1');
        expect(store.getActions()[0].teamData.noOfBalls).toEqual(0);
        expect(store.getActions()[0].teamData.overs.length).toEqual(1);
    })

    it('should dispatch actions of updateTeamDetails for out', () => {
        store.dispatch(recordRunThunk(4, true, 'N', true));

        expect(store.getActions()[0].type).toEqual('UPDATE_TEAM_DETAILS');
        expect(store.getActions()[0].teamName).toEqual('Team1');
        expect(store.getActions()[0].teamData.noOfBalls).toEqual(0);
        expect(store.getActions()[0].teamData.overs.length).toEqual(1);
        expect(store.getActions()[0].teamData.wickets).toEqual(1);
    })

})
