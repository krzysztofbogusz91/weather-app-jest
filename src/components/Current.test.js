import React from 'react';
import { Current } from './Current'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast }  from '../actions/index';

// it('should call mapStateToProps', () => {
//     mapStateToProps = jest.fn()
// });

describe('Current',()=>{
   const mockfetchWeather = jest.fn()
   const mockfetchUser = jest.fn(()=>{props.cords = {cords: "cor"}})
   const mockfetchForecast = jest.fn();

   const props = {today: {}, weather: {}, cords: {}, fetchUser: mockfetchUser, fetchForecast:mockfetchForecast, fetchWeather: mockfetchWeather}
    //USE MOUNT TO TEST PROPS VALUES AND CHANGES
    const current = shallow( <Current {...props} />)

    it('renders without crashing', () => {
        expect(current).toMatchSnapshot();
    });

    it('should have initial empty state ', function () {
        const bar = current.find('.search-fetch');
        //bar.simulate('change', {target:{value: ""}})
        expect(current.state().search).toEqual("");
    });

    it('should have input search bar that sets state ', function () {
        const bar = current.find('.search-fetch');
        bar.simulate('change', {target:{value: "Lond"}})
        expect(current.state().search).toEqual("Lond");
    });

    //no change 85.71
    it('should call inputChage method', () => {
        current.instance().inputChange({target:{value: "Lod"}})
        expect(current.state().search).toEqual("Lod");
    });


    //no change 85.71
    it('should have input', () => {
        expect(current.find('.search-fetch').exists()).toBe(true)
    });
    //no change 85.71
    it('should have form', () => {
        expect(current.find('form').exists()).toBe(true)
    });

    describe('Mount Current', () => {
        const methodNameFake = jest.spyOn(Current.prototype, 'componentDidMount');
        //const inputChangeFake = jest.spyOn(Current.prototype, 'inputChange');
        const mountCurr = mount(<Current {...props} />)
        
         //no change 85.71
        // it('should have and called CDM method', () => {
        //     expect(methodNameFake).toHaveBeenCalled();
        // });
         //no change 85.71
        // it('should call fetchUser prop once', () => {
        //     expect(mountCurr.props().fetchUser).toHaveBeenCalled();
        // });

        // it('should not call fetchWeather prop once', () => {
        //     expect(mountCurr.props().fetchWeather).not.toHaveBeenCalled();
        // });

        // it('should not call fetchForecast prop once', () => {
        //     expect(mountCurr.props().fetchForecast).not.toHaveBeenCalled();
        // });
        //  //no change 85.71
        // it('fetchUser should update props', () => {
        //     expect(mountCurr.props().cords).not.toEqual({})
        // });


    });
})


