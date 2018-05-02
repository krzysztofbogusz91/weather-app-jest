import * as types from '../actions/types';


export default (state={}, action) => {
    switch (action.type) {
        case types.FETCH_WEATHER:
            return {
                ...state,
                today: action.payload
            }
        case types.FETCH_FORECAST:{
            return {
                ...state,
                weather: action.payload
            }
        }    
        case types.USER_CORDS:
            return{
                ...state,
                cords: action.payload
            }    
        default:
            return state
    }
}
