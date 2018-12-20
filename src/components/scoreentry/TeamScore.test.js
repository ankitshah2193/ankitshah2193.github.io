import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TeamScore from './TeamScore';

describe('<TeamScore>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" previousBattingTeam="Aus" 
        previousBattingTeamScore="120" previousTeamOvers="20"  /> );
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("should load component", ()=>{
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" previousBattingTeam="Aus" 
        previousBattingTeamScore="120" previousTeamOvers="20"  /> );
        expect(wrapper.find('div').length).toBe(3);
        expect(wrapper.find('.previousBattingTeamScore').length).toBe(1);
    });

    it("should show only current team score", ()=>{
        const wrapper = shallow(<TeamScore currentBattingTeam="India" currentBattingTeamScore="110" teamWickets="2" currentTeamOver="5.1" totalOvers="20" 
        /> );
        expect(wrapper.find('.previousBattingTeamScore').length).toBe(0);
    });
})

