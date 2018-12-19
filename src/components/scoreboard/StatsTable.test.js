import React from 'react';
import {shallow} from 'enzyme';
import StatsTable from './StatsTable';
import toJson from 'enzyme-to-json';

describe("<StatsTable />", ()=>{
    let headers, stats;
    beforeEach(()=>{
        stats = [
            ['Player1', 23, 24, 2, 0, 98]
        ];
        headers = ['Batsman', 'Runs', 'Balls', 'Fours', 'Sixes', 'SR'];
    })

    test('component should not crash in instantiation', ()=>{
        const wrapper = shallow(<StatsTable stats={stats} headers={headers}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    test("component renders correctly", ()=>{
        const wrapper = shallow(<StatsTable stats={stats} headers={headers}/>);
        expect(wrapper.find('.table').type()).toBe('table');
    })
})