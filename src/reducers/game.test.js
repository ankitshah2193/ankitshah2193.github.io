import reducer from './game';

describe('Game Reducer', () => {
    it('should return defaut state', () => {
        const action = {
            type: 'test'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.noOfOvers).toEqual(5);
        expect(updatedState.currentBatsmen.length).toEqual(2);
        expect(updatedState.currentBatsmen[0].isStriker).toEqual(true);
    });

    it('should change striker', () => {
        const action = {
            type:'CHANGE_STRIKER'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.currentBatsmen.length).toEqual(2);
        expect(updatedState.currentBatsmen[1].isStriker).toEqual(true);
    });

    it('should set new batsman', () => {
        const action = {
            type:'SET_NEW_BATSMAN',
            batsman: 'Dhoni'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.currentBatsmen.length).toEqual(2);
        expect(updatedState.currentBatsmen[0].name).toEqual('Dhoni');
    });

    it('should set new bowler', () => {
        const action = {
            type:'SET_NEW_BOWLER',
            bowler: 'Warne'
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.currentBowler).toEqual('Warne');
    });

    it('should notify inning over', () => {
        const action = {
            type:'INNINGS_OVER',
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.currentBattingTeam).toEqual('Australia');
        expect(updatedState.currentBowlingTeam).toEqual('India');
    });

    it('should reset state when match results in tie', () => {
        const action = {
            type:'DECLARE_TIE',
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.currentBattingTeam).toEqual('India');
        expect(updatedState.currentBowlingTeam).toEqual('Australia');
    });

    it('should reset state when one team wins match', () => {
        const action = {
            type:'DECLARE_WINNER',
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.currentBattingTeam).toEqual('India');
        expect(updatedState.currentBowlingTeam).toEqual('Australia');
    });
});