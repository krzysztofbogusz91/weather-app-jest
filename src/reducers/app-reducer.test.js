import appReducer from './app-reducer';
import * as types from '../actions/types'

it('should sets empty state when no action', () =>{

    expect( appReducer(undefined,{}) ).toEqual({})
});

it('should sets state to have result property on action TYPE', () =>{
    expect( appReducer(undefined,{type: types.TYPE }) ).toEqual({result: undefined})
});
