import * as types from '../actions/types';


export default (state={}, action) => {
    switch (action.type) {
        case types.FETCH_WEATHER:
            return {
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}
