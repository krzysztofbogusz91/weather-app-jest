import * as types from './types';
import { term } from '../helpers/check_search';

const API_KEY = '54df0301d1505a0aee49fe3b417ecd92';
const urlMain = `https://api.openweathermap.org/data/2.5/`;

export const clearFetch = () => {
    return {
        type: types.CLEAR,
    }
}

export const pendingFetch = () => {
    return {
        type: types.FETCH_PENDING,
        isLoading: true
    }
}

export const updateInput = term =>{
    return {
        type: types.INPUT_VAL,
        payload: term
    }
}

export const fetchWeather = data => dispatch => {

    let search = term(data);
    const url = `${urlMain}weather?${search}&appid=${API_KEY}`;



    return fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: types.FETCH_WEATHER,
                payload: data,
                error: false,
                isLoading: false
            })
        }
        ).catch(err => {
            dispatch({
                type: types.FETCH_ERR,
                error: true,
                isLoading: false
            })
        });
}

export const fetchForecast = data => dispatch => {

    let search = term(data);
    const url = `${urlMain}forecast?${search}&appid=${API_KEY}`;

    return fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: types.FETCH_FORECAST,
                payload: data,
                error: false,
                isLoading: false
            })
        }
        ).catch(err => {
            dispatch({
                type: types.FETCH_ERR,
                error: true,
                isLoading: false
            })

        });
}

export const fetchUser = () => dispatch => {

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

    return fetch(url, { method: 'POST' })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: types.USER_CORDS,
                payload: data.location
            })
        }
        ).catch(err => err);
    //   } end if else
}

export const autoComplete = term => dispatch => {
    
    console.log('term: ​', term );
    const data = [
    { city: "Katex", state: "Saki", country: "Azerbaijan" },

    { city: "Texcalyacac", state: "Mexico", country: "Mexico" },

    { city: "Texcoco", state: "Mexico", country: "Mexico" },

    { city: "Texmelucan", state: "Puebla", country: "Mexico" },

    { city: "Atexcatzingo", state: "Tlaxcala", country: "Mexico" },
]

   dispatch({
        type: types.AUTO_COM,
        payload: data
    })
    console.log('dispached')



    // console.log('wywo')

    // const key = `Yh5PIaZSUSmshH4egy13RmkXdUEHp1czYGmjsnWRfgrt90PVus`
    // const url = `https://andruxnet-world-cities-v1.p.mashape.com/?query=${term}&searchby=city`;

    // const myHeaders = new Headers({
    //     "Accept": "application/json",
    //     "X-Mashape-Key": key
    // });

    // const myInit = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     mode: 'cors',
    //     cache: 'default'
    // };

    // const myRequest = new Request(url, myInit);

    // console.log('build​', );

    // return fetch(myRequest)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         dispatch({
    //             type: types,
    //             payload: data
    //         })
    //     }
    //     ).catch(err => err);
}

// const data = [
//     { city: "Katex", state: "Saki", country: "Azerbaijan" },

//     { city: "Texcalyacac", state: "Mexico", country: "Mexico" },

//     { city: "Texcoco", state: "Mexico", country: "Mexico" },

//     { city: "Texmelucan", state: "Puebla", country: "Mexico" },

//     { city: "Atexcatzingo", state: "Tlaxcala", country: "Mexico" },
// ]