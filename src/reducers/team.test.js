import reducer from './team';

describe('Team Reducer', () => {
    it('should return defaut state', () => {
        const action = {
            type: 'test'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.Team1.overs.length).toEqual(1);
    });

    it('should update team score', () => {
        const action = {
            type:'UPDATE_TEAM_SCORE',
            teamName: 'Team1',
            totalRuns: 4
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.Team1.totalScore).toEqual(4);
    });

    it('should update no of balls', () => {
        const action = {
            type:'UPDATE_NO_OF_BALLS',
            teamName: 'Team1',
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.Team1.noOfBalls).toEqual(1);
    });

    it('should update over details', () => {
        const action = {
            type:'UPDATE_OVER_DETAILS',
            teamName: 'Team1',
            currentOver: 0,
            delievryData: {
                runs: 1,
                batsman: 'ANkit'
            }
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.Team1.overs.length).toEqual(1);
        expect(updatedState.Team1.overs[0].length).toEqual(1);
    });

    it('should update over complete', () => {
        const action = {
            type:'OVER_COMPLETE',
            teamName: 'Team1'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.Team1.overs.length).toEqual(2);
        expect(updatedState.Team1.overs[1].length).toEqual(0);
    });
});