import  React  from 'react';
import set from '../enzyme_set_up';
import  { Table }  from './Table';
import { shallow, mount } from 'enzyme';


describe('Table', () => {
    const props = {type: "today", table: []}
    props.table = [
        {
            description:"clear sky",
            humidity:45,
            icon:"01d",
            id:800,
            main:"Clear",
            name:"2018-05-07 18:00:00",
            temp:294.31
        },
        {
            description:"clear sky",
            humidity:45,
            icon:"01d",
            id:800,
            main:"Clear",
            name:"2018-05-07 18:00:00",
            temp:294.31
        },
    ]
    const table = shallow(<Table {...props} />)
    it('should render properly', () => {
        expect(table).toMatchSnapshot()
    });

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
        expect(table.find('.title').text()).toEqual('FORECAST FOR')
    });

    it('should have length of form rows as passed arr', () => {
        expect(table.find('.tbody-class').find('tr').length).toEqual(2)
    });
});
