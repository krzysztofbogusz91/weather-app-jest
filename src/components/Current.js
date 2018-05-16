import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather, fetchUser, fetchForecast, clearFetch } from '../actions/index';
import { Table } from '../containers/Table';



export class Current extends Component {  
    setAll = async () => {
        //TODO ADD ERROR HANDLING ON FETCH METHODS => AVOID ERRORS IN THE CONSOLE 
        await this.props.fetchUser();
        const cord = this.props.cords;
        await this.props.fetchForecast(cord);
        await this.props.fetchWeather(cord);
    }


    componentDidMount() {
        this.setAll()
      
        //TODO RELOAD EVERY 10 minutes? and store it all in Local storage?
        // this.time = setTimeout(()=>{
        //     this.setAll()
        //     console.log('reload'); 
        // },2000)
    }
    componentWillUnmount() {
       
        this.props.clearFetch();
    }
    render() {
       //console.log(this.props)
        const renderTable = this.props.weather.length > 0 && this.props.today.length > 0;

        return (
            <div className="mt-5">
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

export default connect(state => ({ ...state }), { fetchWeather, fetchUser, fetchForecast,clearFetch })(Current);
