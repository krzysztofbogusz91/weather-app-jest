import React from 'react';
import { Current } from './Current'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast }  from '../actions/index';


describe('Current',()=>{
   const mockfetchWeather = jest.fn()
   const mockfetchUser = jest.fn()
   const mockfetchForecast = jest.fn();

   const props = {today: {}, weather: {}, cords: {}, fetchUser: mockfetchUser, fetchForecast:mockfetchForecast, fetchWeather: mockfetchWeather}
    //USE MOUNT TO TEST PROPS VALUES AND CHANGES
    const current = shallow( <Current {...props} />)

    it('renders without crashing', () => {
        expect(current).toMatchSnapshot();
    });

    it('should have input search bar that sets state ', function () {
        const bar = current.find('.search-fetch');
        bar.simulate('change', {target:{value: "Lond"}})
        expect(current.state().search).toEqual("Lond")
    });

})


