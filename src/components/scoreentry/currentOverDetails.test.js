import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CurrentOverDetails from './currentOverDetails';


describe('<CurrentOverDetails>', () => {
    test('renders the component', () => {
        const wrapper = shallow(<CurrentOverDetails currentOverDetails="1 2" currentBowler="player1" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test("Test if props overs details rendered correctly", () => {
        const wrapper = shallow(<CurrentOverDetails currentOverDetails="1 2" currentBowler="player1" />);
        expect(toJson(wrapper.find('div.col-sm-12').first().children()).join(" ").trim()).toBe("This Over:  1 2");
    });
});
