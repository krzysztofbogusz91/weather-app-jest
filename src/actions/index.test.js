import * as actions from './index'
import * as types from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchWeather } from "./index";


const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ data: {} });

describe('Test fetch returns positive responce', () => {

    it('creates an async action to fetch', () => {
        const mockResponse = { data: { weather: 'sunshine!' } };

        fetchMock.get(`https://api.openweathermap.org/data/2.5/weather?lat=${54}&lon=${55}&appid=54df0301d1505a0aee49fe3b417ecd92`, mockResponse)

        const expected = [{
            payload: {
                data: mockResponse.data
            },
            type: types.FETCH_WEATHER
        }];

        return store.dispatch(fetchWeather()).then((res) => {

            expect(store.getActions()).toEqual(expected)
        })

    });

    fetchMock.restore();
});

describe('Test reject api', () => {
    //alows differnt responses from same api   
    fetchMock.config.overwriteRoutes = true;

    it('tests err', () => {
        //rest store
        store.clearActions()
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

        return store.dispatch(fetchWeather()).then(() => {
            //response should not match expected (resp.status 404) 
            expect(store.getActions()).not.toEqual(expected)
        }
        );

    });

});
