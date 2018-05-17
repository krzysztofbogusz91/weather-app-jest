import * as actions from './index'
import * as types from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchWeather, fetchUser, fetchForecast, clearFetch } from "./index";


const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ data: {} });
fetchMock.config.overwriteRoutes = true;

describe('fetchWeather', () => {
    beforeEach(() => {
        store.clearActions()
    });
    afterEach(() => {
        fetchMock.restore();
    });


    it('creates an async action to fetch', () => {
        const mockResponse = { data: { weather: 'sunshine!' } };

        fetchMock.get(`https://api.openweathermap.org/data/2.5/weather?lat=${54}&lon=${55}&appid=54df0301d1505a0aee49fe3b417ecd92`, mockResponse)

        const expected = [{
            payload: {
                data: mockResponse.data
            },
            type: types.FETCH_WEATHER,
            error: false
        }];
        let search = {lat: 54, lng: 55};
        return store.dispatch(fetchWeather(search)).then(() => {
            expect(store.getActions()).toEqual(expected)
        })

    }); 

    it('tests err', () => {
        //set new response form server
        const mockResponse = { status: 404 };
        fetchMock.get(`https://api.openweathermap.org/data/2.5/weather?lat=${54}&lon=${55}&appid=54df0301d1505a0aee49fe3b417ecd92`, mockResponse)

        //expected response form passing call
        const expected = [{
            payload: {
                data: mockResponse.data
            },
            type: types.FETCH_WEATHER
        }];
        let search = {lat: 54, lng: 55}
        return store.dispatch(fetchWeather(search)).then(() => {
            //response should not match expected (resp.status 404) 
            expect(store.getActions()).not.toEqual(expected)
        }
        );
    }); 
});

describe('getForecast', () => {
    beforeEach(() => {
        store.clearActions()
    });
    afterEach(() => {
        fetchMock.restore();
    });

   

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${54}&lon=${55}&appid=54df0301d1505a0aee49fe3b417ecd92`

    it('creates an async action to fetch', () => {
        const mockResponse = { data: [{ weather: 'sunshine!' },{ weather: 'rain!' }] };

        fetchMock.get(url, mockResponse)

        const expected = [{
            payload: {
                data: mockResponse.data,
            },
            type: types.FETCH_FORECAST,
            error: false
        }];
        let search = {lat: 54, lng: 55}
        return store.dispatch(fetchForecast(search)).then(() => {
            expect(store.getActions()).toEqual(expected)
        })

    }); 

    it('tests err', () => {
        //set new response form server
        const mockResponse = { status: 404 };
        fetchMock.get(url, mockResponse)

        const expected = [{
            payload: {
                data: mockResponse.data
            },
            type: types.FETCH_FORECAST
        }];
        let search = {lat: 54, lng: 55}
        return store.dispatch(fetchForecast(search)).then(() => {
            //response should not match expected (resp.status 404) 
            expect(store.getActions()).not.toEqual(expected)
        }
        );
    }); 

});

describe('getUserCords', () => {
    const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB0jxnnSPREDEgoCvskYDxjJPJ2nSAzDaA';
    beforeEach(() => {
        store.clearActions()
    });
    afterEach(() => {
        fetchMock.restore();
    });
    
    it('call api and get user coords', () => {
        const mockResponse = { location: { lat: "36.24", lon:"-124.32" } };

        fetchMock.post(url, mockResponse)

        const expected = [{
            payload: mockResponse.location,
            type: types.USER_CORDS
        }];

        return store.dispatch(fetchUser()).then(() => {
            expect(store.getActions()).toEqual(expected)
        })
    });

    it('call api and gets error ', () => {
        const mockResponse = { status: 404 };

        fetchMock.post(url, mockResponse)

        const expected = [{
            payload: mockResponse,
            type: types.USER_CORDS
        }];

        return store.dispatch(fetchUser()).then(() => {

            expect(store.getActions()).not.toEqual(expected)
        })
    });
});

describe('ClearFetches', () => {
    const expected = {
        type: types.CLEAR
    }
    expect(actions.clearFetch()).toEqual(expected)
});