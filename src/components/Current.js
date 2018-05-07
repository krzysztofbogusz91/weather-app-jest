import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather, fetchUser, fetchForecast } from '../actions/index';
import { Table } from '../containers/Table';


export class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            showTable: false
        }

    }

    setAll = async () => {
        await this.props.fetchUser()
        const cord = this.props.cords;
        await this.props.fetchForecast(cord)
        await this.props.fetchWeather(cord);
        this.setState({
            showTable: this.props.weather.length > 0 ? true : false
        })

    }


    componentDidMount() {
        this.setAll()

    }

    inputChange = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    tables() {
       const weather = this.props.today.weather[0]
       weather.name = this.props.today.name;
       weather.temp = this.props.today.main.temp
       weather.humidity = this.props.today.main.humidity 
       
       const forecast = this.props.weather.map(a =>{
        const weat = a.weather[0];
        weat.name = a.dt_txt;
        weat.temp = a.main.temp
        weat.humidity = a.main.humidity
        return weat 
       })
       console.log(forecast)
        return (
            <div>
                <Table type="today" table={[weather]} />
                <Table type="forecast" table={forecast}/>
            </div>
        )
    }

    render() {
        console.log(this.props)
        //  console.log(this.state.showTable)


        return (
            <div className="mt-5">
                <form action="submit ">
                    <input
                        value={this.state.search}
                        onChange={this.inputChange}
                        type="text"
                        className='search-fetch form-control' />
                </form>
                <div className='current-weather'>
                    {this.state.showTable ? this.tables() : null}
                </div>
            </div>
        );
    }
}

Current.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchForecast: PropTypes.func.isRequired,
    today: PropTypes.any,
    weather: PropTypes.any,
    cords: PropTypes.any,
};

Current.defaultProps = {
    today: [],
    weather: [],
    cords: {},
}

export default connect(state => ({ ...state }), { fetchWeather, fetchUser, fetchForecast })(Current);
