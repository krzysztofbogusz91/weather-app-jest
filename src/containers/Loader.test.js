import React from 'react';
import { shallow } from 'enzyme';
import { config } from '../enzyme_set_up';
import { Loader } from './Loader';

describe('Loader', () => {
    const load = shallow(<Loader />)
    it('should render properly', () => {
        expect(load).toMatchSnapshot()
    });
});