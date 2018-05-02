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
    expect( appReducer(state, {type: types.TYPE }) ).toEqual(output)

});
