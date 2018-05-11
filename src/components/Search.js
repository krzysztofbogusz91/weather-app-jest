import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather,fetchForecast } from '../actions/index';
import { Table } from '../containers/Table';

//TODO 
//-- Add error handling in acitions or reducers? when code i 404

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            renderTable: false,
        }
    }

    inputChange = (e) => {
        //ADD INPUT VALIDATATION AND TESTS
        this.setState({
            search: e.target.value,
            renderTable: false
        })
    }

    buttonOnClick = (e) =>{
        //ADD SUBMIT VALIDATION AND TESTS
        e.preventDefault()
        const cord = this.state.search;
        this.props.fetchForecast(cord)
        this.props.fetchWeather(cord);
        this.setState({
            renderTable: true
        })
    }
    
    render() {
       console.log(this.props)
        const renderTable = this.state.renderTable;

        return (
            <div className="mt-5">
                <form action="submit">
                    <input
                        value={this.state.search}
                        onChange={this.inputChange}
                        type="text"
                        className='search-fetch form-control' />
                        
                        <button type="submit" className="mt-2 btn btn-info form-control search" onClick={this.buttonOnClick}>
                            Search
                        </button>
                </ form>

                <div className='current-weather'>
                    {renderTable ? 
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

Search.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    fetchForecast: PropTypes.func.isRequired,
    today: PropTypes.any,
    weather: PropTypes.any,
    cords: PropTypes.any,
};

Search.defaultProps = {
    today: [],
    weather: [],
    cords: {},
}

export default connect(state => ({ ...state }), { fetchWeather, fetchForecast })(Search);
