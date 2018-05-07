import React from 'react';
import { Current } from './Current'
import set from '../enzyme_set_up';
import { shallow, mount } from 'enzyme';
import { fetchWeather, fetchUser, fetchForecast } from '../actions/index';



describe('Current', () => {
    const mockfetchWeather = jest.fn(() => { props.weather = [1, 2, 3] })
    const mockfetchUser = jest.fn(() => { props.cords = { cords: "cor" } })
    const mockfetchForecast = jest.fn();

    const props = { today: [], weather: [], cords: {}, fetchUser: mockfetchUser, fetchForecast: mockfetchForecast, fetchWeather: mockfetchWeather }

    //USE MOUNT TO TEST PROPS VALUES AND CHANGES
    const current = shallow(<Current {...props} />)

    it('renders without crashing', () => {
        expect(current).toMatchSnapshot();
    });

    it('should have initial empty state ', function () {
        const bar = current.find('.search-fetch');
        expect(current.state().search).toEqual("");
    });

    it('should have input search bar that sets state ', function () {
        const bar = current.find('.search-fetch');
        bar.simulate('change', { target: { value: "Lond" } })
        expect(current.state().search).toEqual("Lond");
    });

    //NOT NECESSARY => just other way than above
    it('should call inputChage method and c', () => {
        current.instance().inputChange({ target: { value: "Lod" } })
        expect(current.state().search).toEqual("Lod");
    });

    describe('Mount Current', () => {
        //NOT NECESSARY LEFT FOR FUTURE 
        const methodNameFake = jest.spyOn(Current.prototype, 'componentDidMount');

        const mountCurr = mount(<Current {...props} />)

        //NOT NESESERY LEFT FOR FUTURE 
        it('should have and called CDM method', () => {
            expect(methodNameFake).toHaveBeenCalled();
        });

        it('should call fetchUser prop once', () => {
            expect(mountCurr.props().fetchUser).toHaveBeenCalled();
        });

        it('fetchUser should update props', () => {
            expect(mountCurr.props().cords).not.toEqual({})
        });

        // it('should have table showing current weather', () => {
        //     mountCurr.setState({
        //         showTable: true
        //     })
        //     expect(mountCurr.find('.current-weather').children().length).toEqual(1)
        // });

        it('should not show table when showTable state falase', () => {

            mountCurr.setState({
                showTable: false
            })
            expect(mountCurr.find('.current-weather').children().length).toEqual(0)
        });

        // it('should set state show table to true when today prop length > 0', async () => {
        //     expect.assertions(3); //await for expect
        //     mountCurr.instance().setAll = jest.fn(
        //             () => {
        //             mountCurr.setState({
        //                 showTable: mountCurr.props().weather.length > 0 ? true : false
        //             })
        //         }
        //     )
        //     mountCurr.setProps({
        //         weather: [1, 2, 3]
        //     })
        //     mountCurr.update()//

        //     await mountCurr.instance().setAll()

        //    await expect(mountCurr.state().showTable).toBe(true)
        //     await expect(mountCurr.instance().setAll).toHaveBeenCalledTimes(1); //should be 2 ? on render
        //     await expect(mountCurr.find('.current-weather').children().length).toEqual(1)
        // });

        // it(' when today prop length === 0', async () => {
        //     expect.assertions(2); //await for expect
        //     mountCurr.setState({ showTable: false })
        //     mountCurr.instance().setAll = jest.fn(
        //         () => {
        //         mountCurr.setState({
        //             showTable: mountCurr.props().weather.length > 0 ? true : false
        //         })
        //     }
        // )
        //     mountCurr.setProps({
        //         weather: []
        //     })
        //     mountCurr.update()

        //     await mountCurr.instance().setAll()
        //    await expect(mountCurr.state().showTable).toBe(false)
        //    await expect(mountCurr.find('.current-weather').children().length).toEqual(0)
        // });
    });
})



