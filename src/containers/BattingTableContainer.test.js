jest.mock('../App');

import React from 'react';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import BattingTableContainer, {getStrikeRate, createBattingStatsIndex, getPlayerBattingStats} from "./BattingTableContainer";
import StatsTable from '../components/scoreboard/StatsTable';
import {Provider} from 'react-redux'
import App from '../App';

let over = [{
    batsman: "Player1",
    bowler: "bowler1",
    isExtra: false,
    isOut: false,
    extraRuns: 0,
    runs: 4,
    extraType: undefined
},
{
    batsman: "Player1",
    bowler: "bowler1",
    isExtra: false,
    isOut: true,
    extraRuns: 0,
    runs: 0,
    extraType: undefined
},
{
    batsman: "Player2",
    bowler: "bowler1",
    isExtra: true,
    isOut: false,
    extraRuns: 1,
    runs: 6,
    extraType: 'Nb'
}]

const storeFake = state => {
    let stateData = {
        team: {
            Team1: {
                players: {
                    "Player1": {
                        isAvaialbleForBatting: true,
                        isAvaialbleForBowling: true
                    },
                    "Player2": {
                        isAvaialbleForBatting: true,
                        isAvaialbleForBowling: true
                    },
                },
                overs: [
                    over
                ]
            }
            
        },
        game: {
            currentBattingTeam: "Team1",
        },
    }
    return {

        default: jest.fn(),
        subscribe: jest.fn(),
        dispatch: jest.fn(),
        getState: () => Object.assign({}, state, stateData)
    };
  };


describe('container <BattingTableContainer />', () => {
    let wrapper, component, container, store;
  
    beforeEach(() => {
        jest.resetAllMocks();

        store = storeFake({});
        
        wrapper = mount(
            <Provider store={store}>
                <BattingTableContainer />
            </Provider>
        );

        container = wrapper.find(BattingTableContainer);
        component = container.find(StatsTable);
    });

    it('should render both the container and the component ', () => {
        expect(container.length).toBeTruthy();
        expect(component.length).toBeTruthy();
    });

    it('should map state to props', () => {      
        let props = component.props();
        expect(props.headers.join('')).toBe([ 'Batsman', 'Runs', 'Balls', 'Fours', 'Sixes', 'SR' ].join(''));
    });

    it('should return expected strike rate', ()=>{
        expect(getStrikeRate(10,5)).toBe("200.00");
    })

    it("should return expected index", ()=>{
        let result = {
            Player1: { runs: 4, isOut:true, balls: 2, fours: 1, sixes: 0 },
            Player2: { runs: 6, isOut:false, balls: 1, fours: 0, sixes: 1 },
        }
        expect(createBattingStatsIndex([over])).toEqual(result);
    })

    
    it('should return player batting state', ()=>{
        let expectedResult = [
            ["Player1(out)", 4, 2, 1, 0, "200.00"],
            ["Player2", 6, 1, 0, 1, "600.00"]
        ]
        expect(getPlayerBattingStats(store.getState())).toEqual(expectedResult);
    })
    
});

