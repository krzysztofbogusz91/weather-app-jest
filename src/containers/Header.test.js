import React from 'react';
import { shallow } from 'enzyme';
import { config } from '../enzyme_set_up';
import { Header } from './Header';

describe('Header', () => {
    const head = shallow(<Header />)
    it('should render properly', () => {
        expect(head).toMatchSnapshot()
    });
    it('should have class header', () => {
        expect(head.find('Link').exists()).toBe(true)
    });
});