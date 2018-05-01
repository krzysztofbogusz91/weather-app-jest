import * as actions from './index'
import * as types from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {fetchWeather} from "./index";


const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ data: {} });
const mockResponse = { data: { weather: 'sunshine!' }};

fetchMock.get(`https://api.openweathermap.org/data/2.5/weather?lat=${54}&lon=${55}&appid=54df0301d1505a0aee49fe3b417ecd92`, mockResponse)

it('creates an async action to fetch', () => {


    const expected =[{
        data: mockResponse.data,
        type: types.FETCH_WEATHER}];

    return store.dispatch(fetchWeather()).then(()=>{
        expect(store.getActions()).toEqual(expected)
    })

});
