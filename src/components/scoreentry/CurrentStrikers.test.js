import React from 'react';
import { shallow } from 'enzyme';
import CurrentStrikers from './CurrentStrikers';

describe('Current Strikers Component', () => {
    let currentStrikersWrapper;
    
    beforeEach(() => {
        currentStrikersWrapper = shallow(<CurrentStrikers
            strikers = {[
                {name: 'Player1', isStriker: true},
                {name: 'Player2', isStriker: false}
            ]}
        />)
    });

    it('should match snapshot', () => {
        expect(currentStrikersWrapper).toMatchSnapshot();
    });
});