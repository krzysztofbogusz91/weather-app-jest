import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather, fetchUser, fetchForecast, clearFetch, pendingFetch } from '../actions/index';
import { Table } from '../containers/Table';
import MapContainer from "./MapContainer";
import { Loader } from './../containers/Loader';



export class Current extends Component {  
    setAll = async () => {
        this.props.pendingFetch()

        await this.props.fetchUser();
        const cord = this.props.cords;
        await this.props.fetchForecast(cord);
        await this.props.fetchWeather(cord);
   
    }


    componentDidMount() {
        this.setAll()
      
        //TODO RELOAD EVERY 10 minutes
        // this.time = setTimeout(()=>{
        //     this.setAll()
        //     console.log('reload'); 
        // },2000)
    }
    componentWillUnmount() {
        this.props.clearFetch();
    }

    //TODO MAP RENDER ON FIRST QUERY ISSUE WHEN AFTER TERNARY EXP
    render() {
        const renderTable = this.props.weather.length > 0 && this.props.today.length > 0 && !this.props.isLoading;
        const lat = this.props.cords.lat;
        const lng = this.props.cords.lng;
        return (
            <div className="mt-5">
                <div className='current-weather'>
                <MapContainer lat={lat} lng={lng} />
                {this.props.isLoading ? <Loader /> : null} 
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

export default connect(state => ({ ...state }), { fetchWeather, fetchUser, fetchForecast,clearFetch, pendingFetch })(Current);
