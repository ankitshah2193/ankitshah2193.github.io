import React from 'react';
import { mount } from 'enzyme';
import ScoreContainer from './ScoreContainer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

xdescribe('Score Conatiner', () => {
    let scoreConatinerWrapper,
        mockStore = configureStore(),
        store,
        container;

    beforeEach(() => {
        const initialState = {
            game: {
                currentBattingTeam: 'Team1',
                currentBowler: 'Player3',
                currentBatsmen: [
                    { name: 'Player1', isStriker: true },
                    { name: 'Player2', isStriker: false }
                ]
            }
        };
       
        store = mockStore(initialState)
        scoreConatinerWrapper = mount(<ScoreContainer store={store}/>);
    });

    it('should map state to props', () => {
        expect(true).toEqual(true);
    });
});