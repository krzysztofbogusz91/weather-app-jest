import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Current from './Current'
import { shallow, mount } from 'enzyme';
import set from '../enzyme_set_up';

describe('App',()=>{
    const app = shallow( <App />)

    it('renders without crashing', () => {
        expect(app).toMatchSnapshot();
    });
      
})


