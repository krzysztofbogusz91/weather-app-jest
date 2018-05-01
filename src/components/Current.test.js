import React from 'react';
import Current from './Current'
import set from '../enzyme_set_up';
import { shallow } from 'enzyme'

describe('Current',()=>{

    const current = shallow( <Current />)

    it('renders without crashing', () => {
        expect(current).toMatchSnapshot();
    });

    it('should have input search bar that sets state ', function () {

        const bar = current.find('.search-fetch');
        bar.simulate('change', {target:{value: "Lond"}})
        expect(current.state().search).toEqual("Lond")
    });


})


