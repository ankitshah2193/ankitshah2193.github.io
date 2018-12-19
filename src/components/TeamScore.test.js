import React from 'react';
import { shallow,mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components


import TeamScore from './TeamScore'
import TeamScoreContainer from '../containers/TeamScoreContainer';

describe('<TeamScore>', () => {
    test('Renders the TestScore component', () => {
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" previousBattingTeam="Aus" 
        previousBattingTeamScore="120" teamWickets="2" previousTeamOvers="20"  /> );
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    test("Test if component rendered correctly", ()=>{
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" previousBattingTeam="Aus" 
        previousBattingTeamScore="120" teamWickets="2" previousTeamOvers="20"  /> );
        expect(wrapper.find('div').length).toBe(3);
    });
})

