import React from 'react';
import { shallow,mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Scoreboard from './Scoreboard.js';

describe('<Scoreboard />', ()=>{
    test("Scoreborad is not crashing", ()=>{
        const wrapper = shallow(<Scoreboard />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})