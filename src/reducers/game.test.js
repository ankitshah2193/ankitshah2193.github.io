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
});