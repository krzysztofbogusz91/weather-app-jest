import React from 'react';
import { Search }  from './Search'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast, pendingFetch, updateInput } from '../actions/index';


const mockfetchWeather = jest.fn()
const mockfetchUser = jest.fn(() => { props.cords = { cords: "cor" } })
const mockfetchForecast = jest.fn();
const mockPendingFetch = jest.fn();
const mockUpdateInput = jest.fn();
const props = { auto: [], inputVal: "Lond", today: [], weather: [], cords: {}, fetchUser: mockfetchUser, fetchForecast: mockfetchForecast, fetchWeather: mockfetchWeather, pendingFetch: mockPendingFetch, updateInput: mockUpdateInput }

describe('Search', () => {

    //USE MOUNT TO TEST PROPS VALUES AND CHANGES
    const search = shallow(<Search {...props} />)

    it('renders without crashing', () => {
        expect(search).toMatchSnapshot();
    });

    it('should have initial empty state ', function () {
        const bar = search.find('.search-fetch');
        expect(search.state().search).toEqual("");
    });

    it('should have search button', function () {
        const button = search.find('.search');
        expect(button.exists()).toBe(true);
    });

    it('fetchUser should update props', () => {
        expect(search.props().cords).not.toEqual({})
    });

    it('should not show table when list length > 0', () => {
        expect(search.find('.search-weather').children().length).toEqual(0)
    });
})

describe('Mount Search', () => {

    const search = mount(<Search {...props} />)

    it('On button click should call feches with search state', function () {
        const button = search.find('.search').simulate('click');
        expect(search.props().fetchForecast).toHaveBeenCalledWith("Lond");
        expect(search.props().fetchWeather).toHaveBeenCalledWith("Lond");
    });
});

