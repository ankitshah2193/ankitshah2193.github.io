import React from 'react';
import { shallow } from 'enzyme';
import CurrentOverDetails from './CurrentOverDetails';

describe('CurrentOverDetails Componnet', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CurrentOverDetails 
            currentOverDetails="0 2N W"
            currentBowler="Player1"/>)
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});