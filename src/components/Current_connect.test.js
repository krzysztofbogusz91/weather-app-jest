import Current from './Current';
import React from 'react';
import { shallow } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast } from '../actions/index';
import configureMockStore from 'redux-mock-store';
import set from '../enzyme_set_up';
import * as actions from '../actions/index'

const mockStore = configureMockStore();

describe('Current connect', () => {
    let wrapper, store;


    const initialState = {
        today: {}, weather: {}, cords: {}
    };
    store = mockStore(initialState);
    wrapper = shallow(
        <Current store={store} />
    );
    it('should have props, same as initialState', () => {
        expect(store.getState()).toEqual(initialState)
    });

    //TO DO => HOW TO TEST ACTIONS IN THAT CASE
    //FIX TEST COVERAGE BUT IS IT CORRECT?
    //LINK : https://jsramblings.com/2018/01/15/3-ways-to-test-mapStateToProps-and-mapDispatchToProps.html 
});

