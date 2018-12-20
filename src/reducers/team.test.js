import reducer from './team';

describe('Team Reducer', () => {
    it('should return defaut state', () => {
        const action = {
            type: 'test'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.overs.length).toEqual(1);
    });

    it('should update team score', () => {
        const action = {
            type:'UPDATE_TEAM_SCORE',
            teamName: 'India',
            totalRuns: 4
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.totalScore).toEqual(4);
    });

    it('should update no of balls', () => {
        const action = {
            type:'UPDATE_NO_OF_BALLS',
            teamName: 'India',
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.noOfBalls).toEqual(1);
    });

    it('should update over details', () => {
        const action = {
            type:'UPDATE_OVER_DETAILS',
            teamName: 'India',
            currentOver: 0,
            delievryData: {
                runs: 1,
                batsman: 'Test'
            }
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.overs.length).toEqual(1);
        expect(updatedState.India.overs[0].length).toEqual(1);
    });

    it('should update over complete', () => {
        const action = {
            type:'OVER_COMPLETE',
            teamName: 'India'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.overs.length).toEqual(2);
        expect(updatedState.India.overs[1].length).toEqual(0);
    });

    it('should update wicket', () => {
        const action = {
            type:'UPDATE_WICKET',
            teamName: 'India',
            batsman: 'Sachin'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.wickets).toEqual(1);
        expect(updatedState.India.players['Sachin'].isAvaialbleForBatting).toEqual(false);
    });

    it('should update change bowler', () => {
        const action = {
            type:'CHANGE_BOWLER',
            bowlingTeam: 'India',
            currentBowler: 'Khan'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.players['Khan'].isAvaialbleForBowling).toEqual(false);
    });

    it('should reset game when match is tie', () => {
        const action = {
            type:'DECLARE_TIE'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.wickets).toEqual(0);
    });

    it('should reset game when one team wins match', () => {
        const action = {
            type:'DECLARE_WINNER'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.India.wickets).toEqual(0);
    });
});