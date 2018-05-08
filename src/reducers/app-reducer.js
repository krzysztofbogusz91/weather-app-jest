import * as types from '../actions/types';

const initialState = {
    cords: {},
    weather: {},
    today: {}
  }

export default (state={...initialState}, action) => {
    switch (action.type) {
        case types.FETCH_WEATHER:
        const {name, main, weather} = action.payload;
            return {
                ...state,
                today: [{name, main, weather}]
            }
        case types.FETCH_FORECAST:{

            const myData = action.payload.list.map(a => {
                const name = a.dt_txt;
                const {main, weather} = a;
                return {name, main, weather}
            })
           
            return {
                ...state,
                weather: myData
                //action.payload.list
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
