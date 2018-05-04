import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather, fetchUser, fetchForecast }  from '../actions/index';
import { Table } from '../containers/Table';


export class Current extends Component {
    state = {
        search:""
    }

    componentDidMount() {
            this.props.fetchUser()
        }

    inputChange = (e) =>{
        this.setState({
            search: e.target.value
        })
       
        if( this.props.cords !== undefined ){
            const cord = this.props.cords;
            this.props.fetchForecast(cord)
            this.props.fetchWeather(cord);
        } 
    }

    
    render() {
        console.log(this.props)
        return (
            <div className="mt-5">
                <form action="submit ">
                    <input
                        value={this.state.search}
                        onChange={this.inputChange}
                        type="text" 
                        className='search-fetch form-control'/>
                </form>
                <div className='current-weather'>
                    <Table type="today" table={this.props.today}/>
                    <Table type="forecast" table={this.props.weather}/>
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

export default connect( state => ({...state}) , { fetchWeather, fetchUser, fetchForecast } )(Current);
