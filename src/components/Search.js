import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather,fetchForecast, clearFetch, pendingFetch } from '../actions/index';
import { Table } from '../containers/Table';
import { ErrorComponent } from '../containers/ErrorComponent'
import MapContainer from "./MapContainer";
import { Loader } from '../containers/Loader';
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
        })

        this.state.search = "" ? this.setState({ renderTable:false }) : null
        
    }

    buttonOnClick = (e) =>{
        
        //ADD SUBMIT VALIDATION AND TESTS
        e.preventDefault()

        //Show loader when data is pending
        this.props.pendingFetch()

        const cord = this.state.search;
    
        this.props.fetchForecast(cord);
        this.props.fetchWeather(cord);
        
        this.setState({
            renderTable: true,
        })
    }

    componentWillUnmount() {
        //prevent issue of data disply afeter route change
        this.props.clearFetch();
    }
    
    render() {
        const renderTable = this.state.renderTable && !this.props.isLoading;
        const coord = this.props.today.length > 0 && this.props.today[0].coord
        const lat = coord ? this.props.today[0].coord.lat : 0;
        const lon = coord ? this.props.today[0].coord.lon : 0;
        console.log(this.props)
        console.log(this.props.isLoading)
        //TODO MAP RENDER ON FIRST QUERY ISSUE
        //TODO => WHEN TYPING IN INPUT SHOW TOOLTIP ASKING TO PASS COUNTRY CODE AFTER COMA, or even on clik pass chosen one
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

                <div className='current-weather mt-3'>
                    { this.props.isLoading ? <Loader /> : null}
                    {renderTable && this.props.error ? <ErrorComponent /> : null}
                    {renderTable && !this.props.error ? 
                        <div>
                        <MapContainer lat={lat} lng={lon} />    
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

export default connect(state => ({ ...state }), { fetchWeather, fetchForecast, clearFetch, pendingFetch })(Search);
