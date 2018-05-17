import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import set from '../enzyme_set_up';
import { MapContainer } from './MapContainer';

describe('MapContainer',()=>{
    const props = {lat: 51, lng: 16}
    const us = shallow( <MapContainer {...props} /> )

    it('renders without crashing', () => {
        expect(us).toMatchSnapshot();
    });
      
})
