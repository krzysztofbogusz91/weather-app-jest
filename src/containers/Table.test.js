import  React  from 'react';
import set from '../enzyme_set_up';
import  { Table }  from './Table';
import { shallow, mount } from 'enzyme';


describe('Table', () => {
    const props = {type: "today", table: []}
    const table = shallow(<Table {...props} />)
    // it('should render properly', () => {
    //     expect(table).toMatchSnapshot()
    // });

    it('should display title current weatcher', () => {
        table.setProps({
            type: "today"
        })
        expect(table.find('.title').text()).toEqual('CURRENT WEATHER')
    });
    
    it('should display title current weatcher', () => {
        table.setProps({
            type: "forecast"
        })
        expect(table.find('.title').text()).toEqual('FORECAST FOR ')
    });
});
