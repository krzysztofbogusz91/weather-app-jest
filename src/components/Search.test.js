import React from 'react';
import { Search }  from './Search'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast } from '../actions/index';


const mockfetchWeather = jest.fn()
const mockfetchUser = jest.fn(() => { props.cords = { cords: "cor" } })
const mockfetchForecast = jest.fn();
const props = { today: [], weather: [], cords: {}, fetchUser: mockfetchUser, fetchForecast: mockfetchForecast, fetchWeather: mockfetchWeather }

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

    it('should have input search bar that sets state ', function () {
        const bar = search.find('.search-fetch');
        bar.simulate('change', { target: { value: "Lond" } })
        expect(search.state().search).toEqual("Lond");
    });

    it('should have search button', function () {
        const button = search.find('.search');
        
        expect(button.exists()).toBe(true);
    });

  
    //NOT NECESSARY => just other way than above
    it('should call inputChage method and c', () => {
        search.instance().inputChange({ target: { value: "Lod" } })
        expect(search.state().search).toEqual("Lod");
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
        search.setState({
            search: "Lond"
        })
        const button = search.find('.search').simulate('click');
        expect(search.props().fetchForecast).toHaveBeenCalledWith("Lond");
        expect(search.props().fetchWeather).toHaveBeenCalledWith("Lond");
    });
});

