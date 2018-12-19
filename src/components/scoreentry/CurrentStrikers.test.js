import React from 'react';
import { shallow } from 'enzyme';
import CurrentStrikers from './CurrentStrikers';

describe('Current Strikers Component', () => {
    let currentStrikersWrapper;
    
    beforeEach(() => {
        currentStrikersWrapper = shallow(<CurrentStrikers
        striker="Player1"
        nonStriker="Player2"
        />)
    });

    it('should match snapshot', () => {
        expect(currentStrikersWrapper).toMatchSnapshot();
    });
});