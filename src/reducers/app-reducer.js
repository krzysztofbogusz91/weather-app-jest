import * as types from '../actions/types';

const initialState = {
    cords: {},
    weather: [],
    today: []
  }

export default (state={...initialState}, action) => {
    switch (action.type) {
        case types.FETCH_WEATHER:
        console.log()
        const {temp, humidity} = action.payload.main
        const {name, weather} = action.payload;
        const {icon, description} = {...action.payload.weather[0]}
        
            return {
                ...state,
                today: [{name, temp, humidity, icon, description}]
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
