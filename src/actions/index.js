import * as types from './types';


const API_KEY = '54df0301d1505a0aee49fe3b417ecd92';

export const fetchWeather = () => dispatch =>{

    let search =`lat=${54}&lon=${55}`
    const url = `https://api.openweathermap.org/data/2.5/weather?${search}&appid=${API_KEY}`;

   return fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: types.FETCH_WEATHER,
                payload: data
            })}
        ).catch(err => err );

}


export const fetchForecast = () => dispatch =>{

    let search =`lat=${54}&lon=${55}`
    const url = `https://api.openweathermap.org/data/2.5/forecast?${search}&appid=${API_KEY}`;

   return fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: types.FETCH_FORECAST,
                payload: data
            })}
        ).catch(err => err );

}

export const fetchUser = () => dispatch =>{

    // if (navigator.geolocation) {
    //     /* geolocation is available */
    //     console.log('geo yes')
    //     navigator.geolocation.getCurrentPosition((pos)=>{
    //         const crd = pos.coords
            
    //         dispatch({type: types.USER_CORDS, payload: {lat: crd.latitude, lng: crd.longitude} })
    //     });
    //   } else {
        /* geolocation IS NOT available */
       
        const key = 'AIzaSyB0jxnnSPREDEgoCvskYDxjJPJ2nSAzDaA'
        const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`;
    
       return fetch(url, {method: 'POST'})
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: types.USER_CORDS,
                    payload: data.location
                })}
            ).catch(err => err );
    //   } end if else

}
