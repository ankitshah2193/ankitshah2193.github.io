import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Popup from './Popup';
import Modal from "react-responsive-modal";


describe('<Popup>', () => {
    test('renders the popup component', () => {
        const wrapper = shallow(<Popup wickets={5} players={{}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('modal renders button' , () => {
        const wrapper = shallow(<Popup wickets={5} players={{
                    Player3 : {
                        isAvaialbleForBatting: true
                    },
                    Player4 : {
                        isAvaialbleForBatting: true
                    }
                }}/>);
        expect(wrapper.find('button').length).toEqual(1);

    });


    test('modal sets selected player' , () => {
        let players = {
            Player3 : {
                isAvaialbleForBatting: true
            },
            Player4 : {
                isAvaialbleForBatting: true
            }
        };
        const wrapper = shallow(<Popup 
            wickets={0} players={players}
            setBatsman={jest.fn()} wickets={1} 
        />);
        wrapper.find('button').simulate('click');
        expect(wrapper.state('selectedPlayer')).toEqual(
            ""
        );

    });




    
});

