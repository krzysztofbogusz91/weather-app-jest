import * as types from '../actions/types';

const initialState = {
    cords: {},
    weather: [],
    today: [],
    error: false,
    isLoading: false,
    auto: [],
    inputVal: "",
  }

export default (state={...initialState}, action) => {
    switch (action.type) {
        case types.FETCH_WEATHER:
        //creates object to pass as a props
        const {name, coord, main: {temp, humidity}} = action.payload;
        const {icon, description} = {...action.payload.weather[0]}
            return {
                ...state,
                error: action.error,
                isLoading: action.isLoading,
                today: [{name, coord, temp, humidity, icon, description}]
            }
        case types.FETCH_FORECAST:{

            const myData = action.payload.list.map(a => {
                const fixWeather = a.weather[0]
                a.weather = fixWeather;
                const name = a.dt_txt;
                const {main: {temp, humidity}, weather: {icon, description}} = a;
                
                return {name, temp, humidity, icon, description}
            })
           
            return {
                ...state,
                weather: myData,
                isLoading: action.isLoading,
                //action.payload.list
            }
        }
        case types.INPUT_VAL:
            return {
                ...state,
                inputVal: action.payload
            }
        case types.AUTO_COM:
            return{
                ...state,
                auto: action.payload
            }    
        case types.USER_CORDS:
            return{
                ...state,
                cords: action.payload
            }
        case types.CLEAR:
            return {
                ...state,
                weather: [],
                today: []
            }
        case types.FETCH_ERR:
            return {
                ...state,
                error: action.error,
                isLoading: action.isLoading
            }
        case types.FETCH_PENDING:
            return {
                ...state,
                isLoading: action.isLoading
            }             
        default:
            return state
    }
}
