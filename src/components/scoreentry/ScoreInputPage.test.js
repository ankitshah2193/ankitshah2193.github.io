import React from 'react';
import { shallow,mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ScoreInputPage from './ScoreInputPage.js';

describe('<ScoreInputPage />', ()=>{
    test("Scoreborad is not crashing", ()=>{
        const wrapper = shallow(<ScoreInputPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})