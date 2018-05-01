import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Current from './Current'
import { shallow, mount } from 'enzyme';
import set from '../enzyme_set_up';
// import { connect, Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
//
// // create any initial state needed
// const initialState = {};
// // here it is possible to pass in any middleware if needed into //configureStore
// const mockStore = configureStore();
//  //creates the store with any initial state or middleware needed
// let store = mockStore(initialState)

describe('App',()=>{
    //const mockDoSomething = jest.fn();
    //let props = {doSomething: mockDoSomething}
    const app = shallow( <App />)

    it('renders without crashing', () => {
        expect(app).toMatchSnapshot();
    });

    it('Contain Current component', () => {
        expect(app.find("Current").exists() ).toBe(true);
    });


})


