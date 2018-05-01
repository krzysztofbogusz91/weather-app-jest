import * as types from './types';

const API_KEY = '54df0301d1505a0aee49fe3b417ecd92';

export const fetchWeather = () => dispatch =>{

    let search =`lat=${54}&lon=${55}`
    const url = `https://api.openweathermap.org/data/2.5/weather?${search}&appid=${API_KEY}`;

   return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: types.FETCH_WEATHER,
                payload: data
            })}
        ).catch(err => console.log(err));

}