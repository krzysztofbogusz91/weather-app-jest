import React from 'react';
import { Current } from './Current'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast } from '../actions/index';


const mockfetchWeather = jest.fn()
const mockfetchUser = jest.fn(() => { props.cords = { cords: "cor" } })
const mockfetchForecast = jest.fn();
const props = { today: [], weather: [], cords: {}, fetchUser: mockfetchUser, fetchForecast: mockfetchForecast, fetchWeather: mockfetchWeather }

describe('Current', () => {

    //USE MOUNT TO TEST PROPS VALUES AND CHANGES
    const current = shallow(<Current {...props} />)

    it('renders without crashing', () => {
        expect(current).toMatchSnapshot();
    });

    it('should have initial empty state ', function () {
        const bar = current.find('.search-fetch');
        expect(current.state().search).toEqual("");
    });

    it('should have input search bar that sets state ', function () {
        const bar = current.find('.search-fetch');
        bar.simulate('change', { target: { value: "Lond" } })
        expect(current.state().search).toEqual("Lond");
    });

    it('should have search button', function () {
        const button = current.find('.search');
        
        expect(button.exists()).toBe(true);
    });

  

    //NOT NECESSARY => just other way than above
    it('should call inputChage method and c', () => {
        current.instance().inputChange({ target: { value: "Lod" } })
        expect(current.state().search).toEqual("Lod");
    });

    it('fetchUser should update props', () => {
        expect(current.props().cords).not.toEqual({})
    });

    it('should not show table when showTable state falase', () => {
        expect(current.find('.current-weather').children().length).toEqual(0)
    });
})

describe('Mount Current', () => {

    const current = mount(<Current {...props} />)

    it('should call fetchUser prop once', () => {
        expect(current.props().fetchUser).toHaveBeenCalled();
    });

    it('On button click should call feches with search state', function () {
        current.setState({
            search: "Lond"
        })
        const button = current.find('.search').simulate('click');
        
        expect(current.props().fetchForecast).toHaveBeenCalledWith("Lond");
        expect(current.props().fetchWeather).toHaveBeenCalledWith("Lond");
    });



    it('fetchUser should update props', () => {
        expect(current.props().cords).not.toEqual({})
    });

    it(' show table when weather length is > 0', () => {
        current.setProps({
            today: [{
                    description: "clear sky",
                    humidity: 45,
                    icon: "01d",
                    main: "Clear",
                    name: "Poznań",
                    temp: 294.31
                }],
            weather: [
                {
                    description: "clear sky",
                    humidity: 45,
                    icon: "01d",
                    id: 800,
                    main: "Clear",
                    name: "2018-05-07 18:00:00",
                    temp: 294.31
                },
                {
                    description: "clear sky",
                    humidity: 45,
                    icon: "01d",
                    id: 800,
                    main: "Clear",
                    name: "2018-05-07 18:00:00",
                    temp: 294.31
                },
            ]
        })

        expect(current.find('.current-weather').children().length).toEqual(1)
    });

});

