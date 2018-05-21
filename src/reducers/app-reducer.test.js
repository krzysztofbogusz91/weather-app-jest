import appReducer from './app-reducer';
import * as types from '../actions/types'

describe('appReducer', () => {
  
it('should set initial state when no action', () =>{
    const state = {
        cords: {},
        weather: [],
        today: []
      }
    expect( appReducer(state,{}) ).toEqual(state)
});

it('should test passing wrong type=> should return default from switch', () =>{
    const state = {
        cords: {},
        weather: [],
        today: [],
        error: false,
        isLoading: false,
        auto: [],
        inputVal: ''
      }
    expect( appReducer(undefined,{type: "NOTYPE"}) ).toEqual(state)
});

it('should return new data with prev state', () => {
    const state = {
        cords: {},
        weather: [],
        today: []
      }
    const result = {weather: [{icon: "43", description:'des'}], main: {}, name: {}}
    const output = {...state, today:[{ name: {}, temp: undefined, humidity: undefined, icon: "43", description: "des"}] }
  
    expect( appReducer(state, {type: types.FETCH_WEATHER, payload: result }) ).toEqual(output)
});

it('should return state with cords', () => {
    const state = {
        cords: {},
        weather: {},
        today: {}
      }
    const output = {...state, cords: {lat: 45, lng: 45}}
    expect( appReducer(state, {type: types.USER_CORDS, payload: output.cords}) ).toEqual(output)
});

it('should return state with weather arr', () => {
    const state = {
        cords: {},
        weather: {},
        today: {}
      }

    const result = {
        list: 
            [
                    {
                    main:  {temp: "test", humidity: 50 } , 
                    name: undefined,
                    weather:[{description: "test", icon: "test"}]
                }, 
                {
                    main:{temp: "test", humidity: 50 }, 
                    name: undefined, 
                    weather: [{description: "test", icon: "test"}]
                }
            ]
        }


    const output = {...state, weather: [{ name: undefined, temp: 'test', humidity: 50, icon: 'test', description: 'test'},{ name: undefined, temp: 'test', humidity: 50, icon: 'test', description: 'test'}] }

    expect( appReducer(state, {type: types.FETCH_FORECAST, payload: result }) ).toEqual(output)

});

it('should clear forecast and weather states', () => {
    const state = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"]
      }
    
    const output = {...state , weather: [], today: []}
    
    expect( appReducer(state, {type: types.CLEAR} )).toEqual(output)
});

it('test error action', () => {
    const state = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false
      }
    
    const output = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: true}
    
    expect( appReducer(state, {type: types.FETCH_ERR, error: true} )).toEqual(output)
});

    
it('test InputVal case', () => {
    const state = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false,
        inputVal: ""
      }
    
    const output = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false,
        inputVal: "term"
    }
    
    expect( appReducer(state, {type: types.INPUT_VAL, payload: "term" } )).toEqual(output)
});

it('test AutoCom case', () => {
    const state = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false,
        inputVal: "",
        auto: []
      }
    
    const output = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false,
        inputVal: "",
        auto: []
    }
    
    expect( appReducer(state, {type: types.AUTO_COM, payload: [] } )).toEqual(output)
});

it('test Fetch Pending case', () => {
    const state = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false,
        inputVal: "",
        isLoading: false
      }
    
    const output = {
        cords: {},
        weather:  ["sunshine"],
        today: ["sunshine"],
        error: false,
        inputVal: "",
        isLoading: true
    }
    
    expect( appReducer(state, {type: types.FETCH_PENDING, isLoading: true } )).toEqual(output)
});

});