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
        expect(current.state().search).toEqual("");
    });

    it('should have input search bar that sets state ', function () {
        const bar = current.find('.search-fetch');
        bar.simulate('change', {target:{value: "Lond"}})
        expect(current.state().search).toEqual("Lond");
    });

    //NOT NECESSARY => just other way than above
    it('should call inputChage method and c', () => {
        current.instance().inputChange({target:{value: "Lod"}})
        expect(current.state().search).toEqual("Lod");
    });

    it('should have table showing current weather', () => {
        expect(current.find('.current-weather').children().length).toEqual(2)
    });

    // it('should have table showing current weather', () => {
    //     expect(current.find('Table').exists()).toBe(true)
    // });
   

    describe('Mount Current', () => {
        //NOT NECESSARY LEFT FOR FUTURE 
        const methodNameFake = jest.spyOn(Current.prototype, 'componentDidMount');
    
        const mountCurr = mount(<Current {...props} />)
        
        //NOT NESESERY LEFT FOR FUTURE 
        it('should have and called CDM method', () => {
            expect(methodNameFake).toHaveBeenCalled();
        });
         
        it('should call fetchUser prop once', () => {
            expect(mountCurr.props().fetchUser).toHaveBeenCalled();
        });

        it('fetchUser should update props', () => {
            expect(mountCurr.props().cords).not.toEqual({})
        });


    });
})


