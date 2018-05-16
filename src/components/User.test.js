import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import set from '../enzyme_set_up';
import User from './User';

describe('User',()=>{
    const us = shallow( <User /> )

    it('renders without crashing', () => {
        expect(us).toMatchSnapshot();
    });
      
})
