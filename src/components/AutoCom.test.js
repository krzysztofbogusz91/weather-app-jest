import React from 'react';
import { AutoCom } from './AutoCom'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';


describe('AutoCom',()=>{
    const props = { auto: []}

    const auto = shallow( <AutoCom {...props} />)

    it('renders without crashing', () => {
        expect(auto).toMatchSnapshot();
    });
      
})
