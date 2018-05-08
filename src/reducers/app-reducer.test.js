import appReducer from './app-reducer';
import * as types from '../actions/types'

describe('appReducer', () => {
  
it('should set initial state when no action', () =>{
    const state = {
        cords: {},
        weather: {},
        today: {}
      }
    expect( appReducer(state,{}) ).toEqual(state)
});

it('should test passing wrong type=> should return default from switch', () =>{
    const state = {
        cords: {},
        weather: {},
        today: {}
      }
    expect( appReducer(undefined,{type: "NOTYPE"}) ).toEqual(state)
});

it('should return new data with prev state', () => {
    const state = {
        cords: {},
        weather: {},
        today: {}
      }
    const result = {weather: "sunny", main: {}, name: {}}
    const output = {...state, today:[{ weather: result.weather, main:{}, name: {} }] }
  
    expect( appReducer(state, {type: types.FETCH_WEATHER, payload: result }) ).toEqual(output)
});

it('should return state with cords', () => {
    const state = {
        cords: {},
        weather: {},
        today: {}
      }
    const output = {...state, cords: {lat: 45, lng: 45}}
    expect( appReducer(state, {type: types.USER_CORDS, payload: output.cords}) ).toEqual(output)
});

it('should return state with weather arr', () => {
    const state = {
        cords: {},
        weather: {},
        today: {}
      }

    const result = {list: [{main: undefined, name: undefined, weather: undefined}, {main: undefined, name: undefined, weather: undefined}]}
    const output = {...state, weather: result.list }

    expect( appReducer(state, {type: types.FETCH_FORECAST, payload: result }) ).toEqual(output)

});


});