import * as types from '../actions/types';


export default (state={}, action) => {
    switch (action.type) {
        case types.TYPE: 
            return {
                ...state,
                result: action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}