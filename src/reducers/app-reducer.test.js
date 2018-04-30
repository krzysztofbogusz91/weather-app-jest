import appReducer from './app-reducer';
import * as types from '../actions/types'

it('should sets inicial state to empty object', () => {
    
    expect(appReducer(undefined,{
        type: types.TYPE,
    })).toEqual({result: undefined})
});