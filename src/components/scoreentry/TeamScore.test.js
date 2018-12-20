import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TeamScore from './TeamScore';

describe('<TeamScore>', () => {
    test('Renders the TestScore component', () => {
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" previousBattingTeam="Aus" 
        previousBattingTeamScore="120" previousTeamOvers="20"  /> );
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    test("Test if component rendered correctly", ()=>{
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" previousBattingTeam="Aus" 
        previousBattingTeamScore="120" previousTeamOvers="20"  /> );
        expect(wrapper.find('div').length).toBe(3);
    });
})

