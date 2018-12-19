import React from 'react';
import { shallow } from 'enzyme';
import Score from './Score';

describe('Score component', () => {
    let scoreWrapper;

    beforeEach(() => {
        scoreWrapper = shallow(<Score currentBattingTeam="Team1"
            currentBowler="Player3"
            currentBatsman="Player1"
            recordRuns={jest.fn()}
            />);
      });

    it('should match snapshot', () => {
        expect(scoreWrapper).toMatchSnapshot();
    });

    it('should load component', () => {
        expect(scoreWrapper.find('.runs-container').length).toEqual(1);
        expect(scoreWrapper.find('.extra-runs-container').length).toEqual(1);
        expect(scoreWrapper.find('.out-container').length).toEqual(1);
        expect(scoreWrapper.find('.next-ball-container').length).toEqual(1);
    });

    it('should load run buttons', () => {
        const runButtons = scoreWrapper.find('.runs-container');
        expect(runButtons.props().children.length).toEqual(6);
    });

    it('should load extra buttons', () => {
        const extraButtons = scoreWrapper.find('.extra-runs-container');
        expect(extraButtons.props().children.length).toEqual(2);
        expect(extraButtons.props().children[1].length).toEqual(4);
    });

    it('should load out button', () => {
        const outButtons = scoreWrapper.find('.out-container');
        expect(outButtons.props().className).toEqual('out-container');
    });

    it('should load next ball button', () => {
        const nextButtons = scoreWrapper.find('.next-ball-container');
        expect(nextButtons.props().className).toEqual('next-ball-container');
    });
    
    it('should handle run change event', () => {
        const event = {
            target: {
                innerText: 1
            }
        }
        const oneRun = scoreWrapper.find('.runs-container').props().children[1];
        oneRun.props.onClick(event);
        expect(scoreWrapper.state().runs).toEqual(1);
    });

    it('should handle extra event', () => {
        const event = {
            target: {
                innerText: 'W'
            }
        }
        const wide = scoreWrapper.find('.extra-runs-container').props().children[1][1];
        wide.props.onClick(event);
        expect(scoreWrapper.state().extraType).toEqual('W');
        expect(scoreWrapper.state().isExtra).toEqual(true);
    });

    it('should handle out event', () => {
        const out = scoreWrapper.find('.out-container').props().children;
        out.props.onClick();
        expect(scoreWrapper.state().isOut).toEqual(true);
    });

    it('should handle next ball event', () => {
        scoreWrapper.setProps({
            runs: 4,
            isExtra: false,
            extraType: null,
            isOut: false
        });
        const next = scoreWrapper.find('.next-ball-container').props().children;
        next.props.onClick();
        expect(scoreWrapper.state().isOut).toEqual(false);
        expect(scoreWrapper.state().runs).toEqual(null);
    });
});