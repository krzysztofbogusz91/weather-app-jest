import React from 'react';
import { shallow } from 'enzyme';
import { config } from '../enzyme_set_up';
import { Error } from './Error';

describe('Error', () => {
    const err = shallow(<Error />)
    it('should render properly', () => {
        expect(err).toMatchSnapshot()
    });
   
});