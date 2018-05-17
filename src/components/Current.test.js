import React from 'react';
import { Current } from './Current'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast, clearFetch } from '../actions/index';



const mockfetchWeather = jest.fn()
const mockfetchUser = jest.fn(() => { props.cords = { cords: "cor" } })
const mockfetchForecast = jest.fn();
const mockClearFetch = jest.fn();
const props = { today: [], weather: [], cords: {}, fetchUser: mockfetchUser, fetchForecast: mockfetchForecast, fetchWeather: mockfetchWeather, mockClearFetch }

describe('Current', () => {

    //USE MOUNT TO TEST PROPS VALUES AND CHANGES
    const current = shallow(<Current {...props} />)

    it('renders without crashing', () => {
        expect(current).toMatchSnapshot();
    });

    it('fetchUser should update props', () => {
        expect(current.props().cords).not.toEqual({})
    });
})

describe('Mount Current', () => {

    const current = mount(<Current {...props} />)

    it('should call fetchUser prop once', () => {
        expect(current.props().fetchUser).toHaveBeenCalled();
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

        expect(current.find('.current-weather').children().length).toEqual(2)
    });

});

