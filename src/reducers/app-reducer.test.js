import appReducer from './app-reducer';
import * as types from '../actions/types'

it('should sets empty state when no action', () =>{
    expect( appReducer(undefined,{}) ).toEqual({})
});

it('should test passing wrong type=> should return default from switch', () =>{
    expect( appReducer(undefined,{type: "NOTYPE"}) ).toEqual({})
});

it('should return new data with prev state', () => {
    const state = {data: "lala"}
    const output = {...state, result: undefined}
    expect( appReducer(state, {type: types.FETCH_WEATHER }) ).toEqual(output)

});

//NOT WORKING
it('should return state with cords', () => {
    const output = {cords: undefined}
    expect( appReducer(undefined, {type: types.USER_CORDS }) ).toEqual(output)

});

//NOT WORKING
it('should return state with weather arr', () => {
    const output = {weather: undefined}
    console.log(appReducer(undefined, {type: types.FETCH_FORECAST }), output)
    expect( appReducer(undefined, {type: types.FETCH_FORECAST }) ).toEqual(output)

});