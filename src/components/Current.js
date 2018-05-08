import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather, fetchUser, fetchForecast } from '../actions/index';
import { Table } from '../containers/Table';


export class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    setAll = async () => {
        await this.props.fetchUser()
        const cord = this.props.cords;
        await this.props.fetchForecast(cord)
        await this.props.fetchWeather(cord);
    }


    componentDidMount() {
        this.setAll()
      
        //RELOAD EVERY 10 minutes? and store it all in Local storage?
        // this.time = setTimeout(()=>{
        //     this.setAll();
        //     console.log('reload'); 
        // },2000)
    }


    inputChange = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    render() {
       //console.log(this.props)

        const length = this.props.weather.length > 0 && this.props.today.length > 0;
        //console.log(length)

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
                    {length ? 
                        <div>
                        <Table 
                            type="today" 
                            table={this.props.today} />
                        <Table 
                            type="forecast" 
                            table={this.props.weather}/>
                        </div>
                        : null}
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
