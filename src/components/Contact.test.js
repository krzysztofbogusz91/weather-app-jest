import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import set from '../enzyme_set_up';
import Contact from './Contact';

describe('User',()=>{
    const con = shallow( <Contact /> )

    it('renders without crashing', () => {
        expect(con).toMatchSnapshot();
    });
      
})
