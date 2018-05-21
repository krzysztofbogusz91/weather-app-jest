import React from 'react';
import { shallow } from 'enzyme';
import { config } from '../enzyme_set_up';
import { ErrorComponent } from './ErrorComponent';

describe('ErrorComponent', () => {
    const err = shallow(<ErrorComponent />)
    it('should render properly', () => {
        expect(err).toMatchSnapshot()
    });
   
});