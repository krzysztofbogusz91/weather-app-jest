import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import set from '../enzyme_set_up'
import { connect, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// create any initial state needed
const initialState = {};
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
 //creates the store with any initial state or middleware needed
let store = mockStore(initialState)

describe('App',()=>{
    //const mockDoSomething = jest.fn();
    //let props = {doSomething: mockDoSomething}
    const app = shallow( <App />)

    it('renders without crashing', () => {
        expect(app).toMatchSnapshot();
    });

    // it('has props doSomething',()=>{
    //
    //     expect(Connect(app).props().doSomething).toBeTruthy()
    // })
    it('displays dIV tekst ', () => {
        expect(app.find('.main').text()).toEqual('APP');
    });

})


