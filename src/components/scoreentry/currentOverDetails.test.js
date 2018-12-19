import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CurrentOverDetails from './currentOverDetails';


describe('<CurrentOverDetails>', () => {
    test('renders the component', () => {
        const wrapper = shallow(<CurrentOverDetails currentOverDetails="1 2" currentBowler="player1" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test("Test if component rendered correctly", () => {
        const wrapper = shallow(<CurrentOverDetails currentOverDetails="1 2" currentBowler="player1" />);
        expect(wrapper.find('div').length).toBe(3);
    });
});
